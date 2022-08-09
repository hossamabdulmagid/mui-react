import { useState, useEffect, useRef, ChangeEvent } from 'react';

import { TextField, Box } from '@mui/material';
import generateRandom from './generate-random';

const InputForm = ({ type, onChange, label, error, helperText, value, register }: {
    type: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    label: string;
    error: any;
    helperText: any;
    value: string;
    register: any;

}) => {
    const htmlId = generateRandom();

    return (
        <Box>
            <TextField
                type={type}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                {...register}
                onChange={(e) => onChange(e)}
                label={label}
                id={htmlId}
                error={error}
                helperText={helperText}
                value={value}
                sx={{ mt: 2, padding: '2px' }}
                variant="filled"
                fullWidth
            />
        </Box>
    )
}


export default InputForm;