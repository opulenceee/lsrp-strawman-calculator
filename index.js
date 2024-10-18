let totalPrice = 0;
let rowNumber = 0;

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
  rowNumber++;

  const newRow = document.createElement("tr");

  const numberCell = document.createElement("td");
  numberCell.textContent = rowNumber;

  const gunTypeCell = document.createElement("td");
  gunTypeCell.textContent = gunType;

  const priceCell = document.createElement("td");
  priceCell.textContent = `$${price}`;

  const removeCell = document.createElement("td");
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";

  removeButton.onclick = function () {
    totalPrice -= price;
    newRow.remove();
    updateTotalDisplay();
    rowNumber--;
    updateRowNumbers();
  };

  removeCell.appendChild(removeButton);

  // Append all cells to the new row
  newRow.appendChild(numberCell);
  newRow.appendChild(gunTypeCell);
  newRow.appendChild(priceCell);
  newRow.appendChild(removeCell);

  const tableBody = document.querySelector("table tbody");
  if (!tableBody) {
    const newTableBody = document.createElement("tbody");
    document.querySelector("table").appendChild(newTableBody);
  }
  document.querySelector("table tbody").appendChild(newRow);

  totalPrice += price;
  updateTotalDisplay();
}

function updateTotalDisplay() {
  const totalDisplay = document.getElementById("totalPrice");
  totalDisplay.textContent = `Total Price: $${totalPrice}`;
}

function updateRowNumbers() {
  const rows = document.querySelectorAll("table tbody tr");
  rows.forEach((row, index) => {
    row.firstChild.textContent = index + 1;
  });
}

document.getElementById("calculateTotal").addEventListener("click", addGun);

function clearAll() {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "";

  const totalDisplay = document.getElementById("totalPrice");
  totalDisplay.textContent = "";

  totalPrice = 0;
  rowNumber = 0; // Reset row number
}

document.getElementById("resetAll").addEventListener("click", clearAll);
