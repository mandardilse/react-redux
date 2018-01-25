import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

// import posts from './data/posts';
// import comments from './data/comments';

// var defaultStoreData = {
//     posts,
//     comments
// };
var store = createStore(rootReducer, applyMiddleware(thunk));

export default store;