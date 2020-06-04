function concatNums(val1:number , val2:number){
   console.log(val1+val2);
   
}

function concatStrings(val1:string , val2:string){
    console.log(val1+val2);
    
 }

 function concat(val1:any  , val2:any):any{
    console.log(val1+val2);
 }

concatNums(1 , 2);

concatStrings("hello","hai");

concat(20,20);
concat("a","B");
concat("a",true);