import {
    Box,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    TextField,
    Typography,
} from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import Header from '../../component/header/header.component';
const LoginSchema = object({
    email: string().nonempty('Email is required').email('Email is invalid'),
});

type RegisterInput = TypeOf<typeof LoginSchema>;

const ForgetPassword: React.FC = (): JSX.Element => {
    const [loading, setLoading] = useState(false);

    const {
        register,
        formState: { errors, isSubmitSuccessful },
        reset,
        handleSubmit,
    } = useForm<RegisterInput>({
        resolver: zodResolver(LoginSchema),
    });

    useEffect(() => {
        if (isSubmitSuccessful) {
            // reset();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitSuccessful]);

    const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
        console.log(values);
    };
    console.log(errors);

    return (
        <>
            <Header />
            <Box
                sx={{
                    backgroundColor: "rgb(249, 249, 249)",
                    padding: "30px",
                }}>
                <Box
                    sx={{
                        boxShadow: 1,
                        maxWidth: '30rem',
                        alignContent: 'center',
                        textAlign: 'center',
                        margin: '0 auto',
                        backgroundColor: 'snow',
                        padding: '15px'
                    }}>
                    <Typography variant='h6' component='h6' sx={{ mb: '2rem' }}>
                        Forget Password
                    </Typography>
                    <Box
                        component='form'
                        noValidate
                        autoComplete='off'
                        onSubmit={handleSubmit(onSubmitHandler)}
                    >
                        <TextField
                            sx={{ mb: 2 }}
                            label='Email'
                            fullWidth
                            required
                            type='email'
                            error={!!errors['email']}
                            helperText={errors['email'] ? errors['email'].message : ''}
                            {...register('email')}
                        />
                        <LoadingButton
                            variant='contained'
                            fullWidth
                            type='submit'
                            loading={loading}
                            sx={{ py: '0.8rem', mt: '1rem' }}
                        >
                            Login
                        </LoadingButton>
                    </Box>
                </Box>
            </Box>
        </>

    );
};

export default ForgetPassword;

