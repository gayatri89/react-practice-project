import { React, useState } from "react";
import { Grid, Container, Card, CardMedia, CardContent, Typography, CardActions, Box, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ArrayFunc = () => {

    const [expanded, setExpanded] = useState(false);
    const fruits = ['Apple','Banana','Orange','Strawberry','Cherry','Chikoo','Pinapple'];


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };

    const arr = () => {
        return fruits.length;
    }

    //printing the array size
    // console.log(fruits.length)

    //conver array into string
    // console.log(fruits.join(" | "))

    //access the array value using index
    // console.log(fruits[0],fruits[fruits.length - 2])

    //Find the index of an item in an array 
    // console.log(fruits.indexOf('Orange'))

    //Append an item to an array
    const newLength = fruits.push('Berry')
    // console.log(fruits.length)
    
    // Remove the last item from an array
    // const removedItem = fruits.pop()
    // console.log(fruits)

    const start = -2;
    const removedItem = fruits.splice(start);
    console.log(fruits);
    console.log(removedItem)

    return(
        <Container fixed>

            <h1>Array Practice</h1>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography>Array</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>This section provides some examples of common array operations in JavaScript.
                    <pre>
                        <code>
                           {
                               // 'fruits' array created using array literal notation.""
                               "const fruits = ['Apple','Banana','Orange','Strawberry','Cherry','Chikoo','Pinapple'];"
                                //printing the array size
                            // console.log(fruits.length)
                           }
                        </code>
                    </pre>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    React Route
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                React Router v6 is Here
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                </Typography>
                </AccordionDetails>
            </Accordion>

     
        </Container>
    )
}

export default ArrayFunc;