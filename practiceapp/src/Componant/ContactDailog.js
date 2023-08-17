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
  const [email, setEmail] = React.useState("");
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
  const handleEmail = (e) => {
    setEmail(e?.target?.value);
  };
  console.log("email", email);
  console.log("Contact", mobileNum);
  const handleSubmit = () => {
    handleContactChild({ Name: contactName, num: mobileNum, email: email });
  };
  //   console.log("submit", );

  return (
    <>
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
              placeholder="Email"
              variant="filled"
              value={email}
              onChange={handleEmail}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancle</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default ContactDailog;
