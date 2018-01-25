export default function comments(state = [], action) {
    console.log("Within comment reducer");
    switch (action.type) {
        case 'FETCH_COMMENTS':
            state = action.response;
            return state;
        case 'ADD_COMMENT':
            console.log('Within add comments!');
            console.log(action);
            return state;
        default: return state;
    }
}