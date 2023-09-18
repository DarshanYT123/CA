import React from 'react'

function Sidebar() {
  return (
    <div>
        <div className='sidebar-title'>
            <div className=''>
            <img src="/img/vatsal.png" className="py-2 w-[100%] px-5" alt=""/>
            </div>
            {/* <span className='icon close_icon' onClick={OpenSidebar}>X</span> */}
        </div>

        <ul className=' py-40'>
            <li className='px-7 py-2.5'>
                <a href="">
                <span className="text-[#12B28C] text-[24px] font-inter not-italic font-bold leading-[normal] tracking-[0.48px]">Dashboard</span>
                </a>
            </li>
            <li className='px-7 py-2.5'>
                <a href="">
                <span className="text-[#12B28C] text-[24px] font-inter not-italic font-bold leading-[normal] tracking-[0.48px]">Users</span>
                </a>
            </li>
            <li className='px-7 py-2.5'>
                <a href="">
                <span className="text-[#12B28C] text-[24px] font-inter not-italic font-bold leading-[normal] tracking-[0.48px]">Edit Form</span>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar