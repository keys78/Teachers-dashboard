import React from 'react'
import styled from 'styled-components'
import Tags from './Tags'


const Navbar = ({ square }) => {
    return (
        <NavbarContainer>
            <div className="flex justify-between items-center">
                <div className="admin">
                    <Tags square={square} text={'Teacher'} />
                </div>
                <div className="flex items-center">
                    <img className="user-icon" src="../assets/Ellipse 7@2x.png" alt="user-icon" />
                    <User>John Doe</User>
                    <div className="initials"><Tags square={!square} text={'JD'} /></div>
                </div>
            </div>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
    padding:10px 0;
    background: var(--neutral);
    box-shadow: 0px 3px 6px #00000029;
    margin-left: 219px;
`

const User = styled.h1`
    margin: 0 32px;
    color: var(--neutral-b);
    font-weight: var(--bold);
    font-family: var(--openSans);
    
`

export default Navbar
