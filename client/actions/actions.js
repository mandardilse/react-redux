import axios from 'axios';
/*
export class Actions {
    INCREMENT() {
        return { type: "INCREMENT_LIKE" }
    }
    DECREMENT() {
        return { type: 'DECREMENT_LIKE' }
    }
}
*/
export function INCREMENT(index) { return { type: "INCREMENT_LIKE", index } };
export function DECREMENT(index) { return { type: 'DECREMENT_LIKE', index } };
export function ADDCOMMENT() { return { type: 'ADD_COMMENT' } };
export function FETCHPOSTDATA() {
    var aPromise = axios.get('http://localhost:7770/api/posts');
    return (dispatch) => {
        aPromise.then(response => {
            dispatch({ type: 'FETCH_POSTS', response: response.data })
        });
    };
};

export function FETCHCOMMENTDATA() {
    var cPromise = axios.get('http://localhost:7770/api/comments');
    return (dispatch) => {
        cPromise.then(response => {
            dispatch({ type: 'FETCH_COMMENTS', response: response.data })
        });
    }
}
