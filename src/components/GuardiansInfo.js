import React from 'react'
import Form from './Form'

const GuardiansInfo = ({onClick}) => {
    return (
        <form>
            Guradians Info
            <button className="text-2xl text-red-500 mb-50" onClick={onClick}>Back</button>
            
            {/* <Form /> */}
        </form>
    )
}

export default GuardiansInfo
