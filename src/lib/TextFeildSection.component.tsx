import { Box, TextField, Container, Grid, Typography, Stack, Button } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import { literal, object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChangeEvent, useEffect, useState, useRef, Fragment } from "react";
import generateRandom from "./generate-random";
import RichEditor from './editor';

type EntryDesc = {
    name: string;
    start: string;
    end: string;
    title: string;
    description: string;
}[];


const textFiledSchema = object({
    name: string().nonempty('name is required'),
    start: string().nonempty('Please add the start '),
    end: string().nonempty('Please add the end '),
    title: string().nonempty('Please add your title'),
    // description: string(),
});


type ExperienceInfo = TypeOf<typeof textFiledSchema>;

const TextFeildSection: React.FC = (): JSX.Element => {
    const {
        register,
        formState: { errors, isSubmitSuccessful },
        reset,
        handleSubmit,
    } = useForm<ExperienceInfo>({
        resolver: zodResolver(textFiledSchema),
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




    const [entryList, setEntryList] = useState<EntryDesc>([{ name: '', start: '', end: '', title: '', description: "", }]);

    console.log(errors);


    const handleAddWorkExp = () => {
        setEntryList([...entryList, { name: '', start: '', end: '', title: '', description: "", }]);
    }


    const handleRemoveWorkExp = (index: number) => {
        const list = [...entryList];
        list.splice(index, 1);
        setEntryList(list);
    }

    const handleWorkChange = async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        const { name, value } = e.target;
        const list = [...entryList];
        console.log(list[index]);
        list[index as number][name as string] = value;
        setEntryList([...list]);
    }

    const HandleRichTextState = (index: number, value: string) => {
        const dataWithHtmlTags = value;
        const dataOnEdtior = value
            .replace(/(<([^>]+)>)/gi, "")
            .replace(`&nbsp;`, " ")
            .trim();

        const list = [...entryList];
        list[index as number].description = dataOnEdtior;
        // list[index as number].html = value;
        setEntryList([...list]);
    };

    console.log(entryList, `entryList`);

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
                {entryList && entryList.map((singleExp, index) => {
                    return (
                        <Fragment key={index}>
                            <Grid container spacing={2} sx={{ textAlign: '' }} >
                                <Grid item xs={12} md={6}>
                                    <Box>
                                        <TextField
                                            {...register('name')}
                                            autoComplete="off"
                                            autoCorrect="off"
                                            autoCapitalize="off"
                                            spellCheck="false"
                                            type='text'
                                            label='Name'
                                            sx={{ mt: 2, padding: '2px' }}
                                            variant="filled"
                                            fullWidth
                                            error={!!errors['name']}
                                            helperText={errors['name'] ? errors['name'].message : ''}
                                            onChange={(e) => handleWorkChange(e, index)}
                                            value={singleExp.name}

                                        />
                                        <TextField
                                            {...register('start')}
                                            autoComplete="off"
                                            autoCorrect="off"
                                            autoCapitalize="off"
                                            spellCheck="false"
                                            type='text'
                                            label='Start'
                                            sx={{ mt: 2, padding: '2px' }}
                                            variant="filled"
                                            fullWidth
                                            error={!!errors['start']}
                                            helperText={errors['start'] ? errors['start'].message : ''}
                                            onChange={(e) => handleWorkChange(e, index)}
                                            value={singleExp.start}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box>
                                        <TextField
                                            {...register('title')}
                                            autoComplete="off"
                                            autoCorrect="off"
                                            autoCapitalize="off"
                                            spellCheck="false"
                                            type='text'
                                            label='Title'
                                            sx={{ mt: 2, padding: '2px' }}
                                            variant="filled"
                                            fullWidth
                                            error={!!errors['title']}
                                            helperText={errors['title'] ? errors['title'].message : ''}
                                            onChange={(e) => handleWorkChange(e, index)}
                                            value={singleExp.title}

                                        />
                                        <TextField
                                            {...register('end')}
                                            type='text'
                                            autoComplete="off"
                                            autoCorrect="off"
                                            autoCapitalize="off"
                                            spellCheck="false"
                                            label='End'
                                            sx={{ mt: 2, padding: '2px' }}
                                            variant="filled"
                                            fullWidth
                                            error={!!errors['end']}
                                            helperText={errors['end'] ? errors['end'].message : ''}
                                            onChange={(e) => handleWorkChange(e, index)}
                                            value={singleExp.end}
                                        />
                                    </Box>

                                    {entryList.length > 1 && (
                                        <Box sx={{ mt: 1, mb: 1, p: 1, textAlign: 'right' }}>
                                            <Button onClick={() => handleRemoveWorkExp(index)} variant="contained" color="error">
                                                remove entry
                                            </Button>
                                        </Box>

                                    )}

                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Typography component={'div'} sx={{ display: 'block' }}>
                                        <Typography component={'div'} sx={{ fontWeight: 700, padding: '10px', marginTop: '5px', marginbottom: '5px' }}>
                                            Description || Information
                                        </Typography>
                                        <RichEditor onChange={HandleRichTextState} index={index} initVal={''} />
                                    </Typography>
                                    <Box sx={{ marginTop: '15px', marginBottom: '15px', padding: '1px', textAlign: 'right', }}>
                                        {entryList.length - 1 === index && entryList.length < 4 && (
                                            <Box sx={{ marginTop: '10px', marginBottom: '10px', padding: '2px', }}>
                                                <Button onClick={handleAddWorkExp} variant="contained" color="success">
                                                    add entry
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
                            Save entry
                        </Button>
                    </Box>
                </Box>
            </>
        </Box >
    );
}

export default TextFeildSection;