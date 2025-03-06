console.log("Task 1");

let num: number = 10;
if (num % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}


let productPrice: number[] = [20, 23.5, 40, 55.3, 4, 5.4];
for (let i = 0; i < productPrice.length; i++) {
    if (productPrice[i] > 10)
        console.log(productPrice[i]);
}


let numbers: number[] = [20, 23.5, 40, 55.3, 4, 5.4];
let count: number = 0;
for (let i = 0; i < numbers.length; i++) {
    count += numbers[i];
}
console.log(Math.floor(count));