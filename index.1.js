const puppeteer = require('puppeteer');
const fs= require('fs');

let data=[];

let base="file:///Users/mikail/Downloads/Bilsem%202018%20Final/";

var browser , page;

var qs=[1 ,2 ,3, 4, 5, 6, 7 ,8 ,9, 10, 11 ,12 , 13 ,14, 21, 22 , 23, 24 ,25 ,51 ,52 ,53 ,54, 55, 56 ,57, 58, 59, 60 ];

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
       
    var cls=await getAttribute(element, 'className');
    
    var box=await element.boundingBox();
    if((box.x<0 ) || (box.y<0))      continue;
    
    var e={}; 

    e.box=box;

    if(cls==null || cls=="block"){
      e["src"]=await getAttribute(element, 'src');
      i.push(e);
      continue;
    }

    var shadowIndex=cls.indexOf("shadow");
    var img=await element.$$('img');
    
    if(shadowIndex<0 && img.length==0) continue;
    else if(shadowIndex>-1 && img.length==0)
    {
      if(cls!=null && cls.indexOf("nonblock")>-1 ) continue;
      var dd=await getAttribute(element, 'innerHTML');
      if(dd.indexOf("simple")>-1) continue;
      e["src"]="placeholder.png"+index;
    }
    else{
      e["src"]=await getAttribute(img[0], 'src');
    }
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
    if (s.singlePage== null && answer>-1) {
        s.answer=content.substring(answer+7,answer+8);
        s.singlePage=true;
        if(shadowed.length>0){
          s.questionImgs=await getImageArr(shadowed);
        }else if(imgs.length>0){
          s.questionImgs=await getImageArr(imgs);
        }
    }
    else if(s.singlePage!= null && !s.singlePage)
    {
       s.answer=content.substring(answer+7,answer+8);
       if(shadowed.length>0){
          s.answerImgs=await getImageArr(shadowed);
        }else if(imgs.length>0){
          s.answerImgs=await getImageArr(imgs);
        }
    }
    else
    {
        s.singlePage=false;
        if(shadowed.length>0){
          s.questionImgs=await getImageArr(shadowed);
        }else if(imgs.length>0){
          s.questionImgs=await getImageArr(imgs);
        }
    }
    
    await gotoHref(nonblocks[0]);
  } catch (error) {
    console.log(error);
  }
  

  return s;
}

async function getQs(entry,qq)  {
  browser = await puppeteer.launch({headless:false});
  page = await browser.newPage();
  await page.setViewport({width: 1024, height: 768});
  await page.goto(entry);
  var k;
  var test=1;
  while(test<=15){
    k=await analyze();
    if(!k.singlePage){
      k=await analyze(k);
    }
    k.soru=qq;
    k.test=test;
    data.push(k);
    test++;
  }
  await browser.close();
  
};

(async () => {
  for (let i = 16; i < qs.length; i++) {
    const element = qs[i];
    var entry=base+"0%20-%20Kopya%20("+element+")/q"+element+".1.html";
    await getQs(entry,element);
  }
})();
