// welcome to part2 typescritp basic to advanced:
//Made by muhammad ali

// operator in Typescript
// ADDITION
let num1 : number = 35;
let num2 : number = 45;
let result = num1 + num2;
console.log(` /nAddition ${result}`)

// Subtraction.
let num3 : number = 50;
let num4 : number = 30;
let result1 = num3 -  num4;
console.log(` /subtraction ${result1}`)

// Multiplication 
let num5 : number = 5;
let num6 : number = 5;
let result2 = num5 * num6;
console.log(` /nmultiplication ${result2}`)

// Devision
let num7 : number = 24;
let num8 : number = 3;
let result3 = num7 / num8;
console.log(` /ndevision ${result3}`)

// Exponention
let num9 : number = 3;
let num10 : number = 5;
let result4 = num9 ** 3;
console.log(` /nExponention ${result4}`)

//Module 
let num11 : number = 20;
let num12: number = 6;
let result5 = num11 % num12;
console.log(` /nmodule ${result5}`)

//unary operator

let a: number = 5;
let b : number = 2;

a++ ;
b-- ;
console.log(`/n unary operator ${a} ${b}`)

//Homework unary operator

let a1: number = 5;
let b2 : number = 2;
         // 6   // 6    //1  // 1   //7  //0    //1       = 22
let c1 = ++a1 + a1++ + --b2 + b2-- + a1 + b2++ + b2;
console.log(`/n ${c1}`)

//combining operator 
let resultp: number = 3 + 4 * 10
resultp++ ;
console.log(`/n ${resultp}`)

// assignment operator 
let x : number = 10;
x += 5;

console.log(`/n ${x}`)

//comparision operator
let e: number = 5;
let f : number = 2;

let isGreaterthen: boolean = e > f;    //true 
let islessthen : boolean = e < f ;     // false
let inequal : boolean = e === f;       // false
let isnotequal : boolean = e != f;    // true

console.log(`/nIsGreaterthen ${isGreaterthen} /nIslessthen${islessthen} /nInequal${inequal} /nInnotequal${isnotequal}`)

//logical operator 
let g : number = 5;
let d : number = 2;

let logicalAND = g > d && d < g ;    // true 
let logicalOR = g < d || g === d ;   // false
let logicalNOT = ! (a == b);         // true  

console.log(logicalAND , logicalOR , logicalNOT)