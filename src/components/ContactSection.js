import { Button } from '@mui/material';


export default function ContactSection() {
    return (
        <>
            <div className='contact-section-container'>
                <div className='contact-section-text'>
                    <h1>Minim ipsum pariatur culpa mollit anim minim veniam velit.</h1>
                </div>

                <div className='contact-section-btn' >
                <Button  className='contact-btn' display="flex" variant='contained'
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