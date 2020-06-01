function printEmpDetails(id:number , name?:string, sal?:number){

     console.log("ID: "+id+" Name: "+name+" Salary "+sal);
}

// function printEmp( name?:string, id:number , sal?:number){

//     console.log("ID: "+id+" Name: "+name+" Salary "+sal);
// }

printEmpDetails(100 , "Allen" , 22545);
printEmpDetails(101 , "Smith" );
printEmpDetails(100 );
