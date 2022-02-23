import Box from '@mui/material/Box'
import theme from '../theme/theme'
import { ThemeProvider } from '@mui/system'
import Typography from '@mui/material/Typography'

import tripBuilder from '../assets/TripBuilder.png'
import ProjectCard from './ProjectCard'



export default function Projects() {
    return (
        <div id={'projects'}>
            <ThemeProvider theme={theme}>
                {/* <div style={{ width: '100%', height: "100vh", margin: '20px 20px' }}> */}
                <Box 
                    display="flex"  flexDirection="column" width='100%'
                    sx= {{ 
                        height: { xs: '100vh', sm: '100vh'},
                        color: theme.palette.text.primary,
                    }}
                    justifyContent="space-evenly"
                >
                    <Typography variant="h4" sx= {{ margin: '0 0 0 25px' }}>Projects</Typography>
                    <Box sx={{flexDirection: {xs: 'column', md: 'row' }}} display="flex" alignItems='center' justifyContent="space-evenly">
                        <ProjectCard project={{
                            name: 'TripBuilder',
                            description: 'A vacation-planning app which allows users to create, save, and manage trips, events and more to a relational database and visualize the trip via the Google Maps API.',
                            technologies: 'Technologies used: React, Ruby w/ Sinatra and Active Record, Tailwind CSS',
                            image: require('../assets/TripBuilder.png'),
                            link: 'https://medium.com/@d-kilc/demo-a-vacation-planning-app-for-the-savvy-traveler-61e543cd87e7'
                        }}/>
                        <ProjectCard project={{
                            name: 'VT Skier',
                            description: 'A Yelp-style application which exposes data on Vermont ski resorts on a React front-end and persists user reviews to a simple JSON file backend.',
                            technologies: 'Technologies used: React, Material UI, json-server for persistence',
                            image: require('../assets/VTSkier.png'),
                            link: 'https://medium.com/@d-kilc/building-a-react-app-for-skiers-by-skiers-8dff3e5fc806'
                        }}/>
                    </Box>
                </Box>
            </ThemeProvider>
        </div>
    )
}