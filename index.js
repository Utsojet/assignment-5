let selectedSeatsCount = 0;
let selectedSeats = [];

function addToCart(seat) {
    const seatClass = "Economy";
    const price = 500;
    const seatButton = document.getElementById(seat + "-seat");
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

    const leftNumbersOfSeats = document.getElementById("leftNumbersOfSeats");
    const leftSeat = 40 - selectedSeatsCount;
    leftNumbersOfSeats.innerText = `${leftSeat} Seats Left`;

    const totalSeatElement = document.getElementById("totalSeat");
    totalSeatElement.innerText = `${selectedSeatsCount}`;
}

function cuponHandler() {
    const cuponElement = document.getElementById("cupon");
    const cuponValue = cuponElement.value.trim();
    const grandTotalElement = document.getElementById("grandTotal");
    const totalPriceElement = document.getElementById("totalPrice");

    let totalPrice = parseInt(totalPriceElement.innerText.replace("BDT ", ""));

    if (cuponValue === "NEW15") {
        
    } else {
        grandTotalElement.innerText = `BDT ${totalPrice}`;
    }
}
