"use strict";
exports.__esModule = true;
exports.B = exports.A = void 0;
var A = /** @class */ (function () {
    function A() {
        this.title = "Title : A class";
    }
    A.prototype.show = function () {
        console.log(" A class show func");
    };
    return A;
}());
exports.A = A;
var B = /** @class */ (function () {
    function B() {
        this.title = "Title: B Class";
    }
    return B;
}());
exports.B = B;
var a_obj = new A();
console.log(a_obj.title);
a_obj.show();
