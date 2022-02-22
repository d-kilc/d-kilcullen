import Box from '@mui/material/Box'
import theme from '../theme/theme'
import { ThemeProvider } from '@mui/system'



export default function Projects() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                edge: 'start',
                height: '100vh',
                width: `100%` ,
                backgroundColor: "orange"
            }}>
                <div>hello verld</div>
            </Box>
        </ThemeProvider>
    )
}