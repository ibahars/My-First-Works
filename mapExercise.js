//MAP,SET,STRİNGS, EXERCİSES
const fruits = new Map();
fruits.set("apples", 20);
fruits.set("bananas", 50);
fruits.set("oranges", 30);

console.log(fruits.get("apples"));

let shopping_receipt = "";
fruits.forEach(function (value, key) {
  shopping_receipt += key + "=" + value;
});
console.log(shopping_receipt);
