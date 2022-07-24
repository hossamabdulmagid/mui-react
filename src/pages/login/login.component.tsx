import { Container, Box, Grid } from '@mui/material';
import RegisterPage from '../../lib/signUp-formValidtion';
import SignIn from '../../lib/signIn-formValidtion';
const LoginPage = () => {
    return (
        <Container sx={{ margin: '0 auto', textAlign: 'center' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <SignIn />
                </Grid>
                <Grid item xs={12} md={6}>
                    <RegisterPage />
                </Grid>
            </Grid>
        </Container>
    );
}


export default LoginPage