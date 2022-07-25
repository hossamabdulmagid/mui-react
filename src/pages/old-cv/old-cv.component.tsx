import { Box, Stack, Container, } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const createData = (
    name: string,
    createAt: string,
    lastModified: string,
    options: string,
) => {
    return { name, createAt, lastModified, options };
}

const rows = [
    createData('SimpleCv', "159", "6.0", " 24"),
    createData('SimpleCv', "237", " 9.0", "37"),
    createData('SimpleCv', '262', " 16.0", ' 24'),
    createData('SimpleCv', '262', '16.0', '24'),
];
const OldCv: React.FC = (): JSX.Element => {
    return (
        <Box sx={{ margin: '30px' }}>
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
                            <TableBody>
                                {rows.map((row, idx) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.createAt}</TableCell>
                                        <TableCell align="right">{row.lastModified}</TableCell>
                                        <TableCell align="right">{row.options}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Stack>
            </Container>
        </Box>

    )
}

export default OldCv;