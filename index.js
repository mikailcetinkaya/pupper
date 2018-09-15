const puppeteer = require('puppeteer');
let soru=1;
let data=[];
let base="file:///Users/mikail/Downloads/Bilsem%202018%20Final/uygulamaveorneksınav/";
let entry=base+"orn10.html";
var browser , page;

async function gotoHref(element){
  const href=await getAttribute(element, 'href');
  await page.goto(href);
  await page.waitFor(500);
}
async function getAttribute(element,attribute){
  const gg=await element.getProperty(attribute);
  const jj=await gg.jsonValue();
  return jj;
}
async function getImageArr(imgs){
  var i=[];
  for (let index = 0; index < imgs.length; index++) {
    const element = imgs[index];
    var e={};    
    e["src"]=await getAttribute(element, 'src');
    e.box=await element.boundingBox();
    i.push(e);
  }
  return i;
}
async function analyze(ss){
  var s=ss||{};
  try {
    //await page.screenshot({path: './debug/debug'+soru+'.png',fullPage:true});
    const content=await page.content();
    const shadowed = await page.$$('.rounded-corners');
    const imgs = await page.$$('img');
    const nonblocks = await page.$$('.nonblock');
    

    var answer=content.indexOf('title=');
    if (s.singlePage== null && answer>0) {
        s.answer=content.substring(answer+7,answer+8);
        s.singlePage=true;
        s.answerImgs=await getImageArr(imgs);
        await gotoHref(nonblocks[0]);

    }
    else
    {
        s.singlePage=false;
        if(shadowed.length>0){
          s.answerImgs=await getImageArr(imgs);
          await gotoHref(nonblocks[0]);
          
        }else if(imgs.length>0){
          s.questionImgs=await getImageArr(imgs);
          await gotoHref(nonblocks[0]);

        }
    }
  } catch (error) {
    console.log(error);
  }
  

  return s;
}

(async () => {
  browser = await puppeteer.launch({headless:false});
  page = await browser.newPage();
  await page.setViewport({width: 1024, height: 768});
  await page.goto(entry);
  var k;

  while(soru<=60){
    k=await analyze();
    if(!k.singlePage){
      k=await analyze(k);
    }
    data.push(k);
    soru++;
  }
  await browser.close();
  
})();
