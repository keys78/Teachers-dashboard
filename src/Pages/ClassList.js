import React, {useState} from 'react'
import styled from 'styled-components'
import ClassListDisplay from '../components/ClassListDisplay'

const ClassList = () => {
    const [showAddStudentModal, setShowAddStudentModal] = useState(false)

    const toggleAddStudentModal = () => {
        setShowAddStudentModal(!showAddStudentModal)
    }

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <ClassListContainer>
            <ClassListDisplay searchTerm={searchTerm} setSearchTerm={setSearchTerm} showAddStudentModal={showAddStudentModal} toggleAddStudentModal={toggleAddStudentModal}/>
        </ClassListContainer>
    )
}

const ClassListContainer = styled.section`
    margin-left: 220px;
    padding:16px 139px 0 23px;
`

export default ClassList;
