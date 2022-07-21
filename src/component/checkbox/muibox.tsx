import { useState } from 'react';
import { Box,FormControlLabel,Checkbox,Typography } from '@mui/material'
const MuiCheckbox = () => {
    const [terms,setTerms] = useState('');
    const[isChecked,setIsChecked]=useState<boolean | undefined>(false);

    console.log(isChecked,`isChecked`);

    console.log({isChecked},`isChecked`);


    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setIsChecked(event.target.checked);
    }
    return (
        <Box>
            <Typography variant='h3' component='h3'>
                Checkbox
                </Typography>
            <Box>
            <FormControlLabel control={<Checkbox  onChange={handleChange} checked={isChecked}/>} label='terms and conditions' value={'accept terms'}/>
             
            </Box>
        </Box>
    );


}



export default MuiCheckbox;