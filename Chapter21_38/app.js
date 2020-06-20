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

// ----------------------------------------  Chapter_26 to 30 End -----------------------------------------
