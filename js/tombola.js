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
    numberCellDiv.classList.add("cell");
    const cellValue = document.createElement("h3");
    cellValue.innerHTML = `<div><span class='number'>${i + 1}</span></div>`;
    numberCellDiv.appendChild(cellValue);
    bingoDiv.appendChild(numberCellDiv);
  }
};
createBingoCells(numbersOfBingo);

//creo la funzione per il bottone
const getRandomNumber = function () {
  const risultatoDiv = document.getElementById("display-number");
  if (numbersOfBingo.length > 0) {
    const index = Math.floor(Math.random() * numbersOfBingo.length);
    const randomNumber = numbersOfBingo[index];
    numbersOfBingo.splice(index, 1)[0]; //elimina i numeri già usciti nell'array
    risultatoDiv.innerHTML = `
  <span id='randomNumber'>${randomNumber}</span>
  `;
    const cell = document.getElementsByClassName("cell"); //invoca le celle già create in precedenza
    cell[randomNumber - 1].classList.add("highlight"); // aggiunge la classe highlight quando la cella ha indice uguale al numero random meno uno
  } else {
    return (risultatoDiv.innerHTML = `
  <span id='otherValue' >"All numbers have been drawn!"</span>;
  `);
  }
  console.log(numbersOfBingo);
};
