import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useEffect, useState } from "react";
import MiniSidebar from "./MiniSidebar";
import { Toaster } from "sonner";
const DashboardLayout = () => {
  const [miniSidebar, setMiniSidebar] = useState(false);

  function debounceMiniSidebar() {
    let timeout = null;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      if (window.innerWidth < 600) {
        setMiniSidebar(true);
      } else {
        setMiniSidebar(false);
      }
    }, 200);
  }

  useEffect(() => {
    window.addEventListener("resize", debounceMiniSidebar);
  }, []);
  return (
    <>
      <div className="flex items-start">
        {/* left sidebar */}
        {miniSidebar ? <MiniSidebar /> : <Sidebar />}

        {/* right of sidebar */}
        <div className="sidebar_right flex-grow w-full">
          {/* topbar */}
          <Topbar miniSidebar={miniSidebar} setMiniSidebar={setMiniSidebar} />

          <Outlet />

          {/* footer */}
          <div className="text-center border-t py-5">
            <p>&copy; 2025. All rights reserved to Naria Task Management</p>
          </div>
        </div>
      </div>
      <Toaster closeButton/>
    </>
  );
};

export default DashboardLayout;
