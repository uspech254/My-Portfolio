console.log("Hello, World! code is working!");

// 1. Variables
let title = document.getElementById("title");
let info = document.getElementById("info");
let myName = "Dorcas";
let myCity = "Mombasa";
let myAge = 20;

// 2. Use Variables
title.innerText = "Hello, I am " + myName;
title.style.color = "purple";

info.innerText = "I live in " + myCity + " and I am " + myAge + " years old.";

// 3. check in console
console.log("Name: " + myName);
console.log("city: " + myCity);

// DATA TYPE - OBJECT
let person = {
    name: "Dorcas",
    city: "Mombasa",
    age: 20,
    course: "JavaScript"
};

console.log(person);


  title.innerText = "Hello, I am" + person.name;
 title.style.color ="Purple";
 info.innerText ="I  live in" + person.city + " - " +  person.course;

  console.log(person);
  console.log(typeof person); // object

// ARRAY DATA TYPE
let colors = ["red", "green", "purple"];
let marks = [85, 90, 78, 92];
let names = ["Amani", "Arillina", "Imani"];

console.log(colors);
console.log(colors[0]);

// Assignment operators
let x = 10;
title.innerText = "x is " + x; // x is 10
x += 5; // same as x = x + 5
console.log(x); // 15

x -= 3; // same as x = x - 3
console.log(x); // now x is 12

// Comparison Operators
let h = 20;
console.log(h > 18); // true
console.log(h < 10); // false
console.log(h == 25); // false

// Conditional (if or else)
let myMarks = 75;
if (myMarks > 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please login";
console.log(message);

let score = 75;
let finalGrade = score >= 80 ? "A" : score >= 60 ? "B" : "C";
console.log(finalGrade); // B

// Logical operators
let age = 25;
let hasId = true;
console.log(age >= 18 && hasId); // true
console.log(age >= 18 && hasId); // true

// Functional
function greet(name) {
    console.log("Hello " + name + "!");
}

greet("John");
greet("Mary");

function sayHello() {
    title.innerText = "Hello World!";
    console.log("Hello World!");
}

sayHello();

function greetMary() {
    console.log("Hello Mary");
}

greetMary();
greetMary();

function sayHelloStudent() {
    console.log("Hello student");
}

sayHelloStudent();

function greetPerson(name) {
    console.log("Hello " + name + "!");
}

greetPerson("Flavia");
greetPerson("Roy");
greetPerson("Nadia");

function add(a, b, c) {
    return a + b + c;
}

let total = add(5, 10, 3);
console.log(total); // 18

title.innerText = "Total: " + total;

// Arrays
let students = ["John", "Mary", "Peter", "Jane"];
console.log(students.map(name => name.toUpperCase()));
console.log(students);

// Array Methods
// method push() - add to the end
let fruits = ["Mango", "Apple", "Banana"];
fruits.push("orange");
console.log(fruits);

// shift()
let studentsList = ["John", "Mary", "Peter"];
studentsList.shift();
console.log(studentsList);

// pop() - removes the last item
fruits.pop();
console.log(fruits);

// unshift - add at beginning
let additionalColors = ["red", "green", "blue"];
additionalColors.unshift("yellow");
console.log(additionalColors); // ["yellow", "red", "green", "blue"]

// IndexOf - find position
let searchFruit = "Banana";
let position = fruits.indexOf(searchFruit);

if (position !== -1) {
    console.log(searchFruit + " found at position " + position);
} else {
    console.log(searchFruit + " not found");
}

let fruitList = ["Mango", "Apple", "Banana"];
console.log(fruitList.indexOf("Apple")); // returns 1
console.log(fruitList.indexOf("Kiwi")); // returns -1

// Includes- checks if an item exists
let nameToFind = "DORCAS";
let found = students.map(s => s.toLowerCase()).includes(nameToFind.toLowerCase());
console.log(found); // true



// loops - repeat code
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// print 1,2,3,4,5
let tropicalFruits = ["Kiwi", "Orange", "Pineapple"];
for (let fruit of tropicalFruits) {
    console.log(fruit);
}  

// 1.Change Heading
function changeHeading() {
let mainHeading = document.getElementById("main-heading");
mainHeading.textContent="Hello! I'm Dorcas Ndunge";
}


// 2.SAY HELLO
function sayHello() {
let nameInput =document.getElementById("nameInput");
let greeting =document.getElementById("greetingOutput");
if (nameInput.value.trim()=== "") {
    greeting.textContent ="Please enter your name first!"
}else {
    greeting.textContent ='Hello, " + nameInput.value +"! Welcome to my portfolio";
}
}



//THEME TOGGLE
function toggleDarkMode()
{
    document.body.classList.toggle("dark-mode");
}

// 4. My PROJECTS
const projectForm = document.getElementById("projectForm");
const projectinput = document.getElementById("projectInput");
const projectLink = document.getElementById("projectLink");
const projectlist = document.getElementById("projectList");
const projectMessage = document.getElementById("projectMessage");

let projects = [];

function displayProjects() {
    projectlist.innerHTML = "";
    projects.forEach((project, index) => {
        const listItem = document.createElement("li");

        const link = document.createElement("a");
        link.href = project.link;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = project.name;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            displayProject(index);
        });

        listItem.appendChild(link);
        listItem.appendChild(deleteBtn);
        projectlist.appendChild(listItem);
    });
}

function displayProject(index) {
    projects.splice(index, 1);
    displayProjects();
    projectMessage.textContent = "Project deleted";
}

projectForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (projectinput.value === "" || projectLink.value === "") {
        projectMessage.textContent = "Please fill all the fields!";
        return;
    }

    const newProject = {
        name: projectinput.value,
        link: projectLink.value
    };

    projects.push(newProject);
    displayProjects();
    projectForm.reset();
    projectMessage.textContent = "Project added successfully!";
});
    

    



















