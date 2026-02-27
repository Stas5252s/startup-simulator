import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations.js";

const I18nContext = createContext(null);

const STORAGE_KEY = "startup-simulator-language";

function interpolate(template, params) {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, key) =>
    Object.prototype.hasOwnProperty.call(params, key) ? String(params[key]) : ""
  );
}

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && translations[saved]) {
        setLanguage(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore
    }
  }, [language]);

  const value = useMemo(() => {
    const langPack = translations[language] || translations.en;

    const t = (path, params) => {
      const segments = path.split(".");
      let node = langPack;
      for (const segment of segments) {
        if (node && typeof node === "object" && segment in node) {
          node = node[segment];
        } else {
          node = null;
          break;
        }
      }
      if (typeof node === "string") {
        return interpolate(node, params);
      }
      return path;
    };

    return {
      language,
      setLanguage,
      t,
      languages: Object.entries(translations).map(([code, pack]) => ({
        code,
        label: pack.meta.languageName,
      })),
    };
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}

