import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import cfgStore from './store';
import simpleAction from './actions/simple';

const store = cfgStore();
console.log(store.getState());
console.log(store.dispatch(simpleAction()));
console.log(store.getState());

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

