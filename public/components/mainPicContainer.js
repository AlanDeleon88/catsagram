import makeButtonContainer from "./buttonContainer.js";

function createMainPicContainer() {

    const mainPicContainer = document.createElement('div');
    mainPicContainer.setAttribute('class', 'main-pic')

    mainPicContainer.appendChild(makeHeader());
    mainPicContainer.appendChild(createPicture());
    mainPicContainer.appendChild(makeButtonContainer());

    return mainPicContainer;
}

function makeHeader() {
    const header = document.createElement('h1');
    header.setAttribute('class', 'title');
    header.innerText = 'Catstagram';

    return header;
}

function createPicture() {
    const catPic = document.createElement('img');
    catPic.setAttribute('class', 'cat-img');
    if (localStorage.getItem('catUrl'))
    {
        catPic.src = localStorage.getItem('catUrl')
    }
    else {
        //! make initial fetch
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(res => {
                console.log('PRE-PARSE', res.url);
                return res.json();
            })
            .then(resBody => {
                console.log('POST-PARSE', resBody[0].url);
                const { url } = resBody[0];
                const catImg = document.querySelector('.cat-img');

                catImg.src = url;
                localStorage.setItem('catUrl', url);

            })
    }

    return catPic;
}

export default createMainPicContainer
