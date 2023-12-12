import React from "react";
import { Outlet } from "react-router-dom";

export default function InnerContent() {
  return (
    <div className="w-full mt-4 ">
      <Outlet />
    </div>
  );
}
