import { Box, TextField, Container, Grid, Typography, Stack, Button } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import { literal, object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChangeEvent, useEffect, useState, useRef, Fragment } from "react";
import generateRandom from "../../../lib/generate-random";
import RichEditor from '../../../lib/editor';
import InputForm from "../../../lib/TextFeild.component";

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

        console.log(expList,`expList froom @@@ ON SUBMIT`)
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
        console.log(expList, `listwhile attacking`);
    }

    const HandleRichTextState = (index: number, value: string) => {
        const dataWithHtmlTags = value;
        const dataOnEdtior = value
            .replace(/(<([^>]+)>)/gi, "")
            .replace(`&nbsp;`, " ")
            .trim();

        const list = [...expList];
        list[index as number].note = dataOnEdtior;
        list[index as number].html = value;
        setExpList([...list]);
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
                        <Fragment key={index}>
                            <Grid container spacing={2} sx={{ textAlign: '' }} >
                                <Grid item xs={12} md={6}>
                                    <Typography component={'div'}>
                                        <InputForm
                                            type='text'
                                            register={register('companyName')}
                                            label='Company Name'
                                            error={!!errors['companyName']}
                                            helperText={errors['companyName'] ? errors['companyName'].message : ''}
                                            onChange={(e) => handleWorkChange(e, index)}
                                            value={singleExp.companyName}
                                        />
                                        <InputForm
                                            type='text'
                                            register={register('startWork')}
                                            label='Start Work'
                                            error={!!errors['startWork']}
                                            helperText={errors['startWork'] ? errors['startWork'].message : ''}
                                            onChange={(e) => handleWorkChange(e, index)}
                                            value={singleExp.startWork}
                                        />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography component={'div'}>
                                        <InputForm
                                            type='text'
                                            register={register('position')}
                                            label='Positon'
                                            error={!!errors['position']}
                                            helperText={errors['position'] ? errors['position'].message : ''}
                                            onChange={(e) => handleWorkChange(e, index)}
                                            value={singleExp.position}
                                        />
                                        <InputForm
                                            type='text'
                                            register={register('endWork')}
                                            label='endWork'
                                            error={!!errors['endWork']}
                                            helperText={errors['endWork'] ? errors['endWork'].message : ''}
                                            onChange={(e) => handleWorkChange(e, index)}
                                            value={singleExp.endWork}
                                        />
                                    </Typography>

                                    {expList.length > 1 && (
                                        <Box sx={{ mt: 1, mb: 1, p: 1, textAlign: 'right' }}>
                                            <Button onClick={() => handleRemoveWorkExp(index)} variant="contained" color="error">
                                                remove Work
                                            </Button>
                                        </Box>

                                    )}

                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Typography component={'div'} sx={{ display: 'block' }}>
                                        <Typography component={'div'} sx={{ fontWeight: 700, padding: '10px', marginTop: '5px', marginbottom: '5px' }}>
                                            Other Information
                                        </Typography>
                                        <RichEditor onChange={HandleRichTextState} index={index} initVal={''} />
                                    </Typography>
                                    <Box sx={{ marginTop: '15px', marginBottom: '15px', padding: '1px', textAlign: 'right', }}>
                                        {expList.length - 1 === index && expList.length < 4 && (
                                            <Box sx={{ marginTop: '10px', marginBottom: '10px', padding: '2px', }}>
                                                <Button onClick={handleAddWorkExp} variant="contained" color="success">
                                                    add Work
                                                </Button>
                                            </Box>
                                        )}
                                    </Box>
                                </Grid>

                            </Grid>

                            <hr />
                        </Fragment>
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
        </Box >
    );
}

export default ExperienceInformation;