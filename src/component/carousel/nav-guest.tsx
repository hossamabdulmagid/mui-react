import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography,Button, Container } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const FormRow = () => {
    const [download, setDownload] = React.useState(0);
    const [save, setSave] = React.useState(0);


    const HandleDownLoadClick = () => {
        setDownload(download + 1);
    }

    const HandleSaveClick = () => {
        setSave(save + 1);
    }

    return (
        <React.Fragment>
            <Grid
                item
                xs={4}
                sx={{ marginBottom: '20px', marginTop: '30px', color: 'white' }}
            >
                <img src='cvcreator.png' alt='cvcreator.png' width={'220'} />
                {/* <Typography style={{ marginTop: '10px', fontSize: '15px' }}>
                    Create, maintain, publish, and share your CVs for free
                </Typography> */}
            </Grid>
            <Grid
                item
                xs={4}
                sx={{ marginBottom: '20px', marginTop: '30px', color: 'black' }}
                onClick={HandleDownLoadClick}>
                {download}
                <Typography style={{ marginTop: '14px', color: 'white' }}>
                    Download
                </Typography>
            </Grid>
            <Grid
                item
                xs={4}
                sx={{ marginBottom: '20px', marginTop: '30px', color: 'black' }}
                onClick={HandleSaveClick}>
                {save}
                <Typography style={{ marginTop: '14px', color: 'white' }}>
                    Save
                </Typography>
            </Grid>
        </React.Fragment>
    );
}
const NavGuest = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container sx={{ textAlign: 'center', justifyContent: 'space-betwen' }}>
                <Grid container spacing={1}>
                    <Grid container item spacing={3}>
                        <FormRow />
                        <Grid
                            item
                            xs={4}
                            sx={{ marginBottom: '20px', marginTop: '30px', color: 'white' }}
                        >
                            <Typography style={{ marginTop: '10px', fontSize: '15px' }}>
                                Create, maintain, publish, and share your CVs for free
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={4}
                            sx={{ marginBottom: '20px', marginTop: '30px', color: 'white' }}
                        >
                            {/* <Typography style={{ marginTop: '10px', fontSize: '15px' }}>
                                Create, maintain, publish, and share your CVs for free
                            </Typography> */}
                        </Grid> 
                        <Grid
                            item
                            xs={4}
                            sx={{ marginBottom: '20px', marginTop: '30px', color: 'white' }}
                        >
                            <Button style={{ marginTop: '10px', fontSize: '15px',textTransform: 'none' }} variant="outlined" size="small">
                                <img src='ico_start.png' alt='ico_start.png' style={{padding:'5px'}}/>
                                Create a cv now
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default NavGuest;