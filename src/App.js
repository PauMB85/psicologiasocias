import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/navbar/Navbar';
import './App.scss';
import { Container } from '@material-ui/core';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <Container className="wrapper">
          
        </Container>
      </div>
    </React.Fragment>
  );
}

export default App;
