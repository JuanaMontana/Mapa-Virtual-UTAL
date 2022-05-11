import React, { useEffect, useState } from "react";
import App from "../App";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { create } from "@mui/material/styles/createTransitions";
import firebaseApp from '../fb'
import { doc, QuerySnapshot } from "firebase/firestore";

const db = firebaseApp.firestore();


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function Edificios() {                               
  const [datos, setDatos] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    db.collection("Edificios").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) =>{
        docs.push(doc.data());
      });
      setDatos(docs);
      datos.map((edificio) => {
        const data = createData(edificio.Nombre, 0, 0, 0, 0);
        console.log(data);
        setRows([...rows, data])
        console.log(rows);
      })
    });  
  }, []); 

  /*const rows = [
    datos.map((edificio) => {
      edificio.Nombre, 0, 0, 0, 0
    })
    createData(datos[0].Nombre, 0, 0, 0, 0),
    createData(datos[1].Nombre, 0, 0, 0, 0),
    createData(datos[2].Nombre, 0, 0, 0, 0),
    createData(datos[3].Nombre, 0, 0, 0, 0),
    createData(datos[4].Nombre, 0, 0, 0, 0),
    createData(datos[5].Nombre, 0, 0, 0, 0),
    createData(datos[6].Nombre, 0, 0, 0, 0),
    createData(datos[7].Nombre, 0, 0, 0, 0),
  ];*/
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Column 2</TableCell>
            <TableCell align="right">Column 3</TableCell>
            <TableCell align="right">Column 4</TableCell>
            <TableCell align="right">Column 5</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}