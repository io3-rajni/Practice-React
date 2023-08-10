import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TextField, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const SiginDailog = (props) => {
  const { sigin, setSigin, footer, setFooter } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  // const handleClickOpen = () => {
  //     setOpen(true);
  // };

  const handleClose = () => {
    setSigin(false);
  };
  const handleCloseFooter = () => {
    setFooter(false);
    console.log("footer");
  };
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open responsive dialog
            </Button> */}
      <Dialog
        fullScreen={fullScreen}
        open={(sigin, footer)}
        onClose={handleClose}
        onCloseFooter={handleCloseFooter}
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
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField placeholder="First Name" type="text" />
                <TextField placeholder="Last Name" type="text" />
              </div>
              <div>
                <TextField placeholder="DOB" type="date" />
                <TextField placeholder="Quualification" type="text" />
              </div>
              <div>
                <TextField placeholder="State" type="text" />
                <TextField
                  placeholder="Pincode"
                  type="text"
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
  );
};

export default SiginDailog;
