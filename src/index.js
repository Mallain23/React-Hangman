import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GameProvider from './components/Game/GameProvider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GameProvider />, document.getElementById('root'));
registerServiceWorker();
