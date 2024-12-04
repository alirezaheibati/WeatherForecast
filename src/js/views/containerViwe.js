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
}
export const containerView = new ContainerView();
