function totInit() {
    // 获取 img 元素
    let img1 = document.querySelector(".md-bt-map img");
    // 获取 img 元素的 src 属性
    let src1 = img1.getAttribute("src");
    // 判断 src 的值，如果是 map1.svg，就切换为 map2.svg，反之亦然
    if (src1 == "img/map2.svg") {
      img1.setAttribute("src", "img/map1.svg");
      var div = document.querySelector(".md-bt-font1");
      div.style.color = "var(--color1)";
    }

    let img2 = document.querySelector(".md-bt-weather img");
    // 获取 img 元素的 src 属性
    let src2 = img2.getAttribute("src");
    // 判断 src 的值，如果是 map1.svg，就切换为 map2.svg，反之亦然
    if (src2 == "img/weather2.svg") {
      img2.setAttribute("src", "img/weather1.svg");
      var div = document.querySelector(".md-bt-font2");
      div.style.color = "var(--color1)";
    }

    let img3 = document.querySelector(".md-bt-history img");
    // 获取 img 元素的 src 属性
    let src3 = img3.getAttribute("src");
    // 判断 src 的值，如果是 map1.svg，就切换为 map2.svg，反之亦然
    if (src3 == "img/history2.svg") {
      img3.setAttribute("src", "img/history1.svg");
      var div = document.querySelector(".md-bt-font3");
      div.style.color = "var(--color1)";
    }
    
    let img4 = document.querySelector(".md-bt-setting img");
    // 获取 img 元素的 src 属性
    let src4 = img4.getAttribute("src");
    // 判断 src 的值，如果是 map1.svg，就切换为 map2.svg，反之亦然
    if (src4 == "img/setting2.svg") {
      img4.setAttribute("src", "img/setting1.svg");
      var div = document.querySelector(".md-bt-font4");
      div.style.color = "var(--color1)";
    }
}

var xmlhttp,xmlhttp2;

function load(){
  document.getElementById('m-md-top').scrollTop=0;
  if (window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById("p-page").innerHTML=xmlhttp.responseText;
      hljs.initHighlightingOnLoad();
    }
  }
}





function loadmap() {
  window.location.href = "leaflet-owm.html";
  totInit();
  // 获取 img 元素
  let img = document.querySelector(".md-bt-map img");
  // 获取 img 元素的 src 属性
  let src = img.getAttribute("src");
  // 判断 src 的值，如果是 map1.svg，就切换为 map2.svg，反之亦然
  if (src == "img/map1.svg") {
    img.setAttribute("src", "img/map2.svg");
    var div = document.querySelector(".md-bt-font1");
    div.style.color = "var(--color2)";
  }
}
function weather() {
  load();
  xmlhttp.open("GET","html/weather.html",true);
  xmlhttp.send();
  totInit();
  // 获取 img 元素
  let img = document.querySelector(".md-bt-weather img");
  // 获取 img 元素的 src 属性
  let src = img.getAttribute("src");
  // 判断 src 的值，如果是 weather1.svg，就切换为 weather2.svg，反之亦然
  if (src == "img/weather1.svg") {
    img.setAttribute("src", "img/weather2.svg");
    var div = document.querySelector(".md-bt-font2");
    div.style.color = "var(--color2)";
  }
}
function history() {
  load();
  alert("asd");
  xmlhttp.open("GET","https://m.amap.com/navi/?dest=116.470098,39.992838&destName=%E9%98%9C%E9%80%9A%E8%A5%BF&hideRouteIcon=1&key=b556f62b89a6b24871453d90532cbc16",true);
  // xmlhttp.open("GET","html/history.html",true);
  xmlhttp.send();
  // totInit();
  // // 获取 img 元素
  // let img = document.querySelector(".md-bt-history img");
  // // 获取 img 元素的 src 属性
  // let src = img.getAttribute("src");
  // // 判断 src 的值，如果是 history1.svg，就切换为 history2.svg，反之亦然
  // if (src == "img/history1.svg") {
  //   img.setAttribute("src", "img/history2.svg");
  //   var div = document.querySelector(".md-bt-font3");
  //   div.style.color = "var(--color2)";
  // }
}




function loadsetting() {
  window.location.href = "setting.html";
  totInit();
  // 获取 img 元素
  let img = document.querySelector(".md-bt-map img");
  // 获取 img 元素的 src 属性
  let src = img.getAttribute("src");
  // 判断 src 的值，如果是 map1.svg，就切换为 map2.svg，反之亦然
  if (src == "img/map1.svg") {
    img.setAttribute("src", "img/map2.svg");
    var div = document.querySelector(".md-bt-font1");
    div.style.color = "var(--color2)";
  }
  
  // 调用加载图片的函数
  loadImage();
}