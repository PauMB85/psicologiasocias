import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/navbar/Navbar';
import './App.scss';
import { Container } from '@material-ui/core';
import Terapias from './components/terapias/Terapias';

import { BrowserRouter, Switch, Route} from "react-router-dom";
import Aboutme from './components/aboutme/Aboutme';
import Contact from './components/contacto/Contact';

const routes = [
  {
    path: "/(|home)",
    component: Terapias
  },
  {
    path: "/aboutme",
    component: Aboutme
  },
  {
    path: "/contact",
    component: Contact
  }
];

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Container className="wrapper">
            <Switch>
                {routes.map((route, i) => (
                    <Route key={i} path={route.path} component={route.component} />
                ))}
            </Switch>
          </Container>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
