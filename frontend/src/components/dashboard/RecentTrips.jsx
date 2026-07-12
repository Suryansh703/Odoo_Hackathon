function RecentTrips() {
  const trips = [
    {
      id: "TRP-1001",
      vehicle: "MH12AB1234",
      driver: "Rahul Sharma",
      route: "Delhi → Jaipur",
      status: "Running",
    },
    {
      id: "TRP-1002",
      vehicle: "UP78XY4567",
      driver: "Amit Kumar",
      route: "Lucknow → Kanpur",
      status: "Completed",
    },
    {
      id: "TRP-1003",
      vehicle: "DL09CD9087",
      driver: "Neha Singh",
      route: "Noida → Agra",
      status: "Delayed",
    },
    {
      id: "TRP-1004",
      vehicle: "RJ14PQ5643",
      driver: "Vikas Patel",
      route: "Jaipur → Udaipur",
      status: "Running",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Running":
        return "bg-cyan-500/20 text-cyan-400";

      case "Completed":
        return "bg-green-500/20 text-green-400";

      default:
        return "bg-red-500/20 text-red-400";
    }
  };

  return (
    <div className="mt-8 rounded-3xl bg-white/5 border border-cyan-400/20 p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Recent Trips
        </h2>

        <button className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
          View All
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="text-left border-b border-cyan-400/20 text-gray-400">

              <th className="pb-4">Trip ID</th>
              <th className="pb-4">Vehicle</th>
              <th className="pb-4">Driver</th>
              <th className="pb-4">Route</th>
              <th className="pb-4">Status</th>

            </tr>

          </thead>

          <tbody>

            {trips.map((trip) => (

              <tr
                key={trip.id}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >

                <td className="py-5 font-semibold">
                  {trip.id}
                </td>

                <td>{trip.vehicle}</td>

                <td>{trip.driver}</td>

                <td>{trip.route}</td>

                <td>

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                      trip.status
                    )}`}
                  >
                    {trip.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default RecentTrips;