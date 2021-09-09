import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const Button = ({ text, onClick }) => {
    return (
        <ButtonCap
            onClick={onClick}
            whileHover={{ scale: 0.95 }} transiton={{ type: 'spring', stifness: 300 }}
        >
            <Text>{text}</Text>
        </ButtonCap>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}

const ButtonCap = styled(motion.button)``
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
