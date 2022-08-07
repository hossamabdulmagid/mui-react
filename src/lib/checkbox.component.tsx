import { useState, ChangeEvent } from 'react';
import { Stack, Box, FormControl, FormLabel, FormControlLabel, Checkbox, Radio, Typography } from "@mui/material"
const InputCheckBox = ({ onChange, acceptInc }: {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    acceptInc: boolean;
    checked: boolean;
}) => {

    return (
        <Box>
            <Box>
                <FormControlLabel
                    label="accept Terms"
                    control={<Checkbox checked={acceptInc} onChange={onChange} inputProps={{ 'aria-label': 'controlled' }} required />}
                ></FormControlLabel>
            </Box>
        </Box>
    )
}


export default InputCheckBox;