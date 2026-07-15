const user = localStorage.getItem("user");

if(user == null){
    alert("Please login first.");
    window.location.href = "login.html";
}

let plusbtn = document.getElementsByClassName("plusbtn");
let minusbtn = document.getElementsByClassName("minusbtn");
let quantity = document.getElementsByClassName("quantity");
let name = document.getElementsByClassName("name");
let price = document.getElementsByClassName("price");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

for (let i = 0; i < plusbtn.length; i++) {

    let count = 0;

    plusbtn[i].addEventListener("click", function () {

        count++;
        quantity[i].textContent = count;

        cart[i] = {
            name: name[i].textContent,
            price: Number(price[i].textContent.replace("₹", "")),
            quantity: count
        };

        localStorage.setItem("cart", JSON.stringify(cart));
    });

    minusbtn[i].addEventListener("click", function () {

        if (count > 0) {
            count--;
        }

        quantity[i].textContent = count;

        cart[i] = {
            name: name[i].textContent,
            price: Number(price[i].textContent.replace("₹", "")),
            quantity: count
        };

        localStorage.setItem("cart", JSON.stringify(cart));
    });

}
document.getElementById("logout").addEventListener("click", function (e) {

    e.preventDefault();

    localStorage.removeItem("user");

    window.location.href = "index.html";

});