import View from "./View";
/**
 * Represents the view for a weather highlights section.
 * Extends the base View class to inherit common view properties and methods.
 */
class HighlightsView extends View {
  /**
   * The parent element in the DOM where the weather highlights will be rendered.
   * @type {HTMLElement}
   * @protected
   */
  _parentElement = document.getElementById("highlights-view");
  /**
   * Converts a timestamp into a Date object.
   *
   * @param {number} timestamp - The timestamp to convert.
   * @returns {Date} - The Date object.
   */
  _convertTimestamp(timestamp) {
    return new Date(timestamp);
  }
  /**
   * Generates the markup for the highlights view.
   *
   * @returns {string} The HTML markup for the weather highlights.
   * @protected
   */
  _generateMarkup() {
    console.log(this._data);

    return `
                      <div
                    class="w-full py-3 px-5 mb-4 lg:w-[49%] xl:w-[32%] bg-slate-100 border border-solid border-slate-800 rounded-xl"
                  >
                    <div class=" flex justify-between items-center">
                      <p class="text-xl">Current Weather</p>
                      <div
                        class="text-slate-100 w-8 h-8 flex justify-center items-center bg-slate-800 rounded-xl"
                      >
                        <i class="fa-solid fa-snowflake"></i>
                      </div>
                    </div>
                    <img src="https://alirezaheibati.ir/projects/assets/weather/vector/${
                      this._data.list[0].weather[0].icon
                    }.png" alt="${
      this._data.list[0].weather[0].main
    }" class="block mx-auto">
                    <p class="text-center">${
                      this._data.list[0].weather[0].main
                    }</p>
                  </div>
                  <!-- Humidity -->
                  <div
                    class="w-full lg:w-[49%] xl:w-[32%] py-3 px-5 mb-4 bg-slate-100 border border-solid border-slate-800 rounded-xl"
                  >
                    <div class="mb-4 flex justify-between items-center">
                      <p class="text-xl">Humidity</p>
                      <div
                        class="text-slate-100 w-8 h-8 flex justify-center items-center bg-slate-800 rounded-xl"
                      >
                        <i class="fa-solid fa-droplet"></i>
                      </div>
                    </div>
                    <div class="px-1 flex justify-between items-center">
                      <p class="text-xl">
                        %<span class="text-6xl font-bold">${
                          this._data.list[0].main.humidity
                        }</span> water in air
                      </p>
    
                      <div
                        class="w-5 h-20 rounded-3xl border border-slate-800 border-solid p-1 relative"
                      >
                        <div class="bg-blue-400 rounded-2xl absolute left-1 bottom-1" style="height:${
                          this._data.list[0].main.humidity
                        }%; width:10px;"></div>
                      </div>
                    </div>
                  </div>
                  <!-- Visibility -->
                  <div
                    class="w-full lg:w-[49%] xl:w-[32%] py-3 px-5 mb-4 bg-slate-100 border border-solid border-slate-800 rounded-xl"
                  >
                    <div class="mb-4 flex justify-between items-center">
                      <p class="text-xl">Visibility</p>
                      <div
                        class="text-slate-100 w-8 h-8 flex justify-center items-center bg-slate-800 rounded-xl"
                      >
                        <i class="fa-solid fa-eye"></i>
                      </div>
                    </div>
                    <p class="text-xl">
                      <span class="text-6xl font-bold">${(
                        this._data.list[0].visibility / 1000
                      ).toFixed(2)}</span> KM
                    </p>
                    <p class="my-1 text-slate-800">
                      <i class="fa-solid fa-eye"></i> the degree of clearness
                    </p>
                  </div>
                  <!-- sunrise -->
                  <div
                    class="w-full lg:w-[49%] xl:w-[32%] py-3 px-5 mb-4 xl:mb-0 bg-slate-100 border border-solid border-slate-800 rounded-xl"
                  >
                    <div class="mb-4 flex justify-between items-center">
                      <p class="text-xl">Sunrise and Sunset</p>
                      <div
                        class="text-slate-100 w-8 h-8 flex justify-center items-center bg-slate-800 rounded-xl"
                      >
                        <i class="fa-solid fa-sun"></i>
                      </div>
                    </div>
                    <div>
                      <p class="text-2xl mb-4">
                        <i class="fa-solid fa-sun text-2xl text-orange-500"></i>
                        ${this._convertTimestamp(
                          this._data.city.sunrise * 1000
                        ).getHours()}:${this._convertTimestamp(
      this._data.city.sunrise * 1000
    ).getMinutes()} AM
                      </p>
                      <p class="text-2xl">
                        <i class="fa-solid fa-moon text-2xl text-slate-800"></i>
                        18:24 PM
                      </p>
                    </div>
                  </div>
                  <!-- min and max -->
                  <div
                    class="w-full lg:w-[49%] xl:w-[32%] py-3 px-5 mb-4 lg:mb-0 bg-slate-100 border border-solid border-slate-800 rounded-xl"
                  >
                    <div class="mb-4 flex justify-between items-center">
                      <p class="text-xl">Min/Max Temp in City</p>
                      <div
                        class="text-slate-100 w-8 h-8 flex justify-center items-center bg-slate-800 rounded-xl"
                      >
                        <i class="fa-solid fa-temperature-full"></i>
                      </div>
                    </div>
                    <div>
                      <p class="text-2xl mb-4">
                        <i
                          class="fa-solid fa-sun text-lg bg-yellow-400 text-orange-500 rounded-full p-1 border-4 border-solid border-orange-500"
                        ></i>
                        Max: ${this._data.list[0].main.temp_max}&deg;
                      </p>
                      <p class="text-2xl">
                        <i
                          class="fa-solid fa-snowflake text-lg bg-sky-400 text-blue-500 rounded-full p-1 border-4 border-solid border-blue-500"
                        ></i>
                        Min: ${this._data.list[0].main.temp_min}&deg;
                      </p>
                    </div>
                  </div>
                  <!--  wind status -->
                  <div
                    class="w-full lg:w-[49%] xl:w-[32%] py-3 px-5 bg-slate-100 border border-solid border-slate-800 rounded-xl"
                  >
                    <div class="mb-4 flex justify-between items-center">
                      <p class="text-xl">Wind status</p>
                      <div
                        class="text-slate-100 w-8 h-8 flex justify-center items-center bg-slate-800 rounded-xl"
                      >
                        <i class="fa-solid fa-wind"></i>
                      </div>
                    </div>
                    <p class="text-xl">
                      <span class="text-6xl font-bold">${
                        this._data.list[0].wind.speed
                      }</span> KM/H
                    </p>
                    <p class="my-1 text-slate-800">
                      <i class="fa-solid fa-wind"></i> direction: ${
                        this._data.list[0].wind.deg
                      } degree
                    </p>
                  </div>
        `;
  }
}
export const highlightsView = new HighlightsView();
