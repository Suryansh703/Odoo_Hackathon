import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import DriverTable from "../components/tables/DriverTable";

function Drivers() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white">Driver Management</h1>
          <p className="text-cyan-400">Manage drivers efficiently</p>
        </div>
      </div>

      <div className="mb-6 flex items-center bg-white/5 border border-cyan-500/20 rounded-xl px-4 h-12">
        <FaSearch className="text-cyan-400 mr-3" />
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent outline-none text-white w-full"
          placeholder="Search Driver..."
        />
      </div>

      <DriverTable search={searchQuery} />
    </div>
  );
}

export default Drivers;
