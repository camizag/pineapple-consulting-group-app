import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from '../components/Item';
import slider from "../components/slider.json"; 

export default function Slider()
{
    return (
        <Carousel>
            {
                slider.map( item => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}
