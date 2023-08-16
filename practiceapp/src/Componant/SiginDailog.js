import React, { useState } from "react";
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
  const { sigin, setSigin, handleChild } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [state, setState] = useState("");
  const [qualification, setQualification] = useState("");
  const [age, setAge] = useState("");
  const [pincode, setPincode] = useState("");
  // const [childData, setChilData] = useState({
  //   firstName: firstName,
  //   lastName: lastName,
  //   age: age,
  //   qualification: qualification,
  //   state: state,
  //   pincode: pincode,
  // })
  // const [dataSubmit, setDataSubmit] = useState({
  //   firstName: "",
  //   lastName: "",
  //   age: "",
  //   qualification: "",
  //   state: "",
  //   pincode: "",
  // });
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setSigin(false);
  };
  const handleName = (e) => {
    setFirstName(e.target?.value);
    console.log("first name", firstName);
  };
  const handleLastName = (e) => {
    setLastName(e?.target?.value);
    console.log("last name", lastName);
  };
  const handleDate = (e) => {
    setAge(e?.target?.value);
    console.log("date", age);
  };
  const handleQualification = (e) => {
    setQualification(e?.target?.value);
    console.log("last name", qualification);
  };
  const handleState = (e) => {
    setState(e?.target?.value);
    console.log("State name", state);
  };
  const handlePincode = (e) => {
    setPincode(e?.target?.value);
    console.log("Pincode", pincode);
  };
  const handleSubmit = () => {

    handleChild({
      firstName: firstName,
      lastName: lastName,
      age: age,
      qualification: qualification,
      state: state,
      pincode: pincode,
    })
  }
  return <>
    <Dialog
      fullScreen={fullScreen}
      open={sigin}
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
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <>
            <TextField
              placeholder="First Name"
              type="text"
              onChange={handleName}
              value={firstName}
            />
            <TextField
              placeholder="Last Name"
              type="text"
              onChange={handleLastName}
              value={lastName}
            />
          </>
          <>
            <TextField
              placeholder="DOB"
              type="date"
              onChange={handleDate}
              value={age}
            />
            <TextField
              placeholder="Qualification"
              type="text"
              onChange={handleQualification}
              value={qualification}
            />
          </>
          <>
            <TextField
              placeholder="State"
              type="text"
              onChange={handleState}
              value={state}
            />
            <TextField
              placeholder="Pincode"
              type="text"
              inputProps={{ maxLength: 6 }}
              onChange={handlePincode}
              value={pincode}
            />
          </>
        </Box>
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
  </>

};

export default SiginDailog;
