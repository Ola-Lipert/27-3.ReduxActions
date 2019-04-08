import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

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

function thumbUpComment(id, vote) {
    return {
        type: THUMB_UP_COMMENT,
        vote: vote++,
        id
    };
}

function thumbDownComment(id, vote) {
    return {
        type: THUMB_UP_COMMENT,
        vote: vote--,
        id
    };
}
