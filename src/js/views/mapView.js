import L from "leaflet";
/**
 * Class representing the leaflet map view.
 */
class MapView {
  /**
   * The parent element where leaflet map will render.
   * @private
   * @type {HTMLElement}
   */
  _parentElement = document.getElementById("map");
  constructor() {
    this.initiateMap();
  }
  /**
   * initiateMap Method
   * Sets up the Leaflet map and its tile layer.
   */
  initiateMap() {
    // Create the Leaflet map and set the view to a specific location and zoom level
    this.map = L.map(this._parentElement).setView([35.72, 51.38], 11);
    // Add OpenStreetMap tile layer to the map
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }
  /**
   * Creates a map marker at the specified latitude and longitude.
   *
   * @param {number} lat - The latitude of the marker.
   * @param {number} lng - The longitude of the marker.
   * @private
   */
  _createMapMarker(lat, lng) {
    L.marker([lat, lng]).addTo(this.map);
  }
  /**
   * Adds an event handler for map clicks.
   * When the map is clicked, it creates a marker at the click location
   * and calls the provided handler with the latitude and longitude of the click.
   *
   * @param {function} handler - The function to call with the latitude and longitude when the map is clicked.
   */
  addHandleMapClick(handler) {
    this.map.on("click", (mapEvent) => {
      this._createMapMarker(mapEvent.latlng.lat, mapEvent.latlng.lng);
      handler(mapEvent.latlng.lat, mapEvent.latlng.lng);
    });
  }
}
export const mapView = new MapView();
