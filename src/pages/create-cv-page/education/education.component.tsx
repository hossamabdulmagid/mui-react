import { Box, TextField, Container, Grid, Typography, Stack, Button } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import { unknown, any, object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChangeEvent, useEffect, useState } from "react";
import SingleRichEditor from "../../../lib/single-editor";

const educationInformationSchema = object({
    collageName: string().nonempty('Collage Name is required'),
    start: string().nonempty('Please add the start of education year'),
    end: string().nonempty('Please add the end of education year'),
    educationMajoring: string().nonempty('Please confirm your password'),
    note: unknown(),
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



    const [educationInformation, setEducationInformation] = useState<{ collageName: string, start: string, end: string, educationMajoring: string, note: string, html: string }>({ collageName: '', start: '', end: '', educationMajoring: '', note: '', html: '' });

    const [flag, setFlag] = useState(false);

    useEffect(() => {
        if (isSubmitSuccessful) {
            // reset();
        }
        if (educationInformation.note.length > 3) {
            setFlag(false);

        } else {
            setFlag(true)

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitSuccessful, educationInformation, educationInformation.note, educationInformation.note.length]);


    const HandleRichTextState = (value: any) => {
        const dataWithHtmlTags = value;
        const dataOnEdtior = value
            .replace(/(<([^>]+)>)/gi, "")
            .replace(`&nbsp;`, " ")
            .trim();
        setEducationInformation({ ...educationInformation, note: `${dataOnEdtior}`, html: dataWithHtmlTags });
        // values.note = educationInformation.note;

        console.log(educationInformation, `educationInformation`)
    };


    const HandleChangeEducationInformation = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEducationInformation({ ...educationInformation, [name]: value })
        console.log(educationInformation, `educationInformation while typing`);
    }

    const onSubmitHandler: SubmitHandler<EducationInfo> = async (values) => {
        values.note = await educationInformation.note;
        console.log(values, `educationInformationeducationInformationeducationInformation`);

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
                                onChange={HandleChangeEducationInformation}
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
                                onChange={HandleChangeEducationInformation}
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
                                onChange={HandleChangeEducationInformation}
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
                                onChange={HandleChangeEducationInformation}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography component={'div'} sx={{ display: 'block' }}>
                            <Typography component={'div'} sx={{ fontWeight: 700, padding: '10px', marginTop: '5px', marginbottom: '5px', textAlign: 'left' }}>
                                Other Information
                            </Typography>
                            <SingleRichEditor
                                onChange={HandleRichTextState}
                                value={educationInformation.note}
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