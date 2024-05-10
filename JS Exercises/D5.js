/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

console.log("ESERCIZIO 1");

for (let i = 0; i < 4; i++) {
  let arrayPets = pets[i];
  console.log(arrayPets);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("ESERCIZIO 2");
const alphOrder = pets.sort();
console.log("Array after edit Alphabetic Order:", alphOrder);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("ESERCIZIO 3");

const petsReverse = pets.reverse();
console.log("Array after Reverse:", pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log("ESERCIZIO 4");

let animaletti = pets.shift();
pets.push(animaletti);
console.log("Array after the Move:", pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

console.log("ESERCIZIO 5");

const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

cars.forEach((element) => {
  element.licensePlate = "AV1234DM";
  console.log("Add License Plate: ", cars);
});

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("ESERCIZIO 6");

let micra = {
  brand: "Nissan",
  cabrio: "None",
  model: "Micra",
  color: "graysmoke",
  trims: ["life", "style", "r-line"],
};
cars.push(micra);
console.log("Add New Car: ", cars);
cars.forEach((element) => {
  return element.trims.pop();
});
console.log("Delete Last Trims Element in every car: ", cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("ESERCIZIO 7");
const justTrims = [];

cars.forEach((element) => {
  let trims = element.trims[0];
  console.log(trims);
  justTrims.push(trims);
});
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("ESERCIZIO 8");

for (let i = 0; i < 4; i++) {
  let first = cars[i];
  let firstLetter = first.color.charAt(0);
  if (firstLetter === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("ESERCIZIO 9");
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

console.log(numericArray);
numericArray.length = 14;
let i = 0;
while (i < numericArray.length) {
  let finoA32 = numericArray[i];
  i++;
  console.log(finoA32);
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

console.log("ESERCIZIO 10");
const charactersArray = ["g", "n", "u", "z", "d"];

console.log(charactersArray);

const positionArr = [];
for (let i = 0; i < charactersArray.length; i++) {
  const character = charactersArray[i];

  switch (character) {
    case "a":
      positionArr.push(1);
      break;
    case "b":
      positionArr.push(2);
      break;
    case "c":
      positionArr.push(3);
      break;
    case "d":
      positionArr.push(4);
      break;
    case "e":
      positionArr.push(5);
      break;
    case "f":
      positionArr.push(6);
      break;
    case "g":
      positionArr.push(7);
      break;
    case "h":
      positionArr.push(8);
      break;
    case "i":
      positionArr.push(9);
      break;
    case "l":
      positionArr.push(10);
      break;
    case "m":
      positionArr.push(11);
      break;
    case "n":
      positionArr.push(12);
      break;
    case "o":
      positionArr.push(13);
      break;
    case "p":
      positionArr.push(14);
      break;
    case "q":
      positionArr.push(15);
      break;
    case "r":
      positionArr.push(16);
      break;
    case "s":
      positionArr.push(17);
      break;
    case "t":
      positionArr.push(18);
      break;
    case "u":
      positionArr.push(19);
      break;
    case "v":
      positionArr.push(20);
      break;
    case "z":
      positionArr.push(21);
      break;
  }
}

console.log(positionArr);
