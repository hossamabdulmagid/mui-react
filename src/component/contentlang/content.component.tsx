import { useState } from 'react';
import { Container, Grid, Box, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
type TypeLinks = {
    title: string;
    url: string;
};

const ContentLanguage: React.FC = (): JSX.Element => {
    const [languages, setLanguages] = useState<string[]>([
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

    const [links, setLinks] = useState<TypeLinks[]>([
        { title: "Help", url: "help" },
        { title: "Resume tips", url: "tips" },
        { title: "Language credits", url: "lang" },
    ]);
    return (
        <Container sx={{ textAlign: 'center', margin: '0 auto', marginBottom: '30px', marginTop: "30px" }}>
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
                                        <Stack sx={{
                                            color: 'black',
                                            "&:hover": {
                                                color: 'black'
                                            }
                                        }}>
                                            <Link to={`/${singleLink.url}`} style={{ color: 'black' }} >
                                                {singleLink.title}
                                            </Link>
                                        </Stack>
                                    </Box>
                                )
                            })}
                        </Box>
                    </Box>
                </Grid>

            </Grid>

        </Container >
    );
}


export default ContentLanguage;