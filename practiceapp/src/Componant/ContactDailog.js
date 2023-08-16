import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const ContactDailog = (props) => {
  const { contact, setContact, handleContactChild } = props;
  //   const Transition = React.forwardRef(function Transition(props, ref) {
  //     return <Slide direction="up" ref={ref} {...props} />;
  //   });
  const [contactName, setContactName] = React.useState("");
  const [mobileNum, setMobileNum] = React.useState("");
  //   const [submit, setSubmit] = React.useState({
  //     Name: "",
  //     Email: "",
  //     Number: "",
  //   });
  const handleClose = () => {
    setContact(false);
  };
  const handleName = (e) => {
    setContactName(e?.target?.value);
  };
  console.log("name", contactName);
  const handleNumber = (e) => {
    setMobileNum(e?.target?.value);
  };
  console.log("Contact", mobileNum);
  const handleSubmit = () => {
    handleContactChild({ Name: contactName, Email: mobileNum });
  };
  //   console.log("submit", );

  return (
    <div>
      <Dialog
        open={contact}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Contact Detail"}</DialogTitle>
        <DialogContent>
          <Stack
            component="form"
            sx={{
              width: "25ch",
            }}
            spacing={2}
            noValidate
            autoComplete="off"
          >
            <TextField
              placeholder="Name"
              type="text"
              onChange={handleName}
              value={contactName}
            />
            <TextField
              hiddenLabel
              id="filled-hidden-label-normal"
              placeholder="Mobile"
              variant="filled"
              type="number"
              onChange={handleNumber}
              value={mobileNum}
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
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ContactDailog;
