// Smooth scroll for nav links

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = link.getAttribute('href');
    if (target.startsWith("#")) {
      e.preventDefault();
      const targetId = target.substring(1);
      const section = document.getElementById(targetId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Button hover animation
document.querySelectorAll('.cta').forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.05)';
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const messages = [
    "Free Shipping on all orders",
    "Deliveries may be delayed due to holidays"
  ];
  let index = 0;

  setInterval(() => {
    const topBar = document.querySelector('.top-bar');
    index = (index + 1) % messages.length;
    topBar.textContent = messages[index];
  }, 2000);
});



// Toggle search bar visibility


// ===== Image Slider in Brand Highlight =====
const highlightImg = document.getElementById("highlight-img");
const caption = document.getElementById("highlight-caption").querySelector("h3");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const highlightSlides = [
  { image: "images/grace.jpg", title: "Grace in Every Glance" },
  { image: "images/ALT2.avif", title: "Timeless Style Collection" }
];

let currentSlide = 0;

function showSlide(index) {
  highlightImg.style.opacity = 0;
  setTimeout(() => {
    highlightImg.src = highlightSlides[index].image;
    caption.textContent = highlightSlides[index].title;
    highlightImg.style.opacity = 1;
  }, 300);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % highlightSlides.length;
  showSlide(currentSlide);
}

function prevSlideFunc() {
  currentSlide = (currentSlide - 1 + highlightSlides.length) % highlightSlides.length;
  showSlide(currentSlide);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlideFunc);

setInterval(nextSlide, 5000);
showSlide(currentSlide);

// ===== Swap image in Spring's Newest Releases header section =====
//   const springHeaderImg = document.getElementById("spring-header-img");
// const springHeaderImages = ["images/banner1.jpg", "images/banner2.jpg"];
// let springImgIndex = 0;

// setInterval(() => {
//   springHeaderImg.style.opacity = 0;
//   setTimeout(() => {
//     springImgIndex = (springImgIndex + 1) % springHeaderImages.length;
//     springHeaderImg.src = springHeaderImages[springImgIndex];
//     springHeaderImg.style.opacity = 1;
//   }, 300);
// }, 4000);

// Scroll-triggered animations
window.addEventListener('scroll', () => {
  document.querySelectorAll('.product-card, .banner, .brand-highlight, .brand-card').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// Brand Cards
const brandCards = [
  { name: "Ray-Ban", image: "images/Ray-Ban.jpeg", description: "Classic American style sunglasses with timeless designs." },
  { name: "Prada", image: "images/Elegant Sneakers for Men _ PRADA.jpeg", description: "Luxury Italian eyewear with cutting-edge fashion trends." },
  { name: "Gucci", image: "images/(x) Gucci logo custom designed {Patricia} ❤ liked on Polyvore featuring text, words, gucci, backgrounds and logo.jpeg", description: "Bold designs and iconic branding for fashion lovers." },
  { name: "Dior", image: "images/Dior Vector Logo.jpeg", description: "Elegance and sophistication in every pair." }
];

const brandCardsContainer = document.getElementById("brand-cards");
brandCards.forEach(brand => {
  const card = document.createElement("div");
  card.className = "brand-card";
  card.innerHTML = `
    <img src="${brand.image}" alt="${brand.name}" />
    <h3>${brand.name}</h3>
    <p>${brand.description}</p>
  `;
  card.classList.add("visible");
  brandCardsContainer.appendChild(card);
});

// Trending Products
const trendingProducts = [
  { name: "Ray-Ban", price: "EGP 2,199", image: "images/RayBan.webp" },
  { name: "Prada", price: "EGP 3,499", image: "images/Prada.webp" },
  { name: "Versace", price: "EGP 2,899", image: "images/Varasca.webp" },
  { name: "Burberry", price: "EGP 3,099", image: "images/Brebbery.webp" }
];

const trendingContainer = document.getElementById("trending-products");

trendingProducts.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>${product.price}</p>
  
  `;
  trendingContainer.appendChild(card);
});

// Spring's Newest Releases Products
const springProducts = [
  {
    name: "Chanel Classic",
    price: "EGP 3,899",
    images: ["images/1.webp", "images/1.2.webp"],
    colors: ["#000", "#fff", "#be9c79"]
  },
  {
    name: "Tom Ford Bold",
    price: "EGP 4,250",
    images: ["images/2.webp", "images/2,2.webp"],
    colors: ["#2b2b2b", "#8b0000"]
  },
  {
    name: "Gucci Retro",
    price: "EGP 3,599",
    images: ["images/3.webp", "images/3.3.webp"],
    colors: ["#006400", "#d4af37"]
  },
  {
    name: "Dior Cat-Eye",
    price: "EGP 4,100",
    images: ["images/4.webp", "images/4.4.webp"],
    colors: ["#1c1c1c", "#f5f5f5"]
  }
];

const springContainer = document.getElementById("new-releases");

springProducts.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";

  const img = document.createElement("img");
  img.src = product.images[0];
  img.alt = product.name;

  let imgIndex = 0;
  card.addEventListener("mouseenter", () => {
    if (product.images.length > 1) {
      imgIndex = (imgIndex + 1) % product.images.length;
      img.src = product.images[imgIndex];
    }
  });

  card.addEventListener("mouseleave", () => {
    img.src = product.images[0];
    imgIndex = 0;
  });

  const colorsHTML = product.colors.map(color =>
    `<span class="color-dot" style="background-color: ${color}"></span>`
  ).join("");

  card.innerHTML += `
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <div class="color-options">${colorsHTML}</div>
  
  `;

  card.insertBefore(img, card.firstChild);
  springContainer.appendChild(card);
});

// Lenses Section
const lenses = [
  { name: "Acuvue Moist", price: "EGP 1,199", image: "images/A.webp", colors: ["#dbe2ef", "#9ba8ab"] },
  { name: "FreshLook Color", price: "EGP 1,299", image: "images/B.webp", colors: ["#6fa8dc", "#f4cccc"] },
  { name: "Bella Natural", price: "EGP 1,099", image: "images/C.webp", colors: ["#b9a0a0", "#dedede"] },
  { name: "Dahab Platinum", price: "EGP 1,499", image: "images/D.webp", colors: ["#999", "#4d4d4d"] }
];

const lensesContainer = document.getElementById("optic-odyssey");

lenses.forEach(lens => {
  const card = document.createElement("div");
  card.className = "product-card";

  const colorsHTML = lens.colors.map(color =>
    `<span class="color-dot" style="background-color: ${color}"></span>`
  ).join("");

  card.innerHTML = `
    <img src="${lens.image}" alt="${lens.name}" />
    <h3>${lens.name}</h3>
    <p>${lens.price}</p>
    <div class="color-options">${colorsHTML}</div>
  `;
  lensesContainer.appendChild(card);
});
