import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { Link } from "react-router-dom";


export default function LandingCards() {
    return (
        <>
            <h1 className="landing-cards-title">Our Services</h1>
            
            <div className='landing-cards-container'>
                <Card  className="landing-cards">
                <Link className='navbar-link' to="/real-state">
                        <CardMedia
                        component="img"
                        height="230"
                        width="230"
                        image="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="green iguana"
                        />
                        <CardContent className='card-txt-container'>
                        <Typography className='card-txt' gutterBottom variant="h5">
                            Real State
                        </Typography>
                        </CardContent>
                </Link>
                </Card>

                <Card  className="landing-cards">
                <Link className='navbar-link' to="/development">
                        <CardMedia
                        component="img"
                        height="230"
                        width="230"
                        image="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="green iguana"
                        />
                        <CardContent className='card-txt-container'>
                        <Typography className='card-txt' gutterBottom variant="h5">
                            Development
                        </Typography>
                        </CardContent>
                </Link>
                </Card>

                <Card className="landing-cards">
                <Link className='navbar-link' to="/business-planning">
                        <CardMedia
                        component="img"
                        height="230"
                        width="230"
                        image="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="green iguana"
                        />
                        <CardContent className='card-txt-container'>
                        <Typography className='card-txt' gutterBottom variant="h5">
                            Consulting for Strategic Business Planning
                        </Typography>
                        </CardContent>
                </Link>
                </Card>

                <Card  className="landing-cards">
                <Link className='navbar-link' to="/professional-development">
                        <CardMedia
                        component="img"
                        height="230"
                        width="230"
                        image="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="green iguana"
                        />
                        <CardContent className='card-txt-container'>
                        <Typography className='card-txt' gutterBottom variant="h5">
                            Career / Professional Development 
                        </Typography>
                        </CardContent>
                </Link>
                </Card>

                <Card  className="landing-cards">
                <Link className='navbar-link' to="/non-profit">
                        <CardMedia
                        component="img"
                        height="230"
                        width="230"
                        image="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="green iguana"
                        />
                        <CardContent className='card-txt-container'>
                        <Typography className='card-txt' gutterBottom variant="h5">
                            Non-profit Work
                        </Typography>
                        </CardContent>
                </Link>
                </Card>
                
                
            </div>
        </>
    
    )
}