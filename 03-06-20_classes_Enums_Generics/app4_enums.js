/*enum Color{
     RED,
     GREEN,
     YELLOW
     
}*/
var Color;
(function (Color) {
    Color[Color["BlUE"] = 0] = "BlUE";
    Color[Color["RED"] = 10] = "RED";
    Color[Color["GREEN"] = 11] = "GREEN";
    Color[Color["YELLOW"] = 12] = "YELLOW";
})(Color || (Color = {}));
console.log(Color.BlUE + "\n" + Color.RED + "\n" + Color.GREEN + "\n" + Color.YELLOW);
