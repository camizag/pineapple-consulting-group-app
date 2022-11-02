import { Button } from '@mui/material'


export default function Item({item})
{
    return (
        <div className='slider-container' >
            <div className='slider-img'>
                <img src={item.image} alt=""/>
            </div>
            <div className='slider-color'>
                <h2 className='slider-text'>{item.title}</h2>

                <Button className="CheckButton" sx={{
                    color: "#ffffff",
                    backgroundColor: "#fdd835"
                }} 
                variant='contained'>
                    MAS INFORMACIÓN 
                </Button>
            </div>
        </div>
    )
}