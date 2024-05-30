
var btn = document.getElementById("btn");
var fnight=0;
function night() {
  if (fnight==0){    
    document.documentElement.style.setProperty("--color1", "rgb(44, 48, 83)");
    document.documentElement.style.setProperty("--color2", "rgba(32, 35, 62, 0.8)");
    document.documentElement.style.setProperty("--color3", "rgb(32, 35, 62)");
    document.documentElement.style.setProperty("--color4", "#000000ef");
    document.documentElement.style.setProperty("--color5", "rgb(183, 189, 250)");
    document.documentElement.style.setProperty("--color6", "#5f90da");
    fnight=1;
  }
  else{
    document.documentElement.style.setProperty("--color1", "#FAFAFA");
    document.documentElement.style.setProperty("--color2", "rgba(255, 255, 255, 0.1)");
    document.documentElement.style.setProperty("--color3", "#f0f0f7");
    document.documentElement.style.setProperty("--color4", "#888888ef");
    document.documentElement.style.setProperty("--color5", "#000000");
    document.documentElement.style.setProperty("--color6", "#335a94");
    fnight=0;
  }
};

var xmlhttp,xmlhttp2;

function load(){
  document.getElementById('m-md-top').scrollTop=0;
  if (window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
    xmlhttp2=new XMLHttpRequest();
  }
  else
  {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById("p-page").innerHTML=xmlhttp.responseText;
      hljs.initHighlightingOnLoad();

    }
  }
  xmlhttp2.onreadystatechange=function()
  {
    if (xmlhttp2.readyState==4 && xmlhttp2.status==200)
    {
      document.getElementById("p-list").innerHTML=xmlhttp2.responseText;
      hljs.initHighlightingOnLoad();

    }
  }
}
/*载入对应*/

function loadPage(pageId) {
  load();
  xmlhttp.open("GET", "html/" + pageId + ".html", true);
  xmlhttp.send();
  xmlhttp2.open("GET", "html/" + pageId + "_list.html", true);
  xmlhttp2.send();
}

function loadNote(noteId) {
  load();
  xmlhttp.open("GET", "html/note/note" + noteId + ".html", true);
  xmlhttp.send();
  xmlhttp2.open("GET", "html/note_list.html", true);
  xmlhttp2.send();
}

function loadWeek(weekId) {
  load();
  xmlhttp.open("GET", "html/blog/week" + weekId + ".html", true);
  xmlhttp.send();
  xmlhttp2.open("GET", "html/blog/week" + weekId + "_list.html", true);
  xmlhttp2.send();
}

function loadXL(acmId) {
  load();
  xmlhttp.open("GET", "html/acm/" + acmId + ".html", true);
  xmlhttp.send();
  xmlhttp2.open("GET", "html/acm/" + acmId + "_list.html", true);
  xmlhttp2.send();
}

function loadGithub()
{
  window.open("https://github.com/xyzyx0314");
}

function locked(){
  document.getElementById('lockscreen').style.display = 'flex';
  document.getElementById('m-top').style.display='none';
  document.getElementById('m-lt').style.display='none';
  document.getElementById('m-md').style.display='none';
  document.getElementById('m-rt').style.display = 'none';
  document.getElementById('m-rtbt').style.display='none';
}
function openblog(){
  document.getElementById('lockscreen').style.display='none';
  document.getElementById('m-top').style.display='block';
  document.getElementById('m-lt').style.display='block';
  document.getElementById('m-md').style.display='block';
  document.getElementById('m-rt').style.display = 'block';
  document.getElementById('m-rtbt').style.display='block';
}

function toggleImage(imageId) {
  var x = document.getElementById(imageId);
  x.src = x.src.match("img/left.svg") ? 'img/open.svg' : "img/left.svg";
}


window.onhashchange=function(event){
  var url = window.location.href;
  // 去掉hash部分
  var newUrl = url.split("#")[0];
  console.log(newUrl);
  // 修改url
  history.pushState(null, null, newUrl);
}