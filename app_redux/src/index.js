import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import cfgStore from './store';

const store = cfgStore();

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

