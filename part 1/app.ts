// In this revision, I will revise from basic hellow world to Advanced Typescript......$

// 1: simple hellow world program
// 1st way 
    console.log("hellow world");
// 2nd way
    const result: string = "hellow world "
    console.log(result);

// 2: varaible 
let myName : string = "muhammad ali"
console.log(myName)
myName = "typescript programmer";  // It is allowed to change the value of varaible created with let  
console.log(myName);

// 3: Case Sensitive
//Typescript is case Sensitive . and there are 3 cases....

//1: camelCase
//2: snake_case
//3: PascalCase

//4: strong typing in Typescript

let userName : string = "muhammad ali"
//userName = 54     // Error this is not allowed to change string value to number & boolean.

// 5: Primitive Data Types.
let iName: string = "node.js"
let age : number = 12345;
let isTeacher : boolean = true 
let milano : any = false 

//6 : Type inference 
let iName2: string = "next.js"
let age2 : number = 54321;
let isTeacher2 : boolean = false 
let milano2 : any = true 

//7: varaible Advanced: const & let.
let CurrentBalance: number  = 1000;
CurrentBalance = 900;  // with let varaible , It is allowed to change value of varaible 

const AccountNumber : number = 1000;
//AccountNumber = 900               // Error because you can,t the value of const varaible


//8: Addition Primitive Data Types...
let var1: undefined;   // No Value assigned to a varaible..
let var2 : unknown;    // any type of value, need checking before use (Typescript).
let var3 : bigint;     // very large integer..
let var4: symbol;      // very large integer..
let var5: null;       // NO value of empty..

//9: ERROR
  //1: syntax error
     //lett message = "hellow" 
  //2: Type Error
      let myage: number = 17
      //console.loger(myage)
 //3: assignibility Error
      let useNum: number = 5;
      //useNum = "hi"
      
//10: string concatenation 

let firstName : string = "muhammad "
let lastName : string = "ali"
let fullName = firstName + "" + lastName

console.log(fullName);

//11: template literal.

let firstName2 : string = "muhammad "
let lastName2 : string = "ali"
let fullName2 = `${firstName} ${lastName2}`;
console.log(fullName);



