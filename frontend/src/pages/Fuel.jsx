import { FaPlus, FaSearch } from "react-icons/fa";
import FuelTable from "../components/tables/FuelTable";

function Fuel() {
  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Fuel Management
          </h1>

          <p className="text-cyan-400 mt-2">
            Monitor fuel consumption
          </p>

        </div>

        <button className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl flex gap-2 items-center">

          <FaPlus />

          Add Fuel Entry

        </button>

      </div>

      <div className="mb-8">

        <div className="flex items-center bg-white/5 border border-cyan-500/20 rounded-2xl h-14 px-5">

          <FaSearch className="text-cyan-400 mr-3"/>

          <input
            placeholder="Search fuel..."
            className="bg-transparent outline-none text-white w-full"
          />

        </div>

      </div>

      <FuelTable />

    </div>
  );
}

export default Fuel;