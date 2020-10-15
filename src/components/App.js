import Box from './Box';
import NavBar from './NavBar';
import React from 'react';
import Villagers from './Villagers';
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
        <Box
        />
        <Villagers 
        data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
