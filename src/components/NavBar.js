import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchNav } from '../actions/navActions';

class NavBar extends React.Component {
  onClick(param) {
    // console.log(param);
    this.props.fetchNav(param);
  }

  render() {
    return (
    <div className="navBars">
      <div onClick={(e) => this.onClick('villagers')} value="villagers" className="navItems"><img src="../images/Isabelle.png" alt="" />Villagers</div>
      <div className="navItems"><img src="../images/fish.png" alt="" />Fish</div>
      <div className="navItems"><img src="../images/seaCreatures.png" alt="" />Sea Creatures</div>
      <div className="navItems"><img src="../images/bug.png" alt="" />Bug</div>
      <div className="navItems"><img src="../images/fossil.png" alt="" />Fossil</div>
      <div className="navItems"><img src="../images/art.png" alt="" />Art</div>
    </div>
    )};
}

NavBar.propTypes = {
  fetchNav: PropTypes.func.isRequired
};

export default connect(null, {fetchNav})(NavBar);