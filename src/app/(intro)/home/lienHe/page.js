import React from "react";
import "../lienHe/lienHe.css";
import StarIcon from "@mui/icons-material/Star";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function LienHe() {
  return (
    <div className="lh">
      <div className="lh__content">
        <div className="lh__title">
          Hãy liên hệ với chúng tôi để được tư vấn chi tiết hơn
        </div>
        <StarIcon className="lh__starIcon" fontSize="small" />
      </div>
      <div className="lh__textField">
        <TextField
          required
          className="lh__textField-name"
          label="Name"
          variant="outlined"
          size="small"
          color="warning"
        />
        <TextField
          required
          className="lh__textField-phone"
          label="Phone"
          variant="outlined"
          size="small"
          color="warning"
        />
        <TextField
          required
          className="lh__textField-email"
          label="Email"
          variant="outlined"
          size="small"
          color="warning"
        />
        <TextField
          required
          className="lh__textField-message"
          label="Message"
          variant="outlined"
          size="small"
          multiline
          rows={4}
          color="warning"
        />
      </div>
      <div className="lh__submit">
        <Button size="large " variant="contained">
          <input type="submit" value="Submit" />
        </Button>
      </div>
    </div>
  );
}

export default LienHe;
