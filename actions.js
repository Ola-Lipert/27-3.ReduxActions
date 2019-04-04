import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    };
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    };
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    };
}

function thumbUpComment(id, thumb) {
    return {
        type: THUMB_UP_COMMENT,
        thumb: thumb++,
        id
    };
}

function thumbDownComment(id, thumb) {
    return {
        type: THUMB_UP_COMMENT,
        thumb: thumb--,
        id
    };
}

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = (id, text) => dispatch(editComment(id, text));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundThumbUpComment = (id, thumb) => dispatch(thumbUpComment(id, thumb));
const boundThumbDownComment = (id, thumb) => dispatch(thumbDownComment(id, thumb));