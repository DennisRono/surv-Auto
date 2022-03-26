
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  async function kibet() {
    //Seleciona a url
    await page.goto("https://denniskibet.com");
    await page.screenshot({ path: 'kibet.png' });
  }
  kibet();
})();