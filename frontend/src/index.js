import React from 'react';
import ReactDOM from 'react-dom';
import './component/index.css';
import App from './component/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

