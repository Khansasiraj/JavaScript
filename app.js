// -----------------------------------------------------  Chapter_01 (Alerts) -----------------------------------------------------

//1. Write a script to greet your website visitor using JS alert box. 
alert("Welcome To My Website");

//2. Write a script to display following message on your web page: 
alert("Error! Please Enter a valid password");

//3. Write a script to display following message on your web page: (Hint : Use line break) 
alert("Welcome to JS Land.. \nHappy Coding!");

//4. Write a script to display following messages in sequence: 
alert("Welcome to JS Land..");
alert("Happy Coding!");

//5. Generate the following message through browser’s developer console: 
console.log("Hello.. I can run JS through my web browser console");

// -----------------------------------------------------  Chapter_01 End -----------------------------------------------------










// -----------------------------------------------------  Chapter_02 (VARIABLES FOR STRINGS ) -----------------------------------------------------

//1. Declare a variable called username. 
var username;


//2. Declare a variable called myName & assign to it a string that represents your Full Name.
var Myname = "Khansa Siraj";


// 3. Write script to 
// a) Declare a JS variable, titled message. 
// b) Assign “Hello World” to variable message 
// c) Display the message in alert box. 
var message;
message = "Hello World";
alert(message);


// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes. 
var name = "Jhone Doe";
var age = "15 years old";
var course = "Certified Mobile Application Development";
alert(name);
alert(age);
alert(course);


//5. Write a script to display the following alert using one JS variable: 
var pizza = "PIZZA \nPIZZ \nPIZ \nPI \nP"
alert(pizza);


//6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use string concatenation) 
var email = "Khansasiraj@yahoo.com";
alert("My email address is" + " " + email);


//7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. 
//Display the following message in an alert box: 
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book" + " " + book);


//8. Write a script to display this in browser through JS 
document.write("Yeah! I can write HTML content through JavaScript");


//9. Store following string in a variable and show in alert and browser through JS 
//“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” 
var symbol = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(symbol);
// -----------------------------------------------------  Chapter_02 End -----------------------------------------------------










// -----------------------------------------------------  Chapter_03 (VARIABLES FOR NUMBERS ) -----------------------------------------------------

//1. Declare a variable called age & assign to it your age. Show your age in an alert box. 
var age = 23;
alert("I am" + " " + age + " " + "years old");


//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page.
//Show his/her number of visits on your web page. For example: “You have visited this site N times”. 
var n = 12;
alert("You have visited this site " + n + " times");


//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 
var birthYear = 1998;
document.write("My birth year is " + birthYear);
document.write("<br>")
document.write("\n" + "Data type of my declared variable is" + " " + typeof birthYear);


document.write("<br>" + "<br>");


//4. A visitor visits an online clothing store www.xyzClothing.com . 
// Write a script to store in variables the following information: 
// a. Visitor’s name 
// b. Product title 
// c. Quantity 
// i.e. how many products a visitor wants to order 
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 
var Visitor_name = "John Doe";
var Product_title = "T-shirt(s)";
var Quantity = 5;
document.write(Visitor_name + " " + "ordered" + " " + Quantity + " " + Product_title + " " + "on XYZ Clothing store");
// -----------------------------------------------------  Chapter_03 End -----------------------------------------------------










// -------------------------------------------  Chapter_04 (VARIABLE NAMES: LEGAL & ILLEGAL ) -----------------------------------------------------

//1. Declare 3 variables in one statement. 
var name, email, qualification;

//2. Declare 5 legal & 5 illegal variable names. 

//5 legal variable names.
var chat;
var chatApp;
var client1;
var father_name;
var $name;


//5 illegal variable names
// var father name;
// var @year;
// var do;
// var if;
// var 1stcustomer;


// 3. Display this in your browser 

// a)  A heading stating “Rules for naming JS variables” 
document.write("<h1>Rules for naming JS variables</h1>");

// b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable 
document.write("Variable names can only contain numbers, $ and _. For example: $my_1stVariable." + "<br/>");

// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name 
document.write("Variable must begin with a letter, $ or _. For example: $name, _name or name" + "<br/>");

// d) Variable names are case _________ 
document.write(" Variable names are case sensitive" + "<br/>");

// e) Variable names should not be JS _________   
document.write("Variable names should not be JS keywords" + "<br/>");
// -----------------------------------------------------  Chapter_04 End -----------------------------------------------------











// ------------------------------------------------  Chapter_05 (MATH EXPRESSIONS ) -----------------------------------------------------

//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.  
var a = 3;
var b = 5;
// addition
var c = a + b;
document.write("Sum of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);


//2. Repeat task1 for subtraction, multiplication, division & modulus. 

// subtraction
var c = a - b;
document.write("<br>" + "Sub of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

// multiplication
var c = a * b;
document.write("<br>" + "Mul of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

// division
var c = a / b;
document.write("<br>" + "Div of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

// modulus
var c = a % b;
document.write("<br>" + "Mod of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);


document.write("<br>" + "<br>");


// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable.      
var x;

//b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write("Value after variable declaration is:" + " " + x);

// c. Initialize the variable with some number.
x = 5;
document.write("<br>");

//d. Show the value of variable in your browser like “Initial value: 5”.
document.write("Initial value: " + " " + x);

//e. Increment the variable.
x = ++x;
document.write("<br>");

//f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write("Value after increment is:  " + " " + x);

//g. Add 7 to the variable.
x = x + 7;
document.write("<br>");

// h. Show the value of variable in your browser like “Value after addition is: 13”.  
document.write("Value after addition is:   " + " " + x);

// i. Decrement the variable.
x = --x;
document.write("<br>");

//j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("Value after decrement is: " + " " + x);

// k. Show the remainder after dividing the variable’s value by 3.
x = x % 3;
document.write("<br>");

// l. Output : “The remainder is : 0”.
document.write("The remainder is :    " + " " + x);


document.write("<br>" + "<br>");


// 4. Cost of one movie ticket is 600 PKR.
// Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output: 
var ticket = 600;
var quantity = 5;
var cost = ticket * quantity;

document.write("Total cost to buy" + " " + quantity + " " + "tickets to movie is" + " " + cost + "PKR")


document.write("<br>" + "<br>");


//5. Write a script to display multiplication table of any number in your browser.
var no = 4;
var x = 0;
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x));


document.write("<br>" + "<br>");

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
// a.  Store a Celsius temperature into a variable. 
// b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
// c. Now store a Fahrenheit temperature into a variable. 
// d. Convert it to Celsius & output “NNoF is NNoC”. 

//celcius to farenheight
var C = 25;
var F = (C * 9 / 5) + 32;
document.write(C + "C is " + F + "F" + "<br/>");

//fahrenheight to celcius
var F = 70;
var C = (F - 32) * 5 / 9;
document.write(F + "F is " + C + "C" + "<br/>");


document.write("<br>" + "<br>");


// 7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
// Store the following in variables 

// a. Price of item 1 
// b. Price of item 2 
var item1_Price = 650;
var item2_Price = 100;

// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2 
var item_1_quantity = 3;
var item_2_quantity = 7;

var item_1_cost = item1_Price * item_1_quantity;
var item_2_cost = item2_Price * item_2_quantity;

//  e. Shipping charges 
var Shipping = 100;

var total = item_1_cost + item_2_cost + Shipping;

// Compute the total cost & show the receipt in your browser. 
document.write("Price of Item 1 is " + item1_Price + "<br/>");
document.write("Quantity of Item 1 is " + item_1_quantity + "<br/>");
document.write("Price of Item 2 is " + item2_Price + "<br/>");
document.write("Quantity of Item 2 is " + item_2_cost + "<br/>");
document.write("Shipping Charges " + Shipping + "<br/>");
document.write("Total cost of your order is " + total);


document.write("<br>" + "<br>");


//8. Store total marks & marks obtained by a student in 2 variables. 
// Compute the percentage & show the result in your browser 
var totalMarks = 980;
var obttainMarks = 804;
var Percentage = (totalMarks / obttainMarks) * 100;

document.write("<h3>" + "Marks Sheet" + "</h3>");
document.write("Total Marks: " + totalMarks + "<br/>");
document.write("Marks Obtained: " + obttainMarks + "<br/>");
document.write("Percentage: " + Percentage);


document.write("<br>" + "<br>");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 
var dollarRate = 104.80;
var riyalRate = 28;
var pkr = (10 * dollarRate) + (25 * riyalRate);
document.write("<h3>" + "Currency Conversion in PKR" + "</h3>");
document.write("Total Currency in PKR: " + pkr);


document.write("<br>" + "<br>");


//10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression 
var num = 7;
num = (((num + 5) * 10) / 2);
document.write("<h3>" + "Arithmetic Operation in single statement" + "</h3>");
document.write("Output: " + num);


document.write("<br>" + "<br>");


//11. The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values. 
var currentYear = 2020;
var birthYear = 1998;
var Age = currentYear - birthYear;

document.write("<h3>" + "Age Calculator" + "</h3>");
document.write("Current Year: " + currentYear + "<br/>");
document.write("Birth Year: " + birthYear + "<br/>");
document.write("Your age is: " + Age);


document.write("<br>" + "<br>");


// 12. The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 
var radius = 7;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;

document.write("<h3>" + "The Geometrizer" + "</h3>");
document.write("Radius of a Circle: " + radius + "<br/>");
document.write("The circumference is: " + circumference + "<br/>");
document.write("The area is: " + area);


document.write("<br>" + "<br>");


// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of your life. 
var snack = "Chocalate Chip";
var age = 22;
var maxAge = 60;
var amountPerDay = 3;
var eat = (maxAge - age) * (365 * amountPerDay);

document.write("<h3>" + "The Lifetime Supply Calculator" + "</h3>");

// Output. 
document.write("Favorite Snack: " + snack + "<br/>");
document.write("Current Age: " + age + "<br/>");
document.write("Estimated Maximum Age: " + maxAge + "<br/>");
document.write("Amount of snacks per day: " + amountPerDay + "<br/>");
document.write("You will need " + eat + " to last you until the ripe old age of " + maxAge);
// -----------------------------------------------------  Chapter_05 End -----------------------------------------------------










// ---------------------------------  Chapter_06 to 09 (MATH EXPRESSIONS) -----------------------------------

//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
var a = +prompt("Input a number: ");

document.write("Result" + "<br/>");
document.write("The value of a is: " + a + "<br/>");
document.write("..............................................." + "<br/>");
document.write("<br/>");

// Pre-Increment
document.write("The value of ++a is: " + ++a + "<br/>");
document.write("Now the value of a is: " + a + "<br/>");
document.write("<br/>");

// Post- Increment
document.write("The value of a++ is: " + a++ + "<br/>");
document.write("Now the value of a is: " + a + "<br/>")
document.write("<br/>");

// Pre-Decrement
document.write("The value of --a is: " + --a + "<br/>");
document.write("Now the value of a is: " + a + "<br/>");
document.write("<br/>");

// Post-Decrement
document.write("The value of a-- is: " + a-- + "<br/>");
document.write("Now the value of a is: " + a + "<br/>");


document.write("<br/>" + "<br/>");


// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

document.write("The value of a is " + a + "<br/>");
document.write("The value of b is " + b + "<br/>");
document.write("The result is " + result + "<br/>" + "<br/>");

document.write("<b>" + "Explanation of Solution" + "</b>" + "<br/>");
document.write("a = 2, b = 1" + "<br/>");
document.write("--a  -  --b  +  ++b  +  b--" + "<br/>");
document.write("--a" + "<br/>");
document.write("  1" + "<br/>");
document.write("--a  -  --b" + "<br/>");
document.write("  1  -   0 " + "<br/>");
document.write("--a  -  --b  +  ++b" + "<br/>");
document.write("  1  -   0   +    1 " + "<br/>");
document.write("--a  -  --b  +  ++b   +  b--" + "<br/>");
document.write("  1  -   0   +    1   +   1" + "<br/>");
document.write("  1 +    1   +    1 " + "<br/>");
document.write("3" + "<br/>");


document.write("<br/>" + "<br/>");


//3. Write a program that takes input a name from user & greet the user. 
var name = prompt("Enter your name");
document.write("Good Morning!" + " " + name + " " + "Have a nice day.");

document.write("<br/>" + "<br/>");


// 4. Write a program to take input a number from user & display it’s multiplication table on your browser.
// If user does not enter a new number, 
// multiplication table of 5 should be displayed by default. 
var no = 5, x = 0;
var no = +prompt("Enter table no");
document.write("Table" + "</b>" + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x));


document.write("<br/>" + "<br/>");


// 5. Marksheet
document.write("<h3>" + "Marksheet" + "</h3>");

// a) Take three subjects name from user and store them in 3 different variables. 
subject1 = prompt("Enter Name of Subject 1: ");
subject2 = prompt("Enter Name of Subject 2: ");
subject3 = prompt("Enter Name of Subject 3: ");

// b) Total marks for each subject is 100, store it in another variable.
var totalMarks = 300;

// c) Take obtained marks for first subject from user and stored it in different variable.
subject1Marks = +prompt("Enter Marks of " + subject1);

// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
subject2Marks = +prompt("Enter Marks of " + subject2);
subject3Marks = +prompt("Enter Marks of " + subject3);

// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
var percentage1 = (subject1Marks / 100) * 100;
var percentage2 = (subject2Marks / 100) * 100;
var percentage3 = (subject3Marks / 100) * 100;

var obtainedMarks = (subject1Marks + subject2Marks + subject3Marks);
var percentage = (obtainedMarks / totalMarks) * 100;
percentage = percentage.toFixed(3);


document.write("<Table>");

document.write("<tr>");
document.write("<th>" + "Subject" + "</th>");
document.write("<th>" + "Total Marks" + "</th>");
document.write("<th>" + "Obtained Marks" + "</th>");
document.write("<th>" + "Percentage" + "</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject1 + "</td>");
document.write("<td>" + 100 + "</td>");
document.write("<td>" + subject1Marks + "</td>");
document.write("<td>" + percentage1 + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject2 + "</td>");
document.write("<td>" + 100 + "</td>");
document.write("<td>" + subject2Marks + "</td>");
document.write("<td>" + percentage2 + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject3 + "</td>");
document.write("<td>" + 100 + "</td>");
document.write("<td>" + subject3Marks + "</td>");
document.write("<td>" + percentage3 + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<th>" + "</th>");
document.write("<th>" + totalMarks + "</th>");
document.write("<th>" + obtainedMarks + "</th>");
document.write("<th>" + percentage + "%" + "</th>");
document.write("</tr>");


document.write("</Table>");
// ----------------------------------------  Chapter_06 to 09 End -----------------------------------------










// ---------------------------  Chapter_09 to 11 (USER INPUT & CONDITIONAL STATEMENT ) -----------------------------------

//1. Write a program to take “city” name as input from user. 
//If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
var city = prompt("Enter city name");

if (city == "karachi") {
        document.write("Welcome to city of lights");
}


document.write("<br>" + "<br>");


// 2. Write a program to take “gender” as input from user. 
// If the user is male, give the message: Good Morning Sir. 
// If the user is female, give the message: Good Morning Ma’am.
var gender = prompt("What is your gender");

if (gender == "male") {
        document.write("Good Morning Sir.");
}
else if (gender == "female") {
        document.write("Good Morning Ma’am.");
}
else {
        document.write("Good Morning.");
}


document.write("<br>" + "<br>");


//3. Write a program to take input color of road traffic signal from the user & show the message
var signalColor = prompt("Enter color of road traffic signal");

if (signalColor === "Red") {
        alert("Must Stop");
}
else if (signalColor === "Yellow") {
        alert("Ready to Move");
}
else if (signalColor === "Green") {
        alert("Move Now");
}
else {
        alert("You enter wrong color");
}


document.write("<br>" + "<br>");


// 4. Write a program to take input remaining fuel in car (in litres) from user. 
// If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car” 
var fuelAmount = +prompt("Enter amount of remaining fuel in car (in litres)");
if (fuelAmount < 0.25) {
        document.write("Please refill the fuel in your car");
}


document.write("<br>" + "<br>");



// Question 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

// Part A
var a = 4;
if (++a === 5) {
        alert("given condition for variable a is true");
}

// Part B
var b = 82;
if (b++ === 83) {
        alert("given condition for variable b is true");
}

// Part C
var c = 12;
if (c++ === 13) {
        alert("condition 1 is true");
}

if (c === 13) {
        alert("condition 2 is true");
}

if (++c < 14) {
        alert("condition 3 is true");
}

if (c === 14) {
        alert("condition 4 is true");
}

// Part D
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
}

// Part E
if (true) {
        alert("True");
}

if (false) {
        alert("False");
}

// Part F
if ("car" < "cat") {
        alert("car is smaller than cat");
}


document.write("<br>" + "<br>");


// 6. Write a program to take input the marks obtained in three subjects & total marks. 
// Compute & show the resulting percentage on your page. 
// Take percentage & compute grade

var obtainedMarks = +prompt("Enter Obtained Marks in three subjects: ");
var totalMarks = +prompt("Enter total Marks: ");
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h3>" + "Mark Sheet" + "<h3>");
document.write("Total Marks: " + totalMarks + "</br>");
document.write("Marks Obtained: " + obtainedMarks + "</br>");
document.write("Percentage: " + percentage + "</br>");

if (percentage >= 80 && percentage < 100) {
        document.write("Grade: A-one" + "<br>");
        document.write("Remarks: Excellent" + "<br>");
}

else if (percentage >= 70 && percentage < 80) {
        document.write("Grade: A" + "<br>");
        document.write("Remarks: Good" + "<br>");
}

else if (percentage >= 60 && percentage < 70) {
        document.write("Grade: B" + "<br>");
        document.write("Remarks: You need to improve" + "<br>");
}

else if (percentage < 60) {
        document.write("Grade: Fail" + "<br>");
        document.write("Remarks: Sorry" + "<br>");
}

else {
        document.write("Invalid Input" + "<br>");
}


document.write("<br>" + "<br>");


// 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. 
// Prompt user to guess the secret number. a. If user guesses the same number, 
// show “Bingo! Correct answer”. 
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
var secretNumber = 5;
var guessNumber = +("Guess the secret number", "between 1 to 10 ");

if (guessNumber == secretNumber) {
        document.write("Bingo! Correct answer");
}
else if (guessNumber == ++secretNumber) {
        document.write("Close enough to the correct answer");
}
else {
        document.write("Your guess is incorrect");
}


document.write("<br>" + "<br>");


// 8. Write a program to check whether the given number is divisible by 3. 
// Show the message to the user if the number is divisible by 3. 
var num = +prompt("Enter number to check");
if ((num % 3) === 0) {
        document.write("the number is divisible by 3");
}
else {
        document.write("the number is not divisible by 3");
}


document.write("<br>" + "<br>");


// 9. Write a program that checks whether the given input is an even number or an odd number. 
var num = +prompt("Enter number to check even or odd");
if ((num % 2) === 0) {
        document.write("the number is even");
}
else {
        document.write("the number is add");
}


document.write("<br>" + "<br>");


// 10. Write a program that takes temperature as input and shows a message based on following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.” 

var T = +prompt("Enter  the temperature");
if (T > 40) {
        document.write("It is too hot outside.");
}
if (T > 30) {
        document.write("The Weather today is Normal.");
}
if (T > 20) {
        document.write("Today’s Weather is cool.");
}
if (T > 10) {
        document.write("OMG! Today’s weather is so Cool.");
}


document.write("<br>" + "<br>");


// 11. Write a program to create a calculator for +,-,*, / & % using if statements.
// Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %) 
//Compute & show the calculated result to user. 
var a = +prompt("Enter First Number");
var b = +prompt("Enter Second Number");
var operation = ("Enter opertion you want to perform", "+, -, *, /, %");
var result;

if (operation == "+") {
        result = a + b;
        document.write("The sum of" + " " + a + " " + "and" + " " + b + " " + "is:" + " " + result)
}
else if (operation == "-") {
        result = a - b;
        document.write("The subtraction of" + " " + a + " " + "and" + " " + b + " " + "is:" + " " + result)
}
else if (operation == "*") {
        result = a * b;
        document.write("The multiplication of" + " " + a + " " + "and" + " " + b + " " + "is:" + " " + result)
}
else if (operation == "/") {
        result = a / b;
        document.write("The division of" + " " + a + " " + "and" + " " + b + " " + "is:" + " " + result)
}
else if (operation == "%") {
        result = a % b;
        document.write("The reminder of" + " " + a + " " + "and" + " " + b + " " + "is:" + " " + result)
}
else {
        document.write("You enter wrong operation")
}

document.write("<br>" + "<br>");
// ---------------------------------------  Chapter_06 to 11 End -----------------------------------------









// ---------------------------------  Chapter_12 to 13 (IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS ) -----------------------------------

// 1. Write a program that takes a character (number or string) in a variable & 
// checks whether the given input is a number, 
// uppercase letter or lower case letter. 
// (Hint: ASCII codes:- A=65, Z=90, a=97, z=122). 
var char = prompt("Enter the character to check whether the given input is a number, uppercase letter or lower case letter.");
char.charCodeAt(0);

if (char >= 48 && char <= 57) {
        document.write("The given charecter is a number");
}
else if (char >= 65 && char <= 97) {
        document.write("The given charecter is a uppercaseleetr");
}
else if (char >= 97 && char <= 122) {
        document.write("The given charecter is a lowercaseletter");
}


document.write("<br>" + "<br>");


// 2. Write a JavaScript program that accept two integers and display the larger. 
// Also show if the two integers are equal. 
var num1 = +prompt("Enter the number1");
var num2 = +prompt("Enter the number2");

if (num1 > num2) {
        document.write("The largest number is" + " " + num1);
}
else if (num2 > num1) {
        document.write("The largest number is" + " " + num2);
}
else if (num1 == num2) {
        document.write("Both numbers are equal");
}


document.write("<br>" + "<br>");



//3. Write a program that takes input a number from user & state whether the number is positive, negative or zero. 
var num = +prompt("Enter the number to check it is positive or negative");

if (num > 0) {
        document.write("The given number is positive");
}
else if (num < 0) {
        document.write("The given number is negative");
}
else if (num1 === 0) {
        document.write("The given number is Zero");
}


document.write("<br>" + "<br>");


// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise 
var alphabet = +prompt("Enter the alphabet to check it is vowel or not");

if (alphabet == "a" || alphabet == "e" || alphabet == "i" || alphabet == "o" || alphabet == "o") {
        document.write("The given alphabet is vowel");
}
else {
        document.write("The given alphabet is not a vowel");
}


document.write("<br>" + "<br>");


// 5. Write a program that 
// a. Store correct password in a JS variable.
// b.  Asks user to enter his/her password 
// c.  Validate the two passwords: 
//     i. Check if user has entered password. If not, then give message “ Please enter your password” 
//     ii. Check if both passwords are same. 
// If they are same, show message “Correct! The password you entered matches the original password”. 
//Show “Incorrect password” otherwise. 

var pw = "12345"
var password = prompt("Enter your password");

if (password == "") {
        document.write(" Please enter your password");
}
else if (password == pw) {
        document.write("Correct! The password you entered matches the original password");
}
else {
        document.write("Incorrect password");
}


document.write("<br>" + "<br>");


// 6. This if/else statement does not work. 
// Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day"; else greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) {
        greeting = "Good day";
}
else {
        greeting = "Good evening"
}


document.write("<br>" + "<br>");


// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm.
// Implement the following case using if, else & else if statements 
var time = +prompt("Please enter 24 hours clock format time \nlike: 1900 = 7pm.");

if (time >= 0000 && time < 1200) {
        alert("Good Morning");
}

else if (time >= 1200 && time < 1700) {
        alert("Good Afternoon");
}

else if (time >= 1700 && time < 2100) {
        alert("Good Evening");
}

else if (time >= 2100 && time <= 2359) {
        alert("Good Night");
}

else {
        alert("Invalid Input");
}
// ----------------------------------------  Chapter_12 to 13 End -----------------------------------------












// ---------------------------------  Chapter_14 to 16 (Arrays) -----------------------------------

// 1. Declare an empty array using JS literal notation to store student names in future. 
var cars = [];


// // 2. Declare an empty array using JS object notation to store student names in future. 
var cars = newArray();


// 3. Declare and initialize a strings array.
var fruits = ["apple", "mango", "grapes", "orange", "strawberry"]
document.write(fruits);


document.write("<br>" + "<br>");


// 4.  Declare and initialize a numbers array.
var num = [1, 2, 3, 4, 5, 6, 7, 8];
document.write(num);


document.write("<br>" + "<br>");


// 5.  Declare and initialize a boolean array. 
var bol = [true, false, true, false];
document.write(bol);


document.write("<br>" + "<br>");


// 6. Declare and initialize a mixed array. 
var mix = ["khansa", 1, true];
document.write(mix);


document.write("<br>" + "<br>");


// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). 
var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "Phd"];
var no = 1;
var i = 0;

document.write("<h3>" + "Qualifications" + "<h3>");

document.write(no++ + ")" + " " + qualification[i++] + "<br>");
document.write(no++ + ")" + " " + qualification[i++] + "<br>");
document.write(no++ + ")" + " " + qualification[i++] + "<br>");
document.write(no++ + ")" + " " + qualification[i++] + "<br>");
document.write(no++ + ")" + " " + qualification[i++] + "<br>");
document.write(no++ + ")" + " " + qualification[i++] + "<br>");
document.write(no++ + ")" + " " + qualification[i++] + "<br>");
document.write(no++ + ")" + " " + qualification[i++] + "<br>");


document.write("<br>" + "<br>");


//8. Write a program to store 3 student names in an array.
//Take another array to store score of these three students. 
//Assume that total marks are 500 for each student, display the scores & percentages of students:

var names = ["khansa", "annas", "hina"];
var marks = [400, 450, 300];
var i = 0;
var n = 0;
var x = 0;

var totalMarks = 500;

document.write("Score of" + " " + names[i++] + " " + "is" + " " + marks[n++] + "." + " " + "Percentage" + " " + ":" + " " + (marks[x++] / totalMarks) * 100 + "%" + "<br>")
document.write("Score of" + " " + names[i++] + " " + "is" + " " + marks[n++] + "." + " " + "Percentage" + " " + ":" + " " + (marks[x++] / totalMarks) * 100 + "%" + "<br>")
document.write("Score of" + " " + names[i++] + " " + "is" + " " + marks[n++] + "." + " " + "Percentage" + " " + ":" + " " + (marks[x++] / totalMarks) * 100 + "%" + "<br>")


document.write("<br>" + "<br>");


// 9. Initialize an array with color names. 
// Display the array elements in your browser. 
var colors = ["blue", "black", "orange", "red"];
document.write(colors + "<br>");


// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. 
// Display the updated array in your browser. 
var addColor = prompt("what color you wants to add to the beginning");
colors.unshift(addColor);
document.write("Add color to the beginning : " + " " + colors + "<br>");


// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 
// Display the updated array in your browser.
var addColor = prompt("what color you wants to add to the end");
colors.push(addColor);
document.write("Add color to the end : " + " " + colors + "<br>");


// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
var addColor = prompt("again what color you wants to add to the beginning");
colors.unshift(addColor);

var addColor = prompt("Add one more color that you wants to add to the beginning");
colors.unshift(addColor);
document.write("Add two more colors to the start : " + " " + colors + "<br>");


// d. Delete the first color in the array. 
// Display the updated array in your browser.
colors.shift();
document.write("delete color from start : " + " " + colors + "<br>");


// e. Delete the last color in the array. 
// Display the updated array in your browser. 
colors.pop();
document.write("delete color from start end : " + " " + colors + "<br>");


// f. Ask the user at which index he/she wants to add a color & color name. 
// Then add the color to desired position/index. 
// Display the updated array in your browser.
var index = +prompt("Write index number where you want to add color")
var addColor = prompt("what color you want to add");
colors.splice(index, 0, addColor)
document.write("updated array : " + " " + colors + "<br>");


// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. 
// Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.
var index = +prompt("Write index number from where you want to delete color")
var index2 = +prompt("how many colors you want to delete")
colors.splice(index, index2)
document.write("updated array : " + " " + colors + "<br>");


document.write("<br>" + "<br>");


//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. 
var arr = [59, 25, 66, 45, 75, 23];
document.write("students scores : " + "<br>" + arr + "<br>" + "<br>");

var sorted = arr.sort()
document.write("sorted scores : " + "<br>" + sorted);


document.write("<br>" + "<br>");


//11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 
var cities = ["karachi", "lahore", "murre", "islamabad", "hyderabad", "quetta"];
document.write("cities are" + "<br>" + cities + "<br>" + "<br>");

var selectedCities = cities.slice(1, 4);
document.write("selected cities are" + "<br>" + selectedCities);


document.write("<br>" + "<br>");


// 12.  Write a program to create a single string from the below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
// (Use array’s join method) 
var arr = ["This", "is", "my", "cat"];
document.write("Array" + "<br>" + arr + "<br>" + "<br>");

var arr1 = arr.join(" ")
document.write("String" + "<br>" + arr1);


document.write("<br>" + "<br>");


// 13. Create a new array. 
// Store values one by one in such a way that you can access the values in the order in which they were stored. 
// (FIFO-First In First Out) 
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
var out;
document.write("Devices:" + "<br/>" + devices + "<br/>" + "<br/>");

out = devices.shift();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.shift();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.shift();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.shift();
document.write("Out:" + "<br/>" + out);


document.write("<br>" + "<br>");


// 14. Create a new array. 
// Store values one by one in such a way that you can access the values in reverse order. 
// (Last InFirst Out) 
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
var out;
document.write("Devices:" + "<br/>" + devices + "<br/>" + "<br/>");

out = devices.pop();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.pop();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.pop();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.pop();
document.write("Out:" + "<br/>" + out);


document.write("<br>" + "<br>");


// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your browser using document.write() method: 
var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
var i = 0;

document.write("<select>");
document.write("<option>" + phone[i++] + "</option>");
document.write("<option>" + phone[i++] + "</option>");
document.write("<option>" + phone[i++] + "</option>");
document.write("<option>" + phone[i++] + "</option>");
document.write("<option>" + phone[i++] + "</option>");
document.write("</select>");


document.write("<br>" + "<br>");
// ----------------------------------------  Chapter_14 to 16 End -----------------------------------------










// ---------------------------------  Chapter_17 to 20 (ARRAYS AND LOOP ) -----------------------------------

// 1. Declare and initialize an empty multidimensional array.(Array of arrays)
var arr = [];


// 2. Declare and initialize a multidimensional array representing the following matrix:
var arr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];


//3. Write a program to print numeric counting from 1 to 10. 
for (x = 1; x <= 10; x++) {
        document.write(x + "<br>");
}


document.write("<br>" + "<br>");


// 4. Write a program to print multiplication table of any number using for loop. 
// Table number & length should be taken as an input from user.  
var table = +prompt("Enter Table Number");
var lenght = +prompt("Enter lenght of table");

document.write("<h3>" + " Table of" + " " + table + "</h3>")
document.write("<h3>" + " lenght" + " " + lenght + "</h3>")
for (i = 1; i <= lenght; i++) {
        document.write(table + " " + "x" + " " + i + " " + "=" + (i * table) + "<br>");
}


document.write("<br>" + "<br>");


//5. Write a program to print items of the following array using for loop: 
//fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] 
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
var fruits1 = fruits.join("<br>");

document.write("<br>" + "<br>");

document.write(fruits1);

for (i = 0; i <= fruits.length; i++) {
        document.write("Element at index" + " " + i + " " + "is" + " " + fruits[i] + "<br>");
}


document.write("<br>" + "<br>");


// 6. Generate the following series in your browser. See example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("<h3>" + " Counting" + "</h3>");

for (x = 1; x <= 15; x++) {
        document.write(x + "," + " ");
}
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write("<h3>" + "Reverse counting" + "</h3>");

for (x = 10; x >= 1; x--) {
        document.write(x + "," + " ");
}
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write("<h3>" + "Even" + "</h3>");

for (x = 0; x <= 20; x = x + 2) {
        document.write(x + "," + " ");
}
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
document.write("<h3>" + "Odd" + "</h3>");

for (x = 1; x <= 20; x = x + 2) {
        document.write(x + "," + " ");
}
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 
document.write("<h3>" + " Series" + "</h3>");

for (x = 2; x <= 20; x = x + 2) {
        document.write(x + "k" + "," + " ");
}


document.write("<br>" + "<br>");



// 7. You have an array 
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is found in the list or not. 
var bakkeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt("Welcome to bakery! What do you want to order");
var flag = 0;

for (i = 0; i <= bakkeryItems.length; i++) {
        if (bakkeryItems[i] == input) {
                flag = 1;
                document.write(input + " " + "is available at index" + " " + i + " " + "in our bakery");
        }
}

if (flag == 0) {
        document.write("We are sorry" + " " + input + " " + "is not available in our bakery")
}


document.write("<br>" + "<br>");


// 8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12]. 
var a = [24, 53, 78, 91, 12];
var largeNumber = a[0];

for (i = 0; i < a.length; i++) {

        if (a[i] > largeNumber) {

                largeNumber = a[i];
        }
}

document.write("Array items: " + " " + a + "<br>");
document.write("the largest no is : " + " " + largeNumber);


document.write("<br>" + "<br>");


//9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12] 
var a = [24, 53, 78, 91, 12];
var largeNumber = a[0];

for (i = 0; i < a.length; i++) {

        if (a[i] < largeNumber) {

                largeNumber = a[i];
        }
}

document.write("Array items: " + " " + a + "<br>");
document.write("the smallest no is : " + " " + largeNumber);


document.write("<br>" + "<br>");


//10. Write a program to print multiples of 5 ranging 1 to 100. 
for (i = 5; i <= 100; i = i + 5) {
        document.write(i + "," + " ");
}


document.write("<br>" + "<br>");

// ----------------------------------------  Chapter_17 to 20 End -----------------------------------------

// ---------------------------------  Chapter_06 (MATH EXPRESSIONS) -----------------------------------

// ----------------------------------------  Chapter_06 End -----------------------------------------
