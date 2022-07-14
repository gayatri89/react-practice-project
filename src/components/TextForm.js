import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Grid, Container, Button } from '@mui/material';
import Stack from '@mui/material/Stack';

export default function TextForm() {

    let [text, setText] = useState('');
    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

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

    const handleFormat = (event, newFormats) => {
      setFormats(newFormats);
    };

  return (
    <Container maxWidth="lg">
 
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
        
                <Grid item  md={12}>
                    <h1>Your text summary</h1>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <h2>Preview</h2>
                    <p>{text}</p>

                    <Stack direction="row" spacing={1}>
                        <Button variant="contained" size="small" onClick={handleUpperCase}>UPPER CASE</Button>
                        <Button variant="contained" size="small" onClick={()=>setText(text.toLowerCase())} >lowercase</Button>
                        <Button variant="contained" size="small" onClick={handleSentenceCase}>Sentence case</Button>
                        <Button variant="contained" size="small" onClick={handleCapitalizedCase}>Capitalized case</Button>
                        <Button variant="contained" size="small" onClick={()=>setText('')}>Clear</Button>
                    </Stack>
                    <p>&nbsp;</p>
                </Grid>
            </Grid>

    </Container>
  )
}
