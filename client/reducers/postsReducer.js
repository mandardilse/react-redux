
export default function posts(state = [], action) {
    console.log(action);
    switch (action.type) {
        case 'FETCH_POSTS':
            state = action.response;
            return state;
        case 'INCREMENT_LIKE':
            let postIndex = action.index;
            return [
                ...state.slice(0, postIndex),
                { ...state[postIndex], likes: state[postIndex].likes + 1 },
                ...state.slice(postIndex + 1)
            ];
        case 'DECREMENT_LIKE':
            let pIndex = action.index;
            return [
                ...state.slice(0, pIndex),
                { ...state[pIndex], likes: state[pIndex].likes - 1 },
                ...state.slice(pIndex + 1)
            ];
        default: return state;
    }
}