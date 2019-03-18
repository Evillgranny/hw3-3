var number = 1;
var str = "$";
var newStr = '$';


function triangle(str, number) {
    if (number >= 3 && number <= 10) {
        for (var i = 1; i <= number; i++) {
            console.log(newStr);
            newStr += str;
        }
    } else {
        for (var i = 0; i < 3; i++) {
            console.log(newStr);
            newStr += str;
        }
    }
}

triangle('$', number);