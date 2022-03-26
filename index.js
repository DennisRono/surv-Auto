const {Builder, By, Key, until} = require('selenium-webdriver');

const firefox = require('selenium-webdriver/firefox');
let options = new firefox.Options().setBinary('C:/Program Files/Mozilla Firefox/firefox.exe');

(async function surv() {
  let driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
  try {
    await driver.get('https://denniskibet.com');
    //driver.executeScript("arguments[0].scrollIntoView()", element);
    
    await driver.executeScript('window.scrollTo(0, 2852)');
    await driver.findElement(By.xpath(`//*[@id="QID1-1-label"]`)).click();
    // await driver.findElement(By.css('input[type="email"]')).sendKeys('selenium@selenium.com');
    // driver.wait(until.elementLocated(By.name('QR-QID1-1')))
    //await driver.findElement(By.name('QR~QID1~1')).click();
    // await driver.findElement(By.name('message')).sendKeys('holla trying out selenium automation');
    //await driver.findElement(By.css('')).click();
    // await driver.findElement(By.css('input[type="submit"]')).click();
    //await driver.wait(until.titleIs('webdriver - Google Search'), 5000);
  } catch(err){
    console.log(err);
  }
})();