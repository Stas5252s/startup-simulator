import { useEffect, useReducer, useMemo } from "react";
import { calculateEconomy } from "../engine/economy.js";
import { getMonthlyEvent } from "../engine/events.js";
import { calculateValuation } from "../engine/valuation.js";
import { updateMarket } from "../engine/market.js";
import { getRandomInt } from "../utils/random.js";

const STORAGE_KEY = "startup-simulator-state-v1";

const initialState = {
  month: 0,
  cash: 0,
  revenue: 0,
  expenses: 0,
  burnRate: 0,
  runway: Infinity,
  valuation: 0,
  founderEnergy: 100,
  reputation: 50,
  employees: 1,
  marketingInvestment: 0,
  productQuality: 40,
  market: {
    saturation: 0.05,
    competition: 0.2,
  },
  history: {
    months: [],
    cash: [],
    revenue: [],
    burnRate: [],
    valuation: [],
  },
  currentEvent: null,
  isGameOver: false,
  isWin: false,
  gameOverReasonKey: null,
  gameOverParams: null,
  hasAcquisitionOffer: false,
  settings: {
    industry: "SaaS",
    budget: "normal",
    risk: "balanced",
    founderSkill: "generalist",
    difficulty: "normal",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "APPLY_SETTINGS": {
      const { industry, budget, risk, founderSkill, difficulty } =
        action.payload;

      let cash = 300_000;
      if (budget === "lean") cash = 120_000;
      if (budget === "large") cash = 800_000;

      let reputation = 50;
      let productQuality = 40;
      let marketingInvestment = 10_000;
      if (founderSkill === "product") {
        productQuality = 60;
      } else if (founderSkill === "growth") {
        marketingInvestment = 20_000;
      } else if (founderSkill === "operations") {
        reputation = 60;
      }

      let employees = 2;
      if (industry === "Fintech" || industry === "AI Tools") {
        employees = 3;
        cash *= 0.9;
      }

      let difficultyMultiplier = 1;
      if (difficulty === "easy") difficultyMultiplier = 0.8;
      if (difficulty === "hard") difficultyMultiplier = 1.2;

      return {
        ...state,
        ...initialState,
        cash,
        founderEnergy: 100,
        reputation,
        productQuality,
        marketingInvestment,
        employees,
        settings: {
          industry,
          budget,
          risk,
          founderSkill,
          difficulty,
          difficultyMultiplier,
        },
      };
    }
    case "NEXT_MONTH": {
      if (state.isGameOver || state.isWin) return state;

      const economy = calculateEconomy(state);
      const market = updateMarket(state.market, state, state.settings);
      const valuation = calculateValuation(economy.revenue, state);

      const burnRate = economy.burnRate;
      const runway =
        burnRate > 0 ? Math.max(0, Math.round(economy.cash / burnRate)) : 999;

      const months = [...state.history.months, state.month + 1];
      const cashHistory = [...state.history.cash, economy.cash];
      const revenueHistory = [...state.history.revenue, economy.revenue];
      const burnHistory = [...state.history.burnRate, burnRate];
      const valuationHistory = [...state.history.valuation, valuation];

      let founderEnergy = economy.founderEnergy;
      let reputation = economy.reputation;

      const baseState = {
        ...state,
        ...economy,
        burnRate,
        runway,
        valuation,
        market,
        founderEnergy,
        reputation,
        month: state.month + 1,
        history: {
          months,
          cash: cashHistory,
          revenue: revenueHistory,
          burnRate: burnHistory,
          valuation: valuationHistory,
        },
        currentEvent: null,
        hasAcquisitionOffer: false,
      };

      const event = getMonthlyEvent(baseState);
      let newState = baseState;

      if (event) {
        newState = {
          ...newState,
          cash: newState.cash + (event.deltaCash || 0),
          revenue: Math.max(0, newState.revenue + (event.deltaRevenue || 0)),
          expenses: Math.max(0, newState.expenses + (event.deltaExpenses || 0)),
          founderEnergy: Math.max(
            0,
            Math.min(100, newState.founderEnergy + (event.deltaEnergy || 0))
          ),
          reputation: Math.max(
            0,
            Math.min(100, newState.reputation + (event.deltaReputation || 0))
          ),
          hasAcquisitionOffer: !!event.acquisitionOffer,
          currentEvent: event,
        };
      }

      // Recalculate valuation after event side effects
      const finalValuation = calculateValuation(newState.revenue, newState);
      newState = {
        ...newState,
        valuation: finalValuation,
      };

      // Win / lose conditions
      if (newState.cash <= 0) {
        return {
          ...newState,
          isGameOver: true,
          gameOverReasonKey: "gameOverReasons.noCash",
          gameOverParams: null,
        };
      }

      if (newState.founderEnergy <= 0) {
        return {
          ...newState,
          isGameOver: true,
          gameOverReasonKey: "gameOverReasons.burnout",
          gameOverParams: null,
        };
      }

      if (newState.valuation >= 100_000_000) {
        return {
          ...newState,
          isWin: true,
          gameOverReasonKey: "gameOverReasons.bigValuation",
          gameOverParams: null,
        };
      }

      return newState;
    }
    case "DECISION": {
      const { type } = action.payload;
      if (state.isGameOver || state.isWin) return state;

      let changes = {};

      switch (type) {
        case "hire": {
          const cost = 12_000;
          changes = {
            employees: state.employees + 1,
            cash: state.cash - cost,
            expenses: state.expenses + cost,
            productQuality: Math.min(100, state.productQuality + 3),
            founderEnergy: Math.max(0, state.founderEnergy - 3),
          };
          break;
        }
        case "fire": {
          if (state.employees <= 1) return state;
          const savings = 10_000;
          changes = {
            employees: state.employees - 1,
            expenses: Math.max(0, state.expenses - savings),
            reputation: Math.max(0, state.reputation - 5),
            founderEnergy: Math.max(0, state.founderEnergy + 2),
          };
          break;
        }
        case "marketing": {
          const spend = 20_000;
          if (state.cash < spend) return state;
          changes = {
            marketingInvestment: state.marketingInvestment + spend,
            cash: state.cash - spend,
            founderEnergy: Math.max(0, state.founderEnergy - 2),
          };
          break;
        }
        case "pivot": {
          const cost = 30_000;
          if (state.cash < cost) return state;
          const qualityBoost = getRandomInt(5, 15);
          changes = {
            cash: state.cash - cost,
            productQuality: Math.min(100, state.productQuality + qualityBoost),
            reputation: Math.max(0, state.reputation - 5),
            market: {
              ...state.market,
              saturation: Math.max(0, state.market.saturation - 0.1),
            },
            founderEnergy: Math.max(0, state.founderEnergy - 10),
          };
          break;
        }
        case "investment": {
          // Accept investment if there's an offer, otherwise small seed round
          if (state.hasAcquisitionOffer && state.currentEvent?.acquisitionOffer) {
            const offer = state.currentEvent.acquisitionOffer;
            return {
              ...state,
              cash: state.cash + offer.cash,
              isWin: true,
              gameOverReasonKey: "gameOverReasons.acquisition",
              gameOverParams: {
                amount: (offer.cash / 1_000_000).toFixed(1),
              },
            };
          }

          const amount = 250_000;
          changes = {
            cash: state.cash + amount,
            reputation: Math.min(100, state.reputation + 5),
            founderEnergy: Math.max(0, state.founderEnergy - 5),
          };
          break;
        }
        case "launch-feature": {
          const cost = 15_000;
          if (state.cash < cost) return state;
          const qualityDelta = getRandomInt(3, 10);
          const repDelta = getRandomInt(2, 8);
          changes = {
            cash: state.cash - cost,
            productQuality: Math.min(100, state.productQuality + qualityDelta),
            reputation: Math.min(100, state.reputation + repDelta),
            founderEnergy: Math.max(0, state.founderEnergy - 8),
          };
          break;
        }
        case "rnd": {
          const cost = 25_000;
          if (state.cash < cost) return state;
          const qualityDelta = getRandomInt(8, 16);
          changes = {
            cash: state.cash - cost,
            productQuality: Math.min(100, state.productQuality + qualityDelta),
            founderEnergy: Math.max(0, state.founderEnergy - 4),
          };
          break;
        }
        default:
          return state;
      }

      return {
        ...state,
        ...changes,
      };
    }
    case "RESOLVE_EVENT": {
      return {
        ...state,
        currentEvent: null,
      };
    }
    case "ACCEPT_OFFER": {
      if (!state.currentEvent?.acquisitionOffer) return state;
      const offer = state.currentEvent.acquisitionOffer;
      if (offer.type === "acquisition") {
        return {
          ...state,
          cash: state.cash + offer.cash,
          isWin: true,
          gameOverReasonKey: "gameOverReasons.acquisition",
          gameOverParams: {
            amount: (offer.cash / 1_000_000).toFixed(1),
          },
          currentEvent: null,
          hasAcquisitionOffer: false,
        };
      }
      // funding
      return {
        ...state,
        cash: state.cash + offer.cash,
        reputation: Math.min(100, state.reputation + 5),
        founderEnergy: Math.max(0, state.founderEnergy - 3),
        currentEvent: null,
        hasAcquisitionOffer: false,
      };
    }
    case "REJECT_OFFER": {
      if (!state.currentEvent?.acquisitionOffer) return {
        ...state,
        currentEvent: null,
        hasAcquisitionOffer: false,
      };
      return {
        ...state,
        currentEvent: null,
        hasAcquisitionOffer: false,
      };
    }
    case "LOAD_STATE": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "RESET": {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
}

export function useGameEngine() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Load saved state
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        dispatch({ type: "LOAD_STATE", payload: parsed });
      }
    } catch {
      // ignore
    }
  }, []);

  // Persist state
  useEffect(() => {
    try {
      const toSave = { ...state };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch {
      // ignore
    }
  }, [state]);

  const canAdvance = useMemo(
    () => !state.isGameOver && !state.isWin,
    [state.isGameOver, state.isWin]
  );

  const handleDecision = (type) => {
    dispatch({ type: "DECISION", payload: { type } });
  };

  const handleNextMonth = () => {
    if (!canAdvance) return;
    dispatch({ type: "NEXT_MONTH" });
  };

  const resetGame = () => {
    dispatch({ type: "RESET" });
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const applyInitialSettings = (settings) => {
    dispatch({ type: "APPLY_SETTINGS", payload: settings });
  };

  return {
    state,
    dispatch,
    canAdvance,
    handleDecision,
    handleNextMonth,
    resetGame,
    applyInitialSettings,
  };
}

