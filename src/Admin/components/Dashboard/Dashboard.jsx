import React from "react";
import { dashboardMainClass } from "../../lib/constants/classes";
import DashboardVatsal from "../../../Admin/components/Dashboard/DashboardVatsal";

const Dashboard = () => {
  // use to display title and header title

  return (
    <div className={dashboardMainClass}>
      {/* This components are display to data on dashboard form ./dash_components/ */}
      <div>
        <h2 className="py-1 px-2 text-black text-[16px] font-inter not-italic font-medium leading-[normal]">Inquiries</h2>
      </div>
     <DashboardVatsal/>
    </div>
  );
};

export default Dashboard;
