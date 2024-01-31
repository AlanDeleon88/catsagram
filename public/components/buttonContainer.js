
function makeButtonContainer() {
    const mainBtnContainer = document.createElement('div');
    mainBtnContainer.setAttribute('class', 'button-container');

    mainBtnContainer.appendChild(makeVoteCounter());

    const upDownContainer = document.createElement('div');
    upDownContainer.setAttribute('class', 'up-down-container');


    upDownContainer.innerHTML =
        '<div class="up-button vote-button" id="up">⬆</div> <div class="down-button vote-button" id="down">⬇</div>'

    mainBtnContainer.appendChild(upDownContainer);

    const newCatBtn = document.createElement('button');
    newCatBtn.setAttribute('class', 'new-cat-button');

    newCatBtn.innerText = 'NEW CAT'


    mainBtnContainer.appendChild(newCatBtn);

    return mainBtnContainer;

}

function makeVoteCounter() {
    const voteCounterContainer = document.createElement('div');
    let votes = 0;

    voteCounterContainer.setAttribute('class', 'vote-counter-container');

    voteCounterContainer.innerHTML = `<div class="votes-text"> Votes: </div> <div class="votes-num" id="votes"> ${votes} </div>`

    return voteCounterContainer;
}


export default makeButtonContainer
