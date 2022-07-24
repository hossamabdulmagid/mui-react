import { Stack, Grid, Container, Box, Typography } from "@mui/material";
import Header from '../../component/header/header.component';

const ContactPage: React.FC = (): JSX.Element => {
    return (
        <>
            <Header />
            <Box sx={{ backgroundColor: "rgb(249, 249, 249)", padding: "20px", paddingBottom: '30px', minHeight: '500px' }}>
                <Container>
                    <Stack>
                        <Grid spacing={2} container >
                            <Grid item xs={12} md={12}>
                                <Typography sx={{ padding: '20px', fontSize: '15px', fontWeight: '200' }}>
                                    Contact
                                </Typography>
                                <Typography sx={{ padding: '20px', fontSize: '13px' }}>
                                    For all account related and technical queries, please e-mail us. We will get back to you within 2 to 12 hours.
                                    <br />
                                    hosamabdulmaged@gmail.com
                                </Typography>
                            </Grid>
                        </Grid>
                    </Stack>
                </Container>
            </Box>
        </>

    );
}

export default ContactPage;