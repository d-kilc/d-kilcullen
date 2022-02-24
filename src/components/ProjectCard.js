import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function ProjectCard({project}) {
    
    return(
        <Card sx={{ width: '400px', maxWidth: {xs: '75%'}, boxShadow: 3, mb: {xs: '15px', lg: '0px'} }}>
            <CardMedia
                sx= {{
                    maxHeight: {xs: '120px', sm: '190px', md: '240px'},
                }}
                component="img"
                src={project.image}
                alt={project.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {project.name}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                    {project.description}
                </Typography>
                <Typography variant="caption">
                    {project.technologies}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={project.link}>Blog Post and Demo</Button>
            </CardActions>
        </Card>
    )
}