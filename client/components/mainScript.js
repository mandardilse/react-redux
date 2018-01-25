import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as allActions from '../actions/actions';
import Main from './main.component'

function mapStateToProps(storeData) {
    return {
        myPosts: storeData.posts,
        myComments: storeData.comments
    }
}

function mapDispatchToProps(dispach) {
    return bindActionCreators(allActions, dispach);
}

var App = connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;