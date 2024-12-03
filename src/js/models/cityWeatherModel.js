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

      this._setCityInfo(data);
    } catch (err) {
      throw err;
    }
  }
  async loadCityWeatherByName(city, units = "metric") {
    try {
      const data = await getJSON(
        `${API_URL}q=${city}&units=${units}&appid=${API_KEY}`
      );

      this._setCityInfo(data);
    } catch (err) {
      throw err;
    }
  }
  /**
   * Assign value for this class properties about city and weather of city.
   *
   * @param {Object} data - The data object containing all information fetched from API.
   */
  _setCityInfo(data) {
    this.weatherInfo = data;
    this.city = data.city.name;
    this.coords = [data.city.coord.lat, data.city.coord.lon];
  }
  /**
   * Sets the weather units based on the checkbox status.
   * @param {boolean} checkStatus - The status of the checkbox; true for imperial units, false for metric units.
   */
  setWeatherUnit(checkStatus) {
    if (checkStatus) this.units = "imperial";
    else this.units = "metric";
    this._convertWeatherInfo();
  }
  /**
   * Converts a temperature from Fahrenheit to Celsius.
   *
   * @param {number} num - The temperature in Fahrenheit.
   * @returns {number} - The converted temperature in Celsius.
   * @private
   */
  _fahrenheitToCelsius(num) {
    return ((num - 32) / 1.8).toFixed(2);
  }
  /**
   * Converts a temperature from Celsius to Fahrenheit.
   *
   * @param {number} num - The temperature in Celsius.
   * @returns {number} - The converted temperature in Fahrenheit.
   * @private
   */
  _celsiusToFahrenheit(num) {
    return (num * 1.8 + 32).toFixed(2);
  }
  /**
   * Converts the weather related properties of this.watherInfo to the appropriate units.
   * @private
   */
  _convertWeatherInfo() {
    this.weatherInfo.list.forEach((element) => {
      if (this.units === "metric") {
        element.main.feels_like = this._fahrenheitToCelsius(
          element.main.feels_like
        );
        element.main.temp = this._fahrenheitToCelsius(element.main.temp);
        element.main.temp_max = this._fahrenheitToCelsius(
          element.main.temp_max
        );
        element.main.temp_min = this._fahrenheitToCelsius(
          element.main.temp_min
        );
      } else {
        element.main.feels_like = this._celsiusToFahrenheit(
          element.main.feels_like
        );
        element.main.temp = this._celsiusToFahrenheit(element.main.temp);
        element.main.temp_max = this._celsiusToFahrenheit(
          element.main.temp_max
        );
        element.main.temp_min = this._celsiusToFahrenheit(
          element.main.temp_min
        );
      }
    });
  }
}
export const cityWeatherModel = new CityWeatherModel();
