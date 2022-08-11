import { useState } from 'react';
import { Box, Stack, Container, Grid, Button } from "@mui/material";
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
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import DeleteIcon from '@mui/icons-material/Delete';

const createData = (
    name: string,
    createAt: string,
    lastModified: string,
    options: string[],
) => {
    return { name, createAt, lastModified, options };
}

const rows = [
    createData('SimpleCv-One', "June 29th 2022, 4:50 pm	", "July 22nd 2022, 2:58 pm	", ["Edit", "Rename", "Delete"]),
    createData('SimpleCv-Two', "June 29th 2022, 4:50 pm	", " July 22nd 2022, 2:58 pm	", ["Edit", "Rename", "Delete"]),
    createData('SimpleCv-three', 'June 29th 2022, 4:50 pm	', "July 22nd 2022, 2:58 pm	", ["Edit", "Rename", "Delete"]),
    createData('SimpleCv-four', 'June 29th 2022, 4:50 pm	', 'July 22nd 2022, 2:58 pm	', ["Edit", "Rename", "Delete"]),
];
const OldCv: React.FC = (): JSX.Element => {


    const [free, setFree] = useState<string[]>([
        'Basic templates',
        'Add custom plain sections to your CV',
        'Basic rich text editor',
        '$ 0',
    ]);

    const [premium, setPremium] = useState<string[]>([
        'Premium templates in addition to the free ones',
        'Add custom plain and special sections(similar to education and work) to your CV',
        'Advanced rich text editor.Choose fonts, text colors and more',
        'One - click e - mail.Send your resume directly to your e - mail easily from your mobile or tablet that doesnt allow file downloads',
        'Continued access to upcoming premium features and templates',
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
                                <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" sx={{}}>NAME</TableCell>
                                            <TableCell align="center" sx={{}}>LAST MODIFIED</TableCell>
                                            <TableCell align="center" sx={{}} colSpan={4} >OPTIONS</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody sx={{ textAlign: 'center', margin: '0 auto' }}>
                                        {rows.map((row, idx) => (
                                            <TableRow hover key={idx} sx={{
                                                "&:hover": {
                                                    // backgroundColor: 'gray',
                                                    // opacity: 1
                                                }
                                            }}>
                                                <TableCell align='center' component="th" scope="row">
                                                    <Typography sx={{ fontSize: '12px' }}>
                                                        {row.name}
                                                    </Typography>
                                                </TableCell>

                                                <TableCell align="center" sx={{
                                                    borderLeft: '1px dotted grey',
                                                    borderRight: '1px dotted grey',
                                                }}>
                                                    <Typography sx={{ fontSize: '12px' }}>
                                                        {row.lastModified}
                                                    </Typography>
                                                </TableCell>


                                                {row.options.map((x, idx) => {
                                                    return (
                                                        <TableCell align="right" key={idx}
                                                            sx={{
                                                                textAlign: 'center',
                                                                // opacity: 0,
                                                                "&:hover": {
                                                                    cursor: 'pointer',
                                                                    color: 'darkred',
                                                                    opacity: 1,
                                                                }
                                                            }}>
                                                            {/* {(idx === 0 || x === 'Share') ?
                                                                <Button
                                                                    variant="text"
                                                                    startIcon={
                                                                        <ShareIcon sx={{
                                                                            padding: '0 px',
                                                                            margin: '0 auto',
                                                                            color: 'grey',

                                                                        }} />}>
                                                                    {x}
                                                                </Button>
                                                                : null
                                                            } */}

                                                            {(idx === 0 || x === 'Edit') ?
                                                                <Button
                                                                    variant="text"
                                                                    color="success"

                                                                    startIcon={
                                                                        <SettingsIcon
                                                                            sx={{
                                                                                padding: '2px',
                                                                                margin: '0 auto',
                                                                                color: 'grey'
                                                                            }} />}>
                                                                    {x}
                                                                </Button>
                                                                : null
                                                            }

                                                            {(idx === 1 || x === "Rename") ?
                                                                <Button
                                                                    variant="text"
                                                                    startIcon={
                                                                        <DriveFileRenameOutlineIcon
                                                                            sx={{
                                                                                padding: '2px',
                                                                                margin: '0 auto',
                                                                                color: 'grey'
                                                                            }}
                                                                        />}>
                                                                    {x}
                                                                </Button>
                                                                : null
                                                            }

                                                            {(idx === 2 || x === "Delete") ?
                                                                <Button
                                                                    variant="text"
                                                                    color='error'

                                                                    startIcon={
                                                                        <DeleteIcon
                                                                            sx={{
                                                                                padding: '2px',
                                                                                margin: '0 auto',
                                                                                color: 'grey'
                                                                            }} />}>
                                                                    {x}
                                                                </Button>
                                                                : null
                                                            }

                                                        </TableCell>
                                                    )
                                                })}
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
                                <Typography>Go Premium <FavoriteIcon sx={{ color: 'red' }} /></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontWeight: '200', fontSize: '17px', padding: '7px' }}>
                                    CV Creator is absolutely FREE with no restrictions,
                                    but you can get a lot more out of it and support its continued development
                                    by going premium for a nominal annual subscription fee.
                                </Typography>
                                <Grid container spacing={2} sx={{ marginTop: '20px', padding: '20px' }}>
                                    <Grid item xs={12} md={6}>
                                        <Typography sx={{ padding: '17px', margin: '0 auto', marginBottom: '10px' }}>
                                            Free
                                        </Typography>
                                        {free && free.map((singleText, idx) => {
                                            return (
                                                <Stack key={idx} sx={{ padding: '17px', borderBottom: '1px solid darkgrey' }}>
                                                    {singleText}
                                                </Stack>
                                            )
                                        })}
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Typography sx={{ padding: '17px', margin: '0 auto', marginBottom: '10px' }}>
                                            Premium
                                        </Typography>
                                        {premium && premium.map((singleText, idx) => {
                                            return (
                                                <Stack key={idx} sx={{ padding: '17px', borderBottom: '1px solid darkgrey' }}>
                                                    <Typography>
                                                        <StarIcon sx={{ color: 'darkgreen', display: 'inline-flex' }} />
                                                        {singleText}

                                                    </Typography>
                                                </Stack>
                                            )
                                        })}
                                        <Stack sx={{ alignItems: 'center', margin: '0 auto', padding: '20px' }}>
                                            <Button
                                                variant='contained'
                                                size='small'
                                                type='submit'
                                                color='success'
                                                sx={{ py: '0.8rem', mt: '1rem' }}
                                            >
                                                Upgrade to Premium <FavoriteIcon sx={{ color: 'pink', padding: '4px' }} />
                                            </Button>
                                            <img
                                                src='https://production-1d741-6fa29.firebaseapp.com/paypal.png'
                                                alt="https://production-1d741-6fa29.firebaseapp.com/paypal.png"
                                                style={{
                                                    width: '200px',
                                                    height: 'auto',
                                                    padding: 10,
                                                    margin: 0,
                                                    border: "11px solid white",
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