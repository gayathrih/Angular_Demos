
//  function test(){
//       console.log("test fucntion");
//  }

//test();

//Annonymous function - non-paramr
let res =function(){
             return " Annonumous test fucntion";
            }

var res2 = function(){
       console.log("Annonumous test2 fucntion");
}


//console.log(res() ); 

//res2();

// Arrow Func or Lamda Func

let res3 = ()=>{console.log("Lamda  fucntion");};
  res3();

  let res4= ()=>console.log("Lamda  fucntion");
    res4();

  let res5= (msg:string)=> console.log("Lamda Fuunc :  msg = "+msg); 
     res5("hello"); 

   let res6  = (id:number, name)=>{
           return "ID: "+id+" Name: "+name
   }  

   console.log(  res6(1,"Allen"));

   //check Even or ODdD

    let res7= (num)=>{

           if(num%2==0)
             return num+" Even num";
           else
               return num+" ODD num";
     }

     console.log( res7(2) );
     console.log( res7(43534) );
     console.log( res7(4353) );


