function find(){
    var counter =0;
    var str="sofffdodlll";
     var str2="dod";
     for ( let j =0 ; j< str.length ; j++){
         if(str.charAt(j) === str2.charAt(0) && str.length - j > str2.length -1){
             for(let i=1 ; i<str2.length; i++ ){
                 if (str2.charAt(i) === str.charAt(j+i) ){
                     if( i === str2.length -1)
                    ++counter;
                 }
                 else break;

             }
         }

     }
     console.log(counter);
}

this.find();