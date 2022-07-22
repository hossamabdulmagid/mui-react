import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Box, Paper, Stack, Grid, ButtonGroup, Button, Container, Typography } from '@mui/material'
import { useState } from 'react';
import NavGuest from './nav-guest';


const CarouselComponent = (props: any) => {
    const [Images, setImage] = useState([
        {
            src: "1.png",
            alt: "1.png"
        },
        {
            src: "2.png",
            alt: "2.png"
        },
        {
            src: "3.png",
            alt: "3.png"
        },
    ]);

    return (
        <>
            <Box sx={{ backgroundColor: 'rgb(24, 199, 225)', height: '750px' }}>
                <NavGuest />
                <Container>
                    <Carousel>
                        {Images.map((item, idx) => <Item key={idx} item={item} />)}
                    </Carousel>
                </Container>
            </Box>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Stack sx={{ textAlign: '' }}>
                            <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ padding: '5px' }}>
                                <Button size="small">Like</Button>
                                <Button size="small">Twiter</Button>
                                <Button size="small">Share</Button>
                            </ButtonGroup>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: '' }}>
                        <Typography sx={{ fontSize: '10px', textAlign: 'right' }}>
                            Already have your resumes on CV Creator?
                            <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ padding: '5px' }}>
                                <Button variant="outlined" aria-label="outlined button" sx={{ padding: '3px' }} size="small">Login</Button>
                            </ButtonGroup>
                        </Typography>

                    </Grid>
                </Grid>
            </Container>
            <hr />
            <>
                <Container >
                    <img src='press.png' alt='press.png' style={{
                        maxWidth: '100%',
                        height: 'auto',
                        padding: 0,
                        margin: 0,
                    }} />
                    <Typography sx={{ textAlign: 'center', padding: '15px', fontSize: '12px', marginTop: '20px' }}>
                        A wide range of templates to choose from
                    </Typography>
                </Container>
            </>
        </>
    );
}

const Item = (props: any) => {
    return (
        <Paper>
            <img src={props.item.src} alt={props.item.alt} style={{ display: 'block', width: '100%' }} />
        </Paper>
    )
}


export default CarouselComponent;