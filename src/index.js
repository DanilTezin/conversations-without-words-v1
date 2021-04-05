import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import state, { addPost } from './store/state'


let rerenderEntireTree = () =>{

  ReactDOM.render(
    <React.StrictMode><App state={state} addPost={addPost} /> </React.StrictMode>,document.getElementById('root')
  );reportWebVitals();
  
}
rerenderEntireTree()







