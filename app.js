// ----------------------------------------------------------Chapter_01----------------------------------------------------------
alert("Welcome To My Website");
alert("Error! Please Enter a valid password");
alert("Welcome to JS Land.. \nHappy Coding!");
alert("Welcome to JS Land..");
alert("Happy Coding!");
console.log("Hello.. I can run JS through my web browser console");


// ----------------------------------------------------------Chapter_02----------------------------------------------------------
var username;
var Myname = "Khansa Siraj";

var message;
message = "Hello World";
alert(message);

//Student Bio Data
var name = "Jhone Doe";
var age = "15 years old";
var course = "Certified Mobile Application Development";
alert(name);
alert(age);
alert(course);

var pizza = "PIZZA \nPIZZ \nPIZ \nPI \nP"
alert(pizza);

var email = "Khansasiraj@yahoo.com";
alert("My email address is" + " " + email);

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book" + " " + book);

document.write("Yeah! I can write HTML content through JavaScript");

var symbol = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(symbol);

// ----------------------------------------------------------Chapter_03----------------------------------------------------------
var age = 23;
alert("I am" + " " + age + " " + "years old");

var n = 12;
alert("You have visited this site " + n + " times");

var birthYear = 1998;
document.write("My birth year is " + birthYear);
document.write("<br>")
document.write("Data type of my declared variable is" + " " + typeof birthYear);

var Visitor_name = "John Doe";
var Product_title = "T-shirt(s)";
var Quantity = 5;
document.write(Visitor_name + " " + "ordered" + " " + Quantity + " " + Product_title + " " + "on XYZ Clothing store");


// ----------------------------------------------------------Chapter_04----------------------------------------------------------
// 3 variables in one statement.
var name, email, qualification;

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

// document.write("<h1>Rules for naming JS variables</h1>");
document.write("<h1>" + "Rules for naming JS variables" + "</h1>");
document.write("Variable names can only contain numbers, $ and _. For example: $my_1stVariable." + "<br/>");
document.write("Variable must begin with a letter, $ or _. For example: $name, _name or name" + "<br/>");
document.write(" Variable names are case sensitive" + "<br/>");
document.write("Variable names should not be JS keywords" + "<br/>");


// ----------------------------------------------------------Chapter_05----------------------------------------------------------
var a = 3;
var b = 5;
// addition
var c = a + b;
document.write("Sum of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

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


//Do the following using JS Mathematic Expressions 
var x;
document.write("Value after variable declaration is:" + " " + x);

x = 5;
document.write("<br>");
document.write("Initial value: " + " " + x);

x = ++x;
document.write("<br>");
document.write("Value after increment is:  " + " " + x);

x = x + 7;
document.write("<br>");
document.write("Value after addition is:   " + " " + x);

x = --x;
document.write("<br>");
document.write("Value after decrement is: " + " " + x);

x = x % 3;
document.write("<br>");
document.write("The remainder is :    " + " " + x);


document.write("<br>" + "<br>");


// script to store ticket price
var ticket = 600;
var quantity = 5;
var cost = ticket * quantity;

document.write("Total cost to buy" + " " + quantity + " " + "tickets to movie is" + " " + cost + "PKR")


document.write("<br>" + "<br>");


//code of table
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

//  The Temperature Converter

//celcius to farenheight
var C = 25;
var F = (C * 9 / 5) + 32;
document.write(C + "C is " + F + "F" + "<br/>");

//fahrenheight to celcius
var F = 70;
var C = (F - 32) * 5 / 9;
document.write(F + "F is " + C + "C" + "<br/>");


document.write("<br>" + "<br>");


// program to implement checkout process of a shopping cart system for an e-commerce website
var item1_Price = 650;
var item2_Price = 100;

var item_1_quantity = 3;
var item_2_quantity = 7;

var item_1_cost = item1_Price * item_1_quantity;
var item_2_cost = item2_Price * item_2_quantity;

var Shipping = 100;

var total = item_1_cost + item_2_cost + Shipping;

//Printing Reciept
document.write("Price of Item 1 is " + item1_Price + "<br/>");
document.write("Quantity of Item 1 is " + item_1_quantity + "<br/>");
document.write("Price of Item 2 is " + item2_Price + "<br/>");
document.write("Quantity of Item 2 is " + item_2_cost + "<br/>");
document.write("Shipping Charges " + Shipping + "<br/>");
document.write("Total cost of your order is " + total);


document.write("<br>" + "<br>");


//marksheet
var totalMarks = 980;
var obttainMarks = 804;
var Percentage = (totalMarks / obttainMarks) * 100;

document.write("<h3>" + "Marks Sheet" + "</h3>");
document.write("Total Marks: " + totalMarks + "<br/>");
document.write("Marks Obtained: " + obttainMarks + "<br/>");
document.write("Percentage: " + Percentage);


document.write("<br>" + "<br>");


//Currency conversion
var dollarRate = 104.80;
var riyalRate = 28;
var pkr = (10 * dollarRate) + (25 * riyalRate);
document.write("<h3>" + "Currency Conversion in PKR" + "</h3>");
document.write("Total Currency in PKR: " + pkr);


document.write("<br>" + "<br>");


//Arithmetic calculations
var num = 7;
num = (((num + 5) * 10) / 2);
document.write("<h3>" + "Arithmetic Operation in single statement" + "</h3>");
document.write("Output: " + num);


document.write("<br>" + "<br>");


//Age Calculator
var currentYear = 2020;
var birthYear = 1998;
var Age = currentYear - birthYear;

document.write("<h3>" + "Age Calculator" + "</h3>");
document.write("Current Year: " + currentYear + "<br/>");
document.write("Birth Year: " + birthYear + "<br/>");
document.write("Your age is: " + Age);


document.write("<br>" + "<br>");


// Calculate properties of a circle. a. Store a radius into a variable. 
var radius = 7;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;

document.write("<h3>" + "The Geometrizer" + "</h3>");
document.write("Radius of a Circle: " + radius + "<br/>");
document.write("The circumference is: " + circumference + "<br/>");
document.write("The area is: " + area);


document.write("<br>" + "<br>");


// The Lifetime Supply Calculator
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

// ---------------------------------  Chapter_06 (MATH EXPRESSIONS) -----------------------------------

// ----------------------------------------  Chapter_06 End -----------------------------------------

// ---------------------------------  Chapter_06 (MATH EXPRESSIONS) -----------------------------------

// ----------------------------------------  Chapter_06 End -----------------------------------------

// ---------------------------------  Chapter_06 (MATH EXPRESSIONS) -----------------------------------

// ----------------------------------------  Chapter_06 End -----------------------------------------

// ---------------------------------  Chapter_06 (MATH EXPRESSIONS) -----------------------------------

// ----------------------------------------  Chapter_06 End -----------------------------------------

// ---------------------------------  Chapter_06 (MATH EXPRESSIONS) -----------------------------------

// ----------------------------------------  Chapter_06 End -----------------------------------------
