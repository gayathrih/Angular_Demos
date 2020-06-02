//rest parameters
// function printValues(...arr :string[]){

//       for(let i=0 ;i<arr.length;i++){
//             console.log(arr[i]);
//       }
// }


function printValues(...arr :any[]){

    for(let i=0 ;i<arr.length;i++){
          console.log(arr[i]);
    }
}



printValues("Mango","apple","Banana");
printValues(1,2,3,4,5);

printValues(1,2,"aa",'a',354.5,true ,false);