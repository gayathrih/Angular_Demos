class GenericClass<T>{

      t : T;

      set(t:T){
          this.t = t;
      }
      getT(){
          return this.t;
      }
}


var numObj=new GenericClass<number>();
   numObj.set(10);
    console.log("Num : "+numObj.getT());


    var strObj=new GenericClass<string>();
   strObj.set("hello");
    console.log("strng : "+strObj.getT());