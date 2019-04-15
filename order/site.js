'use strict';
//listener for specialty pizza button
var s=document.getElementsByClassName('pizzas')[0];
document.getElementById('special').addEventListener("click", function(event) {
  s.classList.toggle("visible2");
})
//listener for build your own button
var u=document.getElementsByClassName('builds')[0];
document.getElementById('build').addEventListener("click", function(event) {
  u.classList.toggle("visible3");
})
