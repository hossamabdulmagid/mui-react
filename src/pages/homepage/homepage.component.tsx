import { useState, Fragment } from 'react';
import { Box, Grid, Link, Container, Typography } from '@mui/material';
import CarouselComponent from '../../component/carousel/mui-carousel';

const HomePage = () => {

    const [languages, setLanguages] = useState([
        "English -",
        "العربية -",
        "Български -",
        "Čeština -",
        "Dansk -",
        "Deutsch -",
        "Eesti -",
        "keel -",
        "ქართული -",
        "Dutch -",
        "Español -",
        "فارسی -",
        "Français -",
        "Galician -",
        "Έλληνικά -",
        "Hungarian -",
        "Italiano -",
        "עברית -",
        "한국어 -",
        "Norsk -",
        "Polski -",
        "Português -",
        "Român -",
        "Pусский -",
        "Slovenščina -",
        "Slovenský -",
        "Shqip -",
        "Suomi -",
        "Svenska -",
        "Türkçe -",
        "Українська -",
        "Tiếng -",
        "Việt -",
        "മലയാളം -",
        "中文 -",
        "繁體中文 -",
        "Hrvatski",
    ]);

    const [links, setLinks] = useState([
        { title: "Help", url: "help" },
        { title: "Resume tips", url: "tips" },
        { title: "Language credits", url: "lang" },
    ]);

    return (
        <Fragment>
            <CarouselComponent />
            <Container sx={{ textAlign: 'center', margin: '0 auto' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Box>
                            <Typography
                                variant="h6"
                                component='h6'
                                sx={{
                                    margin: '5px',
                                    padding: '10px',
                                    fontSize: "14px"
                                }}>
                                System
                            </Typography>
                            <Box>
                                <Typography variant='body2' component='div' sx={{ margin: '10px' }}>
                                    Secure 256 bit SSL encryption
                                </Typography>
                                <Typography variant='body2' component='div' sx={{ margin: '10px' }}>
                                    Available on the Chrome webstore
                                </Typography>
                                <Typography variant='body2' component='div' sx={{ margin: '10px' }}>
                                    follow updates at @cvCreator
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box>
                            <Typography
                                variant="h6"
                                component='h6'
                                sx={{
                                    marginTop: '10px',
                                    marginBottom: '10px',
                                    padding: '10px',
                                    fontSize: "14px"
                                }}>
                                Languages
                            </Typography>
                            <Box>
                                {languages && languages.map((singleLang, idx) => (

                                    <Box
                                        key={idx}
                                        style={{ display: 'inline-flex', padding: '1px' }}
                                    >
                                        {singleLang}
                                    </Box>
                                )
                                )}
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box>
                            <Typography
                                variant="h6"
                                component='h6'
                                sx={{
                                    marginTop: '10px',
                                    marginBottom: '10px',
                                    padding: '10px',
                                    fontSize: "14px"
                                }}>
                                Links
                            </Typography>
                            <Box>
                                {links && links.map((singleLink, idx) => {
                                    return (
                                        <Box sx={{ margin: '5px' }} key={idx}>
                                            <Link href='#' underline="none"
                                                sx={{
                                                    color: 'black',
                                                    "&:hover": {
                                                        textDecoration: "none",
                                                        color: 'black'
                                                    }
                                                }}>
                                                {singleLink.title}
                                            </Link>
                                        </Box>
                                    )
                                })}
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Fragment>
    );
}


export default HomePage;