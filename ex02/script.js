let title = document.getElementById("first");
let paragraph = document.querySelector("p");

paragraph.textContent = "One of many JavaScript HTML methods is getElementById()" + 
"1- method returns an element with a specified value." +
"2- method returns null if the element does not exist." +
"3- method is one of the most common methods in the HTML DOM." +
"4- It is used almost every time you want to read or edit an HTML element."
title.style.color = "blue";
title.style.fontSize = "30px";
title.classList.add("active");