"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var store = [
    { name: "Bread", price: 1500, stock: 12 },
    { name: "Eggs", price: 300, stock: 24 },
    { name: "Coffee", price: 250, stock: 10 },
    { name: "Fanta", price: 500, stock: 24 },
];
console.log("Available Items in the store");
for (var i = 0; i < store.length; i++) {
    var item = store[i];
    console.log(item.name + " - ₦" + item.price + " (Stock: " + item.stock + ")");
}
var buyerChoice = readlineSync.question("What do you want to buy? ");
console.log("You chose: " + buyerChoice);
var selectedItem = store.find(function (item) { return item.name.toLowerCase() === buyerChoice.toLowerCase(); });
if (!selectedItem) {
    console.log(" Item not available!");
}
else {
    var quantityChoice = Number(readlineSync.question("How many do you want? "));
    if (quantityChoice > selectedItem.stock) {
        console.log(" Not enough stock available!");
    }
    else {
        var totalCost = selectedItem.price * quantityChoice;
        console.log("The total cost is " + totalCost);
        var buyerAmount = Number(readlineSync.question("Enter your payment amount: "));
        if (buyerAmount < totalCost) {
            console.log("Insufficient funds!");
        }
        else {
            var change = buyerAmount - totalCost;
            console.log("Payment accepted. Your change is " + change);
            console.log("Purchase successful");
            selectedItem.stock = selectedItem.stock - quantityChoice;
            console.log("Remaining stock of " + selectedItem.name + ": " + selectedItem.stock);
        }
    }
}
