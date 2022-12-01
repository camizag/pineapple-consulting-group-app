import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CompAccordion() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <div className='compaccordion-container'>
                <div className='accordion-container'>
                    <div className='accordion-text'>
                        <h1>Ipsum amet velit ullamco ipsum incididunt et magna commodo proident aliquip Lorem reprehenderit duis laborum.</h1>
                    </div>
                    <Accordion className='accordions' expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{boxShadow: 0}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography sx={{ width: '20%', flexShrink: 0 }}>Accordion 1</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                        <Typography sx={{ width: '100%', flexShrink: 0, textAlign: 'left'}}>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{boxShadow: 0}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        >
                        <Typography sx={{ width: '20%', flexShrink: 0 }}>Accordion 2</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                        <Typography sx={{ width: '100%', flexShrink: 0, textAlign: 'left' }}>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{boxShadow: 0}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        >
                        <Typography sx={{ width: '20%', flexShrink: 0 }}>Accordion 3</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                        <Typography sx={{ width: '100%', flexShrink: 0, textAlign: 'left' }}>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{boxShadow: 0}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                        >
                        <Typography sx={{ width: '20%', flexShrink: 0 }}>Accordion 4</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                        <Typography sx={{ width: '100%', flexShrink: 0, textAlign: 'left' }}>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{boxShadow: 0}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5bh-content"
                        id="panel4bh-header"
                        >
                        <Typography sx={{ width: '20%', flexShrink: 0 }}>Accordion 5</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                        <Typography sx={{ width: '100%', flexShrink: 0, textAlign: 'left' }}>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className='img-accordion-container'>
                    <img src='https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80' alt=''/>
                </div>
            </div>    
        </>
    )
}