import { ChangeEvent, SyntheticEvent, Fragment, useEffect, useState } from 'react';
import { Box, Stack, Grid, Typography, Container, Button, Modal, TextField, FormControl, FormControlLabel, RadioGroup, Radio, FormLabel } from '@mui/material';
import Header from '../../component/header/header.component';
import { Link } from 'react-router-dom';

import BasicInformation from './basicinfo/basicinfo.component';
import ExperienceInformation from './experience/experience.component';
import EducationInformation from './education/education.component';
import InterestsInformation from './interests/interests.component';
import ReferencesInformation from './references/references.component';
import QualificationsInformation from './qualifications/qualifications.component';
import { useForm, SubmitHandler } from 'react-hook-form';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import InputRadio from '../../lib/radiogroup.component';
import InputCheckBox from '../../lib/checkbox.component';
import EditorSection from '../../lib/EditorSection';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 20,
    padding: '26px',
};




type DefaultSidebarSections = {
    section: string;
    type: string;
    lastModified: string;

    data: {
        concept: string;
        content_new: string;
        type: string;
        identiferId: string;
    };
}[];


type NewSection = {
    concept: string;
    name: string;
    start: string;
    end: string;
    description: string;
    type: string;
    lastModified: string;
    identiferId: string;
}[];

const SectionSchema = object({
    concept: string().nonempty('Section is required'),
    type: string(),
    example: string(),
    exampleRequired: string(),


});

type SectionInput = TypeOf<typeof SectionSchema>;


const CreateCv: React.FC = (): JSX.Element => {

    const {
        register,
        formState: { errors, isSubmitSuccessful },
        reset,
        handleSubmit,
    } = useForm<SectionInput>({
        resolver: zodResolver(SectionSchema),
    });
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [sidebarRoutes, setSidebarRouter] = useState<DefaultSidebarSections>([
        {
            section: "Basicinfo",
            type: "basicinfo",
            lastModified: new Date().toString(),
            data: {
                concept: "",
                content_new: "",
                type: "",
                identiferId: '',
            },
        },
        {
            section: "Workexperience",
            type: "workexperience",
            lastModified: new Date().toString(),
            data: {
                concept: "",
                content_new: "",
                type: "",
                identiferId: '',
            },
        },
        {
            section: "Qualifications",
            type: "qualifications",
            lastModified: new Date().toString(),
            data: {
                concept: "",
                content_new: "",
                type: "",
                identiferId: '',
            },
        },
        {
            section: "Education",
            type: "education",
            lastModified: new Date().toString(),
            data: {
                concept: "",
                content_new: "",
                type: "",
                identiferId: '',
            },
        },
        {
            section: "Interests",
            type: "interests",
            lastModified: new Date().toString(),
            data: {
                concept: "",
                content_new: "",
                type: "",
                identiferId: '',
            },
        },
        {
            section: "References",
            type: "references",
            lastModified: new Date().toString(),
            data: {
                concept: "",
                content_new: "",
                type: "",
                identiferId: '',
            },
        },
    ]);


    const [activeSection, setActiveSection] = useState(sidebarRoutes[0].type);

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitSuccessful]);

    const [formState, setFormState] = useState({
        concept: "",
        name: "",
        start: "",
        end: "",
        description: "",
        type: "text",
        lastModified: new Date().toString(),
        identiferId: "",
    });

    const [ckeditorState, setCkeditorState] = useState({
        concept: "",
        content: "",
        type: "editor",
        identiferId: '',
    });

    const [array, setArray] = useState<NewSection>([]);

    const onSubmit: SubmitHandler<SectionInput> = data => console.log(data);

    const onSubmitHandler: SubmitHandler<SectionInput> = (values) => {

        if (true) {
            console.log('function runing');
        } else {
            console.log('function not running')
        }
        console.log(values);


        // sidebarRoutes.push({
        //     section: values.concept,
        //     type: values.type,
        //     lastModified: new Date().toString(),
        //     data: {
        //         concept: "",
        //         content_new: "",
        //         type: "",
        //         identiferId: '',
        //     },
        // });

        // array.push({
        //     concept: values.concept,
        //     name: values.concept,
        //     start: values.concept,
        //     end: values.concept,
        //     description: values.concept,
        //     type: values.type,
        //     lastModified: new Date().toString(),
        //     identiferId: "",
        // });

        handleClose();

        console.log(array, `array`);

        console.log(sidebarRoutes, `sidebar Routes`);

        setCkeditorState({ ...ckeditorState, content: "" });


    };

    const [acceptInc, setAcceptInc] = useState(false);

    const HandleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checked);
        console.log({ acceptInc })
        setAcceptInc(event.target.checked);
    }

    const handleChangeSection = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
        setCkeditorState({ ...ckeditorState, [name]: value });
        console.log(` ${formState.concept}`, `formState  while Changing`);
        console.log(` ${ckeditorState.concept}`, `ckeditorState   while Changing`);
        console.log(value, `value from onChange`);
        console.log(event.target.value, `while selected RadioGroup`);
    };

    const [typeOfCv, setTypeOfCv] = useState<{ concept: string, type: string }>({ concept: '', type: '' });

    const handleAddNewSectionChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setCkeditorState({ ...ckeditorState, [name]: value })
        setFormState({ ...formState, [name]: value });
        console.log(ckeditorState, `value`);
    }


    const handleManualForm = (e: SyntheticEvent) => {

        e.preventDefault();

        console.log(typeOfCv, `typeOf Cv`)
        console.log(formState, `formState`)
        console.log(ckeditorState, `ckeditorState`)


        console.log(formState);

        sidebarRoutes.push({
            section: formState && formState.concept,
            type: formState && formState.type,
            lastModified: new Date().toString(),
            data: {
                concept: "",
                content_new: "",
                type: formState.type,
                identiferId: '',
            },
        });

        array.push({
            concept: formState.concept,
            name: formState.concept,
            start: formState.concept,
            end: formState.concept,
            description: formState.concept,
            type: formState.type,
            lastModified: new Date().toString(),
            identiferId: "",
        });

        handleClose();
        console.log(array, `array`);

        console.log(sidebarRoutes, `sidebar Routes`);
        setCkeditorState({ ...ckeditorState, content: "" });
        reset();




    }

    return (
        <Fragment>
            <Header />
            <Box sx={{ backgroundColor: "rgb(249, 249, 249)", padding: "20px", minHeight: '500px', }}>
                <Box sx={{ margin: '0 auto', padding: "5px", textAlign: '' }}>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <Typography>
                                    {/* your resume name : simple cv */}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Container>
                    <Stack>
                        <Grid spacing={2} container>
                            <Grid item xs={12} md={3} sx={{ padding: '10px', margin: '0 auto', textAlign: 'center' }}>
                                <ul>
                                    {sidebarRoutes && sidebarRoutes.map((singleRoute, idx) => {
                                        return (
                                            <li
                                                style={{
                                                    margin: '5px',
                                                    listStyle: 'none',
                                                    backgroundColor: "white",
                                                    border: '1px dotted black',
                                                    cursor: 'pointer',

                                                }}
                                                key={idx}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setActiveSection(singleRoute && singleRoute.type);
                                                }}>
                                                <Stack sx={{ color: 'black', textDecoration: 'none', padding: '5px', fontSize: '13px' }}>
                                                    {singleRoute.section}
                                                </Stack>
                                            </li>
                                        )
                                    })}
                                    <Button variant='contained' sx={{ marginTop: '15px', padding: '10px' }} onClick={handleOpen}>
                                        + New Section
                                    </Button>
                                </ul>

                            </Grid>
                            <Grid item xs={12} md={9} sx={{ padding: '10px', margin: '0 auto' }}>
                                {activeSection === sidebarRoutes[0].type ? <BasicInformation /> : null}
                                {activeSection === sidebarRoutes[1].type ? (<ExperienceInformation />) : null}
                                {activeSection === sidebarRoutes[2].type ? (<QualificationsInformation />) : null}
                                {activeSection === sidebarRoutes[3].type ? <EducationInformation /> : null}
                                {activeSection === sidebarRoutes[4].type ? <InterestsInformation /> : null}
                                {activeSection === sidebarRoutes[5].type ? <ReferencesInformation /> : null}
                                {activeSection === 'editor' ? <EditorSection /> : null}

                            </Grid>
                        </Grid>
                    </Stack>
                </Container>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create new section
                    </Typography>
                    {/* <Box
                        sx={{ mt: 2, mb: 2 }}

                        component='form'
                        noValidate
                        autoComplete='off'
                        onSubmit={handleSubmit(onSubmitHandler)}
                    > */}
                    <form onSubmit={(e) => handleManualForm(e)}>

                        {/* <TextField
                            sx={{ mb: 2 }}
                            label='Section Name'
                            fullWidth
                            {...register('concept')}
                            required
                            type='text'
                            error={!!errors['concept']}
                            helperText={errors['concept'] ? errors['concept'].message : ''}
                            onChange={(event) => handleChangeSection(event)}

                        /> */}
                        <TextField
                            type='text'
                            label='Section Name'
                            sx={{ mt: 2, padding: '2px' }}
                            variant="filled"
                            id="outlined-size-small"
                            fullWidth
                            error={!!errors['concept']}
                            helperText={errors['concept'] ? errors['concept'].message : ''}
                            {...register('concept')}
                            required
                            onChange={handleChangeSection}
                        />
                        <Box>
                            <InputCheckBox onChange={HandleChange} checked={acceptInc} acceptInc={acceptInc} />
                        </Box>
                        {acceptInc ? (
                            <Box
                                sx={{
                                    padding: '5px'
                                }}>

                                <InputRadio
                                    value={['text', 'editor']}
                                    {...register('type')}
                                    label={['Rich Editor', 'Text Field'] as unknown as any}
                                    onChange={(event) => handleAddNewSectionChange(event)}

                                />
                            </Box>
                        )
                            : (
                                <Box>
                                    <FormControl>
                                        <FormLabel id="d">select Role Required</FormLabel>

                                        <RadioGroup aria-labelledby="type" name='agree' defaultValue={"s"}>
                                            <FormControlLabel control={<Radio />} disabled value="Rich Editor" label="Rich Editor" />
                                            <FormControlLabel control={<Radio />} disabled value='Text Feild' label="Text Feild'" />
                                        </RadioGroup>
                                    </FormControl>
                                </Box >
                            )
                        }


                        <Container sx={{ textAlign: 'left' }}>


                            <Button
                                variant='contained'
                                fullWidth
                                type='submit'
                                // loading={loading}
                                size="small"
                                sx={{ py: '0.8rem', mt: '1rem' }}
                            >
                                Add
                            </Button>
                            <LoadingButton
                                variant='contained'
                                fullWidth
                                type='submit'
                                color="error"
                                // loading={loading}
                                onClick={handleClose}
                                size="small"
                                sx={{ py: '0.8rem', mt: '1rem' }}
                            >
                                Cancle
                            </LoadingButton>

                        </Container>
                    </form>

                    {/* </Box> */}

                </Box>
            </Modal>
        </Fragment >


    );
}
export default CreateCv;