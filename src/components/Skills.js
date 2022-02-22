import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import JavascriptIcon from '@mui/icons-material/Javascript'
import StorageIcon from '@mui/icons-material/Storage'
import HubIcon from '@mui/icons-material/Hub'
import WebIcon from '@mui/icons-material/Web'
import CloudIcon from '@mui/icons-material/Cloud'
import DiamondIcon from '@mui/icons-material/Diamond'
import CreateIcon from '@mui/icons-material/Create'
import CoPresentIcon from '@mui/icons-material/CoPresent'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'

import theme from '../theme/theme'
import { ThemeProvider } from '@mui/system'

export default function Skills() {
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
                <Typography variant="h4" sx= {{ margin: '0 0 0 25px' }}>Skills</Typography>
                <Typography variant="h5" m={1} sx= {{ margin: '0 0 0 30px' }}>Technical</Typography>
                <Grid container spacing={1} m={1} sx= {{ paddingLeft: {xs: '20%',md:0}, marginLeft: {md: '20px'} }}>
                    <Grid item xs={12} md={6} lg={4} display="flex" >
                        <Box margin="auto 0" >
                            <JavascriptIcon sx={{border: '1px solid', borderRadius: '50%', padding: '5px', fontSize: {xs: 40, md: 60}}}/>
                        </Box>
                        <Box margin="auto auto auto 10px">
                            <Typography variant="button">JavaScript</Typography>
                            <br/>
                            <Typography variant="caption">React, vanilla JS</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} display="flex">
                        <Box margin="auto 0">
                            <WebIcon sx={{border: '1px solid', borderRadius: '50%', padding: '5px', fontSize: {xs: 40, md: 60}}}/>
                        </Box>
                        <Box margin="auto auto auto 10px">
                            <Typography variant="button">Web development</Typography>
                            <br/>
                            <Typography variant="caption">HTML5, CSS</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} display="flex">
                        <Box margin="auto 0">
                            <DiamondIcon sx={{border: '1px solid', borderRadius: '50%', padding: '5px', fontSize: {xs: 40, md: 60}}}/>
                        </Box>
                        <Box margin="auto auto auto 10px">
                            <Typography variant="button">Ruby</Typography>
                            <br/>
                            <Typography variant="caption">Rails</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} display="flex">
                        <Box margin="auto 0">
                            <StorageIcon sx={{border: '1px solid', borderRadius: '50%', padding: '5px', fontSize: {xs: 40, md: 60}}}/>
                        </Box>
                        <Box margin="auto auto auto 10px">
                            <Typography variant="button">Relational DB</Typography>
                            <br/>
                            <Typography variant="caption">Oracle SQL</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} display="flex">
                        <Box margin="auto 0">
                            <CloudIcon sx={{border: '1px solid', borderRadius: '50%', padding: '5px', fontSize: {xs: 40, md: 60}}}/>
                        </Box>
                        <Box margin="auto auto auto 10px">
                            <Typography variant="button">AWS, Google Cloud</Typography>
                            <br/>
                            <Typography variant="caption">AWS Certified Cloud Practitioner</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} display="flex">
                        <Box margin="auto 0">
                            <HubIcon sx={{border: '1px solid', borderRadius: '50%', padding: '5px', fontSize: {xs: 40, md: 60}}}/>
                        </Box>
                        <Box margin="auto auto auto 10px">
                            <Typography variant="button">Graph DB</Typography>
                            <br/>
                            <Typography variant="caption">Neo4j</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Typography variant="h5" m={1} sx= {{ margin: '0 0 0 25px' }}>Business</Typography>
                <Grid container spacing={1} m={1} sx={{ paddingLeft: {xs: '20%',md: 0}, marginLeft: {md: '20px'} }}>
                    <Grid item xs={12} md={6} lg={4} display="flex">
                        <Box margin="auto 0">
                            <CreateIcon sx={{border: '1px solid', borderRadius: '50%', padding: '5px', fontSize: {xs: 40, md: 60}}}/>
                        </Box>
                        <Box margin="auto auto auto 10px">
                            <Typography variant="button">Communication</Typography>
                            <br/>
                            <Typography variant="caption">Writing, public speaking</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} display="flex">
                        <Box margin="auto 0">
                            <AutoGraphIcon sx={{border: '1px solid', borderRadius: '50%', padding: '5px', fontSize: {xs: 40, md: 60}}}/>
                        </Box>
                        <Box margin="auto auto auto 10px">
                            <Typography variant="button">Reporting</Typography>
                            <br/>
                            <Typography variant="caption">Tableau, Power BI</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} display="flex">
                        <Box margin="auto 0">
                            <CoPresentIcon sx={{border: '1px solid', borderRadius: '50%', padding: '5px', fontSize: {xs: 40, md: 60}}}/>
                        </Box>
                        <Box margin="auto auto auto 10px">
                            <Typography variant="button">MS Office</Typography>
                            <br/>
                            <Typography variant="caption">PowerPoint, Excel</Typography>
                        </Box>
                    </Grid>
            
                </Grid>
            {/* </div> */}
            </Box>
        </ThemeProvider>
    )
}