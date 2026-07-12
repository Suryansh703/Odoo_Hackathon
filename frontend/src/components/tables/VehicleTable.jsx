import { FaEdit, FaTrash } from "react-icons/fa";

const vehicles = [
  {
    id: "VH-001",
    number: "UP78AB1234",
    type: "Truck",
    capacity: "20 Tons",
    driver: "Rahul Sharma",
    status: "Available",
  },
  {
    id: "VH-002",
    number: "DL09CD9087",
    type: "Mini Truck",
    capacity: "10 Tons",
    driver: "Amit Kumar",
    status: "Running",
  },
  {
    id: "VH-003",
    number: "RJ14PQ5643",
    type: "Trailer",
    capacity: "30 Tons",
    driver: "Neha Singh",
    status: "Maintenance",
  },
];

function VehicleTable() {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-white/5 overflow-hidden">

      <table className="w-full text-white">

        <thead className="bg-cyan-500/10">

          <tr>

            <th className="p-4 text-left">Vehicle ID</th>

            <th className="text-left">Number</th>

            <th className="text-left">Type</th>

            <th className="text-left">Capacity</th>

            <th className="text-left">Driver</th>

            <th className="text-left">Status</th>

            <th className="text-center">Actions</th>

          </tr>

        </thead>

        <tbody>

          {vehicles.map((vehicle) => (

            <tr
              key={vehicle.id}
              className="border-t border-cyan-500/10 hover:bg-cyan-500/5 transition"
            >

              <td className="p-4">{vehicle.id}</td>

              <td>{vehicle.number}</td>

              <td>{vehicle.type}</td>

              <td>{vehicle.capacity}</td>

              <td>{vehicle.driver}</td>

              <td>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    vehicle.status === "Available"
                      ? "bg-green-500/20 text-green-400"
                      : vehicle.status === "Running"
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {vehicle.status}
                </span>

              </td>

              <td>

                <div className="flex justify-center gap-4">

                  <button className="text-cyan-400 hover:scale-110 transition">
                    <FaEdit />
                  </button>

                  <button className="text-red-400 hover:scale-110 transition">
                    <FaTrash />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default VehicleTable;