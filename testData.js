const sorular = {'singlePage': false,
'questionImgs': [{'box': {'x': 219,'y': 175,'width': 146,'height': 151,'cluster': 1}
,'src': "require('../../../assets/data/4/images/e8.png')"}, 
{'box': {'x': 365,'y': 175,'width': 146,'height': 151,'cluster': 1},
'src': "require('../../../assets/data/4/images/e9.png')"},
 {'box': {'x': 512,'y': 174,'width': 147,'height': 151,'cluster': 1},
 'src': "require('../../../assets/data/4/images/e10.png')"},
  {'box': {'x': 658,'y': 174,'width': 147,'height': 151,'cluster': 1},'src': "require('../../../assets/data/4/images/e11.png')"}],'answer': 'C','answerImgs': [{'box': {'x': 322,'y': 96,'width': 95,'height': 98,'cluster': 1},'src': "require('../../../assets/pictures/placeholder.png')"},
   {'box': {'x': 417,'y': 97,'width': 95,'height': 98,'cluster': 1},
   'src': "require('../../../assets/pictures/placeholder.png')"},
    {'box': {'x': 512,'y': 97,'width': 95,'height': 98,'cluster': 1},
    'src': "require('../../../assets/data/4/images/sor.png')"}, {'box': {'x': 607,'y': 97,'width': 95,'height': 98,'cluster': 1},'src': "require('../../../assets/pictures/placeholder.png')"}, {'box': {'x': 84,'y': 281,'width': 95,'height': 98,'cluster': 2},'src': "require('../../../assets/pictures/placeholder.png')"}, {'box': {'x': 179,'y': 280,'width': 95,'height': 98,'cluster': 2},'src': "require('../../../assets/pictures/placeholder.png')"}, {'box': {'x': 274,'y': 280,'width': 95,'height': 98,'cluster': 2},'src': "require('../../../assets/data/4/images/e8.png')"}, {'box': {'x': 369,'y': 280,'width': 95,'height': 98,'cluster': 2},'src': "require('../../../assets/pictures/placeholder.png')"}, {'box': {'x': 559,'y': 277,'width': 95,'height': 90,'cluster': 3},'src': "require('../../../assets/pictures/placeholder.png')"}, {'box': {'x': 654,'y': 277,'width': 95,'height': 90,'cluster': 3},'src': "require('../../../assets/pictures/placeholder.png')"}, {'box': {'x': 749,'y': 277,'width': 95,'height': 90,'cluster': 3},'src': "require('../../../assets/data/4/images/e10.png')"}, {'box': {'x': 844,'y': 277,'width': 95,'height': 90,'cluster': 3},'src': "require('../../../assets/pictures/placeholder.png')"}, {'box': {'x': 84,'y': 415,'width': 95,'height': 91,'cluster': 4},'src': "require('../../../assets/pictures/placeholder.png')"}, {'box': {'x': 179,'y': 414,'width': 95,'height': 91,'cluster': 4},'src': "require('../../../assets/pictures/placeholder.png')"}, {'box': {'x': 274,'y': 414,'width': 95,'height': 91,'cluster': 4},'src': "require('../../../assets/data/4/images/e9.png')"}, {'box': {'x': 369,'y': 414,'width': 95,'height': 90,'cluster': 4},'src': "require('../../../assets/pictures/placeholder.png')"}, {'box': {'x': 560,'y': 415,'width': 95,'height': 90,'cluster': 5},'src': "require('../../../assets/pictures/placeholder.png')"}, {'box': {'x': 655,'y': 414,'width': 95,'height': 90,'cluster': 5},'src': "require('../../../assets/pictures/placeholder.png')"}, {'box': {'x': 750,'y': 414,'width': 95,'height': 90,'cluster': 5},'src': "require('../../../assets/data/4/images/e11.png')"}, {'box': {'x': 845,'y': 414,'width': 95,'height': 90,'cluster': 5},'src': "require('../../../assets/pictures/placeholder.png')"}],'soru': 4,'test': 3};

function getCluster (a, clusterNumber) {
 let r=[];
  a.forEach(e => {
      if (e.box.cluster == clusterNumber) r.push(e);}
  );
  return r;  
}
function getClusterDim (c) {
 let X=1;let Y=0;
 if(c.length<=0) return{X:0,Y:0};
 if(c.length==1) return{X:1,Y:1};
 for (let i = 0; i < c.length-1; i++) {
     const e = c[i];
     const f = c[i];
     if(e.box.y-15<=f.box.y && e.box.y+15>=f.box.y ) X++;
 }
 Y=c.length/X;
 return {X:X,Y:Y};  
}

var b = getCluster(sorular.questionImgs, 1)
var cx=getClusterDim(b)
console.log(b, cx)