import { Box, TextField, Container, Grid, Typography, Stack, Button } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import { literal, object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChangeEvent, useEffect, useState, useRef } from "react";
import generateRandom from "../../../lib/generate-random";
import RichEditor from '../../../lib/editor';

type ExperienceEmployee = {
    companyName: string;
    startWork: string;
    endWork: string;
    position: string;
    note: string;
    html: string;
}[];


const experienceInformationSchema = object({
    companyName: string().nonempty('Company name is required'),
    startWork: string().nonempty('Please add the start of work year'),
    endWork: string().nonempty('Please add the end of work year'),
    position: string().nonempty('Please add your position'),
    note: string(),
    html: string(),
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
    const htmlId = generateRandom();

    const InputRef = useRef<boolean | null>(null);


    useEffect(() => {
        if (isSubmitSuccessful) {
            // reset();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitSuccessful]);

    const onSubmitHandler: SubmitHandler<ExperienceInfo> = (values) => {
        console.log(values);
    };




    const [expList, setExpList] = useState<ExperienceEmployee>([{ companyName: '', startWork: '', endWork: '', position: '', note: "", html: '' }]);

    console.log(errors);


    const handleAddWorkExp = () => {
        setExpList([...expList, { companyName: '', startWork: '', endWork: '', position: '', note: "", html: '' }]);
    }


    const handleRemoveWorkExp = (index: number) => {
        const list = [...expList];
        list.splice(index, 1);
        setExpList(list);
    }

    const handleWorkChange = async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        const { name, value } = e.target;
        const list = [...expList];
        console.log(list[index]);
        list[index as number][name as string] = value;
        setExpList([...list]);
    }



    console.log(errors, `errors`);

    const HandleRichTextState = (updatedText: any, index: number) => {
        const dataWithHtmlTags = updatedText;
        const dataOnEdtior = updatedText
            .replace(/(<([^>]+)>)/gi, "")
            .replace(`&nbsp;`, " ")
            .trim();


        const list = [...expList];
        list[index as number][updatedText as any] = updatedText;
        setExpList([...expList, { companyName: '', startWork: '', endWork: '', position: '', note: dataWithHtmlTags, html: dataOnEdtior }]);
        setExpList(list);
    };



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
            <Typography sx={{ fontWeight: 'bold', padding: '2px' }} component={'div'}>
                Experince Information
            </Typography>
            <>
                {expList && expList.map((singleExp, index) => {
                    return (
                        <Grid container spacing={2} sx={{ textAlign: 'center' }} key={index}>
                            <Grid item xs={12} md={6}>
                                <Typography component={'div'}>
                                    <TextField
                                        autoComplete="off"
                                        autoCorrect="off"
                                        autoCapitalize="off"
                                        spellCheck="false"
                                        type='text'
                                        label='Company Name'
                                        sx={{ mt: 2, padding: '2px' }}
                                        variant="filled"
                                        fullWidth
                                        error={!!errors['companyName']}
                                        helperText={errors['companyName'] ? errors['companyName'].message : ''}
                                        {...register('companyName')}
                                        onChange={(e) => handleWorkChange(e, index)}
                                    />
                                    <TextField
                                        autoComplete="off"
                                        autoCorrect="off"
                                        autoCapitalize="off"
                                        spellCheck="false"
                                        type='text'

                                        label='Start Work'
                                        sx={{ mt: 2, padding: '2px' }}
                                        variant="filled"
                                        fullWidth
                                        error={!!errors['startWork']}
                                        helperText={errors['startWork'] ? errors['startWork'].message : ''}
                                        {...register('startWork')}
                                        onChange={(e) => handleWorkChange(e, index)}
                                    />
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography component={'div'}>
                                    <TextField
                                        autoComplete="off"
                                        autoCorrect="off"
                                        autoCapitalize="off"
                                        spellCheck="false"
                                        type='text'
                                        required
                                        label='Position'
                                        sx={{ mt: 2, padding: '2px' }}
                                        variant="filled"
                                        fullWidth
                                        error={!!errors['position']}
                                        helperText={errors['position'] ? errors['position'].message : ''}
                                        {...register('position')}
                                        onChange={(e) => handleWorkChange(e, index)}

                                    />
                                    <TextField
                                        type='text'
                                        autoComplete="off"
                                        autoCorrect="off"
                                        autoCapitalize="off"
                                        spellCheck="false"
                                        label='End Work'
                                        sx={{ mt: 2, padding: '2px' }}
                                        variant="filled"
                                        fullWidth
                                        error={!!errors['endWork']}
                                        helperText={errors['endWork'] ? errors['endWork'].message : ''}
                                        {...register('endWork')}
                                        onChange={(e) => handleWorkChange(e, index)}
                                    />

                                </Typography>

                                {expList.length > 1 && (
                                    <Box sx={{ mt: 1, mb: 1, p: 1 }}>
                                        <Button onClick={() => handleRemoveWorkExp(index)} variant="contained" color="error">
                                            remove Work
                                        </Button>
                                    </Box>

                                )}

                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Typography component={'div'}>
                                    <RichEditor onChange={() => HandleRichTextState('x', index)} initVal={" "} />
                                </Typography>
                                <Box sx={{ mt: 1, mb: 1, p: 1 }}>
                                    {expList.length - 1 === index && expList.length < 4 && (
                                        <Box sx={{ marginTop: '1px', marginBottom: '1px', padding: '2px', textAlign: 'right', display: '' }}>
                                            <Button onClick={() => handleAddWorkExp()} variant="contained" color="success">
                                                add Work
                                            </Button>
                                        </Box>
                                    )}
                                </Box>
                            </Grid>
                        </Grid>
                    )
                })}
                <Box sx={{ mt: 1, mb: 1, p: 1 }}>
                    <Box sx={{ marginTop: '1px', marginBottom: '1px', padding: '2px', textAlign: 'right', display: '' }}>
                        <Button variant="contained" color="info" type='submit'>
                            Save Work
                        </Button>
                    </Box>

                </Box>
            </>
        </Box>
    );
}

export default ExperienceInformation;