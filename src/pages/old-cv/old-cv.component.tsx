import { useState } from 'react';
import { Box, Stack, Container, Grid, } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../../component/header/header.component';
import { LoadingButton } from '@mui/lab';
import SettingsIcon from '@mui/icons-material/Settings';

const createData = (
    name: string,
    createAt: string,
    lastModified: string,
    options: string,
) => {
    return { name, createAt, lastModified, options };
}

const rows = [
    createData('SimpleCv-One', "June 29th 2022, 4:50 pm	", "July 22nd 2022, 2:58 pm	", "Edit now"),
    createData('SimpleCv-Two', "June 29th 2022, 4:50 pm	", " July 22nd 2022, 2:58 pm	", "Edit now"),
    createData('SimpleCv-three', 'June 29th 2022, 4:50 pm	', "July 22nd 2022, 2:58 pm	", 'Edit now'),
    createData('SimpleCv-four', 'June 29th 2022, 4:50 pm	', 'July 22nd 2022, 2:58 pm	', 'Edit now'),
];
const OldCv: React.FC = (): JSX.Element => {

    const [loading, setLoading] = useState(false);

    const [free, setFree] = useState<string[]>([
        'Basic templates',
        'Add custom plain sections to your CV',
        'Basic rich text editor',
        '$ 0',
    ]);

    const [premium, setPremium] = useState<string[]>([
        '★ Premium templates in addition to the free ones',
        '★ Add custom plain and special sections(similar to education and work) to your CV',
        '★ Advanced rich text editor.Choose fonts, text colors and more',
        '★ One - click e - mail.Send your resume directly to your e - mail easily from your mobile or tablet that doesnt allow file downloads',
        '★ Continued access to upcoming premium features and templates',
        '$16 / year',
    ]);




    return (
        <>
            <Header />
            <Box sx={{ backgroundColor: "rgb(249, 249, 249)", padding: "20px", minHeight: 'auto' }}>

                <Box sx={{ margin: '30px', marginBottom: '50px', textAlign: 'center' }}>
                    <Container>
                        <Stack>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>NAME</TableCell>
                                            <TableCell align="right">CREATE AT</TableCell>
                                            <TableCell align="right">LAST MODIFIED</TableCell>
                                            <TableCell align="right">OPTIONS</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody sx={{ textAlign: 'center', margin: '0 auto' }}>
                                        {rows.map((row, idx) => (
                                            <TableRow key={row.name}>
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {row.createAt}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {row.lastModified}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {row.options}
                                                    <SettingsIcon sx={{ padding: '2px', margin: '0 auto' }} />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Stack>
                    </Container>
                </Box>
                <Box sx={{ marginTop: '50px', padding: '20px' }}>
                    <Container>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Go Premium ❤</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontWeight: 300, fontSize: '13px' }}>
                                    CV Creator is absolutely FREE with no restrictions,
                                    but you can get a lot more out of it and support its continued development
                                    by going premium for a nominal annual subscription fee.
                                </Typography>
                                <Grid container spacing={2} sx={{ marginTop: '50px', padding: '20px' }}>
                                    <Grid item xs={12} md={6}>
                                        <Typography sx={{ padding: '15px', margin: '0 auto', marginBottom: '10px' }}>
                                            Free
                                        </Typography>
                                        {free && free.map((singleText, idx) => {
                                            return (
                                                <Stack key={idx} sx={{ padding: '15px', borderBottom: '1px dotted darkgrey' }}>
                                                    {singleText}
                                                </Stack>
                                            )
                                        })}
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Typography sx={{ padding: '15px', margin: '0 auto', marginBottom: '10px' }}>
                                            Premium
                                        </Typography>
                                        {premium && premium.map((singleText, idx) => {
                                            return (
                                                <Stack key={idx} sx={{ padding: '15px', borderBottom: '1px dotted darkgrey' }}>
                                                    {singleText}
                                                </Stack>
                                            )
                                        })}


                                        <Stack sx={{ alignItems: 'center', margin: '0 auto', padding: '20px' }}>

                                            <LoadingButton
                                                variant='contained'
                                                fullWidth
                                                type='submit'
                                                color='success'
                                                loading={loading}
                                                sx={{ py: '0.8rem', mt: '1rem' }}
                                            >
                                                Upgrade to Premium ♥
                                            </LoadingButton>
                                            <img
                                                src='https://production-1d741-6fa29.firebaseapp.com/paypal.png'
                                                alt="https://production-1d741-6fa29.firebaseapp.com/paypal.png"
                                                style={{
                                                    width: '100px',
                                                    height: 'auto',
                                                    padding: 10,
                                                    margin: 0,
                                                    border: "12px solid white",

                                                }}
                                            />
                                        </Stack>

                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Container>
                </Box>
            </Box>

        </>

    )
}

export default OldCv;