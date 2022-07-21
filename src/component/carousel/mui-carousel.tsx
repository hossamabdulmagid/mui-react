import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Box, Paper, Button, Container } from '@mui/material'
import { useState } from 'react';
import NavGuest from './nav-guest';


type Image = {
    src: string;
    alt: string;
};


const CarouselComponent = (props: any) => {
    const [download,setDownload]=useState(0);
    const[save,setSave]=useState(0);

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
        <Box sx={{ backgroundColor: 'rgb(24, 199, 225)', height: '650px' }}>
            <NavGuest/>
            <Container>
                <Carousel>
                    {Images.map((item, idx) => <Item key={idx} item={item} />)}
                </Carousel>
            </Container>
        </Box>
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