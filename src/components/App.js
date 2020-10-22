import Box from './Box';
import Fish from './Fish';
import NavBar from './NavBar';
import React from 'react';
import Villagers from './Villagers';
import Welcome from './Welcome';
import acnh from '../api/acnhapi';

class App extends React.Component {
  state = {'param' : 'villagers/', 'data':''};

  componentDidMount() {
    this.onCurrent(this.state.param);
  }
  
  onSelect = (param) => {
    this.setState({'param': param});
  };

  onCurrent = async param => {
    const response = await acnh.get(param);
    this.setState({'data':response.data});
  }

  render() {
    return (
      <div className="App">
        App
        <NavBar
          renderSelect={this.onSelect}
        />
        <Welcome />
        <Box
        />
        {/* <Villagers 
        data={this.state.data}
        /> */}
        <Fish />
      </div>
    );
  }
}

export default App;
