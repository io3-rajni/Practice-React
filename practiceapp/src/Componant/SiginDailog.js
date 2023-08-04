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

export default function SiginDailog(props) {
    const { open, setOpen, parent } = props;

    const [firstName, setFirstName] = React.useState()
    const [lastName, setLastName] = React.useState()
    const [age, setAge] = React.useState()
    const [qualification, setQualification] = React.useState()
    const [pincode, setPincode] = React.useState()
    const [state, setState] = React.useState()
    const theme = useTheme();
    // const [data, setData] = React.useState({
    //     firstName: '',
    //     lastName: '',
    //     dob: '',
    //     qualification: '',
    //     state: '',
    //     pincode: ''
    // })
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };
    const handleName = (event) => {
        setFirstName(event?.target?.value)
    }
    const handleLastName = (event) => {
        setLastName(event?.target?.value)
        console.log("last Name", event?.target?.value)
    }
    const handleAge = (event) => {
        setAge(event?.target?.value)
        console.log("DOB", event?.target?.value)
    }
    const handleQualification = (e) => {
        setQualification(e?.target?.value)
        console.log("Qualification", e?.target?.value)
    }
    const handleState = (e) => {
        setState(e?.target?.value)
        console.log("State", e?.target?.value)
    }
    const handlePincode = (e) => {
        setPincode(e?.target?.value)
        console.log("pincode", e?.target?.value)
    }

    const handleSubmit = () => {
        parent({
            firstName: firstName,
            lastName: lastName,
            dob: age,
            qualification: qualification,
            state: state,
            pincode: pincode
        })
        setOpen(false)
        setLastName()
        setAge()
        setQualification()
        setState()
        setPincode()
    }


    // console.log("data", data)
    return (
        <div>
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
                                    value={firstName}
                                    onChange={handleName}
                                    type="text"
                                />
                                <TextField

                                    id="outlined-error-helper-text"
                                    label="Last Name"
                                    value={lastName}
                                    onChange={handleLastName}
                                    type="text"

                                />
                            </div>
                            <div>
                                <TextField

                                    id="outlined-error"
                                    label="DOB"
                                    value={age}
                                    type="date"
                                    onChange={handleAge}

                                />
                                <TextField

                                    id="outlined-error-helper-text"
                                    label="Qualification"
                                    value={qualification}
                                    onChange={handleQualification}

                                />
                            </div>
                            <div>
                                <TextField

                                    id="outlined-error"
                                    label="State"
                                    value={state}
                                    onChange={handleState}
                                />
                                <TextField

                                    id="outlined-error-helper-text"
                                    label="Pincode"
                                    value={pincode}
                                    type='text'
                                    onChange={handlePincode}
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
                    <Button onClick={handleSubmit} autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
