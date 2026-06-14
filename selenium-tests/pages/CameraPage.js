import { By } from 'selenium-webdriver';
import BasePage from './BasePage.js';

export default class CameraPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.captureTabPill = By.xpath("//button[contains(., 'Live Capture')]");
    this.uploadTabPill = By.xpath("//button[contains(., 'Upload Image')]");
    this.shutterBtn = By.xpath("//button[./div[contains(@class, 'bg-red-500')]]");
    this.dragAndDropZone = By.xpath("//p[contains(., 'Drag & Drop') or contains(text(), 'Browse')]");
    this.cameraErrorWarning = By.xpath("//div[contains(text(), 'Camera permission blocked') or contains(text(), 'stream')]");
    this.verificationOverlayPill = By.xpath("//div[contains(text(), 'GPS') or contains(text(), 'Accuracy')]");
    this.gpsRefreshBtn = By.xpath("//button[contains(., 'Refresh GPS')]");
  }

  async selectLiveCapture() {
    await this.click(this.captureTabPill);
  }

  async selectUploadMode() {
    await this.click(this.uploadTabPill);
  }

  async triggerCapture() {
    await this.click(this.shutterBtn);
  }

  async refreshGps() {
    await this.click(this.gpsRefreshBtn);
  }

  async isCameraWarnDisplayed() {
    return await this.isDisplayed(this.cameraErrorWarning);
  }

  async isOverlayStampVisible() {
    return await this.isDisplayed(this.verificationOverlayPill);
  }
}
