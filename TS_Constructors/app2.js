var Test = /** @class */ (function () {
    function Test() {
    }
    Object.defineProperty(Test.prototype, "_n1", {
        /*
        getN1(){
            return this.n1;
        }
        setN1(n1:number){
           this.n1 = n1;
        }
        */
        get: function () {
            return this.n1;
        },
        set: function (n1) {
            this.n1 = n1;
        },
        enumerable: false,
        configurable: true
    });
    return Test;
}());
var testObj = new Test();
//console.log(testObj.n1); // error - private 
// testObj.setN1(20);
//console.log(testObj.getN1());
//want to call pprivate property ...but not thro func
testObj._n1 = 30; //set
console.log(testObj._n1); //get
