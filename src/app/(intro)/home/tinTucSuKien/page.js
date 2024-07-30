import React from "react";
import "../tinTucSuKien/tinTucSuKien.css";
import StarIcon from "@mui/icons-material/Star";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function TinTucSuKien() {
  const imagesLink = "/images/";
  return (
    <div>
      <div>
        <div className="tt">
          <div className="tt-content">
            <div className="tt-title">TIN TỨC & SỰ KIỆN</div>
            <StarIcon className="tt-starIcon" fontSize="small" />
          </div>
          <a>
            <NavigateNextIcon className="tt-nextIcon" />
          </a>
        </div>
        <div className="tt-img">
          <img src={imagesLink + "tt-img1.jpg"} />
          <div className="tt-overlay"></div>
          <div className="tt-shade"></div>
          <div className="tt-inner">
            <p>Uncategorized</p>
            <h5>
              SMS Marketing là gì ? Có nên sử dụng phần mềm SMS Marketing ?
            </h5>
            <span>Tháng Tám 7, 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TinTucSuKien;
