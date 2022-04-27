import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useFirebaseApp } from 'reactfire';


import Modal from './componentes/Modal';
import styled from 'styled-components';


function CuadroLogin() {
  
  const [modaState, changeState] = useState(false);
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



  const login = async () => {

    const db = firestore;
    const query = await db.collection('Credenciales').where('matricula', '==', matricula).get();
    if (!query.empty){
      
      query.forEach(doc => {
        if (password == doc.data().pass){
          console.log('pass');
        }else{
          console.log('fail');
        }
      });
    }else{
      console.log('fail');
      changeState(!modaState)
    }
    
  }
  
  return (
    
    <div>
      <div>      
        <label>
              Matricula: 
          <input 
            type="text" classname="form-control
            form-control-lg" placeholder="123456"
            onChange={(ev) => setMatricula(ev.target.value)}
            id = "matricula"
          />        
        </label>
        <label>
              Password: 
          <input 
            type="password"  placeholder="**********"
            onChange={(ev) => setPassword(ev.target.value)} 
            id = "password"
          />        
        </label>
        <button color="success" onClick={login} >Aprietame papito </button> 
        
      </div>
      <Modal
        state = {modaState}
        change = {changeState}
      >
        <Contenido>
          <h1>Usuario y/o contraseña incorrectos</h1>
          <p>Por favor verifique e intente nuevamente</p>
        </Contenido>
        
      </Modal>
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

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 { 
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 0px;
  }

  p {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;