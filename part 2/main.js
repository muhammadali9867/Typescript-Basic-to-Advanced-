// welcome to part to Typescript exam prepration..
// operator in Typescript
// ADDITION
var num1 = 35;
var num2 = 45;
var result = num1 + num2;
console.log(" /nAddition ".concat(result));
// Subtraction.
var num3 = 50;
var num4 = 30;
var result1 = num3 - num4;
console.log(" /subtraction ".concat(result1));
// Multiplication 
var num5 = 5;
var num6 = 5;
var result2 = num5 * num6;
console.log(" /nmultiplication ".concat(result2));
// Devision
var num7 = 24;
var num8 = 3;
var result3 = num7 / num8;
console.log(" /ndevision ".concat(result3));
// Exponention
var num9 = 3;
var num10 = 5;
var result4 = Math.pow(num9, 3);
console.log(" /nExponention ".concat(result4));
//Module 
var num11 = 20;
var num12 = 6;
var result5 = num11 % num12;
console.log(" /nmodule ".concat(result5));
//unary operator
var a = 5;
var b = 2;
a++;
b--;
console.log("/n unary operator ".concat(a, " ").concat(b));
//Homework unary operator
var a1 = 5;
var b2 = 2;
// 6   // 6    //1  // 1   //7  //0    //1       = 22
var c1 = ++a1 + a1++ + --b2 + b2-- + a1 + b2++ + b2;
console.log("/n ".concat(c1));
//combining operator 
var resultp = 3 + 4 * 10;
resultp++;
console.log("/n ".concat(resultp));
// assignment operator 
var x = 10;
x += 5;
console.log("/n ".concat(x));
//comparision operator
var e = 5;
var f = 2;
var isGreaterthen = e > f; //true 
var islessthen = e < f; // false
var inequal = e === f; // false
var isnotequal = e != f; // true
console.log("/nIsGreaterthen ".concat(isGreaterthen, " /nIslessthen").concat(islessthen, " /nInequal").concat(inequal, " /nInnotequal"));
//logical operator 
var g = 5;
var d = 2;
var logicalAND = g > d && d < g; // true 
var logicalOR = g < d || g === d; // false
var logicalNOT = !(a == b); // true  
console.log(logicalAND, logicalOR, logicalNOT);
