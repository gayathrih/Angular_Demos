function add(n1, n2) {
    console.log("add : " + (n1 + n2));
}
function custDetails(name, id, pincode) {
    return "Name =  " + name + " \n ID = " + id + " \n PINCODE = " + pincode;
}
add(1, 2);
var res = custDetails("jhon ", 100, 50021);
console.log(res);
