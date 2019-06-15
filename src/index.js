import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//redux is the store (giant object) and react-redux is the connection 
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

const feedbackReducer = (state = [], action) => {
    if (action.type === 'ADD_FEEDBACK'){
        console.log(action.payload)
        return [...state, action.payload]
    }else if (action.type === 'CLEAR_FEEDBACK') {
        return [];
    } 
    return state;
}

const storeInstance = createStore(
    //this is a reducer- it is a function that runs every time an action is dispatched 
        combineReducers({
          //reducer/s
        feedbackReducer,
        }),
        applyMiddleware(logger)
    );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
