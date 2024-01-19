#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <strings.h>
#include <netdb.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <limits.h>
#include <sys/stat.h>
#include <sys/mman.h>
#include <stdio.h>
#include <errno.h>
#include <string.h>
#include <fcntl.h>  
#include <sys/wait.h>
#define LISTENQ  1024  /* second argument to listen() */
#define	MAXLINE	 8192  /* max text line length */
#define MAXBUF   8192  /* max I/O buffer size */
/* External variables */
extern int h_errno;    /* defined by BIND for DNS errors */ 
extern char **environ; /* defined by libc */

/* $begin rio_t */
#define RIO_BUFSIZE 8192 
typedef struct {   
	int rio_fd;                /* descriptor for this internal buf */ 
	int rio_cnt;               /* unread bytes in internal buf */ 
	char *rio_bufptr;          /* next unread byte in internal buf */ 
	char rio_buf[RIO_BUFSIZE]; /* internal buffer */   
} rio_t; 
typedef struct sockaddr SA;
/* $end rio_t */  
void process_trans(int fd);
void read_requesthdrs(rio_t *rp);
int  is_static(char *uri);
struct sockaddr_in clientaddr; 
void parse_static_uri(char *uri, char *filename);
void parse_dynamic_uri(char *uri, char *filename, char *cgiargs);
void feed_static(int fd, char *filename, int filesize);
void get_filetype(char *filename, char *filetype);
void feed_dynamic(int fd, char *filename, char *cgiargs);
void error_request(int fd, char *cause, char *errnum, 
		 char *shortmsg, char *description);

void rio_readinitb(rio_t *rp,int fd)
{
	rp->rio_fd=fd;
	rp->rio_cnt=0;
	rp->rio_bufptr=rp->rio_buf;
}

static ssize_t rio_read(rio_t *rp,char *usrbuf,size_t n)    
{
	int cnt;
	while (rp->rio_cnt<=0){     
		rp->rio_cnt=read(rp->rio_fd,rp->rio_buf,sizeof(rp->rio_buf)); 
		if(rp->rio_cnt<0){   
			if(errno!=EINTR)
				return -1;      
		}     
		else if(rp->rio_cnt==0) 
			return 0;    
		else   
			rp->rio_bufptr=rp->rio_buf;  
	}  
	cnt=n; 
	if(rp->rio_cnt<n)
		cnt=rp->rio_cnt;
	memcpy(usrbuf,rp->rio_bufptr,cnt); 
	rp->rio_bufptr+=cnt;  
	rp->rio_cnt=cnt;
	
 	return cnt; 
}    

ssize_t rio_readlineb(rio_t *rp,void *usrbuf, size_t maxlen)
{
	int n,rc;
	char c, *bufp=usrbuf;

	for(n=1;n<maxlen;n++){
		if((rc=rio_read(rp,&c,1))==1){
			*bufp++=c;
			if(c=='\n')
				break;
		}else if(rc==0){
			if(n==1)
				return 0;
			else
				break;
		}else
			return -1;
	}
	*bufp=0;
	return n;
}

ssize_t rio_writen(int fd,void *usrbuf,size_t n)
{
	size_t nleft=n;
	ssize_t nwritten;
	char *bufp=usrbuf;

	while(nleft>0){
		if((nwritten=write(fd,bufp,nleft))<=0){
			if(errno==EINTR)
				nwritten=0;
			else
				return -1;
		}
		nleft=nwritten;
		bufp+=nwritten;
	}
	return n;
}
int open_listen_sock(int port)  
{ 
	int listen_sock,optval=1; 
	struct sockaddr_in serveraddr;    
	if((listen_sock=socket(AF_INET,SOCK_STREAM,0))<0)  
		return -1;
	if(setsockopt(listen_sock,SOL_SOCKET,SO_REUSEADDR,(const void*)&optval,sizeof(int))<0) 
		return -1; 
	bzero((char *)&serveraddr,sizeof(serveraddr)); 
	serveraddr.sin_family=AF_INET;   
	serveraddr.sin_addr.s_addr=htonl(INADDR_ANY);   
	serveraddr.sin_port=htons((unsigned short)port);        
	if(bind(listen_sock,(SA *)&serveraddr,sizeof(serveraddr))<0)
		return -1;    
	if(listen(listen_sock,LISTENQ)<0)  
		return -1;    
	return listen_sock;    
}
int main(int argc, char **argv) 
{
	int listen_sock, conn_sock, clientlen,port;
	if (argc != 2) {
		fprintf(stderr, "usage: %s <port>\n", argv[0]);
		exit(1);
       	}
	port = atoi(argv[1]);
    	listen_sock = open_listen_sock(port);
	while (1) {
	    	clientlen = sizeof(clientaddr);
		conn_sock = accept(listen_sock, (SA *)&clientaddr, &clientlen);
		process_trans(conn_sock);          /* process HTTP transac*/
		close(conn_sock);
	}
}


void process_trans(int fd) 
{
	int static_flag;
	struct stat sbuf;
	char buf[MAXLINE], method[MAXLINE], uri[MAXLINE], version[MAXLINE];
	char filename[MAXLINE], cgiargs[MAXLINE];
	rio_t rio;
	rio_readinitb(&rio, fd);
	rio_readlineb(&rio, buf, MAXLINE);
	sscanf(buf, "%s %s %s", method, uri, version);
	if (strcasecmp(method, "GET")) { 
		error_request(fd, method, "501", "Not Implemented",
                "weblet does not implement this method");
		return;
       	}
	read_requesthdrs(&rio);
	static_flag=is_static(uri);
	if(static_flag)
		parse_static_uri(uri, filename);
	else
		parse_dynamic_uri(uri, filename, cgiargs);
	if (stat(filename, &sbuf) < 0) {
		error_request(fd, filename, "404", "Not found",
		    "weblet could not find this file");
		return;
       	}
	if (static_flag) { /* feed static content */
		if (!(S_ISREG(sbuf.st_mode)) || !(S_IRUSR & sbuf.st_mode)){
			error_request(fd, filename, "403", "Forbidden",
			    "weblet is not permtted to read the file");
			return;
	       	}
		feed_static(fd, filename, sbuf.st_size);
       	}
    else { /* feed dynamic content */
	    if (!(S_ISREG(sbuf.st_mode)) || !(S_IXUSR & sbuf.st_mode)) {
	        error_request(fd, filename, "403", "Forbidden",
			"weblet could not run the CGI program");
	        return;
	    }
	    feed_dynamic(fd, filename, cgiargs);
    }
}

int is_static(char *uri)
{
    if (!strstr(uri, "cgi-bin"))
        return 1;
    else 
        return 0;
}

void error_request(int fd, char *cause, char *errnum, 
		 char *shortmsg, char *description) 
{
    char buf[MAXLINE], body[MAXBUF];

    /* Build the HTTP response body */
    sprintf(body, "<html><title>error request</title>");
    sprintf(body, "%s<body bgcolor=""ffffff"">\r\n", body);
    sprintf(body, "%s%s: %s\r\n", body, errnum, shortmsg);
    sprintf(body, "%s<p>%s: %s\r\n", body, description, cause);
    sprintf(body, "%s<hr><em> weblet Web server</em>\r\n", body);

    /* send the HTTP response */ 
    sprintf(buf, "HTTP/1.0 %s %s\r\n", errnum, shortmsg);
    rio_writen(fd, buf, strlen(buf));
    sprintf(buf, "Content-type: text/html\r\n");
    rio_writen(fd, buf, strlen(buf));
    sprintf(buf, "Content-length: %d\r\n\r\n", (int)strlen(body));
    rio_writen(fd, buf, strlen(buf));
    rio_writen(fd, body, strlen(body));
}


void read_requesthdrs(rio_t *rp) 
{
    char buf[MAXLINE];

    rio_readlineb(rp, buf, MAXLINE);
    while(strcmp(buf, "\r\n")) {
	    printf("%s", buf);
	    rio_readlineb(rp, buf, MAXLINE);
    }
    return;
}

void parse_static_uri(char *uri, char *filename) 
{
    char *ptr;
 //   strcpy(cgiargs, "");
   strcpy(filename, ".");
   strcat(filename, uri);
    if (uri[strlen(uri)-1] == '/')
        strcat(filename, "home.html");
}

void parse_dynamic_uri(char *uri, char *filename, char *cgiargs)
{
    char *ptr;
    ptr = index(uri, '?');
    if (ptr) {
	strcpy(cgiargs, ptr+1);
	*ptr = '\0';
    }
    else 
	strcpy(cgiargs, "");
    strcpy(filename, ".");
    strcat(filename, uri);
}

void feed_static(int fd, char *filename, int filesize) 
{	
    int srcfd; 
    char *srcp, filetype[MAXLINE], buf[MAXBUF];

    /* Send response headers to client */
    get_filetype(filename, filetype);
    sprintf(buf, "HTTP/1.0 200 OK\r\n");
    sprintf(buf, "%sServer: weblet Web Server\r\n", buf);
    sprintf(buf, "%sContent-length: %d\r\n", buf, filesize);
    sprintf(buf, "%sContent-type: %s\r\n\r\n", buf, filetype);
    rio_writen(fd, buf, strlen(buf));

    /* Send response body to client */
    srcfd = open(filename, O_RDONLY, 0);
    srcp = mmap(0, filesize, PROT_READ, MAP_PRIVATE, srcfd, 0);
    close(srcfd);
    rio_writen(fd, srcp, filesize);
    munmap(srcp, filesize);
}

/* get_filetype - derive file type from file name */
void get_filetype(char *filename, char *filetype) 
{
    if (strstr(filename, ".html"))
	    strcpy(filetype, "text/html");
    else if (strstr(filename, ".jpg"))
	    strcpy(filetype, "image/jpeg");
    else if (strstr(filename, ".mpeg"))
        strcpy(filename, "video/mpeg");
    else     
        strcpy(filetype, "text/html");
}  

void feed_dynamic(int fd, char *filename, char *cgiargs) 
{
    char buf[MAXLINE], *emptylist[] = { NULL };
    int pfd[2];

    /* Return first part of HTTP response */
    sprintf(buf, "HTTP/1.0 200 OK\r\n");
    rio_writen(fd, buf, strlen(buf));
    sprintf(buf, "Server: weblet Web Server\r\n");
    rio_writen(fd, buf, strlen(buf));
 
    pipe(pfd);
    if (fork() == 0) {             /* child */
	close(pfd[1]);
        dup2(pfd[0],STDIN_FILENO);
	dup2(fd, STDOUT_FILENO);         /* Redirect stdout to client */
	execve(filename, emptylist, environ);    /* Run CGI program */
    }

    close(pfd[0]);
    write(pfd[1], cgiargs, strlen(cgiargs)+1);
    wait(NULL);                          /* Parent waits for and reaps child */
    close(pfd[1]);
}