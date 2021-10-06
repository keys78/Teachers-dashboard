import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    inputField: {
       background: 'white',
       color:'black'
    },

    submit_btn: {
        marginTop:'1rem',
    },
    alert: {
        position: 'fixed',
        top:100,
        display:'flex',
        alignItems: 'center',
        justifySelf: 'center',
    }
    
}));



export default useStyles
