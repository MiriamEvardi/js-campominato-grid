// seleziona difficoltà e crea riquadri in base alla difficoltà scelta
function setDifficult(difficulty) {

    //resetta il numero dei riquadri
    let totalSquares = 0;

    //10 x 10 hard
    if (difficultySelect.value === "hard") {
        totalSquares = 100;

        //9 x 9 normal
    } else if (difficultySelect.value === "medium") {
        totalSquares = 81;
        gridElement.class

        //7 x 7 easy
    } else if (difficultySelect.value === "easy") {
        totalSquares = 49;
    }
    gridElement.className = difficultySelect.value;
    return totalSquares;
}


//creo i riquadri e li inserisco nella griglia
function createGrid(totalSquares) {


    //creo n div
    for (let i = 0; i < totalSquares; i++) {
        let newElement = document.createElement("div");
        newElement.classList.add("square");


        //stampo il numero e lo incremento di + 1
        newElement.innerText = i + 1;


        //li inserisco nella griglia
        gridElement.append(newElement);

        //al click, i riquadri si colorano
        newElement.addEventListener('click',
            function () {
                this.classList.toggle("active");

                console.log(this.innerText);
            }
        )
    }
}


const buttonElementGrid = document.getElementById("start");
const difficultySelect = document.getElementById("difficulty");
const gridElement = document.querySelector("#grid");


buttonElementGrid.addEventListener('click',
    function () {

        const difficulty = Number(difficultySelect.value);
        const totalSquares = setDifficult(difficulty);

        // Resetta la griglia
        gridElement.innerHTML = '';

        // Genera le caselle della griglia
        createGrid(totalSquares);

    }
)

