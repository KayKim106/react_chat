import React,{ useState, useEffect } from 'react';

import firebase from './firebase/Config'

const database = firebase.firestore();

function App() {

  const [loginUser, setLoginUser ] = useState('');

  useEffect( () => {

    // Get ALl users
    database.collection("users")
    .get()
    .then(
      response => {
        const userList = response.docs.map( doc => console.log(doc) )
      }
    )


    // Get Specific user
   let data =  database.collection("users").doc("zDISWES8aOtPPoWEH1Cm")
  
  })

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
