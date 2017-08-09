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