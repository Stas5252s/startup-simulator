import React from "react";
import Charts from "./Charts.jsx";
import { useI18n } from "../i18n/I18nProvider.jsx";

function formatMoney(n) {
  if (!isFinite(n)) return "∞";
  if (Math.abs(n) >= 1_000_000_000) {
    return `$${(n / 1_000_000_000).toFixed(1)}B`;
  }
  if (Math.abs(n) >= 1_000_000) {
    return `$${(n / 1_000_000).toFixed(1)}M`;
  }
  if (Math.abs(n) >= 1_000) {
    return `$${(n / 1_000).toFixed(1)}k`;
  }
  return `$${Math.round(n).toLocaleString()}`;
}

export default function Dashboard({ state, canAdvance, onNextMonth }) {
  const {
    month,
    cash,
    revenue,
    expenses,
    burnRate,
    runway,
    valuation,
    settings,
  } = state;
  const { t } = useI18n();

  return (
    <div className="card dashboard">
      <div className="dashboard-header">
        <div>
          <h2>{t("dashboard.title")}</h2>
          <p className="muted">
            {t("dashboard.subtitle", {
              month,
              industry: settings.industry,
              difficulty: settings.difficulty,
            })}
          </p>
        </div>
        <button disabled={!canAdvance} onClick={onNextMonth}>
          {t("dashboard.advanceMonth")}
        </button>
      </div>

      <div className="metrics-grid">
        <Metric label={t("dashboard.metrics.cash")} value={formatMoney(cash)} accent="green" />
        <Metric
          label={t("dashboard.metrics.revenue")}
          value={formatMoney(revenue)}
          accent="blue"
        />
        <Metric
          label={t("dashboard.metrics.expenses")}
          value={formatMoney(expenses)}
          accent="orange"
        />
        <Metric
          label={t("dashboard.metrics.burnRate")}
          value={
            burnRate > 0
              ? formatMoney(burnRate)
              : t("dashboard.metrics.burnRateBreakeven")
          }
          accent={burnRate > 0 ? "red" : "green"}
        />
        <Metric
          label={t("dashboard.metrics.runway")}
          value={
            burnRate <= 0
              ? t("dashboard.metrics.runwayInfinite")
              : t("dashboard.metrics.runwayMonths", {
                  months: runway.toFixed(0),
                  suffix: runway !== 1 ? "s" : "",
                })
          }
          accent={runway < 6 ? "red" : runway < 12 ? "orange" : "green"}
        />
        <Metric
          label={t("dashboard.metrics.valuation")}
          value={formatMoney(valuation)}
          accent="purple"
        />
      </div>

      <Charts history={state.history} />
    </div>
  );
}

function Metric({ label, value, accent }) {
  return (
    <div className={`metric metric-${accent}`}>
      <div className="metric-label">{label}</div>
      <div className="metric-value">{value}</div>
    </div>
  );
}

