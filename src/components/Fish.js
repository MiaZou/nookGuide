import React, { Component } from 'react'

export default class Fish extends Component {
    render() {
        return (
            <div className='fish' key={element['id']}>
                    <img src={element['icon_uri']} alt='' />
                    <div className='fishName'>{element['name']['name-USen']}</div>
                    <div className='fishPrice'>Price: {element['price']}</div>
                </div>
        )
    }
}
