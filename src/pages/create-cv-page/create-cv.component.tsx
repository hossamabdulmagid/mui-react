import { ChangeEvent, SyntheticEvent, Fragment, useEffect, useState } from 'react';
import { Box, Stack, Grid, Typography, Container, Button, Modal, TextField, Alert, FormControlLabel, RadioGroup, Radio, Snackbar } from '@mui/material';
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
import InputCheckBox from '../../lib/checkbox.component';
import EditorSection from '../../lib/EditorSection';
import TextFeildSection from '../../lib/TextFeildSection.component';
import CustomizedSnackbars from '../../lib/toast.component';
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
            section: "Basic Information",
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
            section: "Education Information",
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
            section: "Work Experience",
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

    const [openToast, setOpenToast] = useState<boolean>(false);

    const handleClick = () => {
        setOpenToast(true);
    };

    const handleCloseToast = (event?: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;

        }

        setOpenToast(false);
    };

    const onSubmitHandler: SubmitHandler<SectionInput> = (values) => {
        console.log(values);
        if (acceptInc) {
            formState.type = "text";

        } else {
            formState.type = "editor";
        }

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

        setActiveSection(formState.type);

        handleClose();
        console.log(array, `array`);
        handleClick();
        console.log(sidebarRoutes, `sidebar Routes`);
        setCkeditorState({ ...ckeditorState, content: "" });
        reset();
        setAcceptInc(false);
        // handleCloseToast();
    };

    return (
        <Fragment>
            <Header />
            <Box sx={{ backgroundColor: "rgb(249, 249, 249)", padding: "20px", minHeight: '500px', }}>
                <Box sx={{ margin: '0 auto', padding: "5px", textAlign: 'center' }}>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <Alert severity="error" sx={{ textAlign: 'center', margin: '0 auto' }}>
                                    <Typography sx={{ textAlign: 'center' }}>

                                        <span style={{ color: 'darkred', padding: '1px', fontWeight: 750 }}>
                                            [Basic Information , Education Information]
                                        </span>
                                        {" "}is Required Section, if you leave any other section empty it will not appear
                                    </Typography>
                                </Alert>

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
                                {activeSection === sidebarRoutes[1].type ? (<EducationInformation />) : null}
                                {activeSection === sidebarRoutes[2].type ? (<ExperienceInformation />) : null}
                                {activeSection === sidebarRoutes[3].type ? <QualificationsInformation /> : null}
                                {activeSection === sidebarRoutes[4].type ? <InterestsInformation /> : null}
                                {activeSection === sidebarRoutes[5].type ? <ReferencesInformation /> : null}
                                {activeSection === 'editor' ? <EditorSection /> : null}
                                {activeSection === 'text' ? <TextFeildSection /> : null}

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
                    <Box
                        component='form'
                        noValidate
                        autoComplete='off'
                        onSubmit={handleSubmit(onSubmitHandler)}>
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
                            <Button
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
                            </Button>
                        </Container>
                    </Box>
                </Box>
            </Modal>
            <CustomizedSnackbars
                openToast={openToast}
                onClose={handleCloseToast}
                value={formState.concept} />
        </Fragment >
    );
}
export default CreateCv;