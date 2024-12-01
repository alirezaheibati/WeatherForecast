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
  addHandlerSearchCity() {
    this._parentElement.addEventListener("click", (e) => {
      const seaerchContainer = document.getElementById(
        "city-selector-container"
      );
      if (!seaerchContainer) return;
      seaerchContainer.classList.remove("-translate-x-full");
    });
  }
}
export const optionsBarView = new OptionsBarView();
