import { React, useState } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Grid, Container, Card, CardMedia, CardContent, Typography, CardActions, Box } from '@mui/material';
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Home = () => {


    return(
        <Container fixed>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <h1>Welcome to the Hello world</h1>
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://blog-www.pods.com/wp-content/uploads/2021/06/resized_FI_Getty_organized-closet.jpg"
                            alt=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Array
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            This section provides some examples of common array operations in JavaScript.
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Link to="/arr">Learn More</Link>
                        </CardActions>
                        </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://www.freecodecamp.org/news/content/images/2022/05/reactrouter6.png"
                            alt=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            React Router v6 is Here
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Closing in on a decade of client-side routing, React Router v6 takes the best features from previous versions—and its sister project, Reach Router—in our smallest and most powerful package yet.
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Link to="react-router">Learn More</Link>
                        </CardActions>
                        </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xsu7mmil1ruzy6mmk1cs.png"
                            alt=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            React Router v6 is Here
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Closing in on a decade of client-side routing, React Router v6 takes the best features from previous versions—and its sister project, Reach Router—in our smallest and most powerful package yet.
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Link to="exe">Learn More</Link>
                        </CardActions>
                        </Card>
                </Grid>

                    
            </Grid>
     
        </Container>
    )
}

export default Home;