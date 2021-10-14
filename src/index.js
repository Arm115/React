import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  { id: 1, message: 'Hi,how are you', likesCount: 78 },
  { id: 2, message: 'My post', likesCount: 20 },
  { id: 3, message: '', likesCount: 0 },
  { id: 4, message: 'This is test of mapping', likesCount: 5 }
]


let messagesData = [
  { id: 1, message: 'Hi how are you' },
  { id: 2, message: 'How you did it' },
  { id: 3, message: 'Good luck' },
]


let dialogsData = [
  { id: 1, name: 'Vlad' },
  { id: 2, name: 'Dimych' },
  { id: 3, name: 'Elena' }
]

export {postData, dialogsData,messagesData}



ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
