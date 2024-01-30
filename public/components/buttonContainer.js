
function makeButtonContainer() {
    const mainBtnContainer = document.createElement('div');
    mainBtnContainer.setAttribute('class', 'button-container');

    mainBtnContainer.appendChild(makeVoteCounter());

    const upDownContainer = document.createElement('div');
    upDownContainer.setAttribute('class', 'up-down-container');
    addVotesEvent(upDownContainer);
    upDownContainer.innerHTML =
        '<div class="up-button vote-button" id="up">⬆</div> <div class="down-button vote-button" id="down">⬇</div>'

    mainBtnContainer.appendChild(upDownContainer);

    const newCatBtn = document.createElement('button');
    newCatBtn.setAttribute('class', 'new-cat-button');

    newCatBtn.innerText = 'NEW CAT'

    addNewCatEvent(newCatBtn)

    mainBtnContainer.appendChild(newCatBtn);

    return mainBtnContainer;

}

function makeVoteCounter() {
    const voteCounterContainer = document.createElement('div');
    voteCounterContainer.setAttribute('class', 'vote-counter-container');

    voteCounterContainer.innerHTML = `<div class="votes-text"> Votes: </div> <div class="votes-num" id="votes"> ${0} </div>`


    return voteCounterContainer;
}

function addVotesEvent(voteCounter) {
    // console.log(voteCounter);
    voteCounter.addEventListener('click', event => {
        // console.log('hello');
        const button = event.target;

        const voteCountEl = document.querySelector('#votes');
        let voteNum = Number(voteCountEl.innerText);
        if (button.id === 'up') {
            voteNum++

        }
        else if (button.id === 'down') {
            voteNum--
        }
        voteCountEl.innerText = voteNum;
        //! update local storage here.
        event.preventDefault();
    })
}

function addNewCatEvent(catBtn) {
    catBtn.addEventListener('click', event => {
        // console.log('TEST!!');

        fetch('https://api.thecatapi.com/v1/images/search')
            .then(res => {
                return res.json();
            })
            .then(resBody => {
                // console.log(resBody);
                const { url } = resBody[0];
                const catImg = document.querySelector('.cat-img');

                catImg.src = url;

            })

        event.preventDefault();
    })
}

function resetVotes() {
    
}



export default makeButtonContainer
