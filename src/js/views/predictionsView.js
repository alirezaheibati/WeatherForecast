import View from "./View";
/**
 * Represents the view for a weather predictions section.
 * Extends the base View class to inherit common view properties and methods.
 */
class PredictionsView extends View {
  /**
   * The parent element in the DOM where the weather predictions will be rendered.
   * @type {HTMLElement}
   * @protected
   */
  _parentElement = document.getElementById("predictions-view");
  /**
   * Generates the markup for the next 6 weather predictions each 3 hours.
   *
   * @returns {string} The HTML markup for the weather highlights.
   * @protected
   */
  _generateMarkup() {
    const predictions = [];

    for (let i = 1; i < 7; i++) {
      predictions.push(`
                      <div
                class="bg-white w-[48%] xl:w-auto xl:flex-grow p-2 mb-2 rounded-lg text-center"
              >
                <p>${this._data.list[i].weather[0].description}</p>
                <img src="https://openweathermap.org/img/wn/${
                  this._data.list[i].weather[0].icon
                }.png" alt="${
        this._data.list[i].weather[0].main
      }" class="block mx-auto">
                <p>temp: ${this._data.list[i].main.temp}&deg;</p>
                <p>${this._data.list[i].dt_txt.slice(5, 16)}</p>
              </div>
        `);
    }
    return predictions.join(" ");
  }
}
export const predictionsView = new PredictionsView();
