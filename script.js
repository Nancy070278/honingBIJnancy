let amount = 1;
const pricePerJar = 7;
const maxJars = 6;

const paymentLinks = {
    1: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Q6x2tPh8RvOTEBzcDO1_mA",
    2: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=J9oLDlCLQkSyeAqS5MMDoQ",
    3: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=sd_LnXVmQROQt_zN8E5hkg",
    4: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Crc2XZQaR42rME_PDw9Tyw",
    5: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=c2rPMQEPTX2xN3kOjdQOiA",
    6: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=PXo7WHllTGC73kXGdoUndQ"
};

function update() {
    document.getElementById("amount").innerText = amount;

    const total = amount * pricePerJar;
    const totalText = "€" + total.toFixed(2).replace(".", ",");

    document.getElementById("price").innerText = totalText;

    document.querySelector(".paybutton").innerText =
        "💛 Betaal " + totalText;
}

function plus() {
    if (amount < maxJars) {
        amount++;
        update();
    } else {
        alert("Er zijn maximaal 6 potten beschikbaar.");
    }
}

function minus() {
    if (amount > 1) {
        amount--;
        update();
    }
}

document.addEventListener("DOMContentLoaded", function () {

    update();

    document.querySelector(".paybutton").addEventListener("click", function () {

        const link = paymentLinks[amount];

       if (link) {
    alert(link);
} else {
    alert("Betaallink niet beschikbaar.");
}
        }

    });

});
