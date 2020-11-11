import React, { Component } from 'react'

export default class Villagers extends Component {
    render() {
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
        )
    }
}

