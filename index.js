


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
function loadHome()
{
  load();
  xmlhttp.open("GET","html/home.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/home_list.html",true);
  xmlhttp2.send();
}
function loadNote()
{
  load();
  xmlhttp.open("GET","html/note/note.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/note/note_list.html",true);
  xmlhttp2.send();
}

function loadNoteWeb()
{
  load();
  xmlhttp.open("GET","html/note/noteWeb.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/note/note_list.html",true);
  xmlhttp2.send();
}

function loadNoteProblem()
{
  load();
  xmlhttp.open("GET","html/note/noteProblem.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/note/note_list.html",true);
  xmlhttp2.send();
}

function loadNoteBoard()
{
  load();
  xmlhttp.open("GET","html/note/noteBoard.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/note/note_list.html",true);
  xmlhttp2.send();
}





function loadNoteDaily()
{
  load();
  xmlhttp.open("GET","html/note/noteDaily.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/note/note_list.html",true);
  xmlhttp2.send();
}


function loadConnect()
{
  load();
  xmlhttp.open("GET","html/connect.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/connect_list.html",true);
  xmlhttp2.send();
}
function loadReward()
{
  load();
  xmlhttp.open("GET","html/reward.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/reward_list.html",true);
  xmlhttp2.send();
}

function loadWeek1()
{
  load();
  xmlhttp.open("GET","html/week1.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/week1_list.html",true);
  xmlhttp2.send();
}
function loadWeek2()
{
  load();
  xmlhttp.open("GET","html/week2.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/week2_list.html",true);
  xmlhttp2.send();
}  
function loadWeek3()
{
  load();
  xmlhttp.open("GET","html/week3.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/week3_list.html",true);
  xmlhttp2.send();
}
function loadWeek4()
{
  load();
  xmlhttp.open("GET","html/week4.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/week4_list.html",true);
  xmlhttp2.send();
}

function loadCF1820()
{
  load();
  xmlhttp.open("GET","html/cf1820.html",true);
  xmlhttp.send();
  
  xmlhttp2.open("GET","html/cf1820_list.html",true);
  xmlhttp2.send();
}

function loadABC301()
{
  load();
  xmlhttp.open("GET","html/ABC301.html",true);
  xmlhttp.send();
  
  xmlhttp2.open("GET","html/ABC301_list.html",true);
  xmlhttp2.send();
}

function loadBoardGraph()
{
  load();
  xmlhttp.open("GET","html/board_Graph.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/board_Graph_list.html",true);
  xmlhttp2.send();
}


function loadHZNUOJ()
{
  window.open("https://acm.hznu.edu.cn/OJ/userinfo.php?user=2021212205006");
} 
function loadCF()
{
  window.open("https://codeforces.com/");
}
function loadVJ()
{
  window.open("https://vjudge.net/group/hznuacm21");
}
function loadLuogu()
{
  window.open("https://www.luogu.com.cn/");
}     
function loadAT()
{
  window.open("https://atcoder.jp/");
}     
function loadGE()
{
  window.open("https://csacademy.com/app/graph_editor/");
}     
function loadQuanta()
{
  window.open("https://mooc.hznu.edu.cn/#/");
}

function loadGithub()
{
  window.open("https://github.com/xyzyx0314");
}
function load404()
{
  load();
  xmlhttp.open("GET","html/404.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/home_list.html",true);
  xmlhttp2.send();
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


function open1() {
  var x=document.getElementById("lt-img1");
  if (x.src.match("img/left.svg"))
  {
    x.src = 'img/open.svg';
  }
  else 
  {
    x.src = "img/left.svg";
  }
}
function open2() {
  var x=document.getElementById("lt-img2");
  if (x.src.match("img/left.svg"))
  {
    x.src = 'img/open.svg';
  }
  else 
  {
    x.src = "img/left.svg";
  }
}
function open3() {
  var x=document.getElementById("lt-img3");
  if (x.src.match("img/left.svg"))
  {
    x.src = 'img/open.svg';
  }
  else 
  {
    x.src = "img/left.svg";
  }
}
function open4() {
  var x=document.getElementById("lt-img4");
  if (x.src.match("img/left.svg"))
  {
    x.src = 'img/open.svg';
  }
  else 
  {
    x.src = "img/left.svg";
  }
}
function open5() {
  var x=document.getElementById("lt-img5");
  if (x.src.match("img/left.svg"))
  {
    x.src = 'img/open.svg';
  }
  else 
  {
    x.src = "img/left.svg";
  }
}
function open6() {
  var x=document.getElementById("lt-img6");
  if (x.src.match("img/left.svg"))
  {
    x.src = 'img/open.svg';
  }
  else 
  {
    x.src = "img/left.svg";
  }
}

window.onhashchange=function(event){
  var url = window.location.href;
  // 去掉hash部分
  var newUrl = url.split("#")[0];
  console.log(newUrl);
  // 修改url
  history.pushState(null, null, newUrl);
}