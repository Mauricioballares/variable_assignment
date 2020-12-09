// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
//  * Store a future year in a variable.
//  * Calculate your 2 possible ages for that year based on the stored values.
//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.

const birthYear = 1996;
let futureYear = 2026;
let age = (futureYear - birthYear);
console.log('I will be either ' + 'ageMax' + age + ' || ' + ' ageMin' + (age - 1));


// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
//  * Store a maximum age in a constant variable.
//  * Store an estimated snack amount per day (as a number).
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".

let currentAge = 24;
let maximunAge = 80;
let snackNumber = 3;
let totalSnacks = (snackNumber*365) * (maximunAge-currentAge);
console.log( ' You will need ' + totalSnacks + ' to last you until the age of ' + maximunAge);


// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

let radio = 20
let circumferenceResult = (2*Math.PI)*radio  
console.log(' The circumference is ' + circumferenceResult )
let areaOfCircle = Math.PI*radio*radio
console.log(' The area is ' + areaOfCircle )

// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
//  * Now store a fahrenheit temperature into a variable.
//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."

let celsius = 50;
let fahrenheit = (celsius*9/5) + 32;
console.log(' tempInCelsius ' + celsius + ' is ' + ' tempInFahrenheit ' + fahrenheit);
fahrenheit = 20
celsius = (fahrenheit-32) * 5/9
console.log(' tempInFahrenheit ' + fahrenheit + ' is ' + ' tempInCelsius ' + celsius);

// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
//  * Store Bob's grade on a test to a variable
//  * Store Cam's grade on a test to a variable
//  * Find the average grade of all students
//  * Store Dee's grade on a test to a variable
//  * Find the average grade of all students
//  * Print out if Dee's grade is higher than the class average

let alice = 7
let bob = 5
let cam = 3
let average = (bob + cam + alice) / 3
console.log(' The averages of all students is ' + average)
let dee = 9
average = (bob + cam + alice + dee) / 4
console.log(' The new average of the all students is ' + average)
if (dee > average) console.log("Dee's grade is higher than average")

// ## Problem Six

// Find the last number:
// * You are given a number a. Print the last digit of a.
// * Example
// * Input: 
// * a = 123
// * Output:
// * 3

// Hint:
// Use the remainder % operator.

a = 5846
let output = a%584
console.log(output)


// ## Problem Seven

// Alice's Age
// * x years from now Alice will be y times older than her brother Bob. Bob is 12 years old. How old is Alice?
// * Example 1
// * Input: 
// * x = 3
// * y = 2
// * bob = 12
// * Expected values: 
// * alice = 27
// 
// * Example 2
// * Input: 
// * x = 1
// * y = 3
// * bob = 12
// * Expected values: 
// * alice = 38

// * Hint:
// * alice + x = y * (bob + x)
// * Solve for alice

x = 7
y = 4
bob = 12
alice = (y * (bob + x ) - x)
console.log('The age of alice will be ' + alice)

// ## Problem Eight

// * Cat and Dog Percentages
// * An animal daycare consists of `numberOfCats` cats and `numberOfDogs` dogs.
// * Print the percentage of dogs in the daycare followed by the percentage of cats in the class. The percentage should be printed rounded down to the nearest integer. For example 33.333333333333 will be printed as 33.
// * Example 
// * Input
// * numberOfCats = 20  
// * numberOfDogs = 60
// * Output:
// * 25% of the daycare animals are cats
// * 75% of the daycare animals are dogs

let numberOfCats = 100
let numberOfDogs = 150
let percentageOfCats = (numberOfCats/(numberOfDogs + numberOfCats)) * 100
let percentageOfDogs = (numberOfDogs/(numberOfDogs + numberOfCats)) * 100
console.log(percentageOfCats + '% of the daycare animals are cats and the ' + percentageOfDogs + '% of the daycare animals are dogs')

// ## Problem Nine

// * Leap Year Calculator
// * Given a year, determine if it's a leap year.  
// * A leap year is a year containing an extra day. It has 366 days instead of the normal 365 days. 
// * The extra day is added in February, which has 29 days instead of the normal 28 days. 
// * Leap years occur every 4 years. 2012 was a leap year and 2016 will also be a leap year. 
// * The above rule is valid except that every 100 years special rules apply. 
// * Years that are divisible by 100 are not leap years if they are not also divisible by 400. 
// * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" or "Not a leap year!" depending on the year you are provided.


// ## Problem Ten: Predict the output

// For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

// a. 
//     ```js
//     let num1 = 2
//     let num2 = 5
//     let num3 = num1 * num2
//     console.log(num3)
//     ```
//     10

let num1 = 2
let num2 = 5
let num3 = num1 *  num2
console.log(num3)

// b. 
//     ```js
//     let str = 'jel' 
//     str += 'lo'
//     console.log(str)
//     ```
//     jello

let str = 'jel'
str += 'lo'
console.log(str)

// c. 
//     ```js
//     let string =  'My favorite number is ';
//     let number = 42
//     let sentence = string + number
//     console.log(typeof(sentence))
//     ```
//     string

let string = 'My favorite number is ';
let number = 42
let sentence = string + number
console.log(typeof(sentence))



