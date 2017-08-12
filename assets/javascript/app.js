
$(document).ready(function() {
	
	$("#search").on("click", function(){
		
		var key = "f59f8c4d5d70393d411c5b5ea1c8a4f6";
		var city = $("input").val().trim();
		var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + "&appid=" + key;
		
		$.ajax({url: queryURL, method: "GET"})
    	.done(function(response) {
		
    	console.log(queryURL);
			console.log(response);
    	var results = response.list;
			console.log(city);
    
    	for(var i = 0; i < results.length; i+=8) {
        	var date = results[i].dt_txt;
        	var temp = results[i].main.temp;
        	var humidity = results[i].main.humidity;
        	var main = results[i].weather[0].main;
        	var desc = results[i].weather[0].description;
        	var iconCode = results[i].weather[0].icon;
        	var iconURL = "http://openweathermap.org/img/w/" + 	iconCode + ".png";
        	var windSpeed = results[i].wind.icon;
				
					$("#weather-info").prepend("<div class='col-lg-6'><div class='panel panel-default' id='format'><div id='description'>Description</div><div id='icon'>Icon</div><div id='temp'>Temp</div><div id='wind'>Wind</div><div id='humidity'>Humidity</div></div>");
				
					$("#description").text(desc);
					$("#icon").html("<img src='" + iconURL + "'>");
					$("#temp").text(temp);
					$("#wind").text(windSpeed);
					$("#humidity").text(humidity);
        
        	console.log("date " + date);
    	}
			
			});
		
	});    
});