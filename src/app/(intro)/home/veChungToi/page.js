import React from "react";
import "../veChungToi/veChungToi.css"
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";

function VeChungToi() {
  const imagesLink = "/images/";
  return (
    <div className="vct">
      <div className="vct-content">
        <div className="vct-title">VỀ CHÚNG TÔI</div>
        <StarIcon className="vct-starIcon" fontSize="small" />
      </div>
      <div className="vct__content-col">
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <div className="vct__text">
              <div>
                <img src={imagesLink + "trung-thuc.jpg"} />
              </div>
              <div>
                <h3>Trung thực</h3>
                <p>
                  Chúng tôi chọn cách trung thực và luôn đồng hành cũng khách
                  hàng để có cách làm việc tốt hơn và thuận tiện hơn.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="vct__text">
              <div>
                <img src={imagesLink + "cntt.jpg"} />
              </div>
              <div>
                <h3>Công nghệ tiên tiến</h3>
                <p>
                  Chúng tôi tin rằng công nghệ là chìa khóa thành công của khách
                  hàng và của chính ICST. AI là tương lai của giải pháp của
                  chúng tôi.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="vct__text">
              <div>
                <img src={imagesLink + "ben-vung.jpg"} />
              </div>
              <div>
                <h3>Bền vững</h3>
                <p>
                  Chúng tôi không có nghĩa là trở thành một cái gì đó độc đáo.
                  Chúng tôi muốn trở thành ”ứng dụng hàng xóm thân thiện” của
                  bạn trong các công việc hàng ngày liên quan đến quản lý dữ
                  liệu.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="vct__text">
              <div>
                <img src={imagesLink + "ho-tro.jpg"} />
              </div>
              <div>
                <h3>Hỗ trợ CSKH 24/7</h3>
                <p>
                  Bộ phận chăm sóc khách hàng ICST hoạt động 24/7 nhằm đem đến
                  cho khách hàng sự hài lòng cao nhất, với chất lượng dịch vụ
                  nhanh chóng, tận tâm, kênh hỗ trợ đa dạng, kết nối mọi lúc mọi
                  nơi.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default VeChungToi;
