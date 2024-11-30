import View from "./View";
/**
 * Represents the view for a weather info section.
 * Extends the base View class to inherit common view properties and methods.
 */
class WeatherInfoView extends View {
  /**
   * The parent element in the DOM where the weather info will be rendered.
   * @type {HTMLElement}
   * @protected
   */
  _parentElement = document.getElementById("weather-info");
  /**
   * Generates the markup for the main weather information.
   *
   * @returns {string} The HTML markup for the weather information.
   * @protected
   */
  _generateMarkup() {
    return `
      <p class="text-9xl text-center">${this._data.main.temp}&deg;</p>
            <div class="flex justify-center items-center gap-2">
              <img src="https://openweathermap.org/img/wn/${this._data.weather[0].icon}@2x.png" alt="${this._data.weather[0].main}"> 
              <p class="text-4xl">
              ${this._data.weather[0].main}
              </p>
            </div>
      `;
  }
}
export const weatherInfoView = new WeatherInfoView();
