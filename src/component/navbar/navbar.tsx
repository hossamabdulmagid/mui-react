import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, Link, Grid } from '@mui/material';
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
        <Container>
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
                                    flexGrow: 1, textAlign: 'left'
                                }}>
                                <Link
                                    href="/"
                                    underline="hover"
                                    sx={{
                                        color: 'white',
                                        fontSize: "10px",
                                        "&:hover": { color: 'white' }
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
                                textAlign: 'center'
                            }}>
                            <LockIcon
                                sx={{
                                    padding: '0px',
                                    marginTop: '',
                                    textAlign: 'right'
                                }}
                            />
                            <Link
                                href="/login"
                                underline="hover"
                                sx={{
                                    color: 'white',
                                    fontSize: '12px',
                                    "&:hover": { color: 'white' }
                                }}>
                                {props.label}
                            </Link>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </Toolbar>
        </Container>
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