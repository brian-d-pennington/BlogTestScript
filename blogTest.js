const {Builder, By, Key, until} = require('selenium-webdriver');
 
(async () => {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://aqueous-savannah-62691.herokuapp.com/');
    await driver.sleep(3000);
    //await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    //await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    await driver.findElement(By.tagName('button')).click();
    await driver.sleep(5000);
    await driver.findElement(By.className('styles_closeButton__20ID4')).click();    
  } finally {
    await driver.quit();
  }
})();

