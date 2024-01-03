// /*load*/
// var xmlhttp,xmlhttp2;
// function load(){
//   document.getElementById('m-md-top').scrollTop=0;
//   if (window.XMLHttpRequest)
//   {
//     xmlhttp=new XMLHttpRequest();
//     xmlhttp2=new XMLHttpRequest();
//   }
//   else
//   {
//     xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//     xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
//   }
//   xmlhttp.onreadystatechange=function()
//   {
//     if (xmlhttp.readyState==4 && xmlhttp.status==200)
//     {
//       document.getElementById("p-page").innerHTML=xmlhttp.responseText;
//       hljs.initHighlightingOnLoad();

//     }
//   }
//   xmlhttp2.onreadystatechange=function()
//   {
//     if (xmlhttp2.readyState==4 && xmlhttp2.status==200)
//     {
//       document.getElementById("p-list").innerHTML=xmlhttp2.responseText;
//       hljs.initHighlightingOnLoad();

//     }
//   }
// }
// /*载入对应*/
// function loadHome()
// {
//   load();
//   xmlhttp.open("GET","html/home.html",true);
//   xmlhttp.send();
//   xmlhttp2.open("GET","html/home_list.html",true);
//   xmlhttp2.send();
// }

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




// /*锁屏 */
// // function locked(){
// //   document.getElementById('lockscreen').style.display = 'flex';
// //   document.getElementById('m-top').style.display='none';
// //   document.getElementById('m-lt').style.display='none';
// //   document.getElementById('m-md').style.display='none';
// //   document.getElementById('m-rt').style.display = 'none';
// //   document.getElementById('m-rtbt').style.display='none';
// // }
// // function openblog(){
// //   document.getElementById('lockscreen').style.display='none';
// //   document.getElementById('m-top').style.display='block';
// //   document.getElementById('m-lt').style.display='block';
// //   document.getElementById('m-md').style.display='block';
// //   document.getElementById('m-rt').style.display = 'block';
// //   document.getElementById('m-rtbt').style.display='block';
// // }



// /*网址去除锚点 */
// // window.onhashchange=function(event){
// //   var url = window.location.href;
// //   // 去掉hash部分
// //   var newUrl = url.split("#")[0];
// //   console.log(newUrl);
// //   // 修改url
// //   history.pushState(null, null, newUrl);
// // }