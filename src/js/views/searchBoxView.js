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
}
export const searchBoxView = new SearchBoxView();
