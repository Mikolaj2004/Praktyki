import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from './compontents/Container.js';
import reportWebVitals from './reportWebVitals';
import './style/header.css';
import './style/main.css';
import './style/footer.css';
import './style/table.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Container />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
