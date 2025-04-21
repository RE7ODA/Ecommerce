function includeHTML() {
    const elements = document.querySelectorAll('[include-html]');

    elements.forEach((el) => {
        const file = el.getAttribute('include-html');
        if (file) {
            fetch(file)
                .then((res) => {
                    if (!res.ok) throw new Error("File not found");
                    return res.text();
                })
                .then((data) => {
                    el.innerHTML = data;
                    el.removeAttribute('include-html');
                    includeHTML();
                    var user = JSON.parse(localStorage.getItem('user'));
                    var accounts = getUsers();
                    console.log(user)
                    if (user == null) {
                        document.querySelector("#profileIcon").style.display = "none";
                    } else {
                        var index = accounts.findIndex(accounts => accounts.email == user.email);
                        if (index != -1) {
                            if (accounts[index].randomCode == user.randomCode) {
                                document.querySelector("#register").style.display = "none"
                            } else {
                                alert("There is a technical error, Please login again.")
                                setTimeout(function () {
                                    return window.location.href = "/Ecommerce/login.html"
                                }, 1000);
                            }
                        }
                    }
                    startShoppingCart()
                    startBody() // Recursively include nested includes
                })
                .catch((err) => {
                    el.innerHTML = "Error loading component.";
                    console.error(err);
                });
        }
    });



}

function startBody() {
    // Initial hidden state
    const searchToggle = document.querySelector(".search-toggle");
    const searchPopup = document.getElementById("searchPopup");
    const searchClose = document.getElementById("searchClose");
    searchToggle.addEventListener("click", () => {
        searchPopup.classList.toggle("active");
    });

    searchClose.addEventListener("click", () => {
        searchPopup.classList.remove("active");
    });

    const topBar = document.querySelector('.top-bar');
    const messages = [
        "Free Shipping on all orders",
        "Deliveries may be delayed due to holidays"
    ];
    let index = 0;

    setInterval(() => {
        index = (index + 1) % messages.length;
        topBar.textContent = messages[index];
    }, 2000);

    window.addEventListener("click", (e) => {
        const searchToggle = document.querySelector(".search-toggle");
        const searchPopup = document.getElementById("searchPopup");
        const searchClose = document.getElementById("searchClose");

        if (
            !searchPopup.contains(e.target) &&
            !searchToggle.contains(e.target)
        ) {
            searchPopup.classList.remove("active");
        }
    });


}
function signOut() {
    localStorage.removeItem("user")
    window.location.href = "index.html"
}
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

document.addEventListener("DOMContentLoaded", includeHTML);

