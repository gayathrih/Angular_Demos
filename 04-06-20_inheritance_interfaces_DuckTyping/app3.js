var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = /** @class */ (function () {
    function A() {
        this.i = 10;
        console.log("Parnt non-parameterized constu");
    }
    A.prototype.test = function () {
        console.log("Parent test func");
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        var _this = _super.call(this) || this;
        _this.i = 20;
        _super.prototype.test.call(_this);
        // console.log("parnt  i ="+super.i);
        console.log("child non-parameterized constu");
        return _this;
    }
    B.prototype.show = function () {
        console.log("chils :  show func");
    };
    return B;
}(A));
var obj = new B();
obj.test();
obj.show();
