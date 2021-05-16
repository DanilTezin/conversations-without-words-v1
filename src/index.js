import './index.css';
import React from 'react'
import store from './store/state'
import App from './App'
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom'



export let rerenderEntireTree = () =>{

    ReactDOM.render(

      <React.StrictMode><App  state={store.getState()} dispatch={store.dispatch.bind(store)} /> </React.StrictMode>,document.getElementById('root')

    );reportWebVitals()
    debugger
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
