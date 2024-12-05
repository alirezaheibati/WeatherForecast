/**
 * Represents the view for a city page option bar.
 */
class ContainerView {
  /**
   * The parent element in the DOM where the weather highlights will be rendered.
   * @type {HTMLElement}
   * @protected
   */
  _parentElement = document.getElementById("main-container");
  /**
   * Adds an event listener for the window resize event.
   * The handler is only called when the window width is greater than 768px.
   *
   * @param {function} handler - The function to call when the window is resized.
   */
  addHandlerToWindowResize(handler) {
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth > 768) {
        handler();
      }
    });
  }
  /**
   * Sets the visible portion of the container based on the specified portion.
   * Removes existing translation classes and adds the appropriate class to show the correct portion of the container.
   *
   * @param {number} portion - The portion of the container to display (1 for first portion, 2 for second portion, 3 for third portion).
   */
  setContainerPortionToView(portion) {
    this._parentElement.classList.remove("-translate-x-0");
    this._parentElement.classList.remove("-translate-x-1/3");
    this._parentElement.classList.remove("-translate-x-2/3");
    if (portion == 1) {
      this._parentElement.classList.add("-translate-x-0");
    }
    if (portion == 2) {
      this._parentElement.classList.add("-translate-x-1/3");
    }
    if (portion == 3) {
      this._parentElement.classList.add("-translate-x-2/3");
    }
  }
  /**
   * Resets the container translation to show the first portion.
   * Removes existing translation classes and ensures the first portion of the container is visible.
   */
  resetPortionView() {
    this._parentElement.classList.remove("-translate-x-0");
    this._parentElement.classList.remove("-translate-x-1/3");
    this._parentElement.classList.remove("-translate-x-2/3");
    this._parentElement.classList.add("-translate-x-0");
  }
  /**
   * Sets the background image of the weather forecast container.
   * - Selects the element with the class 'weather-forecast-continer'.
   * - Sets its background image to the specified image URL.
   *
   * @param {string} img - The name of the image file (without extension) to be used as the background.
   */
  renderBg(img) {
    this._parentElement.querySelector(
      ".weather-forecast-continer"
    ).style.backgroundImage = `url("https://alirezaheibati.ir/projects/assets/weather/bg/${img}.jpg")`;
  }
}
export const containerView = new ContainerView();
