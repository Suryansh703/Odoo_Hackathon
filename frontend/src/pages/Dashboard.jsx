import {
  FaTruck,
  FaUsers,
  FaRoad,
  FaGasPump,
} from "react-icons/fa";

import DashboardCard from "../components/dashboard/DashboardCard";
import DashboardCharts from "../components/dashboard/DashboardCharts";
import RecentTrips from "../components/dashboard/RecentTrips";
import FleetStatus from "../components/dashboard/FleetStatus";

function Dashboard() {
  return (
    <div>

      {/* KPI Cards */}

      <div className="grid grid-cols-4 gap-6">

        <DashboardCard
          title="Total Vehicles"
          value="128"
          growth="+12%"
          color="rgba(34,211,238,.15)"
          icon={<FaTruck className="text-cyan-400" />}
        />

        <DashboardCard
          title="Active Drivers"
          value="86"
          growth="+5%"
          color="rgba(168,85,247,.15)"
          icon={<FaUsers className="text-purple-400" />}
        />

        <DashboardCard
          title="Trips Today"
          value="312"
          growth="+18%"
          color="rgba(59,130,246,.15)"
          icon={<FaRoad className="text-blue-400" />}
        />

        <DashboardCard
          title="Fuel Usage"
          value="1240 L"
          growth="-3%"
          color="rgba(16,185,129,.15)"
          icon={<FaGasPump className="text-green-400" />}
        />

      </div>

      <DashboardCharts />

      <RecentTrips />

      <FleetStatus />

    </div>
  );
}

export default Dashboard;