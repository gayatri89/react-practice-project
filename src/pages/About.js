import React from "react";
import { Grid, Container, Card, CardMedia, CardContent, Typography, CardActions, Box } from '@mui/material';

const About = () => {
    return (
        <Container fixed>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <h1>About</h1>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography>
                            What is Lorem Ipsum?

                        </Typography>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography>
                            What is Lorem Ipsum?

                        </Typography>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About;