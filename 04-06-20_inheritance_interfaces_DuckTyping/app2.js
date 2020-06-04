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
var Parent = /** @class */ (function () {
    function Parent() {
        this.i = 10;
    }
    Parent.prototype.show = function () {
        console.log("Parent :  show func");
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.i = 20;
        return _this;
    }
    /*show(){
       console.log("Child :  show func");
    }*/
    Child.prototype.test = function () {
        console.log("child:  test func");
    };
    return Child;
}(Parent));
var childObj = new Child();
console.log("i = " + childObj.i); // 20
childObj.show(); //  chid show func
childObj.test(); // child test func
