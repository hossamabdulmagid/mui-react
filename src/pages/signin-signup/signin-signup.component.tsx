import { Container, Grid } from '@mui/material';
import SignUp from '../../lib/signUp-formValidtion';
import SignIn from '../../lib/signIn-formValidtion';
import Header from '../../component/header/header.component';
const SignInSignUpPage = () => {
    return (
        <>
            <Header />
            <Container sx={{ margin: '0 auto', textAlign: 'center' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <SignIn />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SignUp />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}


export default SignInSignUpPage;