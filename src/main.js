import { WeatherService } from './../src/weather-service.js';

$(document).ready(function() {


    showWeatherGriphy();

    function showWeatherGriphy(){
      (async () => {
        console.log("img1");
        let weatherService = new WeatherService();
        const response = await weatherService.getGiphyImg("weather");
        displayGiphyImg(response);
        console.log("img2");
      })();
    }
   
    function displayGiphyImg(response){
      console.log("img3");
      if (response) {
        console.log("img4");
        $('#showGiphyImg').attr("src",response.data[2].images.downsized.url);
        console.log("img5");
      } else {
        console.log("img6");
        $('.showError').text(`Please check your inputs and try again!`);
      }
    }

  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    (async () => {
      let weatherService = new WeatherService();
      const response = await weatherService.getWeatherByCity(city);
      getElements(response);
    })();

   

    function getElements(response) {
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