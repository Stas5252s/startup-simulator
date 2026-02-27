import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function Charts({ history }) {
  const { months, revenue, burnRate, cash, valuation } = history;

  const chartData = useMemo(() => {
    return {
      labels: months.length ? months : ["0"],
      datasets: [
        {
          label: "Revenue",
          data: revenue.length ? revenue : [0],
          borderColor: "#38bdf8",
          backgroundColor: "rgba(56,189,248,0.2)",
          tension: 0.25,
        },
        {
          label: "Burn Rate",
          data: burnRate.length ? burnRate : [0],
          borderColor: "#f97316",
          backgroundColor: "rgba(249,115,22,0.2)",
          tension: 0.25,
        },
        {
          label: "Cash",
          data: cash.length ? cash : [0],
          borderColor: "#22c55e",
          backgroundColor: "rgba(34,197,94,0.15)",
          tension: 0.25,
        },
      ],
    };
  }, [months, revenue, burnRate, cash]);

  const valuationData = useMemo(() => {
    return {
      labels: months.length ? months : ["0"],
      datasets: [
        {
          label: "Valuation",
          data: valuation.length ? valuation : [0],
          borderColor: "#a855f7",
          backgroundColor: "rgba(168,85,247,0.25)",
          tension: 0.25,
        },
      ],
    };
  }, [months, valuation]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "var(--text-muted)",
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const val = ctx.parsed.y;
            if (Math.abs(val) >= 1_000_000) {
              return `${ctx.dataset.label}: $${(val / 1_000_000).toFixed(1)}M`;
            }
            if (Math.abs(val) >= 1_000) {
              return `${ctx.dataset.label}: $${(val / 1_000).toFixed(1)}k`;
            }
            return `${ctx.dataset.label}: $${Math.round(val)}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "var(--text-muted)",
        },
        grid: {
          color: "rgba(148,163,184,0.15)",
        },
      },
      y: {
        ticks: {
          color: "var(--text-muted)",
        },
        grid: {
          color: "rgba(148,163,184,0.15)",
        },
      },
    },
  };

  return (
    <div className="charts-grid">
      <div className="chart-wrapper">
        <div className="chart-title">Cash, Revenue &amp; Burn Rate</div>
        <Line options={options} data={chartData} />
      </div>
      <div className="chart-wrapper">
        <div className="chart-title">Valuation Over Time</div>
        <Line options={options} data={valuationData} />
      </div>
    </div>
  );
}

