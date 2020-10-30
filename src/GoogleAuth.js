import Cookies from 'js-cookie';
import GoogleLogin from 'react-google-login';
import React from 'react';
class GoogleAuth extends React.Component {

  // getAccessToken = () => Cookies.get('access_token');
  // getRefreshToken = () => Cookies.get('refresh_token');
  // isAuthenticated = () => !!getAccessToken();

  // authenticate = async () => {
  //   responseGoogle = (response) => {
  //       console.log(response.profileObj);
  //   }

  //   if (getRefreshToken()) {
  //       try {
  //         const tokens = await refreshTokens() // call an API, returns tokens
    
  //         const expires = (tokens.expires_in || 60 * 60) * 1000
  //         const inOneHour = new Date(new Date().getTime() + expires)
    
  //         // you will have the exact same setters in your Login page/app too
  //         Cookies.set('access_token', tokens.access_token, { expires: inOneHour })
  //         Cookies.set('refresh_token', tokens.refresh_token)
    
  //         return true
  //       } catch (error) {
  //         redirectToLogin()
  //         return false
  //       }
  //     }
    
  //     redirectToLogin()
  //     return false
  //   }
  render() {
    const OAUTH_KEY = process.env.REACT_APP_GOOGLE_OAUTH_API_KEY;
    return (
    <GoogleLogin 
        clientId={OAUTH_KEY}
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
    />
    );
  }
}

export default GoogleAuth;