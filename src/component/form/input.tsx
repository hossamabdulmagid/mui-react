import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
const StateTextFields = () => {
    const [userCred, setUserCred] = useState({ email: "", password: "" });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserCred({ ...userCred, [name]: value });
        console.log(userCred, `user Credintail while typing`);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('from on Submit');

        setTimeout(() => {
            console.log('from setTimeOut');
        }, 4000)
    }

    return (
        <Box
            component="form"
            sx={{ maxWidth: '30rem' ,alignContent:'center',textAlign:'center',margin:'0 auto'}}
            noValidate
            autoComplete="off"
        >
            <h1 style={{ textAlign: "center", margin: '0 auto' }}>
                FORM
            </h1>
            <form onSubmit={handleSubmit}>

            <TextField
                id="outlined-email"
                label="Name"
                error={!userCred.email}
                onChange={handleChange}
                name="email"
                type='email'
                color="secondary"
                helperText={userCred.email.length === 0 ? "Required" : 'dont share Email with any one'}
            />
            <br/>
            <TextField
                id="outlined-password"
                label="Password"
                name="password"
                onChange={handleChange}
                type={'password'}
                color="warning"
                helperText={userCred.email.length === 0 ? "Required" : 'never share password with any one'}
            // value={userCred.password}
            />
            <br />
            <button type='submit'>Button</button>
            </form>


        </Box>
    );
}
export default StateTextFields;