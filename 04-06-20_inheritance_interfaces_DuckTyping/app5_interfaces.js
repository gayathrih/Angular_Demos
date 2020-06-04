var AImpl = /** @class */ (function () {
    function AImpl() {
    }
    AImpl.prototype.test = function () {
        console.log("AImpl test func");
    };
    AImpl.prototype.show = function () {
        console.log("AImpl show func");
    };
    return AImpl;
}());
var AImplObj = new AImpl();
AImplObj.test();
AImplObj.show();
