"use strict";
// calculate discount
function discount(price1, price2) {
}
let actualprice = 2000;
let multi1 = actualprice * 20 / 100;
let multi2 = actualprice * 30 / 100;
console.log("Twenty perscent discount:", multi1);
console.log("Thirty percent discount:", multi2);
let price1 = actualprice - multi1;
let price2 = actualprice - multi2;
console.log("Discounted price of :", price1);
console.log("Discounted price of :", price2);
discount(price1, price2);
