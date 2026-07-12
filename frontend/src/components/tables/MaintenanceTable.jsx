import { FaEdit, FaTrash } from "react-icons/fa";

const maintenance = [
  {
    id: "MT-001",
    vehicle: "UP78AB1234",
    type: "Engine Service",
    date: "12 Jul 2026",
    cost: "₹15,000",
    status: "Completed",
  },
  {
    id: "MT-002",
    vehicle: "DL09CD9087",
    type: "Tyre Replacement",
    date: "15 Jul 2026",
    cost: "₹8,500",
    status: "Scheduled",
  },
  {
    id: "MT-003",
    vehicle: "RJ14PQ5643",
    type: "Oil Change",
    date: "18 Jul 2026",
    cost: "₹2,500",
    status: "Pending",
  },
];

function MaintenanceTable() {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-white/5 overflow-hidden">

      <table className="w-full text-white">

        <thead className="bg-cyan-500/10">

          <tr>
            <th className="p-4 text-left">ID</th>
            <th>Vehicle</th>
            <th>Service</th>
            <th>Date</th>
            <th>Cost</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {maintenance.map((item) => (

            <tr key={item.id} className="border-t border-cyan-500/10">

              <td className="p-4">{item.id}</td>
              <td>{item.vehicle}</td>
              <td>{item.type}</td>
              <td>{item.date}</td>
              <td>{item.cost}</td>

              <td>

                <span
                  className={`px-3 py-1 rounded-full ${
                    item.status === "Completed"
                      ? "bg-green-500/20 text-green-400"
                      : item.status === "Scheduled"
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {item.status}
                </span>

              </td>

              <td>

                <div className="flex justify-center gap-4">

                  <FaEdit className="text-cyan-400 cursor-pointer" />

                  <FaTrash className="text-red-400 cursor-pointer" />

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default MaintenanceTable;