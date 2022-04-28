import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Header from '../components/headerlogin'
import { NavLink }  from 'react-router-dom';
import Menuadmin from './menuadmin';


function CuadroLogin(){
  const [matricula, setMatricula] = useState('');
  const [password, setPassword] = useState('');

  const config = {
    apiKey: "AIzaSyCk75uhlLaz9ldMkITt4gqvYR_te-e-py4",
    authDomain: "db-mapa-utalca.firebaseapp.com",
    databaseURL: "https://db-mapa-utalca-default-rtdb.firebaseio.com",
    projectId: "db-mapa-utalca",
    storageBucket: "db-mapa-utalca.appspot.com",
    messagingSenderId: "250262870549",
    appId: "1:250262870549:web:4c96d9ee14451d7ad88c1c",
    measurementId: "G-QPGKQ6J83E"
  };

  firebase.initializeApp(config);
  let firestore = firebase.firestore();

  const login = async () => 
  
  {

    const db = firestore;

    const query = await db.collection('Credenciales').where('matricula', '==', matricula).get();
    if (!query.empty){
      
      query.forEach(doc => 
        {
        if (password == doc.data().pass){
          
          console.log('pass');
          
          
        }else{
          console.log('fail');
        }
      });
      
    }else{
      console.log('fail');
    }
    
  }
 

  return (
    <div>
      <Header></Header>
      <div>        
        <label>
              Matricula: 
          <input 
            type="text" 
            onChange={(ev) => setMatricula(ev.target.value)}
            id = "matricula"
          />        
        </label>
        <label>
              Password: 
          <input 
            type="password" 
            onChange={(ev) => setPassword(ev.target.value)} 
            id = "password"
          />        
        </label>
        <button onClick={login}>Aprietame papito</button>
      </div>
    </div>
  );
}


class Formulario extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CuadroLogin />
      </div>
    );
  }
}

export default Formulario;
