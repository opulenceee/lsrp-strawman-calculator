let totalPrice = 0;

function addGun() {
  const gunType = document.getElementById("gunType").value;
  const gunPrices = {
    Deagle: 7500,
    Colt: 5500,
    Shotgun: 7500,
    Mac10: 10000,
    SDPistol: 8500,
    Tec9: 9000,
    Rifle: 13000,
    MP5: 14000,
    M4: 18000,
    AK47: 15500,
    Knuckles: 400,
    Golfclub: 400,
    Nightstick: 400,
    Knife: 600,
    Shovel: 400,
    PoolCue: 400,
    Katana: 800,
    Cane: 600,
  };

  const price = gunPrices[gunType];

  const newRow = document.createElement("tr");

  const gunTypeCell = document.createElement("td");
  gunTypeCell.textContent = gunType;
  newRow.appendChild(gunTypeCell);

  const priceCell = document.createElement("td");
  priceCell.textContent = `$${price}`;
  newRow.appendChild(priceCell);

  const actionCell = document.createElement("td");
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";

  removeButton.onclick = function () {
    totalPrice -= price;
    newRow.remove();
    updateTotalDisplay();
  };

  actionCell.appendChild(removeButton);
  newRow.appendChild(actionCell);

  const gunList = document.getElementById("gunList");
  gunList.appendChild(newRow);

  totalPrice += price;
  updateTotalDisplay();
}

function updateTotalDisplay() {
  const totalDisplay = document.getElementById("totalPrice");
  totalDisplay.textContent = `Total Price: $${totalPrice}`;
}

document.getElementById("calculateTotal").addEventListener("click", addGun);

function clearAll() {
  const gunList = document.getElementById("gunList");
  gunList.innerHTML = "";

  const totalDisplay = document.getElementById("totalPrice");
  totalDisplay.textContent = "Total Price: $0";

  totalPrice = 0;
}

document.getElementById("resetAll").addEventListener("click", clearAll);
