import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchNav } from '../actions/navActions';

class NavBar extends React.Component {
  onClick = param => {
    console.log(param);
    this.props.fetchNav(param);
  }

  render() {
    return (
    <div className="navBars" >
      <Link to='/villagers' onClick={() => this.onClick('villagers')} className="navItems">
        <img src="../images/Isabelle.png" alt="" />Villagers
      </Link>
      <Link to='/fish' onClick={() => this.onClick('fish')} className="navItems">
        <img src="../images/fish.png" alt="" />Fish
      </Link>
      <Link to='/sea' onClick={(e) => this.onClick('sea')} className="navItems">
        <img src="../images/seaCreatures.png" alt="" />Sea Creatures
      </Link>
      <Link to='/bugs' onClick={(e) => this.onClick('bugs')} className="navItems">
        <img src="../images/bug.png" alt="" />Bug
      </Link>
      <Link to='/fossils' onClick={(e) => this.onClick('fossils')} className="navItems">
        <img src="../images/fossil.png" alt="" />Fossil
      </Link>
      <Link to='/art' onClick={(e) => this.onClick('art')} className="navItems">
        <img src="../images/art.png" alt="" />Art
      </Link>
    </div>
    )};
}

NavBar.propTypes = {
  fetchNav: PropTypes.func.isRequired
};

export default connect(null, {fetchNav})(NavBar);