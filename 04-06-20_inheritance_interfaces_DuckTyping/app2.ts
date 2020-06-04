class Parent{

     i=10;

     show(){
          console.log("Parent :  show func");
     }
}

class Child extends Parent{

     i=20;

     show(){
        console.log("Child :  show func");  
     }

     test(){
        console.log("child:  test func");
     }
}

 var childObj =new Child();
  console.log("i = "+childObj.i); // 20
  childObj.show(); //  chid show func
  childObj.test(); // child test func
  