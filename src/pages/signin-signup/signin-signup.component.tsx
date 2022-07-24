import { Container, Grid, Box } from '@mui/material';
import SignUp from '../../component/singup/signup.component';
import SignIn from '../../component/signin/signin.component';
import Header from '../../component/header/header.component';
const SignInSignUpPage = () => {
    return (
        <>
            <Header />
            <Box sx={{ backgroundColor: "rgb(249, 249, 249)", padding: "20px" }}>
                <Container sx={{ margin: '0 auto', textAlign: 'center' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ boxShadow: 1, padding: '50px', backgroundColor: 'white' }}>
                                <SignIn />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ boxShadow: 1, padding: '50px', backgroundColor: 'white' }}>
                                <SignUp />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}


export default SignInSignUpPage;