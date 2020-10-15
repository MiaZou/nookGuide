import React from 'react';

const navItems = [
  { 'name': 'Villagers', 'icon': '../images/Isabelle.png', 'param': 'villagers/'},
  { 'name': 'Fish', 'icon': '../images/fish.png', 'param': 'fish/'},
  { 'name': 'Sea Creatures', 'icon': '../images/seaCreatures.png', 'param': 'sea/'},
  { 'name': 'Bugs', 'icon': '../images/bug.png', 'param': 'bugs/'},
  { 'name': 'Fossils', 'icon': '../images/fossil.png', 'param': 'fossils/'},
  { 'name': 'Art', 'icon': '../images/art.png', 'param': 'art/'},
];

class NavBar extends React.Component {
  state = {selectedIndex: 0};
  
  selectItem = (index) => {
    this.setState({selectedIndex: index});
    const param = navItems[index]['param'];
    this.props.renderSelect(param);
  };

  render() {
    return (
    <div className="navBars">
      {navItems.map((value, index) => {
      return (
        <div key={index} onClick={() => this.selectItem(index)} className='navItems'>
          <img src={value.icon} alt='' />
          {value.name}
        </div>
      );
      })}
    </div>
      
    )};
}

export default NavBar;