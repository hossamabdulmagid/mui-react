import { useState, ChangeEvent } from 'react';
import { Box, FormControlLabel, Checkbox, } from "@mui/material"
const InputCheckBox = ({ onChange, acceptInc }: {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    acceptInc: boolean;
    checked: boolean;
}) => {

    return (
        <Box>
            <Box>
                <FormControlLabel
                    label="Special section (like Education, Work)"
                    control={<Checkbox checked={acceptInc} onChange={onChange} inputProps={{ 'aria-label': 'controlled' }} />}
                />
            </Box>
        </Box>
    )
}


export default InputCheckBox;