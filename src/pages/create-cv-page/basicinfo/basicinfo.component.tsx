import { Box, TextField, Container, Grid, Typography, Stack, Button } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import { literal, object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from "react";

const basicInformationSchema = object({
    fullName: string()
        .nonempty('full Name is required'),
    email: string().nonempty('Email is required').email('Email is invalid'),
    phone: string()
        .nonempty('Phone is required')
        .min(8, 'Phone must be more than 8 characters')
        .max(32, 'Phone must be less than 32 characters'),
    addressLine1: string().nonempty('Please confirm your password'),
    addressLine2: string(),
    addressLine3: string(),
    website: string(),
});

type BasicInfo = TypeOf<typeof basicInformationSchema>;

const BasicInformation: React.FC = (): JSX.Element => {
    const {
        register,
        formState: { errors, isSubmitSuccessful },
        reset,
        handleSubmit,
    } = useForm<BasicInfo>({
        resolver: zodResolver(basicInformationSchema),
    });

    useEffect(() => {
        if (isSubmitSuccessful) {
            // reset();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitSuccessful]);

    const onSubmitHandler: SubmitHandler<BasicInfo> = (values) => {
        console.log(values);
    };

    console.log(errors);

    return (
        <Box
            sx={{
                backgroundColor: 'snow',
                marginTop: '5px',
                minHeight: '300px',
                boxShadow: 15,
                padding: '15px',
            }}
            component='form'
            noValidate
            autoComplete='off'
            onSubmit={handleSubmit(onSubmitHandler)}>
            <Typography sx={{fontWeight:'bold'}}>
                Basic Information
            </Typography>

            <>
                <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Typography>
                            <TextField
                                type='text'
                                label='Full Name'
                                sx={{ mt: 2, padding: '2px' }}
                                variant="filled"
                                id="outlined-size-small"
                                fullWidth
                                error={!!errors['fullName']}
                                helperText={errors['fullName'] ? errors['fullName'].message : ''}
                                {...register('fullName')}
                                required
                            />
                            <TextField
                                type='text'
                                label='Phone numbers'
                                sx={{ mt: 2, padding: '2px' }}
                                variant="filled"
                                id="outlined-size-small"
                                fullWidth
                                error={!!errors['phone']}
                                helperText={errors['phone'] ? errors['phone'].message : ''}
                                {...register('phone')}
                                required
                            />
                            <TextField
                                type='text'
                                label='Address Line 1'
                                sx={{ mt: 2, padding: '2px' }}
                                variant="filled"
                                id="outlined-size-small"
                                fullWidth
                                error={!!errors['addressLine1']}
                                helperText={errors['addressLine1'] ? errors['addressLine1'].message : ''}
                                {...register('addressLine1')}
                                required
                            />
                            <TextField
                                type='text'
                                label='Address Line3'
                                sx={{ mt: 2, padding: '2px' }}
                                variant="filled"
                                id="outlined-size-small"
                                fullWidth
                                error={!!errors['addressLine3']}
                                helperText={errors['addressLine3'] ? errors['addressLine3'].message : ''}
                                {...register('addressLine3')}
                                required
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography>
                            <TextField
                                type='email'
                                label='E-mail address'
                                sx={{ mt: 2, padding: '2px' }}
                                variant="filled"
                                fullWidth
                                error={!!errors['email']}
                                helperText={errors['email'] ? errors['email'].message : ''}
                                {...register('email')}
                                required
                                id="outlined-size-small"
                            />
                            <TextField
                                type='text'
                                label='Web site'
                                sx={{ mt: 2, padding: '2px' }}
                                variant="filled"
                                fullWidth
                                error={!!errors['website']}
                                helperText={errors['website'] ? errors['website'].message : ''}
                                {...register('website')}
                                id="outlined-size-small"
                            />
                            <TextField
                                type='text'
                                label='Address Line 2'
                                sx={{ mt: 2, padding: '2px' }}
                                id="outlined-size-small"
                                variant="filled"
                                fullWidth
                                error={!!errors['addressLine2']}
                                helperText={errors['addressLine2'] ? errors['addressLine2'].message : ''}
                                {...register('addressLine2')}
                            />

                        </Typography>
                        <Box sx={{ mt: 1, mb: 1, p: 1 }}>
                            <Button
                                variant="contained"
                                color='info'
                                type='submit'
                            >
                                Save
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </>
        </Box>
    );
}

export default BasicInformation;