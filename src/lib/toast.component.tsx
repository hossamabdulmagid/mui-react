import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomizedSnackbars = ({ onClose, openToast, value }: any) => {
    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={openToast} autoHideDuration={4000} onClose={onClose}>
                <Alert onClose={onClose} severity="success" sx={{ width: '100%' }}>
                    This section {value} has been added, if you leave any section empty it will not fire🔥or appear!
                </Alert>
            </Snackbar>
        </Stack>
    );
}
export default CustomizedSnackbars;