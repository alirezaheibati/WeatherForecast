import View from "./View";
/**
 * Represents the view for a city info section.
 * Extends the base View class to inherit common view properties and methods.
 */
class LocationInfoView extends View {
  /**
   * The parent element in the DOM where the weather highlights will be rendered.
   * @type {HTMLElement}
   * @protected
   */
  _parentElement = document.getElementById("location-info");
}
