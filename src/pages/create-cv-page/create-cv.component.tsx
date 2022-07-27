import { Fragment, useEffect, useState } from 'react';
import { Box, Stack, Grid, Typography, Container, Button, Modal, TextField } from '@mui/material';
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

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    padding: '26px',
};

const SectionSchema = object({
    section: string().nonempty('Section is required'),

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

    const [sidebarRoutes, setSidebarRouter] = useState([
        {
            section: "Basicinfo",
            type: "basicinfo",
            lastModified: new Date(),
            data: {
                concept: "",
                content_new: "",
                type: "",
                identiferId: null,
            },
        },
        {
            section: "Workexperience",
            type: "workexperience",
            lastModified: new Date(),
            data: {
                concept: "",
                content_new: "",
                type: "",
                identiferId: null,
            },
        },
        {
            section: "Qualifications",
            type: "qualifications",
            lastModified: new Date(),
            data: {
                concept: "",
                content_new: "",
                type: "",
                identiferId: null,
            },
        },
        {
            section: "Education",
            type: "education",
            lastModified: new Date(),
            data: {
                concept: "",
                content_new: "",
                type: "",
                identiferId: null,
            },
        },
        {
            section: "Interests",
            type: "interests",
            lastModified: new Date(),
            data: {
                concept: "",
                content_new: "",
                type: "",
                identiferId: null,
            },
        },
        {
            section: "References",
            type: "references",
            lastModified: new Date(),
            data: {
                concept: "",
                content_new: "",
                type: "",
                identiferId: null,
            },
        },
    ]);


    const [activeSection, setActiveSection] = useState(sidebarRoutes[0].type);

    useEffect(() => {
        if (isSubmitSuccessful) {
            // reset();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitSuccessful]);

    const onSubmitHandler: SubmitHandler<SectionInput> = (values) => {
        console.log(values);
    };

    console.log(errors);

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
                                                    setActiveSection(singleRoute.type);
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
                        onSubmit={handleSubmit(onSubmitHandler)}
                        sx={{ mt: 2, mb: 2 }}
                    >
                        <TextField
                            sx={{ mb: 2 }}
                            label='Section Name'
                            fullWidth
                            required
                            type='text'
                            error={!!errors['section']}
                            helperText={errors['section'] ? errors['section'].message : ''}
                            {...register('section')}

                        />
                        <Container sx={{ textAlign: 'right' }}>
                            <LoadingButton
                                variant='contained'
                                fullWidth
                                type='submit'
                                // loading={loading}
                                size="small"

                                sx={{ py: '0.8rem', mt: '1rem' }}
                            >
                                Add
                            </LoadingButton>
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

                    </Box>

                </Box>
            </Modal>
        </Fragment>


    );
}
export default CreateCv;