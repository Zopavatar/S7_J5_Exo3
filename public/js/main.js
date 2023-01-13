let exo1 = document.querySelector("#content");
console.log(exo1);

let exo2 = document.querySelectorAll("#content");
console.log(exo2);

let exo3 = document.querySelector("li.important");
console.log(exo3);

let exo4 = document.querySelectorAll("li.important");
console.log(exo4);

let exo5 = document.querySelectorAll("li");
exo5.forEach(element =>{
    console.log(element.innerText.substring(0,element.innerText.length-1) + element.innerText[element.innerText.length-1].toUpperCase());
})

let exo6 = document.getElementById("content");
exo6 = document.getElementsByClassName("grandParagraphe")[0];

console.log(exo6);