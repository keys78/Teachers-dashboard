import React from 'react'
import styled from 'styled-components'
import { navLinks } from './data'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const Sidenav = () => {
    return (
        <SidenavContainer>
            {(navLinks.map((navLink, i) => (
                <NavLink
                    to={`${navLink.path}`}
                    exact
                    key={i}
                >
                    <motion.h1
                        className="navLink"
                        whileHover={{ scale: 0.95 }} transiton={{ type: 'spring', stifness: 300 }}>
                        {navLink.text}
                    </motion.h1>
                </NavLink>
            )))}
        </SidenavContainer>
    )
}

const SidenavContainer = styled.section`
    width:220px;
    background: var(--advanced);
    color: var(--neutral);
    padding:78px 23px;
    position:fixed;
    top:0;
    left:0;
    height: 100vh;
`

export default Sidenav
