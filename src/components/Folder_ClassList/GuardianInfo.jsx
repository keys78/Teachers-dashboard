import React from 'react'
import { TextField, CssBaseline } from '@material-ui/core';

const GuardianInfo = ({ handleChange2, guardianRelatonship, guardianTitle, guardianName, guardianPhoneNumber, 
    guardianEmail, guardianResidence, guardianOccupation, guardianWorkMobile, guardianWorkAddress, usedStyle ,
}) => {
    return (
        <div>
            <CssBaseline />
            <TextField value={guardianRelatonship} onChange={handleChange2}
                variant="outlined" label="Relationship" name="relationship" fullWidth className={usedStyle} />

            <TextField value={guardianTitle} onChange={handleChange2}
                variant="outlined" label="Title" name="title" fullWidth className={usedStyle} />

            <TextField value={guardianName} onChange={handleChange2}
                variant="outlined" label="Name" name="name" fullWidth className={usedStyle} />

            <TextField value={guardianPhoneNumber} onChange={handleChange2}
                variant="outlined" label="Phone Number" name="phone" fullWidth className={usedStyle} />

            <TextField value={guardianEmail} onChange={handleChange2}
                variant="outlined" label="Email" name="email" fullWidth className={usedStyle} />

            <TextField value={guardianResidence} onChange={handleChange2}
                variant="outlined" label="Residence" name="residence" fullWidth className={usedStyle} />
                
            <TextField value={guardianOccupation} onChange={handleChange2}
                variant="outlined" label="Occupation" name="occupation" fullWidth className={usedStyle} />

            <TextField value={guardianWorkMobile} onChange={handleChange2}
                variant="outlined" label="Work Mobile Number" name="workMobile" fullWidth className={usedStyle} />
                
            <TextField value={guardianWorkAddress} onChange={handleChange2}
                variant="outlined" label="Work Address" name="workAddress" fullWidth className={usedStyle} />

          
        </div>
    )
}

export default GuardianInfo
