'use strict';

document.addEventListener("DOMContentLoaded", function(){
  console.log("dom is loaded");

  var tab = document.querySelector("#tab1 label")

  tab.addEventListener("click", function(){
    tab.style.display("block");
    console.log("clicked");
  });

});
