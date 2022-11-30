import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

import { Link } from "react-router-dom";


export default function LandingCards() {
    return (
        <>    
            <div className='landing-container'>
                <div className='landing-title-container'> 
                    <h1 className="landing-cards-title">Our Services</h1>
                    <p>Ipsum deserunt nulla sint deserunt fugiat adipisicing duis do quis. Sunt magna in ea sit eu minim velit excepteur aliquip ea veniam sit. Dolor qui officia non proident ex sint. Sunt veniam cillum ullamco laboris mollit ut laborum proident culpa. Aliquip eiusmod velit labore aute tempor incididunt ut mollit.</p>
                </div> 
                
                <div className='landing-cards-container'>
                    
                    <Card  className="landing-cards" sx={{boxShadow: 0 , borderRadius: 0}}>
                    <Box sx={{ position: 'relative' }}> 
                    <Link className='navbar-link' to="/real-state">
                            <CardMedia
                            component="img"
                            height="350"
                            width="230"
                            image="https://images.unsplash.com/photo-1585551897231-77fe523c288a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                            alt="green iguana"
                            />
                            <Box display="flex" flexDirection='column'  justifyContent="center"
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '50%',
                                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                                    color: 'white',
                                    padding: '10px',
                                }}
                                >
                            <CardContent className='card-txt-container'>
                            <Typography className='card-txt' gutterBottom variant="h5">
                                Real State
                            </Typography>
                            </CardContent>
                            
                            <div className='cards-btn'>
                            <Button  variant="outlined" size="small"
                                sx={{
                                    color: '#FAC136',
                                    borderColor: '#FAC136',
                                    '&:hover': {
                                        borderColor: '#FAC136',
                                        boxShadow: 'none',},
                                }}
                                >
                                Link
                            </Button>
                            </div>
                            </Box>     
                    </Link> 
                    </Box>
                    </Card>

                    <Card  className="landing-cards" sx={{boxShadow: 0, borderRadius: 0}}>
                    <Box sx={{ position: 'relative' }}> 
                    <Link className='navbar-link' to="/development">
                            <CardMedia
                            component="img"
                            height="350"
                            width="230"
                            image="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                            alt="green iguana"
                            />
                            <Box display="flex" flexDirection='column'  justifyContent="center"
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '50%',
                                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                                    color: 'white',
                                    padding: '10px',
                                }}
                                >
                            <CardContent className='card-txt-container'>
                            <Typography className='card-txt' gutterBottom variant="h5">
                                Development
                            </Typography>
                            </CardContent>
                            
                            <div className='cards-btn'>
                            <Button  variant="outlined" size="small"
                                sx={{
                                    color: '#FAC136',
                                    borderColor: '#FAC136',
                                    '&:hover': {
                                        borderColor: '#FAC136',
                                        boxShadow: 'none',},
                                }}
                                >
                                Link
                            </Button>
                            </div>

                            </Box>
                    </Link>
                    </Box>
                    </Card>

                    <Card className="landing-cards" sx={{boxShadow: 0 , borderRadius: 0}}>
                    <Box sx={{ position: 'relative' }}> 
                    <Link className='navbar-link' to="/business-planning">
                            <CardMedia
                            component="img"
                            height="350"
                            width="230"
                            image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                            alt="green iguana"
                            />
                            <Box display="flex" flexDirection='column'  justifyContent="center"
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '50%',
                                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                                    color: 'white',
                                    padding: '10px',
                                }}
                                >
                            <CardContent className='card-txt-container'>
                            <Typography className='card-txt' gutterBottom variant="h5">
                                Consulting for Strategic Business Planning
                            </Typography>
                            </CardContent>

                            <div className='cards-btn'>
                            <Button  variant="outlined" size="small"
                                sx={{
                                    color: '#FAC136',
                                    borderColor: '#FAC136',
                                    '&:hover': {
                                        borderColor: '#FAC136',
                                        boxShadow: 'none',},
                                }}
                                >
                                Link
                            </Button>
                            </div>
                            </Box>
                    </Link>
                    </Box>
                    </Card>

                    <Card  className="landing-cards" sx={{boxShadow: 0 , borderRadius: 0}}>
                    <Box sx={{ position: 'relative' }}> 
                    <Link className='navbar-link' to="/professional-development">
                            <CardMedia
                            component="img"
                            height="350"
                            width="230"
                            image="https://images.unsplash.com/photo-1541535881962-3bb380b08458?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"
                            alt="green iguana"
                            />
                            <Box display="flex" flexDirection='column'  justifyContent="center"
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '50%',
                                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                                    color: 'white',
                                    padding: '10px',
                                }}
                                >
                            <CardContent className='card-txt-container'>
                            <Typography className='card-txt' gutterBottom variant="h5">
                                Career / Professional Development 
                            </Typography>
                            </CardContent>
                            <div className='cards-btn'>
                            <Button  variant="outlined" size="small"
                                sx={{
                                    color: '#FAC136',
                                    borderColor: '#FAC136',
                                    '&:hover': {
                                        borderColor: '#FAC136',
                                        boxShadow: 'none',},
                                }}
                                >
                                Link
                            </Button>
                            </div>

                            </Box>
                    </Link>
                    </Box>
                    </Card>

                    <Card  className="landing-cards" sx={{boxShadow: 0, borderRadius: 0}}>
                    <Box sx={{ position: 'relative' }}> 
                    <Link className='navbar-link' to="/non-profit">
                            <CardMedia
                            component="img"
                            height="350"
                            width="230"
                            image="https://images.unsplash.com/photo-1581578017426-04fbc2b0511e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                            alt="green iguana"
                            />
                            <Box display="flex" flexDirection='column'  justifyContent="center"
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '50%',
                                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                                    color: 'white',
                                    padding: '10px',
                                }}
                                >
                            <CardContent className='card-txt-container'>
                            <Typography className='card-txt' gutterBottom variant="h5">
                                Non-profit Work
                            </Typography>
                            </CardContent>

                            <div className='cards-btn'>
                            <Button  variant="outlined" size="small"
                                sx={{
                                    color: '#FAC136',
                                    borderColor: '#FAC136',
                                    '&:hover': {
                                        borderColor: '#FAC136',
                                        boxShadow: 'none',},
                                }}
                                >
                                Link
                            </Button>
                            </div>
                            </Box>
                    </Link>
                    </Box>
                    </Card>
                </div>
            </div>
        </>
    
    )
}