import React from 'react'
import styled from 'styled-components'

const Tags = ({ text, square }) => {
    return (
        <Tag square={!square} className="tags">
            { text }
        </Tag>
    )
}

const Tag = styled.div`
    background-color: var(--secondary);
    color: var(--neutral);
    padding:${({square}) => (square ? '5px 9px' : '9px 17px')} ;
    text-align: center;
    border-radius:${({square}) => (square ? '25px' : '4px')} ;
    width:${({square}) => (square ? '51px' : '55px')} ;
    height:${({square}) => (square ? '24px' : '41px')} ;
    font-size:${({square}) => (square ? '10px' : '15px')} ;
    font-weight:${({square}) => (square ? '100' : '500')} ;
`

export default Tags
