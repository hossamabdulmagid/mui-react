import React, { useState } from 'react';
import { Stack, Box, Button, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel } from '@mui/material';
const RadioButton = () => {

    const [value, setValue] = useState('');
    console.log(value, `value`);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <Box>
            <FormControl>
                <FormLabel id='job-expernice-group-label'>
                    Years Of Experince
                </FormLabel >

                <RadioGroup id='job-expernice-group' aria-labelledby="job-expernice-group-label" onChange={handleChange}>
                    <FormControlLabel control={<Radio />} label='0-2' value='0-2' />
                    <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
                    <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
                </RadioGroup>
            </FormControl>
        </Box>
    );
}


export default RadioButton;