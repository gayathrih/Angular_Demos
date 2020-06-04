var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    GenericClass.prototype.set = function (t) {
        this.t = t;
    };
    GenericClass.prototype.getT = function () {
        return this.t;
    };
    return GenericClass;
}());
var numObj = new GenericClass();
numObj.set(10);
console.log("Num : " + numObj.getT());
var strObj = new GenericClass();
strObj.set("hello");
console.log("strng : " + strObj.getT());
