// ========== BONUS DATA · UV7, UV11, Examens blancs ==========
// Questions supplémentaires uniquement — aucun code UI

const bonusQuestions = [

  // ========== UV 7 · SENSIBILISATION AUX RISQUES TERRORISTES ==========
  // 10 questions à l'examen officiel — UV totalement absente du data.js principal
  {
    theme: "UV7 · Risques terroristes",
    q: "Que signifie l'acronyme PPMS dans un contexte de sécurité ?",
    options: [
      "Plan Particulier de Mise en Sûreté",
      "Plan Public de Maintien de Sécurité",
      "Procédure Préventive Multi-Sites",
      "Programme Permanent de Mise en Service"
    ],
    correct: 0,
    explanation: "Le PPMS (Plan Particulier de Mise en Sûreté) prévoit l'organisation et les mesures à prendre face à un événement majeur (attentat, intrusion, risque chimique...)."
  },
  {
    theme: "UV7 · Risques terroristes",
    q: "Face à une attaque terroriste, quelle est la conduite recommandée par le ministère de l'Intérieur ?",
    options: [
      "Affronter, négocier, fuir",
      "S'échapper, se cacher, alerter",
      "Filmer, alerter, fuir",
      "Crier, bloquer les issues, attendre"
    ],
    correct: 1,
    explanation: "La doctrine officielle (ministère de l'Intérieur) : 1) S'ÉCHAPPER si possible, 2) SE CACHER si la fuite est impossible, 3) ALERTER les forces de l'ordre quand on est en sécurité."
  },
  {
    theme: "UV7 · Risques terroristes",
    q: "Quel est le plan gouvernemental de lutte contre le terrorisme en France ?",
    options: [
      "Plan ORSEC",
      "Plan Vigipirate",
      "Plan Blanc",
      "Plan Polmar"
    ],
    correct: 1,
    explanation: "Le Plan Vigipirate est le dispositif central de la France contre la menace terroriste. Il comporte 3 niveaux : Vigilance, Sécurité renforcée - Risque attentat, Urgence attentat."
  },
  {
    theme: "UV7 · Risques terroristes",
    q: "Combien de niveaux comporte le plan Vigipirate ?",
    options: ["2", "3", "4", "5"],
    correct: 1,
    explanation: "3 niveaux : Vigilance (permanent), Sécurité renforcée - Risque attentat, et Urgence attentat (le plus élevé, en cas d'attaque imminente ou en cours)."
  },
  {
    theme: "UV7 · Risques terroristes",
    q: "Face à un colis suspect (sac abandonné), que doit faire l'APS ?",
    options: [
      "L'ouvrir pour vérifier le contenu",
      "Le déplacer vers une zone isolée",
      "Établir un périmètre de sécurité, ne pas toucher, alerter",
      "Le jeter dans une poubelle blindée"
    ],
    correct: 2,
    explanation: "Procédure : ne JAMAIS toucher, déplacer ou ouvrir le colis. Établir un périmètre de sécurité de 50 m minimum, alerter les forces de l'ordre, faire évacuer la zone."
  },
  {
    theme: "UV7 · Risques terroristes",
    q: "Qu'est-ce qu'un comportement signal pouvant indiquer un risque terroriste ?",
    options: [
      "Une personne pressée",
      "Une personne qui photographie sous des angles inhabituels des dispositifs de sécurité",
      "Une personne mal habillée",
      "Une personne qui parle une langue étrangère"
    ],
    correct: 1,
    explanation: "Les comportements signaux : repérage anormal (photos de caméras, issues de secours, dispositifs de sécurité), questions précises sur les rondes, intrusion en zone non publique. La nationalité, la tenue ou la langue ne sont PAS des comportements signaux."
  },
  {
    theme: "UV7 · Risques terroristes",
    q: "Que signifie l'acronyme NRBC ?",
    options: [
      "Nouveau Règlement de Base Communautaire",
      "Nucléaire, Radiologique, Biologique, Chimique",
      "Norme de Référence Bâtiment Construit",
      "Niveau Réel de Bruit Continu"
    ],
    correct: 1,
    explanation: "NRBC désigne les risques Nucléaire, Radiologique, Biologique et Chimique. Ce sont les principales menaces non-conventionnelles couvertes par le plan Vigipirate."
  },
  {
    theme: "UV7 · Risques terroristes",
    q: "En cas d'attentat avec tireur actif (tuerie de masse), quelle est la PREMIÈRE action recommandée ?",
    options: [
      "Filmer la scène",
      "S'échapper si possible vers une issue sûre",
      "Confronter le tireur",
      "Appeler tous ses proches"
    ],
    correct: 1,
    explanation: "S'échapper est la première option si elle est possible et sûre. Sinon : se cacher (extinction lumière, silence, mode avion), puis alerter quand on est en lieu sûr."
  },
  {
    theme: "UV7 · Risques terroristes",
    q: "Lors d'une intrusion armée dans un site, l'APS doit :",
    options: [
      "S'interposer pour neutraliser l'agresseur",
      "Suivre les consignes de mise en sûreté du site et alerter les forces de l'ordre",
      "Reprendre l'arme à l'agresseur",
      "Négocier avec l'agresseur"
    ],
    correct: 1,
    explanation: "L'APS n'est pas formé au combat armé. Sa mission : déclencher les procédures de mise en sûreté (confinement, évacuation), alerter le 17, et guider les occupants vers les zones refuges."
  },
  {
    theme: "UV7 · Risques terroristes",
    q: "Le numéro européen d'urgence à composer en cas d'attaque terroriste est :",
    options: ["15", "17", "18", "112"],
    correct: 3,
    explanation: "Le 112 est le numéro d'urgence européen unique, accessible 24/7, gratuit, et qui dirige vers le service compétent (police, pompiers, SAMU). Le 17 (police) reste valable en France."
  },
  {
    theme: "UV7 · Risques terroristes",
    q: "Un véhicule stationné de manière anormale devant un ERP doit faire l'objet :",
    options: [
      "D'un PV de stationnement",
      "D'une procédure de levée de doute et d'un signalement aux forces de l'ordre",
      "D'un déplacement par l'agent",
      "D'aucune action particulière"
    ],
    correct: 1,
    explanation: "Un véhicule abandonné ou stationné anormalement (notamment près d'un ERP en niveau Vigipirate renforcé) peut constituer une menace. Procédure : périmètre de sécurité, signalement aux forces de l'ordre, ne pas s'approcher."
  },
  {
    theme: "UV7 · Risques terroristes",
    q: "L'APS qui détecte un comportement suspect doit en priorité :",
    options: [
      "Interpeller la personne",
      "Observer discrètement, transmettre à sa hiérarchie et aux forces de l'ordre",
      "Appeler ses collègues pour entourer la personne",
      "Demander immédiatement les papiers"
    ],
    correct: 1,
    explanation: "Le rôle de l'APS est l'observation et le signalement, pas l'interpellation préventive. Il transmet l'information par radio/téléphone à sa hiérarchie et au 17, sans alerter la personne suspecte."
  },

  // ========== UV 11 · GESTES ÉLÉMENTAIRES DE PREMIERS SECOURS ==========
  // 8 questions à l'examen — partiellement couverte dans le data.js
  {
    theme: "UV11 · Premiers secours",
    q: "Que signifie l'acronyme PAS dans le secourisme ?",
    options: [
      "Police, Ambulance, Secours",
      "Protéger, Alerter, Secourir",
      "Prévenir, Anticiper, Sécuriser",
      "Position, Action, Surveillance"
    ],
    correct: 1,
    explanation: "PAS = Protéger (la victime, les témoins, soi-même), Alerter (les secours), Secourir (les gestes de premier secours). C'est la conduite à tenir face à toute situation d'urgence."
  },
  {
    theme: "UV11 · Premiers secours",
    q: "Face à une personne inconsciente qui respire, quelle position adopter ?",
    options: [
      "Position assise",
      "Position Latérale de Sécurité (PLS)",
      "Position allongée sur le dos",
      "Position debout maintenue"
    ],
    correct: 1,
    explanation: "La PLS (Position Latérale de Sécurité) maintient les voies aériennes libres et évite que la victime inconsciente s'étouffe avec sa langue ou ses sécrétions."
  },
  {
    theme: "UV11 · Premiers secours",
    q: "Combien de compressions thoraciques par minute en cas d'arrêt cardiaque (massage cardiaque) ?",
    options: [
      "60 par minute",
      "80 par minute",
      "100 à 120 par minute",
      "150 par minute"
    ],
    correct: 2,
    explanation: "100 à 120 compressions par minute, sur une profondeur de 5 à 6 cm chez l'adulte. Le rythme correspond approximativement au tempo de la chanson 'Stayin' Alive'."
  },
  {
    theme: "UV11 · Premiers secours",
    q: "Que signifie DAE ?",
    options: [
      "Dispositif d'Alerte Électronique",
      "Défibrillateur Automatisé Externe",
      "Détecteur Automatique d'Évacuation",
      "Diagnostic Avancé d'Extincteur"
    ],
    correct: 1,
    explanation: "Le DAE (Défibrillateur Automatisé Externe) délivre un choc électrique en cas d'arrêt cardiaque. Son utilisation est autorisée à toute personne, même non formée. Il est obligatoire dans tous les ERP de catégorie 1 à 3."
  },
  {
    theme: "UV11 · Premiers secours",
    q: "Face à une hémorragie externe, le geste prioritaire est :",
    options: [
      "Faire un garrot immédiatement",
      "Appliquer une compression manuelle directe sur la plaie",
      "Soulever le membre blessé",
      "Donner à boire à la victime"
    ],
    correct: 1,
    explanation: "Compression manuelle directe en premier (avec un tissu propre si possible). Le garrot n'est posé qu'en dernier recours, quand la compression est impossible ou inefficace, et près de la plaie côté cœur."
  },
  {
    theme: "UV11 · Premiers secours",
    q: "Une victime se plaint de douleur thoracique avec essoufflement. L'APS doit :",
    options: [
      "Lui donner de l'aspirine",
      "L'allonger et appeler le 15 (SAMU)",
      "L'asseoir, la rassurer, l'empêcher de bouger, alerter le 15",
      "La faire marcher pour vérifier"
    ],
    correct: 2,
    explanation: "Suspicion d'infarctus : position assise/demi-assise (jamais allongée), au repos absolu, rassurer, alerter le 15. L'allonger peut aggraver la détresse respiratoire."
  },
  {
    theme: "UV11 · Premiers secours",
    q: "Quel numéro composer pour le SAMU ?",
    options: ["15", "17", "18", "112"],
    correct: 0,
    explanation: "Le 15 = SAMU (urgences médicales). Le 17 = Police, le 18 = Pompiers, le 112 = numéro d'urgence européen."
  },
  {
    theme: "UV11 · Premiers secours",
    q: "Face à une brûlure thermique, le premier geste est :",
    options: [
      "Appliquer une pommade",
      "Refroidir à l'eau tempérée (15-25°C) pendant 15 à 20 minutes",
      "Percer les cloques",
      "Appliquer du beurre ou de la glace"
    ],
    correct: 1,
    explanation: "Règle des 3×15 : eau à 15°C, pendant 15 minutes, à 15 cm de la brûlure. Ne JAMAIS appliquer de glace (gelures), de beurre, de pommade ou percer les cloques."
  },

  // ========== TYPES ERP (J à Y) · 12 questions ==========
  // Section critique pour l'UV 5 (incendie) et l'UV 8 (environnement professionnel)
  // Souvent piège à l'examen : confusion type/catégorie, lettres inexistantes
  {
    theme: "ERP · Types & Catégories",
    q: "Combien y a-t-il de TYPES d'ERP différents (classés par lettre) ?",
    options: ["10", "12", "14", "16"],
    correct: 2,
    explanation: "14 types : J, L, M, N, O, P, R, S, T, U, V, W, X, Y. Les autres lettres (A, B, C, D, E, F, G, H, I, K, Q, Z) n'existent PAS comme types ERP. À ne pas confondre avec les CATÉGORIES (1 à 5, par effectif)."
  },
  {
    theme: "ERP · Types & Catégories",
    q: "Un hôtel est un ERP de type :",
    options: ["H", "J", "O", "U"],
    correct: 2,
    explanation: "Type O = Hôtels et pensions de famille. Piège classique : la lettre H n'existe PAS comme type ERP. Le type O fait partie des 4 types avec LOCAUX À SOMMEIL (avec J, R, U) qui imposent un SSI catégorie A."
  },
  {
    theme: "ERP · Types & Catégories",
    q: "Un magasin de vente ou un centre commercial est un ERP de type :",
    options: ["M", "C", "V", "S"],
    correct: 0,
    explanation: "Type M = Magasins de vente et centres commerciaux. Mnémo : M comme Magasin. À ne pas confondre avec V (Vente ? Non : Culte) ou S (Stock ? Non : bibliothèques)."
  },
  {
    theme: "ERP · Types & Catégories",
    q: "Un hôpital ou une clinique est un ERP de type :",
    options: ["S", "H", "U", "J"],
    correct: 2,
    explanation: "Type U = Établissements de soins (hôpitaux, cliniques). Piège : H n'existe pas comme type. Le type U fait partie des LOCAUX À SOMMEIL (SSI cat. A obligatoire). Le type J concerne les EHPAD/maisons de retraite (sommeil aussi mais public différent)."
  },
  {
    theme: "ERP · Types & Catégories",
    q: "Une école ou un établissement d'enseignement est un ERP de type :",
    options: ["E", "R", "S", "J"],
    correct: 1,
    explanation: "Type R = établissements d'enseignement (écoles, collèges, lycées, universités) et colonies de vacances. Le type R peut être AVEC ou SANS locaux à sommeil (internat = sommeil)."
  },
  {
    theme: "ERP · Types & Catégories",
    q: "Une salle de spectacle, de conférence ou de cinéma est un ERP de type :",
    options: ["C", "L", "M", "S"],
    correct: 1,
    explanation: "Type L = salles d'auditions, de conférences, de spectacles, multimédia, cinémas. Mnémo : L comme 'Live' (spectacle vivant)."
  },
  {
    theme: "ERP · Types & Catégories",
    q: "Un restaurant ou un débit de boissons est un ERP de type :",
    options: ["R", "N", "M", "T"],
    correct: 1,
    explanation: "Type N = restaurants et débits de boissons. Piège : R n'est PAS le restaurant (R = enseignement). Mnémo : N comme 'restauratioN'."
  },
  {
    theme: "ERP · Types & Catégories",
    q: "Une banque, une administration ou un immeuble de bureaux est un ERP de type :",
    options: ["B", "A", "W", "M"],
    correct: 2,
    explanation: "Type W = administrations, banques, bureaux. Les lettres A et B n'existent PAS comme types ERP (elles existent comme catégories SSI : SSI catégorie A, B...)."
  },
  {
    theme: "ERP · Types & Catégories",
    q: "Un gymnase ou une piscine couverte est un ERP de type :",
    options: ["S", "X", "P", "G"],
    correct: 1,
    explanation: "Type X = établissements sportifs couverts (gymnases, piscines, salles de sport). Mnémo : X comme les 'Xtraordinaires' performances sportives. Les lettres G et P existent ailleurs : G n'existe pas comme type, P = salles de danse/jeux."
  },
  {
    theme: "ERP · Types & Catégories",
    q: "Un musée est un ERP de type :",
    options: ["M", "T", "Y", "S"],
    correct: 2,
    explanation: "Type Y = Musées. Piège : M = Magasins (pas Musées), T = expositions temporaires (salons/foires, pas musées permanents). Mnémo : Y comme... la dernière lettre, pour les œuvres immortelles 😉"
  },
  {
    theme: "ERP · Types & Catégories",
    q: "Quels TYPES d'ERP imposent obligatoirement un SSI de catégorie A ?",
    options: [
      "Tous les types",
      "Les types avec locaux à sommeil : J, O, R, U",
      "Uniquement les magasins (type M)",
      "Seulement les IGH"
    ],
    correct: 1,
    explanation: "Les ERP avec LOCAUX À SOMMEIL (J = personnes âgées/handicapées, O = hôtels, R = colonies/internats, U = soins) imposent un SSI catégorie A (le plus complet, avec DAI = Détecteurs Automatiques d'Incendie). Les IGH aussi, mais ce ne sont pas des ERP au sens strict."
  },
  {
    theme: "ERP · Types & Catégories",
    q: "Un ERP qui peut accueillir 850 personnes est de quelle CATÉGORIE ?",
    options: [
      "1re catégorie",
      "2e catégorie",
      "3e catégorie",
      "4e catégorie"
    ],
    correct: 1,
    explanation: "2e catégorie = de 701 à 1500 personnes. Rappel des seuils : 1re cat. > 1500 / 2e cat. 701-1500 / 3e cat. 301-700 / 4e cat. ≤ 300 (sauf 5e) / 5e cat. petits établissements. À ne pas confondre avec le TYPE (lettre, activité)."
  },

  // ========== ALPHABET OTAN (phonétique militaire) · 8 questions ==========
  // Communication radio/téléphone — classique de l'examen
  {
    theme: "Alphabet OTAN",
    q: "En alphabet OTAN, la lettre 'B' se dit :",
    options: ["Bernard", "Bravo", "Beta", "Bingo"],
    correct: 1,
    explanation: "B = BRAVO. À ne pas confondre avec les prénoms (Bernard, etc.) qui ne sont PAS l'alphabet OTAN officiel. Mnémo : 'Bravo' comme l'applaudissement."
  },
  {
    theme: "Alphabet OTAN",
    q: "En alphabet OTAN, la lettre 'K' se dit :",
    options: ["Kevin", "Kilo", "Karl", "King"],
    correct: 1,
    explanation: "K = KILO. Comme l'unité de poids. Piège classique : on confond souvent avec un prénom (Kevin) ou une autre lettre (King → c'est pour le roi aux échecs, pas l'OTAN)."
  },
  {
    theme: "Alphabet OTAN",
    q: "En alphabet OTAN, la lettre 'Q' se dit :",
    options: ["Quartier", "Québec", "Quentin", "Qatar"],
    correct: 1,
    explanation: "Q = QUEBEC (prononcé 'kwé-bek'). C'est l'une des 4 villes/régions de l'alphabet OTAN avec Lima (L), Oscar... non Oscar c'est un prénom. Bref, Q = Quebec."
  },
  {
    theme: "Alphabet OTAN",
    q: "En alphabet OTAN, la lettre 'V' se dit :",
    options: ["Victor", "Vincent", "Vienna", "Volt"],
    correct: 0,
    explanation: "V = VICTOR. À ne pas confondre avec Vincent (prénom courant français mais pas OTAN). Mnémo : Victor comme 'victoire'."
  },
  {
    theme: "Alphabet OTAN",
    q: "Comment épelle-t-on 'APS' en alphabet OTAN ?",
    options: [
      "Alpha · Papa · Sierra",
      "Alpha · Paris · Sébastien",
      "Alex · Pierre · Sami",
      "Alpha · Pierre · Sigma"
    ],
    correct: 0,
    explanation: "APS = ALPHA · PAPA · SIERRA. C'est typiquement ce qu'on dit au téléphone : 'agent APS, je répète : Alpha-Papa-Sierra'. Connaître les lettres clés de ton métier est essentiel."
  },
  {
    theme: "Alphabet OTAN",
    q: "Comment épelle-t-on 'CNAPS' en alphabet OTAN ?",
    options: [
      "Charlie · November · Alpha · Papa · Sierra",
      "Charles · Nathan · Alex · Pierre · Sami",
      "Charlie · Noël · Alpha · Paris · Sierra",
      "Charlie · November · Alex · Pierre · Sébastien"
    ],
    correct: 0,
    explanation: "CNAPS = CHARLIE · NOVEMBER · ALPHA · PAPA · SIERRA. Toutes les autres options mélangent l'OTAN avec des prénoms français = faux."
  },
  {
    theme: "Alphabet OTAN",
    q: "Quel mot OTAN désigne la lettre 'X' ?",
    options: ["Xylophone", "X-Ray", "Xavier", "Xenon"],
    correct: 1,
    explanation: "X = X-RAY (rayon X en anglais). Question piège classique de l'examen, on te propose souvent Xavier ou Xenon comme distracteurs. C'est X-Ray, toujours."
  },
  {
    theme: "Alphabet OTAN",
    q: "Le but de l'alphabet OTAN en communication radio est :",
    options: [
      "Crypter les messages pour qu'ils soient secrets",
      "Épeler sans ambiguïté un mot, un nom ou une plaque",
      "Parler plus vite",
      "Communiquer uniquement avec l'armée"
    ],
    correct: 1,
    explanation: "L'alphabet phonétique sert à épeler SANS ambiguïté — au téléphone ou en radio, on confond facilement B/D/P, M/N, F/S. Dire 'Bravo' au lieu de 'B' supprime toute confusion. Utilisé partout : aviation, marine, sécurité, police, secours."
  }

];

// ============================================================
// 2. EXAMENS BLANCS — Reconstitution exacte des PDFs Quizzbox
// ============================================================
//
// Chaque examen reproduit l'ordre, les options et les bonnes réponses
// telles qu'elles apparaissent dans les PDFs LLL, HGFD, SQ.
// Mode chronométré : 25 minutes pour 20 questions (conditions réelles).

const examensBlancs = [

  // ============================================================
  // EXAMEN BLANC #1 · LLL (PDF REVISION_QCM_APS) — 20 Q
  // ============================================================
  {
    id: "exam-lll",
    title: "Examen Blanc · Annales LLL",
    subtitle: "20 questions · 25 min · Conditions réelles",
    description: "Reconstitution fidèle de l'examen blanc Quizzbox 'LLL'. Note attendue : 12/20 minimum.",
    questions: [
      {
        theme: "QCU A3S BIS",
        q: "Pouvez-vous fouiller une personne suspectée de vol ?",
        options: [
          "Non c'est un acte illégal, un abus de pouvoir",
          "Oui, sur ordre de mon Directeur",
          "Oui c'est mon devoir de citoyen",
          "Seulement en flagrant délit (art 53 du CPP)",
          "Aucune des réponses précédentes"
        ],
        correct: 4,
        explanation: "L'APS n'a JAMAIS le droit de fouiller. La fouille est un acte de police judiciaire réservé à un OPJ. L'APS peut seulement palper avec consentement (art. L613-2 CSI). Réponse : aucune des propositions n'est correcte."
      },
      {
        theme: "QCU A3S BIS",
        q: "En alphabet phonétique EXAMEN se dit :",
        options: [
          "Echo, X-Ray, Alpha, Mike, Exemple, November",
          "Echo, X-Ray, Alpha, Mike, Echo, Noël",
          "Echo, X-Ray, Alpha, Mike, Echo, November",
          "Echo, X-Ray, Alain, Michel, Echo, November",
          "Aucune des réponses précédentes"
        ],
        correct: 2,
        explanation: "Alphabet OTAN : E=Echo, X=X-Ray, A=Alpha, M=Mike, E=Echo, N=November."
      },
      {
        theme: "QCU A3S BIS",
        q: "But du contrôle d'accès :",
        options: [
          "Filtrer les entrées sur un site",
          "Contrôler l'heure d'embauche des salariés",
          "Faire des statistiques sur les visites du site",
          "Occuper les APS qui sont en poste",
          "Informer les visiteurs qui se présentent"
        ],
        correct: 0,
        explanation: "Le contrôle d'accès filtre les entrées pour empêcher l'intrusion de personnes non autorisées."
      },
      {
        theme: "QCU A3S BIS",
        q: "Le rapport d'anomalie a pour but de :",
        options: [
          "Signaler des dysfonctionnements constatés lors d'une ronde",
          "Rendre compte d'une vacation en totalité",
          "Signaler un fait grave survenu lors d'une vacation",
          "Occuper les APS durant leur vacation",
          "Aucune des réponses précédentes"
        ],
        correct: 0,
        explanation: "Le rapport d'anomalie signale les dysfonctionnements constatés (ex: extincteur manquant, issue de secours bloquée). Le rapport d'incident concerne les faits graves."
      },
      {
        theme: "QCU A3S BIS",
        q: "Qu'est-ce que le droit de retrait du salarié ?",
        options: [
          "Demander une avance sur salaire à son patron",
          "Retirer de l'argent sur le compte de la société de sécurité",
          "Quitter son lieu de travail en cas de danger grave et imminent",
          "Le droit de retirer sa parole donnée"
        ],
        correct: 2,
        explanation: "Article L4131-1 du Code du travail : le salarié peut quitter son poste face à un danger grave et imminent, sans subir de sanction, à condition de prévenir l'employeur."
      },
      {
        theme: "QCU A3S BIS",
        q: "Avez-vous le droit d'interdire l'accès du magasin à une personne qui a déjà volé sur le site ?",
        options: [
          "Oui, sur ordre de la direction du magasin",
          "Non, c'est contraire au Code du commerce",
          "Non, car ce sont uniquement les forces de l'ordre qui le peuvent",
          "Oui, car c'est un voleur",
          "Aucunes des propositions"
        ],
        correct: 0,
        explanation: "L'établissement privé peut interdire l'accès à une personne identifiée (sur la base d'une décision de la direction). L'APS applique cette consigne."
      },
      {
        theme: "QCU A3S BIS",
        q: "L'emploi des chiens est soumis à des obligations :",
        options: [
          "Le chien doit être confirmé par un club canin",
          "L'Agent de sécurité doit être propriétaire du chien",
          "Ils ne peuvent travailler que la nuit",
          "Seuls les chiens de 1° catégorie peuvent être utilisés"
        ],
        correct: 1,
        explanation: "L'agent cynophile doit être propriétaire de son chien (ou en avoir la garde permanente), être titulaire de la carte pro mention 'cynophile', et le chien doit être assuré, vacciné, identifié."
      },
      {
        theme: "QCU A3S CINQ",
        q: "Quel article prévoit le flagrant délit ?",
        options: [
          "L'article 803 du code de procédure pénale",
          "L'article 73 du code pénal",
          "L'article 53 du code de procédure pénale",
          "L'article 73 du code de procédure pénale"
        ],
        correct: 2,
        explanation: "Article 53 CPP = flagrant délit (définition). Article 73 CPP = appréhension par toute personne en cas de flagrant crime/délit."
      },
      {
        theme: "QCU A3S CINQ",
        q: "Qui met en place un POI ?",
        options: [
          "L'exploitant du site",
          "Le ministre de l'intérieur",
          "Le préfet",
          "Le Maire",
          "Le directeur des opérations de secours",
          "Aucune des réponses précédentes"
        ],
        correct: 0,
        explanation: "Le POI (Plan d'Opération Interne) est mis en place par l'EXPLOITANT du site (en interne). Le PPI (Plan Particulier d'Intervention) lui est mis en place par le PRÉFET."
      },
      {
        theme: "QCU A3S CINQ",
        q: "Le ou les risques majeurs auxquels nous pouvons être exposés sont :",
        options: [
          "Les risques naturels",
          "Les risques technologiques",
          "Les risques de transports collectifs",
          "Toutes les réponses sont bonnes"
        ],
        correct: 3,
        explanation: "Les 3 grandes catégories de risques majeurs : naturels (inondation, séisme, tempête), technologiques (industriel, nucléaire), et liés aux transports collectifs."
      },
      {
        theme: "QCU A3S CINQ",
        q: "Vous êtes en arrière caisse dans un magasin. Le directeur vous demande d'aller ranger des caddies. Que faites-vous ?",
        options: [
          "Le client est roi, vous vous exécutez",
          "Je rends compte à mon chef d'équipe pour qu'il me donne l'accord de quitter mon poste",
          "J'informe le client que cela peut être considéré comme un délit de marchandage",
          "Je lui dis que je ne suis pas payé pour cela"
        ],
        correct: 2,
        explanation: "Demander à un APS d'effectuer des tâches hors de ses missions de sécurité (ranger des caddies) constitue un délit de marchandage (art. L8231-1 du Code du travail)."
      },
      {
        theme: "QCU A3S CINQ",
        q: "La notion de danger est définie dans le code du travail comme :",
        options: [
          "Ce qui fait mal",
          "L'accident en lui-même",
          "L'occurrence du risque",
          "Aucune de ces définitions"
        ],
        correct: 2,
        explanation: "Le danger est défini comme l'occurrence (survenance) du risque. Le risque est la probabilité, le danger est la matérialisation."
      },
      {
        theme: "QCU A3S QUART",
        q: "En cas de contrôle de salariés avec enregistrement de données personnelles, quel organisme doit être informé ?",
        options: [
          "Le CNAPS",
          "La DIRRECTE",
          "La CNIL",
          "Le CSU"
        ],
        correct: 2,
        explanation: "La CNIL (Commission Nationale de l'Informatique et des Libertés) doit être informée pour tout traitement de données personnelles (vidéosurveillance avec enregistrement, contrôle d'accès biométrique, etc.)."
      },
      {
        theme: "QCU A3S QUART",
        q: "Dans le SSI, l'UCMC se trouve au niveau :",
        options: [
          "Du SDI",
          "De l'UAE",
          "Du CMSI",
          "Dans aucun de ces modules"
        ],
        correct: 2,
        explanation: "L'UCMC (Unité de Commande Manuelle Centralisée) est un composant du CMSI (Centralisateur de Mise en Sécurité Incendie). Le SDI = Système de Détection Incendie, l'UAE = Unité d'Aide à l'Exploitation."
      },
      {
        theme: "QCU A3S QUART",
        q: "Pouvez-vous appréhender un individu en surface de vente ?",
        options: [
          "Non, sauf si l'infraction n'a aucun lien avec la vente",
          "Oui, peut-être",
          "Aucune des autres réponses",
          "Non dans tous les cas",
          "Oui dans tous les cas"
        ],
        correct: 0,
        explanation: "En surface de vente, le délit de vol ne peut être constitué qu'après franchissement des caisses (avant, le client peut encore changer d'avis). Sauf si l'infraction n'a aucun lien avec la vente (ex: agression, dégradation), où l'appréhension est possible."
      },
      {
        theme: "QCU A3S QUART",
        q: "Agent de sécurité dans une grande surface, vous appréhendez un mineur de 16 ans qui vient de dérober un DVD. Que faites-vous ?",
        options: [
          "J'appelle les forces de l'ordre",
          "Je lui fais signer une reconnaissance de vol",
          "Je le fouille pour récupérer l'objet volé",
          "Je lui donne un sérieux avertissement et je le laisse partir",
          "Aucune des autres réponses"
        ],
        correct: 0,
        explanation: "L'appréhension d'un mineur suit la même procédure : appel immédiat à un OPJ. Pas de fouille, pas de reconnaissance de vol forcée, pas de relâchement."
      },
      {
        theme: "QCU A3S QUART",
        q: "Pouvez-vous appréhender un individu qui mange un produit du magasin et ne s'acquitte pas du montant lors de son passage en caisse ?",
        options: [
          "Non, c'est grave, je fais la même chose pendant mon service",
          "Non ce n'est pas grave, le magasin a des assurances pour cela",
          "Oui c'est un délit",
          "Non, mais je dois en rendre compte à ma hiérarchie",
          "Aucune des autres réponses"
        ],
        correct: 2,
        explanation: "Manger un produit puis quitter le magasin sans payer constitue un vol (article 311-1 du Code pénal). Le passage en caisse sans le déclarer = constatation du délit."
      },
      {
        theme: "QCU A3S QUART",
        q: "Vous avez appréhendé un individu, quelle obligation devez-vous impérativement respecter ?",
        options: [
          "Faire prévenir un Officier de Police Judiciaire",
          "Faire prévenir notre société de sécurité",
          "Faire prévenir le responsable de l'établissement",
          "Aucune des autres réponses",
          "Faire prévenir un agent de police judiciaire"
        ],
        correct: 0,
        explanation: "Article 73 CPP : la personne appréhendée doit être conduite SANS DÉLAI devant un Officier de Police Judiciaire (OPJ), pas un simple agent de police judiciaire (APJ)."
      },
      {
        theme: "QCU A3S TER",
        q: "Dans l'attente des services publics compétents, à qui incombe la responsabilité d'une personne appréhendée ?",
        options: [
          "Au service de Police",
          "Au service de Gendarmerie",
          "Au responsable du magasin",
          "Aucune des autres réponses",
          "À l'agent qui a fait l'appréhension"
        ],
        correct: 4,
        explanation: "L'agent qui a appréhendé reste responsable de la personne jusqu'à l'arrivée de l'OPJ. Il doit assurer son intégrité physique et morale (pas de violence, pas d'humiliation)."
      },
      {
        theme: "QCU A3S TER",
        q: "Quelle est la première chose à faire lorsqu'il y a une alarme SSI qui se déclenche ?",
        options: [
          "Arrêter le signal sonore",
          "Effectuer une levée de doute",
          "Localiser le sinistre",
          "Effectuer un compte rendu"
        ],
        correct: 0,
        explanation: "1) Arrêter le signal sonore (pour pouvoir communiquer), 2) Localiser le sinistre sur le CMSI, 3) Effectuer la levée de doute, 4) Alerter si confirmé."
      }
    ]
  },

  // ============================================================
  // EXAMEN BLANC #2 · HGFD (PDF REVISION_QCM_APS_2) — 20 Q
  // ============================================================
  {
    id: "exam-hgfd",
    title: "Examen Blanc · Annales HGFD",
    subtitle: "20 questions · 25 min · Conditions réelles",
    description: "Reconstitution fidèle de l'examen blanc Quizzbox 'HGFD'. Tendance : SSI, appréhension, palpation.",
    questions: [
      {
        theme: "QCU A3S BIS",
        q: "Le contrôle d'accès a pour but :",
        options: [
          "D'interdire l'entrée sur un site",
          "De ne faire entrer que le personnel du site",
          "De contrôler toutes les entrées et sorties",
          "D'accueillir tout le monde"
        ],
        correct: 2,
        explanation: "Le contrôle d'accès vise à filtrer ET enregistrer toutes les entrées/sorties (qui, quand, où), pas seulement à filtrer."
      },
      {
        theme: "QCU A3S BIS",
        q: "La main courante peut être :",
        options: [
          "Orale",
          "Enregistrée",
          "Virtuelle",
          "Manuscrite ou informatisée"
        ],
        correct: 3,
        explanation: "La main courante est un document écrit, manuscrite (registre papier) ou informatisée (logiciel). Elle ne peut pas être orale."
      },
      {
        theme: "QCU A3S BIS",
        q: "Dans une grande surface, vous apercevez un individu dérobant le sac à main d'une cliente, que faites-vous ?",
        options: [
          "Vous ne pouvez rien faire c'est le travail de la police",
          "Je peux appréhender l'individu et le remettre à l'OPJ",
          "Vous ne faites rien, cela ne concerne pas le magasin",
          "Vous intervenez, rendez le sac à la cliente et laissez libre le voleur",
          "Ça ne vous regarde pas"
        ],
        correct: 1,
        explanation: "Le vol avec violence (vol à l'arraché) est un crime ou délit en flagrant délit. Article 73 CPP : tout citoyen peut appréhender et remettre à l'OPJ."
      },
      {
        theme: "QCU A3S BIS",
        q: "Lors d'un appel téléphonique entrant, le nombre de sonneries maximum avant de décrocher est :",
        options: [
          "Peu importe, il y a une musique d'attente",
          "5 sonneries maximum",
          "3 sonneries maximum",
          "Peu importe car le répondeur prend le relais",
          "Aucune des réponses précédentes"
        ],
        correct: 2,
        explanation: "3 sonneries maximum est la règle professionnelle standard pour un PC sécurité, garantissant la réactivité."
      },
      {
        theme: "QCU A3S BIS",
        q: "Sur la main courante, huit heures du soir s'écrit :",
        options: ["08h00", "20h00", "8h00", "20h", "Aucune mention ne convient"],
        correct: 1,
        explanation: "Format 24h obligatoire sur la main courante : huit heures du soir = 20h00. Toujours en 4 chiffres pour la cohérence."
      },
      {
        theme: "QCU A3S BIS",
        q: "Vous décrochez le téléphone au poste de sécurité de la société 'Trémazec' et vous êtes salarié chez 'Sécuritruc', présentez-vous :",
        options: [
          "Bonjour, PC 'Sécuritruc' Agent Machin",
          "Société Trémazec, bonjour, que puis-je pour vous",
          "Salut, c'est l'APS Machin de 'Sécuritruc'",
          "Bonjour, société 'Trémazec', APS Machin, je vous écoute"
        ],
        correct: 1,
        explanation: "Au téléphone, on se présente AU NOM DU CLIENT (Trémazec) et non de notre employeur (Sécuritruc). L'agent représente le site sur lequel il travaille."
      },
      {
        theme: "QCU A3S BIS",
        q: "Où l'appréhension doit-elle se faire dans une grande surface ?",
        options: [
          "Avant le passage en caisse du client (pour ne pas le manquer)",
          "À l'extérieur du magasin (pour éviter les problèmes)",
          "Dès le passage en caisse (dans la galerie marchande)",
          "Dans le sas d'accès au magasin (par sécurité)"
        ],
        correct: 2,
        explanation: "Le vol n'est constitué qu'APRÈS le franchissement de la ligne de caisse sans paiement. Avant, le client peut encore se présenter à la caisse. L'appréhension se fait donc dès le passage en caisse, dans la galerie marchande."
      },
      {
        theme: "QCU A3S CINQ",
        q: "Qui met en place un POI ?",
        options: [
          "L'exploitant du site",
          "Le ministre de l'intérieur",
          "Le préfet",
          "Le Maire",
          "Le directeur des opérations de secours",
          "Aucune des réponses précédentes"
        ],
        correct: 0,
        explanation: "Le POI (Plan d'Opération Interne) est mis en place par l'exploitant du site. Le PPI est mis en place par le préfet."
      },
      {
        theme: "QCU A3S CINQ",
        q: "La CLAC est implantée à un niveau :",
        options: ["International", "National", "Régional", "Départemental"],
        correct: 2,
        explanation: "La CLAC (Commission Locale d'Action Concertée) est une instance de niveau RÉGIONAL du CNAPS, qui examine les demandes de carte professionnelle et les sanctions disciplinaires."
      },
      {
        theme: "QCU A3S CINQ",
        q: "Vous avez interpellé une personne dans le cadre de l'article 73 du CPP. L'OPJ ne peut pas se déplacer immédiatement. Que faites-vous ?",
        options: [
          "Je prends l'identité de la personne et je la laisse partir",
          "Je garde cette personne sous ma surveillance jusqu'à l'arrivée de l'OPJ",
          "Je ne peux pas garder cette personne car c'est une arrestation arbitraire",
          "Je le sermonne et je le laisse repartir",
          "Je ne sais pas"
        ],
        correct: 1,
        explanation: "L'article 73 oblige à conduire la personne 'sans délai' à l'OPJ. Si l'OPJ ne peut pas venir tout de suite, on garde la personne sous surveillance dans des conditions respectueuses (pas de menottes attaches contre un radiateur, pas de violence)."
      },
      {
        theme: "QCU A3S CINQ",
        q: "Qu'est-ce qu'une ronde aléatoire ?",
        options: [
          "Une ronde au cours de laquelle il faudra suivre un itinéraire précis sans utiliser un contrôleur de ronde",
          "Une ronde au cours de laquelle il faudra suivre un itinéraire de ronde pointé",
          "Une ronde de surveillance sans itinéraire déterminé",
          "Elle n'existe pas"
        ],
        correct: 2,
        explanation: "La ronde aléatoire n'a pas d'itinéraire ni d'horaire déterminés, ce qui empêche les malveillants de prévoir le passage de l'agent. Elle s'oppose à la ronde pointée (avec contrôleur)."
      },
      {
        theme: "QCU A3S CINQ",
        q: "Quel est la norme d'étiquetage d'informations obligatoires sur les emballages de produits dangereux ?",
        options: ["IP2X", "IP3X", "SGH", "Aucune obligation n'existe"],
        correct: 2,
        explanation: "Le SGH (Système Général Harmonisé) est la norme internationale d'étiquetage des produits chimiques dangereux. Les normes IPxX concernent l'étanchéité électrique."
      },
      {
        theme: "QCU A3S CINQ",
        q: "L'unité de signalisation sur votre CMSI présente un voyant rouge clignotant que devez-vous faire immédiatement et dans tous les cas ?",
        options: [
          "Déclencher l'alarme générale",
          "Informer dès son arrivée le commandant des opérations de secours",
          "Appeler vos agents en ronde pour qu'ils regagnent le PC immédiatement",
          "Attendre les consignes de votre chef de service",
          "Utiliser la fonction de l'UCMC et télécommander le DAS, à distance, afin de le mettre en position de sécurité"
        ],
        correct: 4,
        explanation: "Voyant rouge clignotant sur CMSI = position d'attente d'un DAS (Dispositif Actionné de Sécurité). L'agent doit immédiatement télécommander le DAS via l'UCMC pour le mettre en sécurité."
      },
      {
        theme: "QCU A3S CINQ",
        q: "Quelle est la distance d'attaque d'un extincteur CO2 ?",
        options: ["-1 m", "1,5 m", "2 à 3 m", "3 à 4 mètres", "Aucune des réponses précédentes"],
        correct: 0,
        explanation: "Distance d'attaque CO2 = moins d'1 mètre (1 m). Le CO2 a un faible débit, on doit s'approcher du foyer. À comparer avec : eau pulvérisée 3-4 m, poudre 2-3 m."
      },
      {
        theme: "QCU A3S TER",
        q: "Lors d'une ronde, vous notez l'absence d'un extincteur près d'un local électrique, vous le remplacez par :",
        options: [
          "Un extincteur à CO2",
          "Un extincteur à eau pulvérisée",
          "Un extincteur à poudre",
          "Un extincteur à eau pulvérisée + additif"
        ],
        correct: 0,
        explanation: "Sur feu d'origine électrique (classe E supprimée, mais matériels sous tension), seul le CO2 est adapté : il n'est pas conducteur et ne laisse pas de résidus sur les équipements."
      },
      {
        theme: "QCU A3S TER",
        q: "Le feu se propage par :",
        options: [
          "Convection, rayonnement, projection, écoulement",
          "Convection, rayonnement, conduction, projection",
          "Convection, conduction, rayonnement, explosion",
          "Aucune des réponses précédentes"
        ],
        correct: 1,
        explanation: "Les 4 modes de propagation : CONVECTION (fumées chaudes qui montent), RAYONNEMENT (chaleur radiative), CONDUCTION (matériaux qui transmettent la chaleur), PROJECTION (gouttes/escarbilles)."
      },
      {
        theme: "QCU A3S",
        q: "Quels sont les éléments indispensables à la combustion ?",
        options: [
          "Une propagation, un comburant, un combustible",
          "Des molécules, des radicaux libres et un tétraèdre",
          "Un combustible, un comburant, une énergie d'activation",
          "Aucune des réponses précédentes"
        ],
        correct: 2,
        explanation: "Triangle du feu : 3 éléments INDISPENSABLES = combustible (matière qui brûle) + comburant (oxygène) + énergie d'activation (chaleur, étincelle)."
      },
      {
        theme: "QCU A3S",
        q: "Un élément de construction ayant une isolation thermique est dit :",
        options: ["Pare flamme ou EI", "Coupe feu ou REI", "Coupe flamme ou RE", "Pare feu ou SF", "Aucune des réponses précédentes"],
        correct: 1,
        explanation: "Classement Euroclasse : R = stabilité (résistance mécanique), E = étanchéité aux flammes/gaz, I = isolation thermique. Un élément REI = coupe-feu (les 3 critères). Un EI = pare-flammes (sans stabilité)."
      },
      {
        theme: "QCU A3S",
        q: "Pour effectuer une palpation sur une personne l'agent doit :",
        options: [
          "Avoir un an d'ancienneté",
          "Porter des gants",
          "Être accompagné d'un autre agent",
          "Avoir suivi une formation à cette tâche",
          "Aucune des réponses précédentes"
        ],
        correct: 3,
        explanation: "L'APS doit être titulaire de la mention 'palpation' sur sa carte pro, ce qui implique une formation spécifique. Le consentement écrit ou verbal de la personne palpée est obligatoire (sauf circonstances particulières d'événement)."
      },
      {
        theme: "QCU A3S",
        q: "Une arme par 'destination' est :",
        options: [
          "Tout objet susceptible de présenter un danger s'il est détourné de son utilisation",
          "Tout objet susceptible de présenter un danger s'il ressemble à une arme",
          "Tout objet pouvant être lancé",
          "Une arme envoyée par la poste"
        ],
        correct: 0,
        explanation: "Arme par destination = objet dont l'usage normal n'est pas une arme, mais qui en devient une par utilisation détournée (couteau de cuisine, batte de baseball, tournevis, bouteille cassée...)."
      }
    ]
  },

  // ============================================================
  // EXAMEN BLANC #3 · SQ (PDF REVISION_QCM_APS_4) — 20 Q
  // ============================================================
  {
    id: "exam-sq",
    title: "Examen Blanc · Annales SQ",
    subtitle: "20 questions · 25 min · Conditions réelles",
    description: "Reconstitution fidèle de l'examen blanc Quizzbox 'SQ'. Focus : appréhension, conflit, vidéosurveillance.",
    questions: [
      {
        theme: "QCU A3S BIS",
        q: "But du contrôle d'accès :",
        options: [
          "Filtrer les entrées sur un site",
          "Contrôler l'heure d'embauche des salariés",
          "Faire des statistiques sur les visites du site",
          "Occuper les APS qui sont en poste",
          "Informer les visiteurs qui se présentent"
        ],
        correct: 0,
        explanation: "Le contrôle d'accès filtre les entrées pour empêcher l'intrusion de personnes non autorisées."
      },
      {
        theme: "QCU A3S BIS",
        q: "Lors du signalement d'une personne il est important de préciser :",
        options: [
          "Son sexe, sa taille, sa corpulence",
          "Sa nationalité",
          "Son état de santé",
          "La marque de ses chaussures",
          "Sa religion",
          "Son eau de toilette"
        ],
        correct: 0,
        explanation: "Le signalement objectif et factuel : sexe, taille, corpulence, vêtements, signes distinctifs (cicatrice, tatouage). PAS de nationalité ni de religion (discriminatoire)."
      },
      {
        theme: "QCU A3S BIS",
        q: "Des cartons sont placés devant une issue de secours, que faites-vous ?",
        options: [
          "Vous les déplacez et vous signalez l'anomalie sur la Main Courante",
          "Vous les jetez et vous signalez l'anomalie sur la Main Courante",
          "Vous demanderez plus tard à l'entretien de le faire",
          "Vous les laissez sur place et le marquez sur la Main Courante"
        ],
        correct: 0,
        explanation: "Une issue de secours OBSTRUÉE est une infraction grave. Action immédiate : libérer l'issue, puis tracer sur la main courante pour informer la hiérarchie."
      },
      {
        theme: "QCU A3S CINQ",
        q: "Un conflit c'est :",
        options: [
          "Une situation émotionnelle qui n'aboutit pas",
          "Une situation de blocage entre au moins deux personnes",
          "Une situation liée à la conjoncture",
          "Aucune des réponses précédentes"
        ],
        correct: 1,
        explanation: "Définition standard : un conflit oppose au moins deux parties dont les intérêts, valeurs ou besoins sont incompatibles. Il y a blocage."
      },
      {
        theme: "QCU A3S CINQ",
        q: "Parmi les propositions suivantes, lesquelles correspondent à une activité dite 'évènementiel' ?",
        options: [
          "Industrie chimique, salon de l'agriculture, match de football",
          "Salon de l'habitat, meeting politique, manifestation sportive",
          "Établissement scolaire, exposition temporaire, bal champêtre",
          "Meeting politique, manifestation sportive, Pot d'adieu au bureau"
        ],
        correct: 1,
        explanation: "L'activité événementielle concerne des manifestations TEMPORAIRES rassemblant du public : salons, meetings, événements sportifs. Pas les ERP permanents (école, industrie) ni le pot d'adieu privé."
      },
      {
        theme: "QCU A3S CINQ",
        q: "Le but d'une ronde aléatoire c'est :",
        options: [
          "De piéger le personnel",
          "De surveiller la température extérieure",
          "De prévenir les risques incendie et les actes de malveillance",
          "De faire une ronde à heure fixe",
          "Aucune des réponses précédentes"
        ],
        correct: 2,
        explanation: "La ronde aléatoire (sans horaire ni itinéraire fixe) prévient les risques incendie ET les actes de malveillance, car son imprévisibilité dissuade les malveillants."
      },
      {
        theme: "QCU A3S CINQ",
        q: "Dans la gestion de conflit peut-on répondre négativement à une situation ?",
        options: [
          "Oui",
          "Non",
          "Il vaut mieux être d'accord avec notre interlocuteur dans tous les cas"
        ],
        correct: 0,
        explanation: "Oui, on peut et on DOIT parfois dire non (refus d'accès, application de consignes). L'important est la manière : tonneutre, explication, fermeté sans agressivité. Toujours dire oui = perte d'autorité et d'efficacité."
      },
      {
        theme: "QCU A3S CINQ",
        q: "Qu'est-ce qu'un DATI ?",
        options: [
          "Dispositif adapté au travail isolé",
          "Dotation adaptée au travailleur isolé",
          "Dispositif d'alarme du travailleur isolé",
          "Dispositif adapté au travailleur indépendant"
        ],
        correct: 2,
        explanation: "DATI = Dispositif d'Alarme du Travailleur Isolé. Obligatoire pour tout salarié travaillant seul, il déclenche une alerte automatiquement (perte de verticalité, immobilité, bouton SOS)."
      },
      {
        theme: "QCU A3S CINQ",
        q: "En cas de contrôle de salariés avec enregistrement de données personnelles, quel organisme doit être informé ?",
        options: ["Le CNAPS", "La DIRRECTE", "La CNIL", "Le CSU"],
        correct: 2,
        explanation: "La CNIL doit être informée pour tout traitement de données personnelles (vidéosurveillance, biométrie, contrôles d'accès enregistrés)."
      },
      {
        theme: "QCU A3S CINQ",
        q: "Les consignes particulières peuvent être :",
        options: [
          "Uniquement permanentes",
          "Uniquement ponctuelles",
          "Permanentes ou ponctuelles"
        ],
        correct: 2,
        explanation: "Les consignes particulières sont permanentes (consigne de poste, valable tout le temps) ou ponctuelles (consigne de jour, intervention spécifique). À ne pas confondre avec les consignes générales (sécurité incendie, applicables partout)."
      },
      {
        theme: "QCU A3S QUART",
        q: "Dans le cadre de la gestion de conflit, quel adjectif s'appliquera au mieux au rôle de l'APS ?",
        options: ["Coordinateur", "Amateur", "Conciliateur", "Bagarreur", "Dictateur"],
        correct: 2,
        explanation: "L'APS est un CONCILIATEUR : son rôle est d'apaiser, de dialoguer, de désescalader. Pas un bagarreur (jamais d'usage de la force gratuit), pas un dictateur (respect de la dignité)."
      },
      {
        theme: "QCU A3S QUART",
        q: "Quel article prévoit le droit d'appréhension ?",
        options: [
          "L'article 803 du code de procédure pénale",
          "L'article 73 du code pénal",
          "L'article 53 du code pénal",
          "L'article 73 du code de procédure pénale"
        ],
        correct: 3,
        explanation: "Article 73 du CODE DE PROCÉDURE PÉNALE (CPP). Attention au piège : ce n'est PAS le code pénal, mais bien le CPP."
      },
      {
        theme: "QCU A3S QUART",
        q: "Quel article prévoit le flagrant délit ?",
        options: [
          "L'article 803 du code de procédure pénale",
          "L'article 73 du code pénal",
          "L'article 53 du code de procédure pénale",
          "L'article 73 du code de procédure pénale"
        ],
        correct: 2,
        explanation: "Article 53 CPP définit la flagrance. Article 73 CPP donne le pouvoir d'appréhension en cas de flagrant délit."
      },
      {
        theme: "QCU A3S QUART",
        q: "Je suis agent dans un établissement, sous quelles conditions ai-je le droit d'appréhender une personne ?",
        options: [
          "Si la personne a un comportement suspect",
          "Aucune des autres réponses",
          "Dès que la personne sort de l'enceinte de l'établissement",
          "Si elle est poursuivie par une clameur publique",
          "Si c'est prévu dans les consignes"
        ],
        correct: 3,
        explanation: "L'article 73 CPP autorise l'appréhension en cas de flagrant délit, ce qui inclut le cas où la personne est 'poursuivie par la clameur publique' (article 53 CPP)."
      },
      {
        theme: "QCU A3S TER",
        q: "Selon la règlementation européenne, un matériau est classé selon les critères suivants :",
        options: [
          "Dureté, inflammabilité, dangerosité de la fumée",
          "Inflammabilité, dangerosité des fumées, chutes de gouttes enflammées",
          "Stabilité au feu, inflammabilité, chute de gouttes enflammées",
          "Aucune des réponses proposées"
        ],
        correct: 1,
        explanation: "Classement Euroclasse 'A à F' (réaction au feu) : critères = inflammabilité (combustibilité), production de fumées (s1/s2/s3), gouttes enflammées (d0/d1/d2)."
      },
      {
        theme: "QCU A3S TER",
        q: "Le triangle du feu c'est :",
        options: [
          "Combinaison de 3 éléments",
          "La réduction de 3 éléments",
          "La proportion de 3 éléments",
          "La traduction de 3 éléments",
          "Aucune des réponses précédentes"
        ],
        correct: 0,
        explanation: "Le triangle du feu = COMBINAISON de 3 éléments indispensables (combustible + comburant + énergie d'activation). Supprimer un seul élément = extinction."
      },
      {
        theme: "QCU A3S",
        q: "Les systèmes de détection anti-intrusion sont :",
        options: [
          "Périphériques, circulaires, ponctuels",
          "Infra rouge, discrets, ou sonores",
          "Périphériques, périmétriques, volumétriques",
          "Aucune des réponses précédentes"
        ],
        correct: 2,
        explanation: "3 types de détection : PÉRIPHÉRIQUE (clôture, mur d'enceinte), PÉRIMÉTRIQUE (portes, fenêtres, contacts magnétiques), VOLUMÉTRIQUE (détecteurs de mouvement infrarouge dans les volumes intérieurs)."
      },
      {
        theme: "QCU A3S",
        q: "Pendant combien de temps des enregistrements vidéo peuvent-ils être gardés ?",
        options: [
          "Un mois minimum",
          "Un an",
          "Il n'y a pas de durée imposée",
          "Un mois maximum ou plus s'il y a enquête judiciaire"
        ],
        correct: 3,
        explanation: "Article L252-5 du CSI : durée légale = 1 mois MAXIMUM. Au-delà, suppression obligatoire, sauf en cas d'enquête judiciaire en cours (réquisition par OPJ)."
      },
      {
        theme: "QCU A3S",
        q: "Parmi les activités prévues par le livre VI du code de la sécurité intérieur, l'une d'entre elles n'existe pas :",
        options: [
          "Surveillance gardiennage",
          "Protection des personnes",
          "Policiers municipaux",
          "Transporteurs de fonds",
          "Aucune des réponses précédentes"
        ],
        correct: 2,
        explanation: "Les policiers municipaux relèvent de la fonction publique territoriale, pas du Livre VI du CSI (sécurité PRIVÉE). Le Livre VI couvre : surveillance/gardiennage, protection des personnes, transport de fonds, agences de recherches privées, vidéoprotection, cynophile."
      },
      {
        theme: "QCU A3S - SIX",
        q: "Quel est le rôle de la CNIL concernant les systèmes de vidéosurveillance ?",
        options: [
          "Installer les caméras",
          "Contrôler la conformité des systèmes de vidéosurveillance avec la réglementation sur la protection des données personnelles",
          "Former les agents de sécurité à l'utilisation des caméras",
          "Distribuer des autorisations pour les installations de vidéosurveillance"
        ],
        correct: 1,
        explanation: "La CNIL contrôle la conformité au RGPD et à la loi Informatique et Libertés. Elle ne forme pas, n'installe pas, ne délivre pas d'autorisation (c'est le préfet pour la voie publique)."
      }
    ]
  },

  // ============================================================
  // EXAMEN BLANC #4 · MIX EXPERT — 20 Q TIRÉES DES PIÈGES
  // ============================================================
  {
    id: "exam-mix",
    title: "Examen Blanc · Mix Expert",
    subtitle: "20 questions · 25 min · Niveau difficile",
    description: "Sélection des questions les plus piégeuses des 3 examens. Pour les vrais tests de fin de prépa.",
    questions: [
      // Cocktail de tous les pièges où Wayne (et la plupart des candidats) se plantent
      {
        theme: "Pièges classiques",
        q: "Dans la liste ci-dessous, cochez la série d'armes entrant dans la catégorie D :",
        options: [
          "Magnum 357, lance-flamme, pistolet mitrailleur",
          "Bombe lacrymogène, matraque, poing américain",
          "Masque à gaz, carabine de foire, fusil à pompe",
          "Lance-roquette, pistolet d'abattage, sabre laser"
        ],
        correct: 2,
        explanation: "Catégorie D = armes en vente libre (avec restrictions) : masque à gaz, carabine de foire (calibre limité), fusil à pompe à canon long. Les bombes lacrymogènes < 100 ml sont aussi en D mais matraque/poing américain = catégorie B (autorisation)."
      },
      {
        theme: "Pièges classiques",
        q: "Quelles sont les indications notifiées sur la carte de service d'un agent ?",
        options: [
          "Nom, prénom, âge, adresse",
          "Nom, prénom, fonction, numéros CNAPS",
          "Nom, âge, numéro CNAPS",
          "Nom, prénom, fonction, adresse",
          "Aucune des réponses précédentes"
        ],
        correct: 1,
        explanation: "La carte professionnelle CNAPS comporte : nom, prénom, photo, fonction, numéro CNAPS, date de validité. PAS d'adresse personnelle (vie privée)."
      },
      {
        theme: "Pièges classiques",
        q: "Le Préfet peut obtenir :",
        options: [
          "Le relevé de condamnations",
          "Le Bulletin N° 1 du casier judiciaire",
          "Le Bulletin N° 4 du casier judiciaire",
          "Le relevé des condamnations pénales",
          "Le bulletin administratif des condamnations"
        ],
        correct: 1,
        explanation: "Le Bulletin N°1 (le plus complet, accessible aux magistrats et préfets pour autorisations administratives) est consulté pour la délivrance de la carte pro APS. Le B2 = employeurs publics, le B3 = la personne elle-même."
      },
      {
        theme: "Pièges classiques",
        q: "Selon le Livre VI du CSI, l'APS peut être armé :",
        options: [
          "Oui tout le temps",
          "Non jamais",
          "Oui sous certaines conditions",
          "Avec ses propres armes uniquement"
        ],
        correct: 2,
        explanation: "L'APS peut être armé sous conditions strictes : transport de fonds, protection rapprochée, certains sites sensibles. Mention spéciale 'armée' sur la carte pro et formation spécifique obligatoires."
      },
      {
        theme: "Pièges classiques",
        q: "Dans la convention collective on peut trouver :",
        options: [
          "Des bulletins de salaire",
          "Les différentes primes (nuit, férié, cyno...)",
          "Des grilles d'embauche",
          "La couleur des tenues des Agents",
          "Aucune des réponses précédentes"
        ],
        correct: 1,
        explanation: "La convention collective de la prévention/sécurité (n°3196) fixe les primes (nuit, dimanche, férié, cynophile, panier...), les grilles de salaires, les conditions de travail. Pas de couleurs uniformes (cahier des charges client). Pas de bulletins individuels."
      },
      {
        theme: "Pièges classiques",
        q: "Pouvez-vous appréhendez un individu qui s'est enfui après avoir commis un vol la semaine dernière sur votre lieu de travail ?",
        options: [
          "Oui",
          "Non, je ne l'appréhende pas uniquement s'il revient payer l'article",
          "Aucune des autres réponses",
          "Oui, s'il ne ramène pas ce qu'il a volé",
          "Non"
        ],
        correct: 4,
        explanation: "PAS de flagrant délit après une semaine. Le flagrant délit nécessite un temps très voisin de l'action (article 53 CPP, en général quelques heures). Au-delà, c'est une plainte déposée + enquête judiciaire."
      },
      {
        theme: "Pièges classiques",
        q: "Un agent de sécurité doit savoir lire un plan pour repérer :",
        options: [
          "Les moyens de secours, les accès",
          "Les divers locaux à risques du site, les accès, les moyens de secours, les circuits de rondes",
          "Les issues, les extincteurs, les téléphones d'alerte",
          "Aucune des réponses précédentes"
        ],
        correct: 1,
        explanation: "Réponse la plus complète : locaux à risques + accès + moyens de secours + circuits de rondes. La réponse 1 et 3 sont incomplètes."
      },
      {
        theme: "Pièges classiques",
        q: "La poudre ABC agit par :",
        options: [
          "Inhibition et étouffement",
          "Refroidissement et étouffement",
          "Pulvérisation et inhibition",
          "Aucune des réponses précédentes"
        ],
        correct: 0,
        explanation: "La poudre ABC agit par INHIBITION (interruption de la réaction chimique en chaîne) et ÉTOUFFEMENT (formation d'une couche isolante). Le CO2 lui agit par étouffement et refroidissement léger."
      },
      {
        theme: "Pièges classiques",
        q: "Quel est le but de la règlementation incendie dans les ERP ?",
        options: [
          "Continuité de l'exploitation avec évacuation du niveau sinistré",
          "Faciliter l'évacuation des occupants - faciliter l'action des secours - limiter la propagation du feu",
          "Faciliter le déclenchement des secours - désenfumer - compartimenter",
          "Faciliter l'évacuation - sécuriser l'ERP - préserver le bâtiment"
        ],
        correct: 1,
        explanation: "3 objectifs réglementaires : 1) faciliter l'ÉVACUATION des occupants, 2) faciliter l'ACTION des secours, 3) LIMITER la propagation du feu. La préservation du bâtiment n'est PAS un objectif (l'humain prime)."
      },
      {
        theme: "Pièges classiques",
        q: "À leur arrivée sur le site, les pompiers vous demandent de les conduire sur le lieu du sinistre, que faîtes-vous ?",
        options: [
          "Vous demandez l'autorisation à votre hiérarchie",
          "Vous leur remettez un plan des lieux",
          "Vous leur demandez une pièce d'identité, et leur établissez un badge",
          "Vous les guidez sur les lieux du sinistre"
        ],
        correct: 3,
        explanation: "Réponse opérationnelle : on guide IMMÉDIATEMENT les pompiers (chaque seconde compte). Pas de demande d'autorisation, pas de contrôle d'identité (ils sont reconnaissables à leur tenue + véhicule)."
      },
      {
        theme: "Pièges classiques",
        q: "Quel élément 'fortement recommandé' trouve-t-on dans un local d'appréhension ?",
        options: [
          "Des menottes",
          "Une machine à café",
          "Registre des consignes",
          "Aucune des autres réponses",
          "Une caméra de vidéosurveillance"
        ],
        correct: 4,
        explanation: "Une caméra de vidéosurveillance (CNIL informée) est fortement recommandée pour la TRAÇABILITÉ et la PROTECTION JURIDIQUE de l'agent (preuve qu'aucune violence n'a été exercée). Les menottes sont interdites en sécurité privée."
      },
      {
        theme: "Pièges classiques",
        q: "Quelles sont les conditions de rétention d'une personne dans le cadre de l'article 73 du code de procédure pénale ?",
        options: [
          "Il n'y a pas de condition particulière de rétention, l'agent fait comme il veut",
          "La personne appréhendée doit être remise en liberté dès lors qu'elle a avoué le délit",
          "Aucune des autres réponses",
          "La personne appréhendée ne doit subir aucune violence ni humiliation",
          "La personne appréhendée peut subir des violences et humiliations si nécessaire"
        ],
        correct: 3,
        explanation: "Principe absolu : DIGNITÉ et INTÉGRITÉ de la personne. Aucune violence, aucune humiliation, aucune privation (eau, toilettes). Sinon = délit pénal pour l'agent (séquestration arbitraire, violences)."
      },
      {
        theme: "Pièges classiques",
        q: "Pouvez-vous appréhender un individu qui vient de voler un CD en surface de vente ?",
        options: [
          "Oui la loi l'autorise",
          "Non, je dois attendre qu'il franchisse la ligne de caisse",
          "Non, je dois l'arrêter uniquement sur le parking",
          "Non, je dois attendre qu'il arrive en caisse",
          "Aucune des autres réponses"
        ],
        correct: 1,
        explanation: "En surface de vente, le délit n'est constitué qu'APRÈS franchissement de la ligne de caisse SANS PAYER. Avant, le client peut encore se présenter à la caisse. C'est le passage non payant qui matérialise le vol."
      },
      {
        theme: "Pièges classiques",
        q: "Vous appréhendez une personne et celle-ci vous agresse physiquement. Vous avez le droit :",
        options: [
          "Aucune des autres réponses",
          "D'utiliser tous les moyens y compris une arme",
          "D'utiliser la force nécessaire au but recherché",
          "D'utiliser la violence physique et verbale",
          "De menotter la personne contre un radiateur"
        ],
        correct: 2,
        explanation: "Article 122-5 du Code pénal : LÉGITIME DÉFENSE = riposte PROPORTIONNÉE au but recherché (se défendre, immobiliser). Pas plus. Surenchère = délit de violences pour l'agent."
      },
      {
        theme: "Pièges classiques",
        q: "Quelles sont les différentes méthodes de désenfumage ?",
        options: [
          "Courant d'air-ventilation-combinaison des deux",
          "Balayage de l'espace - différence de pression - combinaison des deux",
          "Évacuation - arrivée d'air frais - combinaison des deux",
          "Aucune des réponses proposées"
        ],
        correct: 1,
        explanation: "2 méthodes officielles : BALAYAGE (extraction des fumées + amenée d'air frais en partie basse) et DIFFÉRENCE DE PRESSION (mise en surpression des espaces protégés type cages d'escalier). + leur combinaison."
      },
      {
        theme: "Pièges classiques",
        q: "Sur les consignes générales que doit-on trouver ?",
        options: [
          "Les moyens d'alerte",
          "Le mode d'emploi des différents extincteurs",
          "L'emplacement des sirènes d'évacuation",
          "L'adresse personnelle du responsable sécurité de l'établissement",
          "Aucune des réponses proposées"
        ],
        correct: 0,
        explanation: "Les consignes générales contiennent les MOYENS D'ALERTE (numéros d'urgence, déclencheurs manuels). Le mode d'emploi détaillé des extincteurs ne figure PAS sur les consignes générales mais sur les extincteurs eux-mêmes."
      },
      {
        theme: "Pièges classiques",
        q: "Quand y a-t-il inflammation ?",
        options: [
          "Quand l'incandescence est atteinte",
          "Lorsque la température est suffisante, les vapeurs s'enflamment au contact de l'oxygène",
          "Quand les fumées sont suffisamment chaudes",
          "Aucune des réponses précédentes"
        ],
        correct: 1,
        explanation: "Définition technique de l'inflammation : les vapeurs émises par le combustible (gaz combustible) atteignent une température suffisante (point d'éclair) et s'enflamment au contact du comburant (oxygène)."
      },
      {
        theme: "Pièges classiques",
        q: "La propagation de l'incendie par la transmission de la chaleur dans la masse d'un matériau correspond à :",
        options: [
          "La conduction",
          "La convection",
          "Le rayonnement",
          "La projection",
          "La réfraction"
        ],
        correct: 0,
        explanation: "CONDUCTION = transmission de chaleur À TRAVERS la matière (poutre métallique chauffée à un bout transmet la chaleur à l'autre bout). Convection = par les fluides (fumées). Rayonnement = par ondes (chaleur ressentie à distance)."
      },
      {
        theme: "Pièges classiques",
        q: "Quel est le but de la palpation de sécurité ?",
        options: [
          "Montrer que la sécurité est bien faite",
          "Détecter sur une personne des objets illicites",
          "Vérifier que les personnes ne volent pas en quittant le site",
          "Rassurer les visiteurs du site",
          "Aucune des réponses précédentes"
        ],
        correct: 1,
        explanation: "Article L613-2 du CSI : la palpation a pour but de DÉTECTER les objets illicites ou dangereux (armes, explosifs, drogues). Pas un contrôle anti-vol (ça relève d'une fouille = OPJ)."
      },
      {
        theme: "Pièges classiques",
        q: "Le rôle principal de l'intervenant en télésécurité est de :",
        options: [
          "Faire fuir des malfaiteurs",
          "Neutraliser par la force des malfaiteurs",
          "Effectuer une levée de doute",
          "Faire des rondes de sécurité régulières",
          "Aucune des réponses précédentes"
        ],
        correct: 2,
        explanation: "Le rondier-intervenant en télésurveillance se déplace après déclenchement d'alarme pour LEVER LE DOUTE (vérifier si l'intrusion est réelle ou fausse alarme). Il n'a pas vocation à confronter physiquement les malfaiteurs."
      }
    ]
  }

];
