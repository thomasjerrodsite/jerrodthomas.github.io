var weatherObject = new XMLHttpRequest();
weatherObject.open('Get','http://api.openweathermap.org/data/2.5/weather?zip=55333,usappid=d246864f4acf9a85cbafb96d6e8c32da',true);

weatherOjbect.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weather.ObjectresponseText);
    cosole.log(weatherInfo);
    document.getElementById('plsce').innerHTML = weatherInfo.name;
}