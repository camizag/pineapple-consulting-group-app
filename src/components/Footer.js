import React from 'react';

export default function Footer () {
    return (
        <>
           <div className="footer-container">

                <div className="logo-footer">
                    <img src="Logos_Logo secundario blanco.png" alt='Pineapple Consulting Group Logo'/>
                </div>
                
                <div className='footer-text-container'>
                    <div className='footer-section legal-footer'>
                        <h3>Legal stuff!</h3>

                        <ul>
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                            <li>License Agreements</li>
                        </ul> 
                    </div>

                    <div className='footer-section'>
                        <h3>Visit us!</h3>

                        <ul>
                            <li>42 y 5ta, 77710 Playa del Carmen, México</li>
                        </ul> 
                    </div>

                    <div className='footer-section'>
                        <h3>Follow us!</h3>

                        <ul>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul> 
                    </div>
                    

                    


                </div>

            </div>
        </>
    )
}