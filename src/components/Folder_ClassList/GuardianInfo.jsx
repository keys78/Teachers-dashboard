import React from 'react'
import { TextField, CssBaseline } from '@material-ui/core';

const GuardianInfo = ({guardianRelatonship, handleChange2 }) => {
    return (
        <div>
            <CssBaseline />
            <TextField value={guardianRelatonship} onChange={handleChange2}
					variant="outlined" label="Relationship" name="relationship" fullWidth />
        </div>
    )
}

export default GuardianInfo
