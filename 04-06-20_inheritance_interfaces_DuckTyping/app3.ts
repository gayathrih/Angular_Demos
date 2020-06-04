class A{
      public i=10;
      constructor(){
          console.log("Parnt non-parameterized constu");
      }

     public test(){
             console.log("Parent test func");
      }

}

class B extends A{
        i=20;
      constructor(){
          super();
          super.test();
         // console.log("parnt  i ="+super.i);
        console.log("child non-parameterized constu");
      }

      show(){
            console.log("chils :  show func");
      }
}


    var obj = new B();
    obj.test();
    obj.show();