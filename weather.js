
var map = new AMap.Map('container', {
    resizeEnable: true,
    center: [120.01809,20.292206],
    zoom: 12
});

var DATE;

var str = [];
AMap.plugin('AMap.Weather', function() {
    var weather = new AMap.Weather();
    //查询实时天气信息, 查询的城市到行政级别的城市，如朝阳区、杭州市
    var city = "北";
    weather.getLive(city, function(err, data) {
        if (!err) {
            DATE=data;
            str.push('<h4 >实时天气' + '</h4><hr>');
            str.push('<p>城市/区：' + data.city + '</p>');
            str.push('<p>天气：' + data.weather + '</p>');
            str.push('<p>温度：' + data.temperature + '℃</p>');
            str.push('<p>风向：' + data.windDirection + '</p>');
            str.push('<p>风力：' + data.windPower + ' 级</p>');
            str.push('<p>空气湿度：' + data.humidity + '</p>');
            str.push('<p>发布时间：' + data.reportTime + '</p>');
            var marker = new AMap.Marker({map: map, position: map.getCenter()});
            var infoWin = new AMap.InfoWindow({
                content: '<div class="info" style="position:inherit;margin-bottom:0;">'+str.join('')+'</div><div class="sharp"></div>',
                isCustom:true,
                offset: new AMap.Pixel(0, -37)
            });
            infoWin.open(map, marker.getPosition());
            marker.on('mouseover', function() {
                infoWin.open(map, marker.getPosition());
            });
        }
    });
    //未来4天天气预报
    weather.getForecast(city, function(err, data) {
        if (err) {return;}
        var str = [];
        for (var i = 0,dayWeather; i < data.forecasts.length; i++) {
            dayWeather = data.forecasts[i];
            str.push(dayWeather.date+' <span class="weather">'+dayWeather.dayWeather+'</span> '+ dayWeather.nightTemp + '~' + dayWeather.dayTemp + '℃');
        }
        document.getElementById('forecast').innerHTML = str.join('<br>');
    });
});







// function add() {
//     // alert(DATE);
//     alert(str);
//     str.push('<h4 >1时天气' + '</h4><hr>');
//     str.push('<p>城市/区：' + DATE.city + '</p>');
//     str.push('<p>天气：' + DATE.weather + '</p>');
//     str.push('<p>温度：' + DATE.temperature + '℃</p>');
//     str.push('<p>风向：' + DATE.windDirection + '</p>');
//     str.push('<p>风力：' + DATE.windPower + ' 级</p>');
//     str.push('<p>空气湿度：' + DATE.humidity + '</p>');
//     str.push('<p>发布时间：' + DATE.reportTime + '</p>');
//     var marker = new AMap.Marker({map: map, position: map.getCenter()});
//     var infoWin = new AMap.InfoWindow({
//         content: '<div class="info" style="position:inherit;margin-bottom:0;">'+str.join('')+'</div><div class="sharp"></div>',
//         isCustom:true,
//         offset: new AMap.Pixel(0, -37)
//     });
//     infoWin.open(map, marker.getPosition());
//     marker.on('mouseover', function() {
//         infoWin.open(map, marker.getPosition());
//     });

// }