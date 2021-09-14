import React from 'react'
import { useLocation, useHistory } from "react-router-dom";
import styled from 'styled-components';

const StudentDetails = () => {
    const { state } = useLocation();
    const history = useHistory();

    const onClick = () => {
        history.goBack()
    }


    return (
        <StudentDetailsContainer>
            <div className="text-sm" onClick={onClick}>
                <img src="../assets/Group 55.png" alt="arrow-back" />
            </div>
            
            <Avatar>
                <img className="rounded-full" src={state.students.picture} />
            </Avatar>

            <Basic_Info>Basic Info</Basic_Info>

            <DetailsContainer>
                <div>
                    <Label>First name</Label>
                    <ItemTitle>{state.students.name}</ItemTitle>
                </div>

                <div>
                    <Label>Middle name</Label>
                    <ItemTitle>{state.students.middleName}</ItemTitle>
                </div>

                <div>
                    <Label>Last name</Label>
                    <ItemTitle>{state.students.lastname}</ItemTitle>
                </div>

                <div>
                    <Label>Gender</Label>
                    <ItemTitle>{state.students.gender}</ItemTitle>
                </div>

                <div>
                    <Label>Age</Label>
                    <ItemTitle>{state.students.age}</ItemTitle>
                </div>

                <div>
                    <Label>Nationality</Label>
                    <ItemTitle>{state.students.nationality}</ItemTitle>
                </div>

                <Basic_Info>Attendance</Basic_Info>

            </DetailsContainer>

        </StudentDetailsContainer>
    )
}

const StudentDetailsContainer = styled.section`
    margin:0 0 0 220px;
    padding:0px 566px 0 16px;
`
const DetailsContainer = styled.div`
    padding-top:24px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 109px;
    grid-row-gap: 35px;
`
const Label = styled.label`
    display: block;
    font-size: var(--fontSize-s);
    font-family: var(--montserrat);
    font-weight: var(--semi-bold);
    margin-bottom: 10px;
`
const ItemTitle = styled.h1`
    display: block;
    font-size: var(--fontSize-l);
    font-family: var(--montserrat);
    font-weight: var(--bold);
`
const Avatar = styled.div`
    padding-top: 100px;
    height: 100px;
    width: 100px;
`
const Basic_Info = styled.h1`
    font-size: var(--fontSize-xl);
    font-family: var(--montserrat) ;
    font-weight: var(--bold);
    margin-top: 136px;
`
export default StudentDetails
