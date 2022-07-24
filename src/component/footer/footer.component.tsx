import { Box, Grid, Typography, Link } from '@mui/material';
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
                    <Link href='#blank' sx={{ color: 'white', '&:hover': { color: 'white' } }}>
                        Privacy policy
                    </Link>
                    {" || "}
                    <Link href='#blank' sx={{ color: 'white', '&:hover': { color: 'white' } }}>
                        Contact
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
}


export default Footer;