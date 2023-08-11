import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const ContactDailog = (props) => {
    const { contact, setContact } = props
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });
    const handleClose = () => {
        setContact(false);
    };
    return (

        <div>

            <Dialog
                open={contact}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Contact Detail"}</DialogTitle>
                <DialogContent>

                    <Stack
                        component="form"
                        sx={{
                            width: '25ch',
                        }}
                        spacing={2}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            defaultValue="Name"
                            variant="filled"
                            size="small"
                        />
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-normal"
                            defaultValue="Mobile"
                            variant="filled"
                        />
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-normal"
                            defaultValue="Email"
                            variant="filled"
                        />
                    </Stack>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancle</Button>
                    {/* <Button onClick={handleClose}>Agree</Button> */}
                </DialogActions>
            </Dialog>

        </div>
    );
}
export default ContactDailog
