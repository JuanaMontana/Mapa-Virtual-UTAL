import './App.css';import { Button } from '@mui/material';
import Edificios from './components/Edificios';
import { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Edificios/>
      </div>
    );
  }
}

export default App;