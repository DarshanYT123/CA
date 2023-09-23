import React, {  useState } from 'react';
import { dashboardMainClass } from "../../lib/constants/classes";
// import DashboardVatsal from "../../../Admin/components/Dashboard/DashboardVatsal";
import TabNavItem from '../TabNavItem/PageTabNavItem';
import TabContent from '../TabContent/PageTabContent';
// import { Link } from "react-router-dom";
// import fireDb from "../../../firebase"
// import { toast } from 'react-toastify';
// import Latest from './Latest';
// import Solved from './Solved';
// import Moved from './Moved';
// import Removed from './Removed';

const Dashboard = () => {
  // use to display title and header title
  const [activeTab, setActiveTab] = useState("tab1");

  // const [data,setData] = useState({});

  // useEffect(() => {
  //   fireDb.child("contacts").on("value",(snapshot)=>{
  //     if(snapshot.val() !== null){
  //       setData({...snapshot.val()});
  //     }
  //     else{
  //       setData({});
  //     }
  //   })
  //   return () => {
  //     setData({});
  //   }
  // },[]);
  // const onDelete = (id) => {
  //   if(
  //     window.confirm("Are you sure that you wanted to delete that contact ?")
  //     ){
  //     fireDb.child(`contacts/${id}`).remove((err)=> {
  //       if(err){
  //       toast.error(err);
  //     }
  //     else{
  //       toast.success("Contact Deleted Successfully");
  //     }
  //   })
  //   }
  // }

  return (
    <div className={dashboardMainClass}>
      {/* This components are display to data on dashboard form ./dash_components/ */}
      <div>
        <h2 className="py-1 px-2 text-black text-[16px] font-inter not-italic font-medium leading-[normal]">Inquiries</h2>
      </div>
     {/* <DashboardVatsal/> */}
     <div className='w-[99.2%] pl-2 '>
               <ul className='flex items-center bg-white px-3'>
                    <TabNavItem title="Latest" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabNavItem title="Solved" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabNavItem title="Moved on CRM" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabNavItem title="Removed" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab} />
               </ul>
               
                    <TabContent id="tab1" activeTab={activeTab}>
                      {/* <Latest/> */}
                   
                       
                    </TabContent>
                    <TabContent id="tab2" activeTab={activeTab}>
                   {/* <Solved/> */}
                    {/* <div className="">
      <div className=" flex flex-col md:flex-row ">
        <div className=" w-full max-h-[650px] h-fit ">
          <table className="table-auto border-spacing-0 border-collapse w-full border-0">
            <thead id="table_fixed">
              <tr className="text-[18px] font-bold font-Montserrat  text-white bg-[#12B28C] px-3 sticky top-0 z-20 max-h-[70px]  h-[10px]">                <th className="px-[2.1rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Sr No.</p>
                </th>
                <th className="px-[1.6rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Name Of Client</p>
                </th>
                <th className="px-[2rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Mobile No</p>
                </th>
                <th className="px-[5.3rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Email id</p>
                </th>
                <th className="px-[1.4rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Reference By</p>
                </th>
                <th className="text-center  px-[2.7rem] py-4 whitespace-nowrap">
                  <p className="font-semibold bg-white  px-2  text-black">Shot By</p>
                </th>
              </tr>
            </thead>
            <tbody id="contain">
              {TableDataSecond.map((item, index) => (
                <tr
                  id="table_scroll"
                  className="text-sm bg-[#F5F5F5] h-[72px] rounded-lg py-3 px-3 transition-all duration-300"
                  key={index}
                >
                  <td className="px-[2.9rem] whitespace-nowrap">
                    <div className="">
                      <div className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.srno}
                      </div>
                    </div>
                  </td>
                  <td className="px-[2.2rem] whitespace-nowrap">
                    <div className="">
                      <div className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.noc}
                      </div>
                    </div>
                  </td>
                  <td className="px-[1.9rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.mno}
                      </div>
                    </div>
                  </td>
                  <td className="px-[2.2rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.eid}
                      </div>
                    </div>
                  </td>
                  <td className="px-[1.8rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.rby}
                      </div>

                    </div>
                  </td>
                  <td className="px-[1.6rem] whitespace-nowrap gap-x-4 flex flex-row justify-center items-center py-4 ">
                    <div className="bg-[#12B28C] px-3 py-2 ">
                      <div className="text-white font-inter text-sm not-italic font-semibold leading-[normal]">
                        {item.sby}
                      </div>
                    </div>
                    <div className="bg-white px-2 py-1.5 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16.2929 2.29289C16.6834 1.90237 17.3166 1.90237 17.7071 2.29289L21.7071 6.29289C22.0976 6.68342 22.0976 7.31658 21.7071 7.70711L8.70711 20.7071C8.51957 20.8946 8.26522 21 8 21H4C3.44772 21 3 20.5523 3 20V16C3 15.7348 3.10536 15.4804 3.29289 15.2929L13.2927 5.2931L16.2929 2.29289ZM14 7.41421L5 16.4142V19H7.58579L16.5858 10L14 7.41421ZM18 8.58579L19.5858 7L17 4.41421L15.4142 6L18 8.58579Z" fill="#0D0D0D"/>
</svg> 
</div>
                   <div className="bg-black px-2 py-1.5 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M8.33329 3.33329C6.49234 3.33329 4.99996 4.82568 4.99996 6.66663C4.99996 8.50757 6.49234 9.99996 8.33329 9.99996C10.1742 9.99996 11.6666 8.50757 11.6666 6.66663C11.6666 4.82568 10.1742 3.33329 8.33329 3.33329ZM3.33329 6.66663C3.33329 3.9052 5.57187 1.66663 8.33329 1.66663C11.0947 1.66663 13.3333 3.9052 13.3333 6.66663C13.3333 9.42805 11.0947 11.6666 8.33329 11.6666C5.57187 11.6666 3.33329 9.42805 3.33329 6.66663ZM13.3333 11.6666C13.3333 11.2064 13.7064 10.8333 14.1666 10.8333H17.5C17.9602 10.8333 18.3333 11.2064 18.3333 11.6666C18.3333 12.1269 17.9602 12.5 17.5 12.5H14.1666C13.7064 12.5 13.3333 12.1269 13.3333 11.6666ZM5.41663 15C4.36708 15 3.33329 16.0112 3.33329 17.5C3.33329 17.9602 2.9602 18.3333 2.49996 18.3333C2.03972 18.3333 1.66663 17.9602 1.66663 17.5C1.66663 15.3068 3.24451 13.3333 5.41663 13.3333H11.25C13.4221 13.3333 15 15.3068 15 17.5C15 17.9602 14.6269 18.3333 14.1666 18.3333C13.7064 18.3333 13.3333 17.9602 13.3333 17.5C13.3333 16.0112 12.2995 15 11.25 15H5.41663Z" fill="white"/>
</svg>
                      </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       
      </div>
    </div> */}
                    </TabContent>
                    <TabContent id="tab3" activeTab={activeTab}>
                 {/* <Moved/> */}
                    {/* <div className="">
      <div className=" flex flex-col md:flex-row ">
        <div className=" w-full max-h-[650px] h-fit ">
          <table className="table-auto border-spacing-0 border-collapse w-full border-0">
            <thead id="table_fixed">
              <tr className="text-[18px] font-bold font-Montserrat  text-white bg-[#12B28C] px-3 sticky top-0 z-20 max-h-[70px]  h-[10px]">                <th className="px-[1.8rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Sr No.</p>
                </th>
                <th className="px-[1.6rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Name Of Client</p>
                </th>
                <th className="px-[2.1rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Mobile No</p>
                </th>
                <th className="px-[5.3rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Email id</p>
                </th>
                <th className="px-[1.5rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Reference By</p>
                </th>
                <th className="text-center  px-[2.8rem] py-4 whitespace-nowrap">
                  <p className="font-semibold bg-white  px-2  text-black">Shot By</p>
                </th>
              </tr>
            </thead>
            <tbody id="contain">
              {TableDataSecond.map((item, index) => (
                <tr
                  id="table_scroll"
                  className="text-sm bg-[#F5F5F5] h-[72px] rounded-lg py-3 px-3 transition-all duration-300"
                  key={index}
                >
                  <td className="px-[2.6rem] whitespace-nowrap">
                    <div className="">
                      <div className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.srno}
                      </div>
                    </div>
                  </td>
                  <td className="px-[2.4rem] whitespace-nowrap">
                    <div className="">
                      <div className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.noc}
                      </div>
                    </div>
                  </td>
                  <td className="px-[2rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.mno}
                      </div>
                    </div>
                  </td>
                  <td className="px-[2.1rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.eid}
                      </div>
                    </div>
                  </td>
                  <td className="px-[1.9rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.rby}
                      </div>

                    </div>
                  </td>
                  <td className="px-[1.7rem] whitespace-nowrap gap-x-4 flex flex-row justify-center items-center py-4 ">
                    <div className="bg-[#12B28C] px-3 py-2 ">
                      <div className="text-white font-inter text-sm not-italic font-semibold leading-[normal]">
                        {item.sby}
                      </div>
                    </div>
                    <div className="bg-white px-2 py-1.5 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16.2929 2.29289C16.6834 1.90237 17.3166 1.90237 17.7071 2.29289L21.7071 6.29289C22.0976 6.68342 22.0976 7.31658 21.7071 7.70711L8.70711 20.7071C8.51957 20.8946 8.26522 21 8 21H4C3.44772 21 3 20.5523 3 20V16C3 15.7348 3.10536 15.4804 3.29289 15.2929L13.2927 5.2931L16.2929 2.29289ZM14 7.41421L5 16.4142V19H7.58579L16.5858 10L14 7.41421ZM18 8.58579L19.5858 7L17 4.41421L15.4142 6L18 8.58579Z" fill="#0D0D0D"/>
</svg> 
</div>
                   <div className="bg-black px-2 py-1.5 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M8.33329 3.33329C6.49234 3.33329 4.99996 4.82568 4.99996 6.66663C4.99996 8.50757 6.49234 9.99996 8.33329 9.99996C10.1742 9.99996 11.6666 8.50757 11.6666 6.66663C11.6666 4.82568 10.1742 3.33329 8.33329 3.33329ZM3.33329 6.66663C3.33329 3.9052 5.57187 1.66663 8.33329 1.66663C11.0947 1.66663 13.3333 3.9052 13.3333 6.66663C13.3333 9.42805 11.0947 11.6666 8.33329 11.6666C5.57187 11.6666 3.33329 9.42805 3.33329 6.66663ZM13.3333 11.6666C13.3333 11.2064 13.7064 10.8333 14.1666 10.8333H17.5C17.9602 10.8333 18.3333 11.2064 18.3333 11.6666C18.3333 12.1269 17.9602 12.5 17.5 12.5H14.1666C13.7064 12.5 13.3333 12.1269 13.3333 11.6666ZM5.41663 15C4.36708 15 3.33329 16.0112 3.33329 17.5C3.33329 17.9602 2.9602 18.3333 2.49996 18.3333C2.03972 18.3333 1.66663 17.9602 1.66663 17.5C1.66663 15.3068 3.24451 13.3333 5.41663 13.3333H11.25C13.4221 13.3333 15 15.3068 15 17.5C15 17.9602 14.6269 18.3333 14.1666 18.3333C13.7064 18.3333 13.3333 17.9602 13.3333 17.5C13.3333 16.0112 12.2995 15 11.25 15H5.41663Z" fill="white"/>
</svg>
                      </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       
      </div>
    </div> */}
                    </TabContent>
                    <TabContent id="tab4" activeTab={activeTab}>
                   {/* <Removed/> */}
                    {/* <div className="">
      <div className=" flex flex-col md:flex-row ">
        <div className=" w-full max-h-[650px] h-fit ">
          <table className="table-auto border-spacing-0 border-collapse w-full border-0">
            <thead id="table_fixed">
              <tr className="text-[18px] font-bold font-Montserrat  text-white bg-[#12B28C] px-3 sticky top-0 z-20 max-h-[70px]  h-[10px]">                <th className="px-[2.1rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Sr No.</p>
                </th>
                <th className="px-[1.4rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Name Of Client</p>
                </th>
                <th className="px-[1.8rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Mobile No</p>
                </th>
                <th className="px-[5.1rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Email id</p>
                </th>
                <th className="px-[1.2rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Reference By</p>
                </th>
                <th className="text-center  px-[3rem] py-4 whitespace-nowrap">
                  <p className="font-semibold bg-white  px-2  text-black">Shot By</p>
                </th>
              </tr>
            </thead>
            <tbody id="contain">
              {TableDataSecond.map((item, index) => (
                <tr
                  id="table_scroll"
                  className="text-sm bg-[#F5F5F5] h-[72px] rounded-lg py-3 px-3 transition-all duration-300"
                  key={index}
                >
                  <td className="px-[2.7rem] whitespace-nowrap">
                    <div className="">
                      <div className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.srno}
                      </div>
                    </div>
                  </td>
                  <td className="px-[2rem] whitespace-nowrap">
                    <div className="">
                      <div className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.noc}
                      </div>
                    </div>
                  </td>
                  <td className="px-[1.8rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.mno}
                      </div>
                    </div>
                  </td>
                  <td className="px-[2.1rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.eid}
                      </div>
                    </div>
                  </td>
                  <td className="px-[1.9rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.rby}
                      </div>

                    </div>
                  </td>
                  <td className="px-[1.8rem] whitespace-nowrap gap-x-4 flex flex-row justify-center items-center py-4 ">
                    <div className="bg-[#12B28C] px-3 py-2 ">
                      <div className="text-white font-inter text-sm not-italic font-semibold leading-[normal]">
                        {item.sby}
                      </div>
                    </div>
                    <div className="bg-white px-2 py-1.5 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M12.1212 22.6212C11.7306 23.0117 11.0975 23.0117 10.707 22.6212L7.70695 19.6212C7.31643 19.2306 7.31643 18.5975 7.70695 18.207L10.707 15.207C11.0975 14.8164 11.7306 14.8164 12.1212 15.207C12.5117 15.5975 12.5117 16.2306 12.1212 16.6212L10.8283 17.9141L12.4141 17.9141C15.9618 17.9141 18.9141 14.9618 18.9141 11.4141C18.9141 7.86634 15.9618 4.91406 12.4141 4.91406C8.86634 4.91406 5.91406 7.86635 5.91406 11.4141C5.91406 11.9663 5.46634 12.4141 4.91406 12.4141C4.36177 12.4141 3.91406 11.9663 3.91406 11.4141C3.91406 6.76178 7.76177 2.91406 12.4141 2.91406C17.0663 2.91406 20.9141 6.76177 20.9141 11.4141C20.9141 16.0663 17.0663 19.9141 12.4141 19.9141L10.8283 19.9141L12.1212 21.207C12.5117 21.5975 12.5117 22.2306 12.1212 22.6212Z" fill="#0D0D0D"/>
</svg>
</div>
                   <div  className="bg-[#FF0000] px-2 py-1.5 ">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M7 4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V6H18.9897C18.9959 5.99994 19.0021 5.99994 19.0083 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H19.9311L19.0638 20.1425C18.989 21.1891 18.1182 22 17.0689 22H6.93112C5.88184 22 5.01096 21.1891 4.9362 20.1425L4.06888 8H3C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6H4.99174C4.99795 5.99994 5.00414 5.99994 5.01032 6H7V4ZM9 6H15V4H9V6ZM6.07398 8L6.93112 20H17.0689L17.926 8H6.07398ZM10 10C10.5523 10 11 10.4477 11 11V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V11C9 10.4477 9.44772 10 10 10ZM14 10C14.5523 10 15 10.4477 15 11V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V11C13 10.4477 13.4477 10 14 10Z" fill="white"/>
</svg>
                      </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       
      </div>
    </div> */}
                    </TabContent>               
          </div>
    </div>
  );
};

export default Dashboard;