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
                    <Grid item xs={4} md={4} sx={{ cursor: 'pointer', textAlign: 'center' }} onClick={() => navigate('/')}>
                        <img
                            src='https://production-1d741-6fa29.firebaseapp.com/cvcreator.png'
                            alt='https://production-1d741-6fa29.firebaseapp.com/cvcreator.png'
                            width={'102px'} />
                    </Grid>
                    <Grid item xs={4} md={4} onClick={() => setDownload(download + 1)} sx={{ textAlign: 'center' }}>
                        {download} downloads
                    </Grid>
                    <Grid item xs={4} md={4} onClick={() => setSave(save + 1)} sx={{ textAlign: 'right' }}>
                        {save} save
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}


export default Header;