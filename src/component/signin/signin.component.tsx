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
import { Link } from 'react-router-dom';
const LoginSchema = object({
    email: string().nonempty('Email is required').email('Email is invalid'),
    password: string()
        .nonempty('Password is required')
        .min(8, 'Password must be more than 8 characters')
        .max(32, 'Password must be less than 32 characters'),

});

type RegisterInput = TypeOf<typeof LoginSchema>;

const SignIn: React.FC = (): JSX.Element => {
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
        <Box sx={{ maxWidth: '30rem', alignContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <Typography variant='h6' component='h6' sx={{ mb: '2rem' }}>
                Member login
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
                <TextField
                    sx={{ mb: 2 }}
                    label='Password'
                    fullWidth
                    required
                    type='password'
                    error={!!errors['password']}
                    helperText={errors['password'] ? errors['password'].message : ''}
                    {...register('password')}
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
            <Box sx={{ paddingTop: '10px', paddingBottom: '10px', marginTop: '20px', marginBottom: "20px" }}>
                <Link to='/forget-password' >
                    Forget Password
                </Link>
            </Box>
        </Box>
    );
};

export default SignIn;