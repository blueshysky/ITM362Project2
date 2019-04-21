'use strict';
//listener for specialty pizza button that expands gallery
var s=document.getElementsByClassName('pizzas')[0];
document.getElementById('special').addEventListener("click", function(event) {
  s.classList.toggle("visible2");
})
//listener for build your own button that expands gallery
var u=document.getElementsByClassName('builds')[0];
document.getElementById('build').addEventListener("click", function(event) {
  u.classList.toggle("visible3");
})
//create specialty pizza objects
function specialty(size, pizza, price) {
  this.size = size;
  this.pizza = pizza;
  this.price = price;
}
var smch = new specialty('Small', 'Cheese', 6.99);
var mech = new specialty('Medium', 'Cheese', 8.99);
var lach = new specialty('Large', 'Cheese', 10.99);
var xlch = new specialty('XL', 'Cheese', 12.99);
var smdp = new specialty('Small', 'Deluxe', 8.99);
var medp = new specialty('Medium', 'Deluxe', 11.99);
var ladp = new specialty('Large', 'Deluxe', 15.99);
var xldp = new specialty('XL', 'Deluxe', 19.99);
var smml = new specialty('Small', 'Meat Lovers', 8.99);
var meml = new specialty('Medium', 'Meat Lovers', 11.99);
var laml = new specialty('Large', 'Meat Lovers', 15.99);
var xlml = new specialty('XL', 'Meat Lovers', 19.99);
var smbq = new specialty('Small', 'BBQ Chicken', 8.99);
var mebq = new specialty('Medium', 'BBQ Chicken', 11.99);
var labq = new specialty('Large', 'BBQ Chicken', 15.99);
var xlbq = new specialty('XL', 'BBQ Chicken', 19.99);
//declare cart variables
var cartdata = localStorage.getItem("shop");
if (cartdata == null){
var cart = [];
} else {
  var cart = JSON.parse(cartdata);
}
//add to cart function
function addToCart(item) {
  cart.push(item);
  localStorage.setItem("shop", JSON.stringify(cart));
  console.log(cart);
}
//declare variables for specialty radio buttons
var sm1 = document.getElementById('sm2');
var me1 = document.getElementById('me2');
var la1 = document.getElementById('la2');
var xl1 = document.getElementById('xl2');
var sm2 = document.getElementById('sm3');
var me2 = document.getElementById('me3');
var la2 = document.getElementById('la3');
var xl2 = document.getElementById('xl3');
var sm3 = document.getElementById('sm4');
var me3 = document.getElementById('me4');
var la3 = document.getElementById('la4');
var xl3 = document.getElementById('xl4');
var sm4 = document.getElementById('sm5');
var me4 = document.getElementById('me5');
var la4 = document.getElementById('la5');
var xl4 = document.getElementById('xl5');
//for loop that displays running order upon new page
for(var i = 0; i < cart.length; i++){
  document.getElementById('cartjs').innerHTML += cart[i].size;
  if(cart[i].toppings == undefined){
    document.getElementById('cartjs').innerHTML += cart[i].pizza;
  }else{
      document.getElementById('cartjs').innerHTML += cart[i].toppings;
  }
  document.getElementById('cartjs').innerHTML += cart[i].price;
  document.getElementById('cartjs').innerHTML += "<br>";
}
//listener for add to order button that adds specialty pizza to order
document.getElementById('add1').addEventListener("click", function(event){
if(sm1.checked == true){
    addToCart(smch);
}if(me1.checked == true){
    addToCart(mech);
}if(la1.checked == true){
    addToCart(lach);
}if(xl1.checked == true){
    addToCart(xlch);
}
document.getElementById('cartjs').innerHTML = "";
//for loop that displays running order on order page
for(var i = 0; i < cart.length; i++){
  document.getElementById('cartjs').innerHTML += cart[i].size;
  if(cart[i].toppings == undefined){
    document.getElementById('cartjs').innerHTML += cart[i].pizza;
  }else{
      document.getElementById('cartjs').innerHTML += cart[i].toppings;
  }
  document.getElementById('cartjs').innerHTML += cart[i].price;
  document.getElementById('cartjs').innerHTML += "<br>";
}
});
document.getElementById('add2').addEventListener("click", function(event){
if(sm2.checked == true){
    addToCart(smdp);
}if(me2.checked == true){
    addToCart(medp);
}if(la2.checked == true){
    addToCart(ladp);
}if(xl2.checked == true){
    addToCart(xldp);
}
document.getElementById('cartjs').innerHTML = "";
//for loop that displays running order on order page
for(var i = 0; i < cart.length; i++){
  document.getElementById('cartjs').innerHTML += cart[i].size;
  if(cart[i].toppings == undefined){
    document.getElementById('cartjs').innerHTML += cart[i].pizza;
  }else{
      document.getElementById('cartjs').innerHTML += cart[i].toppings;
  }
  document.getElementById('cartjs').innerHTML += cart[i].price;
  document.getElementById('cartjs').innerHTML += "<br>";
}
});
document.getElementById('add3').addEventListener("click", function(event){
if(sm3.checked == true){
    addToCart(smml);
}if(me3.checked == true){
    addToCart(meml);
}if(la3.checked == true){
    addToCart(laml);
}if(xl3.checked == true){
    addToCart(xlml);
}
document.getElementById('cartjs').innerHTML = "";
//for loop that displays running order on order page
for(var i = 0; i < cart.length; i++){
  document.getElementById('cartjs').innerHTML += cart[i].size;
  if(cart[i].toppings == undefined){
    document.getElementById('cartjs').innerHTML += cart[i].pizza;
  }else{
      document.getElementById('cartjs').innerHTML += cart[i].toppings;
  }
  document.getElementById('cartjs').innerHTML += cart[i].price;
  document.getElementById('cartjs').innerHTML += "<br>";
}
});
document.getElementById('add4').addEventListener("click", function(event){
if(sm4.checked == true){
    addToCart(smbq);
}if(me4.checked == true){
    addToCart(mebq);
}if(la4.checked == true){
    addToCart(labq);
}if(xl4.checked == true){
    addToCart(xlbq);
}
document.getElementById('cartjs').innerHTML = "";
//for loop that displays running order on order page
for(var i = 0; i < cart.length; i++){
  document.getElementById('cartjs').innerHTML += cart[i].size;
  if(cart[i].toppings == undefined){
    document.getElementById('cartjs').innerHTML += cart[i].pizza;
  }else{
      document.getElementById('cartjs').innerHTML += cart[i].toppings;
  }
  document.getElementById('cartjs').innerHTML += cart[i].price;
  document.getElementById('cartjs').innerHTML += "<br>";
}
});
//declare variables for build your own radio buttons
var sm5 = document.getElementById('sm1');
var me5 = document.getElementById('me1');
var la5 = document.getElementById('la1');
var xl5 = document.getElementById('xl1');
//declare custom pizza variables
var size = "";
var toppings = "";
var price = 0;
//create custom built pizza object
function buildPizza(size, toppings, price){
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}
//declare toppings as variables
var t1 = document.getElementById('pep');
var t2 = document.getElementById('sos');
var t3 = document.getElementById('ham');
var t4 = document.getElementById('bac');
var t5 = document.getElementById('chk');
var t6 = document.getElementById('stk');
var t7 = document.getElementById('grp');
var t8 = document.getElementById('oni');
var t9 = document.getElementById('msh');
var t10 = document.getElementById('bnp');
var t11 = document.getElementById('tom');
var t12 = document.getElementById('pin');
//declare array of toppings
var topArray = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12];
//listener to add custom built pizza to cart
var toppings1 = "";
var custompi = "";
document.getElementById('add5').addEventListener("click", function(event){
toppings1 = "";
price = 0;
document.getElementById('cartjs').innerHTML = "";
//if statements to set price depending on size
if(sm5.checked == true){
  size = "Small";
  price += 6.99;
}
if(me5.checked == true){
  size = "Medium";
  price += 8.99;
}
if(la5.checked == true){
  size = "Large";
  price += 10.99;
}
if(xl5.checked == true){
  size = "XL";
  price += 12.99;
}
//for loop that computes the toppings
for(var i = 0; i < 12; i++){
  if(topArray[i].checked){
  toppings1 += toppings.concat(topArray[i].dataset.name);
  price += 1.5;
  }
}
//calls function to add pizza object to cart
var custompi = new buildPizza(size, toppings1, price);
addToCart(custompi);
//for loop that displays running order on order page
for(var i = 0; i < cart.length; i++){
  document.getElementById('cartjs').innerHTML += cart[i].size;
  if(cart[i].toppings == undefined){
    document.getElementById('cartjs').innerHTML += cart[i].pizza;
  }else{
      document.getElementById('cartjs').innerHTML += cart[i].toppings;
  }
  document.getElementById('cartjs').innerHTML += cart[i].price;
  document.getElementById('cartjs').innerHTML += "<br>";
}
});
