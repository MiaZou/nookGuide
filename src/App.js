import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Bugs from './pages/bugs';
import Fish from './pages/fish';
import Fossils from './pages/fossils';
import Home from './pages/home';
import Navbar from './components/Navbar';
import React from 'react';
import Villagers from './pages/villagers';
import styled from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/fish' exact component={Fish} />
          <Route path='/bugs' exact component={Bugs} />
          <Route path='/fossils' exact component={Fossils} />
          <Route path='/villagers' exact component={Villagers} />
        </Switch>
      </Router>
    );
  }
}

export default App;
