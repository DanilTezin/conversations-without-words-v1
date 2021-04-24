import './index.css';
import React from 'react'
import store from './store/state'
import App from './App'
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom'



export let rerenderEntireTree = () =>{

    ReactDOM.render(

      <React.StrictMode><App  state={store.getState()} addMessage={store.addMessage.bind(store)} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} /> </React.StrictMode>,document.getElementById('root')

    );reportWebVitals()
    debugger
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
