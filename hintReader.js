const fs= require('fs');
let hints=[];

function getHints(info,hint,arr){
    var soruBas=parseInt(arr[0].replace(".","").replace("-",""));
    var testBas=parseInt(arr[1].replace(".","").replace("-",""));
    var testBit=0;
    var soruBit=0;
    var ara=[];

    if(arr.length>2){
        testBit=arr[3].replace(".","").replace("-","");
        soruBit=arr[2].replace(".","").replace("-","");
    }
    else{
        testBit=testBas;
        soruBit=soruBas;
    }
    for (let i = testBas; i <= testBit ; i++) {
       for (let j = soruBas; j <= soruBit ; j++) {
           var e={};
           e.test=i;
           e.soru=j;
           e.info=info;
           e.hint=hint;
           ara.push(e)
        } 
    }
    return ara;
}
fs.readFile("hint.txt" , function(err, data) {
   var par=data.toString();
   var rn=par.split("\r\n");
   var i=0;
   let enter=false;
   let info="";
   let hint="";
   let arr=[];
   while(i<rn.length){
    let line=rn[i];
    
     if(line.replace(" ","")!=''){ 
        if(line!="++++++++++++"){
            if( line.indexOf("./q")>-1||line.indexOf("./orn")>-1){
                if(line.indexOf("./orn")>-1) line=line.replace(".txt",".0.");
                line=line.replace("./q","").replace("./orn-","");
                arr=line.match(/\d*(\.|-)/igm);
            }
            else{
                if (line.indexOf("İnfo")>-1) {
                    info=line.replace("İnfo :","").replace("İnfo:","").trim();
                    info=info=="-"?"":info;
                }
                else{
                    hint=line.replace("Hint :","").replace("Hint:","").trim();
                    hint=hint=="-"?"":hint;
                }
            }
        }
        else{
            hints=getHints(info, hint, arr).concat( hints);
            info="";
            hint="";
            arr=[];
        }
     }
     i++;
   }

  });
