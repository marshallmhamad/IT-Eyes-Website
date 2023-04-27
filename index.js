const productImage = document.querySelector(".product-image img");

productImage.addEventListener("mouseenter", () => {
  productImage.style.opacity = "0.8";
});

productImage.addEventListener("mouseleave", () => {
  productImage.style.opacity = "1";
});
