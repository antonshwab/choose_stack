import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TXS from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App txs={TXS}/>, document.getElementById('root'));
registerServiceWorker();
