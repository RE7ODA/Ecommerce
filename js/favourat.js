// Search popup functionality (important to be outside)
const searchToggle = document.querySelector(".search-toggle");
const searchPopup = document.getElementById("searchPopup");
const searchClose = document.getElementById("searchClose");

searchToggle?.addEventListener("click", () => {
  searchPopup.classList.toggle("active");
});

searchClose?.addEventListener("click", () => {
  searchPopup.classList.remove("active");
});

// Data for Sun Glasses

function displayFavitems(){
    const favoritePage = document.getElementById('favoritePage');
    const fav = JSON.parse(localStorage.getItem("favorites")) || [] ;

    favoritePage.innerHTML = '';

    if (fav.length === 0) {
        favoritePage.innerHTML = `
        <div class="empty-fav">
        <h1>Your Favorite List Is Empty</h1>
        <img src="https://pngimg.com/d/broken_heart_PNG15.png" class="empty-img">
        </div>
        `
        favoritePage.style.textAlign = "center";
        cardPage.style.padding = '25px';
        cardPage.style.color = 'black';
        return;
    }

    fav.forEach(item => {
        const favitemDiv = document.createElement("div");
        favitemDiv.classList.add("fav-item");


    favitemDiv.innerHTML = `
    <i class="fa-solid fa-heart"></i>
    <img src="${item.img}">
    <h2>${item.name}</h2>
    <p>${item.description}</p>
    <h3>${item.price}</h3>
    <div class="buttons">
    <button class="add" onclick="addToCart(${item.id})">Add To Cart<i class="fa-solid fa-cart-shopping"></i></button>
     <button class="remove" onclick="removeFromfav(${item.id})"><i class="fa-regular fa-trash-can"></i></button> 
    </div>
    `;

    favoritePage.appendChild(favitemDiv);
});
}
displayFavitems()

// remove

function removeFromfav(productId) {
    let fav = JSON.parse(localStorage.getItem("favorites")) || [];
    fav = fav.filter(item => item.id !== productId);
    localStorage.setItem("favorites", JSON.stringify(fav));
    displayFavitems();
}

// add to cart

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let fav = JSON.parse(localStorage.getItem("favorites")) || [];

    const item = fav.find(i => i.id === productId);

    if (item) {
        const existingCartItem = cart.find(i => i.id === productId);

        if (existingCartItem) {
            existingCartItem.quantity += 1;
        } else {
            cart.push({ ...item, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        Swal.fire({
            title: 'Item added to cart!',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        displayCartItems();
    }
}

