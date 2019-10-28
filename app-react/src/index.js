import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import Clock from './Clock';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Clock />, document.getElementById('root'));

serviceWorker.unregister();
