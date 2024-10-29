// typescript exam preparation part 3 
// logic statement 
// if and if else statement 
var myfriend = "ahmed";
if (myfriend === "ahmed") {
    console.log("he is myfriend");
}
else {
    console.log("he is not my friend ");
}
//else if statement
var DateofExam = 20;
if (DateofExam === 20) {
    console.log("today is my your exam. Good luck");
}
else if (DateofExam < 20) {
    console.log("your exam will be soon");
}
else {
    console.log("date of exam passed ");
}
//Conditional ternary operator 
var isStudent = true;
var gift = isStudent ? "laptop" : "car";
console.log(gift);
//switch case 
var classday = "monday";
switch (classday) {
    case "monday":
        console.log("its. monday go to class");
        break;
    case "sunday":
        console.log("its. sunday chill at home ");
        break;
    default:
        console.log("go to office ");
}
//1 : basic function
function fastfoodOffice() {
    console.log("welcome to my fast food shop");
}
fastfoodOffice(); // invoking value
//2 : retuning function
function menu() {
    var zingerburgerprice = 550;
    return zingerburgerprice;
}
var responseofzingerburgerprice = menu();
console.log(responseofzingerburgerprice);
//3: parameter and argument 
function zingerburgerrecipe(chickenfillet, bun, cheese, ketchup, mayo) {
    console.log("".concat(chickenfillet, " ").concat(bun, " ").concat(cheese, " ").concat(ketchup, " ").concat(mayo, " = zinger burger"));
}
zingerburgerrecipe("1 chicken fillet ", "1 potato bun", "1 slice of cheese ", "1 tbsp ketchup", "1 tsp mayo");
// 4 : defult parameter 
function clubSandwichprice(sandwish, cheeseAddon) {
    if (sandwish === void 0) { sandwish = 350; }
    if (cheeseAddon === void 0) { cheeseAddon = 40; }
    return sandwish + cheeseAddon;
}
console.log(350, 40);
//5 : rest parameter 
function myanimal(cow) {
    if (cow === void 0) { cow = "1 cow"; }
    var otheranimals = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otheranimals[_i - 1] = arguments[_i];
    }
    console.log(cow);
    console.log(otheranimals);
}
myanimal("1cow", "2 goats", "3 sheeps");
//6: spread operator
function grocerylist(mustneeded) {
    if (mustneeded === void 0) { mustneeded = "rice"; }
    var notmust = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        notmust[_i - 1] = arguments[_i];
    }
    console.log(mustneeded);
    console.log(notmust);
}
grocerylist("rice", "flour", "oil");
// 7: anonymous funnction 
var myname = function (firstname, lastname) {
    return firstname + "" + lastname;
};
var response = myname("muhammad", "ali");
console.log(response);
//8 : immedietely invoked function 
(function () {
    console.log("immedietaly created");
}());
// 9 : recursive function
function countdown(num) {
    if (num <= 0) {
        console.log("DONE!");
        return;
    }
    ;
    console.log(num);
    countdown(num - 1);
}
countdown(20);
// 10 : nested function 
function otherfunction() {
    var innerfunction = function () {
        console.log("hellow from inside");
    };
    innerfunction();
}
otherfunction();
