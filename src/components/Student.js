import React from 'react'

const Student = ({ student, i }) => {
    return (
        <div className="lists-container" >
            <div className="order1">{i + 1}</div>
            <div className="order2">{student.img}</div>
            <div className="order3">{student.name}</div>
            <div className="order4">{student.gender}</div>
            <div className="order5">{student.age}</div>
            <div>??</div>
        </div>
    )
}

export default Student
