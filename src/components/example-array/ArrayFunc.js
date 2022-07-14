import { React, useState } from "react";
import { Grid, Container, Card, CardMedia, CardContent, Typography, CardActions, Box, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ArrayFunc = () => {

    const fruits = ['Apple','Banana','Orange','Strawberry','Cherry','Chikoo','Pinapple'];

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
            

            <Accordion>
                <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel1a-content"
                     id="panel1a-header"
                >
                    <Typography>Create an array</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>This section provides some examples of common array operations in JavaScript.
                    <pre class="brush: js notranslate">
                        <code>
                            <span class="token comment">// 'fruits' array created using array literal notation.</span>
<span class="token keyword">const</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Apple'</span><span class="token punctuation">,</span> <span class="token string">'Banana'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fruits<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2</span>

<span class="token comment">// 'fruits' array created using the Array() constructor.</span>
<span class="token keyword">const</span> fruits <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token string">'Apple'</span><span class="token punctuation">,</span> <span class="token string">'Banana'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fruits<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2</span>

<span class="token comment">// 'fruits' array created using String.prototype.split().</span>
<span class="token keyword">const</span> fruits <span class="token operator">=</span> <span class="token string">'Apple, Banana'</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">', '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fruits<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2</span>
</code></pre>
                    </Typography>
                </AccordionDetails>
                </Accordion>

                <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Create a string from an array</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>This example uses the join() method to create a string from the fruits array.</Typography>
                </AccordionDetails>
                </Accordion>

                <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel3a-header"
                >
                    <Typography>Access an array item by its index</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>This example uses the join() method to create a string from the fruits array.</Typography>
                </AccordionDetails>
                </Accordion>

                <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel4a-header"
                >
                    <Typography>Find the index of an item in an array</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>This example uses the indexOf() method to find the position (index) of the string "Banana" in the fruits array.</Typography>
                </AccordionDetails>
                </Accordion>

     
        </Container>
    )
}

export default ArrayFunc;