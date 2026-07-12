import { FaArrowUp } from "react-icons/fa";

function DashboardCard({
  title,
  value,
  icon,
  color,
  growth,
}) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-cyan-400/20
      bg-white/5
      backdrop-blur-xl
      p-6
      hover:border-cyan-400/40
      hover:-translate-y-1
      transition-all
      duration-300
      shadow-lg
      "
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-400 text-sm">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
          style={{
            background: color,
          }}
        >
          {icon}
        </div>

      </div>

      <div className="mt-6 flex items-center gap-2 text-green-400">

        <FaArrowUp />

        <span>{growth}</span>

        <span className="text-gray-500">
          this month
        </span>

      </div>

    </div>
  );
}

export default DashboardCard;