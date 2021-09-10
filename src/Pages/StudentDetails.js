import React from 'react'
import { useLocation, useHistory } from "react-router-dom";
import styled from 'styled-components';
import Button from '../components/Button';

const StudentDetails = () => {
    const { state } = useLocation();
    const history = useHistory();

    const onClick = () =>{
        history.goBack()
    }


    return (
        <StudentDetailsContainer className="text-2xl text-black">
            <Button text={'Go Back'} onClick={onClick}/>
            Student Details
            <div className="w-40 h-40 my-8"><img className="rounded-full" src={state.students.picture} /></div>
            <div>Name:{state.students.name}</div>
            <div>Name:{state.students.gender}</div>
            <div>Name:{state.students.age}</div>
        </StudentDetailsContainer>
    )
}

const StudentDetailsContainer = styled.section`
    margin-left: 220px;
    /* padding:16px 139px 0 23px; */
`

export default StudentDetails
