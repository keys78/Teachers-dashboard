import React from 'react'
import styled from 'styled-components'
import { navLinks } from './data'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const Boxes = () => {
    return (
        <BoxesContainer>
            {(navLinks.slice(1).map((navLink, i) => (
                <NavLink
                    to={`${navLink.path}`}
                    exact
                >
                    <Box
                        whileHover={{ scale: 0.95 }} transiton={{ type: 'spring', stifness: 300 }}
                        key={i}>
                        {navLink.text}
                        {navLink.add}
                    </Box>
                </NavLink>
            )))}

        </BoxesContainer>
    )
}

const BoxesContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(5, 148px);
   grid-row-gap:20px ;
`
const Box = styled(motion.h1)`
    padding:52px 10px;
    text-align: center;
    background: #FFFFFF;
    border: 2px solid #A9A9A9;
    border-radius: 10px;
    width: 120px;
    height: 120px;
    font-size: var(--fontSize-s);
    font-family: var(--openSans);
    font-weight: var(--bold);
    cursor: pointer;
`

export default Boxes
