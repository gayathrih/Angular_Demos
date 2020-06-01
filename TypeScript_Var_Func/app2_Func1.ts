function add(n1:number , n2:number){
     console.log("add : "+(n1+n2));
}

function custDetails(name:string , id :number ,pincode:number){
   return `Name =  ${name} \n ID = ${id} \n PINCODE = ${pincode}`;
}

add(1,2);

var res =  custDetails("jhon " ,100,50021);
console.log(res);
