import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Contact() {
   
    return (
        <>  
            <div>
                <h1 className="contact-title">Contact</h1>
                <p className="contact-p">Eu pariatur ea voluptate dolore eu nostrud eiusmod sint eiusmod enim aute do. Labore voluptate non dolor consectetur. Proident magna nostrud do sit non duis duis labore incididunt proident labore. Pariatur tempor fugiat officia ea ex incididunt duis sint eiusmod officia sint. Veniam sint esse et esse deserunt occaecat magna veniam proident quis sit laboris culpa id. Non elit aliqua sit ad officia. Mollit sunt occaecat voluptate elit nisi.</p>
                <p className="contact-p">Id incididunt labore ex sit ex est occaecat. Aliquip eiusmod mollit ad proident aute exercitation consequat laboris. Aute est eu dolor cillum sint ipsum irure enim magna eiusmod est voluptate. Veniam velit elit veniam duis sit exercitation sunt quis pariatur ex duis est enim.</p>
            </div>

            <Box //TODO Fix the spacing
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' }, 
                }}
                noValidate
                autoComplete="off"
                >
                <TextField 
                    id="outlined-basic" 
                    label="Name" 
                    variant="outlined" 
                    />
                <TextField 
                    id="outlined-basic" 
                    label="Company" 
                    variant="outlined" 
                    />
                <TextField 
                    id="outlined-basic" 
                    label="Phone Number" 
                    variant="outlined" 
                    />
                <TextField 
                    id="outlined-basic"     
                    label="Email"  
                    variant="outlined" 
                    />
                <TextField 
                    id="outlined-basic" 
                    label="Address/City" 
                    variant="outlined" 
                    />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Comments"
                    multiline
                    maxRows={5}
                    />
            </Box>

        </>
    )
}