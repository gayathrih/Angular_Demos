var Product = /** @class */ (function () {
    function Product(id, name) {
        this.id = id;
        this.name = name;
    }
    Product.prototype.displayProdDetails = function () {
        console.log(this.id + " " + this.name);
    };
    return Product;
}());
//#1
/*let obj = new Product();
 obj.id=1;
 obj.name="pen";

 obj.displayProdDetails();
 */
//let obj = new Product();
var obj = new Product();
obj.id = 1;
obj.name = "pen";
obj.displayProdDetails();
obj.displayProdDetails();
var obj2 = new Product(3, 'keyboard');
obj2.displayProdDetails();
var obj3 = new Product(4);
obj3.name = "mouse";
obj3.displayProdDetails();
