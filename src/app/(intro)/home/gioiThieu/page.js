import React from "react";
import "../gioiThieu/gioiThieu.css"
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TinTucSuKien from "../tinTucSuKien/page";

function GioiThieu() {
  const imagesLink = "/images/";
  return (
    <div className="content">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div className="gt">
            <div className="gt-content">
              <div className="gt-title">GIỚI THIỆU</div>
              <StarIcon className="gt-starIcon" fontSize="small" />
            </div>
            <a>
              <NavigateNextIcon className="gt-nextIcon" />
            </a>
          </div>
          <div className="gt-img">
            <img src={imagesLink + "gt-img.jpg"} />
          </div>
          <div className="gt-text">
            <p>
              <a href="">icstcorp.com.vn</a> là niềm đam mê của chúng tôi nhằm
              cách mạng hóa việc tạo ra các công cụ và giải pháp để biến công
              việc kinh doanh của bạn thành công việc có ý nghĩa bằng cách đơn
              giản hóa các nhiệm vụ nhàm chán, lặp đi lặp lại và không thể tránh
              khỏi của bạn.
            </p>
          </div>
        </Grid>
        <Grid item xs={4}>
          <TinTucSuKien />
        </Grid>
      </Grid>
    </div>
  );
}

export default GioiThieu;
