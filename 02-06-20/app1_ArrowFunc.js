//  function test(){
//       console.log("test fucntion");
//  }
//test();
//Annonymous function - non-paramr
var res = function () {
    return " Annonumous test fucntion";
};
var res2 = function () {
    console.log("Annonumous test2 fucntion");
};
//console.log(res() ); 
//res2();
// Arrow Func or Lamda Func
var res3 = function () { console.log("Lamda  fucntion"); };
res3();
var res4 = function () { return console.log("Lamda  fucntion"); };
res4();
var res5 = function (msg) { return console.log("Lamda Fuunc :  msg = " + msg); };
res5("hello");
var res6 = function (id, name) {
    return "ID: " + id + " Name: " + name;
};
console.log(res6(1, "Allen"));
//check Even or ODdD
var res7 = function (num) {
    if (num % 2 == 0)
        return num + " Even num";
    else
        return num + " ODD num";
};
console.log(res7(2));
console.log(res7(43534));
console.log(res7(4353));
