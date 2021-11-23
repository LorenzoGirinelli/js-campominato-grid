document.getElementById('play').addEventListener('click', startGame);

function startGame() {
    // CREARE LA GRIGLIA CON GLI SQUARE
    // Crearmi un array di numeri casuali e non ripetuti da 1 a 100
    const numberOfSquares = 100;
    let generatedNumbers = generateSquaresNumbers(numberOfSquares);

    // Per ogni numero nell'array, creo una cella e la appendo al grid container
    const mainGrid = document.getElementById('grid');
    mainGrid.innerHTML = '';
    for(let i = 0; i < generatedNumbers.length; i++) {
        const thisNumber = generatedNumbers[i];
        const newGeneratedSquare = generateGridItem(thisNumber);

        // Attacco l'evento allo square
        newGeneratedSquare.addEventListener('click', handleSquareClick);
        
        // Aggiungo l'elemento alla griglia
        mainGrid.appendChild(newGeneratedSquare);
    }
}
// -----------
// FUNZIONI LEGATE AL DOM
// -----------
function handleSquareClick() {
    this.classList.add('active');
    const thisSquareNumber = parseInt( this.querySelector('span').textContent );
    this.classList.add('square--blue');
}

// -----------
// FUNCTIONS
// -----------

// Creare un elemento della griglia
// number -> numero da inserire nello square
// 
// return: Torna l'elemento html creato
function generateGridItem(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`; 

    return newSquare;
}

// Genera un array con x numeri unici
// quantityOfNumbers -> quanti numeri deve generare
// 
// return: array di quantityOfNumbers numeri univoci
function generateSquaresNumbers (quantityOfNumbers) {
    const numbersArray = [];
    while(numbersArray.length < quantityOfNumbers) {
        // Un numero random
        const randomNumber = getRndInteger(1, quantityOfNumbers);

        // Se il numero random non è gia presente in numbersArray lo pusho
        if( !numbersArray.includes(randomNumber) ) {
            numbersArray.push(randomNumber);
        }
    }

    return numbersArray;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}