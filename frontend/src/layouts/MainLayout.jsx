import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Vehicles from "../pages/Vehicles";

function MainLayout() {
  return (
    <div className="h-screen bg-[#050816] flex overflow-hidden">

      {/* Sidebar */}
      <aside className="w-[290px] bg-[#08101F] border-r border-cyan-500/20">
        <Sidebar />
      </aside>

      {/* Right Section */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <div className="border-b border-cyan-500/20">
          <Navbar />
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-8 bg-[#050816]">
          <Vehicles />
        </main>

      </div>

    </div>
  );
}

export default MainLayout;