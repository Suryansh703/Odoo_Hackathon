import { FaPlus, FaSearch } from "react-icons/fa";
import TripTable from "../components/tables/TripTable";

function Trips() {
  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Trip Management
          </h1>

          <p className="text-cyan-400 mt-2">
            Monitor all transport trips
          </p>

        </div>

        <button className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl flex items-center gap-2 font-semibold">

          <FaPlus />

          Add Trip

        </button>

      </div>

      <div className="mb-8">

        <div className="flex items-center bg-white/5 border border-cyan-500/20 rounded-2xl h-14 px-5">

          <FaSearch className="text-cyan-400 mr-3" />

          <input
            type="text"
            placeholder="Search Trip..."
            className="bg-transparent outline-none text-white w-full"
          />

        </div>

      </div>

      <TripTable />

    </div>
  );
}

export default Trips;