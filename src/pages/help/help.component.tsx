import { useState } from 'react';
import { Grid, Container, Box, Typography } from '@mui/material';
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
    ])
    return (
        <>
            <Header />
            <Container sx={{ margin: '0 auto', }}>
                <Grid container spacing={2} sx={{ textAlign: 'left' }}>
                    <Grid item xs={12} md={12}>
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
                            There are e-learning modules available that advise you on effective resume writing. You can access them here
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
                        <img src='help2.png' alt='help2.png' />
                    </Grid>

                    <Grid xs={12} md={4} sx={{ textAlign: 'right' }}>
                        <img src="help1.png" alt='help1.png' />
                    </Grid>

                </Grid>
            </Container>
        </>
    );
}


export default Help;