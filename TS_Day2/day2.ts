// console.log("TS Day2");

// let multiType:(number | string | boolean )[];
// multiType = ["adnan", 2000, true];
// console.log(multiType[0]);

// multiType.forEach(e => {
//     console.log(e);
// });
//--------------------------------------------------------------------------------
//return types
// function isEven(num: number): boolean {
//     return num % 2 == 0;
// }
// const numberChecked = isEven(50);
// console.log(numberChecked);

// function GreetFunction(name: string): void {
//     console.log(`Hello, ${name}`);
// }
// GreetFunction("adnan");

//parameter types
// function introduction(name: string, age: number): string {
//     return `Hello, my name is ${name} and I am ${age} years old.`;
// }
// const intro = introduction("adnan", 24);
// console.log(intro);
//--------------------------------------------------------------------------------
//optional parameters
// function greet(name: string, isMorning?: boolean): string {
//     if (isMorning) {
//         return `Good morning, ${name}!`;
//     } else {
//         return `Hello, ${name}!`;
//     }
// }
// console.log(greet("adnan", true));

//default parameters
// function greet(name: string, timeOfDay = 5): string {
//     return `Good ${timeOfDay}, ${name}!`;
// }
// console.log(greet("adnan"));
// console.log(greet("adnan", 10));
//--------------------------------------------------------------------------------
//rest parameter
// function sumAll(...numbers: number[]): number {
//     return numbers.reduce((a, b) => a + b);
// }
// console.log("the total is : " + sumAll(1, 2, 3, 4, 5));
//--------------------------------------------------------------------------------

// Define array of objects with 3 items contains the information
// for product which is (name, description and price) and there is a
//  load button in the HTML if I click it it will call
// function to load the three objects inside the HTML page.


// let products = [
//     { name: "product 1", description: "description 1", price: 50 },
//     { name: "product 2", description: "description 2", price: 100 },
//     { name: "product 3", description: "description 3", price: 55.5 }
// ];
// function loadProducts() {
//     const productsContainer = document.getElementById('productsContainer');
//     if (!productsContainer) return; // Add check to ensure element exists

//     productsContainer.innerHTML = ''; // Clear existing content

//     products.forEach(product => {
//         const productElement = document.createElement('div');
//         productElement.innerHTML = `
//             <h2>${product.name}</h2>
//             <p>${product.description}</p>
//             <p>Price: $${product.price.toFixed(2)}</p>
//         `;
//         productsContainer.appendChild(productElement);
//     });
// }
//------------------------------- Task 1 ---------------------------------------

// interface Person {
//     name: string;
//     age: number;
// }
// function verify(Person: Person) {
//     if (Person.age >= 18) {
//         console.log("adult");
//     }
//     else {
//         console.log("minor");
//     }
// }

// const p1: Person = { name: "adnan", age: 24 };
// verify(p1);

//------------------------------- Task 2 ---------------------------------------

// interface Teacher {
//     name: string;
//     subjects: string[];
// }
// function subject(teacher: Teacher) {
//     console.log(`${teacher.name} teaches these subjects:`);

//     teacher.subjects.forEach(e => {
//         console.log(e);
//     });
// }
// const t1: Teacher = { name: "adnan", subjects: ["math", "sience"] };
// subject(t1);

//------------------------------- Task 3 ---------------------------------------

// interface Product {
//     name: string,
//     price: number,
//     quantity: number
// }
// const products: Product[] = [
//     {
//         name: "product 1",
//         price: 20,
//         quantity: 3
//     },
//     {
//         name: "product 2",
//         price: 20,
//         quantity: 4
//     },
//     {
//         name: "product 3",
//         price: 20,
//         quantity: 5
//     },
//     {
//         name: "product 4",
//         price: 20,
//         quantity: 6
//     }
// ]

// products.forEach(product => {
//     if (product.quantity > 5) {
//         product.price = product.price - product.price * 0.15;
//     }
// });

// console.log(products);

//------------------------------- Task 4 ---------------------------------------

interface product {
    name: string,
    description: string,
    price: number,
    quantity: number
}
function store() {
    let product_Name: string = (document.getElementById("productName") as HTMLInputElement).value;
    let product_Description: string = (document.getElementById("productDescription") as HTMLInputElement).value;
    let product_Price: number = parseInt((document.getElementById("productPrice") as HTMLInputElement).value);
    let product_Quantity: number = parseInt((document.getElementById("productQuantity") as HTMLInputElement).value);

    localStorage.setItem("productName", product_Name);
    localStorage.setItem("productDescription", product_Description);
    localStorage.setItem("productPrice", product_Price.toString());
    localStorage.setItem("productQuantity", product_Quantity.toString());

    display();
}
function display() {
    let product: any = document.getElementById("productContainer");
    if (!product) return;
    else {
        product.innerHTML += `
        <h2>${localStorage.getItem("productName")}</h2>
        <p>${localStorage.getItem("productDescription")}</p>
        <p>${localStorage.getItem("productPrice")}</p>
        <p>${localStorage.getItem("productQuantity")}</p>`;
    }


}

