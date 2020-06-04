class Sample{
   
     i =10;
    /*constructor(){
        console.log("am  default constuctor");
    }*/

    constructor(n1:number){
        console.log("am  parameterized constuctor : "+n1);
    }
   

    test():any{
        return "am test function";
    }

}

 //var obj= new Sample();

 var obj= new Sample(10);
 console.log(obj.i);
 console.log(obj.test());