let currentLang = "en";

const translations = {
  en: {
    Buckles: "Buckles",
    Items: "Items",
    Keychains: "Keychains",
     Work: "Work",
    hindi: "हिंदी"
  },
  hi: {
    Buckles: "बकल्स",
    Items: "आइटम्स",
    Keychains: "कीचेन",
    Work: "वर्क",
    hindi: "English"
  }
};

// ✅ YOUR PRODUCTS DATA
const productsData = {
  Buckles: [
    { img: "buckels/bk1.jpg", name: "Buckle 1" },
  { img: "buckels/bk2.jpg", name: "Buckle 2" },
  { img: "buckels/bk3.jpg", name: "Buckle 3" },
  { img: "buckels/bk4.jpg", name: "Buckle 4" },
  { img: "buckels/bk5.jpg", name: "Buckle 5" },
  { img: "buckels/bk6.jpg", name: "Buckle 6" },
  { img: "buckels/bk7.jpg", name: "Buckle 7" },
  { img: "buckels/bk8.jpg", name: "Buckle 8" },
  { img: "buckels/bk9.jpg", name: "Buckle 9" },
  { img: "buckels/bk10.jpg", name: "Buckle 10" },
  { img: "buckels/bk11.jpg", name: "Buckle 11" },
  { img: "buckels/bk12.jpg", name: "Buckle 12" },
  { img: "buckels/bk13.jpg", name: "Buckle 13" },
  { img: "buckels/bk14.jpg", name: "Buckle 14" },
  { img: "buckels/bk15.jpg", name: "Buckle 15" },
  { img: "buckels/bk16.jpg", name: "Buckle 16" },
  { img: "buckels/bk17.jpg", name: "Buckle 17" },
  { img: "buckels/bk18.jpg", name: "Buckle 18" },
  { img: "buckels/bk19.jpg", name: "Buckle 19" }
  ],
  Items: [
  { img: "idpics/id1.jpg", name: "ID Card 1" },
  { img: "idpics/id2.jpg", name: "ID Card 2" },
  { img: "idpics/id3.jpg", name: "ID Card 3" },
  { img: "idpics/id4.jpg", name: "ID Card 4" },
  { img: "idpics/id5.jpg", name: "ID Card 5" },
  { img: "idpics/id6.jpg", name: "ID Card 6" },
  { img: "idpics/id7.jpg", name: "ID Card 7" },
  { img: "idpics/id8.jpg", name: "ID Card 8" },
  { img: "idpics/id9.jpg", name: "ID Card 9" },
  { img: "idpics/id10.jpg", name: "ID Card 10" },
  { img: "idpics/id11.jpg", name: "ID Card 11" },
  { img: "idpics/id12.jpg", name: "ID Card 12" },
  { img: "idpics/id13.jpg", name: "ID Card 13" },
  { img: "idpics/id14.jpg", name: "ID Card 14" },
  { img: "idpics/id15.jpg", name: "ID Card 15" },
  { img: "idpics/id16.jpg", name: "ID Card 16" },
  { img: "idpics/id17.jpg", name: "ID Card 17" },
  { img: "idpics/id18.jpg", name: "ID Card 18" },
  { img: "idpics/id19.jpg", name: "ID Card 19" },
  { img: "idpics/id20.jpg", name: "ID Card 20" },
  { img: "idpics/id21.jpg", name: "ID Card 21" },
  { img: "idpics/id22.jpg", name: "ID Card 22" },
  { img: "idpics/id23.jpg", name: "ID Card 23" },
  { img: "idpics/id24.jpg", name: "ID Card 24" },
  { img: "idpics/id25.jpg", name: "ID Card 25" },
  { img: "idpics/id26.jpg", name: "ID Card 26" },
  { img: "idpics/id27.jpg", name: "ID Card 27" },
  { img: "idpics/id28.jpg", name: "ID Card 28" },
  { img: "idpics/id29.jpg", name: "ID Card 29" },
  { img: "idpics/id30.jpg", name: "ID Card 30" },
  { img: "idpics/id31.jpg", name: "ID Card 31" },
  { img: "idpics/id32.jpg", name: "ID Card 32" },
  { img: "idpics/id33.jpg", name: "ID Card 33" },
  { img: "idpics/id34.jpg", name: "ID Card 34" }
]
,
  Keychains: [
    { img: "keychain/ky1.jpg", name: "Keychain 1" },
  { img: "keychain/ky2.jpg", name: "Keychain 2" },
  { img: "keychain/ky3.jpg", name: "Keychain 3" },
  { img: "keychain/ky4.jpg", name: "Keychain 4" }
  ],

  
  Work: [
  { img: "work/wk1.jpg", name: "Work Sample 1" },
  { img: "work/wk2.jpg", name: "Work Sample 2" },
  { img: "work/wk3.jpg", name: "Work Sample 3" },
  { img: "work/wk4.jpg", name: "Work Sample 4" },
  { img: "work/wk5.jpg", name: "Work Sample 5" },
  { img: "work/wk6.jpg", name: "Work Sample 6" },
  { img: "work/wk7.jpg", name: "Work Sample 7" },
  { img: "work/wk8.jpg", name: "Work Sample 8" },
  { img: "work/wk9.jpg", name: "Work Sample 9" },
  { img: "work/wk10.jpg", name: "Work Sample 10" },
  { img: "work/wk11.jpg", name: "Work Sample 11" },
  { img: "work/wk12.jpg", name: "Work Sample 12" },
  { img: "work/wk13.jpg", name: "Work Sample 13" },
  { img: "work/wk14.jpg", name: "Work Sample 14" },
  { img: "work/wk15.jpg", name: "Work Sample 15" },
  { img: "work/wk16.jpg", name: "Work Sample 16" },
  { img: "work/wk17.jpg", name: "Work Sample 17" },
  { img: "work/wk18.jpg", name: "Work Sample 18" },
  { img: "work/wk19.jpg", name: "Work Sample 19" },
  { img: "work/wk20.jpg", name: "Work Sample 20" },
  { img: "work/wk21.jpg", name: "Work Sample 21" },
  { img: "work/wk22.jpg", name: "Work Sample 22" },
  { img: "work/wk23.jpg", name: "Work Sample 23" },
  { img: "work/wk24.jpg", name: "Work Sample 24" },
  { img: "work/wk25.jpg", name: "Work Sample 25" },
  { img: "work/wk26.jpg", name: "Work Sample 26" }
],

  
};

// ✅ LANGUAGE TOGGLE
document.getElementById("toggle-lang").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "hi" : "en";
  updateLanguage();
});

// ✅ CATEGORY CLICK HANDLER
document.querySelectorAll(".category").forEach(btn => {
  btn.addEventListener("click", () => {
    loadProducts(btn.dataset.category);
  });
});

// ✅ LANGUAGE UPDATE FUNCTION
function updateLanguage() {
  document.querySelectorAll(".category").forEach(btn => {
    const cat = btn.dataset.category;
    btn.querySelector(".cat-text").textContent = translations[currentLang][cat];
  });
  document.getElementById("lang-label").textContent = translations[currentLang].hindi;
}

// ✅ LOAD PRODUCTS FROM HARD DATA
function loadProducts(category) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  const items = productsData[category] || [];

  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${translateText(product.name)}</h3>
    `;
    container.appendChild(card);
  });

  attachImageClick(); // <-- attach image click after rendering
}


// Optional: Add your own Hindi translations here
function translateText(text) {
  if (currentLang === "en") return text;
  return text; // Optional: Add manual Hindi text if needed
}

// ✅ INITIAL LANGUAGE SET
updateLanguage();

// ✅ ENLARGE IMAGE MODAL FUNCTIONALITY
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.querySelector(".close-modal");

// Attach modal image listener after loading products
function attachImageClick() {
  document.querySelectorAll(".product-card img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


// Call this function at the end of loadProducts()

