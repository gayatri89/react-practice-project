import React, { useEffect,useState } from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
const NewsDetails = (match) => {
    const theme = useTheme();

    const [news,setNews] = useState();


    useEffect(()=>{
        fetchItems()
        console.log(match)

     },[]);
 
     const fetchItems = async () => {
         const res = await fetch(`https://fortnite-api.com/v2/news/br`);
         const items = await res.json();
         setNews(items)
         console.log(items)
     }

     return(
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    Live From Space
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Mac Miller
                </Typography>
                </CardContent>
            
            </Box>
            <CardMedia
                component="img"
                sx={{ width: "50%" }}
                image={news ? news.data.image : "/static/images/cards/live-from-space.jpg"}
                alt="Live from space album cover"
            />
        </Card>
     )

}

export default NewsDetails;