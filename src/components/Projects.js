import Box from '@mui/material/Box'
import theme from '../theme/theme'
import { ThemeProvider } from '@mui/system'
import Typography from '@mui/material/Typography'




export default function Projects() {
    return (
        <ThemeProvider theme={theme}>
            {/* <div style={{ width: '100%', height: "100vh", margin: '20px 20px' }}> */}
            <Box 
                display="flex"  flexDirection="column" width='100%'
                sx= {{ 
                    height: { xs: '100vh', sm: '100vh'},
                    color: theme.palette.text.primary,
                }} 
                // padding="10px 10px"
                // bgcolor="lightgreen"
                // alignItems="center"
                justifyContent="space-evenly"
            >
                <Typography variant="h4" sx= {{ margin: '0 0 0 25px' }}>Projects</Typography>
            </Box>
        </ThemeProvider>
    )
}