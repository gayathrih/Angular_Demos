class Test{

      private n1:number;

      /*
      getN1(){
          return this.n1;
      }
      setN1(n1:number){
         this.n1 = n1;
      }
      */
       //Property
      get _n1(){
          return this.n1;
      }
      set _n1(n1:number){
           this.n1 =  n1;
      }

}

let testObj=  new Test();
  //console.log(testObj.n1); // error - private 

    // testObj.setN1(20);
    //console.log(testObj.getN1());

    //want to call pprivate property ...but not thro func
     testObj._n1 = 30;  //set
     console.log(testObj._n1);//get