let selectedSeatsCount = 0;
let selectedSeats = [];

function addToCart(seat) {
    const seatClass = "Economy";
    const price = 500;
    const seatButton = document.getElementById(seat + " seat");
    const cart = document.getElementById("cart");

    const index = selectedSeats.indexOf(seat);
    if (index === -1) {
        if (selectedSeatsCount < 4) {
            selectedSeats.push(seat);
            selectedSeatsCount++;
            seatButton.style.backgroundColor = "green";

            const seatInfo = document.createElement("div");
            seatInfo.innerHTML = `
                <div class="flex justify-between font-semibold text-gray-600">
                    <h1>${seat}</h1>
                    <h1>${seatClass}</h1>
                    <h1>${price}</h1>
                </div>`;
            cart.appendChild(seatInfo);
        } else {
            alert("You can only select up to 4 seats.");
        }
    } else {
        selectedSeats.splice(index, 1);
        selectedSeatsCount--;
        seatButton.style.backgroundColor = "#E5E7EB";

        const cartChildren = cart.children;
        for (let i = 0; i < cartChildren.length; i++) {
            const tempChild = cartChildren[i];
            if (tempChild.innerText.includes(seat)) {
                tempChild.remove();
                break;
            }
        }
    }

    const totalPriceElement = document.getElementById("totalPrice");
    const totalPrice = selectedSeatsCount * price;
    totalPriceElement.innerText = `BDT ${totalPrice}`;

    const leftNumbersOfSeats = document.getElementById("leftNumbersOfSeat");
    const leftSeat = 40 - selectedSeatsCount;
    leftNumbersOfSeats.innerText = `${leftSeat} Seats Left`;

    const totalSeatElement = document.getElementById("totalSeat");
    totalSeatElement.innerText = `${selectedSeatsCount}`;
}

function cuponHandler() {
    const cuponElement = document.getElementById("cupon");
    const cuponValue = cuponElement.value;
    const Button = document.getElementById("Button");
    
    const grandTotalElement = document.getElementById("grandTotal");

    if( cuponValue === "NEW15"){
        Button.removeAttribute("disabled");
        const grandTotal = selectedSeatsCount * 500 -(selectedSeatsCount * 500 * 0.15).toFixed(2);
        grandTotalElement.innerText = `BDT ${grandTotal}`;
        const cuponContainer = document.getElementById("cuponContainer");
        cuponContainer.classList.add("hidden");
        const discountContainer = document.getElementById("discountContainer");
        discountContainer.style.display = "flex";
        const discount = document.getElementById("discount");
        discount.innerText = `BDT ${selectedSeatsCount * 500 * 0.15}`;
    }else if (cuponValue === "Couple 20") {
        Button.removeAttribute("disabled");
        const grandTotal = selectedSeatsCount * 500 - (selectedSeatsCount * 500 * 0.20).toFixed(2);
        grandTotalElement.innerText = `BDT ${grandTotal}`;
        const cuponContainer = document.getElementById("cuponContainer");
        cuponContainer.classList.add("hidden");
        const discountContainer = document.getElementById("discountContainer");
        discountContainer.style.display = "flex";
        const discount = document.getElementById("discount");
        discount.innerText = `BDT ${selectedSeatsCount * 500 * 0.20}`;
    }else{
        // Button.setAttribute("disabled");
        alert("Invalid cupon code");
    }

}
function testHandler() {
  const numberElement = document.getElementById("number");
  const number = parseFloat(numberElement.value);

  const finalSubmitButton = document.getElementById("finalSubmit");
  const modal = document.getElementById("modal");
  const main = document.getElementById("main");
  if (!isNaN(number) && number > 0 && selectedSeatsCount > 0) {
    // finalSubmitButton.disabled = false;
    finalSubmitButton.removeAttribute("disabled");
    modal.style.display = "block";
    main.style.display = "none";
    console.log(number);
  } else {
    // finalSubmitButton.disabled = true;
    finalSubmitButton.setAttribute("disabled");
    console.log("Invalid number");
  }
}