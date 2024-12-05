import View from "../views/View";
import { cityWeatherModel } from "../models/cityWeatherModel";
import { highlightsView } from "../views/highlightsView";
import { predictionsView } from "../views/predictionsView";
import { weatherInfoView } from "../views/weatherInfoView";
import { locationInfoView } from "../views/locationInfoView";
import { optionsBarView } from "../views/optionsBarView";
import { searchBoxView } from "../views/searchBoxView";
import { mapView } from "../views/mapView";
import { containerView } from "../views/containerViwe";
import { messageView } from "../views/messageView";
/**
 * CityWeatherController class that manages the interaction between the model and views.
 * It handles user interactions, fetches weather data, and updates the views accordingly.
 */
export class CityWeatherController {
  /**
   * Constructor for the CityWeatherController class.
   * Initializes the model and views, and sets up event handlers for user interactions.
   */
  constructor() {
    this.cityWeatherModel = cityWeatherModel;
    // Set up event handlers
    optionsBarView.addHandlerUnitsChange(this.toggleUnitHandler.bind(this));
    optionsBarView.addHandlerSearchCity();
    searchBoxView.addHandlerSearchCityForm(this.searchCityHandler.bind(this));
    mapView.addHandleMapClick(this.handleClickOnMap.bind(this));
    optionsBarView.addHandlerSliderChange(
      this.slideContainerHandler.bind(this)
    );
    containerView.addHandlerToWindowResize(
      this.resetTranslateContainer.bind(this)
    );
    messageView.addHandleToCleseMessageBox();
  }
  /**
   * Renders all weather information using the respective views.
   * - Renders weather highlights.
   * - Renders weather predictions.
   * - Renders current weather information.
   * - Renders location information.
   */
  _renderAllWeatherInfo() {
    highlightsView.render(this.cityWeatherModel.weatherInfo);
    predictionsView.render(this.cityWeatherModel.weatherInfo);
    weatherInfoView.render(this.cityWeatherModel.weatherInfo.list[0]);
    locationInfoView.render(this.cityWeatherModel.weatherInfo.city);
    containerView.renderBg(
      this.cityWeatherModel.weatherInfo.list[0].weather[0].icon
    );
  }
  /**
   * Handles a click event on the map by loading weather information for the specified coordinates.
   * - Renders a loading spinner.
   * - Loads the city weather information based on the provided latitude and longitude.
   * - Renders all weather information views.
   * - Shows the return button for the search box.
   * - Closes the search box. * - Removes the loading spinner.
   *
   * @param {number} lat - The latitude of the clicked location.
   * @param {number} lng - The longitude of the clicked location.
   */
  async handleClickOnMap(lat, lng) {
    try {
      View.renderSpinner();
      await this.cityWeatherModel.loadCityWeatherByCoords(
        lat.toFixed(2),
        lng.toFixed(2),
        this.cityWeatherModel.units
      );
      this._renderAllWeatherInfo();
      this._showSearchBoxReturnButton();
      searchBoxView.closeSearchBox();
      View.removeSpinner();
    } catch (err) {
      this._manageError(err);
    }
  }
  /**
   * Asynchronously loads the weather information for a specified city and updates the view.
   * - Renders a loading spinner.
   * - Loads the city weather information.
   * - Renders all weather information views.
   * - Shows the return button for the search box.
   * - Closes the search box. * - Removes the loading spinner.
   *
   * @param {string} cityName - The name of the city to load weather information for.
   */
  async loadCityWeatherByName(cityName) {
    try {
      View.renderSpinner();
      await this.cityWeatherModel.loadCityWeatherByName(
        cityName,
        this.cityWeatherModel.units
      );
      this._renderAllWeatherInfo();
      this._showSearchBoxReturnButton();
      searchBoxView.closeSearchBox();
      View.removeSpinner();
    } catch (err) {
      this._manageError(err);
    }
  }
  _manageError(err) {
    View.removeSpinner();
    messageView.showMessageBox();
    if (err.message === "404") {
      messageView.render({
        title: "City Not Found.",
        message: "Double Check City Name And Try Again",
      });
    } else {
      messageView.render({
        title: "It's Not You, It's Me.",
        message: "It Took too long. Try Again Minute Later.",
      });
    }
  }
  /**
   * Toggles the weather unit (e.g., Celsius to Fahrenheit) and updates the view.
   * - Sets the weather unit in the model based on the check status.
   * - Re-renders all weather information views with the new unit.
   *
   * @param {boolean} checkStatus - The current status of the unit toggle (true for Fahrenheit, false for Celsius).
   */
  toggleUnitHandler(checkStatus) {
    this.cityWeatherModel.setWeatherUnit(checkStatus);
    this._renderAllWeatherInfo();
  }
  /**
   * Handles the city search operation.
   * - Loads the weather information for the specified city.
   * - Closes the search box.
   *
   * @param {string} cityName - The name of the city to load weather information for.
   */
  searchCityHandler(cityName) {
    this.loadCityWeatherByName(cityName);
    searchBoxView.closeSearchBox();
  }
  /**
   * at first run there should be no return button to make user have to search a city
   * Shows the return button in the search box view.
   */
  _showSearchBoxReturnButton() {
    searchBoxView.showReturnButton();
  }
  /**
   * Handles the sliding of the container to show the correct portion.
   * - Sets the container portion to view.
   * - Sets the position of the options bar.
   *
   * @param {number} slideTo - The portion of the container to slide to (1 for first portion, 2 for second portion, 3 for third portion).
   */
  slideContainerHandler(sildeTo) {
    containerView.setContainerPortionToView(sildeTo);
    optionsBarView.setOptionBarPosition(sildeTo);
  }
  /**
   * Resets the translation of the container and the position of the options bar.
   * - Resets the container portion view to its initial state.
   * - Resets the options bar position to its initial state.
   */
  resetTranslateContainer() {
    containerView.resetPortionView();
    optionsBarView.resetOptionBarPosition();
  }
}
