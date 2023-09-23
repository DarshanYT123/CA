import React, { useState } from "react";

//Components
import TabNavItem from "../TabNavItem/PageTabNavItem";
import TabContent from "../TabContent/PageTabContent";

const Form = () => {


//   const [inputFields, setInputFields] = useState([
//     { name: '', age: '' }
//   ])

//   const handleFormChange = () => {
    
//   }

//   const submit = (e) => {
//     e.preventDefault();
//     console.log(inputFields)
// }
// const addFields = () => {
//   let newfield = { name: '', age: '' }

//   setInputFields([...inputFields, newfield])
// }
  

  const TableData = [
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Vatsal sharma",
      sby: "Add to CRM",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Vatsal sharma",
      sby: "Add to CRM",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Vatsal sharma",
      sby: "Add to CRM",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Vatsal sharma",
      sby: "Add to CRM",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Vatsal sharma",
      sby: "Add to CRM",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Vatsal sharma",
      sby: "Add to CRM",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Vatsal sharma",
      sby: "Add to CRM",
    },
  ];
  const TableDataSecond = [
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Vatsal sharma",
      sby: "View",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Vatsal sharma",
      sby: "View",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Vatsal sharma",
      sby: "View",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Vatsal sharma",
      sby: "View",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Vatsal sharma",
      sby: "View",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Vatsal sharma",
      sby: "View",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Vatsal sharma",
      sby: "View",
    },
  ];

  const [activeTab, setActiveTab] = useState("tab1");

  //  const handleDelete = (id) => {
  // axios.get('https://localhost:3000/users/'+id)
  // .then(res => {
  // console.log(item.srno)
  // userName(res.data.name)
  // userMobile(res.data.mobile)
  // userEmail(res.data.email)
  // userReference(res.data.reference)
  // userSort(res.data.sort)
  // })
  // }

  return (
    <div className="w-[99.2%] pl-2 ">
      <ul className="flex items-center bg-white px-3">
        <TabNavItem
          title="Edit Form"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Edit Services"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Edit Drop Down"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>

      <TabContent id="tab1" activeTab={activeTab}>
        <div className="py-10 bg-[#F9F7F7] w-full ">
          <div>
            <div className="flex flex-row  ">
              <div className="flex flex-col gap-y-5 px-10">
                {/*===================================updated code========================== */}
                <div className="relative   pb-2">
                  <div className="absolute inset-x-0 left-[180px] top-[1px] flex items-center  pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1"
                      height="25"
                      viewBox="0 0 1 25"
                      fill="none"
                     
                    >
                      <path d="M0.5 0V25" stroke="#211F3B" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="ml-1"
                    >
                      <path
                        d="M13.5774 1.91058C13.9028 1.58514 14.4305 1.58514 14.7559 1.91058L18.0893 5.24392C18.4147 5.56935 18.4147 6.09699 18.0893 6.42243L7.25592 17.2558C7.09964 17.412 6.88768 17.4998 6.66667 17.4998H3.33333C2.8731 17.4998 2.5 17.1267 2.5 16.6665V13.3332C2.5 13.1122 2.5878 12.9002 2.74408 12.7439L11.0772 4.41076L13.5774 1.91058ZM11.6667 6.17835L4.16667 13.6783V15.8332H6.32149L13.8215 8.33317L11.6667 6.17835ZM15 7.15466L16.3215 5.83317L14.1667 3.67835L12.8452 4.99984L15 7.15466Z"
                        fill="#0D0D0D"
                      />
                    </svg>

                    <div className="bg-[#F00]  px-2 py-2 ml-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <path
                          d="M6.125 3.5C6.125 2.5335 6.9085 1.75 7.875 1.75H13.125C14.0915 1.75 14.875 2.5335 14.875 3.5V5.25H16.616C16.6214 5.24995 16.6268 5.24995 16.6322 5.25H18.375C18.8582 5.25 19.25 5.64175 19.25 6.125C19.25 6.60825 18.8582 7 18.375 7H17.4397L16.6808 17.6247C16.6154 18.5405 15.8534 19.25 14.9353 19.25H6.06473C5.14661 19.25 4.38459 18.5405 4.31918 17.6247L3.56027 7H2.625C2.14175 7 1.75 6.60825 1.75 6.125C1.75 5.64175 2.14175 5.25 2.625 5.25H4.36778C4.3732 5.24995 4.37862 5.24995 4.38403 5.25H6.125V3.5ZM7.875 5.25H13.125V3.5H7.875V5.25ZM5.31473 7L6.06473 17.5H14.9353L15.6853 7H5.31473ZM8.75 8.75C9.23325 8.75 9.625 9.14175 9.625 9.625V14.875C9.625 15.3582 9.23325 15.75 8.75 15.75C8.26675 15.75 7.875 15.3582 7.875 14.875V9.625C7.875 9.14175 8.26675 8.75 8.75 8.75ZM12.25 8.75C12.7332 8.75 13.125 9.14175 13.125 9.625V14.875C13.125 15.3582 12.7332 15.75 12.25 15.75C11.7668 15.75 11.375 15.3582 11.375 14.875V9.625C11.375 9.14175 11.7668 8.75 12.25 8.75Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>

                  <input
                    type="text"
                    id="NameClient"
                    className=" font-inter text-[#211F3B]  w-[250px] h-[40px] text-[14px] not-italic font-normal leading-normal  border p-3 justify-center bg-[#FFF]  border-[#FFF] block  pl-2 "
                    placeholder="Name Of Client Text"
                    tabIndex={1}
                    name="NameClient "
                    required
                  />
                </div>

                {/* ==================================end updated code======================== */}

                <div className="relative   pb-2">
                  <div className="absolute inset-x-0 left-[180px] top-[1px] flex items-center  pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1"
                      height="25"
                      viewBox="0 0 1 25"
                      fill="none"
                    >
                      <path d="M0.5 0V25" stroke="#211F3B" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="ml-1"
                    >
                      <path
                        d="M13.5774 1.91058C13.9028 1.58514 14.4305 1.58514 14.7559 1.91058L18.0893 5.24392C18.4147 5.56935 18.4147 6.09699 18.0893 6.42243L7.25592 17.2558C7.09964 17.412 6.88768 17.4998 6.66667 17.4998H3.33333C2.8731 17.4998 2.5 17.1267 2.5 16.6665V13.3332C2.5 13.1122 2.5878 12.9002 2.74408 12.7439L11.0772 4.41076L13.5774 1.91058ZM11.6667 6.17835L4.16667 13.6783V15.8332H6.32149L13.8215 8.33317L11.6667 6.17835ZM15 7.15466L16.3215 5.83317L14.1667 3.67835L12.8452 4.99984L15 7.15466Z"
                        fill="#0D0D0D"
                      />
                    </svg>

                    <div className="bg-[#F00]  px-2 py-2 ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <path
                          d="M6.125 3.5C6.125 2.5335 6.9085 1.75 7.875 1.75H13.125C14.0915 1.75 14.875 2.5335 14.875 3.5V5.25H16.616C16.6214 5.24995 16.6268 5.24995 16.6322 5.25H18.375C18.8582 5.25 19.25 5.64175 19.25 6.125C19.25 6.60825 18.8582 7 18.375 7H17.4397L16.6808 17.6247C16.6154 18.5405 15.8534 19.25 14.9353 19.25H6.06473C5.14661 19.25 4.38459 18.5405 4.31918 17.6247L3.56027 7H2.625C2.14175 7 1.75 6.60825 1.75 6.125C1.75 5.64175 2.14175 5.25 2.625 5.25H4.36778C4.3732 5.24995 4.37862 5.24995 4.38403 5.25H6.125V3.5ZM7.875 5.25H13.125V3.5H7.875V5.25ZM5.31473 7L6.06473 17.5H14.9353L15.6853 7H5.31473ZM8.75 8.75C9.23325 8.75 9.625 9.14175 9.625 9.625V14.875C9.625 15.3582 9.23325 15.75 8.75 15.75C8.26675 15.75 7.875 15.3582 7.875 14.875V9.625C7.875 9.14175 8.26675 8.75 8.75 8.75ZM12.25 8.75C12.7332 8.75 13.125 9.14175 13.125 9.625V14.875C13.125 15.3582 12.7332 15.75 12.25 15.75C11.7668 15.75 11.375 15.3582 11.375 14.875V9.625C11.375 9.14175 11.7668 8.75 12.25 8.75Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>

                  <input
                    type="text"
                    id="NameClient"
                    className=" font-inter text-[#211F3B]  w-[250px] h-[40px] text-[14px] not-italic font-normal leading-normal  border p-3 justify-center bg-[#FFF]  border-[#FFF] block  pl-2 "
                    placeholder="Name Of Client Text"
                    tabIndex={2}
                    name="NameClient "
                    required
                  />
                </div>

                <div className="relative   pb-2">
                  <div className="absolute inset-x-0 left-[180px] top-[1px] flex items-center  pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1"
                      height="25"
                      viewBox="0 0 1 25"
                      fill="none"
                    >
                      <path d="M0.5 0V25" stroke="#211F3B" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="ml-1"
                    >
                      <path
                        d="M13.5774 1.91058C13.9028 1.58514 14.4305 1.58514 14.7559 1.91058L18.0893 5.24392C18.4147 5.56935 18.4147 6.09699 18.0893 6.42243L7.25592 17.2558C7.09964 17.412 6.88768 17.4998 6.66667 17.4998H3.33333C2.8731 17.4998 2.5 17.1267 2.5 16.6665V13.3332C2.5 13.1122 2.5878 12.9002 2.74408 12.7439L11.0772 4.41076L13.5774 1.91058ZM11.6667 6.17835L4.16667 13.6783V15.8332H6.32149L13.8215 8.33317L11.6667 6.17835ZM15 7.15466L16.3215 5.83317L14.1667 3.67835L12.8452 4.99984L15 7.15466Z"
                        fill="#0D0D0D"
                      />
                    </svg>

                    <div className="bg-[#F00]  px-2 py-2 ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <path
                          d="M6.125 3.5C6.125 2.5335 6.9085 1.75 7.875 1.75H13.125C14.0915 1.75 14.875 2.5335 14.875 3.5V5.25H16.616C16.6214 5.24995 16.6268 5.24995 16.6322 5.25H18.375C18.8582 5.25 19.25 5.64175 19.25 6.125C19.25 6.60825 18.8582 7 18.375 7H17.4397L16.6808 17.6247C16.6154 18.5405 15.8534 19.25 14.9353 19.25H6.06473C5.14661 19.25 4.38459 18.5405 4.31918 17.6247L3.56027 7H2.625C2.14175 7 1.75 6.60825 1.75 6.125C1.75 5.64175 2.14175 5.25 2.625 5.25H4.36778C4.3732 5.24995 4.37862 5.24995 4.38403 5.25H6.125V3.5ZM7.875 5.25H13.125V3.5H7.875V5.25ZM5.31473 7L6.06473 17.5H14.9353L15.6853 7H5.31473ZM8.75 8.75C9.23325 8.75 9.625 9.14175 9.625 9.625V14.875C9.625 15.3582 9.23325 15.75 8.75 15.75C8.26675 15.75 7.875 15.3582 7.875 14.875V9.625C7.875 9.14175 8.26675 8.75 8.75 8.75ZM12.25 8.75C12.7332 8.75 13.125 9.14175 13.125 9.625V14.875C13.125 15.3582 12.7332 15.75 12.25 15.75C11.7668 15.75 11.375 15.3582 11.375 14.875V9.625C11.375 9.14175 11.7668 8.75 12.25 8.75Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>

                  <input
                    type="text"
                    id="MobileNo"
                    className=" font-inter text-[#211F3B]  w-[250px] h-[40px] text-[14px] not-italic font-normal leading-normal  border p-3 justify-center bg-[#FFF]  border-[#FFF] block  pl-2 "
                    placeholder="Mobile No. Text "
                    tabIndex={3}
                    name="MobileNo "
                    required
                  />
                </div>

                <div className="relative   pb-2">
                  <div className="absolute inset-x-0 left-[180px] top-[1px] flex items-center   pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1"
                      height="25"
                      viewBox="0 0 1 25"
                      fill="none"
                    >
                      <path d="M0.5 0V25" stroke="#211F3B" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="ml-1"
                    >
                      <path
                        d="M13.5774 1.91058C13.9028 1.58514 14.4305 1.58514 14.7559 1.91058L18.0893 5.24392C18.4147 5.56935 18.4147 6.09699 18.0893 6.42243L7.25592 17.2558C7.09964 17.412 6.88768 17.4998 6.66667 17.4998H3.33333C2.8731 17.4998 2.5 17.1267 2.5 16.6665V13.3332C2.5 13.1122 2.5878 12.9002 2.74408 12.7439L11.0772 4.41076L13.5774 1.91058ZM11.6667 6.17835L4.16667 13.6783V15.8332H6.32149L13.8215 8.33317L11.6667 6.17835ZM15 7.15466L16.3215 5.83317L14.1667 3.67835L12.8452 4.99984L15 7.15466Z"
                        fill="#0D0D0D"
                      />
                    </svg>

                    <div className="bg-[#F00]  px-2 py-2 ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <path
                          d="M6.125 3.5C6.125 2.5335 6.9085 1.75 7.875 1.75H13.125C14.0915 1.75 14.875 2.5335 14.875 3.5V5.25H16.616C16.6214 5.24995 16.6268 5.24995 16.6322 5.25H18.375C18.8582 5.25 19.25 5.64175 19.25 6.125C19.25 6.60825 18.8582 7 18.375 7H17.4397L16.6808 17.6247C16.6154 18.5405 15.8534 19.25 14.9353 19.25H6.06473C5.14661 19.25 4.38459 18.5405 4.31918 17.6247L3.56027 7H2.625C2.14175 7 1.75 6.60825 1.75 6.125C1.75 5.64175 2.14175 5.25 2.625 5.25H4.36778C4.3732 5.24995 4.37862 5.24995 4.38403 5.25H6.125V3.5ZM7.875 5.25H13.125V3.5H7.875V5.25ZM5.31473 7L6.06473 17.5H14.9353L15.6853 7H5.31473ZM8.75 8.75C9.23325 8.75 9.625 9.14175 9.625 9.625V14.875C9.625 15.3582 9.23325 15.75 8.75 15.75C8.26675 15.75 7.875 15.3582 7.875 14.875V9.625C7.875 9.14175 8.26675 8.75 8.75 8.75ZM12.25 8.75C12.7332 8.75 13.125 9.14175 13.125 9.625V14.875C13.125 15.3582 12.7332 15.75 12.25 15.75C11.7668 15.75 11.375 15.3582 11.375 14.875V9.625C11.375 9.14175 11.7668 8.75 12.25 8.75Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>

                  <input
                    type="text"
                    id="Inquiry"
                    className=" font-inter text-[#211F3B]  w-[250px] h-[40px] text-[14px] not-italic font-normal leading-normal  border p-3 justify-center bg-[#FFF]  border-[#FFF] block  pl-2 "
                    placeholder="Inquiry From (From title)"
                    tabIndex={4}
                    name="Inquiry "
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-5 px-10">
                <div className="relative   pb-2">
                  <div className="absolute inset-x-0 left-[180px] top-[1px] flex items-center  pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1"
                      height="25"
                      viewBox="0 0 1 25"
                      fill="none"
                    >
                      <path d="M0.5 0V25" stroke="#211F3B" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="ml-1"
                    >
                      <path
                        d="M13.5774 1.91058C13.9028 1.58514 14.4305 1.58514 14.7559 1.91058L18.0893 5.24392C18.4147 5.56935 18.4147 6.09699 18.0893 6.42243L7.25592 17.2558C7.09964 17.412 6.88768 17.4998 6.66667 17.4998H3.33333C2.8731 17.4998 2.5 17.1267 2.5 16.6665V13.3332C2.5 13.1122 2.5878 12.9002 2.74408 12.7439L11.0772 4.41076L13.5774 1.91058ZM11.6667 6.17835L4.16667 13.6783V15.8332H6.32149L13.8215 8.33317L11.6667 6.17835ZM15 7.15466L16.3215 5.83317L14.1667 3.67835L12.8452 4.99984L15 7.15466Z"
                        fill="#0D0D0D"
                      />
                    </svg>

                    <div className="bg-[#F00]  px-2 py-2 ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <path
                          d="M6.125 3.5C6.125 2.5335 6.9085 1.75 7.875 1.75H13.125C14.0915 1.75 14.875 2.5335 14.875 3.5V5.25H16.616C16.6214 5.24995 16.6268 5.24995 16.6322 5.25H18.375C18.8582 5.25 19.25 5.64175 19.25 6.125C19.25 6.60825 18.8582 7 18.375 7H17.4397L16.6808 17.6247C16.6154 18.5405 15.8534 19.25 14.9353 19.25H6.06473C5.14661 19.25 4.38459 18.5405 4.31918 17.6247L3.56027 7H2.625C2.14175 7 1.75 6.60825 1.75 6.125C1.75 5.64175 2.14175 5.25 2.625 5.25H4.36778C4.3732 5.24995 4.37862 5.24995 4.38403 5.25H6.125V3.5ZM7.875 5.25H13.125V3.5H7.875V5.25ZM5.31473 7L6.06473 17.5H14.9353L15.6853 7H5.31473ZM8.75 8.75C9.23325 8.75 9.625 9.14175 9.625 9.625V14.875C9.625 15.3582 9.23325 15.75 8.75 15.75C8.26675 15.75 7.875 15.3582 7.875 14.875V9.625C7.875 9.14175 8.26675 8.75 8.75 8.75ZM12.25 8.75C12.7332 8.75 13.125 9.14175 13.125 9.625V14.875C13.125 15.3582 12.7332 15.75 12.25 15.75C11.7668 15.75 11.375 15.3582 11.375 14.875V9.625C11.375 9.14175 11.7668 8.75 12.25 8.75Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>

                  <input
                    type="text"
                    id="youcan"
                    className=" font-inter text-[#211F3B]  w-[250px] h-[40px] text-[14px] not-italic font-normal leading-normal  border p-3 justify-center bg-[#FFF]  border-[#FFF] block  pl-2 "
                    placeholder="*you can Write Servi...."
                    tabIndex={5}
                    name="youcan "
                    required
                  />
                </div>

                <div className="relative   pb-2">
                  <div className="absolute inset-x-0 left-[180px] top-[1px] flex items-center  pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1"
                      height="25"
                      viewBox="0 0 1 25"
                      fill="none"
                    >
                      <path d="M0.5 0V25" stroke="#211F3B" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="ml-1"
                    >
                      <path
                        d="M13.5774 1.91058C13.9028 1.58514 14.4305 1.58514 14.7559 1.91058L18.0893 5.24392C18.4147 5.56935 18.4147 6.09699 18.0893 6.42243L7.25592 17.2558C7.09964 17.412 6.88768 17.4998 6.66667 17.4998H3.33333C2.8731 17.4998 2.5 17.1267 2.5 16.6665V13.3332C2.5 13.1122 2.5878 12.9002 2.74408 12.7439L11.0772 4.41076L13.5774 1.91058ZM11.6667 6.17835L4.16667 13.6783V15.8332H6.32149L13.8215 8.33317L11.6667 6.17835ZM15 7.15466L16.3215 5.83317L14.1667 3.67835L12.8452 4.99984L15 7.15466Z"
                        fill="#0D0D0D"
                      />
                    </svg>

                    <div className="bg-[#F00]  px-2 py-2 ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <path
                          d="M6.125 3.5C6.125 2.5335 6.9085 1.75 7.875 1.75H13.125C14.0915 1.75 14.875 2.5335 14.875 3.5V5.25H16.616C16.6214 5.24995 16.6268 5.24995 16.6322 5.25H18.375C18.8582 5.25 19.25 5.64175 19.25 6.125C19.25 6.60825 18.8582 7 18.375 7H17.4397L16.6808 17.6247C16.6154 18.5405 15.8534 19.25 14.9353 19.25H6.06473C5.14661 19.25 4.38459 18.5405 4.31918 17.6247L3.56027 7H2.625C2.14175 7 1.75 6.60825 1.75 6.125C1.75 5.64175 2.14175 5.25 2.625 5.25H4.36778C4.3732 5.24995 4.37862 5.24995 4.38403 5.25H6.125V3.5ZM7.875 5.25H13.125V3.5H7.875V5.25ZM5.31473 7L6.06473 17.5H14.9353L15.6853 7H5.31473ZM8.75 8.75C9.23325 8.75 9.625 9.14175 9.625 9.625V14.875C9.625 15.3582 9.23325 15.75 8.75 15.75C8.26675 15.75 7.875 15.3582 7.875 14.875V9.625C7.875 9.14175 8.26675 8.75 8.75 8.75ZM12.25 8.75C12.7332 8.75 13.125 9.14175 13.125 9.625V14.875C13.125 15.3582 12.7332 15.75 12.25 15.75C11.7668 15.75 11.375 15.3582 11.375 14.875V9.625C11.375 9.14175 11.7668 8.75 12.25 8.75Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>

                  <input
                    type="text"
                    id="Address"
                    className=" font-inter text-[#211F3B]  w-[250px] h-[40px] text-[14px] not-italic font-normal leading-normal  border p-3 justify-center bg-[#FFF]  border-[#FFF] block  pl-2 "
                    placeholder="Address  Text "
                    tabIndex={6}
                    name="Address "
                    required
                  />
                </div>

                <div className="relative   pb-2">
                  <div className="absolute inset-x-0 left-[180px] top-[1px] flex items-center  pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1"
                      height="25"
                      viewBox="0 0 1 25"
                      fill="none"
                    >
                      <path d="M0.5 0V25" stroke="#211F3B" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="ml-1"
                    >
                      <path
                        d="M13.5774 1.91058C13.9028 1.58514 14.4305 1.58514 14.7559 1.91058L18.0893 5.24392C18.4147 5.56935 18.4147 6.09699 18.0893 6.42243L7.25592 17.2558C7.09964 17.412 6.88768 17.4998 6.66667 17.4998H3.33333C2.8731 17.4998 2.5 17.1267 2.5 16.6665V13.3332C2.5 13.1122 2.5878 12.9002 2.74408 12.7439L11.0772 4.41076L13.5774 1.91058ZM11.6667 6.17835L4.16667 13.6783V15.8332H6.32149L13.8215 8.33317L11.6667 6.17835ZM15 7.15466L16.3215 5.83317L14.1667 3.67835L12.8452 4.99984L15 7.15466Z"
                        fill="#0D0D0D"
                      />
                    </svg>

                    <div className="bg-[#F00]  px-2 py-2 ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <path
                          d="M6.125 3.5C6.125 2.5335 6.9085 1.75 7.875 1.75H13.125C14.0915 1.75 14.875 2.5335 14.875 3.5V5.25H16.616C16.6214 5.24995 16.6268 5.24995 16.6322 5.25H18.375C18.8582 5.25 19.25 5.64175 19.25 6.125C19.25 6.60825 18.8582 7 18.375 7H17.4397L16.6808 17.6247C16.6154 18.5405 15.8534 19.25 14.9353 19.25H6.06473C5.14661 19.25 4.38459 18.5405 4.31918 17.6247L3.56027 7H2.625C2.14175 7 1.75 6.60825 1.75 6.125C1.75 5.64175 2.14175 5.25 2.625 5.25H4.36778C4.3732 5.24995 4.37862 5.24995 4.38403 5.25H6.125V3.5ZM7.875 5.25H13.125V3.5H7.875V5.25ZM5.31473 7L6.06473 17.5H14.9353L15.6853 7H5.31473ZM8.75 8.75C9.23325 8.75 9.625 9.14175 9.625 9.625V14.875C9.625 15.3582 9.23325 15.75 8.75 15.75C8.26675 15.75 7.875 15.3582 7.875 14.875V9.625C7.875 9.14175 8.26675 8.75 8.75 8.75ZM12.25 8.75C12.7332 8.75 13.125 9.14175 13.125 9.625V14.875C13.125 15.3582 12.7332 15.75 12.25 15.75C11.7668 15.75 11.375 15.3582 11.375 14.875V9.625C11.375 9.14175 11.7668 8.75 12.25 8.75Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>

                  <input
                    type="text"
                    id="AddressField"
                    className=" font-inter text-[#211F3B]  w-[250px] h-[40px] text-[14px] not-italic font-normal leading-normal  border p-3 justify-center bg-[#FFF]  border-[#FFF] block  pl-2 "
                    placeholder="Address Field  Text "
                    tabIndex={7}
                    name="AddressField "
                    required
                  />
                </div>

                <div className="relative   pb-2">
                  <div className="absolute inset-x-0 left-[180px] top-[1px] flex items-center  pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1"
                      height="25"
                      viewBox="0 0 1 25"
                      fill="none"
                    >
                      <path d="M0.5 0V25" stroke="#211F3B" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="ml-1"
                    >
                      <path
                        d="M13.5774 1.91058C13.9028 1.58514 14.4305 1.58514 14.7559 1.91058L18.0893 5.24392C18.4147 5.56935 18.4147 6.09699 18.0893 6.42243L7.25592 17.2558C7.09964 17.412 6.88768 17.4998 6.66667 17.4998H3.33333C2.8731 17.4998 2.5 17.1267 2.5 16.6665V13.3332C2.5 13.1122 2.5878 12.9002 2.74408 12.7439L11.0772 4.41076L13.5774 1.91058ZM11.6667 6.17835L4.16667 13.6783V15.8332H6.32149L13.8215 8.33317L11.6667 6.17835ZM15 7.15466L16.3215 5.83317L14.1667 3.67835L12.8452 4.99984L15 7.15466Z"
                        fill="#0D0D0D"
                      />
                    </svg>

                    <div className="bg-[#F00]  px-2 py-2 ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <path
                          d="M6.125 3.5C6.125 2.5335 6.9085 1.75 7.875 1.75H13.125C14.0915 1.75 14.875 2.5335 14.875 3.5V5.25H16.616C16.6214 5.24995 16.6268 5.24995 16.6322 5.25H18.375C18.8582 5.25 19.25 5.64175 19.25 6.125C19.25 6.60825 18.8582 7 18.375 7H17.4397L16.6808 17.6247C16.6154 18.5405 15.8534 19.25 14.9353 19.25H6.06473C5.14661 19.25 4.38459 18.5405 4.31918 17.6247L3.56027 7H2.625C2.14175 7 1.75 6.60825 1.75 6.125C1.75 5.64175 2.14175 5.25 2.625 5.25H4.36778C4.3732 5.24995 4.37862 5.24995 4.38403 5.25H6.125V3.5ZM7.875 5.25H13.125V3.5H7.875V5.25ZM5.31473 7L6.06473 17.5H14.9353L15.6853 7H5.31473ZM8.75 8.75C9.23325 8.75 9.625 9.14175 9.625 9.625V14.875C9.625 15.3582 9.23325 15.75 8.75 15.75C8.26675 15.75 7.875 15.3582 7.875 14.875V9.625C7.875 9.14175 8.26675 8.75 8.75 8.75ZM12.25 8.75C12.7332 8.75 13.125 9.14175 13.125 9.625V14.875C13.125 15.3582 12.7332 15.75 12.25 15.75C11.7668 15.75 11.375 15.3582 11.375 14.875V9.625C11.375 9.14175 11.7668 8.75 12.25 8.75Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>

                  <input
                    type="text"
                    id="SendButton"
                    className=" font-inter text-[#211F3B]  w-[250px] h-[40px] text-[14px] not-italic font-normal leading-normal  border p-3 justify-center bg-[#FFF]  border-[#FFF] block  pl-2 "
                    placeholder="Send Button Text"
                    tabIndex={8}
                    name="SendButton "
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-5 px-10">
                <div className="relative   pb-2">
                  <div className="absolute inset-x-0 left-[180px] top-[1px] flex items-center  pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1"
                      height="25"
                      viewBox="0 0 1 25"
                      fill="none"
                    >
                      <path d="M0.5 0V25" stroke="#211F3B" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="ml-1"
                    >
                      <path
                        d="M13.5774 1.91058C13.9028 1.58514 14.4305 1.58514 14.7559 1.91058L18.0893 5.24392C18.4147 5.56935 18.4147 6.09699 18.0893 6.42243L7.25592 17.2558C7.09964 17.412 6.88768 17.4998 6.66667 17.4998H3.33333C2.8731 17.4998 2.5 17.1267 2.5 16.6665V13.3332C2.5 13.1122 2.5878 12.9002 2.74408 12.7439L11.0772 4.41076L13.5774 1.91058ZM11.6667 6.17835L4.16667 13.6783V15.8332H6.32149L13.8215 8.33317L11.6667 6.17835ZM15 7.15466L16.3215 5.83317L14.1667 3.67835L12.8452 4.99984L15 7.15466Z"
                        fill="#0D0D0D"
                      />
                    </svg>

                    <div className="bg-[#F00]  px-2 py-2 ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <path
                          d="M6.125 3.5C6.125 2.5335 6.9085 1.75 7.875 1.75H13.125C14.0915 1.75 14.875 2.5335 14.875 3.5V5.25H16.616C16.6214 5.24995 16.6268 5.24995 16.6322 5.25H18.375C18.8582 5.25 19.25 5.64175 19.25 6.125C19.25 6.60825 18.8582 7 18.375 7H17.4397L16.6808 17.6247C16.6154 18.5405 15.8534 19.25 14.9353 19.25H6.06473C5.14661 19.25 4.38459 18.5405 4.31918 17.6247L3.56027 7H2.625C2.14175 7 1.75 6.60825 1.75 6.125C1.75 5.64175 2.14175 5.25 2.625 5.25H4.36778C4.3732 5.24995 4.37862 5.24995 4.38403 5.25H6.125V3.5ZM7.875 5.25H13.125V3.5H7.875V5.25ZM5.31473 7L6.06473 17.5H14.9353L15.6853 7H5.31473ZM8.75 8.75C9.23325 8.75 9.625 9.14175 9.625 9.625V14.875C9.625 15.3582 9.23325 15.75 8.75 15.75C8.26675 15.75 7.875 15.3582 7.875 14.875V9.625C7.875 9.14175 8.26675 8.75 8.75 8.75ZM12.25 8.75C12.7332 8.75 13.125 9.14175 13.125 9.625V14.875C13.125 15.3582 12.7332 15.75 12.25 15.75C11.7668 15.75 11.375 15.3582 11.375 14.875V9.625C11.375 9.14175 11.7668 8.75 12.25 8.75Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>

                  <input
                    type="text"
                    id="Cancel"
                    className=" font-inter text-[#211F3B]  w-[250px] h-[40px] text-[14px] not-italic font-normal leading-normal  border p-3 justify-center bg-[#FFF]  border-[#FFF] block  pl-2 "
                    placeholder="Cancel Button text "
                    tabIndex={9}
                    name="Cancel "
                    required
                  />
                </div>

                <div className="relative   pb-2">
                  <div className="absolute inset-x-0 left-[180px] top-[1px] flex items-center  pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1"
                      height="25"
                      viewBox="0 0 1 25"
                      fill="none"
                    >
                      <path d="M0.5 0V25" stroke="#211F3B" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="ml-1"
                    >
                      <path
                        d="M13.5774 1.91058C13.9028 1.58514 14.4305 1.58514 14.7559 1.91058L18.0893 5.24392C18.4147 5.56935 18.4147 6.09699 18.0893 6.42243L7.25592 17.2558C7.09964 17.412 6.88768 17.4998 6.66667 17.4998H3.33333C2.8731 17.4998 2.5 17.1267 2.5 16.6665V13.3332C2.5 13.1122 2.5878 12.9002 2.74408 12.7439L11.0772 4.41076L13.5774 1.91058ZM11.6667 6.17835L4.16667 13.6783V15.8332H6.32149L13.8215 8.33317L11.6667 6.17835ZM15 7.15466L16.3215 5.83317L14.1667 3.67835L12.8452 4.99984L15 7.15466Z"
                        fill="#0D0D0D"
                      />
                    </svg>

                    <div className="bg-[#F00]  px-2 py-2 ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <path
                          d="M6.125 3.5C6.125 2.5335 6.9085 1.75 7.875 1.75H13.125C14.0915 1.75 14.875 2.5335 14.875 3.5V5.25H16.616C16.6214 5.24995 16.6268 5.24995 16.6322 5.25H18.375C18.8582 5.25 19.25 5.64175 19.25 6.125C19.25 6.60825 18.8582 7 18.375 7H17.4397L16.6808 17.6247C16.6154 18.5405 15.8534 19.25 14.9353 19.25H6.06473C5.14661 19.25 4.38459 18.5405 4.31918 17.6247L3.56027 7H2.625C2.14175 7 1.75 6.60825 1.75 6.125C1.75 5.64175 2.14175 5.25 2.625 5.25H4.36778C4.3732 5.24995 4.37862 5.24995 4.38403 5.25H6.125V3.5ZM7.875 5.25H13.125V3.5H7.875V5.25ZM5.31473 7L6.06473 17.5H14.9353L15.6853 7H5.31473ZM8.75 8.75C9.23325 8.75 9.625 9.14175 9.625 9.625V14.875C9.625 15.3582 9.23325 15.75 8.75 15.75C8.26675 15.75 7.875 15.3582 7.875 14.875V9.625C7.875 9.14175 8.26675 8.75 8.75 8.75ZM12.25 8.75C12.7332 8.75 13.125 9.14175 13.125 9.625V14.875C13.125 15.3582 12.7332 15.75 12.25 15.75C11.7668 15.75 11.375 15.3582 11.375 14.875V9.625C11.375 9.14175 11.7668 8.75 12.25 8.75Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>

                  <input
                    type="text"
                    id="Thankyou"
                    className=" font-inter text-[#211F3B]  w-[250px] h-[40px] text-[14px] not-italic font-normal leading-normal  border p-3 justify-center bg-[#FFF]  border-[#FFF] block  pl-2 "
                    placeholder="Thank you for ......"
                    tabIndex={10}
                    name="Thankyou "
                    required
                  />
                </div>
              </div>
            </div>

            {/* ================================Add New Field ================ */}
            <div className="px-10 py-5">
              <div className="bg-[#12B28C] ">
                <h1 className="text-[#fff] font-inter text-[20px] font-bold not-italic font-inter leading-normal p-2 pt-2 px-2 text-center">
                  Add New Field in Form
                </h1>
              </div>

              <div className="flex space-x-10 py-10">
                <div className="">
                  <label
                    for=" Title Of Field"
                    className="  block font-inter mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
                  >
                    Title Of Field{" "}
                  </label>
                  <div className=" p-0.5 w-[383px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                    <input
                      type="text"
                      id=" TitleOfField"
                      name="fullname"
                      //value="fullname"

                      tabIndex={1}
                      className="w-[380px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="">
                  <label
                    for="fullname"
                    className="  block font-inter mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
                  >
                    Title Of Field{" "}
                  </label>
                  <button
                    type="submit"
                    class="text-[#0D0D0D] font-inter text-[15px] not-italic font-bold leading-normal bg-[#E7E7E7] rounded-[12px] tracking-[0.45px] px-36 py-2 mr-2 mb-2"
                  >
                    Select Field
                  </button>
                </div>
              </div>
            </div>

            {/* ============================button Add Cancel================== */}

            <div className=" flex px-10 py-5">
              <button
                type="submit"
                class="text-[#FFF] font-Montserrat text-[15px] not-italic font-bold leading-normal bg-[#12B28C]  tracking-[0.45px] px-10 py-2 mr-2 mb-2"
              >
                Add
              </button>

              <button
                type="submit"
                class="text-[#211F3B] font-inter text-[15px] not-italic font-bold leading-normal border border-[#211F3B] bg-[#F9F7F7]  tracking-[0.45px] px-5 py-2 mr-2 mb-2"
              >
                Cancel
              </button>
            </div>

            {/* ================================End Add  New Field============ */}
          </div>
        </div>
      </TabContent>
      <TabContent id="tab2" activeTab={activeTab}>
        <div className="py-10 bg-[#F9F7F7] w-full">
          
          <div className="px-10">
            <div className="relative   pb-2">
              <div className="absolute inset-x-0 left-[180px] top-[1px] flex items-center  pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1"
                  height="25"
                  viewBox="0 0 1 25"
                  fill="none"
                >
                  <path d="M0.5 0V25" stroke="#211F3B" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="ml-2"
                >
                  <path
                    d="M13.5774 1.91058C13.9028 1.58514 14.4305 1.58514 14.7559 1.91058L18.0893 5.24392C18.4147 5.56935 18.4147 6.09699 18.0893 6.42243L7.25592 17.2558C7.09964 17.412 6.88768 17.4998 6.66667 17.4998H3.33333C2.8731 17.4998 2.5 17.1267 2.5 16.6665V13.3332C2.5 13.1122 2.5878 12.9002 2.74408 12.7439L11.0772 4.41076L13.5774 1.91058ZM11.6667 6.17835L4.16667 13.6783V15.8332H6.32149L13.8215 8.33317L11.6667 6.17835ZM15 7.15466L16.3215 5.83317L14.1667 3.67835L12.8452 4.99984L15 7.15466Z"
                    fill="#0D0D0D"
                  />
                </svg>

                <div className="bg-[#F00]  px-2 py-2 ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M6.125 3.5C6.125 2.5335 6.9085 1.75 7.875 1.75H13.125C14.0915 1.75 14.875 2.5335 14.875 3.5V5.25H16.616C16.6214 5.24995 16.6268 5.24995 16.6322 5.25H18.375C18.8582 5.25 19.25 5.64175 19.25 6.125C19.25 6.60825 18.8582 7 18.375 7H17.4397L16.6808 17.6247C16.6154 18.5405 15.8534 19.25 14.9353 19.25H6.06473C5.14661 19.25 4.38459 18.5405 4.31918 17.6247L3.56027 7H2.625C2.14175 7 1.75 6.60825 1.75 6.125C1.75 5.64175 2.14175 5.25 2.625 5.25H4.36778C4.3732 5.24995 4.37862 5.24995 4.38403 5.25H6.125V3.5ZM7.875 5.25H13.125V3.5H7.875V5.25ZM5.31473 7L6.06473 17.5H14.9353L15.6853 7H5.31473ZM8.75 8.75C9.23325 8.75 9.625 9.14175 9.625 9.625V14.875C9.625 15.3582 9.23325 15.75 8.75 15.75C8.26675 15.75 7.875 15.3582 7.875 14.875V9.625C7.875 9.14175 8.26675 8.75 8.75 8.75ZM12.25 8.75C12.7332 8.75 13.125 9.14175 13.125 9.625V14.875C13.125 15.3582 12.7332 15.75 12.25 15.75C11.7668 15.75 11.375 15.3582 11.375 14.875V9.625C11.375 9.14175 11.7668 8.75 12.25 8.75Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>

              <input
                type="text"
                id="Accounting"
                className=" font-inter text-[#211F3B]  w-[250px] h-[40px] text-[14px] not-italic font-normal leading-normal  border p-3 justify-center bg-[#FFF]  border-[#FFF] block  pl-2 "
                placeholder="Accounting Text "
                tabIndex={1}
                name="Accounting "
                required
              />
            </div>

            <div className="relative   pb-2">
              <div className="absolute inset-x-0 left-[180px] top-[1px] flex items-center  pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1"
                  height="25"
                  viewBox="0 0 1 25"
                  fill="none"
                >
                  <path d="M0.5 0V25" stroke="#211F3B" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="ml-2"
                >
                  <path
                    d="M13.5774 1.91058C13.9028 1.58514 14.4305 1.58514 14.7559 1.91058L18.0893 5.24392C18.4147 5.56935 18.4147 6.09699 18.0893 6.42243L7.25592 17.2558C7.09964 17.412 6.88768 17.4998 6.66667 17.4998H3.33333C2.8731 17.4998 2.5 17.1267 2.5 16.6665V13.3332C2.5 13.1122 2.5878 12.9002 2.74408 12.7439L11.0772 4.41076L13.5774 1.91058ZM11.6667 6.17835L4.16667 13.6783V15.8332H6.32149L13.8215 8.33317L11.6667 6.17835ZM15 7.15466L16.3215 5.83317L14.1667 3.67835L12.8452 4.99984L15 7.15466Z"
                    fill="#0D0D0D"
                  />
                </svg>

                <div className="bg-[#F00]  px-2 py-2 ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M6.125 3.5C6.125 2.5335 6.9085 1.75 7.875 1.75H13.125C14.0915 1.75 14.875 2.5335 14.875 3.5V5.25H16.616C16.6214 5.24995 16.6268 5.24995 16.6322 5.25H18.375C18.8582 5.25 19.25 5.64175 19.25 6.125C19.25 6.60825 18.8582 7 18.375 7H17.4397L16.6808 17.6247C16.6154 18.5405 15.8534 19.25 14.9353 19.25H6.06473C5.14661 19.25 4.38459 18.5405 4.31918 17.6247L3.56027 7H2.625C2.14175 7 1.75 6.60825 1.75 6.125C1.75 5.64175 2.14175 5.25 2.625 5.25H4.36778C4.3732 5.24995 4.37862 5.24995 4.38403 5.25H6.125V3.5ZM7.875 5.25H13.125V3.5H7.875V5.25ZM5.31473 7L6.06473 17.5H14.9353L15.6853 7H5.31473ZM8.75 8.75C9.23325 8.75 9.625 9.14175 9.625 9.625V14.875C9.625 15.3582 9.23325 15.75 8.75 15.75C8.26675 15.75 7.875 15.3582 7.875 14.875V9.625C7.875 9.14175 8.26675 8.75 8.75 8.75ZM12.25 8.75C12.7332 8.75 13.125 9.14175 13.125 9.625V14.875C13.125 15.3582 12.7332 15.75 12.25 15.75C11.7668 15.75 11.375 15.3582 11.375 14.875V9.625C11.375 9.14175 11.7668 8.75 12.25 8.75Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>

              <input
                type="text"
                id="ITReturn"
                className=" font-inter text-[#211F3B]  w-[250px] h-[40px] text-[14px] not-italic font-normal leading-normal  border p-3 justify-center bg-[#FFF]  border-[#FFF] block  pl-2 "
                placeholder="IT Return Text "
                tabIndex={2}
                name="ITReturn "
                required
              />
            </div>

            <div className="relative   pb-2">
              <div className="absolute inset-x-0 left-[180px] top-[1px] flex items-center  pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1"
                  height="25"
                  viewBox="0 0 1 25"
                  fill="none"
                >
                  <path d="M0.5 0V25" stroke="#211F3B" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="ml-2"
                >
                  <path
                    d="M13.5774 1.91058C13.9028 1.58514 14.4305 1.58514 14.7559 1.91058L18.0893 5.24392C18.4147 5.56935 18.4147 6.09699 18.0893 6.42243L7.25592 17.2558C7.09964 17.412 6.88768 17.4998 6.66667 17.4998H3.33333C2.8731 17.4998 2.5 17.1267 2.5 16.6665V13.3332C2.5 13.1122 2.5878 12.9002 2.74408 12.7439L11.0772 4.41076L13.5774 1.91058ZM11.6667 6.17835L4.16667 13.6783V15.8332H6.32149L13.8215 8.33317L11.6667 6.17835ZM15 7.15466L16.3215 5.83317L14.1667 3.67835L12.8452 4.99984L15 7.15466Z"
                    fill="#0D0D0D"
                  />
                </svg>

                <div className="bg-[#F00]  px-2 py-2 ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M6.125 3.5C6.125 2.5335 6.9085 1.75 7.875 1.75H13.125C14.0915 1.75 14.875 2.5335 14.875 3.5V5.25H16.616C16.6214 5.24995 16.6268 5.24995 16.6322 5.25H18.375C18.8582 5.25 19.25 5.64175 19.25 6.125C19.25 6.60825 18.8582 7 18.375 7H17.4397L16.6808 17.6247C16.6154 18.5405 15.8534 19.25 14.9353 19.25H6.06473C5.14661 19.25 4.38459 18.5405 4.31918 17.6247L3.56027 7H2.625C2.14175 7 1.75 6.60825 1.75 6.125C1.75 5.64175 2.14175 5.25 2.625 5.25H4.36778C4.3732 5.24995 4.37862 5.24995 4.38403 5.25H6.125V3.5ZM7.875 5.25H13.125V3.5H7.875V5.25ZM5.31473 7L6.06473 17.5H14.9353L15.6853 7H5.31473ZM8.75 8.75C9.23325 8.75 9.625 9.14175 9.625 9.625V14.875C9.625 15.3582 9.23325 15.75 8.75 15.75C8.26675 15.75 7.875 15.3582 7.875 14.875V9.625C7.875 9.14175 8.26675 8.75 8.75 8.75ZM12.25 8.75C12.7332 8.75 13.125 9.14175 13.125 9.625V14.875C13.125 15.3582 12.7332 15.75 12.25 15.75C11.7668 15.75 11.375 15.3582 11.375 14.875V9.625C11.375 9.14175 11.7668 8.75 12.25 8.75Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>

              <input
                type="text"
                id="TDSReturn"
                className=" font-inter text-[#211F3B]  w-[250px] h-[40px] text-[14px] not-italic font-normal leading-normal  border p-3 justify-center bg-[#FFF]  border-[#FFF] block  pl-2 "
                placeholder="TDS Return Text "
                tabIndex={3}
                name="TDSReturn "
                required
              />
            </div>
            <div className="relative   pb-2">
              <div className="absolute inset-x-0 left-[180px] top-[1px] flex items-center  pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1"
                  height="25"
                  viewBox="0 0 1 25"
                  fill="none"
                >
                  <path d="M0.5 0V25" stroke="#211F3B" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="ml-2"
                >
                  <path
                    d="M13.5774 1.91058C13.9028 1.58514 14.4305 1.58514 14.7559 1.91058L18.0893 5.24392C18.4147 5.56935 18.4147 6.09699 18.0893 6.42243L7.25592 17.2558C7.09964 17.412 6.88768 17.4998 6.66667 17.4998H3.33333C2.8731 17.4998 2.5 17.1267 2.5 16.6665V13.3332C2.5 13.1122 2.5878 12.9002 2.74408 12.7439L11.0772 4.41076L13.5774 1.91058ZM11.6667 6.17835L4.16667 13.6783V15.8332H6.32149L13.8215 8.33317L11.6667 6.17835ZM15 7.15466L16.3215 5.83317L14.1667 3.67835L12.8452 4.99984L15 7.15466Z"
                    fill="#0D0D0D"
                  />
                </svg>

                <div className="bg-[#F00]  px-2 py-2 ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M6.125 3.5C6.125 2.5335 6.9085 1.75 7.875 1.75H13.125C14.0915 1.75 14.875 2.5335 14.875 3.5V5.25H16.616C16.6214 5.24995 16.6268 5.24995 16.6322 5.25H18.375C18.8582 5.25 19.25 5.64175 19.25 6.125C19.25 6.60825 18.8582 7 18.375 7H17.4397L16.6808 17.6247C16.6154 18.5405 15.8534 19.25 14.9353 19.25H6.06473C5.14661 19.25 4.38459 18.5405 4.31918 17.6247L3.56027 7H2.625C2.14175 7 1.75 6.60825 1.75 6.125C1.75 5.64175 2.14175 5.25 2.625 5.25H4.36778C4.3732 5.24995 4.37862 5.24995 4.38403 5.25H6.125V3.5ZM7.875 5.25H13.125V3.5H7.875V5.25ZM5.31473 7L6.06473 17.5H14.9353L15.6853 7H5.31473ZM8.75 8.75C9.23325 8.75 9.625 9.14175 9.625 9.625V14.875C9.625 15.3582 9.23325 15.75 8.75 15.75C8.26675 15.75 7.875 15.3582 7.875 14.875V9.625C7.875 9.14175 8.26675 8.75 8.75 8.75ZM12.25 8.75C12.7332 8.75 13.125 9.14175 13.125 9.625V14.875C13.125 15.3582 12.7332 15.75 12.25 15.75C11.7668 15.75 11.375 15.3582 11.375 14.875V9.625C11.375 9.14175 11.7668 8.75 12.25 8.75Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>

              <input
                type="text"
                id="Accounting"
                className=" font-inter text-[#211F3B]  w-[250px] h-[40px] text-[14px] not-italic font-normal leading-normal  border p-3 justify-center bg-[#FFF]  border-[#FFF] block  pl-2 "
                placeholder="Accounting Text "
                tabIndex={4}
                name="Accounting "
                required
              />
            </div>
          </div>
          <div className="px-10 py-5">
            <div className="bg-[#12B28C] ">
              <h1 className="text-[#fff] text-[20px] font-bold not-italic font-inter leading-normal p-2 pt-2 px-2 text-center">
                Add New Field in Form
              </h1>
            </div>

            <div className="flex space-x-10 py-10">
              <div className="">
                <label
                  for=" Title Of Field"
                  className="  block font-inter mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
                >
                  Title Of Field{" "}
                </label>
                <div className=" p-0.5 w-[383px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="text"
                    id=" TitleOfField"
                    name="fullname"
                    //value="fullname"

                    tabIndex={1}
                    className="w-[380px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                    required
                  />
                </div>
              </div>

             
            </div>
          </div>

          {/* ============================button Add Cancel================== */}
          <div className=" flex px-10 py-1">
            <button
              type="submit"
              class="text-[#FFF] font-Montserrat text-[15px] not-italic font-bold leading-normal bg-[#12B28C]  tracking-[0.45px] px-10 py-2 mr-2 mb-2"
            >
              Add
            </button>

            <button
              type="submit"
              class="text-[#211F3B] font-inter text-[15px] not-italic font-bold leading-normal border border-[#211F3B] bg-[#F9F7F7]  tracking-[0.45px] px-5 py-2 mr-2 mb-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </TabContent>
      <TabContent id="tab3" activeTab={activeTab}>
        <div className="py-10 bg-[#F9F7F7] w-full">
       <form>    {/* <form onSubmit={submit}> */}

        {/* {inputFields.map((input, index) => {
          return (
           */}
          <div className="px-10">
            <div className="relative   pb-2">
              <div className="absolute inset-x-0 left-[180px] top-[1px] flex items-center  pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1"
                  height="25"
                  viewBox="0 0 1 25"
                  fill="none"
                >
                  <path d="M0.5 0V25" stroke="#211F3B" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="ml-2"
                >
                  <path
                    d="M13.5774 1.91058C13.9028 1.58514 14.4305 1.58514 14.7559 1.91058L18.0893 5.24392C18.4147 5.56935 18.4147 6.09699 18.0893 6.42243L7.25592 17.2558C7.09964 17.412 6.88768 17.4998 6.66667 17.4998H3.33333C2.8731 17.4998 2.5 17.1267 2.5 16.6665V13.3332C2.5 13.1122 2.5878 12.9002 2.74408 12.7439L11.0772 4.41076L13.5774 1.91058ZM11.6667 6.17835L4.16667 13.6783V15.8332H6.32149L13.8215 8.33317L11.6667 6.17835ZM15 7.15466L16.3215 5.83317L14.1667 3.67835L12.8452 4.99984L15 7.15466Z"
                    fill="#0D0D0D"
                  />
                </svg>

                <div className="bg-[#F00]  px-2 py-2 ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M6.125 3.5C6.125 2.5335 6.9085 1.75 7.875 1.75H13.125C14.0915 1.75 14.875 2.5335 14.875 3.5V5.25H16.616C16.6214 5.24995 16.6268 5.24995 16.6322 5.25H18.375C18.8582 5.25 19.25 5.64175 19.25 6.125C19.25 6.60825 18.8582 7 18.375 7H17.4397L16.6808 17.6247C16.6154 18.5405 15.8534 19.25 14.9353 19.25H6.06473C5.14661 19.25 4.38459 18.5405 4.31918 17.6247L3.56027 7H2.625C2.14175 7 1.75 6.60825 1.75 6.125C1.75 5.64175 2.14175 5.25 2.625 5.25H4.36778C4.3732 5.24995 4.37862 5.24995 4.38403 5.25H6.125V3.5ZM7.875 5.25H13.125V3.5H7.875V5.25ZM5.31473 7L6.06473 17.5H14.9353L15.6853 7H5.31473ZM8.75 8.75C9.23325 8.75 9.625 9.14175 9.625 9.625V14.875C9.625 15.3582 9.23325 15.75 8.75 15.75C8.26675 15.75 7.875 15.3582 7.875 14.875V9.625C7.875 9.14175 8.26675 8.75 8.75 8.75ZM12.25 8.75C12.7332 8.75 13.125 9.14175 13.125 9.625V14.875C13.125 15.3582 12.7332 15.75 12.25 15.75C11.7668 15.75 11.375 15.3582 11.375 14.875V9.625C11.375 9.14175 11.7668 8.75 12.25 8.75Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>

              <input
                type="text"
                id="Yearly"
                className=" font-inter text-[#211F3B]  w-[250px] h-[40px] text-[14px] not-italic font-normal leading-normal  border p-3 justify-center bg-[#FFF]  border-[#FFF] block  pl-2 "
                placeholder="Yearly "
                tabIndex={1}
                name="Yearly "
                required
              />
            </div>

            <div className="relative   pb-2">
              <div className="absolute inset-x-0 left-[180px] top-[1px] flex items-center  pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1"
                  height="25"
                  viewBox="0 0 1 25"
                  fill="none"
                  
                >
                  <path d="M0.5 0V25" stroke="#211F3B" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="ml-2"
                >
                  <path
                    d="M13.5774 1.91058C13.9028 1.58514 14.4305 1.58514 14.7559 1.91058L18.0893 5.24392C18.4147 5.56935 18.4147 6.09699 18.0893 6.42243L7.25592 17.2558C7.09964 17.412 6.88768 17.4998 6.66667 17.4998H3.33333C2.8731 17.4998 2.5 17.1267 2.5 16.6665V13.3332C2.5 13.1122 2.5878 12.9002 2.74408 12.7439L11.0772 4.41076L13.5774 1.91058ZM11.6667 6.17835L4.16667 13.6783V15.8332H6.32149L13.8215 8.33317L11.6667 6.17835ZM15 7.15466L16.3215 5.83317L14.1667 3.67835L12.8452 4.99984L15 7.15466Z"
                    fill="#0D0D0D"
                  />
                </svg>

                <div className="bg-[#F00]  px-2 py-2 ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    className=""
                  >
                    <path
                      d="M6.125 3.5C6.125 2.5335 6.9085 1.75 7.875 1.75H13.125C14.0915 1.75 14.875 2.5335 14.875 3.5V5.25H16.616C16.6214 5.24995 16.6268 5.24995 16.6322 5.25H18.375C18.8582 5.25 19.25 5.64175 19.25 6.125C19.25 6.60825 18.8582 7 18.375 7H17.4397L16.6808 17.6247C16.6154 18.5405 15.8534 19.25 14.9353 19.25H6.06473C5.14661 19.25 4.38459 18.5405 4.31918 17.6247L3.56027 7H2.625C2.14175 7 1.75 6.60825 1.75 6.125C1.75 5.64175 2.14175 5.25 2.625 5.25H4.36778C4.3732 5.24995 4.37862 5.24995 4.38403 5.25H6.125V3.5ZM7.875 5.25H13.125V3.5H7.875V5.25ZM5.31473 7L6.06473 17.5H14.9353L15.6853 7H5.31473ZM8.75 8.75C9.23325 8.75 9.625 9.14175 9.625 9.625V14.875C9.625 15.3582 9.23325 15.75 8.75 15.75C8.26675 15.75 7.875 15.3582 7.875 14.875V9.625C7.875 9.14175 8.26675 8.75 8.75 8.75ZM12.25 8.75C12.7332 8.75 13.125 9.14175 13.125 9.625V14.875C13.125 15.3582 12.7332 15.75 12.25 15.75C11.7668 15.75 11.375 15.3582 11.375 14.875V9.625C11.375 9.14175 11.7668 8.75 12.25 8.75Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>

              <input
                type="text"
                id="Monthly"
                className=" font-inter text-[#211F3B]  w-[250px] h-[40px] text-[14px] not-italic font-normal leading-normal  border p-3 justify-center bg-[#FFF]  border-[#FFF] block  pl-2 "
                placeholder="Monthly "
                tabIndex={2}
                name="Monthly "
                required
              />
            </div>

            <div className="relative   pb-2">
              <div className="absolute inset-x-0 left-[180px] top-[1px] flex items-center  pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1"
                  height="25"
                  viewBox="0 0 1 25"
                  fill="none"
                >
                  <path d="M0.5 0V25" stroke="#211F3B" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="ml-2"
                >
                  <path
                    d="M13.5774 1.91058C13.9028 1.58514 14.4305 1.58514 14.7559 1.91058L18.0893 5.24392C18.4147 5.56935 18.4147 6.09699 18.0893 6.42243L7.25592 17.2558C7.09964 17.412 6.88768 17.4998 6.66667 17.4998H3.33333C2.8731 17.4998 2.5 17.1267 2.5 16.6665V13.3332C2.5 13.1122 2.5878 12.9002 2.74408 12.7439L11.0772 4.41076L13.5774 1.91058ZM11.6667 6.17835L4.16667 13.6783V15.8332H6.32149L13.8215 8.33317L11.6667 6.17835ZM15 7.15466L16.3215 5.83317L14.1667 3.67835L12.8452 4.99984L15 7.15466Z"
                    fill="#0D0D0D"
                  />
                </svg>

                <div className="bg-[#F00]  px-2 py-2 ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    
                  >
                    <path
                      d="M6.125 3.5C6.125 2.5335 6.9085 1.75 7.875 1.75H13.125C14.0915 1.75 14.875 2.5335 14.875 3.5V5.25H16.616C16.6214 5.24995 16.6268 5.24995 16.6322 5.25H18.375C18.8582 5.25 19.25 5.64175 19.25 6.125C19.25 6.60825 18.8582 7 18.375 7H17.4397L16.6808 17.6247C16.6154 18.5405 15.8534 19.25 14.9353 19.25H6.06473C5.14661 19.25 4.38459 18.5405 4.31918 17.6247L3.56027 7H2.625C2.14175 7 1.75 6.60825 1.75 6.125C1.75 5.64175 2.14175 5.25 2.625 5.25H4.36778C4.3732 5.24995 4.37862 5.24995 4.38403 5.25H6.125V3.5ZM7.875 5.25H13.125V3.5H7.875V5.25ZM5.31473 7L6.06473 17.5H14.9353L15.6853 7H5.31473ZM8.75 8.75C9.23325 8.75 9.625 9.14175 9.625 9.625V14.875C9.625 15.3582 9.23325 15.75 8.75 15.75C8.26675 15.75 7.875 15.3582 7.875 14.875V9.625C7.875 9.14175 8.26675 8.75 8.75 8.75ZM12.25 8.75C12.7332 8.75 13.125 9.14175 13.125 9.625V14.875C13.125 15.3582 12.7332 15.75 12.25 15.75C11.7668 15.75 11.375 15.3582 11.375 14.875V9.625C11.375 9.14175 11.7668 8.75 12.25 8.75Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>

              <input
                type="text"
                id="Quarterly"
                className=" font-inter text-[#211F3B]  w-[250px] h-[40px] text-[14px] not-italic font-normal leading-normal  border p-3 justify-center bg-[#FFF]  border-[#FFF] block  pl-2 "
                placeholder="Quarterly "
                tabIndex={3}
                name="Quarterly "
                required
              />
            </div>
          
          </div>
{/*             
            )
          })} */}
         
          <div className="px-10 py-5">
            <div className="bg-[#12B28C] ">
              <h1 className="text-[#fff] font-inter text-[20px] font-bold not-italic font-inter leading-normal p-2 pt-2 px-2 text-center">
                Add New Field in Form
              </h1>
            </div>

            <div className="flex space-x-10 py-10">
              <div className="">
                <label
                  for=" Title Of Field"
                  className="  block font-inter mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
                >
                  Title Of Field{" "}
                </label>
                <div className=" p-0.5 w-[383px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="text"
                    id=" TitleOfField"
                    name="fullname"
                    //value="fullname"

                    tabIndex={1}
                    className="w-[380px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* <div className="">
                  <label
                    for="fullname"
                    className="  block mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
                  >
                    Title Of Field{" "}
                  </label>
                  <button
                    type="submit"
                    class="text-[#0D0D0D] text-[15px] not-italic font-bold leading-normal bg-[#E7E7E7] rounded-[12px] tracking-[0.45px] px-36 py-2 mr-2 mb-2"
                  >
                    Select Field
                  </button>
                </div> */}
            </div>
          </div>

          {/* ============================button Add Cancel================== */}
          <div className=" flex px-10 py-1">
            <button
              type="submit"
              // onClick={submit}
              class="text-[#FFF] font-Montserrat text-[15px] not-italic font-bold leading-normal bg-[#12B28C]  tracking-[0.45px] px-10 py-2 mr-2 mb-2"
            >
              Add
            </button>
            {/* <button onClick={addFields}>Add More..</button> */}

            <button
              type="submit"
              class="text-[#211F3B] font-inter text-[15px] not-italic font-bold leading-normal border border-[#211F3B] bg-[#F9F7F7]  tracking-[0.45px] px-5 py-2 mr-2 mb-2"
            >
              Cancel
            </button>
          </div>
          </form>
        </div>
      </TabContent>
    </div>
  );
};

export default Form;
// import React from "react";
// import Sidebar from "../Sidebar/Sidebar";

// const DashboardVatsal = () => {
// const TableData = [
//   {
//     srno: "1.",
//     noc: "kushal shah",
//     mno: "9586388741",
//     eid: "Kushal777@gmail.com",
//     rby: "Vatsal sharma",
//     sby: "Add to CRM",
//   },
//   {
//     srno: "1.",
//     noc: "kushal shah",
//     mno: "9586388741",
//     eid: "Kushal777@gmail.com",
//     rby: "Vatsal sharma",
//     sby: "Add to CRM",
//   },
//   {
//     srno: "1.",
//     noc: "kushal shah",
//     mno: "9586388741",
//     eid: "Kushal777@gmail.com",
//     rby: "Vatsal sharma",
//     sby: "Add to CRM",
//   },
//   {
//     srno: "1.",
//     noc: "kushal shah",
//     mno: "9586388741",
//     eid: "Kushal777@gmail.com",
//     rby: "Vatsal sharma",
//     sby: "Add to CRM",
//   },
//   {
//     srno: "1.",
//     noc: "kushal shah",
//     mno: "9586388741",
//     eid: "Kushal777@gmail.com",
//     rby: "Vatsal sharma",
//     sby: "Add to CRM",
//   },
//   {
//     srno: "1.",
//     noc: "kushal shah",
//     mno: "9586388741",
//     eid: "Kushal777@gmail.com",
//     rby: "Vatsal sharma",
//     sby: "Add to CRM",
//   },
//   {
//     srno: "1.",
//     noc: "kushal shah",
//     mno: "9586388741",
//     eid: "Kushal777@gmail.com",
//     rby: "Vatsal sharma",
//     sby: "Add to CRM",
//   },
// ];
//   return (
//     <div className="">
//       <div>
//         <h2 className=" text-black text-[16px] font-inter not-italic font-medium leading-[normal]">Inquiries</h2>
//       </div>
//       <div className=" flex flex-col md:flex-row   py-5">
//         <div className=" w-full max-h-[650px] h-fit ">
//           <table className="table-auto border-spacing-0 border-collapse w-full border-0">
//             <thead id="table_fixed">
//               <tr className="text-[18px] font-bold font-Montserrat  text-white bg-[#12B28C] px-3 sticky top-0 z-20 max-h-[70px]  h-[10px]">//                 <th className="px-[1.8rem] py-4 whitespace-nowrap">
//                   <p className="font-semibold text-left">Sr No.</p>
//                 </th>
//                 <th className="px-[2rem] py-4 whitespace-nowrap">
//                   <p className="font-semibold text-left">Name Of Client</p>
//                 </th>
//                 <th className="px-[2.5rem] py-4 whitespace-nowrap">
//                   <p className="font-semibold text-left">Mobile No</p>
//                 </th>
//                 <th className="px-[5.8rem] py-4 whitespace-nowrap">
//                   <p className="font-semibold text-left">Email id</p>
//                 </th>
//                 <th className="px-[1.9rem] py-4 whitespace-nowrap">
//                   <p className="font-semibold text-left">Reference By</p>
//                 </th>
//                 <th className="text-center  px-[3rem] py-4 whitespace-nowrap">
//                   <p className="font-semibold bg-white  px-2  text-black">Shot By</p>
//                 </th>
//               </tr>
//             </thead>
//             <tbody id="contain">
//               {TableData.map((item, index) => (
//                 <tr
//                   id="table_scroll"
//                   className="text-sm bg-[#F5F5F5] h-[72px] rounded-lg py-3 px-3 transition-all duration-300"
//                   key={index}
//                 >
//                   <td className="px-[2.6rem] whitespace-nowrap">
//                     <div className="">
//                       <div className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
//                         {item.srno}
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-[2.2rem] whitespace-nowrap">
//                     <div className="">
//                       <div className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
//                         {item.noc}
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-[2.2rem] whitespace-nowrap">
//                     <div className="">
//                       <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
//                         {item.mno}
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-[2.3rem] whitespace-nowrap">
//                     <div className="">
//                       <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
//                         {item.eid}
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-[2.1rem] whitespace-nowrap">
//                     <div className="">
//                       <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
//                         {item.rby}
//                       </div>

//                     </div>
//                   </td>
//                   <td className="px-[1.9rem] whitespace-nowrap gap-x-4 flex flex-row justify-center items-center py-4 ">
//                     <div className="bg-[#12B28C] px-3 py-2 ">
//                       <div className="text-white font-inter text-sm not-italic font-semibold leading-[normal]">
//                         {item.sby}
//                       </div>
//                     </div>
//                     <div className="bg-black px-2 py-1.5 ">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//   <path d="M8.33329 3.33329C6.49234 3.33329 4.99996 4.82568 4.99996 6.66663C4.99996 8.50757 6.49234 9.99996 8.33329 9.99996C10.1742 9.99996 11.6666 8.50757 11.6666 6.66663C11.6666 4.82568 10.1742 3.33329 8.33329 3.33329ZM3.33329 6.66663C3.33329 3.9052 5.57187 1.66663 8.33329 1.66663C11.0947 1.66663 13.3333 3.9052 13.3333 6.66663C13.3333 9.42805 11.0947 11.6666 8.33329 11.6666C5.57187 11.6666 3.33329 9.42805 3.33329 6.66663ZM13.3333 11.6666C13.3333 11.2064 13.7064 10.8333 14.1666 10.8333H17.5C17.9602 10.8333 18.3333 11.2064 18.3333 11.6666C18.3333 12.1269 17.9602 12.5 17.5 12.5H14.1666C13.7064 12.5 13.3333 12.1269 13.3333 11.6666ZM5.41663 15C4.36708 15 3.33329 16.0112 3.33329 17.5C3.33329 17.9602 2.9602 18.3333 2.49996 18.3333C2.03972 18.3333 1.66663 17.9602 1.66663 17.5C1.66663 15.3068 3.24451 13.3333 5.41663 13.3333H11.25C13.4221 13.3333 15 15.3068 15 17.5C15 17.9602 14.6269 18.3333 14.1666 18.3333C13.7064 18.3333 13.3333 17.9602 13.3333 17.5C13.3333 16.0112 12.2995 15 11.25 15H5.41663Z" fill="white"/>
// </svg>
//                       </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default DashboardVatsal;
