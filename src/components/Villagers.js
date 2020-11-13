import React, { Component } from 'react';
import { fetchNav, fetchVillagers } from '../actions/navActions';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Villagers extends Component {
    componentDidMount = () => {
        if (this.props.data.isSignedIn) {
            this.props.fetchVillagers(this.props.data.currentUser);
        } 
    }

    componentDidUpdate = () => {
        this.renderVillagerData();
    }

    renderVillagerData = () => {
        const currentVillagers = this.props.data.villagers;
        console.log(currentVillagers, 'THISIS CURRENT VILLAGERS');  
        // if (!this.props.data.isSignedIn) return (
        //     <div>
        //         Please login!
        //     </div>
        // )
        const allVillagers = this.props.data.navData;
        console.log(allVillagers);
        return allVillagers.map((element) => {
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
        })
    }

    render() {
        return (
            <div>
                {this.renderVillagerData()}


            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data
});

export default connect(mapStateToProps, { fetchNav, fetchVillagers })(Villagers);

