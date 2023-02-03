//Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

//Here we creat the array for the words to be used in the memorama
let words = [];
function modifyWords(n){
    words = [];
    let j=0;
    shuffleArray(bodyParts);
    for(let i=0;i<n;i++){
        words[j++] = bodyParts[i].french;
        words[j++] = bodyParts[i].english; 
    }
    shuffleArray(words);
}

const grid = document.querySelector('.grid-container');

function deleteGrid() {
    let child = grid.lastElementChild; 
    while (child) {
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
}

function createGrid(nRows){
    deleteGrid();

    let w=0;
    modifyWords((nRows*4)/2);

    for(let i=0;i<nRows;i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j=0;j<4;j++){
            const card = document.createElement('div');
            card.classList.add('card');
            const cardInner = document.createElement('div');
            cardInner.classList.add('card-inner');
            const cardFront = document.createElement('div');
            cardFront.classList.add('card-front');
            const cardBack = document.createElement('div');
            cardBack.classList.add('card-back');
            cardBack.textContent = words[w++];

            cardInner.appendChild(cardFront);
            cardInner.appendChild(cardBack);
            card.appendChild(cardInner);
            row.appendChild(card);
        }
        grid.appendChild(row);
    }

    const cardList = document.querySelectorAll('.card-inner');
    cardList.forEach(function(element){
        element.addEventListener('click',function(){
            flipCard(this);
        });
    });

}

function flipCard(element) {
    element.classList.toggle('is-flipped');
}

const playButton = document.querySelector('.play-button');
playButton.addEventListener('click',function(){
    const option = document.getElementById('size');
    const val = option.value;
    createGrid(val);
});
