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

const ProfileDailog = (props) => {
  const { profile, setProfile, handleChildProfile } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [pic, setPic] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pin, setPin] = useState("");
  const [date, setDate] = useState("");
  const [qualification, setQualification] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  //   const [data, setData] = useState({
  //     Photo: "",
  //     FirstName: "",
  //     MiddleName: "",
  //     LastName: "",
  //     Age: "",
  //     Qualification: "",
  //     State: "",
  //     Pincode: "",
  //     Number: "",
  //     Email: "",
  //     Address: "",
  //     bio: "",
  //   });

  const handleClose = () => {
    setProfile(false);
  };
  const handlePic = (e) => {
    setPic(e?.target?.value);
  };
  const handleFirstName = (e) => {
    setFirstName(e?.target?.value);
  };
  const handleMiddleName = (e) => {
    setMiddleName(e?.target?.value);
  };
  const handleLastName = (e) => {
    setLastName(e?.target?.value);
  };
  const handleQualification = (e) => {
    setQualification(e?.target?.value);
  };
  const handleDate = (e) => {
    setDate(e?.target?.value);
  };
  const handleNumber = (e) => {
    setNumber(e?.target?.value);
  };
  const handleEmail = (e) => {
    setEmail(e?.target?.value);
  };
  const handleBio = (e) => {
    setBio(e?.target?.value);
  };
  const handleAddress = (e) => {
    setAddress(e?.target?.value);
  };
  const handlePincode = (e) => {
    setPin(e?.target?.value);
  };
  const handleSubmit = () => {
    handleChildProfile({
      Photo: pic,
      FirstName: firstName,
      MiddleName: middleName,
      LastName: lastName,
      Age: date,
      Qualification: qualification,
      State: "",
      Pincode: pin,
      Number: number,
      Email: email,
      Address: address,
      bio: bio,
    });
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
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <>
              <TextField
                placeholder="Paste Photo"
                type="file"
                onChange={handlePic}
                value={pic}
              />

              <>
                <TextField
                  placeholder="First Name"
                  type="text"
                  onChange={handleFirstName}
                  value={firstName}
                />
                <TextField
                  placeholder="Middle Name"
                  type="text"
                  onChange={handleMiddleName}
                  value={middleName}
                />
                <TextField
                  placeholder="Last Name"
                  type="text"
                  onChange={handleLastName}
                  value={lastName}
                />
                <TextField
                  placeholder="DOB"
                  type="date"
                  onChange={handleDate}
                  value={date}
                />
              </>
              <>
                <TextField placeholder="Qualification" type="text" />
                <TextField
                  placeholder="Bio"
                  type="text"
                  inputProps={{ maxLength: 50 }}
                  onChange={handleBio}
                  value={bio}
                />
              </>
              <TextField
                placeholder="Number"
                type="text"
                inputProps={{ maxLength: 12 }}
                onChange={handleNumber}
                value={number}
              />
              <TextField
                placeholder="Email"
                type="text"
                onChange={handleEmail}
                value={email}
              />
            </>
            <>
              <TextField
                placeholder="Qualification"
                type="text"
                onChange={handleQualification}
                value={qualification}
              />
              <TextField
                placeholder="Address"
                type="text"
                onChange={handleAddress}
                value={address}
              />
            </>
            <>
              <TextField placeholder="State" type="text" />
              <TextField
                placeholder="Pincode"
                type="text"
                inputProps={{ maxLength: 6 }}
                onChange={handlePincode}
                value={pin}
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
  );
};

export default ProfileDailog;
