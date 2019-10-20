import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppReducer from './redux/reducer'
import intialState from './redux/state'
import {createStore, StoreEnhancer, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


// It's the redux chrome extention tool, 3rd para for createStore 
type WindowWithDevTools = Window & {
__REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer<unknown, {}>
}
   
const isReduxDevtoolsExtenstionExist = 
(arg: Window | WindowWithDevTools): 
    arg is WindowWithDevTools  => {
    return  '__REDUX_DEVTOOLS_EXTENSION__' in arg;
}

const store = createStore(
    AppReducer, 
    intialState,
    applyMiddleware(thunk)

    // isReduxDevtoolsExtenstionExist(window) ? 
    // window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
    )

// store.subscribe(()=> console.log('dlete later maybe'));

ReactDOM.render(
<Provider store={store}><App /></Provider>,document.getElementById('root'));

serviceWorker.unregister();
