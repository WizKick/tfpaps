// ========== PARCOURS D'APPRENTISSAGE ==========
// Ordre pédagogique : Cadre légal → Incendie → Opérationnel → Relationnel
// Chaque étape associe une fiche mémo à 3-5 questions QCM du pool.
// Les questions sont sélectionnées par keyword matching sur leur thème + texte.

const parcours = [
  // ========== BLOC 1 : CADRE LÉGAL ==========
  {
    id: "step-1",
    bloc: "Cadre légal",
    blocIcon: "⚖",
    order: 1,
    ficheId: "cnaps",
    title: "CNAPS & Carte professionnelle",
    intro: "On commence par le fondamental : qui t'autorise à exercer, comment tu prouves ta légitimité. Sans carte pro, pas de métier.",
    questionKeywords: ["CNAPS", "carte professionnelle", "carte pro", "Préfet", "bulletin"]
  },
  {
    id: "step-2",
    bloc: "Cadre légal",
    blocIcon: "⚖",
    order: 2,
    ficheId: "article-73",
    title: "Article 73 · Appréhension",
    intro: "LE réflexe de l'examen. Conditions cumulatives à connaître par cœur : flagrant délit, crime/délit puni d'emprisonnement, remise immédiate à un OPJ.",
    questionKeywords: ["article 73", "appréhension", "appréhender", "flagrant", "OPJ", "officier de police"]
  },
  {
    id: "step-3",
    bloc: "Cadre légal",
    blocIcon: "⚖",
    order: 3,
    ficheId: "palpation",
    title: "Palpation de sécurité",
    intro: "Ne pas confondre palpation (APS, consentement, par-dessus vêtements) et fouille (OPJ uniquement). Point sensible de l'examen.",
    questionKeywords: ["palpation", "fouille", "consentement", "vêtement"]
  },
  {
    id: "step-4",
    bloc: "Cadre légal",
    blocIcon: "⚖",
    order: 4,
    ficheId: "droit-travail",
    title: "Droit du travail APS",
    intro: "Tes droits en tant que salarié : droit de retrait, accident du travail, DATI pour travailleur isolé, convention collective.",
    questionKeywords: ["droit de retrait", "accident", "travailleur isolé", "DATI", "convention collective", "salaire", "prime"]
  },
  {
    id: "step-5",
    bloc: "Cadre légal",
    blocIcon: "⚖",
    order: 5,
    ficheId: "videosurveillance",
    title: "Vidéosurveillance & CNIL",
    intro: "Cadre réglementaire des caméras : durée de conservation (1 mois), rôle de la CNIL, types de détection anti-intrusion.",
    questionKeywords: ["CNIL", "vidéosurveillance", "caméra", "image", "anti-intrusion", "détection"]
  },

  // ========== BLOC 2 : INCENDIE ==========
  {
    id: "step-6",
    bloc: "Incendie",
    blocIcon: "🔥",
    order: 6,
    ficheId: "triangle-feu",
    title: "Triangle du feu",
    intro: "Base absolue. Combustible + Comburant + Énergie = Feu. Retire un des trois → feu éteint. Classes de feu (A, B, C, D, F).",
    questionKeywords: ["triangle", "combustible", "comburant", "classe", "feu", "combustion", "propagation"]
  },
  {
    id: "step-7",
    bloc: "Incendie",
    blocIcon: "🔥",
    order: 7,
    ficheId: "extincteurs",
    title: "Contrôle des extincteurs",
    intro: "Méthode en 5 points : présent, signalétique, goupille, état général, date. Distances d'attaque par agent.",
    questionKeywords: ["extincteur", "goupille", "CO2", "poudre", "eau pulvérisée", "vérification"]
  },
  {
    id: "step-8",
    bloc: "Incendie",
    blocIcon: "🔥",
    order: 8,
    ficheId: "ssi",
    title: "SSI · Système de Sécurité Incendie",
    intro: "Le plus technique de l'examen. 5 catégories (A à E), composants (SDI, SMSI, CMSI, DAS, UCMC), voyants du CMSI.",
    questionKeywords: ["SSI", "SDI", "SMSI", "CMSI", "DAS", "UCMC", "détecteur", "voyant", "catégorie"]
  },
  {
    id: "step-9",
    bloc: "Incendie",
    blocIcon: "🔥",
    order: 9,
    ficheId: "desenfumage",
    title: "Désenfumage & Compartimentage",
    intro: "Méthodes de désenfumage (naturel, mécanique), classement pare-flammes (E) vs coupe-feu (REI), éclairage de sécurité.",
    questionKeywords: ["désenfumage", "pare-flammes", "coupe-feu", "compartimentage", "éclairage", "fumée", "REI"]
  },

  // ========== BLOC 3 : OPÉRATIONNEL ==========
  {
    id: "step-10",
    bloc: "Opérationnel",
    blocIcon: "🚶",
    order: 10,
    ficheId: "prise-service",
    title: "Prise de service",
    intro: "Procédure à suivre dans l'ordre : contrôles extérieurs, PC sécurité, matériel, consignes, SSI, main courante.",
    questionKeywords: ["prise de service", "PC sécurité", "matériel", "consigne", "astreinte"]
  },
  {
    id: "step-11",
    bloc: "Opérationnel",
    blocIcon: "🚶",
    order: 11,
    ficheId: "ronde",
    title: "Rondes de sécurité",
    intro: "Types de rondes (ouverture, préventive, aléatoire), objectifs, équipement obligatoire, lecture de plan.",
    questionKeywords: ["ronde", "ronde aléatoire", "contrôleur", "plan", "DATI", "lampe"]
  },
  {
    id: "step-12",
    bloc: "Opérationnel",
    blocIcon: "🚶",
    order: 12,
    ficheId: "main-courante",
    title: "Main courante & Rapports",
    intro: "Traçabilité quotidienne : forme (manuscrite ou informatisée), format horaire 24h, contenu. Rapports (anomalie, incident).",
    questionKeywords: ["main courante", "rapport", "anomalie", "incident", "QQOQCP", "signalement"]
  },

  // ========== BLOC 4 : RELATIONNEL ==========
  {
    id: "step-13",
    bloc: "Relationnel",
    blocIcon: "🤝",
    order: 13,
    ficheId: "conflit",
    title: "Gestion de conflit",
    intro: "Dernier bloc. Rôle de l'APS : conciliateur, jamais bagarreur. Techniques de désescalade, écoute active, limites.",
    questionKeywords: ["conflit", "désamorcer", "conciliateur", "écoute", "négociation", "client", "directeur"]
  }
];

// Helper : pour une étape donnée, sélectionner les 4 QCM les plus pertinents
function selectQuizForStep(step, allQuestions) {
  const keywords = step.questionKeywords.map(k => k.toLowerCase());
  const scored = allQuestions.map(q => {
    const haystack = (q.theme + ' ' + q.q + ' ' + q.options.join(' ') + ' ' + q.explanation).toLowerCase();
    let score = 0;
    keywords.forEach(kw => {
      if (haystack.includes(kw)) score += 1;
      // Bonus if keyword in theme
      if (q.theme.toLowerCase().includes(kw)) score += 2;
    });
    return { q, score };
  }).filter(x => x.score > 0);

  // Sort by score desc, take top 4
  scored.sort((a, b) => b.score - a.score);
  const selected = scored.slice(0, 4).map(x => x.q);

  // If less than 4 matched, fill with random from same theme
  if (selected.length < 4) {
    const stepThemes = [step.ficheId];
    const extras = allQuestions
      .filter(q => !selected.includes(q))
      .sort(() => Math.random() - 0.5)
      .slice(0, 4 - selected.length);
    selected.push(...extras);
  }

  return selected;
}
