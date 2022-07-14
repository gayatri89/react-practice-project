import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Grid ,Container, Card, CardMedia, CardContent, Typography, CardActions} from '@mui/material';
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const News = () => {

    const [brNews,setBrNews] = useState();
    const [stwNews,setStwNews] = useState();
   
    useEffect(()=>{
       fetchItems()
    },[]);

    const fetchItems = async () => {
        const res = await fetch(`https://fortnite-api.com/v2/news`);
        const items = await res.json();

        if(items && items.data != null) {
            setBrNews(items.data.br)
            console.log(brNews)
        }
        if(items && items.data != null) {
            setStwNews(items.data.stw)
            console.log(stwNews)
        }
    }
 
    return (
        <Container fixed>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
                <h1>BR News</h1>
            </Grid>
                    {brNews && brNews.motds.map((item)=>{
                        return (
                            <Grid item xs={12} sm={6} md={3}>
                               <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={item.tileImage}
                                        alt={item.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                       {item.body}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                    <Link to={`/news/${item.id}`}>Learn More</Link>
                                    </CardActions>
                                    </Card>
                            </Grid>
                        )
                    })}

            <Grid item xs={12} sm={12} md={12}>
                <h1>STW News</h1>
            </Grid>
            {stwNews && stwNews.messages.map((item,id)=>{
                return (
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.image}
                                alt={item.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">{item.body}</Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={`/news/${id}`}>Learn More</Link>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}

         
            </Grid>
        </Container>

    )
}

export default News;