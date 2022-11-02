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

                <div className='btn-container'>
                    <Button className="CheckButton" 
                        sx={{
                        color: "#ffffff",
                        backgroundColor: "#FAC136",
                        ':hover': {
                        bgcolor: '#FAC136', 
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
        </div>
    )
}