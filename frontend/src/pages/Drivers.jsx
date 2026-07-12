import { FaPlus, FaSearch } from "react-icons/fa";
import DriverTable from "../components/tables/DriverTable";

function Drivers() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Driver Management
          </h1>

          <p className="text-cyan-400">
            Manage drivers efficiently
          </p>
        </div>

        <button className="bg-cyan-500 px-6 py-3 rounded-xl flex items-center gap-2">
          <FaPlus />
          Add Driver
        </button>
      </div>

      <div className="mb-6 flex items-center bg-white/5 border border-cyan-500/20 rounded-xl px-4 h-12">
        <FaSearch className="text-cyan-400 mr-3" />

        <input
          className="bg-transparent outline-none text-white w-full"
          placeholder="Search Driver..."
        />
      </div>

      <DriverTable />
    </div>
  );
}

export default Drivers;