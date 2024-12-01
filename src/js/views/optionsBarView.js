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
  /**
   * Add an event listener to handle slider change interactions.
   *
   * This method listens for clicks on the elements with the class "slider-circle"
   * within the parent element. When a slider-circle is clicked, it updates the
   * width of all slider buttons, making the clicked one larger.
   */
  addHandlerSliderChange() {
    this._parentElement.addEventListener("click", (e) => {
      if (e.target.classList.contains("slider-circle")) {
        const sliderBtns =
          this._parentElement.querySelectorAll(".slider-circle");
        sliderBtns.forEach((btn) => {
          btn.classList.remove("w-6");
          btn.classList.add("w-3");
        });
        e.target.classList.add("w-6");
      } else return;
    });
  }
}
export const optionsBarView = new OptionsBarView();
