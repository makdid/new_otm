import React from "react";
import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <div>
      <img
                    className="profile-picture"
                    src="../../assets/otmlogo.png"
                    alt="Profile"
                    width="80px"
                    height="100%"
                  />
      <Outlet />
    </div>
  );
};

export default LayoutPublic;
