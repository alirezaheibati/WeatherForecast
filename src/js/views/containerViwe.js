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
}
export const containerView = new ContainerView();
