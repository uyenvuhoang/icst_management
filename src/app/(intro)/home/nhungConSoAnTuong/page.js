import React from "react";
import "../nhungConSoAnTuong/nhungConSoAnTuong.css"
import StarIcon from "@mui/icons-material/Star";

function NhungConSoAnTuong() {
  const imagesLink = "/images/";
  return (
    <div className="ncsat">
      <div className="ncsat__content">
        <div className="ncsat__title">NHỮNG CON SỐ ẤN TƯỢNG</div>
        <StarIcon className="ncsat__starIcon" fontSize="small" />
      </div>
      <div className="ncsat__img">
        <img src={imagesLink + "nhung-con-so-an-tuong.jpg"} />
      </div>
    </div>
  );
}

export default NhungConSoAnTuong;
