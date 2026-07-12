import {
  Bar,
  Doughnut,
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

function DashboardCharts() {
  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Trips",
        data: [12, 18, 14, 21, 26, 17, 23],
        backgroundColor: "#22d3ee",
        borderRadius: 8,
      },
    ],
  };

  const doughnutData = {
    labels: ["Available", "On Trip", "Maintenance"],
    datasets: [
      {
        data: [70, 22, 8],
        backgroundColor: [
          "#22d3ee",
          "#8b5cf6",
          "#ef4444",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#fff",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#fff" },
        grid: { color: "#1e293b" },
      },
      y: {
        ticks: { color: "#fff" },
        grid: { color: "#1e293b" },
      },
    },
  };

  return (
    <div className="grid grid-cols-2 gap-6 mt-8">

      <div className="rounded-3xl bg-white/5 border border-cyan-400/20 p-6">
        <h2 className="text-xl font-bold mb-5">
          Weekly Trips
        </h2>

        <Bar
          data={barData}
          options={options}
        />
      </div>

      <div className="rounded-3xl bg-white/5 border border-cyan-400/20 p-6">
        <h2 className="text-xl font-bold mb-5">
          Fleet Status
        </h2>

        <div className="w-72 mx-auto">
          <Doughnut
            data={doughnutData}
          />
        </div>

      </div>

    </div>
  );
}

export default DashboardCharts;