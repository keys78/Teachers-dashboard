import React from 'react'
import { rollCall } from './data'

const ClassListDisplay = () => {
    return (
        <div className="roll-container">
            {rollCall.map((roll, i) => (
                (roll.category === 'heading' &&
                    <div className="heading-container" key={i}>
                        <div className="order1">{roll.numTag}</div>
                        <div className="order2">{roll.img}</div>
                        <div className="order3">{roll.name}</div>
                        <div className="order4">{roll.gender}</div>
                        <div className="order5">{roll.age}</div>
                    </div>
                )
            ))}
            
            {rollCall.map((roll, i) => (
                (roll.category != 'heading' &&
                    <div className="lists-container" key={i}>
                        <div className="order1">{roll.numTag}</div>
                        <div className="order2">{roll.img}</div>
                        <div className="order3">{roll.name}</div>
                        <div className="order4">{roll.gender}</div>
                        <div className="order5">{roll.age}</div>
                        <div>??</div>
                    </div>
                )
            ))}
        </div>
    )
}

export default ClassListDisplay
