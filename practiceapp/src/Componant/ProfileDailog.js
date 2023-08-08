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

        <div>

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
                                    placeholder='Paste Photo'
                                    type='file'
                                />

                                <div>
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

                                </div>
                                <div>
                                    <TextField

                                        placeholder='Qualification'
                                        type='text'
                                    />
                                    <TextField

                                        placeholder='Bio'
                                        type='text'
                                        inputProps={{ maxlength: 50 }}
                                    />



                                </div>
                                <TextField

                                    placeholder='Number'
                                    type='text'
                                    inputProps={{ maxlength: 12 }}
                                />
                                <TextField

                                    placeholder='Email'
                                    type='text'

                                />


                            </div>
                            <div>



                                <TextField

                                    placeholder='Qualification'
                                    type='text'
                                />
                                <TextField

                                    placeholder='Address'
                                    type='text'

                                />
                            </div>
                            <div>
                                <TextField

                                    placeholder='State'
                                    type='text'
                                />
                                <TextField

                                    placeholder='Pincode'
                                    type='text'
                                    inputProps={{ maxlength: 6 }}
                                />

                            </div>
                        </Box>


                    </DialogContentText>
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
        </div>
    )
}

export default ProfileDailog
