import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
export default createTheme({
    palette: {
        mode: 'light',

        primary: {
            main: orange['500'],
        },
        secondary: {
            main: orange['200'],
        },
        background: {
            default: '#fff',
            paper: orange['50']
        }
    }
})