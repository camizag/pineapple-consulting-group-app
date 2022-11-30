import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from '../components/Item';
import slider from "../components/slider.json"; 
import LandingCards  from '../components/LandingCards';
import Footer from "../components/Footer";
import Accordion from '../components/CompAccordion';
import Chart from '../components/Chart';
import TripleDiv from '../components/TripleDiv';
import ContactSection from '../components/ContactSection';

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

            <ContactSection/>

            <Accordion/>
            
            <Chart/>
            
            <TripleDiv/>

            <Footer/>

        </>
    );
}
