import { FaPlus, FaSearch } from "react-icons/fa";
import MaintenanceTable from "../components/tables/MaintenanceTable";

function Maintenance() {
  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Maintenance Management
          </h1>

          <p className="text-cyan-400 mt-2">
            Track vehicle servicing
          </p>

        </div>

        <button className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl flex gap-2 items-center">

          <FaPlus />

          Add Service

        </button>

      </div>

      <div className="mb-8">

        <div className="flex items-center bg-white/5 border border-cyan-500/20 rounded-2xl h-14 px-5">

          <FaSearch className="text-cyan-400 mr-3" />

          <input
            placeholder="Search maintenance..."
            className="bg-transparent outline-none text-white w-full"
          />

        </div>

      </div>

      <MaintenanceTable />

    </div>
  );
}

export default Maintenance;