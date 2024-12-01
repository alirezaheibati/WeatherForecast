/**
 * Class representing the search box view.
 */
class SearchBoxView {
  /**
   * The parent element that contains the city selector.
   * @private
   * @type {HTMLElement}
   */
  _parentElement = document.getElementById("city-selector-container");
  /**
   * Create a search box view instance.
   * Automatically binds the search city handler.
   */
  constructor() {
    this.addHandlerSearchCity();
  }
  /**
   * Add an event listener to handle search city interactions.
   *
   * This method listens for clicks on the parent element and
   * checks if the close button is clicked. If so, it adds a class
   * to the parent element to hide the search box.
   */
  addHandlerSearchCity() {
    this._parentElement.addEventListener("click", (e) => {
      const closeBtn = e.target.closest("#close-search-box");
      if (!closeBtn) return;
      this.closeSearchBox();
    });
  }
  /**
   * Close the search box by adding a CSS class to the parent element.
   */
  closeSearchBox() {
    this._parentElement.classList.add("-translate-x-full");
  }
  /**
   * Add an event listener to handle form submission for searching city.
   *
   * This method listens for form submission events on the parent element,
   * prevents the default form submission behavior, and extracts the value
   * from the city input field. The extracted value is then passed to the
   * provided handler function.
   *
   * @param {function} handler - The function to handle the city input value.
   */
  addHandlerSearchCityForm(handler) {
    this._parentElement.addEventListener("submit", (e) => {
      e.preventDefault();
      const searchCityForm = e.target.closest("#city-selector-form");
      if (!searchCityForm) return;

      const cityInputValue = searchCityForm.querySelector(
        "#city-selector-input"
      ).value;
      handler(cityInputValue);
    });
  }
}
export const searchBoxView = new SearchBoxView();
