import { FaPlus, FaSearch } from "react-icons/fa";
import VehicleTable from "../components/tables/VehicleTable";

function Vehicles() {
  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Vehicle Management
          </h1>

          <p className="text-cyan-400 mt-2">
            Manage your transport fleet efficiently
          </p>

        </div>

        <button className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-xl font-semibold flex items-center gap-2">

          <FaPlus />

          Add Vehicle

        </button>

      </div>

      <div className="mb-8">

        <div className="flex items-center bg-white/5 border border-cyan-500/20 rounded-2xl h-14 px-5">

          <FaSearch className="text-cyan-400 mr-3" />

          <input
            className="bg-transparent outline-none text-white w-full"
            placeholder="Search vehicle..."
          />

        </div>

      </div>

      <VehicleTable />

    </div>
  );
}

export default Vehicles;