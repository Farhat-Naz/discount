// calculate discount
function discount(price1:number,price2:number): void{
    
}
let actualprice:number=2000;
let multi1: number=actualprice* 20/100;
let multi2:number=actualprice*30/100;
console.log("Twenty perscent discount:",multi1);
console.log("Thirty percent discount:",multi2);
let price1:number=actualprice-multi1;
let price2:number=actualprice-multi2;
console.log("Discounted price of :" ,price1);
console.log("Discounted price of :" ,price2);
discount(price1,price2);