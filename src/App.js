import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
          <BrowserRouter>
            <div className="navBarwLogin">
              <NavBar />
              <Switch>
                <Route path='/' exact component={Welcome} />
                <Route path='/villagers' component={Villagers} />
                <Route path='/fish' component={Fish} />
              </Switch>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
