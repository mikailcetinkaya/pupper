var fs = require('fs');
var path = "/Users/mikail/Downloads/Bilsem 2018 Final/uygulamaveorneksınav/orn";

let data=[];
for (let i = 1; i < 61; i++) {
    let m=i*10;
    let otherContent=null;
    ex={};
    try {
        otherContent = fs.readFileSync(path+(m+1)+".html").toString();
    } catch (error) {
        otherContent=null;
    }
    let content = fs.readFileSync(path+m+".html").toString();
    
    answer=content.indexOf('title=');
    if (answer>0) {
        ex["answer"]=content.substring(answer+7,answer+8);
        ex["singlePage"]=true;
    }
    else
    {
        answer=otherContent.indexOf('title=');
        ex["answer"]=otherContent.substring(answer+7,answer+8);
        ex["singlePage"]=false;
    }

    data.push(ex);
} 
console.log(data);