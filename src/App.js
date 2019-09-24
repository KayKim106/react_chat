import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from './firebase/Config'

const databse = firebase.firestore();

function App() {

  const [loginUser, setLoginUser ] = useState('');

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
