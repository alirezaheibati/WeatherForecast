/**
 * Main entry point for the application.
 * Imports and initializes the CityWeatherController when the DOM content is loaded.
 */
import { CityWeatherController } from "./controllers/cityWeatherController";
document.addEventListener("DOMContentLoaded", () => {
  const cityWeatherController = new CityWeatherController();
});
