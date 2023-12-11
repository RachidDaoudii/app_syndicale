import NavBar from "../../layouts/navBar";

import { Typography } from "@material-tailwind/react";
import InnerContent from "./innerContent";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <NavBar />

      <div className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
        <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
          {/* <Typography
            as="a"
            href="#"
            className="font-medium text-2xl tracking-tight mt-4"
          >
            Dashboard
          </Typography> */}
        </div>

        <div className="flex items-center gap-4">
          <div className="w-full mt-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
