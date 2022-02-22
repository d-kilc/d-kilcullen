import Box from '@mui/material/Box'
import theme from '../theme/theme'
import { ThemeProvider } from '@mui/system'


export default function Skills() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                height:  '100vh',
                width: `100%` ,
                backgroundColor: "green"
            }}>
                <div>ello world</div>
            </Box>
        </ThemeProvider>
    )
}