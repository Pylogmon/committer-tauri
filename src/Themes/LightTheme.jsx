import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
export default createTheme({
    palette: {
        mode: 'light',

        primary: {
            main: orange['500'],
        },
        background: {
            default: orange['50'],
            paper: orange['100']
        }
    }
})