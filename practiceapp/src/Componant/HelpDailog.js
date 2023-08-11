import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
const HelpDailog = (props) => {
    const { help, setHelp } = props
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


    const handleClose = () => {
        setHelp(false);
    };

    return (
        <>
            <Dialog
                fullScreen={fullScreen}
                open={help}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <Typography varient="1">
                        HelpLine Number = 6239924898
                        HelpLine Number = 9569066048
                        HelpLine Number = 6239080384
                        HelpLine Number = 011-2931030

                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Disagree
                    </Button>
                    {/* <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button> */}
                </DialogActions>
            </Dialog>
        </>
    )
}

export default HelpDailog
