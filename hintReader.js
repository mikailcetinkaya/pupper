const fs= require('fs');

fs.readFile(hintbase , function(err, data) {
   var par=data.toString();
   var rn=par.split("\r\n");
   var i=0;
   let enter=false;
   while(i<rn.length){
    let line=rn[i];
    
     if(line!=''){ 
        if(line!="++++++++++++"){
            if( line.contains("./q"){

            }
            else{
                if (line.contains("nfo")) {
                    
                }
            }
        }
        else{

        }
     }
     i++;
   }

  });
