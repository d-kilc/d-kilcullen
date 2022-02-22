import avi from '../assets/dk-avi-zoomed.jpeg'
import theme from '../theme/theme'

import Bio from './Bio'
import Projects from './Projects'
import Skills from './Skills'

import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CreateIcon from '@mui/icons-material/Create'; 
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/system';

const drawerWidth = 320

export default function Nav() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [sectionOpen, setSectionOpen] = useState(true);
    

    const handleToggleSection = () => {
      setSectionOpen(!sectionOpen);
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <div>
            <Toolbar >
                <div>
                    <div align="center">
                        <Avatar
                            alt="Daniel Kilcullen"
                            src={avi}
                            sx={{ width: 150, height: 150, margin: 2 }}
                        />
                    </div>
                    <div>
                        <Typography variant="h5" noWrap component="div"
                            sx={{textAlign: 'center'}}>Daniel Kilcullen</Typography>
                        <Typography variant="overline" noWrap component="div"
                            sx={{margin: 2, textAlign: 'center'}}>Full-stack developer • Chicago, IL</Typography>
                    </div>
                </div>
            </Toolbar>
            <Divider />
            <List>
                <ListItem button key={'Bio'}>
                    <ListItemIcon>
                        <PersonIcon /> 
                    </ListItemIcon>
                <ListItemText primary={'Bio'} />
                </ListItem>
                <ListItem button key={'Projects'}>
                    <ListItemIcon>
                        <CodeIcon /> 
                    </ListItemIcon>
                <ListItemText primary={'Projects'} />
                </ListItem>
                <ListItem button key={'Skills'}>
                    <ListItemIcon>
                        <ThumbUpAltIcon /> 
                    </ListItemIcon>
                <ListItemText primary={'Skills'} />
                </ListItem>
                <ListItem button key={'Blog'}>
                    <ListItemIcon>
                        <CreateIcon /> 
                    </ListItemIcon>
                <ListItemText primary={'Blog'} />
                </ListItem>
                <ListItem button key={'My Resume'}>
                    <ListItemIcon>
                        <ContactPageIcon /> 
                    </ListItemIcon>
                <ListItemText primary={'My Resume'} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItemButton onClick={handleToggleSection}>
                    <ListItemIcon>
                        <EmojiPeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                    {sectionOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={sectionOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <LinkedInIcon />
                            </ListItemIcon>
                            <ListItemText primary="LinkedIn" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <GitHubIcon />
                            </ListItemIcon>
                            <ListItemText primary="GitHub" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <EmailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Email" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
      </div>
    )

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
    <ThemeProvider theme={theme} >
        <Box sx={{ display: 'flex' }}>

        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                backgroundColor: theme.palette.background.paper
            }}>
            <Toolbar sx= {{ display: {xs: "flex", sm: 'none'} }}> 
                <IconButton
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' }, color: theme.palette.text.base }}
                    >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div"
                    sx={{color: theme.palette.text.base }}
                >
                    Daniel Kilcullen
                </Typography>
            </Toolbar>
        </AppBar>

        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="menu headings"
        >
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
            {drawer}
            </Drawer>

            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
            {drawer}
            </Drawer>

        </Box>

        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            
        }} >
            <Bio />
            <Projects />
            <Skills />
        </Box>

        </Box>
    </ThemeProvider>
    )
}