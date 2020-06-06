// Chapter_01
alert("Welcome To My Website");
alert("Error! Please Enter a valid password");
alert("Welcome to JS Land.. \nHappy Coding!");
alert("Welcome to JS Land..");
alert("Happy Coding!");
console.log("Hello.. I can run JS through my web browser console");


// Chapter_02
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

// Chapter_03
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


//Chapter_04
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


// Chapter_05
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
num = (((num + 5) * 10)/2);
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



// Chapter_01
// Chapter_01
// Chapter_01
// Chapter_01
// Chapter_01
// Chapter_01
// Chapter_01
// Chapter_01
// Chapter_01
// Chapter_01