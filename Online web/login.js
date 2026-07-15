const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const user = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        address: document.getElementById("address").value
    };

    localStorage.setItem("user", JSON.stringify(user));

    window.location.href = "menu.html";
});