import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard.jsx";
import DecisionPanel from "./components/DecisionPanel.jsx";
import EventModal from "./components/EventModal.jsx";
import StartupStats from "./components/StartupStats.jsx";
import { useGameEngine } from "./hooks/useGameEngine.js";
import { useI18n } from "./i18n/I18nProvider.jsx";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [showSettings, setShowSettings] = useState(true);
  const [showHints, setShowHints] = useState(true);

  const { t, language, setLanguage, languages } = useI18n();

  const {
    state,
    dispatch,
    canAdvance,
    handleDecision,
    handleNextMonth,
    resetGame,
    applyInitialSettings,
  } = useGameEngine();

  // Restore saved theme preference
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("startup-simulator-theme");
      if (savedTheme === "light") setIsDark(false);
      if (savedTheme === "dark") setIsDark(true);
    } catch {
      // ignore
    }
  }, []);

  // Hide setup modal if a saved game already exists
  useEffect(() => {
    try {
      const saved = localStorage.getItem("startup-simulator-state-v1");
      if (saved) {
        setShowSettings(false);
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleTheme = () =>
    setIsDark((d) => {
      const next = !d;
      try {
        localStorage.setItem(
          "startup-simulator-theme",
          next ? "dark" : "light"
        );
      } catch {
        // ignore
      }
      return next;
    });

  const rootClass = isDark ? "app app-dark" : "app app-light";

  return (
    <div className={rootClass}>
      <header className="app-header">
        <div className="header-main">
          <div className="header-title-row">
            <h1>{t("app.title")}</h1>
            <p className="subtitle">{t("app.subtitle")}</p>
          </div>
          <div className="header-controls">
            <div className="header-utilities">
              <div className="lang-switcher">
                <span className="lang-label">{t("app.languageLabel")}:</span>
                <div className="lang-pills">
                  {languages.map((opt) => (
                    <button
                      key={opt.code}
                      type="button"
                      className={
                        "secondary pill" +
                        (opt.code === language ? " pill-active" : "")
                      }
                      onClick={() => setLanguage(opt.code)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="secondary theme-toggle"
                onClick={toggleTheme}
                aria-label={isDark ? t("app.themeLight") : t("app.themeDark")}
                title={isDark ? t("app.themeLight") : t("app.themeDark")}
              >
                <span className="theme-icon">{isDark ? "☾" : "☀︎"}</span>
              </button>
            </div>
            <div className="header-buttons">
              <button
                className="secondary"
                onClick={() => setShowSettings(true)}
              >
                {t("app.newGame")}
              </button>
              <button className="secondary" onClick={resetGame}>
                {t("app.reset")}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="hint-row">
        <div className="hint-card">
          <div className="hint-header">
            <div>
              <div className="hint-title">{t("hints.title")}</div>
            </div>
            <button
              type="button"
              className="secondary small-ghost"
              onClick={() => setShowHints((v) => !v)}
            >
              {showHints ? t("hints.hide") : t("hints.show")}
            </button>
          </div>
          {showHints && (
            <div className="hint-body">
              <p>{t("hints.step1")}</p>
              <p>{t("hints.step2")}</p>
              <p>{t("hints.step3")}</p>
              <p className="muted small">{t("hints.tip")}</p>
            </div>
          )}
        </div>
      </div>

      {showSettings && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>{t("setup.title")}</h2>
            <p className="modal-description">{t("setup.description")}</p>
            <StartupSettingsForm
              onStart={(settings) => {
                applyInitialSettings(settings);
                setShowSettings(false);
              }}
            />
          </div>
        </div>
      )}

      <main className="app-grid">
        <section className="grid-main">
          <Dashboard
            state={state}
            canAdvance={canAdvance}
            onNextMonth={handleNextMonth}
          />
        </section>
        <aside className="grid-side">
          <StartupStats state={state} />
          <DecisionPanel
            disabled={!canAdvance || state.isGameOver}
            onDecision={handleDecision}
          />
        </aside>
      </main>

      {state.currentEvent && (
        <EventModal
          event={state.currentEvent}
          onClose={() => dispatch({ type: "RESOLVE_EVENT" })}
        />
      )}

      {(state.isGameOver || state.isWin) && (
        <div className="banner">
          <div className="banner-content">
            <h2>
              {state.isWin ? t("banner.winTitle") : t("banner.loseTitle")}
            </h2>
            <p>
              {state.gameOverReasonKey
                ? t(state.gameOverReasonKey, state.gameOverParams || {})
                : ""}
            </p>
            <button onClick={resetGame}>{t("banner.playAgain")}</button>
          </div>
        </div>
      )}
    </div>
  );
}

function StartupSettingsForm({ onStart }) {
  const [industry, setIndustry] = useState("SaaS");
  const [budget, setBudget] = useState("normal");
  const [risk, setRisk] = useState("balanced");
  const [founderSkill, setFounderSkill] = useState("generalist");
  const [difficulty, setDifficulty] = useState("normal");
  const { t } = useI18n();

  const handleSubmit = (e) => {
    e.preventDefault();
    onStart({ industry, budget, risk, founderSkill, difficulty });
  };

  return (
    <form className="settings-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>{t("setup.industry")}</label>
        <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
          <option value="SaaS">{t("setup.industries.saas")}</option>
          <option value="Marketplace">{t("setup.industries.marketplace")}</option>
          <option value="Fintech">{t("setup.industries.fintech")}</option>
          <option value="AI Tools">{t("setup.industries.ai")}</option>
          <option value="Consumer App">{t("setup.industries.consumer")}</option>
        </select>
      </div>

      <div className="form-group">
        <label>{t("setup.budget")}</label>
        <select value={budget} onChange={(e) => setBudget(e.target.value)}>
          <option value="lean">{t("setup.budgets.lean")}</option>
          <option value="normal">{t("setup.budgets.normal")}</option>
          <option value="large">{t("setup.budgets.large")}</option>
        </select>
      </div>

      <div className="form-group">
        <label>{t("setup.risk")}</label>
        <select value={risk} onChange={(e) => setRisk(e.target.value)}>
          <option value="conservative">{t("setup.risks.conservative")}</option>
          <option value="balanced">{t("setup.risks.balanced")}</option>
          <option value="aggressive">{t("setup.risks.aggressive")}</option>
        </select>
      </div>

      <div className="form-group">
        <label>{t("setup.founderSkill")}</label>
        <select
          value={founderSkill}
          onChange={(e) => setFounderSkill(e.target.value)}
        >
          <option value="generalist">{t("setup.founderSkills.generalist")}</option>
          <option value="product">{t("setup.founderSkills.product")}</option>
          <option value="growth">{t("setup.founderSkills.growth")}</option>
          <option value="operations">{t("setup.founderSkills.operations")}</option>
        </select>
      </div>

      <div className="form-group">
        <label>{t("setup.difficulty")}</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">{t("setup.difficulties.easy")}</option>
          <option value="normal">{t("setup.difficulties.normal")}</option>
          <option value="hard">{t("setup.difficulties.hard")}</option>
        </select>
      </div>

      <div className="form-actions">
        <button type="submit">{t("setup.start")}</button>
      </div>
    </form>
  );
}

export default App;

