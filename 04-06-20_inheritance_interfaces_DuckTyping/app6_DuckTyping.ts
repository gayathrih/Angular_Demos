class Car{

     no_wheel=4;
     name="";

     show(){}
}
class Bus{
    no_wheel=4;
     name="";

     show(){}
     
}

class Bicycle{
    no_wheel=2;

    print(){
          console.log("biCycle print func");
    }
}


 var carObj:Car =  new Bus(); //duck type ...possible

 var busObj:Bus =  new Car(); //duck  ..possible

 var biCycleObj : Bicycle =  new Car();

 //var i:number

 