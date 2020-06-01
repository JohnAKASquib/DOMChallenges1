//select section with id of container without querySelector
document.getElementById('container');
//select section with id of container with querySelector
document.querySelector('#container');
//select all list items with class second
document.getElementsByClassName('second');
//select list item with class of third only inside ol tag
document.querySelector('ol').getElementsByClassName('third');
//give section with id of container the text hello
var x=document.getElementById('container')
x.append('Hello!')
//add class main to class footer
z=document.getElementsByClassName('footer')
z[0].classList.add('main')
//remove class main from footer
z[0].classList.remove('main')
//create a new li element
z = document.createElement('li')
//set li text to "four"
z.innerText='four'
//append li to ul element
const list =document.querySelector("ul")
list.appendChild(z)
//loop through all lis inside ol tag and make bg color=green
const liAndOl=document.querySelectorAll("ol li")
for(i = 0; i <liAndOl.length; i++){
    liAndOl[i].style.backgroundColor = "green";
}
//remove footer
document.querySelector(".footer").remove()