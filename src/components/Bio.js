import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import theme from '../theme/theme'

export default function Bio() {
    return (
        <Box component="main" sx={{ 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            width: { xs: '100%' },
            height: { xs: '100vh'},
            m: 0,
            color: theme.palette.text.primary,
        }}>
            <Toolbar />
            <Typography sx={{ mx: { xs: 3, md: 10 }, fontSize: {xs: 14, sm: 16} }} variant='body2' align="center" paragraph>
                Hi, I'm Daniel, and I'm a full-stack developer based in Chicago, Illinois, with experience in various client-facing roles including technology consulting and software implementation. Thanks for visiting!
            </Typography>
            <Typography sx={{ mx: { xs: 3, md: 10 }, fontSize: {xs: 14, sm: 16} }} variant='body2' align="center" paragraph>
                Prior to beginning my professional life, I studied Information Systems and Operations Management at Indiana University's Kelley School of Business, where I also earned an M.S. in Information Systems in 2019. It was around then that I was first exposed to software engineering in a formal capacity.
            </Typography>
            <Typography sx={{ mx: { xs: 3, md: 10 }, fontSize: {xs: 14, sm: 16} }} variant='body2' align="center" paragraph>
                As a technically-minded person, understanding the nuts and bolts of how things work at the most fundamental level is something that I've always gravitated towards. During my time as a consultant, I worked closely with developers on tasks like writing technical documentation and translating client needs into actionable specs, which inspired an even greater curiousity and desire to venture into software development. After a few years of self-study and exploration, I decided to make it my career.
            </Typography>
            <Typography sx={{ mx: { xs: 3, md: 10 }, fontSize: {xs: 14, sm: 16} }} variant='body2' align="center" paragraph>
                In my leisure, I love traveling, exploring the outdoors, and all things New York sports.
            </Typography>
        </Box>
    )
}