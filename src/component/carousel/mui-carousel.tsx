import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Box, Paper, Stack, Grid, ButtonGroup, Button, Container, Typography } from '@mui/material'
import { useState } from 'react';
import NavGuest from './nav-guest';

const CarouselComponent = (props: any) => {

    const [Images, setImage] = useState([
        {
            src: "https://production-1d741-6fa29.firebaseapp.com/1.png",
            alt: "https://production-1d741-6fa29.firebaseapp.com/1.png"
        },
        {
            src: "https://production-1d741-6fa29.firebaseapp.com/2.png",
            alt: "https://production-1d741-6fa29.firebaseapp.com/2.png"
        },
        {
            src: "https://production-1d741-6fa29.firebaseapp.com/3.png",
            alt: "https://production-1d741-6fa29.firebaseapp.com/3.png"
        },
    ]);


   
    return (
        <>
            <Box sx={{ backgroundColor: 'rgb(24, 199, 225)', height: 'auto' }}>
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
                <Container>
                    <img
                        src='https://production-1d741-6fa29.firebaseapp.com/press.png'
                        alt='https://production-1d741-6fa29.firebaseapp.com/press.png'
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            padding: 0,
                            margin: 0,
                        }}
                    />
                    <Typography sx={{ textAlign: 'center', padding: '15px', fontSize: '12px', marginTop: '20px', marginBottom: '20px' }}>
                        A wide range of templates to choose from
                    </Typography>
                    <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                        <Grid item xs={6}>
                            <Box sx={{
                                boxShadow: 3,
                                "&:hover": {
                                    margin: '5px',
                                    border: '2px solid grey'
                                }
                            }}>
                                <img
                                    src="https://production-1d741-6fa29.firebaseapp.com/cv1.png"
                                    alt="https://production-1d741-6fa29.firebaseapp.com/cv1.png"
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        padding: 0,
                                        margin: 0,
                                    }}
                                />
                                <hr />
                                <small>Headline</small>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{
                                boxShadow: 3,
                                "&:hover": {
                                    margin: '5px',
                                    border: '2px solid grey'
                                }
                            }}>
                                <img
                                    src="https://production-1d741-6fa29.firebaseapp.com/cv2.png"
                                    alt="https://production-1d741-6fa29.firebaseapp.com/cv2.png"
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        padding: 0,
                                        margin: 0,
                                    }}
                                />
                                <hr />
                                <small>Mocca</small>
                            </Box>
                        </Grid>

                        <Grid item xs={3}>
                            <Box sx={{
                                boxShadow: 3,
                                "&:hover": {
                                    margin: '5px',
                                    border: '2px solid grey'
                                }
                            }}>
                                <img
                                    src="https://production-1d741-6fa29.firebaseapp.com/cv3.png"
                                    alt="https://production-1d741-6fa29.firebaseapp.com/cv3.png"
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        padding: 0,
                                        margin: 0,
                                    }}
                                />
                                <hr />
                                <small>Executive</small>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>

                            <Box sx={{
                                boxShadow: 3,
                                "&:hover": {
                                    margin: '5px',
                                    border: '2px solid grey'
                                }
                            }}>
                                <img
                                    src="https://production-1d741-6fa29.firebaseapp.com/cv4.png"
                                    alt="https://production-1d741-6fa29.firebaseapp.com/cv4.png"
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        padding: 0,
                                        margin: 0,
                                    }}
                                />
                                <hr />
                                <small>Elegant</small>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{
                                boxShadow: 3,
                                "&:hover": {
                                    margin: '5px',
                                    border: '2px solid grey'
                                }
                            }}>
                                <img
                                    src="https://production-1d741-6fa29.firebaseapp.com/cv5.png"
                                    alt="https://production-1d741-6fa29.firebaseapp.com/cv5.png"
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        padding: 0,
                                        margin: 0,
                                    }}
                                />
                                <hr />
                                <small>Bold</small>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{
                                boxShadow: 3,
                                "&:hover": {
                                    margin: '5px',
                                    border: '2px solid grey'
                                }
                            }}>
                                <img
                                    src="https://production-1d741-6fa29.firebaseapp.com/cv6.png"
                                    alt="https://production-1d741-6fa29.firebaseapp.com/cv6.png"
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        padding: 0,
                                        margin: 0,
                                    }}
                                />
                                <hr />
                                <small>Literateur</small>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{
                                boxShadow: 3,
                                "&:hover": {
                                    margin: '5px',
                                    border: '2px solid grey'
                                }
                            }}>
                                <img
                                    src="https://production-1d741-6fa29.firebaseapp.com/cv6.png"
                                    alt="https://production-1d741-6fa29.firebaseapp.com/cv6.png"
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        padding: 0,
                                        margin: 0,
                                    }}
                                />
                                <hr />
                                <small>Finesse</small>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{
                                boxShadow: 3,
                                "&:hover": {
                                    margin: '5px',
                                    border: '2px solid grey'
                                }
                            }}>
                                <img
                                    src="https://production-1d741-6fa29.firebaseapp.com/cv7.png"
                                    alt="https://production-1d741-6fa29.firebaseapp.com/cv7.png"
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        padding: 0,
                                        margin: 0,
                                    }}
                                />
                                <hr />
                                <small>Metro</small>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{
                                boxShadow: 3,
                                "&:hover": {
                                    margin: '5px',
                                    border: '1px solid grey'
                                }
                            }}></Box>

                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{
                                boxShadow: 3,
                                "&:hover": {
                                    margin: '5px',
                                    border: '2px solid grey'
                                }
                            }}></Box>

                        </Grid>
                    </Grid>
                    <Stack sx={{ alignItems: 'center', marginTop: '30px', marginBottom: '30px' }}>
                        <img
                            src='https://production-1d741-6fa29.firebaseapp.com/premum.png'
                            alt='https://production-1d741-6fa29.firebaseapp.com/premum.png'
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                padding: 0,
                                margin: 0,
                            }}
                        />
                    </Stack>
                </Container>
            </>
        </>
    );
}

const Item = (props: any) => {
    return (
        <Paper>
            <img
                src={props.item.src}
                alt={props.item.alt}
                style={{ display: 'block', width: '100%' }}
            />
        </Paper>
    )
}


export default CarouselComponent;