import NavBar from "../../layouts/navBar";

import { Typography } from "@material-tailwind/react";
import InnerContent from "./innerContent";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <NavBar />

      <div className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">

        <div className="flex items-center gap-4 ">
          <InnerContent/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
