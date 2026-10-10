let increment = document.getElementById("+");
let decrement = document.getElementById("-");
let rest = document.getElementById("rest");
let num = document.getElementById("num");
let count = 0;

function addone()
{
    num.textContent = ++count;
    if (count > 0)
        num.style.color = "green";
    else if (count < 0)
        num.style.color = "red";
    else
        num.style.color = "black";
}
function diffone()
{
    num.textContent = --count;
    if (count > 0)
        num.style.color = "green";
    else if (count < 0)
        num.style.color = "red";
    else
        num.style.color = "black";
}
function restcount()
{
    count = 0;
    num.textContent = count;
    num.style.color = "black";
}

increment.addEventListener("click",addone);
decrement.addEventListener("click",diffone);
rest.addEventListener("click",restcount);


