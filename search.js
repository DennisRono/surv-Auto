const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768});

  function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
  }

  async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                   var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}

  async function google_search() {
    await page.goto("https://bostonu.qualtrics.com/jfe/form/SV_a4brMRTdnbadU0u");
    // await page.evaluate(() => {
    //   document.querySelector('input[name="q"]').value = "denniskibet";
    // });
    // await page.keyboard.press("Enter");
    // for (let i = 0; i < 2; i++) {
    //   await page.keyboard.press("Tab", { delay: 100 });
    // }
    await page.keyboard.press("Tab", { delay: 100 });
    await page.keyboard.press("Enter");
    await delay(3000);
    await page.keyboard.press("Tab", { delay: 100 });
    await page.keyboard.press('ArrowDown');
  }

  async function youtube_video() {
    await page.goto("https://youtube.com");
    await page.evaluate(() => {
      document.querySelector('input[name="search_query"]').value = "GitHub";
    });
    await page.click("button#search-icon-legacy");
    const data = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('#video-title'));
      return links.map(link => link.href).slice(0, 10);
    });

    console.log(data);
  }

  async function linkedin() {
    await page.goto("https://www.linkedin.com/search/results/content/?datePosted=%22past-24h%22&keywords=survey%20gift%20card&origin=FACETED_SEARCH&sid=qRb");

  }
  youtube_video()

  // google_search();
})();