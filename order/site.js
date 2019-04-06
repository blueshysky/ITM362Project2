'use strict';
//listener for menu button
var b=document.getElementsByClassName("dropcontent")[0];
document.getElementById('dropdown').addEventListener("click", function(event) {
b.classList.toggle("visible");
})
