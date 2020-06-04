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
//super class
var Mobile = /** @class */ (function () {
    function Mobile() {
        //feilds
        this.model = "abc Model";
        this.price = 2000;
        this.memory = "2GB";
        this.color = "black color";
    }
    //actions or featues
    Mobile.prototype.printFeatures = function () {
        console.log("Model = " + this.model + " Price: " + this.price + " Memory = " + this.memory + " color =  " + this.color);
    };
    return Mobile;
}());
var Redmi = /** @class */ (function (_super) {
    __extends(Redmi, _super);
    function Redmi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Redmi;
}(Mobile));
//create an objet
var mobileObj = new Mobile();
mobileObj.printFeatures();
console.log("...................................");
var redmiObj = new Redmi();
redmiObj.color = "white color";
redmiObj.memory = "3 GB";
redmiObj.printFeatures();
