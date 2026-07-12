import {
  FaTruck,
  FaUsers,
  FaRoad,
  FaGasPump,
} from "react-icons/fa";

import DashboardCard from "../components/dashboard/DashboardCard";

function Dashboard() {
  return (
    <div className="grid grid-cols-4 gap-6">

      <DashboardCard
        title="Total Vehicles"
        value="128"
        growth="+12%"
        color="rgba(34,211,238,0.15)"
        icon={<FaTruck className="text-cyan-400" />}
      />

      <DashboardCard
        title="Active Drivers"
        value="86"
        growth="+5%"
        color="rgba(168,85,247,0.15)"
        icon={<FaUsers className="text-purple-400" />}
      />

      <DashboardCard
        title="Trips Today"
        value="312"
        growth="+18%"
        color="rgba(59,130,246,0.15)"
        icon={<FaRoad className="text-blue-400" />}
      />

      <DashboardCard
        title="Fuel Usage"
        value="1240 L"
        growth="-3%"
        color="rgba(16,185,129,0.15)"
        icon={<FaGasPump className="text-green-400" />}
      />

    </div>
  );
}

export default Dashboard;