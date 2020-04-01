import React from 'react';
import logo from './logo.svg';
import './App.css';
import { translate } from 'react-i18next';

function App() {
  const { t } = this.props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('WELCOME_TEXT')}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default translate('translation')(App);
