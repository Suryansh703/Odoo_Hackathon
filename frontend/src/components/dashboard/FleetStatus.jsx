import {
  FaTruck,
  FaTools,
  FaRoad,
  FaCheckCircle,
} from "react-icons/fa";

const stats = [
  {
    title: "Available Vehicles",
    value: 70,
    icon: <FaTruck className="text-cyan-400 text-2xl" />,
    color: "text-cyan-400",
  },
  {
    title: "On Trip",
    value: 22,
    icon: <FaRoad className="text-purple-400 text-2xl" />,
    color: "text-purple-400",
  },
  {
    title: "Maintenance",
    value: 8,
    icon: <FaTools className="text-red-400 text-2xl" />,
    color: "text-red-400",
  },
  {
    title: "Completed Today",
    value: 46,
    icon: <FaCheckCircle className="text-green-400 text-2xl" />,
    color: "text-green-400",
  },
];

function FleetStatus() {
  return (
    <div className="mt-8 rounded-3xl bg-white/5 border border-cyan-400/20 p-6">

      <h2 className="text-2xl font-bold mb-6">
        Fleet Status Overview
      </h2>

      <div className="grid grid-cols-2 gap-5">

        {stats.map((item, index) => (

          <div
            key={index}
            className="rounded-2xl bg-[#0E172A] border border-cyan-500/10 p-5 hover:border-cyan-400/30 transition"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-400 text-sm">
                  {item.title}
                </p>

                <h2 className={`text-4xl font-bold mt-2 ${item.color}`}>
                  {item.value}
                </h2>

              </div>

              {item.icon}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default FleetStatus;