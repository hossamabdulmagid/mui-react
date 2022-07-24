import { useState } from 'react';
import { Grid, Container, Box, Typography, Stack } from '@mui/material';
import Header from '../../component/header/header.component';

const Help: React.FC = (): JSX.Element => {

    const [list, updatedList] = useState<string[]>([
        'Creating and managing CVs',
        'Adding and ordering CV sections',
        'Renaming sections',
        'Adding entries in special sections',
        'Re-ordering entries in special sections',
        'Forcing page-breaks',
        'Save, preview, and download',
        'Publishing and sharing your CV online',
    ]);

    return (
        <Box sx={{ backgroundColor: "rgb(249, 249, 249)" }}>
            <Header />
            <Container sx={{ margin: '0 auto', }}>
                <Grid container spacing={2} sx={{ textAlign: '' }}>
                    <Grid item xs={12} md={8}>
                        <Typography sx={{ fontWeight: '200', fontSize: '21px' }}>
                            Quick help
                        </Typography>
                        <Box sx={{ border: '1px solid grey' }}>
                            <ol>
                                {list && list.map((single, idx) => {
                                    return (
                                        <li key={idx} style={{ padding: '4px', fontSize: '11px' }}>
                                            {single}
                                        </li>
                                    )
                                })}
                            </ol>
                        </Box>
                        <Typography sx={{ fontWeight: '200', fontSize: '15px', margin: '5px', padding: "5px" }}>
                            There are e-learning modules available that advise you on effective resume writing.
                            You can access them here
                        </Typography>
                        <hr />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography sx={{ fontWeight: '200', fontSize: '21px' }}>
                            Creating and managing CVs
                        </Typography>
                        <Typography sx={{ fontSize: '11px', padding: '5px', marginTop: '5px', marginBottom: '15px' }}>
                            Once you have logged in to your account, you will be presented with a home screen.
                            Click on the Create a new CV. A dialog box will show asking for a name.
                            Give your CV a name, for example, “My academic resume”,
                            and you will be presented with the CV creation wizard where you will provide all your details.
                            The same home screen lists all you the CVs you have created.
                            You can edit a CV by clicking on its name.
                        </Typography>
                        <img src='help2.png' alt='help2.png'
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                padding: 0,
                                margin: 0,
                                border: "12px solid white",

                            }} />
                    </Grid>
                    <Grid xs={12} md={4} sx={{
                        textAlign: 'right',
                        borderBottom: '1 px soild darkgrey',
                        display: { xs: "none", lg: "block" }
                    }}>
                        <img src="help1.png" alt='help1.png'
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                padding: 0,
                                margin: 0,
                                border: "12px solid white",

                            }} />
                    </Grid>
                </Grid>
                <hr />
                <Grid container spacing={2} sx={{ textAlign: '' }}>
                    <Grid xs={12} md={6} sx={{ margin: '0 auto' }}>
                        <Typography sx={{ fontWeight: '200', fontSize: '21px', padding: '10px', }}>
                            Adding and ordering CV sections
                        </Typography>
                        <img src='https://production-1d741-6fa29.firebaseapp.com/help3.png'
                            alt='https://production-1d741-6fa29.firebaseapp.com/help3.png'
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                padding: 0,
                                margin: 0,
                                border: "12px solid white",

                            }}
                        />
                    </Grid>
                    <Grid xs={12} md={6} sx={{ textAlign: 'right', borderBottom: '1 px soild darkgrey', marginTop: '5px' }}>
                        <Typography sx={{ fontSize: '11px', padding: '5px', marginTop: '5px', marginBottom: '15px' }}>
                            A CV consists of several sections,
                            Work experience, Education, References and so forth.
                            You can change the order of how these appear in your CV by clicking on a section name,
                            and dragging it vertically and dropping it in the desired place.
                            You can reorder all sections except for Basic information You can add custom sections to your,
                            for example,“Personal projects” or “Awards and achievements” CV by clicking the Add a new section button.
                        </Typography>
                    </Grid>
                </Grid>
                <hr />
                <Grid container spacing={2} sx={{ textAlign: '' }}>
                    <Grid xs={12} md={12} sx={{ margin: '0 auto', }}>
                        <Stack sx={{ textAlign: '', margin: '0 auto' }}>
                            <Typography sx={{ fontWeight: '200', fontSize: '21px', padding: '10px', }}>
                                Renaming sections
                            </Typography>
                            <Typography sx={{ fontWeight: '200', fontSize: '16px', padding: '10px', marginBottom: "20px" }}>
                                You can rename any of the sections in your CV by clicking the tiny pencil icon to the right of the section name.
                            </Typography>
                        </Stack>
                        <Stack sx={{ textAlign: 'center', margin: '0 auto' }}>
                            <img src='https://production-1d741-6fa29.firebaseapp.com/help4.png'
                                alt='https://production-1d741-6fa29.firebaseapp.com/help4.png'
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    padding: 0,
                                    margin: 0,
                                    border: "12px solid white",

                                }}
                            />
                        </Stack>
                    </Grid>
                </Grid>
                <hr />
                <Grid container spacing={2} sx={{ textAlign: '' }}>
                    <Grid xs={12} md={6} sx={{ margin: '0 auto' }}>
                        <Typography sx={{ fontWeight: '200', fontSize: '21px', padding: '10px', }}>
                            Adding entries in special sections
                        </Typography>
                        <img src='https://production-1d741-6fa29.firebaseapp.com/help5.png'
                            alt='https://production-1d741-6fa29.firebaseapp.com/help5.png'
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                padding: 0,
                                margin: 0,
                                border: "12px solid snow",
                            }}
                        />
                    </Grid>
                    <Grid xs={12} md={6} sx={{ textAlign: 'right', borderBottom: '1 px soild darkgrey', marginTop: '5px' }}>
                        <Typography sx={{ fontSize: '11px', padding: '5px', marginTop: '5px', marginBottom: '15px' }}>
                            Work experience and Education are special sections to which you can add multiple entries, that is, details of your past jobs and schooling.
                            To add a new entry, click the 'Add entry' button.
                            You can delete an entry by clicking the Delete button underneath it.
                        </Typography>
                    </Grid>
                </Grid>
                <hr />
                <Grid container spacing={1} sx={{ marginBottom: '10px' }}>
                    <Grid item xs={11} md={10}>
                        <Typography sx={{ fontWeight: '200', fontSize: '21px', padding: '10px', }}>
                            Forcing page-breaks
                        </Typography>
                        <Typography sx={{ fontSize: '11px', padding: '5px', marginTop: '5px', marginBottom: '15px' }}>
                            Page-break button It's impossible to automatically deduce where a pagebreak is aesthetic, and for that reason,
                            sometimes, you get pagebreaks in undesired places. In such cases, or for whatever reason, to force a page break in the output PDF,
                            use the page-break button in the editor toolbar. This inserts the [page-break] tag, that becomes a hard page-break in the PDF you download.
                        </Typography>
                    </Grid>
                    <Grid item xs={1} md={2}>
                        <img src='https://production-1d741-6fa29.firebaseapp.com/help8.png'
                            alt='https://production-1d741-6fa29.firebaseapp.com/help8.png'
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                padding: 0,
                                margin: 0,
                                border: "12px solid snow",
                            }}
                        />
                    </Grid>
                </Grid>
                <hr />
                <Grid container spacing={1} sx={{ marginBottom: '10px' }}>
                    <Grid item xs={12} md={10}>
                        <Typography sx={{ fontWeight: '200', fontSize: '21px', padding: '10px', }}>
                            Save, preview, and download
                        </Typography>
                        <Typography sx={{ fontSize: '11px', padding: '5px', marginTop: '5px', marginBottom: '15px' }}>
                            The Save button saves the CV you are editing to your account Preview lets you preview your CV in a template of your choice in the browser without having to download it.
                            Quite useful to check progression as your work on your CV.
                            Download lets you download a copy of your CV (PDF or HTML) to your computer in a style of your choice.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <img src='https://production-1d741-6fa29.firebaseapp.com/help9.png'
                            alt='https://production-1d741-6fa29.firebaseapp.com/help9.png'
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                padding: 0,
                                margin: 0,
                                border: "12px solid snow",
                            }}
                        />
                    </Grid>
                </Grid>
                <hr />
            </Container>
        </Box>
    );
}


export default Help;