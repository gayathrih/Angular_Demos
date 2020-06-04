var Sample = /** @class */ (function () {
    /*constructor(){
        console.log("am  default constuctor");
    }*/
    function Sample(n1) {
        this.i = 10;
        console.log("am  parameterized constuctor : " + n1);
    }
    Sample.prototype.test = function () {
        return "am test function";
    };
    return Sample;
}());
//var obj= new Sample();
var obj = new Sample(10);
console.log(obj.i);
console.log(obj.test());
