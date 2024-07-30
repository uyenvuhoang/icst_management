import React from "react";
import "../navBar/navBar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

function NavBar() {
  const imagesLink = "/images/";

  return (
    <AppBar className="navBar" position="fixed">
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img src={imagesLink + "logo.png"} className="logo" />
          </Grid>
          <Grid item xs={8}>
            <div className="navItems">
              <div>
                <a className="navLink">TRANG CHỦ</a>
              </div>
              <div>
                <a className="navLink">GIỚI THIỆU</a>
              </div>
              <div>
                <a className="navLink">SẢN PHẨM VÀ DỊCH VỤ</a>
              </div>
              <div>
                <a className="navLink">TIN TỨC</a>
              </div>
              <div>
                <a className="navLink">LIÊN HỆ</a>
              </div>
              <div>
                <Button className="navButton" size="medium" variant="contained">
                  Login
                </Button>
              </div>
              <div>
                <SearchIcon className="navIcon" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
