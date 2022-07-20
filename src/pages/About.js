import React from "react";
import { Grid, Container, Typography, Box } from '@mui/material';
import profileImg from "../IMG_9853.jpeg";
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
const About = () => {
    return (
        <Container fixed>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <h1>About</h1>
                    
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <List åsx={{ width: '100%', bgcolor: 'background.paper' }} >
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar
                                alt="Gayatri Rathva‚"
                                src={profileImg}
                                sx={{ width: 300, height: 300 }}
                            />
                            </ListItemAvatar>
                            <ListItemText 
                            primary={<>
                                <Typography variant="h5">Hi, I am web developer</Typography>
                            </>} 
                            secondary={
                                <>
                                <Typography variant="h6">Front End Developer / Wordpress Expert</Typography>
                                </>
                            }/>
                        </ListItem>
                     </List>   
                    
                    
                    </Box>
                </Grid>
              
            </Grid>
        </Container>
    )
}

export default About;