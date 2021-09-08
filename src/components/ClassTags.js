import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ClassTags = ({ text, active }) => {
    return (

        <ClassTagsContainer
            whileHover={{ scale: 0.95 }} transiton={{ type: 'spring', stifness: 300 }}
            active={active}>
            {text}
        </ClassTagsContainer>
    )
}

const ClassTagsContainer = styled(motion.div)`
    width: 47px;
    height: 32px;
    text-align: center;
    box-shadow: 0px 3px 6px #00000029;
    background:${({ active }) => (active ? 'var(--active)' : 'var(--neutral)')} ;
    color:${({ active }) => (active ? 'var(--neutral)' : 'var(--neutral-b)')} ;
    font-weight: var(--bold);
    font-family: var(--openSans);
    border-radius: 10px;
    padding:5px 10px;
    margin-right: 16px;
    cursor: pointer;
`

export default ClassTags
