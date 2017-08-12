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
	}
});