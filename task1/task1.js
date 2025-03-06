console.log("Task 1");
var num = 10;
if (num % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
var productPrice = [20, 23.5, 40, 55.3, 4, 5.4];
for (var i = 0; i < productPrice.length; i++) {
    if (productPrice[i] > 10)
        console.log(productPrice[i]);
}
var numbers = [20, 23.5, 40, 55.3, 4, 5.4];
var count = 0;
for (var i = 0; i < numbers.length; i++) {
    count += numbers[i];
}
console.log(Math.floor(count));
