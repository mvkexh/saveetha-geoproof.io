import { By } from 'selenium-webdriver';
import BasePage from './BasePage.js';

export default class ReportsPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.historyTabBtn = By.xpath("//button[contains(., 'History')]");
    this.detailsTabHeader = By.xpath("//h2[contains(text(), 'Verification Details') or contains(text(), 'Report')]");
    this.hashTextVal = By.xpath("//div[contains(text(), '9ca4') or contains(text(), 'dee5')]");
    this.downloadPdfBtn = By.xpath("//button[contains(., 'PDF') or contains(text(), 'Export')]");
    this.backToHistoryBtn = By.xpath("//button[contains(text(), 'Back') or contains(text(), 'History')]");
    this.verificationBadgeStatus = By.xpath("//span[contains(@class, 'VERIFIED') or contains(text(), 'VERIFIED') or contains(text(), 'TAMPERED')]");
  }

  async navigateToHistory() {
    await this.click(this.historyTabBtn);
  }

  async verifyDetailsHeader() {
    return await this.isDisplayed(this.detailsTabHeader);
  }

  async getHashText() {
    return await this.getText(this.hashTextVal);
  }

  async clickDownloadPdf() {
    await this.click(this.downloadPdfBtn);
  }

  async goBackToHistory() {
    await this.click(this.backToHistoryBtn);
  }

  async getVerificationStatus() {
    return await this.getText(this.verificationBadgeStatus);
  }
}
