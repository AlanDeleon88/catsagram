

function createMainCommentsContainer() {
    const commentsContainer = document.createElement('div');
    commentsContainer.setAttribute('class', 'main-comments');

    //! initialize comments store here.
    // localStorage.setItem('comments', JSON.stringify([]));
    commentsContainer.appendChild(createInputBox());
    commentsContainer.appendChild(createCommentsBox());


    return commentsContainer;
}

function createCommentsBox() {
    const commentsBox = document.createElement('div');
    commentsBox.setAttribute('class', 'comments-box')


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


export default createMainCommentsContainer
