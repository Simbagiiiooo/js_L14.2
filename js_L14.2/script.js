// const heat = function (item) {
//     console.log("I'm heating " + item);
//     console.log("PING! your " + item + " is heated");
// };

/* const main_course = "Pasta";
const dessert = "Cake";

heat(main_course);
heat(dessert); */
// ---------------------------------------------------------------
/* const multiply = function (numberA, numberB) {
   console.log(numberA * numberB); 
}; */

/* multiply(3, 4);

const age = 5;
const dogYearsFactor = 7;

multiply(age, dogYearsFactor); */
// ----------------------------------------------------------------
/* const calculateAverage = function (numbers) {
    const average = numbers.reduce((total, n) => total + n)/numbers.length;
    console.log(average);
};

const grades = [6, 7, 8, 9, 5, 6, 7, 8];
calculateAverage(grades);

const ages = [16, 22, 50, 100, 34];
calculateAverage(ages); */
// -----------------------------------------------------------------

// No arguments

const paintWallRed = function () {
    console.log("The wall has been painted  red");
};

paintWallRed();

// Single argument

const paintWall = function (color) {
        console.log("The wall has been painted " + color);
};

paintWall("blue");
paintWall("green");

// When we call the function without an argument we get a referenceError: color not defined.

// Multiple arguments

const paintOneWall = function (wichWall, color) {
    console.log("The " + wichWall + " wall has been painted " + color);
};

const wall = "West";
const colorWall = "purple"

paintOneWall("Nord-east", "blue");
paintOneWall(wall, colorWall);