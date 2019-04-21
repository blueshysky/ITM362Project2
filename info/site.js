'use strict';

document.addEventListener("DOMContentLoaded", function(){
  console.log("dom is loaded");

  var summary_tab = document.querySelector("#tab1 label");
  var payment_tab = document.querySelector("#tab2 label");
  var content_summary = document.querySelector("#summary_content");
  var content_payment = document.querySelector("#payments_content");



  payment_tab.addEventListener("click", function(){
    // var summary_click = summary_tab.addEventListener("click", function(){
    //   return true;
    // });
    console.log("clicked");

    summary_content.classList.add("hidden");
    content_payment.classList.remove("hidden");

    // if(content_payment.classList.contains("hidden") && summary_click == true){
    //   content_payment.classList.remove("hidden");
    // };


  });

  summary_tab.addEventListener("click", function(){
    // if(payments_content.classList.contains(" ")) {
    // payments_content.classList.add("hidden");
    // console.log("Someone clicked on payment tab");
    // }else
    // {
    // payments_content.classList.add("show");
    // }

    console.log("clicked");

    // var payment_click = payment_tab.addEventListener("click", function(){
    //   return true;
    // });

    content_payment.classList.add("hidden");
    content_summary.classList.remove("hidden");

    // if(content_summary.classList.contains("hidden") && payment_click == true){
    //   content_summary.classList.remove("hidden");
    //   payments_content.classList.add("hidden");
    // }

});

});
