import PropTypes from 'prop-types';
import React from 'react';
import Welcome from './Welcome';
import { connect } from 'react-redux';
import { fetchNav } from '../actions/navActions';

class ContentBox extends React.Component {
    componentDidUpdate() {
        console.log('updates');
        this.renderContent();
    }

    renderContent() {
        if (this.props.data.navData.length === 0) {
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
        } else return this.props.data.navData.map(element => {
            return (
            <div className='villager' key={element['id']}>
                <img src={element['image_uri']} alt='' />
                <div className='villagerName'>{element['name']['name-USen']}</div>
                <div className='gender'>Gender: {element['gender']}</div>
                <div className='birthday'>Birthday: {element['birthday-string']}</div>
                <div className='species'>Species: {element['species']}</div>
                <div className='personality'>Personality: {element['personality']}</div>
                <div className='saying'>Saying: {element['saying']}</div>
            </div>
            );
        });
    }

    render() {
        return (
            <div>
                This is ContentBox
                {this.renderContent()}
            </div>
        );
    }
}

ContentBox.propTypes = {
    fetchNav: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    data: state.navData
});

export default connect(mapStateToProps, { fetchNav })(ContentBox);