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

const Sun_Glasses = [
    {
        id: 1,
        img: './Imges/Sun Glasses/191816003_0.webp',
        imghover: './Imges/Sun Glasses/191816003_1.webp',
        name: "Sun Glasses white",
        price: "19.99$",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
    },
    {
        id: 2,
        img: './Imges/Sun Glasses/198412002_0.webp',
        imghover: './Imges/Sun Glasses/198412002_2.webp',
        name: "Sun Glasses Tiger",
        price: "19.99$",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
    },
    {
        id: 3,
        img: './Imges/Sun Glasses/199096001_0.webp',
        imghover: './Imges/Sun Glasses/199096001_1.webp',
        name: "Sun Glasses Black",
        price: "19.99$",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
    },
    {
        id: 4,
        img: './Imges/Sun Glasses/199096002_0.webp',
        imghover: './Imges/Sun Glasses/199096002_1.webp',
        name: "Sun Glasses Brown",
        price: "19.99$",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
    },
    {
        id: 5,
        img: './Imges/Sun Glasses/199097001_0.webp',
        imghover: './Imges/Sun Glasses/199097001_1.webp',
        name: "Sun Glasses Burgundy ",
        price: "19.99$",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
    },
    {
        id: 6,
        img: './Imges/Sun Glasses/199101002_0.webp',
        imghover: './Imges/Sun Glasses/199101002_1.webp',
        name: "Sun Glasses Yellow",
        price: "19.99$",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
    },
    {
        id: 7,
        img: './Imges/Sun Glasses/149415003_0.webp',
        imghover: './Imges/Sun Glasses/149415003_1.webp',
        name: "Sun Glasses Bink",
        price: "19.99$",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
    },
    {
        id: 8,
        img: './Imges/Sun Glasses/185833003_0.webp',
        imghover: './Imges/Sun Glasses/185833003_1.webp',
        name: "Sun Glasses Green",
        price: "19.99$",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
    },
]

// Function to display Sun Glasses products

function sunGlasses(){
    const products = document.getElementById('products');
    Sun_Glasses.forEach((product) => {
        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement("img")
        img.src = product.img
        const imghover = document.createElement("img")
        imghover.classList.add('imghover')
        imghover.src = product.imghover
        const Name = document.createElement("h3")
        Name.textContent = product.name
        const Price = document.createElement("h4")
        Price.textContent = product.price
        const Description = document.createElement("p")
        Description.textContent = product.description
        const AddCart = document.createElement("button")
        AddCart.textContent = "Add to Cart"
        const AddFavorite = document.createElement("i")
        AddFavorite.classList.add('fa-solid', 'fa-heart');
        AddFavorite.addEventListener('click', () => {
            AddFavorite.classList.toggle('active')
        })
        img.addEventListener('mouseenter', () => {
            img.style.display = "none"
            imghover.style.display = "flex"
        })
        imghover.addEventListener('mouseleave', () => {
            img.style.display = "flex"
            imghover.style.display = "none"
        })

        AddCart.addEventListener('click', () => {
            const cartItem = {
                id: product.id,
                img: product.img,
                name: product.name,
                price: product.price,
            };
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            let existingItem = cart.find(item => item.id === product.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cartItem.quantity = 1;
                cart.push(cartItem);
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            Swal.fire({
                title: 'Item added to cart!',
                icon: 'success',
                confirmButtonText: 'OK'
              });
            displayCartItems();
        })
        AddFavorite.addEventListener('click', () => {
            const favoriteItem = {
                id: product.id,
                img: product.img,
                name: product.name,
                description: product.description,
                price: product.price,
            };
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

            let existingItem = favorites.find(item => item.id === product.id);

            if (existingItem) {
                Swal.fire({
                    title: 'Item already in favorites!',
                    icon: 'info',
                    confirmButtonText: 'OK'
                  });
                return;
            } else {
                favorites.push(favoriteItem);
            }
            localStorage.setItem('favorites', JSON.stringify(favorites));
            Swal.fire({
                title: 'Item added to favorites!',
                icon: 'success',
                confirmButtonText: 'OK'
              });
        })


        card.appendChild(AddFavorite)
        card.appendChild(img)
        card.appendChild(imghover)
        card.appendChild(Name)
        card.appendChild(Price)
        card.appendChild(Description)
        card.appendChild(AddCart)

        products.appendChild(card)
    })
}
sunGlasses()

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

document.addEventListener("DOMContentLoaded", function () {
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
