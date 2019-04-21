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
//get cart from other page
var cartdata = window.localStorage.getItem("shop");
var cart2 = JSON.parse(cartdata);
if(cart2 == null){
  cart2 = [];
}
var totalprice = 0;
// for loop that displays the order
for(var i = 0; i < cart2.length; i++){
  document.getElementById('jscart').innerHTML += i + 1 + ". " + cart2[i].size + " ";
  if(cart2[i].toppings == undefined){
    document.getElementById('jscart').innerHTML += cart2[i].pizza + " ";
  }else{
      document.getElementById('jscart').innerHTML += cart2[i].toppings + " ";
  }
  document.getElementById('jscart').innerHTML += "$" + cart2[i].price.toFixed(2);
  document.getElementById('jscart').innerHTML += "<br>";
  totalprice += cart2[i].price;
}

//if statement that displays the price
if(cart2.length > 0){
    document.getElementById('jsprice').innerHTML += "Total: $" + totalprice.toFixed(2);
    document.getElementById('jsprice2').innerHTML += "Total: $" + totalprice.toFixed(2);
} else {
    document.getElementById('jscart2').innerHTML = "Your cart is empty";
}
