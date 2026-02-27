export const translations = {
  en: {
    meta: {
      languageName: "English",
    },
    app: {
      title: "Startup Simulator",
      subtitle:
        "Build your startup month by month. Balance growth, runway, and your sanity.",
      themeLight: "Light Mode",
      themeDark: "Dark Mode",
      newGame: "New Game / Settings",
      reset: "Reset",
      languageLabel: "Language",
    },
    setup: {
      title: "Initial Setup",
      description:
        "Choose your startup profile. These choices affect difficulty, growth, and risk.",
      industry: "Industry",
      budget: "Starting Budget",
      risk: "Risk Appetite",
      founderSkill: "Founder Skill Profile",
      difficulty: "Difficulty",
      start: "Start Simulation",
      industries: {
        saas: "SaaS",
        marketplace: "Marketplace",
        fintech: "Fintech",
        ai: "AI Tools",
        consumer: "Consumer App",
      },
      budgets: {
        lean: "Lean (harder, more intense)",
        normal: "Normal",
        large: "Funded (easier, more cash)",
      },
      risks: {
        conservative: "Conservative",
        balanced: "Balanced",
        aggressive: "Aggressive",
      },
      founderSkills: {
        generalist: "Generalist",
        product: "Product-heavy",
        growth: "Growth / Marketing",
        operations: "Operations",
      },
      difficulties: {
        easy: "Easy",
        normal: "Normal",
        hard: "Hard",
      },
    },
    hints: {
      title: "How to play",
      step1: "1. Configure your startup in the setup dialog, then press Start.",
      step2:
        "2. Use the buttons on the right to hire, market, pivot, and raise money.",
      step3:
        "3. Each click advances one month. Watch cash, runway, and energy closely.",
      tip:
        "Tip: Running out of cash or founder energy will end the game. Aim for a $100M valuation or a good acquisition offer.",
      hide: "Hide tips",
      show: "Show tips",
    },
    dashboard: {
      title: "Company Overview",
      subtitle: "Month {month} · {industry} · {difficulty} mode",
      advanceMonth: "Advance 1 Month",
      metrics: {
        cash: "Cash",
        revenue: "Revenue (M)",
        expenses: "Expenses (M)",
        burnRate: "Burn Rate",
        burnRateBreakeven: "Breakeven+",
        runway: "Runway",
        runwayInfinite: "Infinite",
        runwayMonths: "{months} month{suffix}",
        valuation: "Valuation",
      },
    },
    decisions: {
      title: "Decisions",
      description:
        "Each decision immediately affects your cash, reputation, and growth.",
      actions: {
        hire: {
          title: "Hire Employee",
          caption: "Increase burn, speed up product",
        },
        fire: {
          title: "Fire Employee",
          caption: "Reduce burn, hurt reputation",
        },
        marketing: {
          title: "Invest in Marketing",
          caption: "Spend cash, boost growth",
        },
        pivot: {
          title: "Pivot Product",
          caption: "Reset market, risky but powerful",
        },
        investment: {
          title: "Accept Investment",
          caption: "Take new capital or exit when offers appear",
        },
        launchFeature: {
          title: "Launch New Feature",
          caption: "Spend energy and cash to raise quality",
        },
        rnd: {
          title: "Invest in R&D",
          caption: "Increase product quality for future growth",
        },
      },
    },
    stats: {
      title: "Key Metrics",
      cash: "Cash",
      revenue: "Revenue",
      expenses: "Expenses",
      burnRate: "Burn Rate",
      burnRateProfitable: "≤ 0 (profitable)",
      runway: "Runway",
      runwayInfinite: "Infinite",
      runwayMonths: "{months} month{suffix}",
      valuation: "Valuation",
      founderEnergy: "Founder Energy",
      reputation: "Reputation",
      employees: "Employees",
      marketingSpend: "Marketing Spend",
      productQuality: "Product Quality",
      marketSaturation: "Market Saturation",
      competition: "Competition",
    },
    events: {
      labels: {
        revenue: "Revenue",
        expenses: "Expenses",
        reputation: "Reputation",
        founderEnergy: "Founder Energy",
        continue: "Continue",
      },
      marketCrash: {
        title: "Market Correction",
        description:
          "A sudden macro downturn hits your industry. Customers are more cautious with spending.",
      },
      viralGrowth: {
        title: "Viral Growth",
        description:
          "Your product goes semi-viral on social media thanks to a happy customer thread.",
      },
      competitor: {
        title: "New Competitor",
        description:
          "A well-funded competitor launches a similar product with aggressive pricing.",
      },
      investorOffer: {
        title: "Investor Term Sheet",
        description:
          "An investor offers to lead a round in your startup. You can choose to take the money via the Accept Investment decision.",
      },
      acquisitionOffer: {
        title: "Acquisition Offer",
        description:
          "A strategic buyer wants to acquire your company. Use the Accept Investment button to sell the company and lock in the exit.",
      },
      burnoutScare: {
        title: "Burnout Warning",
        description:
          "You experience signs of burnout. Your doctor insists you slow down.",
      },
    },
    banner: {
      winTitle: "You made it!",
      loseTitle: "Game Over",
      playAgain: "Play Again",
    },
    gameOverReasons: {
      noCash: "You ran out of cash. The company is insolvent.",
      burnout:
        "Founder burnout reached zero. You had to shut the startup down.",
      bigValuation:
        "Congratulations! Your startup reached a $100M valuation.",
      acquisition:
        "You accepted an acquisition offer of ${amount}M. Nice exit!",
    },
  },
  ru: {
    meta: {
      languageName: "Русский",
    },
    app: {
      title: "Симулятор стартапа",
      subtitle:
        "Стройте стартап по месяцам. Балансируйте рост, срок жизни и выгорание.",
      themeLight: "Светлая тема",
      themeDark: "Тёмная тема",
      newGame: "Новая игра / Настройки",
      reset: "Сбросить",
      languageLabel: "Язык",
    },
    setup: {
      title: "Начальная настройка",
      description:
        "Выберите профиль стартапа. Эти параметры влияют на сложность, рост и риск.",
      industry: "Индустрия",
      budget: "Стартовый бюджет",
      risk: "Готовность к риску",
      founderSkill: "Тип фаундера",
      difficulty: "Сложность",
      start: "Начать симуляцию",
      industries: {
        saas: "SaaS",
        marketplace: "Маркетплейс",
        fintech: "Финтех",
        ai: "AI‑сервисы",
        consumer: "Массовое приложение",
      },
      budgets: {
        lean: "Бережный (сложнее, меньше денег)",
        normal: "Обычный",
        large: "Фондированный (легче, больше денег)",
      },
      risks: {
        conservative: "Консервативный",
        balanced: "Сбалансированный",
        aggressive: "Агрессивный",
      },
      founderSkills: {
        generalist: "Универсал",
        product: "Сильный в продукте",
        growth: "Маркетинг / рост",
        operations: "Операционный",
      },
      difficulties: {
        easy: "Лёгкая",
        normal: "Нормальная",
        hard: "Сложная",
      },
    },
    hints: {
      title: "Как играть",
      step1:
        "1. Настройте параметры стартапа в окне настроек и нажмите «Начать».",
      step2:
        "2. Используйте кнопки справа, чтобы нанимать, инвестировать в маркетинг, делать пивот и привлекать инвестиции.",
      step3:
        "3. Каждый ход — один месяц. Следите за денежным запасом, сроком жизни и энергией.",
      tip:
        "Подсказка: если закончится кэш или энергия фаундера, игра закончится. Цель — достичь оценки $100M или удачно продаться.",
      hide: "Скрыть подсказки",
      show: "Показать подсказки",
    },
    dashboard: {
      title: "Обзор компании",
      subtitle: "Месяц {month} · {industry} · режим {difficulty}",
      advanceMonth: "Следующий месяц",
      metrics: {
        cash: "Деньги",
        revenue: "Выручка (мес.)",
        expenses: "Расходы (мес.)",
        burnRate: "Бёрн‑рейт",
        burnRateBreakeven: "Безубыточность+",
        runway: "Срок жизни",
        runwayInfinite: "Бесконечный",
        runwayMonths: "{months} мес.",
        valuation: "Оценка",
      },
    },
    decisions: {
      title: "Решения",
      description:
        "Каждое решение сразу влияет на кэш, репутацию и рост стартапа.",
      actions: {
        hire: {
          title: "Нанять сотрудника",
          caption: "Рост расходов, но быстрее продукт",
        },
        fire: {
          title: "Уволить сотрудника",
          caption: "Меньше расходов, удар по репутации",
        },
        marketing: {
          title: "Маркетинговая кампания",
          caption: "Тратите деньги, ускоряете рост",
        },
        pivot: {
          title: "Пивот продукта",
          caption: "Меняете рынок, рискованно, но мощно",
        },
        investment: {
          title: "Принять инвестиции",
          caption: "Получить капитал или продаться при оффере",
        },
        launchFeature: {
          title: "Запустить фичу",
          caption: "Тратите энергию и кэш, повышаете качество",
        },
        rnd: {
          title: "Инвестиции в R&D",
          caption: "Повышаете качество продукта и будущий рост",
        },
      },
    },
    stats: {
      title: "Ключевые метрики",
      cash: "Деньги",
      revenue: "Выручка",
      expenses: "Расходы",
      burnRate: "Бёрн‑рейт",
      burnRateProfitable: "≤ 0 (прибыльно)",
      runway: "Срок жизни",
      runwayInfinite: "Бесконечный",
      runwayMonths: "{months} мес.",
      valuation: "Оценка",
      founderEnergy: "Энергия фаундера",
      reputation: "Репутация",
      employees: "Сотрудники",
      marketingSpend: "Маркетинговый бюджет",
      productQuality: "Качество продукта",
      marketSaturation: "Насыщенность рынка",
      competition: "Конкуренция",
    },
    events: {
      labels: {
        revenue: "Выручка",
        expenses: "Расходы",
        reputation: "Репутация",
        founderEnergy: "Энергия фаундера",
        continue: "Продолжить",
      },
      marketCrash: {
        title: "Коррекция рынка",
        description:
          "В вашей индустрии начался спад. Клиенты осторожнее тратят деньги.",
      },
      viralGrowth: {
        title: "Вирусный рост",
        description:
          "Про ваш продукт написали в соцсетях, и начался всплеск интереса.",
      },
      competitor: {
        title: "Новый конкурент",
        description:
          "Хорошо профинансированный конкурент выходит на рынок с агрессивными ценами.",
      },
      investorOffer: {
        title: "Оффер от инвестора",
        description:
          "Инвестор предлагает возглавить раунд. Используйте кнопку «Принять инвестиции», чтобы взять деньги.",
      },
      acquisitionOffer: {
        title: "Оффер на покупку",
        description:
          "Стратегический игрок хочет выкупить компанию. Нажмите «Принять инвестиции», чтобы зафиксировать экзит.",
      },
      burnoutScare: {
        title: "Предупреждение о выгорании",
        description:
          "Вы чувствуете сильное выгорание. Врач настаивает, что нужно сбавить темп.",
      },
    },
    banner: {
      winTitle: "Вы это сделали!",
      loseTitle: "Игра окончена",
      playAgain: "Сыграть ещё раз",
    },
    gameOverReasons: {
      noCash: "У вас закончился кэш. Компания стала неплатёжеспособной.",
      burnout:
        "Энергия фаундера упала до нуля. Пришлось закрыть стартап.",
      bigValuation:
        "Поздравляем! Оценка вашего стартапа достигла $100M.",
      acquisition:
        "Вы приняли предложение о продаже за ${amount}M. Крутой экзит!",
    },
  },
  de: {
    meta: {
      languageName: "Deutsch",
    },
    app: {
      title: "Startup‑Simulator",
      subtitle:
        "Baue dein Startup Monat für Monat auf. Balanciere Wachstum, Runway und Energie.",
      themeLight: "Helles Design",
      themeDark: "Dunkles Design",
      newGame: "Neues Spiel / Einstellungen",
      reset: "Zurücksetzen",
      languageLabel: "Sprache",
    },
    setup: {
      title: "Erste Einrichtung",
      description:
        "Wähle dein Startup‑Profil. Diese Optionen beeinflussen Schwierigkeit, Wachstum und Risiko.",
      industry: "Branche",
      budget: "Startbudget",
      risk: "Risikoprofil",
      founderSkill: "Gründerprofil",
      difficulty: "Schwierigkeit",
      start: "Simulation starten",
      industries: {
        saas: "SaaS",
        marketplace: "Marktplatz",
        fintech: "Fintech",
        ai: "KI‑Tools",
        consumer: "Consumer‑App",
      },
      budgets: {
        lean: "Schlank (schwerer, weniger Geld)",
        normal: "Normal",
        large: "Finanziert (leichter, mehr Geld)",
      },
      risks: {
        conservative: "Konservativ",
        balanced: "Ausgewogen",
        aggressive: "Aggressiv",
      },
      founderSkills: {
        generalist: "Generalist",
        product: "Produktfokus",
        growth: "Growth / Marketing",
        operations: "Operations",
      },
      difficulties: {
        easy: "Leicht",
        normal: "Normal",
        hard: "Schwierig",
      },
    },
    hints: {
      title: "So spielst du",
      step1:
        "1. Konfiguriere dein Startup im Setup‑Dialog und klicke auf „Simulation starten“. ",
      step2:
        "2. Nutze die Buttons rechts, um Mitarbeiter einzustellen, Marketing zu treiben, zu pivoten und Kapital aufzunehmen.",
      step3:
        "3. Jeder Klick geht einen Monat weiter. Behalte Cash, Runway und Energie im Blick.",
      tip:
        "Tipp: Wenn Cash oder Gründerenergie auf 0 fallen, ist das Spiel vorbei. Ziel ist $100M Bewertung oder ein guter Exit.",
      hide: "Tipps ausblenden",
      show: "Tipps anzeigen",
    },
    dashboard: {
      title: "Unternehmensübersicht",
      subtitle: "Monat {month} · {industry} · Modus {difficulty}",
      advanceMonth: "Einen Monat weiter",
      metrics: {
        cash: "Cash",
        revenue: "Umsatz (Monat)",
        expenses: "Ausgaben (Monat)",
        burnRate: "Burn Rate",
        burnRateBreakeven: "Break‑even+",
        runway: "Runway",
        runwayInfinite: "Unendlich",
        runwayMonths: "{months} Monate",
        valuation: "Bewertung",
      },
    },
    decisions: {
      title: "Entscheidungen",
      description:
        "Jede Entscheidung wirkt sich direkt auf Cash, Reputation und Wachstum aus.",
      actions: {
        hire: {
          title: "Mitarbeiter einstellen",
          caption: "Höherer Burn, schnelleres Produkt",
        },
        fire: {
          title: "Mitarbeiter entlassen",
          caption: "Weniger Burn, schlechtere Reputation",
        },
        marketing: {
          title: "In Marketing investieren",
          caption: "Mehr Ausgaben, mehr Wachstum",
        },
        pivot: {
          title: "Produkt‑Pivot",
          caption: "Markt ändern, riskant aber stark",
        },
        investment: {
          title: "Investment annehmen",
          caption: "Kapital aufnehmen oder bei Angebot exitten",
        },
        launchFeature: {
          title: "Neues Feature launchen",
          caption: "Mehr Aufwand und Cash, höhere Qualität",
        },
        rnd: {
          title: "In F&E investieren",
          caption: "Steigert Produktqualität und zukünftiges Wachstum",
        },
      },
    },
    stats: {
      title: "Kennzahlen",
      cash: "Cash",
      revenue: "Umsatz",
      expenses: "Ausgaben",
      burnRate: "Burn Rate",
      burnRateProfitable: "≤ 0 (profitabel)",
      runway: "Runway",
      runwayInfinite: "Unendlich",
      runwayMonths: "{months} Monate",
      valuation: "Bewertung",
      founderEnergy: "Gründerenergie",
      reputation: "Reputation",
      employees: "Mitarbeiter",
      marketingSpend: "Marketingbudget",
      productQuality: "Produktqualität",
      marketSaturation: "Marktsättigung",
      competition: "Wettbewerb",
    },
    events: {
      labels: {
        revenue: "Umsatz",
        expenses: "Ausgaben",
        reputation: "Reputation",
        founderEnergy: "Gründerenergie",
        continue: "Weiter",
      },
      marketCrash: {
        title: "Marktkorrektur",
        description:
          "Ein Abschwung trifft deine Branche. Kunden achten stärker auf Ausgaben.",
      },
      viralGrowth: {
        title: "Virales Wachstum",
        description:
          "Ein begeisterter Thread in sozialen Medien sorgt für zusätzlichen Buzz.",
      },
      competitor: {
        title: "Neuer Wettbewerber",
        description:
          "Ein gut finanziertes Unternehmen startet ein Konkurrenzprodukt mit aggressiven Preisen.",
      },
      investorOffer: {
        title: "Investoren‑Term Sheet",
        description:
          "Ein Investor bietet an, eine Runde anzuführen. Über „Investment annehmen“ kannst du das Geld nehmen.",
      },
      acquisitionOffer: {
        title: "Übernahmeangebot",
        description:
          "Ein strategischer Käufer möchte deine Firma übernehmen. Nutze „Investment annehmen“, um den Exit zu fixieren.",
      },
      burnoutScare: {
        title: "Burnout‑Warnung",
        description:
          "Du zeigst klare Anzeichen von Burnout. Dein Arzt rät dringend, langsamer zu machen.",
      },
    },
    banner: {
      winTitle: "Geschafft!",
      loseTitle: "Spiel vorbei",
      playAgain: "Noch einmal spielen",
    },
    gameOverReasons: {
      noCash: "Dir ist das Geld ausgegangen. Das Unternehmen ist insolvent.",
      burnout:
        "Die Energie des Gründers ist auf null gefallen. Du musstest das Startup schließen.",
      bigValuation:
        "Glückwunsch! Dein Startup hat eine Bewertung von $100M erreicht.",
      acquisition:
        "Du hast ein Übernahmeangebot über ${amount}M angenommen. Starker Exit!",
    },
  },
  fr: {
    meta: {
      languageName: "Français",
    },
    app: {
      title: "Startup Simulator",
      subtitle:
        "Construisez votre startup mois après mois. Équilibrez croissance, trésorerie et énergie.",
      themeLight: "Thème clair",
      themeDark: "Thème sombre",
      newGame: "Nouvelle partie / Réglages",
      reset: "Réinitialiser",
      languageLabel: "Langue",
    },
    setup: {
      title: "Configuration initiale",
      description:
        "Choisissez le profil de votre startup. Ces choix influencent la difficulté, la croissance et le risque.",
      industry: "Secteur",
      budget: "Budget de départ",
      risk: "Tolérance au risque",
      founderSkill: "Profil du fondateur",
      difficulty: "Difficulté",
      start: "Lancer la simulation",
      industries: {
        saas: "SaaS",
        marketplace: "Place de marché",
        fintech: "Fintech",
        ai: "Outils IA",
        consumer: "Application grand public",
      },
      budgets: {
        lean: "Frugal (plus dur, moins de cash)",
        normal: "Normal",
        large: "Financé (plus simple, plus de cash)",
      },
      risks: {
        conservative: "Conservateur",
        balanced: "Équilibré",
        aggressive: "Agressif",
      },
      founderSkills: {
        generalist: "Généraliste",
        product: "Orienté produit",
        growth: "Croissance / marketing",
        operations: "Opérations",
      },
      difficulties: {
        easy: "Facile",
        normal: "Normal",
        hard: "Difficile",
      },
    },
    hints: {
      title: "Comment jouer",
      step1:
        "1. Configurez votre startup dans la fenêtre de réglages puis cliquez sur « Lancer la simulation ».",
      step2:
        "2. Utilisez les boutons à droite pour recruter, faire du marketing, pivoter et lever des fonds.",
      step3:
        "3. Chaque tour représente un mois. Surveillez de près votre trésorerie, votre runway et votre énergie.",
      tip:
        "Astuce : si vous manquez de cash ou d’énergie du fondateur, la partie est terminée. Essayez d’atteindre $100M de valorisation ou d’obtenir un bon rachat.",
      hide: "Masquer les conseils",
      show: "Afficher les conseils",
    },
    dashboard: {
      title: "Vue d’ensemble",
      subtitle: "Mois {month} · {industry} · mode {difficulty}",
      advanceMonth: "Passer au mois suivant",
      metrics: {
        cash: "Trésorerie",
        revenue: "Revenu (mensuel)",
        expenses: "Dépenses (mensuelles)",
        burnRate: "Burn rate",
        burnRateBreakeven: "À l’équilibre+",
        runway: "Runway",
        runwayInfinite: "Infini",
        runwayMonths: "{months} mois",
        valuation: "Valorisation",
      },
    },
    decisions: {
      title: "Décisions",
      description:
        "Chaque décision influe immédiatement sur votre cash, votre réputation et votre croissance.",
      actions: {
        hire: {
          title: "Recruter",
          caption: "Plus de burn, produit plus rapide",
        },
        fire: {
          title: "Licencier",
          caption: "Moins de burn, mauvaise réputation",
        },
        marketing: {
          title: "Investir en marketing",
          caption: "Dépense de cash, boost de croissance",
        },
        pivot: {
          title: "Pivoter le produit",
          caption: "Changer de marché, risqué mais puissant",
        },
        investment: {
          title: "Accepter un investissement",
          caption: "Lever des fonds ou sortir en cas d’offre",
        },
        launchFeature: {
          title: "Lancer une nouvelle fonctionnalité",
          caption: "Coûte de l’énergie et du cash, améliore le produit",
        },
        rnd: {
          title: "Investir en R&D",
          caption: "Améliore la qualité produit et la croissance future",
        },
      },
    },
    stats: {
      title: "Statistiques clés",
      cash: "Trésorerie",
      revenue: "Revenu",
      expenses: "Dépenses",
      burnRate: "Burn rate",
      burnRateProfitable: "≤ 0 (profitable)",
      runway: "Runway",
      runwayInfinite: "Infini",
      runwayMonths: "{months} mois",
      valuation: "Valorisation",
      founderEnergy: "Énergie du fondateur",
      reputation: "Réputation",
      employees: "Employés",
      marketingSpend: "Budget marketing",
      productQuality: "Qualité du produit",
      marketSaturation: "Saturation du marché",
      competition: "Concurrence",
    },
    events: {
      labels: {
        revenue: "Revenu",
        expenses: "Dépenses",
        reputation: "Réputation",
        founderEnergy: "Énergie du fondateur",
        continue: "Continuer",
      },
      marketCrash: {
        title: "Correction de marché",
        description:
          "Un ralentissement touche votre secteur. Les clients réduisent leurs dépenses.",
      },
      viralGrowth: {
        title: "Croissance virale",
        description:
          "Un fil enthousiaste sur les réseaux sociaux déclenche un buzz autour de votre produit.",
      },
      competitor: {
        title: "Nouveau concurrent",
        description:
          "Un concurrent bien financé lance un produit similaire avec des prix agressifs.",
      },
      investorOffer: {
        title: "Offre d’un investisseur",
        description:
          "Un investisseur propose de mener un tour. Utilisez le bouton « Accepter un investissement » pour prendre l’argent.",
      },
      acquisitionOffer: {
        title: "Offre de rachat",
        description:
          "Un acteur stratégique souhaite racheter votre société. Utilisez « Accepter un investissement » pour conclure l’exit.",
      },
      burnoutScare: {
        title: "Alerte burn‑out",
        description:
          "Vous montrez des signes clairs de burn‑out. Votre médecin vous demande de lever le pied.",
      },
    },
    banner: {
      winTitle: "Bravo !",
      loseTitle: "Partie terminée",
      playAgain: "Rejouer",
    },
    gameOverReasons: {
      noCash:
        "Vous n’avez plus de trésorerie. L’entreprise est insolvable.",
      burnout:
        "L’énergie du fondateur est tombée à zéro. Vous avez dû fermer le startup.",
      bigValuation:
        "Félicitations ! Votre startup a atteint une valorisation de $100M.",
      acquisition:
        "Vous avez accepté une offre de rachat de ${amount}M. Bel exit !",
    },
  },
};

