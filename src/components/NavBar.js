import { Link } from 'react-router-dom';
import NavContext from '../reducers/navReducer';
import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
    <div className="navBars">
      <Link to="/villager" className="navItems"><img src="../images/Isabelle.png" alt="" />Villagers</Link>
      <Link to="/fish" className="navItems"><img src="../images/fish.png" alt="" />Fish</Link>
      <Link to="/sea" className="navItems"><img src="../images/seaCreatures.png" alt="" />Sea Creatures</Link>
      <Link to="/bug" className="navItems"><img src="../images/bug.png" alt="" />Bug</Link>
      <Link to="/fossils" className="navItems"><img src="../images/fossil.png" alt="" />Fossil</Link>
      <Link to="/art" className="navItems"><img src="../images/art.png" alt="" />Art</Link>
    </div>
    )};
}

export default NavBar;