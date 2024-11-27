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
}
