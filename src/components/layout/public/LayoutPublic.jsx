import React from "react";
import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <div>
      LayoutPublic
      <Outlet />
    </div>
  );
};

export default LayoutPublic;
