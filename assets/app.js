console.log("The map javascript file is connected.");

//API Key from Google for Test Projects AIzaSyBS9KZh27zq_8_0aon5HNWAJ9Lu7orkD7E

//Global Variable
var address = "1600+Amphitheatre+Parkway,+Mountain+View,+CA"
var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key=AIzaSyBS9KZh27zq_8_0aon5HNWAJ9Lu7orkD7E"

//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyA1ay5UDdUjXwuV8XTUzoNzIht-eSPEA7E

//Check to see if you even get a response
$.ajax({
    url: queryURL,
    method: "GET"
}).done(function(response) {
      console.log(response);
});

function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

var key = "f59f8c4d5d70393d411c5b5ea1c8a4f6";
var city = "Kansas City";
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + "&appid=" + key;
console.log(queryURL);
$.ajax({url: queryURL, method: "GET"})
    .done(function(response) {
    console.log(response);
    console.log(response.list[0].main.temp);
    console.log(response.list[0].weather.main);
    
    var results = response.list;
    
    for(var i = 0; i < results.length; i+=8) {
        var date = results[i].dt_txt;
        var temp = results[i].main.temp;
        var humidity = results[i].main.humidity;
        var main = results[i].weather[0].main;
        var desc = results[i].weather[0].description;
        var iconCode = results[i].weather[0].icon;
        var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
        var windSpeed = results[i].wind.icon;
        
        console.log("date " + date);
        console.log("temp " + temp);
        console.log("humidity " + humidity);
        console.log("main " + main);
        console.log("desc " + desc);
        console.log("iconCode " + iconCode);
        console.log("iconURL " + iconURL);
        console.log("windSpeed " + windSpeed);
    }
});

$(document).ready(function() {
    $("#search").on("click", function(){
        $("#weather-info").prepend("<div class='panel new-data' id='new-data'>Data<br>Main<br>Description<br>Icon<br>Temp<br>Wind<br>Humidity</div>");
    });    
});

