//Global scope
var gloabalVar = 10;
function globalFunc() {
    console.log("Am Global Fucntion");
}
var Test = /** @class */ (function () {
    function Test() {
        //class scope:  class var
        this.classVar = 20;
    }
    Test.prototype.classFunction = function () {
        console.log("Gloval Var = " + gloabalVar);
        globalFunc();
        console.log("class Var = " + this.classVar);
        console.log("Am class Fucntion");
        //local scope: local var
        var localVar = 30;
        console.log("Local Var = " + localVar);
    };
    return Test;
}());
globalFunc();
console.log(gloabalVar);
var testObj = new Test();
testObj.classFunction();
