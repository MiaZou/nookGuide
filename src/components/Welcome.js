import GoogleLogin from 'react-google-login';
import React from 'react';

class Welcome extends React.Component {
    responseGoogle=(response) => {
        console.log(response.profileObj);
    }

    render() {
        const OAUTH_KEY = process.env.REACT_APP_GOOGLE_OAUTH_API_KEY;
        return(
            <div className="welcomeBox">
                Welcome
                <GoogleLogin 
                    clientId={OAUTH_KEY}
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}

export default Welcome;