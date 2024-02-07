//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
//ed emetto un messaggio in console con il numero della cella cliccata.




const gridElement = document.querySelector("#grid");

//numero di inizio
let squareNumber = 1;

//griglia 10 x 10
for (let i = 0; i < 100; i++) {

    //creo 100 div .square
    const newElement = document.createElement("div");
    newElement.classList.add("square");

    //stampo il numero e lo incremento di + 1
    newElement.innerText = squareNumber;
    squareNumber++;

    //li inserisco nella griglia
    gridElement.append(newElement);
}



