
import Menuadmin from "./pages/menuadmin"
import './App.css';
import Login from './pages/Login.jsx';
import Notfound from './pages/Notfoundpage';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import React, { Component }  from 'react';

function App() {
  return (

    <BrowserRouter> 


          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/admin" element={<Menuadmin/>} />
            <Route path="/*" element={<Notfound/>} />
          </Routes>
    </BrowserRouter>

  );
}

export default App;
