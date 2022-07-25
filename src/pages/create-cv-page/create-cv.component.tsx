import { Fragment, useState } from 'react';
import { Box, Stack, Grid, Typography, Container, Button } from '@mui/material';
import Header from '../../component/header/header.component';
import { Link } from 'react-router-dom';

import BasicInformation from './basicinfo/basicinfo.component';
import ExperienceInformation from './experience/experience.component';
import EducationInformation from './education/education.component';
import InterestsInformation from './interests/interests.component';
import ReferencesInformation from './references/references.component';
import QualificationsInformation from './qualifications/qualifications.component';


const CreateCv: React.FC = (): JSX.Element => {
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

    return (
        <Fragment>
            <Header />
            <Box sx={{ backgroundColor: "rgb(249, 249, 249)", padding: "20px", minHeight: 'auto' }}>
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
                                    <Button variant='contained' sx={{ margin: '5px', padding: '10px' }}>
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
        </Fragment >

    );
}
export default CreateCv;