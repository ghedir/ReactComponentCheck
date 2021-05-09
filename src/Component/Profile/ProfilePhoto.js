import React from "react";

import ProfileImg from "../Profile/images/profile.jpg";

const Profileimg = (e) => {
  return (
    <div className="profile">
      <div className="image">
        <img src={ProfileImg} style={{ height: "100px", width: "100px" }} />
      </div>
    </div>
  );
};
export default Profileimg;
