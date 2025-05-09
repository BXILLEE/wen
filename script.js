function addToCart(productName) {
  alert(productName + " added to cart!");
}

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const icon = document.getElementById("themeToggle");
  icon.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
