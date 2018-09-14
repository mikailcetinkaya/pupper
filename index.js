const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("file:///Users/mc1798/Downloads/Bilsem 2018 Final/uygulamaveorneksınav/orn"+"61.html");
  await page.screenshot({path: 'example.png',fullPage:true});
  const elementHandle = await page.$$('.shadow');
  const bb = await elementHandle[0].boundingBox();
  const img = await elementHandle[1].$$('imgx');
  const src= await img[0].getProperty('src');
  const srr=await src.jsonValue();
  await browser.close();
})();
