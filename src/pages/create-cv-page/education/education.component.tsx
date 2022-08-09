import { Box, TextField, Container, Grid, Typography, Stack, Button } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import { unknown, any, object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChangeEvent, useEffect, useState } from "react";
import SingleRichEditor from "../../../lib/single-editor";
import InputForm from "../../../lib/TextFeild.component";

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

    const [flag, setFlag] = useState<boolean>(false);

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
        console.log(values, `values`);

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
                <Grid container spacing={2} sx={{ textAlign: '' }}>
                    <Grid item xs={12} md={6}>
                        <Typography component={'div'}>
                            <InputForm
                                type='text'
                                register={register('collageName')}
                                label='Collage Name'
                                error={!!errors['collageName']}
                                helperText={errors['collageName'] ? errors['collageName'].message : ''}
                                onChange={HandleChangeEducationInformation}
                                value={educationInformation.collageName}
                            />

                            <InputForm
                                type='text'
                                register={register('start')}
                                label='Start Education'
                                error={!!errors['start']}
                                helperText={errors['start'] ? errors['start'].message : ''}
                                onChange={HandleChangeEducationInformation}
                                value={educationInformation.start}
                            />

                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography component={'div'}>


                            <InputForm
                                type='text'
                                register={register('educationMajoring')}
                                label='Education Majoring'
                                error={!!errors['educationMajoring']}
                                helperText={errors['educationMajoring'] ? errors['educationMajoring'].message : ''}
                                onChange={HandleChangeEducationInformation}
                                value={educationInformation.educationMajoring}
                            />
                            <InputForm
                                type='text'
                                register={register('end')}
                                label='End Education'
                                error={!!errors['end']}
                                helperText={errors['end'] ? errors['end'].message : ''}
                                onChange={HandleChangeEducationInformation}
                                value={educationInformation.end}
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