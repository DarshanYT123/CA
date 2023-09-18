import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/sidebar.css";
import {  dashboardTopLink } from "../../lib/constants";
import classNames from "classnames";
import {
  linkClass,
  activeLinkClass,
  sidebarRespClass,
  sidebarClass,
} from "../../lib/constants/classes";

const Sidebar = ({ sidebarOpen}) => (
  <div
    className={classNames(sidebarOpen ? sidebarRespClass : sidebarClass)}
    id=""
  >
    <div className="flex items-center justify-between mx-3 mt-2">
      <img
        src={require("../../images/Vatsal.png")}
        alt="logo"
        className=" h-24 w-full object-cover md:h-full md:w-48"
      />
      {/* close button */}
      {/* <button
        onClick={() => closeSidebar()}
        className="lg:hidden xl:hidden outline-none text-white sm:block"
        id="sidebarIcon"
        aria-hidden="true"
      >
        <AiOutlineCloseCircle fontSize={30} />
      </button> */}
      {/* End */}
    </div>
    {/* Top Link Portion */}
    <div className="flex-1 py-52">
      {/* Sidebar Top Link Function */}
      {dashboardTopLink.map((item) => (
        <SidebarLink key={item.key} item={item} />
      ))}
    </div>
    {/* End */}
    {/* Bottom Link Portion */}
    {/* <div className={bottomLinkClass}>
      {dashboardBottomLink.map((item) => (
        <SidebarLink key={item.key} item={item} />
      ))}
    </div> */}
    {/* End */}
  </div>
);

export default Sidebar;

function SidebarLink({ item }) {
  const { pathname } = useLocation(); // For active link denote
  return (
    // all links import form index.jsx
    <div className="text-white  text-xl ml-6 my-4 py-2">
      <Link
        to={item.path}
        className={classNames(
          pathname === item.path ? activeLinkClass : "text-[#12B28C] text-[24px] font-inter not-italic font-bold leading-[normal] tracking-[0.48px]",
          linkClass
        )}
      >
        {/* <img src={item.img} alt="" className="w-5 h-5" /> */}
        {item.label}
      </Link>
    </div>
  );
}
