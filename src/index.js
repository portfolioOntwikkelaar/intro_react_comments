import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './image/eva.jpeg'
import profile2 from './image/john.jpeg'
import profile3 from './image/mike.jpeg'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


const App = () => {
  return(
    <div className='ui comments'>
      <div className='comment'>
        <a href="/" className='avatar'>
          <img src={profile1} alt="profile picture" />

        </a>
        <div className='content'>
          <a href="/" className='author'>
            Femke
          </a>
          <div className='metadata'>
            <span className='date'>
              Vandag om 5:00PM
            </span>
          </div>
          <div className='text'>
            Wonderbaarlijk
          </div>
        </div>
      </div>
      <div className='comment'>
        <a href="/" className='avatar'>
          <img src={profile2} alt="profile picture" />

        </a>
        <div className='content'>
          <a href="/" className='author'>
            Femke
          </a>
          <div className='metadata'>
            <span className='date'>
              Vandag om 5:00PM
            </span>
          </div>
          <div className='text'>
            Wonderbaarlijk
          </div>
        </div>
      </div>
      <div className='comment'>
        <a href="/" className='avatar'>
          <img src={profile3} alt="profile picture" />

        </a>
        <div className='content'>
          <a href="/" className='author'>
            Femke
          </a>
          <div className='metadata'>
            <span className='date'>
              Vandag om 5:00PM
            </span>
          </div>
          <div className='text'>
            Wonderbaarlijk
          </div>
        </div>
      </div>
    
    </div>
  )
}
ReactDOM.render(
  
    <App />
  ,
  document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
