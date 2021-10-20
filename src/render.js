import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostChange } from './redux/state'
export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostChange={updateNewPostChange}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

