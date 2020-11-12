import React, { Component } from 'react';

import GoogleAuth from '../GoogleAuth';

export default class Welcome extends Component {
    render() {
        return (
            <div className="welcomeBox">
                <div className="welcomeTitle">Welcome</div>
                <div className="welcomeIntro">
                    <img src="https://nooksguide.com/images/characters/nook.png" alt="" />
                    <div className="welcomeGreeting">
                        <p>
                            Hello, welcome to Nooks Guide.
                        </p>
                        <p>
                            This guide will show different information depending on what your island time and date is set to. Please Login before further action.
                        </p>
                        <GoogleAuth />
                    </div>
                </div>
            </div>
        );
    }
}
