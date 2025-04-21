
// show fav items

function displayFavitems() {
  const MyFavorites = document.getElementById("my-favorites");
  const myfav = JSON.parse(localStorage.getItem("favorites")) || [];

  MyFavorites.innerHTML = "";
  if (myfav.length === 0) {
    MyFavorites.innerHTML = `
      <div class="empty-fav">
      <h1>Your Favorite List Is Empty</h1>
      <img src="https://pngimg.com/d/broken_heart_PNG15.png" class="empty-img">
      </div>
      `
    MyFavorites.style.textAlign = "center";
    MyFavorites.style.padding = '25px';
    MyFavorites.style.color = 'black';
    MyFavorites.style.display = 'flex';
    MyFavorites.style.justifyContent = 'center';
    return;
  }
  myfav.forEach(item => {
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

    MyFavorites.appendChild(favitemDiv);
  });
}
displayFavitems()

// remove from fav
function removeFromfav(productId) {
  let myfav = JSON.parse(localStorage.getItem("favorites")) || [];
  removefav = myfav.filter(item => item.id !== productId);
  localStorage.setItem("favorites", JSON.stringify(removefav));
  displayFavitems()
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
    displayFavitems()
  }
}

var user = JSON.parse(localStorage.getItem('user')) || [];
document.querySelector("#email").textContent = user.email;
document.querySelector("#phone").textContent = user.phone;
document.querySelector("#name").textContent = user.name;
document.querySelector("#address").textContent = user.address;
// show orders
function displayOrders() {
  const myOrders = document.getElementById("my-orders");
  const myOrdersData = JSON.parse(localStorage.getItem("cart")) || [];

  myOrders.innerHTML = "";

  if (myOrdersData.length === 0) {
    myOrders.innerHTML = `
      <div class="empty-orders">
        <h1>No Orders Yet</h1>
        <img src="https://icons.veryicon.com/png/o/application/map-app/no-order-3.png" class="empty-img">
      </div>
    `;
    myOrders.style.textAlign = "center";
    myOrders.style.padding = '25px';
    myOrders.style.color = 'black';
    myOrders.style.display = 'flex';
    myOrders.style.justifyContent = 'center';
    return;
  }

  myOrdersData.forEach(order => {
    const orderDiv = document.createElement("div");
    orderDiv.classList.add("order-item");

    orderDiv.innerHTML = `
      <table>
        <thead>
        <tr>
          <th>Order ID</th>
          <th>Date</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>${order.id || "N/A"}</td>
          <td>${new Date().toLocaleDateString()}</td>
          <td>$${order.price}</td>
        </tr>
        </tbody>
      </table>
    `;
    myOrders.appendChild(orderDiv);

  });
}

displayOrders();
