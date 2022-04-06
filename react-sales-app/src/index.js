import React from 'react';
import { initializeApp } from "firebase/app";


import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import './custom.scss'

const firebaseConfig = {
  apiKey: "AIzaSyA0pXHYTjqdd-A09kt0lG7AAjEOa3EC2p4",

  authDomain: "react-sales-f829c.firebaseapp.com",

  projectId: "react-sales-f829c",

  storageBucket: "react-sales-f829c.appspot.com",

  messagingSenderId: "535709958444",

  appId: "1:535709958444:web:d5334b4ef8b03e2f1cec89",

  measurementId: "G-NEMDB5N3ZV"

};




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


initializeApp(firebaseConfig);
