import React from "react";
import { useI18n } from "../i18n/I18nProvider.jsx";

export default function StartupStats({ state }) {
  const {
    cash,
    revenue,
    expenses,
    burnRate,
    runway,
    valuation,
    founderEnergy,
    reputation,
    employees,
    marketingInvestment,
    productQuality,
    market,
  } = state;

  const { t } = useI18n();

  return (
    <div className="card stats">
      <h3>{t("stats.title")}</h3>
      <dl className="stats-grid">
        <Stat label={t("stats.cash")} value={formatMoney(cash)} />
        <Stat label={t("stats.revenue")} value={formatMoney(revenue)} />
        <Stat label={t("stats.expenses")} value={formatMoney(expenses)} />
        <Stat
          label={t("stats.burnRate")}
          value={
            burnRate > 0
              ? formatMoney(burnRate)
              : t("stats.burnRateProfitable")
          }
        />
        <Stat
          label={t("stats.runway")}
          value={
            burnRate <= 0
              ? t("stats.runwayInfinite")
              : t("stats.runwayMonths", {
                  months: runway.toFixed(0),
                  suffix: runway !== 1 ? "s" : "",
                })
          }
        />
        <Stat label={t("stats.valuation")} value={formatMoney(valuation)} />
        <BarStat label={t("stats.founderEnergy")} value={founderEnergy} />
        <BarStat label={t("stats.reputation")} value={reputation} />
        <Stat label={t("stats.employees")} value={employees} />
        <Stat
          label={t("stats.marketingSpend")}
          value={marketingInvestment ? formatMoney(marketingInvestment) : "0"}
        />
        <BarStat label={t("stats.productQuality")} value={productQuality} />
        <BarStat
          label={t("stats.marketSaturation")}
          value={Math.round(market.saturation * 100)}
        />
        <BarStat
          label={t("stats.competition")}
          value={Math.round(market.competition * 100)}
        />
      </dl>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="stat">
      <dt className="stat-label">{label}</dt>
      <dd className="stat-value">{value}</dd>
    </div>
  );
}

function BarStat({ label, value }) {
  return (
    <div className="stat">
      <dt className="stat-label">
        {label} <span className="stat-number">{value.toFixed(0)}%</span>
      </dt>
      <dd>
        <div className="bar">
          <div
            className="bar-fill"
            style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
          />
        </div>
      </dd>
    </div>
  );
}

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

