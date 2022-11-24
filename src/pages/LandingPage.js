import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from '../components/Item';
import slider from "../components/slider.json"; 
import LandingCards  from '../components/LandingCards';
import Footer from "../components/Footer";


export default function LandingPage()
{
    return (
        <>
            <Carousel>
                {
                    slider.map( item => <Item key={item.id} item={item} /> )
                }
            </Carousel>

            <LandingCards/>
            
            <Footer/>

        </>
    );
}
