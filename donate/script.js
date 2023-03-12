const switchToggle = document.querySelector(".switch");
const priceToggle = document.querySelector(".price");

for (const child of switchToggle.children) {
  child.addEventListener("click", (e) => {
    Array.from(e.target.parentElement.children).forEach((el) =>
      el.classList.remove("active")
    );
    if (!e.target.classList.length) {
      e.target.classList.add("active");
    }
  });
}

for (const child of priceToggle.children) {
  child.addEventListener("click", (e) => {
    Array.from(e.target.parentElement.children).forEach((el) =>
      el.classList.remove("price-active")
    );
    if (!e.target.classList.length) {
      e.target.classList.add("price-active");
    }
  });
}
