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
  _formatDate() {
    const date = new Date();
    const options = { weekday: "long", day: "numeric", month: "long" };
    return date.toLocaleDateString("en-US", options);
  }
  /**
   * Generates the markup for information about city.
   *
   * @returns {string} The HTML markup for the city information.
   * @protected
   */
  _generateMarkup() {
    return `
    <p class="mt-12 text-3xl">
              <i class="fa-solid fa-location-dot"></i> ${this._data.country}, ${
      this._data.name
    }
            </p>
            <p>${this._formatDate()}</p>
    `;
  }
}
export const locationInfoView = new LocationInfoView();
