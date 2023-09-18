import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inquiry from "./Admin/components/Inquiry/Inquiry";
import Inquiryfrom from "./Admin/components/Inquiry/Inquiryfrom";

// Dashboard
import Dashboard from "./Admin/components/Dashboard/Dashboard";
import EditForm from "./Admin/components/Editform/Editform";
import Sidebar from "./Admin/components/shared/Sidebar.jsx";
import Header from "./Admin/components/shared/Header.jsx";
import Usermain from "./Admin/components/Users/Usermain";
import AddNewUser from "./Admin/components/Users/AddNewUser";
import UserDetails from "./Admin/components/Users/UserDetails";
import Clientdetails from "./Admin/components/Dashboard/Clientdetails";
// import Formsubmit from "./Admin/components/Table/Formsubmit";


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const [isDashboard, setIsDashboard] = useState(false);

  useEffect(() => {
    if (window.location.pathname.toString().includes("dashboard")) {
      setIsDashboard(true);
    } else {
      setIsDashboard(false);
    }
  });

  return (
    <div className="App">
      <Router>
      {isDashboard ? (
          <div className="flex flex-row bg-natural-900  h-screen w-screen relative">
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            <div className="flex-1 pl-0  lg:pl-60 overflow-x-hidden">
              <Header sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
              <Routes>
                <Route
                  path="/dashboard"
                  element={<Dashboard title="Dashboard" />}
                />
                <Route path="dashboard/clientdetails" element={<Clientdetails title="Dashboard" />} />
                <Route path="dashboard/newuser" element={<AddNewUser title="Users" />} />
                <Route path="dashboard/userdetails" element={<UserDetails title="Users" />} />
                <Route path="dashboard/users" element={<Usermain title="Users" />} />
                <Route path="dashboard/form" element={<EditForm title="Edit Form" />} />
                {/* <Route path="dashboard/tablesubmit" element={<Formsubmit title="Edit Form table" />} /> */}
              </Routes>
            </div>
          </div>
        ) 
        : (
          <>
        <Routes>
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/inquiryfrom" element={<Inquiryfrom />} />
          {/* <Route path="/sidebar" element={<Sidebar />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/dashboard" element={<Dashboardmain />} /> */}
          </Routes>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
