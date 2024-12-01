import { API_KEY, API_URL } from "../config";
import { getJSON } from "../helper";
/**
 * Represents the weather information model for a city.
 */
class CityWeatherModel {
  constructor() {
    /**
     * Stores weather information for a city.
     */
    this.weatherInfo = {};
    /**
     * The units of measurement for the weather data (e.g., 'metric', 'imperial').
     * @type {string}
     */
    this.units = "metric";
    /**
     * The name of the city.
     * @type {string}
     */
    this.city = "";
    /**
     * An array to store the coordinates of the city [latitude, longitude].
     * @type {Array<number>}
     */
    this.coords = [];
  }
  /**
   * Loads weather data for a specific city using latitude and longitude.
   *
   * @param {number} lat - The latitude of the city.
   * @param {number} lon - The longitude of the city.
   * @returns {Promise<void>} - A promise that resolves when the data is fetched and set.
   */
  async loadCityWeatherByCoords(lat, lon, units = "metric") {
    try {
      const data = await getJSON(
        `${API_URL}lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`
      );

      this.weatherInfo = data;
    } catch (err) {
      throw err;
    }
  }
  async loadCityWeatherByName(city, units = "metric") {
    try {
      const data = await getJSON(
        `${API_URL}q=${city}&units=${units}&appid=${API_KEY}`
      );

      this.weatherInfo = data;
    } catch (err) {
      throw err;
    }
  }
}
export const cityWeatherModel = new CityWeatherModel();
