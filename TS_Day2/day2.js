// console.log("TS Day2");
function store() {
    var product_Name = document.getElementById("productName").value;
    var product_Description = document.getElementById("productDescription").value;
    var product_Price = parseInt(document.getElementById("productPrice").value);
    var product_Quantity = parseInt(document.getElementById("productQuantity").value);
    localStorage.setItem("productName", product_Name);
    localStorage.setItem("productDescription", product_Description);
    localStorage.setItem("productPrice", product_Price.toString());
    localStorage.setItem("productQuantity", product_Quantity.toString());
    display();
}
function display() {
    var product = document.getElementById("productContainer");
    if (!product)
        return;
    product.innerHTML += "\n    <h2>".concat(localStorage.getItem("productName"), "</h2>\n    <p>").concat(localStorage.getItem("productDescription"), "</p>\n    <p>").concat(localStorage.getItem("productPrice"), "</p>\n    <p>").concat(localStorage.getItem("productQuantity"), "</p>");
}
