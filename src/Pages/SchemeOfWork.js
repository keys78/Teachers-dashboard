import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import MuiButton from '../components/MuiButton';
import { Save } from '@material-ui/icons'

const SchemeOfWork = () => {
    const [value, setValue] = useState('Edit this field to enter Scheme Of Work');

    const [revalue, setrevalue] = useState('');

    const saveScheme = () => {
        localStorage.setItem('scheme', (value))
        setrevalue(value.removeHTML());
        setValue('')
    }

    useEffect(() => {
        setrevalue(localStorage.getItem('scheme'))
    }, ['scheme'])


    return (
        <SchemeContainer>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
            <MuiButton text="SAVE" startIcon={<Save />} onClick={saveScheme} variant="contained" color="primary" />

            <textarea className="w-full border mt-12" rows="28" value={revalue}></textarea>

        </SchemeContainer>
    )
}
const SchemeContainer = styled.section`
    margin-left: 220px;
    padding:16px 139px 0 23px;
`
export default SchemeOfWork;








{/* <div>
                <table>
                    <tr>
                        <th>week</th>
                        <th>Topic</th>
                        <th>point</th>
                    </tr>
                    <tr>
                        <td><ReactQuill theme="snow" value={value} onChange={setValue}/></td>
                        <td><textarea type="text" placeholder="write"></textarea></td>
                        <td>Holocaust</td>
                    </tr>
                </table>
            </div> */}