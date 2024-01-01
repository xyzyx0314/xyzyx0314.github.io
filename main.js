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





function map() {
  // load();
  // xmlhttp.open("GET","VANE-intro-master\apps\leaflet-owm.html",true);
  // xmlhttp.send();
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

  // getdate();
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
  xmlhttp.open("GET","html/history.html",true);
  xmlhttp.send();
  totInit();
  // 获取 img 元素
  let img = document.querySelector(".md-bt-history img");
  // 获取 img 元素的 src 属性
  let src = img.getAttribute("src");
  // 判断 src 的值，如果是 history1.svg，就切换为 history2.svg，反之亦然
  if (src == "img/history1.svg") {
    img.setAttribute("src", "img/history2.svg");
    var div = document.querySelector(".md-bt-font3");
    div.style.color = "var(--color2)";
  }
}
function setting() {
  load();
  xmlhttp.open("GET","html/setting.html",true);
  xmlhttp.send();
  totInit();
  // 获取 img 元素
  let img = document.querySelector(".md-bt-setting img");
  // 获取 img 元素的 src 属性
  let src = img.getAttribute("src");
  // 判断 src 的值，如果是 setting1.svg，就切换为 setting2.svg，反之亦然
  if (src == "img/setting1.svg") {
    img.setAttribute("src", "img/setting2.svg");
    var div = document.querySelector(".md-bt-font4");
    div.style.color = "var(--color2)";
  }
}




// var key = "d290f13b29404c43a83f2fa2031330c9";
// // 获取当前地理位置的经纬度
// navigator.geolocation.getCurrentPosition(function(position) {
//   var lat = position.coords.latitude;
//   var lon = position.coords.longitude;
//   // 调用GeoApi，获取当前地区的城市id
//   $.ajax({
//     url: "https://geoapi.qweather.com/v2/city/lookup",
//     data: {
//       key: key,
//       location: lon + "," + lat
//     },
//     dataType: "json",
//     success: function(data) {
//       if (data.code == "200") {
//         // 取第一个城市信息
//         var city = data.location[0];
//         var name = city.name; // 城市名称
//         var id = city.id; // 城市id
//         // 显示城市名称
//         $("#city").text(name);
//         // 调用城市天气预报API，获取当前城市的实时天气
//         $.ajax({
//           url: "https://devapi.qweather.com/v7/weather/now",
//           data: {
//             key: key,
//             location: id
//           },
//           dataType: "json",
//           success: function(data) {
//             if (data.code == "200") {
//               // 取实时天气信息
//               var now = data.now;
//               var temp = now.temp; // 温度
//               var text = now.text; // 天气状况
//               // 显示温度和天气状况
//               $("#temp").text(temp + "℃");
//               $("#text").text(text);
//             } else {
//               // 处理错误情况
//               alert("获取实时天气失败，错误码：" + data.code);
//             }
//           }
//         });
//       } else {
//         // 处理错误情况
//         alert("获取城市信息失败，错误码：" + data.code);
//       }
//     }
//   });
// });


// function getdate() {
//   var key = "d290f13b29404c43a83f2fa2031330c9";
//   // 获取当前地理位置的经纬度
//   navigator.geolocation.getCurrentPosition(function(position) {
//     var lat = position.coords.latitude;
//     var lon = position.coords.longitude;
//     // 调用GeoApi，获取当前地区的城市id
//     $.ajax({
//       url: "https://geoapi.qweather.com/v2/city/lookup",
//       data: {
//         key: key,
//         location: lon + "," + lat
//       },
//       dataType: "json",
//       success: function(data) {
//         if (data.code == "200") {
//           // 取第一个城市信息
//           var city = data.location[0];
//           var name = city.name; // 城市名称
//           var id = city.id; // 城市id
//           // 显示城市名称
//           $("#city").text(name);
//           // 调用城市天气预报API，获取当前城市的实时天气
//           $.ajax({
//             url: "https://devapi.qweather.com/v7/weather/now",
//             data: {
//               key: key,
//               location: id
//             },
//             dataType: "json",
//             success: function(data) {
//               if (data.code == "200") {
//                 // 取实时天气信息
//                 var now = data.now;
//                 var temp = now.temp; // 温度
//                 var text = now.text; // 天气状况
//                 // 显示温度和天气状况
//                 $("#temp").text(temp + "℃");
//                 $("#text").text(text);
//               } else {
//                 // 处理错误情况
//                 alert("获取实时天气失败，错误码：" + data.code);
//               }
//             }
//           });
//         } else {
//           // 处理错误情况
//           alert("获取城市信息失败，错误码：" + data.code);
//         }
//       }
//     });
//   });
// }