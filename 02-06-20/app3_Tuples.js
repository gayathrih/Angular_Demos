//Heterogenous type
/*var values = [1 , "mango" ,'y' ,24.55 , true];

console.log("Leng of tuple : "+values.length);
console.log( values[0]);
console.log( values[3]);
console.log( values[6]);
*/
var arr2 = [];
arr2[0] = 2;
arr2[1] = "welcome";
arr2[2] = 'A';
arr2[3] = false;
arr2.push(20);
console.log("len :  After push: " + arr2.length);
for (var i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}
console.log("....................");
arr2.pop();
console.log("len :  pop push: " + arr2.length);
console.log("After remobving last ele");
for (var i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}
