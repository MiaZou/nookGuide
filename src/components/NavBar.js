import React from 'react';
import styled from 'styled-components';

const Navul = styled.ul`
display: flex;
justify-content: space-around;
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: #128F6B;
    height: 72px;
`;

const IconWText = styled.div`
    font-size: 36px;
    color: #F0F8FF;
    padding: 18px;
`;

const NavBox = styled.li`
    font-size: 36px;
    color: #00FCFF;
    padding: 18px;
`;


const Navbar = () => {
    return (
        <Navul>
            <IconWText>
                ACNH Guide
            </IconWText>
            <NavBox Link to='/' className='item'>Home</NavBox>
            <NavBox Link to='/fish' className='item'>Fish</NavBox>
            <NavBox Link to='/bugs' className='item'>Bugs</NavBox>
            <NavBox Link to='/villagers' className='item'>Villagers</NavBox>
            <NavBox Link to='/fossils' className='item'>Fossils</NavBox>
        </Navul>
    );
};




export default Navbar;