import React from 'react'
import { Button, CssBaseline } from '@material-ui/core';
import useStyles from './Folder_ClassList/Styles';

const MuiButton = ({ text, color, variant, startIcon, onClick }) => {
    const classes = useStyles();

    return (
        <div>
            <CssBaseline />
            <Button type="submit"
                className={classes.submit_btn}
                startIcon={startIcon}
                color={color}
                onClick={onClick}
                variant={variant}>
                {text}
            </Button>
        </div>
    )
}

export default MuiButton;
