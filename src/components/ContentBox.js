import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchNav } from '../actions/navActions';

class ContentBox extends React.Component {
    componentDidUpdate() {
        this.renderContent();
    }

    renderContent() {
        if (this.props.data.navParam === '') {
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
        } else if (this.props.data.navParam === 'villagers') {
            return this.props.data.navData.map(element => {
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
        });} else if (this.props.data.navParam === 'fish') {
            return this.props.data.navData.map(element => {
                console.log(element);
                return (
                <div className='fish' key={element['id']}>
                    <img src={element['icon_uri']} alt='' />
                    <div className='fishName'>{element['name']['name-USen']}</div>
                    <div className='fishPrice'>Price: {element['price']}</div>
                </div>
                );
            })
        } else if (this.props.data.navParam === 'sea') {
            return this.props.data.navData.map(element => {
                console.log(element);
                return (
                    <div className='sea' key={element['id']}>
                        <img src={element['icon_uri']} alt='' />
                        <div className='seaName'>{element['name']['name-USen']}</div>
                        <div className='seaSpeed'>{element['speed']}</div>
                        <div className='seaPrice'>Price: {element['price']}</div>
                    </div>
                )
            })
        } else if (this.props.data.navParam === 'bugs') {
            return this.props.data.navData.map(element => {
                console.log(element);
                return (
                    <div className='bug' key={element['id']}>
                        <img src={element['icon_uri']} alt='' />
                        <div className='bugName'>{element['name']['name-USen']}</div>
                        <div className='bugPrice'>{element['price']}</div>
                    </div>
                )
            })
        } else if (this.props.data.navParam === 'fossils') {
            return this.props.data.navData.map(element => {
                console.log(element);
                return (
                    <div className='fossils' key={element['id']}>
                        <img src={element['image_uri']} alt='' />
                        <div className='fossilName'>{element['name']['name-USen']}</div>
                        <div className='fossilPrice'>{element['price']}</div>
                    </div>
                )
            })
        } else if (this.props.data.navParam === 'art') {
            return this.props.data.navData.map(element => {
                console.log(element);
                return (
                    <div className='art' key={element['id']}>
                        <img src={element['image_uri']} alt='' />
                        <div className='artName'>{element['name']['name-USen']}</div>
                    </div>
                )
            })
        }
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