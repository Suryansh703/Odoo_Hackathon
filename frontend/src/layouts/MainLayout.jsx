import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import Dashboard from "../pages/Dashboard";
import Vehicles from "../pages/Vehicles";
import Drivers from "../pages/Drivers";
import Trips from "../pages/Trips";
import Maintenance from "../pages/Maintenance";
import Fuel from "../pages/Fuel";

function MainLayout() {

  const [currentPage, setCurrentPage] = useState("Dashboard");

  const renderPage = () => {

    switch (currentPage) {

      case "Dashboard":
        return <Dashboard />;

      case "Fleet":
        return <Vehicles />;

      case "Drivers":
        return <Drivers />;

      case "Trips":
        return <Trips />;

      case "Maintenance":
        return <Maintenance />;

      case "Fuel":
        return <Fuel />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="h-screen bg-[#050816] flex overflow-hidden">

      {/* Sidebar */}

      <aside className="w-[290px] bg-[#08101F] border-r border-cyan-500/20">

        <Sidebar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

      </aside>

      {/* Right Side */}

      <div className="flex-1 flex flex-col">

        {/* Navbar */}

        <div className="border-b border-cyan-500/20">

          <Navbar />

        </div>

        {/* Dynamic Content */}

        <main className="flex-1 overflow-auto p-8 bg-[#050816]">

          {renderPage()}

        </main>

      </div>

    </div>
  );
}

export default MainLayout;