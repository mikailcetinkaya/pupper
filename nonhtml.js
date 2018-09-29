const fs= require('fs');

let data=[];

for (let i = 15; i <= 20 ; i++) {
       for (let j = 1; j <= 15 ; j++) {
           var e={};
           e.test=j;
           e.soru=i;
           var pics=[];
           pics.push(i+'.'+j+'.1.png');
           pics.push(i+'.'+j+'.2.png');
           e.answerImgs=pics;
           e.singlePage=false;
           pics=[];
           var r=Math.ceil(Math.random()*4);
           if(r==1){
               pics.push(i+'.'+j+'.3.png');
               pics.push(i+'.'+j+'.4.png');
               pics.push(i+'.'+j+'.5.png');
               pics.push(i+'.'+j+'.6.png');
           }
           if(r==2){
               pics.push(i+'.'+j+'.4.png');
               pics.push(i+'.'+j+'.3.png');
               pics.push(i+'.'+j+'.5.png');
               pics.push(i+'.'+j+'.6.png');
           }
           if(r==3){
               pics.push(i+'.'+j+'.4.png');
               pics.push(i+'.'+j+'.5.png');
               pics.push(i+'.'+j+'.3.png');
               pics.push(i+'.'+j+'.6.png');
           }
           if(r==4){
               pics.push(i+'.'+j+'.4.png');
               pics.push(i+'.'+j+'.5.png');
               pics.push(i+'.'+j+'.6.png');
               pics.push(i+'.'+j+'.3.png');
           }

           e.questionImgs=pics;
           data.push(e);
        } 
    }

for (let i = 26; i <= 50 ; i++) {
       for (let j = 1; j <= 15 ; j++) {
           var e={};
           e.test=j;
           e.soru=i;
           var pics=[];
           pics.push(i+'.'+j+'.1.png');
           e.answerImgs=null;
           e.singlePage=true;
           var r=Math.ceil(Math.random()*4);
           if(r==1){
               pics.push(i+'.'+j+'.2.png');
               pics.push(i+'.'+j+'.3.png');
               pics.push(i+'.'+j+'.4.png');
               pics.push(i+'.'+j+'.5.png');
           }
           if(r==2){
               pics.push(i+'.'+j+'.3.png');
               pics.push(i+'.'+j+'.2.png');
               pics.push(i+'.'+j+'.4.png');
               pics.push(i+'.'+j+'.5.png');
           }
           if(r==3){
               pics.push(i+'.'+j+'.3.png');
               pics.push(i+'.'+j+'.4.png');
               pics.push(i+'.'+j+'.2.png');
               pics.push(i+'.'+j+'.5.png');
           }
           if(r==4){
               pics.push(i+'.'+j+'.3.png');
               pics.push(i+'.'+j+'.4.png');
               pics.push(i+'.'+j+'.5.png');
               pics.push(i+'.'+j+'.2.png');
           }

           e.questionImgs=pics;
           data.push(e);
        } 
    }

fs.writeFileSync('./sequnced.json', JSON.stringify(data));