const fs= require('fs');

let data=[];
let k="+++require('../../../assets/data/s/";

for (let i = 15; i <= 20 ; i++) {
       for (let j = 1; j <= 15 ; j++) {
           var e={};
           e.test=j;
           e.soru=i;
           var pics=[];
           pics.push(k+i+'.'+j+'.1.png\')+++');
           pics.push(k+i+'.'+j+'.2.png\')+++');
           e.answerImgs=pics;
           e.singlePage=false;
           pics=[];
           var r=Math.ceil(Math.random()*4);
           if(r==1){
               e.answer="A";
               pics.push(k+i+'.'+j+'.3.png\')+++');
               pics.push(k+i+'.'+j+'.4.png\')+++');
               pics.push(k+i+'.'+j+'.5.png\')+++');
               pics.push(k+i+'.'+j+'.6.png\')+++');
           }
           if(r==2){
               e.answer="B";
               pics.push(k+i+'.'+j+'.4.png\')+++');
               pics.push(k+i+'.'+j+'.3.png\')+++');
               pics.push(k+i+'.'+j+'.5.png\')+++');
               pics.push(k+i+'.'+j+'.6.png\')+++');
           }
           if(r==3){
               e.answer="C";
               pics.push(k+i+'.'+j+'.4.png\')+++');
               pics.push(k+i+'.'+j+'.5.png\')+++');
               pics.push(k+i+'.'+j+'.3.png\')+++');
               pics.push(k+i+'.'+j+'.6.png\')+++');
           }
           if(r==4){
               e.answer="D";
               pics.push(k+i+'.'+j+'.4.png\')+++');
               pics.push(k+i+'.'+j+'.5.png\')+++');
               pics.push(k+i+'.'+j+'.6.png\')+++');
               pics.push(k+i+'.'+j+'.3.png\')+++');
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
           pics.push(k+i+'.'+j+'.1.png\')+++');
           e.answerImgs=null;
           e.singlePage=true;
           var r=Math.ceil(Math.random()*4);
           if(r==1){
               e.answer="A";
               pics.push(k+i+'.'+j+'.2.png\')+++');
               pics.push(k+i+'.'+j+'.3.png\')+++');
               pics.push(k+i+'.'+j+'.4.png\')+++');
               pics.push(k+i+'.'+j+'.5.png\')+++');
           }
           if(r==2){
               e.answer="B";
               pics.push(k+i+'.'+j+'.3.png\')+++');
               pics.push(k+i+'.'+j+'.2.png\')+++');
               pics.push(k+i+'.'+j+'.4.png\')+++');
               pics.push(k+i+'.'+j+'.5.png\')+++');
           }
           if(r==3){
               e.answer="C";
               pics.push(k+i+'.'+j+'.3.png\')+++');
               pics.push(k+i+'.'+j+'.4.png\')+++');
               pics.push(k+i+'.'+j+'.2.png\')+++');
               pics.push(k+i+'.'+j+'.5.png\')+++');
           }
           if(r==4){
               e.answer="D";
               pics.push(k+i+'.'+j+'.3.png\')+++');
               pics.push(k+i+'.'+j+'.4.png\')+++');
               pics.push(k+i+'.'+j+'.5.png\')+++');
               pics.push(k+i+'.'+j+'.2.png\')+++');
           }

           e.questionImgs=pics;
           data.push(e);
        } 
    }

fs.writeFileSync('./sequnced.js', JSON.stringify(data).replace(/\"\+\+\+/g,"").replace(/\+\+\+\"/g,""));