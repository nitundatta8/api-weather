$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[[API-KEY-GOES-HERE]]`)
      .then(function(response) {
        if (response.ok && response.status == 200) {
          return response.json();
        } else {
          return false;
        }
      })
      .catch(function() {
        return false;
      })
      .then(function(jsonifiedResponse) {
        getElements(jsonifiedResponse);
      });

    const getElements = function(response) {
      if (response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      } else {
        $('.showHumidity').text(`There was an error handling your request.`);
        $('.showTemp').text(`Please check your inputs and try again!`);
      }
    }
  });
});