import { useState } from "react";
import SidebarLink from "../components/SidebarLink";

const Layout = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-w-full flex flex-col sm:flex-row bg-main text-primary relative h-screen overflow-hidden">
      {/* Mobile Top Bar */}
      <div className="sm:hidden flex items-center justify-between p-4 bg-sidebar z-20">
        <button onClick={() => setIsSidebarOpen(true)} className="text-sidebar">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="text-lg font-semibold text-primary">Dashboard</h1>
      </div>

      {/* Mobile Sidebar (Slide from Left) */}
      <div
        className={`fixed top-0 left-0 z-50 h-full bg-sidebar shadow-xl transform transition-transform duration-300 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          w-64 sm:w-56 md:w-64 lg:w-72 xl:w-80`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-sidebar text-xl"
          >
            ✕
          </button>
        </div>
        <SidebarLink />
      </div>

      {/* Sidebar for medium+ screens (always visible) */}
      <div
        className="hidden sm:flex flex-col bg-sidebar p-4
          w-56 md:w-64 lg:w-72 xl:w-80
          overflow-y-auto
          h-full"
      >
        <SidebarLink />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 overflow-y-auto h-full text-primary">
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
