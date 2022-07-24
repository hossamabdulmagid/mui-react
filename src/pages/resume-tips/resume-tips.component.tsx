import { Fragment } from 'react';
import { Stack, Grid, Typography, Container, Box } from '@mui/material';
import Header from '../../component/header/header.component';

const ResumeTips: React.FC = (): JSX.Element => {
    return (
        <Fragment>
            <Header />
            <Box sx={{ backgroundColor: "rgb(249, 249, 249)", padding: "20px" }}>
                <Container>
                    <Grid>
                        <Grid>
                            <Stack>
                                <Typography sx={{ fontWeight: '200' }}>
                                    Resume / CV tips — a common sense approach.
                                </Typography>
                                <Typography sx={{ fontSize: '10px', paddingTop: '20px' }}>
                                    Over the years, the magnitude of resume creation tips that have been produced is staggering.
                                    While the resume requirements and expectations change from company to company and domain to domain,
                                    a lot of it really comes down to common sense.
                                    Here, we summarise a few common sense tips on writing resumes.
                                </Typography>
                                <Typography sx={{ fontWeight: '200', paddingTop: '20px' }}>
                                    Write a proper Objective
                                </Typography>
                                <Typography sx={{ fontSize: '10px', paddingTop: '20px' }}>
                                    Avoid writing generic and vague objective statements such as “Execllent team player seeking career growth”.
                                    Make it relevant and short, for example,
                                    “A beginner network administrator looking for a position in corporate network administration”.
                                </Typography>
                                <Typography sx={{ fontWeight: '200', paddingTop: '20px' }}>
                                    Keep it short and concise
                                </Typography>
                                <Typography sx={{ fontSize: '10px', paddingTop: '20px' }}>
                                    Keep information minimal, concise, and optimal. Optimal is key — short doesn't mean too short.
                                    When you describe your work experience, for instance, highlight key points such as your achievements.
                                    Know how to cherry pick the most important bits of information to showcase in your resume.
                                    Avoid writing paragraphs and paragraphs of text; try using bullet points instead.
                                    Overall, try to condense your resume to two or three pages.
                                </Typography>
                                <Typography sx={{ fontWeight: '200', paddingTop: '20px' }}>
                                    Quality — spelling and grammar
                                </Typography>
                                <Typography sx={{ fontSize: '10px', paddingTop: '20px' }}>
                                    Content rife with typos and grammatical errors are an instant turn off.
                                    Spell check and proof read your resume twice.

                                </Typography>
                                <Typography sx={{ fontWeight: '200', paddingTop: '20px' }}>
                                    Tailor for targets

                                </Typography>
                                <Typography sx={{ fontSize: '10px', paddingTop: '20px' }}>
                                    Tailor your resume to target the employer you are sending it to. Avoid using one generic resume for all settings.
                                    Often,
                                    minor modifications will suffice. The reader should get the impression that your resume was written for them.
                                </Typography>
                                <Typography sx={{ fontWeight: '200', paddingTop: '20px' }}>
                                    Be careful with personal information
                                </Typography>
                                <Typography sx={{ fontSize: '10px', paddingTop: '20px' }}>
                                    Including personal information such as birth date, age,
                                    gender, and marital status is not generally recommended, as they may aid selection bias on the employer's part.
                                    Be careful with such information; only provide what is necessary for the purpose.
                                </Typography>
                                <Typography sx={{ fontWeight: '200', paddingTop: '20px' }}>
                                    Use common sense
                                </Typography>
                                <Typography sx={{ fontSize: '10px', paddingTop: '20px' }}>
                                    While the above tips are only meant to be helpful pointers, creating a good resume ultimately comes down to you.
                                    Use your common sense, be patient, and put time and effort into creating a decent resume.
                                </Typography>
                                <Typography sx={{ fontWeight: '200', paddingTop: '20px' }}>
                                    There are e-learning modules available that advise you on effective resume writing. You can access them here.
                                </Typography>
                                <Typography sx={{ fontSize: '10px', paddingTop: '20px' }}>
                                    See CV Maker featured on resume template list.
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </Fragment >

    );
}


export default ResumeTips;