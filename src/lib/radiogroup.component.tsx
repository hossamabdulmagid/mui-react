
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Typography } from "@mui/material"
import { ChangeEvent } from "react";




const InputRadio = ({ onChange, value, label, name, ref }: {
    value: string[];
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    label: string[];
    name: string;
    ref: any;
}) => {
    return (
        <Box>
            <FormControl>
                <FormLabel id="type" >
                    Create new section
                </FormLabel>
                <RadioGroup onChange={onChange} aria-labelledby="type" name={name} defaultValue={value[0]} ref={ref}>
                    <FormControlLabel control={<Radio />} label={label[0]} value={value[0]} />
                    <FormControlLabel control={<Radio />} label={label[1]} value={value[1]} />
                </RadioGroup>
            </FormControl>
        </Box >
    );
}



export default InputRadio;