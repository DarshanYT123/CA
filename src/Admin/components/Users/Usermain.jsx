import React from "react";
// import Graph from "./dash_components/Graph";
// import History from "./dash_components/History";
// import Recent from "./dash_components/Recent";
// import Total from "./dash_components/Total";
import { dashboardMainClass } from "../../lib/constants/classes";
import Users from "./Users";

const Usermain = () => {
  // use to display title and header title

  return (
    <div className={dashboardMainClass}>
      {/* This components are display to data on dashboard form ./dash_components/ */}
      <div>
        <h2 className="py-1 px-2 text-black text-[16px] font-inter not-italic font-medium leading-[normal]">Inquiries</h2>
      </div>
<Users/>
      {/* <Total />
      <Recent />
      <History />
      <Graph /> */}
    </div>
  );
};

export default Usermain;
