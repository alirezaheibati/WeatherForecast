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
  /**
   * Hides the message box by adjusting its CSS classes.
   * - Removes the 'flex' class from the parent element.
   * - Adds the 'hidden' class to the parent element.
   */
  _hideMessageBox() {
    this._parentElement.classList.remove("flex");
    this._parentElement.classList.add("hidden");
  }
  /**
   * Shows the message box by adjusting its CSS classes.
   * - Adds the 'flex' class from the parent element.
   * - Removes the 'hidden' class to the parent element.
   */
  showMessageBox() {
    this._parentElement.classList.remove("hidden");
    this._parentElement.classList.add("flex");
  }
  /**
   * Generates the HTML markup for the message box.
   *
   * @returns {string} - The generated HTML markup.
   */
  _generateMarkup() {
    return `          <div
            class="rounded-xl bg-slate-200 w-[400px] max-w-[95%] px-8 pb-4 pt-8  text-center"
          >
            <h2 class="text-3xl mb-2">${this._data.title}</h2>
            <p class="mb-4" >${this._data.message}</p>
                        <button
              id="error-btn"
              class="error-close-btn bg-slate-800 text-slate-200 rounded-lg px-8 py-2"
            >
              OK
            </button>
          </div>`;
  }
  /**
   ** Adds an event handler to close the message box when the close button is clicked.
   ** - Listens for click events on the parent element.
   * - Checks if the clicked target has the class 'error-close-btn'.
   * - Calls the _hideMessageBox method to hide the message box.
   */
  addHandleToCleseMessageBox() {
    this._parentElement.addEventListener("click", (e) => {
      if (e.target.classList.contains("error-close-btn")) {
        this._hideMessageBox();
      }
    });
  }
}
export const messageView = new MessageView();
