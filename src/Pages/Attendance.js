import React from 'react'
import styled from 'styled-components'
import AttendanceList from '../components/AttendanceList'

const Attendance = () => {
    return (
        <AttendanceContainer>
           <AttendanceList />
        </AttendanceContainer>
    )
}

const AttendanceContainer = styled.section`
    margin:0 0 0 220px;
    padding:0px 566px 0 16px;
`

export default Attendance
