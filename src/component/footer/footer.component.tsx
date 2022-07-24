import { Box, Grid, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
const Footer: React.FC = (): JSX.Element => {
    return (
        <Box
            sx={{
                textAlign: 'center',
                margin: '0 auto',
                backgroundColor: '#121212',
                color: 'white',
                height: '50px',
                padding: '13px'
            }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}
                    sx={{
                        display: { xs: "none", lg: "block" }
                    }}>
                    <Typography sx={{ fontSize: '12px' }} >
                        CV Creator © 2020 - 2021. All rights reserved
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>

                    <Box sx={{
                        '&:hover': { color: 'white' }, textAlign: '',
                    }}>

                        <Link to='/privacy-policy' style={{ color: 'white', display: 'inline' }}>
                            Privacy policy
                        </Link>
                        {" || "}
                        <Link to='/contact' style={{ color: 'white', }}>
                            Contact
                        </Link>
                    </Box>

                    <Typography sx={{ '&:hover': { color: 'white' } }}>

                    </Typography>
                </Grid>
            </Grid>
        </Box >
    );
}


export default Footer;