import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './components/ThemeContext/themeContext';


ReactDOM.render(
  <ThemeProvider>
    <div className='dark:bg-slate-900'>
      <App />
    </div>
  </ThemeProvider>,
  document.getElementById('root')
);
