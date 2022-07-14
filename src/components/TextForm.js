import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Grid, Container, Button } from '@mui/material';

export default function TextForm() {
    let [text, setText] = useState('');
    const handleUpperCase = () => {
        return setText(text.toUpperCase());
    }
    const handleSentenceCase = () => {
        const txt1 = text.charAt(0).toUpperCase();
        const txt2 = text.slice(1);
        return setText(txt1+txt2);
    }

    const handleCapitalizedCase = () => {
        let arr = text.toLowerCase().split(" ");
        arr && arr.map((item,index)=>{
            arr[index] = item.charAt(0).toUpperCase() + item.slice(1);
        })
        return setText(arr.join(" "));
    }

  return (
    <Container fixed>

    <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
            <h1>Enter the text to analyze below</h1>
        </Grid>
        <Grid item  xs={12} sm={12} md={12}>

          <TextField
          id="myText"
          multiline
          rows={4}
          className="myText"
          onChange={(e)=>setText(e.target.value)}
          value={text}
        />
        
        <Grid item xs={12} sm={12} md={12}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text}</p>
            <Button variant="contained" onClick={handleUpperCase}>UPPER CASE</Button>&nbsp;&nbsp;
            <Button variant="contained" onClick={()=>setText(text.toLowerCase())} >lowercase</Button>&nbsp;&nbsp;
            <Button variant="contained" onClick={handleSentenceCase}>Sentence case</Button>&nbsp;&nbsp;
            <Button variant="contained" onClick={handleCapitalizedCase}>Capitalized case</Button>&nbsp;&nbsp;
            <Button variant="contained" onClick={()=>setText('')}>Clear</Button>&nbsp;&nbsp;
            <h1>&nbsp;</h1>
        </Grid>

        </Grid>
    </Grid>
    </Container>
  )
}
