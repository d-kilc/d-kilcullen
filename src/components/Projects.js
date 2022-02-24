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
                <Box 
                    display="flex"  flexDirection="column" width='100%'
                    sx= {{ 
                        height: { xs: '100vh', sm: '100vh'},
                        color: theme.palette.text.primary,
                    }}
                    justifyContent="space-evenly"
                >
                    <Typography variant="h4" sx= {{ margin: '0 0 0 25px' }}>Projects</Typography>
                    <Box sx={{flexDirection: {xs: 'column', lg: 'row' }}} display="flex" alignItems='center' justifyContent="space-evenly">
                        <ProjectCard project={{
                            name: 'TripBuilder',
                            description: 'A vacation-planning app that allows users to create, save, and manage trips, events and more to a relational database and visualize the trip via the Google Maps API.',
                            technologies: 'Technologies used: React, Ruby w/ Sinatra and Active Record, Tailwind CSS',
                            image: require('../assets/TripBuilder.png'),
                            link: 'https://medium.com/@d-kilc/demo-a-vacation-planning-app-for-the-savvy-traveler-61e543cd87e7'
                        }}/>
                        <ProjectCard project={{
                            name: 'VT Skier',
                            description: 'A Yelp-style application for Vermont ski resorts. Users interact with a React front-end and can view and "like" resorts, see reviews, and post their own reviews to a simple backend.',
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