//Selecting the section with an id of container without using querySelector
document.getElementById("container");

//Selecting the section with an id of container using querySelector
document.querySelector("container");

//Selecting all the list items with a class of "second"
document.getElementsByClassName("second");

//Selecting a list item with a class of third, but only the list item inside of the ol tag
document.querySelector("ol.third");

//Giving the section with an id of container the text "Hello!"
let foundDiv = document.querySelector('#container');
foundDiv.innerText = "Hello";

//Adding the class main to the div with a class of footer
let footer = document.querySelector(".footer");
footer.classList.add("main");

//Removing the class main on the div with a class of footer
let footer = document.querySelector(".footer");
footer.classList.remove("main");

//Creating a new li element
let newLI = document.createElement("li");

//Giving the li element the text "four"
newLI.innerText = "four"

//Appending the li element to the ul element
const list = document.querySelector("ul");
list.appendChild(newLI);

//Looping over all of the lis inside the ol tag and giving them a background color of "green"
const liInsideOl = document.querySelectorAll("ol LI");
for(const i = 0; i <liInsideOl.length; i++){
    liInsideOl[i].getElementsByClassName.backgroundColor = "green";
}

//Removing the div with a class of footer
const footer = document.querySelector(".footer");
footer.remove();