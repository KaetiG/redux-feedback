import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//redux is the store (giant object) and react-redux is the connection 
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

//---------REDUCER-----------//
//-reducers run any time an action is dispatched-//
const feedbackReducer = (state = {}, action) => {
    if (action.type === 'ADD_FEEDBACK'){
        console.log(action.payload)
        return {...state, ...action.payload}
    }else if (action.type === 'CLEAR_FEEDBACK') {
        return {};
    } 
    return state;
}
//at first I had the state as an array
//and then obviously had a hard time adding the data
//to the database
//by turning it into an object I could specify
//the properties and accurately send those to 
//the correct sections in the database

//everytime the Next button is clicked, dispatch to
//ADD_FEEDBACK adds the value entered into the object
//when either the Start Over or the Submit button is clicked
//dispatch to CLEAR_FEEDBACK, which empties the the object properties 
//and returns the user to the starting page

const storeInstance = createStore( //creates the store (massive object)
   
        combineReducers({
          //reducer/s
        feedbackReducer,
        }),
        applyMiddleware(logger) //console logs the reducers/reduxState
    );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
//allows us to use redux / access the store from anywhere within App
registerServiceWorker();

///////////TO DO////////////
//make new review component -DONE
//---fine tune it------//////
////////ternary^^^^ ----DONE
//make radio buttons
//style with css or material UI
//comment out code
//UPDATE READ ME FILE???!!?!?!?!
