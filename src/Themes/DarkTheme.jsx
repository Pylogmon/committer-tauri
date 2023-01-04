import { createTheme } from '@mui/material/styles';
import { grey, orange } from '@mui/material/colors';
export default createTheme({
    palette: {
        mode: 'dark',

        primary: {
            main: orange['200'],
        },
        background: {
            default: grey['900'],
            paper: grey['800']
        }
    }
});