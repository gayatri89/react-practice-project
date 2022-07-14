import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Grid, Container, Card, CardMedia, CardContent, Typography, CardActions, Box, Button } from '@mui/material';
import Stack from '@mui/material/Stack';

export default function TextForm() {
    let [text, setText] = useState('');
    const handleUpperCase = () => {
        return setText(text.toUpperCase());
    }
  return (
    <Container fixed>

    <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
            <h1>Welcome to the Hello world</h1>
        </Grid>
        <Grid item  xs={12} sm={12} md={12}>

          <TextField
          id="myText"
          multiline
          rows={4}
          className="myText"
          onChange={(e)=>setText(e.target.value)}
        />
        
        <Grid item xs={12} sm={12} md={12}>
        <h1>&nbsp;</h1>

            {text}
            <h1>&nbsp;</h1>
            <Button variant="contained" onClick={handleUpperCase}>Uppercase</Button>
            <h1>&nbsp;</h1>
       
        </Grid>

        </Grid>
    </Grid>
    </Container>
  )
}
