import React, {useState} from 'react'
import styled from 'styled-components'
import ClassListDisplay from '../components/ClassListDisplay'

const ClassList = () => {
    const [showAddModal, setShowAddModal] = useState()

    const toggleAddModal = () => {
        setShowAddModal(!showAddModal)
    }

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <ClassListContainer>
            <ClassListDisplay searchTerm={searchTerm} setSearchTerm={setSearchTerm} showAddModal={showAddModal} toggleAddModal={toggleAddModal}/>
        </ClassListContainer>
    )
}

const ClassListContainer = styled.section`
    margin-left: 220px;
    padding:16px 139px 0 23px;
`

export default ClassList;
