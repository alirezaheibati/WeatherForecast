import { API_KEY, API_URL } from "../config";
/**
 * Represents the weather information model for a city.
 */
class CityWeatherModel {
  constructor() {
    /**
     * Stores weather information for a city.
     */
    this.weatherInfo = {};
  }
  /**
   * Loads weather data for a specific city using latitude and longitude.
   *
   * @param {number} lat - The latitude of the city.
   * @param {number} lon - The longitude of the city.
   * @returns {Promise<void>} - A promise that resolves when the data is fetched and set.
   */
  async loadCityWeatherByCoords(lat, lon) {
    try {
      const data = await getJSON(
        `${API_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );

      this.weatherInfo = data;
    } catch (err) {
      throw err;
    }
  }
}
