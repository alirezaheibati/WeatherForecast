/**
 * Represents the view for a city page option bar.
 */
class OptionsBarView {
  /**
   * The parent element in the DOM where the weather highlights will be rendered.
   * @type {HTMLElement}
   * @protected
   */
  _parentElement = document.getElementById("menu-bar-container");
  /**
   * Add an event listener to handle search city interactions.
   *
   * This method listens for clicks on the parent element and
   * removes the class that hides the city selector container.
   */
  constructor() {
    this.addHandlerSliderChange();
  }
  addHandlerSearchCity() {
    this._parentElement.addEventListener("click", (e) => {
      const searchBtn = e.target.closest(".search-btn");
      if (!searchBtn) return;

      const seaerchContainer = document.getElementById(
        "city-selector-container"
      );
      seaerchContainer.classList.remove("-translate-x-full");
    });
  }
}
export const optionsBarView = new OptionsBarView();
