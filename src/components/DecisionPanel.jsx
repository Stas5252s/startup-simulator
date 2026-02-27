import React from "react";
import { useI18n } from "../i18n/I18nProvider.jsx";

export default function DecisionPanel({ disabled, onDecision }) {
  const { t } = useI18n();
  const makeHandler = (type) => () => {
    if (!disabled) onDecision(type);
  };

  return (
    <div className="card decisions">
      <h3>{t("decisions.title")}</h3>
      <p className="muted small">{t("decisions.description")}</p>
      <div className="decision-grid">
        <button onClick={makeHandler("hire")} disabled={disabled}>
          {t("decisions.actions.hire.title")}
          <span className="btn-caption">
            {t("decisions.actions.hire.caption")}
          </span>
        </button>
        <button onClick={makeHandler("fire")} disabled={disabled}>
          {t("decisions.actions.fire.title")}
          <span className="btn-caption">
            {t("decisions.actions.fire.caption")}
          </span>
        </button>
        <button onClick={makeHandler("marketing")} disabled={disabled}>
          {t("decisions.actions.marketing.title")}
          <span className="btn-caption">
            {t("decisions.actions.marketing.caption")}
          </span>
        </button>
        <button onClick={makeHandler("pivot")} disabled={disabled}>
          {t("decisions.actions.pivot.title")}
          <span className="btn-caption">
            {t("decisions.actions.pivot.caption")}
          </span>
        </button>
        <button onClick={makeHandler("investment")} disabled={disabled}>
          {t("decisions.actions.investment.title")}
          <span className="btn-caption">
            {t("decisions.actions.investment.caption")}
          </span>
        </button>
        <button onClick={makeHandler("launch-feature")} disabled={disabled}>
          {t("decisions.actions.launchFeature.title")}
          <span className="btn-caption">
            {t("decisions.actions.launchFeature.caption")}
          </span>
        </button>
      </div>
    </div>
  );
}

