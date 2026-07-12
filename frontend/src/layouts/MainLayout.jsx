import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="h-screen bg-[#050816] flex overflow-hidden">

      <aside className="w-[290px] bg-[#08101F] border-r border-cyan-500/20">
        <Sidebar />
      </aside>

      <div className="flex-1 flex flex-col">

        <div className="border-b border-cyan-500/20">
          <Navbar />
        </div>

        <main className="flex-1 overflow-auto p-8">

          <div
            className="
              h-full
              rounded-3xl
              border
              border-cyan-400/10
              bg-white/5
              backdrop-blur-xl
            "
          >
          </div>

        </main>

      </div>

    </div>
  );
}

export default MainLayout;