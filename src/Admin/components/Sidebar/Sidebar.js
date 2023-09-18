import React from "react";

const Sidebar = () => {
  return (
    <div>
    <div className="fixed border-2 border-black bg-[#fff] w-[250px] h-[100%] top-0 left-0 z-10 ">
      <img src="/img/vatsal.png" className="py-2 w-[100%] px-5" alt=""/>
      <ul className="py-40">
        <li className="py-2 ">
          <a href="#" className="px-10 text-white">
            <span className="text-[#12B28C] text-[24px] font-inter not-italic font-bold leading-[normal] tracking-[0.48px]">Dashboard</span>
          </a>
        </li>
        <li className="py-2">
        <a href="#" className="px-10 text-white">
        <span className="text-[#12B28C] text-[24px] font-inter not-italic font-bold leading-[normal] tracking-[0.48px]">Users</span>
          </a>
        </li>
        <li className="py-2">
        <a href="#" className="px-10 text-white">
        <span className="text-[#12B28C] text-[24px] font-inter not-italic font-bold leading-[normal] tracking-[0.48px]">Edit Form</span>
          </a>
        </li>
      </ul>
    </div>
    <div className="fixed border-2 border-black bg-[#fff] w-[1150px] h-[8%] top-0  left-[15.5rem] z-10 ">
   <div className="flex flex-row   bg-white ">
    <div className="flex flex-row py-1  pl-2 ">
    <img src="/img/dashboard.png" className=" w-[15%]" alt=""/>
    <div className="flex flex-col py-2 px-2 ">
      <h2 className="text-[color:var(--01,#211F3B)] text-[18px] font-Montserrat not-italic font-bold leading-[normal]">Anjali Mandal</h2>
      <h2 className="text-[#7FB64E] text-[10px] not-italic font-semibold leading-[normal]">Job Role</h2>
      </div>
      </div>
      <div className="flex justify-center items-center  ">
      <h2>Dashboard</h2>
      </div>
      <div className="flex justify-center items-center  ">
      <h2>Icon</h2>
      </div>
</div> 
  </div>
    {/* <div className="flex flex-row   bg-white justify-center items-center ">
    <div className="flex flex-row py-1   ">
    <img src="/img/dashboard.png" className=" w-[15%]" alt=""/>
    <div className="flex flex-col py-2 px-2 ">
      <h2 className="text-[color:var(--01,#211F3B)] text-[18px] font-Montserrat not-italic font-bold leading-[normal]">Anjali Mandal</h2>
      <h2 className="text-[#7FB64E] text-[10px] not-italic font-semibold leading-[normal]">Job Role</h2>
      </div>
      </div>
      <div className="flex justify-center items-center  ">
      <h2>Dashboard</h2>
      </div>
      <div className="flex justify-end items-end  ">
      <h2>Icon</h2>
      </div>
</div> */}
    </div>
  );
};

export default Sidebar;
