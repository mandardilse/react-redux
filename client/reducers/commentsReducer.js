export default function comments(store = [], action) {
    console.log("Within comment reducer");
    switch (action.type) {
        case 'ADD_COMMENT':
            console.log('Within add comments!');
            console.log(action);
            return store;
        default: return store;
    }
}