import React, { useState } from 'react'
import styled from 'styled-components'
import ScoreSheet from '../components/Folder_ScoreSheet/ScoreSheet';

const Exam = () => {
   
    return (
        <ExamContainer>
          <ScoreSheet />

        </ExamContainer>
    )
}
const ExamContainer = styled.section`
    margin-left: 220px;
    padding:16px 139px 0 23px;
`
export default Exam