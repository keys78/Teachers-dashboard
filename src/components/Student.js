import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const Student = ({ student, i }) => {
    return (
        <NavLink className="lists-container"
            to={{
                pathname: `/classlist/studentdetails/${student.name} ${student.lastname}`,
                state: { students: student }
            }}
        >
            <div className="order1">{i + 1}</div>
            <Img className="order2" src={student.picture} />
            <div className="order3">
                {student.name} &nbsp;
                {student.middleName} &nbsp;
                {student.lastname}
            </div>
            <div className="order4">{student.gender}</div>
            <div className="order5">{student.age}</div>
            <div className="order5">{student.guardians_Info.occupation}</div>
            <div className="order5">{student.guardians_Info.relationship}</div>
            {/* <div className="order5">{student.relationship}</div> */}
            {/* <div className="order5">{student.value}</div> */}

            {/* <div>RELA{student.guardians_Info.relationship}</div> */}
            <div><img src="../assets/Icon ionic-md-arrow-dropright.png" /></div>
        </NavLink>
    )
}

const Img = styled.img`
    height: 45px;
    width: 45px;
    border-radius: 5555px;
    /* margin: auto; */
`

export default Student
