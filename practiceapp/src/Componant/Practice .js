import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';

export default function Practice() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                <h1>Open Ragistration Form</h1>
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">

                    {"Ragistration Form"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>

                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField

                                    id="outlined-error"
                                    label="First Name"
                                    value=""
                                />
                                <TextField

                                    id="outlined-error-helper-text"
                                    label="Last Name"
                                    value=""



                                />
                            </div>
                            <div>
                                <TextField

                                    id="outlined-error"
                                    label="Age"
                                    type='number'
                                    value=""

                                />
                                <TextField

                                    id="outlined-error-helper-text"
                                    label="Qualification"
                                    value=""


                                />
                            </div>
                            <div>
                                <TextField

                                    id="outlined-error"
                                    label="State"
                                    value=""
                                />
                                <TextField

                                    id="outlined-error-helper-text"
                                    label="Pincode"
                                    value=""
                                    type='number'


                                />
                            </div>

                        </Box>


                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancle
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
