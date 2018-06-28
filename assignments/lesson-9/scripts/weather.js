var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=55333,us&appid=d246864f4acf9a85cbafb96d6e8c32da', true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('wind').innerHTML = weatherInfo.wind.speed;
    
    var iconcode = weatherInfo.weather[0].icon;
    
    var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
}

//end of function
