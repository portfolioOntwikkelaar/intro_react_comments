import React from 'react';
import ReactDOM from 'react-dom';

import SingleComment from './SingleComment';
import profile4 from './image/nav.jpeg'
import profile1 from './image/eva.jpeg'
import profile2 from './image/john.jpeg'
import profile3 from './image/mike.jpeg'
import UserCard from './UserCard';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


const App = () => {
  return(
    <div className='ui comments'>
      <div class="ui pointing menu">
  <a class="active item">
    Home
  </a>
  <a class="item">
    Messages
  </a>
  <a class="item">
    Friends
  </a>
  <div class="right menu">
    <div class="item">
      <div class="ui transparent icon input">
        <input type="text" placeholder="Search..." />
        <i class="search link icon"></i>
      </div>
    </div>
    
  </div>
  
</div>

<div class="ui segment">
  <UserCard title='actress' >
    <div>Hi, My name is Eva</div>
<SingleComment name='Eva Longoria'  date='Today at 6:30PM'        text='Een briljante prestatie van vertaler Henri Beyle'  picture={profile1} /></UserCard>
<UserCard title='schrijver' >
      <SingleComment name='Femke Desmett'  date='Today at 3:22PM'  text='Enkele van de meest enervende minuten uit de wereldliteratuur staan beschreven in Henris verhaal'  picture={profile4} /></UserCard>
      <UserCard title='politicus' >
      <SingleComment  name='Jack Wouters'  date='Today at 11:40PM'  text='Hij vertelt in Promenades dans Rome hoe een geleerde uit zijn dagen Jupiter Feretrius abusievelijk had vertaald met Jupiter en Feretrius'  picture={profile2}/></UserCard>
      <UserCard title='bisnessman' >
      <SingleComment  name='Michel Dupont'  date='Today at 19:10PM'  text='De grootste verhaal van de filosoof.'  picture={profile3}/></UserCard>
  <p></p>
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
