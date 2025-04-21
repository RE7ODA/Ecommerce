
// show data in shopping cart

function displayCartItems() {

    const cardPage = document.getElementById('cardPage');
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cardPage.innerHTML = ""

    if (cart.length === 0) {
        cardPage.innerHTML = `
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 50px 20px;
        text-align: center;
        color: #444;
      ">
        <i class="fa-solid fa-cart-shopping" style="font-size: 100px; color: #ccc; margin-bottom: 20px;"></i>
        <h3 style="font-size: 24px; margin-bottom: 10px;">Your cart is Empty</h3>
        <p style="font-size: 16px; color: #888;">
          Looks like you haven't added anything to your cart yet.
        </p>
        <a href="categories.html" style="
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #000;
          color: #fff;
          text-decoration: none;
          border-radius: 8px;
          font-size: 14px;
          transition: background 0.3s ease;
        " onmouseover="this.style.background='#111'" onmouseout="this.style.background='#000'">
          Browse Products></a>
      </a>
      </div>
    `;
        document.getElementById('cartSummary').innerHTML = "";
        return;
    }

    let totalPrice = 0;
    let totalItems = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");

        const numericPrice = parseFloat(item.price.replace('$', '')) || 0;
        totalPrice += numericPrice * item.quantity;
        totalItems += item.quantity;


        itemDiv.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <h2>${item.name}</h2>
        <div class="quantity-control">
            <button onclick="decreaseQuantity(${item.id})">-</button>
            <span>${item.quantity}</span>
            <button onclick="increaseQuantity(${item.id})">+</button>
        </div>
        <h3>${item.price}</h3>
        <button onclick="removeFromCart(${item.id})"><i class="fa-regular fa-trash-can"></i></button> 

    `;

        cardPage.appendChild(itemDiv);
    });
    const summaryDiv = document.createElement("div");
    summaryDiv.classList.add("cart-summary");
    summaryDiv.innerHTML = `
    <h1>Summary</h1>
    <h3>Total Items: <strong>${totalItems}</strong></h3>
    <h2>Total Price: <strong>$${totalPrice.toFixed(2)}</strong></h2>
    <button onclick="checkout()">Checkout</button>
`;
    cardPage.appendChild(summaryDiv);
}

// save data in local storage

function increaseQuantity(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find(i => i.id === productId);

    if (item) {
        item.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCartItems();
    }
}

// decrease item 

function decreaseQuantity(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find(i => i.id === productId);

    if (item && item.quantity > 1) {
        item.quantity -= 1;
    } else {
        cart = cart.filter(i => i.id !== productId);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
}

// checkout Button 

function checkout() {
    localStorage.removeItem("cart");
    Swal.fire({
        title: 'Thank you for your purchase!',
        text: 'Your order has been placed successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
    });
    displayCartItems();
}

// remove item 

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
}

// show and hide Shopping cart 
function startShoppingCart() {
    const cartIcon = document.getElementById('cartIcon');
    const cardPage = document.getElementById('cardPage');
    const cartIconClose = document.getElementById('cartIconClose');

    cartIcon.addEventListener('click', () => {
        cardPage.style.display = 'block';
        cartIconClose.style.display = 'block';
        cartIcon.style.display = 'none';
        displayCartItems()
    });

    cartIconClose.addEventListener('click', () => {
        cardPage.style.display = 'none';
        cartIconClose.style.display = 'none';
        cartIcon.style.display = 'block';
    });

    // show and hide profile page

    const profileIcon = document.getElementById('profileIcon');
    const profilePage = document.getElementById('profilePage');
    const profileIconClose = document.getElementById('profileIconClose');

    profileIcon.addEventListener('click', () => {
        profilePage.style.display = 'flex';
        profileIconClose.style.display = 'block';
        profileIcon.style.display = 'none';
    });

    profileIconClose.addEventListener('click', () => {
        profilePage.style.display = 'none';
        profileIconClose.style.display = 'none';
        profileIcon.style.display = 'block';
    });

}

