import { By } from 'selenium-webdriver';
import BasePage from './BasePage.js';

export default class LoginPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.landingCard = By.xpath("//div[contains(@class, 'backdrop-blur') and h1]");
    this.headerLogo = By.xpath("//header//svg");
    this.featuresTab = By.xpath("//button[text()='Features']");
    this.securityTab = By.xpath("//button[text()='Security']");
    this.contactTab = By.xpath("//button[text()='Contact']");
    this.enterDashboardBtn = By.xpath("//button[contains(text(), 'Dashboard') or contains(text(), 'Enter Platform')]");
  }

  async verifyLandingCard() {
    return await this.isDisplayed(this.landingCard);
  }

  async verifyHeaderLogo() {
    return await this.isDisplayed(this.headerLogo);
  }

  async navigateToFeatures() {
    await this.click(this.featuresTab);
  }

  async navigateToSecurity() {
    await this.click(this.securityTab);
  }

  async navigateToContact() {
    await this.click(this.contactTab);
  }

  async enterPlatform() {
    await this.click(this.enterDashboardBtn);
  }
}
