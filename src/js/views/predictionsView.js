import View from "./View";
/**
 * Represents the view for a weather predictions section.
 * Extends the base View class to inherit common view properties and methods.
 */
class PredictionsView extends View {
  /**
   * The parent element in the DOM where the weather predictions will be rendered.
   * @type {HTMLElement}
   * @protected
   */
  _parentElement = document.getElementById("predictions-view");
}
