import React from 'react'
import Button from './Button'
import { rollCall } from './data'
import Search from './Search'
import StudentsList from './StudentsList'
import { useDispatch, useSelector } from 'react-redux'
import AddNewStudent from './Folder_ClassList/AddNewStudent'

const ClassListDisplay = ({toggleAddModal, searchTerm, setSearchTerm, showAddModal}) => {
    const classList = useSelector((state) => state.classList);

    const renderClassList = classList.map((val, index) => (
        <div className="fle">
            <p>{index + 1}</p>
            <p>{val.firstName}</p>
            <p>{val.middleName}</p>
            <p>{val.lastName}</p>
            <p>{val.age}</p>
            <p>{val.gender}</p>
            <p>{val.country}</p>
            <p>{val.guardianInfo.relationship}</p>
            <p>{val.guardianInfo.title}</p>
        </div>
    )) 


    return (
        <section>
             <div className="flex justify-between items-center">
                <Search setSearchTerm={setSearchTerm}/>
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

            <div>
                {renderClassList}
            </div>

            <AddNewStudent />

            {/* <StudentsList searchTerm={searchTerm} showAddModal={showAddModal} toggleAddModal={toggleAddModal}/> */}
        </div>

        </section>
    )
}

export default ClassListDisplay
