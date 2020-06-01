function printProdDetails(id, name, price) {
    if (price === void 0) { price = 0; }
    console.log("ID: " + id + " Name: " + name + " Price " + price);
}
printProdDetails(1, "Cmputer", 235457);
printProdDetails(2);
printProdDetails(3, "Pen");
