import View from "./View";
/**
 * Represents the view for a weather highlights section.
 * Extends the base View class to inherit common view properties and methods.
 */
class HighlightsView extends View {
  /**
   * The parent element in the DOM where the weather highlights will be rendered.
   * @type {HTMLElement}
   * @protected
   */
  _parentElement = document.getElementById("highlights-view");
  /**
   * Converts a timestamp into a Date object.
   *
   * @param {number} timestamp - The timestamp to convert.
   * @returns {Date} - The Date object.
   */
  _convertTimestamp(timestamp) {
    return new Date(timestamp);
  }
}
export const highlightsView = new HighlightsView();
