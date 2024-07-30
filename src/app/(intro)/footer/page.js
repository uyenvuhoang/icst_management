import React from "react";
import "../footer/footer.css"
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <AppBar position="static" className="footer">
      <Toolbar>
        <div className="footer__content">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                {/* Thông Tin */}
                <Grid item xs={6}>
                  <div>
                    <h2>THÔNG TIN</h2>
                  </div>
                  <div className="footer__inner">
                    <div>
                      <a>
                        <span>
                          <NavigateNextIcon className="footer__icon" />
                        </span>
                        <span>TRANG CHỦ</span>
                      </a>
                    </div>
                    <div>
                      <a>
                        <span>
                          <NavigateNextIcon className="footer__icon" />
                        </span>
                        <span>GIỚI THIỆU</span>
                      </a>
                    </div>
                    <div>
                      <a>
                        <span>
                          <NavigateNextIcon className="footer__icon" />
                        </span>
                        <span>SẢN PHẨM VÀ DỊCH VỤ</span>
                      </a>
                    </div>
                    <div>
                      <a>
                        <span>
                          <NavigateNextIcon className="footer__icon" />
                        </span>
                        <span>TIN TUC</span>
                      </a>
                    </div>
                    <div>
                      <a>
                        <span>
                          <NavigateNextIcon className="footer__icon" />
                        </span>
                        <span>LIÊN HỆ</span>
                      </a>
                    </div>
                  </div>
                </Grid>
                {/* End Thông Tin */}

                {/* Hoạt động */}
                <Grid item xs={6}>
                  <div>
                    <h2>HOẠT ĐỘNG</h2>
                  </div>
                  <div className="footer__inner">
                    <div>
                      <a>
                        <span>
                          <NavigateNextIcon className="footer__icon" />
                        </span>
                        <span>Carrer</span>
                      </a>
                    </div>
                    <div>
                      <a>
                        <span>
                          <NavigateNextIcon className="footer__icon" />
                        </span>
                        <span>Services</span>
                      </a>
                    </div>
                    <div>
                      <a>
                        <span>
                          <NavigateNextIcon className="footer__icon" />
                        </span>
                        <span>Hire Us</span>
                      </a>
                    </div>
                    <div>
                      <a>
                        <span>
                          <NavigateNextIcon className="footer__icon" />
                        </span>
                        <span>Partner</span>
                      </a>
                    </div>
                    <div>
                      <a>
                        <span>
                          <NavigateNextIcon className="footer__icon" />
                        </span>
                        <span>Brand Assets</span>
                      </a>
                    </div>
                  </div>
                </Grid>
                {/* End Hoạt Động */}
              </Grid>
            </Grid>

            <Grid item xs={6} className="footer__right">
              <div>
                <h2>CÔNG TY TNHH ICST VIỆT NAM</h2>
              </div>
              <div className="footer__divider"></div>
              <div className="footer__follow">
                <a className="footer__fa">
                  <FacebookIcon
                    fontSize="small"
                    className="footer__follow-icon"
                  />
                </a>
                <a className="footer__ig">
                  <InstagramIcon
                    fontSize="small"
                    className="footer__follow-icon"
                  />
                </a>
                <a className="footer__tw">
                  <TwitterIcon
                    fontSize="small"
                    className="footer__follow-icon"
                  />
                </a>
                <a className="footer__yt">
                  <YouTubeIcon
                    fontSize="small"
                    className="footer__follow-icon"
                  />
                </a>
              </div>
            </Grid>
          </Grid>
        </div>
      </Toolbar>
      <Container maxWidth="xl" className="footer__copy-right">
        <Typography variant="body1" className="footer__copy-right-content">
          Copyright 2023 © <span>ICST</span>
        </Typography>
      </Container>
    </AppBar>
  );
}

export default Footer;
