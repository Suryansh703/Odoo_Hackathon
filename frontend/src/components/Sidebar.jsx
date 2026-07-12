import {
  FaChartBar,
  FaTruck,
  FaUsers,
  FaRoad,
  FaTools,
  FaGasPump,
} from "react-icons/fa";

const menuItems = [
  {
    title: "Dashboard",
    icon: <FaChartBar />,
  },
  {
    title: "Fleet",
    icon: <FaTruck />,
  },
  {
    title: "Drivers",
    icon: <FaUsers />,
  },
  {
    title: "Trips",
    icon: <FaRoad />,
  },
  {
    title: "Maintenance",
    icon: <FaTools />,
  },
  {
    title: "Fuel",
    icon: <FaGasPump />,
  },
];

function Sidebar() {
  return (
    <div className="h-full flex flex-col bg-[#08101F] text-white">

      {/* Logo */}
      <div className="px-8 pt-8 pb-6 border-b border-cyan-500/20">

        <h1 className="text-4xl font-black tracking-wide">
          <span className="text-cyan-400">Transit</span>
          <span className="text-white">Ops</span>
        </h1>

        <p className="text-cyan-400/60 text-sm mt-2">
          Smart Transport ERP
        </p>

      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 py-6">

        {menuItems.map((item, index) => (
          <button
            key={index}
            className="
              group
              flex
              items-center
              gap-4
              w-full
              px-5
              py-4
              mb-3
              rounded-2xl
              text-slate-300
              hover:text-white
              hover:bg-cyan-500/10
              hover:border
              hover:border-cyan-400/30
              transition-all
              duration-300
            "
          >
            <span className="text-xl text-cyan-400">
              {item.icon}
            </span>

            <span className="font-medium">
              {item.title}
            </span>
          </button>
        ))}

      </div>

      {/* Bottom Card */}
      <div className="p-5">

        <div
          className="
            rounded-3xl
            border
            border-cyan-400/20
            bg-gradient-to-br
            from-cyan-500/10
            to-purple-500/10
            backdrop-blur-xl
            p-6
          "
        >

          <p className="text-cyan-300 text-sm">
            Fleet Health
          </p>

          <h2 className="text-5xl font-black mt-2">
            92%
          </h2>

          <div className="mt-6 h-2 rounded-full bg-white/10 overflow-hidden">

            <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>

          </div>

          <p className="mt-4 text-xs text-slate-400">
            All transport systems operational
          </p>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;