import { Box, TextField, Container, Grid, Typography, Stack, Button } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import { literal, object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from "react";


const educationInformationSchema = object({
    collageName: string().nonempty('Collage Name is required'),
    start: string().nonempty('Please add the start of education year'),
    end: string().nonempty('Please add the end of education year'),
    educationMajoring: string().nonempty('Please confirm your password'),
});


type EducationInfo = TypeOf<typeof educationInformationSchema>;

const EducationInformation: React.FC = (): JSX.Element => {
    const {
        register,
        formState: { errors, isSubmitSuccessful },
        reset,
        handleSubmit,
    } = useForm<EducationInfo>({
        resolver: zodResolver(educationInformationSchema),
    });

    useEffect(() => {
        if (isSubmitSuccessful) {
            // reset();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitSuccessful]);

    const onSubmitHandler: SubmitHandler<EducationInfo> = (values) => {
        console.log(values);
    };

    // console.log(errors);
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

            <>
                <Typography sx={{ fontWeight: 'bold', padding: '2px' }}>
                    Education Information
                </Typography>
                <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Typography component={'div'}>
                            <TextField
                                type='text'
                                label='Collage Name'
                                sx={{ mt: 2, padding: '2px' }}
                                variant="filled"
                                id="outlined-size-small"
                                fullWidth
                                error={!!errors['collageName']}
                                helperText={errors['collageName'] ? errors['collageName'].message : ''}
                                {...register('collageName')}
                                required
                            />
                            <TextField
                                type='text'
                                label='Start Education'
                                sx={{ mt: 2, padding: '2px' }}
                                variant="filled"
                                id="outlined-size-small"
                                fullWidth
                                error={!!errors['start']}
                                helperText={errors['start'] ? errors['start'].message : ''}
                                {...register('start')}
                                required
                            />

                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography component={'div'}>
                            <TextField
                                type='email'
                                label='Education Majoring'
                                sx={{ mt: 2, padding: '2px' }}
                                variant="filled"
                                fullWidth
                                error={!!errors['educationMajoring']}
                                helperText={errors['educationMajoring'] ? errors['educationMajoring'].message : ''}
                                {...register('educationMajoring')}
                                required
                                id="outlined-size-small"
                            />
                            <TextField
                                type='text'
                                label='End Collage'
                                sx={{ mt: 2, padding: '2px' }}
                                variant="filled"
                                fullWidth
                                error={!!errors['end']}
                                helperText={errors['end'] ? errors['end'].message : ''}
                                {...register('end')}
                                id="outlined-size-small"
                            />


                        </Typography>
                        <Box sx={{ mt: 1, mb: 1, p: 1, textAlign: 'right' }}>
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

export default EducationInformation;