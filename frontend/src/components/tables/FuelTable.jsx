import { FaEdit, FaTrash } from "react-icons/fa";

const fuel = [
  {
    id: "FL-001",
    vehicle: "UP78AB1234",
    driver: "Rahul Sharma",
    litres: 120,
    cost: "₹12,500",
    date: "12 Jul 2026",
  },
  {
    id: "FL-002",
    vehicle: "DL09CD9087",
    driver: "Amit Kumar",
    litres: 90,
    cost: "₹9,800",
    date: "13 Jul 2026",
  },
  {
    id: "FL-003",
    vehicle: "RJ14PQ5643",
    driver: "Neha Singh",
    litres: 140,
    cost: "₹14,900",
    date: "14 Jul 2026",
  },
];

function FuelTable() {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-white/5 overflow-hidden">

      <table className="w-full text-white">

        <thead className="bg-cyan-500/10">

          <tr>
            <th className="p-4 text-left">Fuel ID</th>
            <th>Vehicle</th>
            <th>Driver</th>
            <th>Litres</th>
            <th>Cost</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {fuel.map((item) => (

            <tr key={item.id} className="border-t border-cyan-500/10">

              <td className="p-4">{item.id}</td>
              <td>{item.vehicle}</td>
              <td>{item.driver}</td>
              <td>{item.litres} L</td>
              <td>{item.cost}</td>
              <td>{item.date}</td>

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

export default FuelTable;