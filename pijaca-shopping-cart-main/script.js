let allTotal = 0;
function addToCart(element) {
  let mainEl = element.closest(".single-item");
  let name = mainEl.querySelector("h3").innerText;
  let price = mainEl.querySelector(".price").innerText;
  price = price.substring(1);
  let quantity = mainEl.querySelector("input").value;

  let cartItem = document.querySelector(".cart-items");
  if (parseInt(quantity) > 0) {
    let total = parseInt(price) * parseInt(quantity);
    allTotal += total;

    cartItem.innerHTML += `<div class="cart-single-item">
                            <h3>${name}</h3>
                            <p>${quantity} x $${price} = $<span>${total}</span></p>
                            <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
                          </div>`;

    element.innerText = "Dodato";
    element.setAttribute("disabled", "true");

    document.querySelector(".total").innerText = `Total: $${allTotal}`;
  } else {
    alert("Odaberi količinu");
  }
}
function removeFromCart(element) {
  let mainEl = element.closest(".cart-single-item");
  let name = mainEl.querySelector("h3").innerText;
  let total = mainEl.querySelector("p span").innerText;
  let secEl = document.querySelectorAll(".single-item");

  total = parseInt(total);
  allTotal -= total;

  document.querySelector(".total").innerText = `Total: $${allTotal}`;

  mainEl.remove();

  secEl.forEach(function (element) {
    let itemName = element.querySelector(".si-content h3").innerText;

    if (itemName === name) {
      element.querySelector(".actions input").value = 0;
      element.querySelector(".actions button").innerText = "Dodaj";
      element.querySelector(".actions button").removeAttribute("disabled");
    }
  });

  if (document.querySelector(".total").innerText === "Total: $0") {
    document.querySelector(".total").innerText = "";
  }
}
