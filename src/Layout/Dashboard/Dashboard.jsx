import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Dashboard/SideBar/SideBar";

const DashBoard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-[#f2f2f2]">
        <header
          className={`sticky top-0 z-999 flex w-full bg-white py-2 px-6 h-[70px] dark:bg-boxdark border-b`}
        >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 5H20"
                  stroke="#141B34"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12H20"
                  stroke="#141B34"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 19H20"
                  stroke="#141B34"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
        </header>

        <main>
          <div
            className={`mx-auto max-w-screen px-[24px] py-[15px] ${
              sidebarOpen &&
              "bg-black opacity-40 fixed h-screen w-screen no-scrollbar"
            }`}
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashBoard;