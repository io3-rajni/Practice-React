import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Test from "./Test";

import ProfileDailog from "./ProfileDailog";
import SiginDailog from "./SiginDailog";
const Navbar = () => {
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [siginOpen, setSiginOpen] = React.useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [testOpen, setTestOpen] = React.useState(false);
  const [childData, setChildData] = useState({});
  const [profileData, setProfileData] = useState({})
  console.log("child", childData);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleSignIn = () => {
    setSiginOpen(true);
    console.log("sigin");
  };
  const handleProfile = () => {
    setProfileOpen(true);
    console.log("Profile");
  };
  const handleTest = () => {
    setTestOpen(true);
    console.log("Test");
  };
  const handleChild = (data) => {
    setChildData(data);
    console.log("child tarnfer", data);
  };
  const handleChildProfile = (profileData) => {
    setProfileData(profileData)
    console.log("Profile", profileData);
  };

  console.log("sigin", siginOpen);
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ display: { xs: "none", md: "inline" } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white" }}
              >
                Home{" "}
              </Button>
            </Box>
            <Box sx={{ display: { xs: "none", md: "inline" } }}>
              <Button onClick={handleSignIn} sx={{ my: 2, color: "white" }}>
                Sign In{" "}
              </Button>
            </Box>
            <Box sx={{ display: { xs: "none", md: "inline" } }}>
              <Button onClick={handleProfile} sx={{ my: 2, color: "white" }}>
                Profile{" "}
              </Button>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "inline" } }}>
              <Button onClick={handleTest} sx={{ my: 2, color: "white" }}>
                Test
              </Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <ProfileDailog
        profile={profileOpen}
        setProfile={setProfileOpen}
        handleChildProfile={handleChildProfile}
      />
      <SiginDailog
        sigin={siginOpen}
        setSigin={setSiginOpen}
        handleChild={handleChild}
      />
      <Test test={testOpen} testFalse={setTestOpen} />
      <ul>
        <li>First Name :{childData?.firstName}</li>
        <li>LastName : {childData?.lastName}</li>
        <li>Age : {childData?.date}</li>
        <li>Qualification : {childData?.qualification}</li>
        <li>State : {childData?.state}</li>
        <li>Pincode : {childData?.pincode}</li>
      </ul>

      <ul>
        <li>Photo :{profileData?.Pic}</li>
        <li>First Name :{profileData?.FirstName}</li>
        <li>Middle Name : {profileData?.MiddleName}</li>
        <li>LastName : {profileData?.LastName}</li>
        <li>Age : {profileData?.Age}</li>
        <li>Qualification : {profileData?.Qualification}</li>
        <li>Number : {profileData?.Number}</li>
        <li>Email : {profileData?.Email}</li>
        <li>State : {profileData?.State}</li>
        <li>Pincode : {profileData?.Pincode}</li>
        <li>Address :{profileData?.Address}</li>
      </ul>
    </>
  );
};

export default Navbar;
