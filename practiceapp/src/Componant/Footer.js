import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SiginDailog from "./SiginDailog";
import ContactDailog from "./ContactDailog";
import HelpDailog from "./HelpDailog";
import Complaint from "./Complaint";
const Footer = () => {
  const [footer, setFooter] = React.useState(false);
  const [openContact, setOpenContact] = React.useState(false);
  const [openHelp, setOpenHelp] = React.useState(false);
  const [openComplaint, setOpenComplaint] = React.useState(false);
  const handleLogin = () => {
    setFooter(true);
    console.log("Login");
  };
  const handleContact = () => {
    setOpenContact(true);
    console.log("contact");
  };
  const handleHelp = () => {
    setOpenHelp(true);
    console.log("help");
  };
  const handleClick = () => {
    setOpenComplaint(true);
    console.log("Complaint");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", md: "inline" } }}>
              <Button onClick={handleContact} sx={{ my: 2, color: "white" }}>
                Contact
              </Button>
            </Box>
            <Box sx={{ display: { xs: "none", md: "inline" } }}>
              <Button onClick={handleHelp} sx={{ my: 2, color: "white" }}>
                Help
              </Button>
            </Box>{" "}
            <Box sx={{ display: { xs: "none", md: "inline" } }}>
              <Button onClick={handleClick} sx={{ my: 2, color: "white" }}>
                Complaint
              </Button>
            </Box>
            <Box sx={{ display: { xs: "none", md: "inline" } }}>
              <Button onClick={handleLogin} sx={{ my: 2, color: "white" }}>
                Login
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <HelpDailog help={openHelp} setHelp={setOpenHelp} />
      <ContactDailog contact={openContact} setContact={setOpenContact} />
      <SiginDailog sigin={footer} setSigin={setFooter} />
      <Complaint Complaint={openComplaint} setComplaint={setOpenComplaint} />
    </>
  );
};

export default Footer;
