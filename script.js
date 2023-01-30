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
