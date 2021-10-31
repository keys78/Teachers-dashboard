import React from 'react'
import { rollCall } from './data'
import Search from './Search'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import AddNewStudent from './Folder_ClassList/AddNewStudent'
import MuiButton from './MuiButton'
import { ControlPoint } from '@material-ui/icons'

const ClassListDisplay = ({ toggleAddStudentModal, searchTerm, setSearchTerm, showAddStudentModal }) => {
    const classList = useSelector((state) => state.classList);

    const renderClassList = classList.map((val, index) => (
        <NavLink
            to={{
                pathname: `/classlist/studentdetails/${val.firstName} ${val.lastName}`,
                state: { classList: val }
            }}

            className="fle">
            <p>{index + 1}</p>
            <img className="w-10" src={val.avatar} alt={val.alt} />
            <p>{val.firstName}</p>
            <p>{val.middleName}</p>
            <p>{val.lastName}</p>
            <p>{val.age}</p>
            <p>{val.gender}</p>
            <p>{val.country}</p>
            <p>{val.guardianInfo.relationship}</p>
            <p>{val.guardianInfo.title}</p>
            Hello
        </NavLink>
    ))


    return (
        <section>
            <div className="flex justify-between items-center">
                <Search setSearchTerm={setSearchTerm} />
                <MuiButton
                    onClick={toggleAddStudentModal}
                    startIcon={<ControlPoint />}
                    variant="contained"
                    color="primary"
                    text={'Add New Student'}
                />

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

                <AddNewStudent showAddStudentModal={showAddStudentModal} toggleAddStudentModal={toggleAddStudentModal} />

                {/* <StudentsList searchTerm={searchTerm} /> */}
            </div>

        </section>
    )
}

export default ClassListDisplay
