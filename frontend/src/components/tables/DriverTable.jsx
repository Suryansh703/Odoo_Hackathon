import { FaEdit, FaTrash } from "react-icons/fa";

const drivers = [
  {
    id: "DR-001",
    name: "Rahul Sharma",
    license: "UP78-123456",
    phone: "9876543210",
    vehicle: "UP78AB1234",
    status: "Active",
  },
  {
    id: "DR-002",
    name: "Amit Kumar",
    license: "DL09-654321",
    phone: "9988776655",
    vehicle: "DL09CD9087",
    status: "On Trip",
  },
  {
    id: "DR-003",
    name: "Neha Singh",
    license: "RJ14-789456",
    phone: "9123456789",
    vehicle: "RJ14PQ5643",
    status: "Leave",
  },
];

function DriverTable() {
  return (
    <table className="w-full text-white">
      <thead className="bg-cyan-500/10">
        <tr>
          <th className="p-4">ID</th>
          <th>Name</th>
          <th>License</th>
          <th>Phone</th>
          <th>Vehicle</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {drivers.map((driver) => (
          <tr key={driver.id} className="border-t border-cyan-500/10">
            <td className="p-4">{driver.id}</td>
            <td>{driver.name}</td>
            <td>{driver.license}</td>
            <td>{driver.phone}</td>
            <td>{driver.vehicle}</td>
            <td>{driver.status}</td>
            <td className="flex gap-3 justify-center p-4">
              <FaEdit className="text-cyan-400 cursor-pointer" />
              <FaTrash className="text-red-400 cursor-pointer" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DriverTable;