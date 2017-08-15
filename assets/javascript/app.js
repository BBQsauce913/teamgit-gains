var k = 0;
var info = [];

$(document).ready(function() {
	
	$("#search").on("click", function(){
		var key = "f59f8c4d5d70393d411c5b5ea1c8a4f6";
		var city = $("input").val().trim();
		var queryURL = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=imperial" + "&cnt=5&appid=" + key;
		$("#weather-info").css({
			"display": "block"
		});

		$.ajax({url: queryURL, method: "GET"})
    	.done(function(response) {
		
    	console.log(queryURL);
			console.log(response);
    	var results = response.list;
			console.log(city);
			
			var containerDiv = $("<div>");
			var rowDiv = $("<div class='row new center'>");
			var dataDiv = $("<div class='row data center'>");
			var h3Title = $("<h3 class='cap'>").text(city);
			var titleDiv = $("<div class='col-xs-12' id='weatherBanner'>").append(h3Title);
			
			var newDiv = containerDiv.append(rowDiv);
			
			$("#weather-info").prepend(newDiv);
			$(".new").append(titleDiv);
			$(".new").append(dataDiv);
			$(".new").removeClass("new"); 


    	for(var i = 0; i < 5; i++) {
        var date = results[i].dt;
        var high = results[i].temp.max;
        var low = results[i].temp.min;
        var desc = results[i].weather[0].description;
        var iconCode = results[i].weather[0].icon;
        var iconURL = "http://openweathermap.org/img/w/" + 	iconCode + ".png";
				
				info.push(date);
				info.push(iconURL);
				info.push(high);
				info.push(low);
				info.push(desc);
				
				console.log(moment.unix(date).format("MMM Do YY"));
				
				var h3Date = $("<h3>").addClass("date").append((moment.unix((info[k]))).format("dddd"));
				k+=1;
				var imgIcon = $("<img>").addClass("icon").attr("src", info[k]);
				k+=1;
				var h5High = $("<h5>").addClass("high").append(info[k]);
				k+=1;
				var h5Low = $("<h5>").addClass("low").append(info[k]);
				k+=1;
				var h5Desc = $("<h5>").addClass("desc").append(info[k]);
				k+=1;
				
				var colDiv = $("<div class='col-xs-2 weatherPanel'>").append(h3Date);
				colDiv.append(imgIcon);
				colDiv.append(h5High);
				colDiv.append(h5Low);
				colDiv.append(h5Desc);
					
				$(".data").append(colDiv);
    	}
			
			$(".data").removeClass("data");
			
		});
	});    
});