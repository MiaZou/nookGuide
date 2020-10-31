import ContentBox from './components/ContentBox';
import GoogleAuth from './GoogleAuth';
import NavBar from './components/NavBar';
import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <div className="navBarwLogin">
              <NavBar />
              <GoogleAuth />
            </div>
          <ContentBox />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
