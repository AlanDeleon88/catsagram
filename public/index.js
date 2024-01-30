import makeButtonContainer from "./components/buttonContainer.js";
window.onload = () => {
    const main = document.createElement('div');
    main.setAttribute('class', 'main');

    const mainPicContainer = document.createElement('div');
    mainPicContainer.setAttribute('class', 'main-pic')

    mainPicContainer.appendChild(makeHeader());

    mainPicContainer.appendChild(createPicture());

    mainPicContainer.appendChild(makeButtonContainer());

    main.appendChild(mainPicContainer)

    document.body.appendChild(main);


}

function makeHeader() {
    const header = document.createElement('h1');
    header.setAttribute('class', 'title');
    header.innerText = 'Catstagram';

    return header
}

function createPicture() {
    const catPic = document.createElement('img');
    catPic.setAttribute('class', 'cat-img');
    //! get cat src from fetch here!

    return catPic
}
