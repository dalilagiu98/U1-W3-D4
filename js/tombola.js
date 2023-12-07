//creo un array vuoto e ci pusho dentro i numeri da 1 a 90
const numbersOfBingo = [];

for (let i = 1; i <= 90; i++) {
  numbersOfBingo.push(i);
}

console.log(numbersOfBingo);

//creo le celle del tabellone

const createBingoCells = function (numbers) {
  const bingoDiv = document.getElementById("bingo-container");
  for (let i = 0; i < numbers.length; i++) {
    const numberCellDiv = document.createElement("div");
    numberCellDiv.classList.add("number");
    const cellValue = document.createElement("h3");
    cellValue.innerText = i + 1;
    numberCellDiv.appendChild(cellValue);
    bingoDiv.appendChild(numberCellDiv);
  }
};
createBingoCells(numbersOfBingo);

//creo la funzione per il bottone
const getRandomNumber = function () {
  const risultatoDiv = document.getElementById("display-number");
  if (numbersOfBingo.length === 0) {
    risultatoDiv.innerText = "All numbers have been drawn!";
    return;
  }
  const index = Math.floor(Math.random() * numbersOfBingo.length);
  const randomNumber = numbersOfBingo[index];
  numbersOfBingo.splice(index, 1); //elimina i numeri già usciti nell'array
  risultatoDiv.innerText = randomNumber;
  //   aggiungo la classe alla cella con lo stesso numero
  // const cellSameNumber
  if (randomNumber === cellValue) {
    numberCellDiv.classList.add("number-extracted");
  }
};
