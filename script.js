let winCount = 0;
let nCards;
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
let wordMap = [];
function modifyWords(n){
    nCards=n*2;
    words = [];
    let j=0;
    shuffleArray(bodyParts);
    wordMap = bodyParts.slice(0,n);
    for(let i=0;i<n;i++){
        words[j++] = bodyParts[i].french;
        words[j++] = bodyParts[i].english; 
    }
    shuffleArray(words);
}

//Creation and deletion of the grid

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

//word pair check
function check(french,english){
    let opOne = wordMap.find(part=>part.french===french && part.english===english);
    let opTwo = wordMap.find(part=>part.french===english && part.english===french);

    return (opOne||opTwo);
}

//FLip mechanics

let flipCount = 0;
let flag = false;
function flipCard(element) {
    if(flag || element.classList.contains('disabled') || element.classList.contains('checking'))
        return;

    element.classList.toggle('is-flipped');
    element.classList.add('checking');
    if(++flipCount===2){
        flag = true;

        let pairW = document.querySelectorAll('.is-flipped:not(.disabled)');
        let wOne = pairW[0].textContent;
        let wTwo = pairW[1].textContent;
        let res = check(wOne,wTwo);

        if(res){
            for(let i=0;i<pairW.length;i++){
                pairW[i].classList.add('disabled');
                pairW[i].classList.remove('checking');
            }
            flag = false;
            checkWin();
            }else{
            setTimeout(() => {
                for(let i=0;i<pairW.length;i++){
                    pairW[i].classList.toggle('is-flipped');
                    pairW[i].classList.remove('checking');
                }
                console.log("Nope");
                flag = false;
              }, 2000);
              
            }
        flipCount=0;
    }
}

//Play mechanics
let playFlag = false;
const loadingAn = document.getElementById('sliding-image');
const playButton = document.getElementById('play-button');

function playGame(){
  loadingAn.classList.toggle("animate");
  document.getElementById('size').disabled = true;
  document.getElementById('topics-button').disabled = true;
  setTimeout(function() {
    const option = document.getElementById('size');
    const val = option.value;
    createGrid(val);

    playButton.classList.toggle('end-game');
    playButton.textContent = "End Game";
    playFlag = true;
  }, 2000);

  setTimeout(function() {
    loadingAn.classList.toggle('animate');
    playButton.disabled = false;
    document.getElementById('shuffle-button').disabled = false;
  }, 8000);
};

function endGame(){
  loadingAn.classList.toggle('animate');
    document.getElementById('shuffle-button').disabled = true;
    setTimeout(function() {
      deleteGrid();
      playButton.classList.toggle('end-game');
      playButton.textContent = "Play";
    }, 2000);

    setTimeout(function() {
      loadingAn.classList.toggle('animate');
      document.getElementById('size').disabled = false;
      document.getElementById('topics-button').disabled = false;
      playFlag = false;
      playButton.disabled = false;
    }, 8000);
};

playButton.addEventListener('click', function() {
  playButton.disabled = true;
  if (playFlag) {
    endGame();  
    return;
  }
  playGame();
});

//Shuffle button
const shuffleButton = document.getElementById('shuffle-button');
function shuffle(){
    loadingAn.classList.toggle("animate");
    shuffleButton.disabled = true;
    playButton.disabled = true;
    setTimeout(function() {
        const option = document.getElementById('size');
        const val = option.value;
        createGrid(val);
      }, 2000);
      setTimeout(function() {
        loadingAn.classList.toggle('animate');
        shuffleButton.disabled = false;
        playButton.disabled = false;
      }, 8000);
}
shuffleButton.addEventListener('click',shuffle);

//Wining options
const winningScreen = document.getElementById('winning-screen');

function checkWin(){
  winCount+=2;
  if(winCount===nCards){
    winningScreen.classList.toggle('animate-win');
    setTimeout(function(){
      winningScreen.style.transform = 'translateY(430px)';
    },500);
  }
}

function afterWin(){
  winningScreen.classList.remove('animate-win');
  winningScreen.classList.add('after-win');
  setTimeout(function(){
    winningScreen.style.transform = 'translateY(-300px)';
    winningScreen.classList.remove('after-win');
  },750);
};
const restart = document.getElementById('restart');
restart.addEventListener('click', function(){
  afterWin();
  endGame();
});

const playAgain = document.getElementById('play-again');
playAgain.addEventListener('click',function(){
  afterWin();
  shuffle();
});