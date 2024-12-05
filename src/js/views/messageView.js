import View from "./View";
/**
 * Represents the view for a weather highlights section.
 * Extends the base View class to inherit common view properties and methods.
 */
class MessageView extends View {
  /**
   * The parent element in the DOM where the weather highlights will be rendered.
   * @type {HTMLElement}
   * @protected
   */
  _parentElement = document.getElementById("message-container");
}
export const messageView = new MessageView();
