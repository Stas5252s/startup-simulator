import React from "react";
import { useI18n } from "../i18n/I18nProvider.jsx";

export default function EventModal({ event, onClose }) {
  const { t } = useI18n();

  if (!event) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{t(`events.${event.kind}.title`)}</h2>
        <p className="modal-description">
          {t(`events.${event.kind}.description`)}
        </p>
        <div className="event-effects">
          {typeof event.deltaRevenue === "number" && (
            <Effect label={t("events.labels.revenue")} value={event.deltaRevenue} />
          )}
          {typeof event.deltaExpenses === "number" && (
            <Effect label={t("events.labels.expenses")} value={event.deltaExpenses} />
          )}
          {typeof event.deltaReputation === "number" && (
            <Effect
              label={t("events.labels.reputation")}
              value={event.deltaReputation}
              unit="pts"
            />
          )}
          {typeof event.deltaEnergy === "number" && (
            <Effect
              label={t("events.labels.founderEnergy")}
              value={event.deltaEnergy}
              unit="pts"
            />
          )}
        </div>
        <div className="modal-actions">
          <button onClick={onClose}>{t("events.labels.continue")}</button>
        </div>
      </div>
    </div>
  );
}

function Effect({ label, value, unit }) {
  const positive = value >= 0;
  const sign = positive ? "+" : "";
  return (
    <div className={`effect-pill ${positive ? "effect-positive" : "effect-negative"}`}>
      <span>{label}</span>
      <span>
        {sign}
        {formatValue(value)}
        {unit ? ` ${unit}` : ""}
      </span>
    </div>
  );
}

function formatValue(v) {
  if (Math.abs(v) >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
  if (Math.abs(v) >= 1_000) return `${(v / 1_000).toFixed(1)}k`;
  return Math.round(v);
}

