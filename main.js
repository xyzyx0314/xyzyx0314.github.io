
function totInit() {
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
  var map = document.getElementById("map");
  var mapset = document.getElementById("map-mapset");
  var weather = document.getElementById("weather");
  var history = document.getElementById("history");
  var setting = document.getElementById("setting");
  // 隐藏除了地图以外的所有元素
  map.style.display = "none";
  mapset.style.display = "none";
  weather.style.display = "none";
  history.style.display = "none";
  setting.style.display = "none";
  // 显示地图元素
  map.style.display = "block";
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
  var map = document.getElementById("map");
  var mapset = document.getElementById("map-mapset");
  var weather = document.getElementById("weather");
  var history = document.getElementById("history");
  var setting = document.getElementById("setting");
  // 隐藏除了地图以外的所有元素
  map.style.display = "none";
  mapset.style.display = "none";
  weather.style.display = "none";
  history.style.display = "none";
  setting.style.display = "none";
  // 显示地图元素
  weather.style.display = "block";
    // 获取 img 元素
    let img = document.querySelector(".md-bt-weather img");
    // 获取 img 元素的 src 属性
    let src = img.getAttribute("src");
    // 判断 src 的值，如果是 weather1.svg，就切换为 weather2.svg，反之亦然
    if (src == "img/weather1.svg") {
      img.setAttribute("src", "img/weather2.svg");
    }
}

function loadhistory() {
  totInit();
  // 获取所有的<div>元素
  var map = document.getElementById("map");
  var mapset = document.getElementById("map-mapset");
  var weather = document.getElementById("weather");
  var history = document.getElementById("history");
  var setting = document.getElementById("setting");
  // 隐藏除了地图以外的所有元素
  map.style.display = "none";
  mapset.style.display = "none";
  weather.style.display = "none";
  history.style.display = "none";
  setting.style.display = "none";
  // 显示地图元素
  history.style.display = "block";
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
  // 获取所有的<div>元素
  var map = document.getElementById("map");
  var mapset = document.getElementById("map-mapset");
  var weather = document.getElementById("weather");
  var history = document.getElementById("history");
  var setting = document.getElementById("setting");
  // 隐藏除了地图以外的所有元素
  map.style.display = "none";
  mapset.style.display = "none";
  weather.style.display = "none";
  history.style.display = "none";
  setting.style.display = "none";
  // 显示地图元素
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
