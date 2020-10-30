import React from 'react';

class Welcome extends React.Component {
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
                            This guide will show different information depending on what your island time and date is set to. So before you go any Further please select your timezone, month, and hemisphere.
                            Once you have done this you are free to change them.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;