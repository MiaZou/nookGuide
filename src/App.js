import { Route, Router, Switch } from 'react-router-dom';

import ContentBox from './components/ContentBox';
import Fish from './components/Fish';
import NavBar from './components/NavBar';
import { Provider } from 'react-redux';
import React from 'react';
import Villagers from './components/Villagers';
import Welcome from './components/Welcome';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <div className="navBarwLogin">
              <NavBar />
              <Switch>
                <Route path='/' exact component={Welcome} />
                <Route path='/villagers' component={Villagers} />
                <Route path='/fish' component={Fish} />
              </Switch>
            </div>
          <ContentBox />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
