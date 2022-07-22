import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Link } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
    typography: {
        fontSize: 10,
    },
});


const NavbarLabel = (label: string) => {
    return (
        <Container>
            <Toolbar>
                <ThemeProvider theme={theme}>
                    <Typography variant="subtitle2" component='div' sx={{ flexGrow: 1, textAlign: 'left' }}>
                        <Link href="/" underline="hover" sx={{ color: 'white', fontSize: "10px", "&:hover": { color: 'white' } }}>

                            Create, maintain, publish, and share your CVs for free
                        </Link>
                    </Typography>
                    <LockIcon sx={{ padding: '0px', marginTop: '', textAlign: 'right' }} />
                    <Link href="/login" underline="hover" sx={{ color: 'white', fontSize: '10px', "&:hover": { color: 'white' } }}>
                        {label}
                    </Link>
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

const Navbar = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="static" color="secondary">
                {NavbarLabel('Login | Signup')}
            </AppBar>
        </ThemeProvider>
    );
}


export default Navbar;