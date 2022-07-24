import { useState } from 'react';
import { Container, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Header: React.FC = (): JSX.Element => {
    const navigate = useNavigate();
    const [download, setDownload] = useState(0);
    const [save, setSave] = useState(0);

    return (
        <Box sx={{ backgroundColor: 'snow', display: 'block', marginBottom: '' }}>
            <Container sx={{ margin: '0 auto', textAlign: '', padding: '20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={4} md={4} sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
                        <img src='cvcreator.png' alt='cvcreator.png' width={'102px'} />
                    </Grid>
                    <Grid item xs={4} md={4} onClick={() => setDownload(download + 1)}>
                        {download} download
                    </Grid>
                    <Grid item xs={4} md={4} onClick={() => setSave(save + 1)}>
                        {save} save
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}


export default Header;