//const = Tipo di variabile
//user = Nome variabile
//tutto quello che viene dopo "=" viene chiamato "valore"
// ES: const user = ("Nome e Cognome"); 

//prompt è un metodo per far visualizzare all'utente una finestra dove vengono richiesti degli input

//inserimento Dati utente, chilometri
const user = prompt("Nome e Cognome");
//parseInt serve per convertire una stringa in numero
const ageUser = parseInt(prompt("Quanti anni hai?"));
const kmUser = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
//Gli oggetti data vengono creati con new Date()
const currentDate = new Date();
const dateTicket = currentDate.toDateString()
const timeTicket = currentDate.toTimeString()
//document.getElementById("Id").innerHTML = "Nome variabile" Viene utilizzato se si desidera leggere o modificare un elemento HTML.
document.getElementById("name-surname").innerHTML = user
document.getElementById("date").innerHTML = dateTicket
document.getElementById("time").innerHTML = timeTicket


// Calcolo Chiolometri * 0.21€ al km
const price = (kmUser * 0.21);
//toFixed serve per specificare i decimali
const priceDecimal = price.toFixed(2);


//Calcolo cupon
const cuponYoung = (price * 20) / 100;
//Calcolo prezzo - cupon
const youngPriceResult = price - cuponYoung;
//Impostare i decimali
const youngPriceDecimal = youngPriceResult.toFixed(2);

const cuponOld = (price * 40) / 100;
const oldPriceResult = price - cuponOld;
const oldPriceDecimal = oldPriceResult.toFixed(2);

//"if", "else if" e "else" sono delle condizioni che servono per far accadere un qualcosa in quel punto specifico
if (ageUser < 18) {
    document.getElementById("ticket").innerHTML = youngPriceDecimal;
} else if (ageUser > 65) {
    document.getElementById("ticket").innerHTML = oldPriceDecimal;
} else if (ageUser >= 18 && ageUser <= 65) {
    document.getElementById("ticket").innerHTML = priceDecimal;
}
//console.log serve per testare ciò che si sta facendo
console.log(user);
console.log(ageUser);
console.log(kmUser);
console.log(price);
console.log((price * 20) / 100);
console.log(price - cuponYoung);
console.log(price - cuponOld);
