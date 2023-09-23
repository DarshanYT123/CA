import React, { useEffect,useState } from 'react'
import {Link,useLocation} from "react-router-dom"

const Navbar = () => {
    const [activeTab,setActiveTab] =useState("")
    return(
        <div>
            <div className='overflow-hidden bg-white flex flex-row header space-x-5  items-center   '>
            <Link to="/latest">
            <p className={`${activeTab === "Latest" ? "active" : " "}`}
                onClick={() => setActiveTab("Latest")}>
                  Latest  
                </p>
                </Link>
                <Link to="/solved">
                <p className={`${activeTab === "Solved" ? "active" : " "}`}
                onClick={() => setActiveTab("Solved")}>
                  Solved  
                </p>
                </Link>
                <Link to="/moved">
                <p className={`${activeTab === "Moved on CRM" ? "active" : " "}`}
                onClick={() => setActiveTab("Moved on CRM")}>
                  Moved on CRM  
                </p>
                </Link>
                <Link to="/removed">
                <p className={`${activeTab === "Removed" ? "active" : " "}`}
                onClick={() => setActiveTab("Removed")}>
                  Removed  
                </p>
                </Link>
</div>
        </div>
    )
}

export default Navbar;