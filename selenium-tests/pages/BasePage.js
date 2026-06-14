import { By, until } from 'selenium-webdriver';

export default class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async navigateTo(url) {
    await this.driver.get(url);
  }

  async find(locator, timeout = 10000) {
    return await this.driver.wait(until.elementLocated(locator), timeout);
  }

  async findMultiple(locator) {
    return await this.driver.findElements(locator);
  }

  async click(locator, timeout = 10000) {
    const el = await this.find(locator, timeout);
    await this.driver.wait(until.elementIsVisible(el), timeout);
    await el.click();
  }

  async type(locator, text, timeout = 10000) {
    const el = await this.find(locator, timeout);
    await this.driver.wait(until.elementIsVisible(el), timeout);
    await el.clear();
    await el.sendKeys(text);
  }

  async getText(locator, timeout = 10000) {
    const el = await this.find(locator, timeout);
    return await el.getText();
  }

  async isDisplayed(locator, timeout = 5000) {
    try {
      const el = await this.find(locator, timeout);
      return await el.isDisplayed();
    } catch {
      return false;
    }
  }

  async executeScript(script, ...args) {
    return await this.driver.executeScript(script, ...args);
  }
}
