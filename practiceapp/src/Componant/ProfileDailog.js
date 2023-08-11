import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { TextField, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ProfileDailog = (props) => {
    const [open, setOpen] = useState(false)
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const { profile, setProfile } = props


    const handleClose = () => {
        setProfile(false);
    };
    return (

        <>

            <Dialog
                fullScreen={fullScreen}
                open={profile}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Enter Your Details"}
                </DialogTitle>
                <DialogContent>

                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <>
                            <TextField
                                placeholder='Paste Photo'
                                type='file'
                            />

                            <>
                                <TextField
                                    placeholder='First Name'
                                    type='text'
                                />
                                <TextField
                                    placeholder='Middle Name'
                                    type='text'
                                />
                                <TextField

                                    placeholder='Last Name'
                                    type='text'

                                />
                                <TextField

                                    placeholder='DOB'
                                    type='date'
                                />

                            </>
                            <>
                                <TextField

                                    placeholder='Qualification'
                                    type='text'
                                />
                                <TextField

                                    placeholder='Bio'
                                    type='text'
                                    inputProps={{ maxlength: 50 }}
                                />



                            </>
                            <TextField

                                placeholder='Number'
                                type='text'
                                inputProps={{ maxlength: 12 }}
                            />
                            <TextField

                                placeholder='Email'
                                type='text'

                            />


                        </>
                        <>



                            <TextField

                                placeholder='Qualification'
                                type='text'
                            />
                            <TextField

                                placeholder='Address'
                                type='text'

                            />
                        </>
                        <>
                            <TextField

                                placeholder='State'
                                type='text'
                            />
                            <TextField

                                placeholder='Pincode'
                                type='text'
                                inputProps={{ maxlength: 6 }}
                            />

                        </>
                    </Box>



                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancle
                    </Button>
                    {/* <Button onClick={} autoFocus>
                        Agree
                    </Button> */}
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ProfileDailog
