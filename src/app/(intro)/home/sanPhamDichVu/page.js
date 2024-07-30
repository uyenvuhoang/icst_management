import React from "react";
import "../sanPhamDichVu/sanPhamDichVu.css"
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function SanPhamDichVu() {
  const imagesLink = "/images/";
  return (
    <div>
      <div className="sp-dv">
        <div className="sp-dv__content">
          <div className="sp-dv__title">SẢN PHẨM & DỊCH VỤ</div>
          <StarIcon className="sp-dv__starIcon" fontSize="small" />
        </div>
        <a>
          <NavigateNextIcon className="sp-dv__nextIcon" />
        </a>
      </div>

      <div className="sp-dv__link">
        <div className="sp-dv__box">
          {/* Call Center */}
          <Grid container spacing={2}>
            <Grid item xs={4} sp-dv__col1>
              <div className="sp-dv__box-inner">
                <div className="sp-dv__img">
                  <img src={imagesLink + "call-center.jpg"} />
                </div>
                <div className="sp-dv__text">
                  <div>
                    <p>Giải pháp tổng đài Call Center</p>
                  </div>
                  <div className="sp-dv__button">
                    <a>
                      <Button size="large " variant="contained">
                        XEM THÊM
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
            {/* End Call Center */}

            {/* SMS Brandname */}
            <Grid item xs={4} sp-dv__col1>
              <div className="sp-dv__box-inner">
                <div className="sp-dv__img">
                  <img src={imagesLink + "sms-brandname.jpg"} />
                </div>
                <div className="sp-dv__text">
                  <div>
                    <p>Dịch vụ SMS Brandname</p>
                  </div>
                  <div className="sp-dv__button">
                    <a>
                      <Button size="large " variant="contained">
                        XEM THÊM
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
            {/* End SMS Brandname */}

            {/* Mobisip Trunk */}
            <Grid item xs={4} sp-dv__col1>
              <div className="sp-dv__box-inner">
                <div className="sp-dv__img">
                  <img src={imagesLink + "mobisip-trunk.jpg"} />
                </div>
                <div className="sp-dv__text">
                  <div>
                    <p>Dịch vụ Mobi Sip Trunk</p>
                  </div>
                  <div className="sp-dv__button">
                    <a>
                      <Button size="large " variant="contained">
                        XEM THÊM
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
            {/* End Mobi Sip Trunk */}

            {/* Giải pháp CRM */}
            <Grid item xs={4} className="sp-dv__col2">
              <div className="sp-dv__box-inner">
                <div className="sp-dv__img">
                  <img src={imagesLink + "giai-phap-crm.jpg"} />
                </div>
                <div className="sp-dv__text">
                  <div>
                    <p>Giải pháp CRM cho doanh nghiệp</p>
                  </div>
                  <div className="sp-dv__button">
                    <a>
                      <Button size="large " variant="contained">
                        XEM THÊM
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
            {/* End Giải pháp CRM */}

            {/* Voice OTP */}
            <Grid item xs={4} className="sp-dv__col2">
              <div className="sp-dv__box-inner">
                <div className="sp-dv__img">
                  <img src={imagesLink + "voice-otp.jpg"} />
                </div>
                <div className="sp-dv__text">
                  <div>
                    <p>Dịch vụ Voice OTP</p>
                  </div>
                  <div className="sp-dv__button">
                    <a>
                      <Button size="large " variant="contained">
                        XEM THÊM
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
            {/* End Voice OTP */}

            {/* Cung cấp đầu số 1900 */}
            <Grid item xs={4} className="sp-dv__col2">
              <div className="sp-dv__box-inner">
                <div className="sp-dv__img">
                  <img src={imagesLink + "cung-cap-dau-so.jpg"} />
                </div>
                <div className="sp-dv__text">
                  <div>
                    <p>Dịch vụ cung cấp đầu số 1900</p>
                  </div>
                  <div className="sp-dv__button">
                    <a>
                      <Button size="large " variant="contained">
                        XEM THÊM
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
            {/* End Cung cấp đầu số 1900 */}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default SanPhamDichVu;
