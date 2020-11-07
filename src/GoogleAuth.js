import GoogleLogin, { GoogleLogout } from 'react-google-login';

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from './actions/navActions';

class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);
  }
  
  onLogin = (response) => {
    const currUser = response.googleId;
    this.props.updateUser(currUser, true);
  }

  onLoginFailure = (response) => {
    alert('Login Error Occurred');
  }

  onLogout = (response) => {
    this.props.updateUser('', false);
  }

  onLogoutFailure = (response) => {
    alert('Logout Error!');
  }

  render() {
    const OAUTH_KEY = process.env.REACT_APP_GOOGLE_OAUTH_API_KEY;
    return (
      !this.props.isSignedIn ?
    <GoogleLogin 
        clientId={OAUTH_KEY}
        buttonText="Login"
        onSuccess={this.onLogin}
        onFailure={this.onLoginFailure}
        cookiePolicy={'single_host_origin'}
    />
      : 
      <GoogleLogout
        clientId={OAUTH_KEY}
        buttonText="Logout"
        onSuccess={this.onLogout}
        onFailure={this.onLogoutFailure}
        cookiePolicy={'single_host_origin'}
      />
    );
  }
}

GoogleAuth.propTypes = {
  updateUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isSignedIn: state.data.isSignedIn,
  user: state.data.user
});

export default connect(mapStateToProps, {updateUser})(GoogleAuth);