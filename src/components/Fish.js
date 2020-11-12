import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNav } from '../actions/navActions';

class Fish extends Component {
    render() {
        return (
            <div>Fish</div>
            // <div className='fish' key={element['id']}>
            //         <img src={element['icon_uri']} alt='' />
            //         <div className='fishName'>{element['name']['name-USen']}</div>
            //         <div className='fishPrice'>Price: {element['price']}</div>
            //     </div>
        )
    }
}


const mapStateToProps = state => ({
    data: state.data
});

export default connect(mapStateToProps, { fetchNav })(Fish);