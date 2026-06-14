import { By } from 'selenium-webdriver';
import BasePage from './BasePage.js';

export default class GeoTagPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.streamHeader = By.xpath("//h4[contains(., 'Satellite Stream')]");
    this.latValEl = By.xpath("//div[div[contains(text(), 'Latitude')]]/div[contains(@class, 'font-mono') or contains(@class, 'font-black')]");
    this.lngValEl = By.xpath("//div[div[contains(text(), 'Longitude')]]/div[contains(@class, 'font-mono') or contains(@class, 'font-black')]");
    this.activeAddressVal = By.xpath("//div[div[contains(text(), 'Active Address')]]/div[contains(@class, 'text-slate-700')]");
    this.leafletMapContainer = By.className("leaflet-container");
    this.gpsIndicatorPill = By.xpath("//span[contains(text(), 'LOCKING') or contains(text(), 'GPS')]");
  }

  async verifySatelliteStreamHeader() {
    return await this.isDisplayed(this.streamHeader);
  }

  async getLatitudeText() {
    return await this.getText(this.latValEl);
  }

  async getLongitudeText() {
    return await this.getText(this.lngValEl);
  }

  async getActiveAddressText() {
    return await this.getText(this.activeAddressVal);
  }

  async verifyLeafletMapRender() {
    return await this.isDisplayed(this.leafletMapContainer);
  }
}
