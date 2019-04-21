'use strict';

document.addEventListener("DOMContentLoaded", function(){
  console.log("dom is loaded");

  var summary_tab = document.querySelector("#tab1 label");
  var payment_tab = document.querySelector("#tab2 label");
  var content_summary = document.querySelector("#summary_content");
  var content_payment = document.querySelector("#payments_content");

  payment_tab.addEventListener("click", function(){
    if(content_summary.classList.contains(" ")) {
    content_summary.classList.add("hidden");
    console.log("Someone clicked on payment tab");
    if(content_payment.classList.contains("hidden") && content_summary.classList.contains("show")){
      content_payment.classList.remove("hidden")
    }
    }else
    {
    payments_content.classList.add("show");
    }

  });

  summary_tab.addEventListener("click", function(){
    if(payments_content.classList.contains(" ")) {
    payments_content.classList.add("hidden");
    console.log("Someone clicked on payment tab");
    }else
    {
    payments_content.classList.add("show");
    }

});

});
