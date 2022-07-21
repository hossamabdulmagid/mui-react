import { useState } from 'react';
import { Box, TextField, MenuItem, Typography } from '@mui/material';



const MuiSelect = () => {

    const [country, setCountry] = useState('');
    
    const [countries, setCountries] = useState<string[]>([])

    const handleChangeGroupValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setCountry(event.target.value as string);
        const value = event.target.value;
        setCountries(typeof value === 'string' ? value.split(',') : value);
        // console.log(country);
        console.log(countries);
    }



    const handleChangeSingleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string);
        console.log(country);

    }


    return (
        <>
            <Typography variant='h2' component='h5'>
                Multi-Select
            </Typography>
            <Box width='250px' sx={{ textAlign: 'center', margin: '0 auto', marginTop: '30px' }}>
                <TextField
                    label='Select Country'
                    value={countries}
                    onChange={handleChangeGroupValue}
                    select
                    fullWidth
                    SelectProps={{
                        multiple: true,
                    }}
                >
                    <MenuItem value='IN'> INDIA</MenuItem>
                    <MenuItem value='US'> UNITED STATES </MenuItem>
                    <MenuItem value='AU'>AUSTRALIA</MenuItem>

                </TextField>
            </Box>
             <Typography variant='h2' component='h5'>
                Single-Select
            </Typography>
            <Box width='250px' sx={{ textAlign: 'center', margin: '0 auto', marginTop: '30px' }}>
                <TextField
                    label='Select Country'
                    value={country}
                    onChange={handleChangeSingleValue}
                    select
                    color="warning"
                    fullWidth
                >
                    <MenuItem value='IN'> INDIA</MenuItem>
                    <MenuItem value='US'> UNITED STATES </MenuItem>
                    <MenuItem value='AU'>AUSTRALIA</MenuItem>

                </TextField>
            </Box> 
        </>
    );
}



export default MuiSelect;