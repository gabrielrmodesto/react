import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import cfgStore from './store';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const store = cfgStore();

ReactDOM.render(
    <Provider store={store}>
        <div className="container">
            <div className="row">
                <App />
            </div>
        </div>
        
    </Provider>
    
    , document.getElementById('root'));

serviceWorker.unregister();
