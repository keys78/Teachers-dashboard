import React from 'react'
import Search from '../components/Search'
import styled from 'styled-components'
import Button from '../components/Button'
import ClassListDisplay from '../components/ClassListDisplay'

const ClassList = () => {
    return (
        <ClassListContainer>
            <div className="flex justify-between items-center">
                <Search />
                <Button text={"Add New Student"}/>
            </div>

            <ClassListDisplay />

        </ClassListContainer>
    )
}

const ClassListContainer = styled.section`
    margin-left: 220px;
    padding:16px 139px 0 23px;
`

export default ClassList;
