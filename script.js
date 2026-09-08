let amount = 1;
const pricePerJar = 7;

function update() {
    document.getElementById("amount").innerText = amount;

    let total = amount * pricePerJar;

    document.getElementById("price").innerText =
        "€" + total.toFixed(2).replace(".", ",");

    document.querySelector(".paybutton").innerText =
        "Betaal €" + total.toFixed(2).replace(".", ",");
}

function plus() {
    amount++;
    update();
}

function minus() {
    if (amount > 1) {
        amount--;
        update();
    }
}

update();
