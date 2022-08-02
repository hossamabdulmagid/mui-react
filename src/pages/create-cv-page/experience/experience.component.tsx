import { Box, TextField, Container, Grid, Typography, Stack, Button } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import { literal, object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChangeEvent, useEffect, useState } from "react";

type ExperienceEmployee = {
    companyName: string;
    startWork: string;
    endWork: string;
    position: string;
}[];


const experienceInformationSchema = object({
    companyName: string().nonempty('Company name is required'),
    startWork: string().nonempty('Please add the start of work year'),
    endWork: string().nonempty('Please add the end of work year'),
    position: string().nonempty('Please add your position'),
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

    const [expList, setExpList] = useState<ExperienceEmployee>([{ companyName: '', startWork: '', endWork: '', position: '' }]);

    console.log(errors);


    const handleAddWorkExp = () => {
        setExpList([...expList, { companyName: '', startWork: '', endWork: '', position: '' }]);
    }


    const handleRemoveWorkExp = (index: number) => {
        const list = [...expList];
        list.splice(index, 1);
        setExpList(list);
    }

    const handleWorkChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        const { name, value } = e.target;
        // setExpList({ ...expList, [name]: value });

        const list = [...expList];

        list[index as any as number][name as any as string] = value;


        setExpList(list);
    }

    console.log(expList, `expList`);
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
            <Typography sx={{ fontWeight: 'bold', padding: '2px' }}>
                Experince Information
            </Typography>
            <>
                {expList && expList.map((singleExp, index) => {
                    return (
                        <>
                            {expList.length - 1 === index && expList.length < 4 && (
                                <Box sx={{ marginTop: '1px', marginBottom: '1px', padding: '2px', textAlign: 'right', display: '' }}>
                                    <Button onClick={() => handleAddWorkExp()} variant="contained" color="success">
                                        add Work
                                    </Button>
                                </Box>
                            )}
                            <Grid container spacing={2} sx={{ textAlign: 'center' }} key={index}>
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
                                            value={singleExp.companyName || ""}
                                            onChange={(e) => handleWorkChange(e, index)}
                                            name='companyName'
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
                                            value={singleExp.startWork || ""}
                                            name='startWork'
                                            onChange={(e) => handleWorkChange(e, index)}
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
                                            onChange={(e) => handleWorkChange(e, index)}
                                            value={singleExp.position || ""}
                                            name='position'
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
                                            name='endWork'
                                            onChange={(e) => handleWorkChange(e, index)}
                                            value={singleExp.endWork || ""}
                                        />
                                    </Typography>
                                    {expList.length > 1 && (
                                        <Box sx={{ mt: 1, mb: 1, p: 1 }}>
                                            <Button onClick={() => handleRemoveWorkExp(index)} variant="contained" color="error">
                                                remove Work
                                            </Button>
                                        </Box>

                                    )}
                                    <Box sx={{ mt: 1, mb: 1, p: 1 }}>

                                    </Box>
                                </Grid>
                            </Grid>
                        </>
                    )
                })}
                <Box sx={{ mt: 1, mb: 1, p: 1 }}>
                    <Button variant="contained" color="info" type='submit'>
                        Save Work
                    </Button>
                </Box>
            </>
        </Box>
    );
}

export default ExperienceInformation;