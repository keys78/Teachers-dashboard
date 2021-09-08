import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Button = ({ text }) => {
    return (
        <ButtonCap
            whileHover={{ scale: 0.95 }} transiton={{ type: 'spring', stifness: 300 }}
        >
            <Text>{text}</Text>
        </ButtonCap>
    )
}

const ButtonCap = styled(motion.button)`
   
`

const Text = styled.h1`
    background-color: var(--primary);
    color: var(--neutral);
    padding:13px 29px;
    text-align: center;
    border-radius: 5px;
    width: 187px;
    font-size: var(--fontSize-s);
    font-family: var(--montserrat);
`

export default Button
