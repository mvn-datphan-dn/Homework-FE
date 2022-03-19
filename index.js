var a = 1
var b = "1"
var c = {}
var d = {}
var e = 1
console.log("so sánh '==' và '==='");
console.log(a==b);
console.log(a===b);
console.log(a===e);
console.log(c==d);
console.log(c===d);

console.log("- Give an example for each of the following methods in Javascript");
//Map
const array = [1, 2, 3];
const array1 = array.map(function (number, index) {
	return console.log(index + ": " + number * number);
});
//filter
const array2 = array.filter(function (number) {
	return number > 2;
});
console.log(array2); // 3
//reduce
const i = 0;
const sum = array.reduce(function (total, currentVL) {
	return total + currentVL;
}, i);
console.log(sum);
//find
const num = array.find(function (value, index) {
	return value > 2; //=> 3
});
console.log(num);
//some
const bool = array.some(function (value) {
	return value > 3; //=> false
});
console.log(bool);
//push
array.push(4); // => [1, 2, 3, 4]
console.log(array);

//- Give an example for add a new element to an array[] (at the end)
array.push(5)
console.log(array)
//- Give an example for add a new element to an array[] (at the beginning)
array.unshift(0)
console.log(array)
//- Give an example for removing an element in array[]
array.splice(3,1)
console.log(array) //delete 3
//1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
function sumab(a, b){
    if(a==b) { return (a+b)*3 }
    else { return a+b }
}
console.log(sumab(6, 5));
// 2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
function abs19(a) {
    if(a>19) return (a-19)*3
    else return (19-a)
}
console.log(abs19(23));
// 3. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.
function findnumber3(input) {
    var index = input.indexOf("*")
    var result = []
    for(var i=0; i<=9; i++) {
        number = input.replace("*",i)
        if(parseInt(number)%3 == 0) {
            result.push(number)
        }
    }
    console.log(result);
}
findnumber3("1234567890*")
// 4. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.
function findnumber6(input) {
    var index = input.indexOf("*")
    var result = []
    for(var i=0; i<=9; i++) {
        number = input.replace("*",i)
        if(parseInt(number) %6 == 0) {
            result.push(number)
        }
    }
    console.log(result);
}
findnumber6("1234567890*")
