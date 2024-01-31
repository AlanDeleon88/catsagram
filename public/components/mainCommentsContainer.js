

function createMainCommentsContainer() {
    const commentsContainer = document.createElement('div');
    commentsContainer.setAttribute('class', 'main-comments');

    //! initialize comments store here.
    // localStorage.setItem('comments', JSON.stringify([]));
    commentsContainer.appendChild(createCommentsBox());
    commentsContainer.appendChild(createInputBox());


    return commentsContainer;
}

function createCommentsBox() {
    const commentsBox = document.createElement('div');
    commentsBox.setAttribute('class', 'comments-box')

    //! populate with comments if previous comments exist
    const comments = JSON.parse(localStorage.getItem('comments'))
    if (comments.length > 0) {
        comments.forEach(el => {
            commentsBox.appendChild(createComment(el));
        })

    }


    return commentsBox;

}

function createInputBox() {
    const inputContainer = document.createElement('div');
    inputContainer.setAttribute('class', 'input-container');

    const inputField = document.createElement('input');
    inputField.setAttribute('class', 'input-field');
    inputField.type = 'text'

    inputContainer.appendChild(inputField);

    const postCommentButton = document.createElement('button');
    postCommentButton.setAttribute('class', 'post-comment-button');
    postCommentButton.innerText = 'Post'

    addCommentEventListner(postCommentButton);

    inputContainer.appendChild(postCommentButton);


    return inputContainer;
}

function createComment(text) {
    const commentContainer = document.createElement('div');
    commentContainer.setAttribute('class', 'comment-container');

    const newComment = document.createElement('div');
    newComment.setAttribute('class', 'comment');
    newComment.innerText = text;

    const deleteCommentButton = document.createElement('button');

    deleteCommentButton.setAttribute('class', 'delete-comment-button');
    deleteCommentButton.setAttribute('id', 'delete-button');


    deleteCommentButton.innerText = '❌'


    commentContainer.appendChild(newComment);
    commentContainer.appendChild(deleteCommentButton);

    addDeleteEvent(commentContainer);


    return commentContainer;
}

function addCommentEventListner(commentButton) {
    commentButton.addEventListener('click', event => {
        const inputField = document.querySelector('.input-field');
        const commentBox = document.querySelector('.comments-box');


        // console.log(inputField.value);
        //!need to update local storage for comments here.
        const commentsDb = JSON.parse(localStorage.getItem('comments'));
        const newComment = createComment(inputField.value);
        commentBox.appendChild(newComment);

        if (commentsDb) {
            //! if it comments db exists, then push to existing.
            commentsDb.push(inputField.value);


        }
        else {
            //! if no comments db then init array here.
            const commentsDb = [];
            commentsDb.push(inputField.value);
        }

        //! update local storage with new comments array
        localStorage.setItem('comments', JSON.stringify(commentsDb));


        inputField.value = '';
        event.stopPropagation();
    })
}

function addDeleteEvent(commentContainer) {

    commentContainer.addEventListener('click', event => {
        // console.log(commentContainer);
        if (event.target.id === 'delete-button') {
            //! find the element in local storage and remove it from array

            const commentText = commentContainer.children[0].innerText
            const commentsDb = JSON.parse(localStorage.getItem('comments'));
            const commentIndex = commentsDb.findIndex(el => el === commentText);
            //! after we find the index of the comment, splice it out of array.
            commentsDb.splice(commentIndex, 1);

            //!update local storage array.
            localStorage.setItem('comments', JSON.stringify(commentsDb));

            commentContainer.remove();
        }
    })

}


export default createMainCommentsContainer
