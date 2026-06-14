import { By } from 'selenium-webdriver';
import BasePage from './BasePage.js';

export default class AdminPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.settingsTabBtn = By.xpath("//button[contains(., 'Settings')]");
    this.darkModeSwitchLabel = By.xpath("//h4[contains(text(), 'Dark Mode') or contains(text(), 'theme')]");
    this.darkModeSwitchBtn = By.xpath("//button[./div[contains(@class, 'translate-x')]]");
    this.languageSelectDropdown = By.tagName('select');
    this.clearAllDatabaseBtn = By.xpath("//button[contains(., 'Clear All') or contains(@class, 'rose')]");
  }

  async navigateToSettings() {
    await this.click(this.settingsTabBtn);
  }

  async verifyDarkModeLabel() {
    return await this.isDisplayed(this.darkModeSwitchLabel);
  }

  async toggleDarkMode() {
    await this.click(this.darkModeSwitchBtn);
  }

  async selectLanguage(langName) {
    const el = await this.find(this.languageSelectDropdown);
    await el.sendKeys(langName);
  }

  async triggerClearDatabase() {
    await this.click(this.clearAllDatabaseBtn);
  }
}
