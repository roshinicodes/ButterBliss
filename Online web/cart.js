let cart = JSON.parse(localStorage.getItem("cart")) || [];

let box = document.getElementById("cart");

let total = 0;

cart.forEach(function(item){

    if(item.quantity > 0){

        let div = document.createElement("div");

        let itemTotal = item.price * item.quantity;

        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price : ₹${item.price}</p>
            <p>Quantity : ${item.quantity}</p>
            <p>Total : ₹${itemTotal}</p>
            <hr>
        `;

        box.appendChild(div);

        total += itemTotal;
    }

});

document.getElementById("total").textContent =
"Grand Total : ₹" + total;