
function totInit() {

  var map = document.getElementById("map");
  var mapset = document.getElementById("map-mapset");
  var weather = document.getElementById("weather");
  var weatherset = document.getElementById("weather-weatherset");
  var weathertoday = document.getElementById("weather-today");
  var weatherbing = document.getElementById("weather-bing");

  var history = document.getElementById("history");
  var historyset = document.getElementById("history-historyset");

  var setting = document.getElementById("setting");
  var settingset = document.getElementById("setting-settingset");

  //所有元素
  map.style.display = "none";
  mapset.style.display = "none";

  weather.style.display = "none";
  weatherset.style.display = "none";
  weathertoday.style.display = "none";
  weatherbing.style.display = "none";

  history.style.display = "none";
  historyset.style.display = "none";
  
  setting.style.display = "none";
  settingset.style.display = "none";



  // 获取 img 元素
  let img1 = document.querySelector(".md-bt-map img");
  // 获取 img 元素的 src 属性
  let src1 = img1.getAttribute("src");
  // 判断 src 的值，如果是 map1.svg，就切换为 map2.svg，反之亦然
  if (src1 == "img/map2.svg") {
    img1.setAttribute("src", "img/map1.svg");
  }

  let img2 = document.querySelector(".md-bt-weather img");
  // 获取 img 元素的 src 属性
  let src2 = img2.getAttribute("src");
  // 判断 src 的值，如果是 map1.svg，就切换为 map2.svg，反之亦然
  if (src2 == "img/weather2.svg") {
    img2.setAttribute("src", "img/weather1.svg");
  }

  let img3 = document.querySelector(".md-bt-history img");
  // 获取 img 元素的 src 属性
  let src3 = img3.getAttribute("src");
  // 判断 src 的值，如果是 map1.svg，就切换为 map2.svg，反之亦然
  if (src3 == "img/history2.svg") {
    img3.setAttribute("src", "img/history1.svg");
  }
  
  let img4 = document.querySelector(".md-bt-setting img");
  // 获取 img 元素的 src 属性
  let src4 = img4.getAttribute("src");
  // 判断 src 的值，如果是 map1.svg，就切换为 map2.svg，反之亦然
  if (src4 == "img/setting2.svg") {
    img4.setAttribute("src", "img/setting1.svg");
  }
}





        
function loadmap() {
  totInit();
  // 获取所有的<div>元素
  var mapset = document.getElementById("map-mapset");
  // 显示地图元素
  mapset.style.display = "block";
      // 获取 img 元素
      let img = document.querySelector(".md-bt-map img");
      // 获取 img 元素的 src 属性
      let src = img.getAttribute("src");
      // 判断 src 的值，如果是 map1.svg，就切换为 map2.svg，反之亦然
      if (src == "img/map1.svg") {
        img.setAttribute("src", "img/map2.svg");
      }
}
function loadweather() {
  totInit();
  // 获取所有的<div>元素
  var weatherset = document.getElementById("weather-weatherset");
  var weathertoday = document.getElementById("weather-today");
  var weatherbing = document.getElementById("weather-bing");
  weatherset.style.display = "block";
  weathertoday.style.display = "block";
    // 获取 img 元素
    let img = document.querySelector(".md-bt-weather img");
    // 获取 img 元素的 src 属性
    let src = img.getAttribute("src");
    // 判断 src 的值，如果是 weather1.svg，就切换为 weather2.svg，反之亦然
    if (src == "img/weather1.svg") {
      img.setAttribute("src", "img/weather2.svg");
    }
}


function loadweathertoday() {
  var weathertoday = document.getElementById("weather-today");
  var weatherbing = document.getElementById("weather-bing");
  
  weathertoday.style.display = "block";
  weatherbing.style.display = "none";
}

function loadweatherbing() {
  
  var weathertoday = document.getElementById("weather-today");
  var weatherbing = document.getElementById("weather-bing");
  
  weathertoday.style.display = "none";
  weatherbing.style.display = "block";
}

function loadbing() {  
  var bing = document.getElementById("Bingpicture");
  
  bing.style.display = "block";
}


$(function(){
  // 创建一个二维码对象
  var qrcode = new QRCode("qrcode", {
    width: 100,
    height: 100
  });
  // 点击生成按钮时，获取输入的网址，调用二维码对象的makeCode方法，生成二维码
  $("#generate").click(function(){
    var url = $("#url").val();
    if(url){
      qrcode.makeCode(url);
    }else{
      url = "www.hznu.edu.cn";
      qrcode.makeCode(url);
      // alert("请输入网址");
    }
  });
});




function loadhistory() {
  totInit();
  // 获取所有的<div>元素
  var history = document.getElementById("history");
  history.style.display = "block";
  var historyset = document.getElementById("history-historyset");
  historyset.style.display = "block";



  // 获取 img 元素
  let img = document.querySelector(".md-bt-history img");
  // 获取 img 元素的 src 属性
  let src = img.getAttribute("src");
  // 判断 src 的值，如果是 history1.svg，就切换为 history2.svg，反之亦然
  if (src == "img/history1.svg") {
    img.setAttribute("src", "img/history2.svg");
  }
}

function loadsetting() {
  totInit();
  var setting = document.getElementById("setting");
  var settingset = document.getElementById("setting-settingset");
  settingset.style.display = "block";
  setting.style.display = "block";
  // 获取 img 元素
  let img = document.querySelector(".md-bt-setting img");
  // 获取 img 元素的 src 属性
  let src = img.getAttribute("src");
  // 判断 src 的值，如果是 map1.svg，就切换为 map2.svg，反之亦然
  if (src == "img/setting1.svg") {
    img.setAttribute("src", "img/setting2.svg");
  }
}


function settingpassword() {
  var setpage1 = document.getElementById("setting-page1");
  setpage1.style.display = "block";
}
function settingchangecity() {
  var open1 = document.getElementById("changecity-map");
  open1.style.display = "block";
  var open2 = document.getElementById("changecity-map-close");
  open2.style.display = "";
}
function settingaddcity() {
  var open1 = document.getElementById("addcity-page");
  open1.style.display = "block";
  var open2 = document.getElementById("addcity-add");
  open2.style.display = "block";
  var open3 = document.getElementById("addcity-close");
  open3.style.display = "block";
}







function closeChangeCity() {
  var close1 = document.getElementById("changecity-map-close");
  close1.style.display = "none";
  var close2 = document.getElementById("changecity-map");
  close2.style.display = "none";
}

function closeAddCity() {
  var close1 = document.getElementById("addcity-page");
  close1.style.display = "none";
  var close2 = document.getElementById("addcity-add");
  close2.style.display = "none";
  var close3 = document.getElementById("addcity-close");
  close3.style.display = "none";
}





















var historyCardMax=2;
var historyCardNow=0;
function historysetaddcity(city,wearther,temperature) {
    historyCardNow=historyCardNow+1;
    // 创建一个新的div元素
    var newDiv = document.createElement("div");
    // 设置新的div元素的innerHTML属性为要插入的代码
    newDiv.innerHTML = "<div class=\"historyset-page-card\" id=\"historyset-page-card"+historyCardNow+"\">\n    <div class=\"historyset-card-city\">"+city+"</div>\n    <div class=\"historyset-card-wearther\">"+wearther+"&nbsp;&nbsp;"+temperature+" "+historyCardNow+"°C</div>\n</div>";
    // 获取目标元素
    var targetDiv = document.getElementById("historyset-page-list");
    // 把新的div元素添加到目标元素的子节点列表中
    targetDiv.appendChild(newDiv);
    for (var id=1; id<=historyCardNow-historyCardMax; id++) {
      var deleteCard="historyset-page-card"+String(id);
      // 获取要删除的元素
      var element = document.getElementById(deleteCard);
      // 从文档中删除元素
      if (element) element.remove();      
    }
}

function historysetchangecity(city,wearther,temperature) {
  var newcity=document.getElementById("historyset-card0-city");
  var newwearther=document.getElementById("historyset-card0-wearther");
  newcity.innerHTML=city;
  newwearther.innerHTML=wearther+"&nbsp;&nbsp;"+temperature+"°C";

}