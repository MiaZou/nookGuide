import React from 'react';

class Villagers extends React.Component {
    renderData = (data) => {
        console.log(data[0]);
        if (data) {
            return data.map(element => {
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
    }

    render() {
        const data = this.props.data;
        
        return (
            <div className='villagerBox'>
                {this.renderData(data)}
            </div>
        );
    }
}

export default Villagers;