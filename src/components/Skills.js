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
                display="flex"  flexDirection="column"
                width='100%' height='100vh' 
                margin="20px 20px"
                // bgcolor="lightgreen"
                // alignItems="center"
                justifyContent="center"
            >
                <Typography variant="h4">Skills</Typography>
                {/* <Grid sx={{
                    display: 'grid',
                    gridTemplateColumns: {sm: 'repeat(3, 1fr)'},
                    bgcolor: (theme) =>
                        theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
                    color: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                    border: '1px solid',
                    borderColor: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                    p: 1,
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    height:  '100vh',
                    width: `100%`,
                    align: 'center'
                }}>  */}
                <Typography variant="h5">Technical</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={6} md={4}>
                        <JavascriptIcon sx={{border: '1px solid', borderRadius: '50%', padding: '5px', fontSize: 60, margin: 'auto'}}/>
                        <Typography variant="body2">JavaScript</Typography>
                        <Typography variant="caption">React, vanilla JS</Typography>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <DiamondIcon sx={{border: '1px solid', borderRadius: '50%', padding: '5px', fontSize: 60}}/>
                        <Typography variant="body2">Ruby</Typography>
                        <Typography variant="caption">Rails, Sinatra, ActiveRecord</Typography>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <WebIcon sx={{border: '1px solid', borderRadius: '50%', padding: '5px', fontSize: 60}}/>
                        <Typography variant="body2">Web development</Typography>
                        <Typography variant="caption">HTML5, CSS</Typography>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <StorageIcon sx={{border: '1px solid', borderRadius: '50%', padding: '5px', fontSize: 60}}/>
                        <Typography variant="body2">Relational DB</Typography>
                        <Typography variant="caption">Oracle SQL</Typography>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <HubIcon sx={{border: '1px solid', borderRadius: '50%', padding: '5px', fontSize: 60}}/>
                        <Typography variant="body2">Graph DB</Typography>
                        <Typography variant="caption">Neo4j</Typography>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <CloudIcon sx={{border: '1px solid', borderRadius: '50%', padding: '5px', fontSize: 60}}/>
                        <Typography variant="body2">AWS, Google Cloud</Typography>
                        <Typography variant="caption">AWS Certified Cloud Practitioner</Typography>
                    </Grid>
                </Grid>
                <Typography variant="h5">Business</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                        <CreateIcon sx={{border: '1px solid', borderRadius: '50%', padding: '5px', fontSize: 60}}/>
                        <Typography variant="body2">Communication</Typography>
                        <Typography variant="caption">Writing, public speaking</Typography>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <AutoGraphIcon sx={{border: '1px solid', borderRadius: '50%', padding: '5px', fontSize: 60}}/>
                        <Typography variant="body2">Reporting</Typography>
                        <Typography variant="caption">Tableau, Power BI</Typography>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <CoPresentIcon sx={{border: '1px solid', borderRadius: '50%', padding: '5px', fontSize: 60}}/>
                        <Typography variant="body2">MS Office</Typography>
                        <Typography variant="caption">PowerPoint, Excel</Typography>
                    </Grid>
            
                </Grid>
            {/* </div> */}
            </Box>
        </ThemeProvider>
    )
}