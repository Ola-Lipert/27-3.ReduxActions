import { ADD_COMMENT } from './actions';
import { EDIT_COMMENT } from './actions';
import { REMOVE_COMMENT } from './actions';
import { THUMB_UP__COMMENT } from './actions';
import { THUMB_DOWN_COMMENT } from './actions';


const initialState = {
    comments: []
};

function comments(state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
                , ...state];

        case REMOVE_COMMENT:
            return state.comments.filter(comment => comment.id !== action.id);

        case EDIT_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {
                        ...comment,
                        text: action.text
                    }
                }
            });

        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {
                        ...comment,
                        votes: comment.vote + 1
                    };
                }
                return comment;
            });

        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {
                        ...comment,
                        votes: comment.vote - 1
                    };
                }
                return comment;
            });
        default:
            return state;
    }
}

