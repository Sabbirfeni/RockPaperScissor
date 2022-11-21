const selections = document.querySelectorAll('[data-selection]');
let finalColumn = document.querySelector('[data-finalColumn]');
let manScore = document.querySelector('#manScore');
let computerScore = document.querySelector('#computerScore');
const SELECTION = [
    {
        name: 'rock',
        img: '<img src="assets/images/rock.png" alt="icon">',
        beat: 'scissors'
    },
    {
        name: 'paper',
        img: '<img src="assets/images/paper.png" alt="icon">',
        beat: 'rock'
    },
    {
        name: 'scissors',
        img: '<img src="assets/images/scissors.png" alt="icon">',
        beat: 'paper'
    }
]

selections.forEach((selectionButton) => {
    selectionButton.addEventListener('click', e => {
        const mySelection = selectionButton.dataset.selection;
        const manSelection = SELECTION.find(selection => selection.name === mySelection);
        makeSelection(manSelection);
    })
})

function makeSelection(manSelection) {
    const computerSelection = randomSelection();
    
    const manWinner = isWinner(manSelection, computerSelection);
    const computerWinner = isWinner(computerSelection, manSelection);
    addElement(computerSelection, computerWinner);
    addElement(manSelection, manWinner);

    if(manWinner) addScore(manScore);
    if(computerWinner) addScore(computerScore);
    
}



function randomSelection() {
    let randomNum = Math.floor(Math.random() * SELECTION.length);
    return SELECTION[randomNum];
}

function isWinner(first, second) {
    return first.beat === second.name
}

function addElement(selection, win) {
    let div = document.createElement('div');
    div.innerHTML = selection.img;
    div.classList.add('resultIcon');
    if(win) div.classList.add('winner');
    finalColumn.after(div);
}


function addScore(scoreElement) {
    scoreElement.innerText = parseInt(scoreElement.innerText) + 1;
}

