import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import speech from './reducer';

const rootReducer = combineReducers({speech});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
