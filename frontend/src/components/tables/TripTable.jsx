import { FaEdit, FaTrash } from "react-icons/fa";

const trips = [
  {
    id: "TRP-1001",
    vehicle: "UP78AB1234",
    driver: "Rahul Sharma",
    source: "Delhi",
    destination: "Jaipur",
    status: "Running",
  },
  {
    id: "TRP-1002",
    vehicle: "DL09CD9087",
    driver: "Amit Kumar",
    source: "Lucknow",
    destination: "Kanpur",
    status: "Completed",
  },
  {
    id: "TRP-1003",
    vehicle: "RJ14PQ5643",
    driver: "Neha Singh",
    source: "Noida",
    destination: "Agra",
    status: "Delayed",
  },
  {
    id: "TRP-1004",
    vehicle: "MH12AB1234",
    driver: "Vikas Patel",
    source: "Jaipur",
    destination: "Udaipur",
    status: "Running",
  },
];

function TripTable() {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-white/5 overflow-hidden">

      <table className="w-full text-white">

        <thead className="bg-cyan-500/10">

          <tr>
            <th className="p-4 text-left">Trip ID</th>
            <th>Vehicle</th>
            <th>Driver</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {trips.map((trip) => (

            <tr
              key={trip.id}
              className="border-t border-cyan-500/10 hover:bg-cyan-500/5"
            >

              <td className="p-4">{trip.id}</td>
              <td>{trip.vehicle}</td>
              <td>{trip.driver}</td>
              <td>{trip.source}</td>
              <td>{trip.destination}</td>

              <td>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    trip.status === "Completed"
                      ? "bg-green-500/20 text-green-400"
                      : trip.status === "Running"
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {trip.status}
                </span>

              </td>

              <td>

                <div className="flex justify-center gap-4">

                  <button className="text-cyan-400">
                    <FaEdit />
                  </button>

                  <button className="text-red-400">
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

export default TripTable;