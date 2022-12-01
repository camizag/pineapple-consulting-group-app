import { Button } from '@mui/material';


export default function ContactSection() {
    return (
        <>  
            <div className='contact-section'>
                <div className='contact-section-text'>
                    <h1>Duis excepteur do incididunt cupidatat non aliquip Lorem officia eu.</h1>
                    <p>Ex mollit nulla nisi labore officia do deserunt velit occaecat anim.</p>
                </div>

                <div className='contact-section-btn' >
                <Button  className='contact-btn' variant='contained'
                    sx={{
                        color: "#ffffff",
                        backgroundColor: "#FAC136",
                         ':hover': {
                        bgcolor: '#FAC136', 
                        color: 'white',
                        }
                        }}
                    >
                    MAS INFORMACIÓN 
                </Button>
                </div>
            </div>   
        </>
    )
}