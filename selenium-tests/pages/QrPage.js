import { By } from 'selenium-webdriver';
import BasePage from './BasePage.js';

export default class QrPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.scanTabBtn = By.xpath("//button[contains(., 'Scan')]");
    this.qrScannerHeader = By.xpath("//h2[contains(., 'Scan QR') or contains(text(), 'QR')]");
    this.digitalSignatureField = By.xpath("//div[contains(text(), 'Digital Signature') or contains(text(), 'Signature')]");
    this.scanCountsIndicator = By.xpath("//div[contains(text(), 'Scan Count') or contains(text(), 'Scans')]");
  }

  async navigateToScanTab() {
    await this.click(this.scanTabBtn);
  }

  async verifyScannerHeader() {
    return await this.isDisplayed(this.qrScannerHeader);
  }

  async verifyDigitalSignaturePresent() {
    return await this.isDisplayed(this.digitalSignatureField);
  }
}
