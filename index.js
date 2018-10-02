const puppeteer = require('puppeteer');
const fs= require('fs');

var soru=1;
let data=[];
let hint=[];
let base="file:///Users/mikail/Downloads/Bilsem%202018%20Final/uygulamaveorneksınav/";
let hintbase="./hint.txt"
let entry=base+"orn10.html";
var browser , page;
function cluster(list){
    var colorIndex = 0;
    var g = list.sort(function(a,b){
      if((a.box.y-15<=b.box.y)&&(b.box.y<=a.box.y+15)){
        return a.box.x<b.box.x?-1:1;
      }
      return a.box.y<b.box.y?-1:1;
      });
    
    for (var i = 0; i < g.length ; i++)
    {
        var x = g[i].box;
        var colored = false;
        for (var j =i-1 ; j >=0 ; j--)
        {
            var y = g[j].box; 
            var vic = Math.ceil(Math.sqrt(y.height * y.width)/4);
            if((y.x-vic <= x.x && y.x+y.width+vic >= x.x) &&
                (y.y-vic <= x.y && y.y+y.height+vic >=x.y ))
            {
                colored = true;
                x.cluster = y.cluster;
                break;
            } 
        }
        if (!colored) {
            colorIndex++;
            x.cluster = colorIndex;
        }
  
    }

    return g;
}
async function gotoHref(element){
  const href=await getAttribute(element, 'href');
  await page.goto(href);
  await page.waitFor(500);
}
async function getAttribute(element,attribute){
  const gg=await element.getProperty(attribute);
  const jj=await gg.jsonValue();
  if(attribute=='src'){
      let srx=jj.replace("file:///Users/mikail/Downloads/Bilsem%202018%20Final/uygulamaveorneks%C4%B1nav/","../../../assets/data/");
      srx=srx.replace(/\?crc=.*/,"");
      srx="+++require('"+srx+"')+++";
      return srx;
  }
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
      e["src"]="+++require('../../../assets/pictures/placeholder.png')+++";
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
          s.questionImgs=cluster(await getImageArr(shadowed));
        }else if(imgs.length>0){
          s.questionImgs=cluster(await getImageArr(imgs));
        }
    }
    else if(s.singlePage!= null && !s.singlePage)
    {
       s.answer=content.substring(answer+7,answer+8);
       if(shadowed.length>0){
          s.answerImgs=cluster(await getImageArr(shadowed));
        }else if(imgs.length>0){
          s.answerImgs=cluster(await getImageArr(imgs));
        }
    }
    else
    {
        s.singlePage=false;
        if(shadowed.length>0){
          s.questionImgs=cluster(await getImageArr(shadowed));
        }else if(imgs.length>0){
          s.questionImgs=cluster(await getImageArr(imgs));
        }
    }
    
    await gotoHref(nonblocks[0]);
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
    k.soru=soru;
    k.test=0;
    data.push(k);
    soru++;
  }
  await browser.close();
  fs.writeFileSync('./ornek.js', 
  JSON.stringify(data).replace(/\"\+\+\+/g,"").replace(/\+\+\+\"/g,""));
})();
