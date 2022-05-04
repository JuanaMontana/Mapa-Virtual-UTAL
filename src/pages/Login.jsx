import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { NavLink } from 'react-router-dom';
import Menuadmin from './menuadmin';
import Header from '../components/headerlogin'
import styled from 'styled-components';
import Modal from '../components/modal';
import Grid from '@mui/material/Grid';


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

    const queryAdmin = await db.collection('Credenciales').where('usuario', '==', matricula).get();
    if(!queryAdmin.empty) {
      window.location = '/admin';
    }

    const query = await db.collection('Credenciales').where('matricula', '==', matricula).get();
    if (!query.empty) {

      query.forEach(doc => {
        if (password == doc.data().pass) {
          console.log('pass');
          window.location = '/usuario';


        } else {
          console.log('fail');
          changeState(!modaState);
        }
      });

    } else {
      console.log('fail');
      changeState(!modaState);
    }

  }


  return (
    <Grid >
      <Grid >
        <Header />
      </Grid>

      <Grid sx={{width: "100%",
          textAlign: "center", p:15}}>
        <label >
          Matricula:
          <input
            type="text"
            onChange={(ev) => setMatricula(ev.target.value)}
            id="matricula"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            onChange={(ev) => setPassword(ev.target.value)}
            id="password"
          />
        </label>
        <button onClick={login}>Aprietame papito</button>
      </Grid>
      ;
      <Modal
        state={modaState}
        change={changeState}
      >
        <Contenido>
          <h1>Usuario y/o contraseña incorrectos</h1>

        </Contenido>

      </Modal>
    </Grid>
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

align - items: center;

  h1 {
  font - size: 20px;
  font - weight: 700;
  margin - bottom: 5px;
  align - items: center;
  text-align: center;
  
}

  p {
  font - size: 14px;
  margin - bottom: 20px;
  align - items: center;
  text-align: center;
}
`;