export class WeatherService {
  async getWeatherByCity(city) {
    try {
      let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }

  async getGiphyImg(keyword) {
    try {
      let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=f9fuvXjzIXSiB4J9jFjrua10ncropS4J&q=${keyword}&limit=25&offset=0&rating=G&lang=en`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}