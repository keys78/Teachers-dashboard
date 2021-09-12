import React, { useState } from 'react'
import AddStudent from './AddStudent'
import { rollCall } from './data'
import Student from './Student'



const StudentsList = ({ showAddModal, toggleAddModal, searchTerm }) => {
    const [students, setStudents] = useState(rollCall)

    const addStudent = (student) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newStudent = { id, ...student }
        setStudents([...students, newStudent])
    }
    return (
        <div>
            {students.filter((val) => {
                if ({ searchTerm } === "") {
                    return val
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.age.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                    return val
                }
            }).sort((a, b) => a.name.localeCompare(b.name))
                .map((student, i) => (
                    (student.category !== 'heading' &&
                        <Student i={i} key={i} student={student} />
                    )
                ))}

            {showAddModal &&
                <AddStudent toggleAddModal={toggleAddModal}
                    showAddModal={showAddModal} onAdd={addStudent}
                />}
        </div>
    )
}

export default StudentsList
