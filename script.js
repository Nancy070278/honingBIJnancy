let amount = 1;
const pricePerJar = 7;

function update() {
    document.getElementById("amount").innerText = amount;

    const total = amount * pricePerJar;
    const totalText = "€" + total.toFixed(2).replace(".", ",");

    document.getElementById("price").innerText = totalText;

    document.querySelector(".paybutton").innerText =
        "💳 Betaal " + totalText;
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
