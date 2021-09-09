import React from 'react'
import Button from './Button'
import { rollCall } from './data'
import Search from './Search'
import StudentsList from './StudentsList'

const ClassListDisplay = ({toggleAddModal, searchTerm, setSearchTerm, showAddModal}) => {
    return (
        <section>
             <div className="flex justify-between items-center">
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <Button onClick={toggleAddModal} text={"Add New Student"}/>
            </div>

       

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

            <StudentsList searchTerm={searchTerm} setSearchTerm={setSearchTerm} showAddModal={showAddModal} toggleAddModal={toggleAddModal}/>
        </div>

        </section>
    )
}

export default ClassListDisplay
