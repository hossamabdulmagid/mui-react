import { Box, TextField, Container, Grid, Typography, Stack, Button } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import { literal, object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from "react";




const experienceInformationSchema = object({
    companyName: string().nonempty('Collage Name is required'),
    startWork: string().nonempty('Please add the start of education year'),
    endWork: string().nonempty('Please add the end of education year'),
    position: string().nonempty('Please confirm your password'),
});


type ExperienceInfo = TypeOf<typeof experienceInformationSchema>;

const ExperienceInformation: React.FC = (): JSX.Element => {
    const {
        register,
        formState: { errors, isSubmitSuccessful },
        reset,
        handleSubmit,
    } = useForm<ExperienceInfo>({
        resolver: zodResolver(experienceInformationSchema),
    });

    useEffect(() => {
        if (isSubmitSuccessful) {
            // reset();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitSuccessful]);

    const onSubmitHandler: SubmitHandler<ExperienceInfo> = (values) => {
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

            <>
                <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Typography>
                            <TextField
                                type='text'
                                label='Company Name'
                                sx={{ mt: 2, padding: '2px' }}
                                variant="filled"
                                id="outlined-size-small"
                                fullWidth
                                error={!!errors['companyName']}
                                helperText={errors['companyName'] ? errors['companyName'].message : ''}
                                {...register('companyName')}
                                required
                            />
                            <TextField
                                type='text'
                                label='Start Work'
                                sx={{ mt: 2, padding: '2px' }}
                                variant="filled"
                                id="outlined-size-small"
                                fullWidth
                                error={!!errors['startWork']}
                                helperText={errors['startWork'] ? errors['startWork'].message : ''}
                                {...register('startWork')}
                                required
                            />

                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography>
                            <TextField
                                type='text'
                                label='Position'
                                sx={{ mt: 2, padding: '2px' }}
                                variant="filled"
                                fullWidth
                                error={!!errors['position']}
                                helperText={errors['position'] ? errors['position'].message : ''}
                                {...register('position')}
                                required
                                id="outlined-size-small"
                            />
                            <TextField
                                type='text'
                                label='End Work'
                                sx={{ mt: 2, padding: '2px' }}
                                variant="filled"
                                fullWidth
                                error={!!errors['endWork']}
                                helperText={errors['endWork'] ? errors['endWork'].message : ''}
                                {...register('endWork')}
                                id="outlined-size-small"
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

export default ExperienceInformation;