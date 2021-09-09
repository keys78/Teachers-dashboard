import React from 'react'
import { useLocation } from "react-router-dom";

const StudentDetails = () => {
    const { state } = useLocation();


    return (
        <div className="m-40 text-9xl text-black">
            Student Details
            <p>{state.students.name}</p>
        </div>
    )
}

export default StudentDetails
