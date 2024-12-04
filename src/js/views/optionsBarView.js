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
  addHandlerSliderChange(handler) {
    this._parentElement.addEventListener("click", (e) => {
      if (e.target.classList.contains("slider-circle")) {
        const sliderBtns =
          this._parentElement.querySelectorAll(".slider-circle");
        sliderBtns.forEach((btn) => {
          btn.classList.remove("w-6");
          btn.classList.add("w-3");
        });
        e.target.classList.add("w-6");
        const slideTo = e.target.dataset.slideTo;
        handler(slideTo);
      } else return;
    });
  }
  /**
   * Adds an event listener to handle changes in weather unit selection.
   *
   * This method listens for a change event on the parent element, checks if the
   * event target is the #unit-selector checkbox, toggles the position of the circle
   * element to reflect the unit change, and retrieves the checkbox status.
   *
   * @param {Function} handler - A callback function that handles the checkbox status.
   */
  addHandlerUnitsChange(handler) {
    this._parentElement.addEventListener("change", (e) => {
      const unitsCheckBox = e.target.closest("#unit-selector");
      if (!unitsCheckBox) return;
      //slide unit selector circle right or left
      const circleHandle = this._parentElement.querySelector(".circle");
      circleHandle.classList.toggle("left-0");
      circleHandle.classList.toggle("left-4");
      //saves the checkbox value
      const checkStatus = unitsCheckBox.checked;
      handler(checkStatus);
    });
  }
  /**
   * Sets the position of the option bar based on the specified portion.
   * Adjusts the option bar's position to stay aligned with the corresponding portion of the container.
   *
   * @param {number} portion - The portion of the container to align the option bar with (1 for first portion, 2 for second portion, 3 for third portion).
   */
  setOptionBarPosition(portion) {
    this._parentElement.classList.remove("left-0");
    this._parentElement.classList.remove("left-1/3");
    this._parentElement.classList.remove("left-2/3");
    if (portion == 1) {
      this._parentElement.classList.add("left-0");
    }
    if (portion == 2) {
      this._parentElement.classList.add("left-1/3");
    }
    if (portion == 3) {
      this._parentElement.classList.add("left-2/3");
    }
  }
  /**
   * Reselects the first circle in the option bar.
   * Adjusts the width of all slider circles, ensuring the first circle is visually highlighted.
   */
  _reselectFirstcircle() {
    const sliderBtns = this._parentElement.querySelectorAll(".slider-circle");
    sliderBtns.forEach((btn, idx) => {
      btn.classList.remove("w-6");
      btn.classList.add("w-3");
      if (idx === 0) {
        btn.classList.add("w-6");
      }
    });
  }
}
export const optionsBarView = new OptionsBarView();
