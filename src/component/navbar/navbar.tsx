import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
    typography: {
        fontSize: 10,
    },

});

interface IProps {
    label: string,
}

const NavbarLabel: React.FC<IProps> = (props): JSX.Element => {
    return (
        <Box sx={{ backgroundColor: 'black' }}>

            <Container sx={{}}>
                <Toolbar>
                    <ThemeProvider theme={theme}>
                        <Grid container spacing={2}>
                            <Grid
                                item xs={6} md={6}
                                sx={{
                                    display: { xs: "none", lg: "block" }
                                }}>
                                <Typography
                                    variant="subtitle2"
                                    component='div'
                                    sx={{
                                        flexGrow: 1, textAlign: 'left',
                                        color: 'white',
                                        "&:hover": { color: 'white' }
                                    }}>
                                    <Link
                                        to="/"
                                        style={{
                                            color: 'white',
                                            fontSize: "10px",

                                        }}
                                    >
                                        Create, maintain, publish, and share your CVs for free
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={6}
                                sx={{
                                    padding: '0px',
                                    marginTop: '',
                                    textAlign: 'right',
                                    "&:hover": { color: 'white' }

                                }}>

                                <Link
                                    to="/login"
                                    style={{
                                        color: 'white',
                                        fontSize: '12px',
                                    }}>
                                    {props.label}
                                </Link>
                            </Grid>
                        </Grid>
                    </ThemeProvider>
                </Toolbar>
            </Container>
        </Box>
    );
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },

    },
});



const Navbar: React.FC<IProps> = (label): JSX.Element => {
    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="static" color="secondary">
                {NavbarLabel(label)}
            </AppBar>
        </ThemeProvider>
    );
}


export default Navbar;