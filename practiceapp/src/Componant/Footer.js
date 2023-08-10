import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SiginDailog from "./SiginDailog";

const Footer = () => {
  const [footer, setFooter] = React.useState(false);
  const handleLogin = () => {
    setFooter(true);
    console.log("Login");
  };
  return (
    <div>
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
            <Typography>
              <Box sx={{ display: { xs: "none", md: "inline" } }}>
                <Button sx={{ my: 2, color: "white" }}>Contact</Button>
              </Box>
              <Box sx={{ display: { xs: "none", md: "inline" } }}>
                <Button sx={{ my: 2, color: "white" }}>Help</Button>
              </Box>{" "}
              <Box sx={{ display: { xs: "none", md: "inline" } }}>
                <Button sx={{ my: 2, color: "white" }}>Complaint</Button>
              </Box>
              <Box sx={{ display: { xs: "none", md: "inline" } }}>
                <Button onClick={handleLogin} sx={{ my: 2, color: "white" }}>
                  Login
                </Button>
              </Box>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <SiginDailog footer={footer} setFooter={setFooter} />
    </div>
  );
};

export default Footer;
