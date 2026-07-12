import {
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="h-24 flex items-center justify-between px-8">

      {/* Left */}

      <div>
        <h1 className="text-3xl font-bold text-white">
          Fleet Command Center
        </h1>

        <p className="text-cyan-400 text-sm mt-1">
          Monitor and manage transport operations in real time
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="flex items-center gap-3 px-5 h-12 rounded-2xl bg-white/5 border border-cyan-400/20 backdrop-blur-xl">

          <FaSearch className="text-cyan-400" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-white placeholder:text-gray-500 w-52"
          />

        </div>

        {/* Notification */}

        <button className="w-12 h-12 rounded-2xl bg-white/5 border border-cyan-400/20 flex items-center justify-center hover:bg-cyan-400/10 transition">

          <FaBell className="text-cyan-400 text-lg" />

        </button>

        {/* Profile */}

        <button className="flex items-center gap-3 px-4 h-12 rounded-2xl bg-white/5 border border-cyan-400/20 hover:bg-cyan-400/10 transition">

          <FaUserCircle className="text-3xl text-cyan-400" />

          <div className="text-left">

            <p className="text-sm font-semibold text-white">
              Admin
            </p>

            <p className="text-xs text-gray-400">
              Transport Manager
            </p>

          </div>

        </button>

      </div>

    </header>
  );
}

export default Navbar;