import {
  FaChartPie,
  FaTruck,
  FaUsers,
  FaRoute,
  FaTools,
  FaGasPump,
} from "react-icons/fa";

const menuItems = [
  {
    title: "Dashboard",
    icon: <FaChartPie />,
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
    icon: <FaRoute />,
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

function Sidebar({ currentPage, setCurrentPage }) {
  return (
    <div className="h-full flex flex-col">

      {/* Logo */}
      <div className="px-8 pt-8 pb-6">

        <h1 className="text-4xl font-black tracking-wider">
          <span className="text-cyan-400">Transit</span>
          <span className="text-white">Ops</span>
        </h1>

        <p className="text-cyan-400/60 text-sm mt-2">
          Smart Transport ERP
        </p>

      </div>

      {/* Navigation */}
      <div className="flex-1 px-5 mt-6">

        {menuItems.map((item) => (

          <button
            key={item.title}
            onClick={() => setCurrentPage(item.title)}
            className={`
              group
              flex
              items-center
              gap-5
              w-full
              px-5
              py-4
              mb-3
              rounded-2xl
              transition-all
              duration-300
              ${
                currentPage === item.title
                  ? "bg-cyan-500/20 border border-cyan-400 text-cyan-300"
                  : "text-gray-400 hover:bg-cyan-500/10 hover:border hover:border-cyan-400/30 hover:text-cyan-300"
              }
            `}
          >

            <span className="text-xl transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </span>

            <span className="font-medium tracking-wide">
              {item.title}
            </span>

          </button>

        ))}

      </div>

      {/* Fleet Health Card */}
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
            shadow-[0_0_30px_rgba(34,211,238,0.15)]
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

          <p className="mt-4 text-xs text-gray-400">
            All transport systems operational
          </p>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;