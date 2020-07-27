// ------------------  Chapter_38 to 42 (FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS ) -----------------------------------

//1. Write a custom function power(a, b), to calculate the value of a raised to b.
function power(a, b) {
    var power = Math.pow(a, b);
    return power;
}

var num = +prompt("enter the base number");
var powerNumber = +prompt("enter the power number");

var result = power(num, powerNumber);
document.write("The power of " + num + " raised to " + powerNumber + " is: " + result);


document.write("<br>" + "<br>");


//2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. 
function leapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        document.write("its a leap year");
    }
    else {
        document.write("its not a leap year");
    }

}
var y = +prompt("enter year");
leapYear(y);

document.write("<br>" + "<br>");


//3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by 
//area = S(S − a)(S − b)(S − c) 
//where, S = ( a + b + c ) / 2 
//Calculate area of triangle using 2 functions 
function traiangleArea(a, b, c) {

    function S(a, b, c) {
        var result = ((a + b + c) / 2);
        return result;
    }

    var s = S(a, b, c);
    var area = s * (s - a) * (s - b) * (s - c);
    return area;
}

var a = +prompt('Enter value of side a');
var b = +prompt('Enter value of side b');
var c = +prompt('Enter value of side c');

document.write("The are of triangle whose sides are " + a + " , " + b + " , " + c + " , " + " is : " + traiangleArea(a, b, c))


document.write("<br>" + "<br>");

//4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. 
//there should be 3 functions one is the mainFunction and other are for average and percentage. 
//Call those functions from mainFunction and display result in mainFunction. 

function marks(english, urdu, maths) {

    function percentage(english, urdu, maths) {
        var totalMarks = 300;
        var obt = english + urdu + maths;
        var percentage = ((obt / totalMarks) * 100);
        return percentage;
    }

    function average(english, urdu, maths) {
        var avg = ((english + urdu + maths) / 3)
        return avg;
    }

    var average = average(english, urdu, maths);
    document.write("Avearge marks are : " + average + "<br>");

    var percentage = percentage(english, urdu, maths);
    document.write("percentage is : " + Math.ceil(percentage, 2) + "%")
}

var english = +prompt('Enter English Marks out of 100  : ');
var urdu = +prompt('Enter Urdu Marks out of 100 : ');
var maths = +prompt('Enter Maths Marks out of 100 : ');

marks(english, urdu, maths);


document.write("<br>" + "<br>");


//5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. 
//You can code for single chr as of now. 
// var str = prompt('Enter the str:');
// var chr = prompt('Enter the chr whose index you want to find:');

function index(str, chr) {
    var flag = 0;
    for (i = 0; i <= str.length; i++) {
        if (str[i] == chr) {
            var a = i;
            document.write("The index of character " + chr + " is : " + a);
            flag = 1;
        }
    }

    if (flag == 0) {
        document.write("letter not found")
    }
}

var str = prompt('Enter the str:');
var chr = prompt('Enter the chr whose index you want to find:');

index(str, chr)


document.write("<br>" + "<br>");


//6. Write a function to delete all vowels from a sentence. 
//Assume that the sentence is not more than 25 characters long. 

function deleteVowel(sentence) {
    var sentence = sentence.replace(/[aeiou]/g, '');
    document.write("Stirng after removing vowel is " + sentence);
}

var sentence = prompt("enter string contain less than 25 character");
deleteVowel(sentence);


document.write("<br>" + "<br>");


//7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. 
//For example, in the sentence 

function findOccurrences(string) {

    var str = string;
    var res = str.match(/[aeiou]{2}/g);

    document.write("String: " + str + "<br>")
    document.write("Count: " + res.length + "<br>")
    document.write("Occurences are: " + res)

}
var string = prompt('Enter the Sentence to check Two Consecutive vowels:');

findOccurrences(string);


document.write("<br>" + "<br>");


//8. The distance between two cities (in km.) is input through the keyboard. 
//Write four functions to convert and print this distance in meters, feet, inches and centimeters. 
function meter(distance) {
    var meter = distance * 1000;
    return meter;
}

function feet(distance) {
    var feet = distance * 3281;
    return feet;
}

function inches(distance) {
    var inches = distance * 39370;
    return inches;
}

function centimeters(distance) {
    var centimeters = distance * 100000;
    return centimeters;
}

var distance = +prompt("Enter distance between two cities in km");

document.write("Distance in meter is " + meter(distance) + "<br>");
document.write("Distance in feet is " + feet(distance) + "<br>");
document.write("Distance in inches is " + inches(distance) + "<br>");
document.write("Distance in centimeters is " + centimeters(distance) + "<br>");


document.write("<br>" + "<br>");


//9. Write a program to calculate overtime pay of employees. 
//Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. 
//Assume that employees do not work for fractional part of an hour. 
function overTime(time) {
    var hour = time;
    if (hour > 40) {
        var extraHour = hour - 40;
        var extraPay = extraHour * 12;
        document.write("The over time pay of " + extraHour + " will be " + extraPay)
    }
}

var time = +prompt("Enter working hours")
overTime(time)


document.write("<br>" + "<br>");


//10. A cashier has currency notes of denominations 10, 50 and 100. 
//If the amount to be withdrawn is input through the keyboard in hundreds, 
//find the total number of currency notes of each denomination the cashier will have to give to the withdrawer. 

function currencyNotes(amount) {
    var hundred = amount / 100;
    var fifty = (amount % 100) / 50;
    var ten = ((amount % 100) % 50) / 10;

    document.write("You have" + "<br>" + ~~hundred + " hundred rupess notes" + "<br>")
    document.write(~~fifty + " fifty rupees notes" + "<br>")
    document.write(~~ten + " ten rupees notes" + "<br>")
}

var cash = +prompt("enter total amount of cash")
currencyNotes(cash);
// ----------------------------------------  Chapter_38 to 42 End -----------------------------------------












// ---------------------------------  Chapter_43 to 48 (EVENTS) -----------------------------------
//1. Show an alert box on click on a link. 
function clickAlert() {
    alert("hello world")
}

//2. Display some Mobile images in browser. On click on an image Show the message in alert to user. 
function showAlert() {
    alert("Thank you for buying mobile from us")
}

//3. Display 10 student records in table and each row should contain a delete button. 
///If you click on a button to delete a record, entire row should be deleted.
function deleteData(delBtn) {
    var data = document.getElementById("data");
    data.deleteRow(delBtn.parentNode.parentNode.rowIndex);
}

//5. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. 
//And show updated counter value in browser. 
function increase() {
    var add = document.getElementById('value').innerHTML;
    add = parseInt(add);
    add = add + 1;
    document.getElementById('value').innerHTML = add;
}

function decrease() {
    var del = document.getElementById('value').innerHTML;
    del = parseInt(del);
    del = del - 1;
    document.getElementById('value').innerHTML = del;
}
// ----------------------------------------  Chapter_43 to 48 End -----------------------------------------











// ---------------------------------  Chapter_49 to 52 (EVENTS) -----------------------------------
//1. Create a signup form and display form data in your web page on submission. 
function signup() {
    var name = document.getElementById('name').value;
    var fname = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var address = document.getElementById('address').value;

    document.write("Name = " + name + "<br>")
    document.write("Father Name = " + fname + "<br>")
    document.write("email = " + email + "<br>")
    document.write("contact = " + contact + "<br>")
    document.write("address = " + address + "<br>")
}


//2. Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. 
//When user clicks on “Read more” button, full detail of that particular item will be displayed. 
function readMore() {
    // var before = document.getElementById('before').innerHTML;
    var add = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    document.getElementById('before').innerHTML = add;

}

//3. Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row. 

var table = document.getElementById('recordTable')

function addRecord() {
    var studentName = document.getElementById('stdName')
    var studentClass = document.getElementById('stdClass')
    var row = document.createElement('tr')
    var nametd = document.createElement('td')
    var classtd = document.createElement('td')
    var edittd = document.createElement('td')
    var deletetd = document.createElement('td')
    var nameText = document.createTextNode(studentName.value)
    var classText = document.createTextNode(studentClass.value)
    var editBtn = document.createElement('button')
    var editText = document.createTextNode("Edit")
    editBtn.setAttribute('onclick', 'editRecord(this)')
    editBtn.appendChild(editText)
    var delBtn = document.createElement('button')
    var delText = document.createTextNode("Delete")
    delBtn.setAttribute('onclick', 'deleteRecord(this)')
    delBtn.appendChild(delText)

    nametd.appendChild(nameText)
    classtd.appendChild(classText)
    edittd.appendChild(editBtn)
    deletetd.appendChild(delBtn)
    row.appendChild(nametd)
    row.appendChild(classtd)
    row.appendChild(edittd)
    row.appendChild(deletetd)
    table.appendChild(row)

    studentName.value = ""
    studentClass.value = ""
}

function editRecord(e) {
    var val = e.parentNode.parentNode.firstChild.innerText
    var newVal = prompt("Edit your record", val)
    var classval = e.parentNode.parentNode.firstChild.nextSibling.innerText
    var newClass = prompt("Edit your Class", classval)
    e.parentNode.parentNode.firstChild.innerText = newVal
    e.parentNode.parentNode.firstChild.nextSibling.innerText = newClass
}

function deleteRecord(e) {
    e.parentNode.parentNode.remove()
}
// ----------------------------------------  Chapter_49 to 52 End -----------------------------------------









// ---------------------------------  Chapter_53 to 57 (EVENTS) -----------------------------------

// 1. Consider you have 4 images in a file as shown below: Now When you click on an image it should display in a modal.

function closeModal() {
    document.getElementById("main").className = "hidden"
}

function showModal(id, src) {
    document.getElementById("main").className = "visible"
    var imageModal = document.getElementById("modalImg")
    var image = document.getElementById(id);
    imageModal.src = src;
}


// 2. Create a paragraph and two buttons “zoom in "(+) and “zoom out"(-).

function zoomIn() {
    var font = document.getElementById("pera").style.fontSize
    font = font.slice(0, length - 2)
    font = parseInt(font)
    font += 10
    font = font + "px"
    document.getElementById("pera").style.fontSize = font
}

function zoomOut() {
    var font = document.getElementById("pera").style.fontSize
    font = font.slice(0, length - 2)
    font = parseInt(font)
    font -= 10
    font = font + "px"
    document.getElementById("pera").style.fontSize = font
}
// ----------------------------------------  Chapter_53 to 57 End -----------------------------------------













// ---------------------------------  Chapter_58 to 67 (DOM) -----------------------------------

// ------------TASK O1 ----------------

//i. Get element of id “main-content” and assign them in a variable
var main = document.getElementById("main-content")

//ii. Display all child elements of “main-content” element. 
console.log(main.children)

//iii. Get all elements of class “render” and show their innerHTML in browser. 
var render = document.getElementsByClassName("render");
for (i = 0; i < render.length; i++) {
    document.write(render[i].innerHTML + "<br>")
}

//iv. Fill input value whose element id first-name using javascript. 
var fName = document.getElementById("first-name");
fName.value = "khansa";

//v. Repeat part iv for id ”last-name” and “email”.
var lName = document.getElementById("last-name");
lName.value = "siraj";

var email = document.getElementById("email");
email.value = "khansasiraj@yahoo.com";

// ------------TASK O2 ----------------

//i. What is node type of  element having id “form-content”.
var a = document.getElementById("form-content").nodeType;
console.log(a)

//ii. Show node type of element having id “lastName” and its child node.
var b = document.getElementById("lastName")
console.log(b.nodeType)
console.log(b.childNodes.nodeType)

//iii. Update child node of element having id “lastName”. 
b.innerHTML = 'Updated Text';

// iv. Get First and last child of id “main-content”.
var fChild = document.getElementById('main-content').firstChild;
var lChild = document.getElementById('main-content').lastChild;

// v. Get next and previous siblings of id “lastName”.
var nSibling = document.getElementById('lastName').nextSibling;
var pSibling = document.getElementById('lastName').previousSibling

// vi. Get parent node and node type of element having id “email”
var pId = document.getElementById('email').parentNode
var nType = document.getElementById('email').nodeType

// ----------------------------------------  Chapter_58 to 67 End -----------------------------------------