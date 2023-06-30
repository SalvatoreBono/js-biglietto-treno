const user = prompt("Nome e Cognome");

document.getElementById("name-surname").innerHTML = user

const time = new Date()
document.getElementById("date").innerHTML = get.Month

const ageUser = parseInt(prompt("Quanti anni hai?"));
const kmUser = parseInt(prompt("Quanti chilometri vuoi percorrere?"));

const price = (kmUser * 0.21);
const priceDecimal = price.toFixed(2);

const cuponYoung = (price * 20) / 100;
const youngPriceResult = price - cuponYoung;
const youngPriceDecimal = youngPriceResult.toFixed(2);

const cuponOld = (price * 40) / 100;
const oldPriceResult = price - cuponOld;
const oldPriceDecimal = oldPriceResult.toFixed(2);

if (ageUser < 18) {
    document.getElementById("ticket").innerHTML = youngPriceDecimal;
} else if (ageUser > 65) {
    document.getElementById("ticket").innerHTML = oldPriceDecimal;
} else if (ageUser >= 18 && ageUser <= 65) {
    document.getElementById("ticket").innerHTML = priceDecimal;
}