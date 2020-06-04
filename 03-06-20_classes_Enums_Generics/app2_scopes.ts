
//Global scope
  var gloabalVar=10;

  function globalFunc(){
      console.log("Am Global Fucntion");
  }


  class Test{

       //class scope:  class var
        classVar=20;
        classFunction(){
            console.log(`Gloval Var = ${gloabalVar}`);
             globalFunc();
                 console.log(`class Var = ${this.classVar}`);
                console.log("Am class Fucntion");

            //local scope: local var
             var localVar=30;
               console.log("Local Var = "+localVar)

        }

  }

  globalFunc();
   console.log(gloabalVar);

  var testObj = new Test();
  testObj.classFunction();