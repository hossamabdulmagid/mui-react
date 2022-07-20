import { Stack, Button, ButtonGroup ,TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
const MuiButton = () => {
    return (
        <Stack spacing={4} alignContent='center' textAlign={'center'} alignItems='center'>
            <h1>
                BUTTON WITH STACK REACT_MUI
            </h1>
            <Stack spacing={2} direction='row'>
                <Button variant='text' href="https://www.google.com">Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>


            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary' size='small' disableRipple>Primary</Button>
                <Button variant='outlined' color='success' size='large'>Success</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='info'>Info</Button>
                <Button variant='contained' color='warning'>Warning</Button>
                <Button variant='contained' color='error' endIcon={<SendIcon />}>Error
                </Button>
            </Stack>

            <Stack display='block' spacing={2} direction='row'>
                <p>
                    hello
                </p>
            </Stack>
            
            <Stack direction='row'>
                <ButtonGroup variant='text' orientation="vertical" size='small' color='secondary'>
                    <Button>Right</Button>
                    <Button>center</Button>
                    <Button>Left</Button>
                </ButtonGroup>
            </Stack>

        </Stack>
    )
}

export default MuiButton;