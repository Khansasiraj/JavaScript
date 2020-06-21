// ---------------------------------  Chapter_21 to 25 (STRING METHODS) -----------------------------------

//1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. 
//Greet the user using his full name. 
var firstName = prompt("Enter your first name");
var lasttName = prompt("Enter your last name");

var fullName = firstName + " " + lasttName;

alert("Good Morning" + " " + fullName);


//2. Write a program to take a user input about his favorite mobile phone model. 
//Find and display the length of user input in your browser 
var mobile = prompt("Enter your favorite mobile phone model");

document.write("My favourite phone is :" + " " + mobile + "<br>");
document.write("Length of String :" + " " + mobile.length);


document.write("<br>" + "<br>");


//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser        
var word = "Pakistani";
var n = word.indexOf("n");

document.write("String : " + " " + word + "<br>");
document.write("Index of 'n' : " + " " + n);


document.write("<br>" + "<br>");


//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser. 
var word = "Hello World";
var n = word.lastIndexOf("l");

document.write("String : " + " " + word + "<br>");
document.write("Last index of 'l' : " + " " + n);


document.write("<br>" + "<br>");


//5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser. 
var word = "Pakistani";
var n = word.charAt("3");

document.write("String : " + " " + word + "<br>");
document.write("Character at index '3' : " + " " + n);


document.write("<br>" + "<br>");


//6. Repeat Q1 using string concat() method. 
var firstName = prompt("Enter your first name");
var lasttName = prompt("Enter your last name");

var fullName = firstName.concat(lasttName);;

alert("Good Morning" + " " + fullName);


//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
var word = "Hyderabad";
var n = word.replace("Hyder", "Islam");

document.write("City : " + " " + word + "<br>");
document.write("After Replacement : " + " " + n);


document.write("<br>" + "<br>");


//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. 
//var message = “Ali and Sami are best friends. They play cricket and football together.”; 
var message = "Ali and Sami are best friends. They play cricket and football together.";
var n = message.replace(/and/g, "$");

document.write("Message : " + " " + message + "<br>");
document.write("After Replacement : " + " " + n);


document.write("<br>" + "<br>");


//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser. 
var word = "472"
var convertNumber = parseInt(word);

document.write("Value : " + " " + convertNumber + "<br>");
document.write("After Replacement : " + " " + typeof (convertNumber) + "<br>");

var num = 472;
var convertString = num.toString();

document.write("Value : " + " " + convertString + "<br>");
document.write("After Replacement : " + " " + typeof (convertString));


document.write("<br>" + "<br>");


//10. Write a program that takes user input. Convert and show the input in capital letters. 
var word = prompt("Enter any word")
var n = word.toUpperCase();

document.write("User input : " + " " + word + "<br>");
document.write("Upper case : " + " " + n);


document.write("<br>" + "<br>");


//11. Write a program that takes user input. Convert and show the input in title case. 
// var word = prompt("Enter your name")
var word = prompt("Enter your first name");

var firstLetter = word.charAt(0);
firstLetter = firstLetter.toUpperCase();

var allLetters = word.slice(1, word.length);
allLetters = allLetters.toLowerCase();

var title = firstLetter + allLetters;

document.write("User input : " + " " + word + "<br>");
document.write("Title case : " + " " + title);


document.write("<br>" + "<br>");


//12. Write a program that converts the variable num to string. var num = 35.36 ; 
//Remove the dot to display “3536” display in your browser. 
var num = 35.36;
str = num.toString();
str = str.replace(".", "")

document.write("Number : " + " " + num + "<br>");
document.write("Result: " + " " + str);


document.write("<br>" + "<br>");


//13. Write a program to take user input and store username in a variable. 
//If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ . 
//Note: 
//ASCII code of ! is 33 
//ASCII code of , is 44 
//ASCII code of . is 46 
//ASCII code of @ is 64 
var userNmae = prompt("Enter user naame");
for (i = 0; i <= userNmae.length - 1; i++) {

    if (userNmae.charCodeAt(i) == 64 || userNmae.charCodeAt(i) == 33 || userNmae.charCodeAt(i) == 44 || userNmae.charCodeAt(i) == 46) {
        alert("PLEASE enter a valid username")
        break;
    }

}


//14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
//Write a program to enable “search by user input” in an array. 
//After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. 
//Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.
var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var item = prompt("Welcome to ABC Bakery. What do you want to order");
var flag = 0;

for (i = 0; i <= a.length - 1; i++) {
    if (a[i] == item) {
        document.write(item + " " + "is <b> avialable </b> at index" + " " + a.indexOf(item) + " " + "in our bakery")
        flag = 1;
        break;
    }

}

if (flag == 0) {
    document.write("We are sorry" + " " + item + " " + "is <b> not available </b> in our bakery")
}


document.write("<br>" + "<br>");


// 15. Write a program to take password as an input from user. The password must qualify these requirements: 
// a. It should contain alphabets and numbers 
// b. It should not start with a number 
// c. It must at least 6 characters long 
//If the password does not meet above requirements, prompt the user to enter a valid password. 
var password = prompt("Enter your password")

var num = false;
var lowerLetter = false;
var upperLetter = false;
var length = true;
var firstChar = true;


for (x = 0; x <= password.length - 1; x++) {
    if (password.charCodeAt(x) >= 97 && password.charCodeAt(x) <= 122) {
        lowerLetter = true;
    }
    if (password.charCodeAt(x) >= 48 && password.charCodeAt(x) <= 57) {
        num = true;
    }
    if (password.charCodeAt(x) >= 65 && password.charCodeAt(x) <= 90) {
        upperLetter = true;
    }

}

if (password.length <= 6) {
    length = false;
}

for (i = 0; i <= 10; i++) {
    if (password.startsWith(i, 0)) {
        firstChar = false;
    }
}

if (num == false || upperLetter == false || lowerLetter == false || length == false || firstChar == false) {
    alert("you enter an invalid password")
    if (num == false || upperLetter == false || lowerLetter == false) {
        alert("password must contain a upeercase letter, a lower case letter and a number")
    }
    if (length == false) {
        alert("lenght of password must be maximum 6 characters")
    }
    if (firstChar == false) {
        alert("password can not start with a number")
    }
}
else {
    alert("password approved")
}


//16. Write a program to convert the following string to an array using string split method. 
//var university = “University of Karachi”; Display the elements of array in your browser. 
var university = "University of Karachi";
var a = university.split("");


for (i = 0; i <= university.length - 1; i++) {

    document.write(a[i] + "<br>")
}


document.write("<br>" + "<br>");


//17. Write a program to display the last character of a user input.
var input = prompt("Input any string");
var lastChar = input.charAt(input.length - 1)

document.write("User input : " + " " + input + "<br>");
document.write("Last character of input : " + " " + lastChar);


document.write("<br>" + "<br>");


//  18. You have a string “The quick brown fox jumps over the lazy dog”. 
//  Write a program to count number of occurrences of word “the” in given string. 
var sentence = "The quick brown fox jumps over the lazy dog";
var n = sentence.match(/the/gi);

document.write("Text : " + " " + sentence + "<br>");
document.write("There  are" + " " + n.length + " " + "occurence of word 'the'");
// ----------------------------------------  Chapter_21 to 25 End -----------------------------------------







// ---------------------------------  Chapter_26 to 30 (MATH METHODS) -----------------------------------

//1. Write a program that takes a positive integer from user & display the following in your browser. 
//a. number 
//b. round off value of the number 
//c. floor value of the number 
//d. ceil value of the number  
var num = +prompt("Enter any positive integer");

document.write("number : " + " " + num + " <br>");
document.write("round off value : " + " " + Math.round(num) + " <br>");
document.write("floor value : " + " " + Math.floor(num) + " <br>");
document.write("ceil value : " + " " + Math.ceil(num));


document.write("<br>" + "<br>");


//2. Write a program that takes a negative integer from user & display the following in your browser. 
//a. number 
//b. round off value of the number 
//c. floor value of the number 
//d. ceil value of the number  
var num = +prompt("Enter any negative integer");

document.write("number : " + " " + num + " <br>");
document.write("round off value : " + " " + Math.round(num) + " <br>");
document.write("floor value : " + " " + Math.floor(num) + " <br>");
document.write("ceil value : " + " " + Math.ceil(num));


document.write("<br>" + "<br>");


//3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5 
var num = +prompt("Enter any number");

document.write("absolute value of" + " " + num + " " + "is" + " " + Math.abs(num));


document.write("<br>" + "<br>");


//4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:
var num = Math.random() * 6;


document.write("random dice value :" + " " + Math.round(num));


document.write("<br>" + "<br>");


//5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
var num = Math.random() * 2;
var toss = Math.ceil(num)

if (toss == 2) {
    document.write(toss + "<br>")
    document.write("random coin value : Heads")
}
else if (toss == 1) {
    document.write(toss + "<br>")
    document.write("random coin value : Tails")
}


document.write("<br>" + "<br>");


//6. Write a program that shows a random number between 1 and 100 in your browser.
var num = Math.random() * 100;

document.write("random number between 1 and 100 :" + " " + Math.round(num));


document.write("<br>" + "<br>");


//7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. 
//Possible user inputs can be: 
//a. 50 
//b. 50kgs 
//c. 50.2kgs 
//d. 50.2kilograms 
var weight = prompt("Enter your weight")
var value = "";

document.write("The weight of user is" + " ");

for (i = 0; i <= weight.length - 1; i++) {
    if (weight.charCodeAt(i) >= 48 && weight.charCodeAt(i) <= 57 || weight.charCodeAt(i) == 46) {
        value = weight[i];
        document.write(value);
    }

}
document.write(" " + "kilograms");


document.write("<br>" + "<br>");


//8. Write a program that stores a random secret number from 1 to 10 in a variable. 
//Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
// var secretNum = Math.random() * 10;
// secretNum = Math.round(secretNum);

var num = +prompt("Enter any number from 1 to 10")

if (secretNum == num) {
    alert("congratulate you win")
}
else {
    alert("try again")
}

// ----------------------------------------  Chapter_26 to 30 End -----------------------------------------











// ---------------------------------  Chapter_31 to 34 (DATE METHODS) -----------------------------------

        //1. Write a program that displays current date and time in your browser.
        var d = new Date()
        document.write(d)


        document.write("<br>" + "<br>");


        //2. Write a program that alerts the current month in words. For example December. 
        var d = new Date();
        var month = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        var cureentMonth = d.getMonth()

        document.write("Current Month : " + " " + month[cureentMonth]);


        document.write("<br>" + "<br>");


        //3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun. 
        var d = new Date();
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        var cureentDay = d.getDay()

        document.write("Today is : " + " " + days[cureentDay]);


        document.write("<br>" + "<br>");


        //4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today. 
        var d = new Date();
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        var cureentDay = d.getDay()

        if (days[cureentDay] == 'Sun' || days[cureentDay] == 'Sat') {
            document.write("It's a Funday");
        }


        document.write("<br>" + "<br>");


        //5. Write a program that shows the message 
        //“First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.
        var d = new Date();
        d = d.getDate();

        if (d > 16) {
            document.write('First fifteen days of the month')
        }
        else {
            document.write('Last days of the month')
        }


        document.write("<br>" + "<br>");


        //6. Write a program that determines the minutes since midnight, 
        //Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. 
        //Use any variable you like to represent the Date object.
        var d = new Date();
        var min = (d.getTime()) / (1000 * 60);

        document.write('Current date : ' + d + "<br>");
        document.write('Elapsed Miliseconds since Jan 1 1970 : ' + d.getTime() + "<br>");
        document.write('Elapsed Minutes since Jan 1 1970 : ' + min);


        document.write("<br>" + "<br>");


        //7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 
        var d = new Date();
        var currentHour = d.getHours();

        if (currentHour >= 0 && currentHour <= 12) {
            document.write("Its AM")
        }
        else {
            document.write("Its PM")
        }


        document.write("<br>" + "<br>");


        //8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
        var laterDate = new Date("Dec 31, 2020");

        document.write("Later Date : " + " " + laterDate)


        document.write("<br>" + "<br>");


        //9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? 
        //Note: 1st Ramadan was on June 18, 2015 
        var d = new Date();
        var ramzan = new Date("June 18, 2015 ")
        var no_of_days = (d - ramzan) / (1000 * 60 * 60 * 24)
        
        document.write(Math.floor(no_of_days) + " " + "days have passed since 1st Ramzan , 2015");


        document.write("<br>" + "<br>");


        //10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015. 
        var refDate = new Date("Dec 5, 2015");
        var begDate = new Date("Jan 1, 2015")
        var seconds = (refDate - begDate) / (1000)
        
        document.write("On reference date" + " " + refDate + " , " +   Math.floor(seconds) + " " + "seconds has passedsince beginning of 2015");


        document.write("<br>" + "<br>");


        //11. Create a Date object for the current date and time. 
        //Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.
        var d = new Date();
        document.write("current date : " + " " + d + "<br>");

        d.setHours(d.getHours()-1)
        document.write("1 hour ago it was : " + " " + d);


        document.write("<br>" + "<br>");


        //12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
        var d = new Date();
        document.write("current date : " + " " + d + "<br>");

        d.setFullYear(d.getFullYear()-100)
        document.write("100 years back, it was : " + " " + d);


        document.write("<br>" + "<br>");


        //13. Write a program to ask the user about his age. Calculate and show his birth year in your browser. 
        var age = +prompt("Enter your age");
        var d = new Date();
        var currentYear = d.getFullYear()
        var birthYear = currentYear - age;

        document.write("Your age is  : " + " " + age + "<br>");
        document.write("Your birth Year is  : " + " " + birthYear);


        document.write("<br>" + "<br>");


        //14. Write a program to generate your K-Electric bill in your browser. 
        //All the amounts should be rounded off to 2 decimal places. Display the following fields: 
        //a. Customer Name 
        //b. Current Month 
        //c. Number of units 
        //d. Charges per unit 
        //e. Net Amount Payable (within Due Date) 
        //f. Late Payment Surcharge 
        //g. Gross Amount Payable (after Due Date) 

        var customerName = "Khansa"
        
        var d = new Date();
        var month = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        var currentMonth = d.getMonth();

        var no_oF_units = 410;
        var charges_per_unit = 16;

        var netAmont = no_oF_units * charges_per_unit;
        var latePayment = 350;
        var grossAmount = netAmont + latePayment;

        document.write("<h1>" + "K-Electric Bills" + "</h1>");
        document.write("Current Name : " + " " +  "<b>" + customerName +  "</b>" + "<br>");
        document.write("Current Month : " + " " +  "<b>" + month[currentMonth] +  "</b>" + "<br>");
        document.write("Number of units  : " + " " +  "<b>" + no_oF_units +  "</b>" + "<br>");
        document.write("Charges per unit   : " + " " +  "<b>" + charges_per_unit +  "</b>" + "<br>");

        document.write("<br>" + "<br>");

        document.write(" Net Amount Payable (within Due Date) : " + " " +  "<b>" + netAmont +  "</b>" + "<br>");
        document.write(" Late Payment Surcharge  : " + " " +  "<b>" + latePayment +  "</b>" + "<br>");
        document.write("  Gross Amount Payable (after Due Date)  : " + " " +  "<b>" + grossAmount +  "</b>" + "<br>");
// ----------------------------------------  Chapter_31 to 34 End -----------------------------------------










// ---------------------------------  Chapter_31 to 34 (FUNCTION) -----------------------------------

// ----------------------------------------  Chapter_31 to 34 End -----------------------------------------
