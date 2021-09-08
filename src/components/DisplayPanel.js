import React from 'react'
import styled from 'styled-components'
import Boxes from './Boxes'
import ClassTags from './ClassTags'
import { classTagsId } from './data'

const DisplayPanel = ({ active }) => {
    return (
        <DisplayPanelContainer >

            <div className='flex'>
                {classTagsId.map((classTag, i) => (
                    <ClassTags key={i}
                        active={classTag.active}
                        text={classTag.class}
                    />
                ))}
            </div>

            <BoxesRoute>
                <Boxes />
            </BoxesRoute>

        </DisplayPanelContainer>
    )
}

const DisplayPanelContainer = styled.section`
    margin-left: 231px;
    padding: 22px 0 0 44px;
    
`

const BoxesRoute = styled.div`
    margin-top: 184px;
    margin-left: 165px;
    /* margin-right: 285px; */
`

export default DisplayPanel
