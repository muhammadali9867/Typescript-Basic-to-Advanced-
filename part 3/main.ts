// welcome to part3 typescritp basic to advanced:

// logic statement 
// if and if else statement 

let myfriend = "ahmed"
if(myfriend === "ahmed"){
    console.log(`he is myfriend`)
}else {
    console.log(`he is not my friend `)
}

//else if statement
let DateofExam = 20
if(DateofExam ===20){
    console.log(`today is my your exam. Good luck`)
}else if (DateofExam < 20){
        console.log(`your exam will be soon`)
}else {
    console.log(`date of exam passed `)
}

//Conditional ternary operator 
let isStudent : boolean = true;
let gift = isStudent ?  "laptop" : "car";
console.log(gift) 

//switch case 
let classday : string = "monday"
switch (classday) {
    case "monday":
        console.log(`its. monday go to class`)
        
        break;
     case "sunday":
          console.log(`its. sunday chill at home `)
          break;
    default:
        console.log(`go to office `)
}

//1 : basic function
function fastfoodOffice (){
    console.log(`welcome to my fast food shop`)
}
fastfoodOffice(); // invoking value

//2 : returning function
function menu (){
    let zingerburgerprice : number = 550;
    return zingerburgerprice
}
let responseofzingerburgerprice: number = menu();
console.log(responseofzingerburgerprice);

//3: parameter and argument 
function zingerburgerrecipe(chickenfillet: string ,bun : string, cheese : string , ketchup : string , mayo: string): void {
    console.log(`${chickenfillet} ${bun} ${cheese} ${ketchup} ${mayo} = zinger burger`)
} 
zingerburgerrecipe("1 chicken fillet " , "1 potato bun","1 slice of cheese ","1 tbsp ketchup","1 tsp mayo")

// 4 : defult parameter 
function clubSandwichprice (sandwish: number = 350, cheeseAddon: number = 40): number {
    return sandwish + cheeseAddon
}
console.log(350,40 )

//5 : rest parameter 
function myanimal (cow : string = "1 cow", ...otheranimals: string []){
    console.log(cow)
    console.log(otheranimals)
}
myanimal("1cow","2 goats","3 sheeps")

//6: spread operator

function grocerylist (mustneeded: string =  "rice",... notmust : string [] ){
    console.log(mustneeded)
    console.log(notmust)
}
grocerylist("rice" , "flour" ,  "oil");

// 7: anonymous function 

let myname = function (firstname : string , lastname : string ){
    return firstname + "" + lastname
}
let response : string = myname ("muhammad", "ali")
console.log(response);

//8 : immedietely invoked function 
(function(){
    console.log("immedietaly created")
}())

// 9 : recursive function
function countdown (num: number ): void {
    if(num <= 0){
        console.log("DONE!")
        return
    };
    console.log(num);
    countdown(num - 1)

}
countdown(20);

// 10 : nested function 
function otherfunction (){
    const innerfunction =  function (){
        console.log(`hellow from inside`)
    }
    innerfunction();
}
otherfunction();