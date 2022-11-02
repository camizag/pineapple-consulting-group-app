import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Item({item})
{
    return (
        <div className='slider-container' >
            <div className='slider-img'>
                <img src={item.image} alt=""/>
            </div>
            <div className='slider-color'>
                <h2 className='slider-text'>{item.title}</h2>

                <Button className="CheckButton" //TODO: Align to left
                    sx={{
                    color: "#ffffff",
                    backgroundColor: "#fdd835",
                    ':hover': {
                    bgcolor: '#fdd835', 
                    color: 'white',
                    }
                }}
                variant='contained'>
                <Link to='/services'  style={{ 
                    color: 'inherit', 
                    textDecoration: 'inherit'
                    }}>
                MAS INFORMACIÓN 
                </Link> 
                </Button>

            </div>
        </div>
    )
}