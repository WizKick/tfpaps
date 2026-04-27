// ========== EXAMEN OFFICIEL · 103 QUESTIONS ==========
// Reconstitution complète de l'épreuve théorique TFP APS 2026
//
// Structure officielle (référentiel CPNEFP) :
//   UV 2 · Environnement juridique         · 15 Q
//   UV 3 · Gestion des conflits            · 10 Q
//   UV 4 · Module stratégique              ·  5 Q
//   UV 5 · Risques incendie                · 10 Q
//   UV 6 · Appréhension                    ·  5 Q
//   UV 7 · Risques terroristes             · 10 Q
//   UV 8 · Module professionnel            · 15 Q
//   UV 9 · Palpation & inspection bagages  · 10 Q
//   UV 10-12-14 · Surveillance / Événem.   · 15 Q
//   UV 11 · Premiers secours               ·  8 Q
//   ─────────────────────────────────────────────
//   TOTAL                                    103 Q
//
// Validation : note >= 12/20 PAR UV. Une UV ratée = ajourné sur cette UV.
// Durée recommandée : 2h pour le QCU complet (mode officiel).

const examenOfficielUVs = [

  // ============================================================
  // UV 2 · ENVIRONNEMENT JURIDIQUE (15 questions)
  // ============================================================
  {
    id: "uv2",
    code: "UV 2",
    title: "Environnement juridique",
    subtitle: "Intervention dans le cadre d'un accident du travail",
    questionCount: 15,
    questions: [
      {
        theme: "UV2 · Environnement juridique",
        q: "Le CNAPS est :",
        options: [
          "Un syndicat de la sécurité privée",
          "Un établissement public administratif rattaché au ministère de l'Intérieur",
          "Une société privée de contrôle",
          "Un organisme européen"
        ],
        correct: 1,
        explanation: "Le CNAPS (Conseil National des Activités Privées de Sécurité) est un établissement public administratif placé sous tutelle du ministère de l'Intérieur. Il régule, contrôle et discipline la profession."
      },
      {
        theme: "UV2 · Environnement juridique",
        q: "La carte professionnelle d'agent de sécurité est valable :",
        options: ["1 an", "3 ans", "5 ans", "10 ans"],
        correct: 2,
        explanation: "La carte pro CNAPS est valable 5 ans, renouvelable. Elle est obligatoire pour exercer (article L612-20 du CSI)."
      },
      {
        theme: "UV2 · Environnement juridique",
        q: "Pour obtenir la carte professionnelle, il faut être titulaire :",
        options: [
          "D'un casier judiciaire vierge (B2)",
          "D'un permis de conduire",
          "D'un diplôme universitaire",
          "D'une autorisation européenne"
        ],
        correct: 0,
        explanation: "Le bulletin n°2 du casier judiciaire doit être compatible avec l'exercice (pas de condamnations rédhibitoires). Le préfet peut consulter le B1 (le plus complet) pour la délivrance."
      },
      {
        theme: "UV2 · Environnement juridique",
        q: "Le droit de retrait du salarié permet :",
        options: [
          "De démissionner sans préavis",
          "De quitter son poste en cas de danger grave et imminent",
          "De refuser n'importe quelle tâche",
          "D'obtenir une augmentation"
        ],
        correct: 1,
        explanation: "Article L4131-1 du Code du travail : le salarié peut se retirer d'une situation présentant un danger grave et imminent pour sa vie ou sa santé, sans subir de sanction."
      },
      {
        theme: "UV2 · Environnement juridique",
        q: "Un accident du travail est :",
        options: [
          "Tout accident subi par un salarié dans son temps libre",
          "Tout accident survenu pendant les heures de travail ou sur le trajet domicile-travail direct",
          "Uniquement les accidents avec hospitalisation",
          "Aucun de ces accidents"
        ],
        correct: 1,
        explanation: "Article L411-1 du Code de la Sécurité sociale : tout accident survenu par le fait ou à l'occasion du travail, ou sur le trajet domicile-travail (accident de trajet)."
      },
      {
        theme: "UV2 · Environnement juridique",
        q: "Le DATI est :",
        options: [
          "Un document administratif de travail interne",
          "Un dispositif d'alarme du travailleur isolé",
          "Une déclaration annuelle de travail",
          "Un diplôme d'agent technique d'intervention"
        ],
        correct: 1,
        explanation: "DATI = Dispositif d'Alarme du Travailleur Isolé. Obligatoire pour tout salarié travaillant seul, il déclenche une alerte automatiquement (perte de verticalité, immobilité, bouton SOS)."
      },
      {
        theme: "UV2 · Environnement juridique",
        q: "La convention collective de la sécurité privée fixe notamment :",
        options: [
          "La couleur des uniformes",
          "Les primes (nuit, dimanche, férié, cynophile) et les grilles de salaire",
          "Les sanctions pénales",
          "Le programme de la formation"
        ],
        correct: 1,
        explanation: "La CCN de la prévention/sécurité (n°3196) fixe les conditions de travail : grilles de salaire, primes, durée du travail, congés. Pas les uniformes (cahier des charges client)."
      },
      {
        theme: "UV2 · Environnement juridique",
        q: "L'APS qui se voit demander de ranger des caddies par le directeur du magasin doit :",
        options: [
          "Obéir, le client est roi",
          "Refuser et expliquer que c'est un délit de marchandage",
          "Accepter en échange d'une prime",
          "Demander l'autorisation au CNAPS"
        ],
        correct: 1,
        explanation: "Demander à un APS d'effectuer des tâches étrangères à ses missions de sécurité constitue un délit de marchandage (art. L8231-1 du Code du travail). L'agent doit refuser poliment et signaler à sa hiérarchie."
      },
      {
        theme: "UV2 · Environnement juridique",
        q: "L'agent de sécurité qui exerce sans carte professionnelle valide risque :",
        options: [
          "Une simple réprimande",
          "Une amende uniquement",
          "Une amende et une peine de prison",
          "Une suspension de 3 mois"
        ],
        correct: 2,
        explanation: "Article L617-1 du CSI : exercer sans carte pro est puni de 3 ans d'emprisonnement et 45 000 € d'amende."
      },
      {
        theme: "UV2 · Environnement juridique",
        q: "Le secret professionnel impose à l'APS :",
        options: [
          "De divulguer toute information à la presse",
          "De ne pas révéler les informations confidentielles dont il a connaissance",
          "De cacher les infractions à sa hiérarchie",
          "De rester muet en toute circonstance"
        ],
        correct: 1,
        explanation: "Article 226-13 du Code pénal : la violation du secret professionnel est punie de 1 an d'emprisonnement et 15 000 € d'amende. L'APS doit protéger les informations confidentielles du site et des personnes."
      },
      {
        theme: "UV2 · Environnement juridique",
        q: "Le Préfet peut consulter quel bulletin du casier judiciaire pour valider une demande de carte pro ?",
        options: [
          "Le Bulletin N°1",
          "Le Bulletin N°2",
          "Le Bulletin N°3",
          "Aucun bulletin"
        ],
        correct: 0,
        explanation: "Le Bulletin N°1 (le plus complet) est accessible aux magistrats et aux préfets pour les autorisations administratives. Le B2 = employeurs publics, le B3 = la personne elle-même."
      },
      {
        theme: "UV2 · Environnement juridique",
        q: "La déontologie de l'APS impose :",
        options: [
          "Discrétion, neutralité, dignité, respect de la personne",
          "Initiative permanente sans hiérarchie",
          "Action immédiate avant réflexion",
          "Soumission absolue au client"
        ],
        correct: 0,
        explanation: "Le Code de déontologie de la sécurité privée (R632-1 et suivants du CSI) impose probité, neutralité, discrétion, dignité, respect de la personne et de la loi."
      },
      {
        theme: "UV2 · Environnement juridique",
        q: "Une activité prévue par le Livre VI du CSI est :",
        options: [
          "Police municipale",
          "Surveillance et gardiennage",
          "Gendarmerie nationale",
          "Renseignement militaire"
        ],
        correct: 1,
        explanation: "Le Livre VI du CSI couvre la sécurité PRIVÉE : surveillance/gardiennage, protection des personnes, transport de fonds, agences de recherches privées, vidéoprotection, cynophile. Police municipale et gendarmerie sont publiques."
      },
      {
        theme: "UV2 · Environnement juridique",
        q: "L'APS peut être armé :",
        options: [
          "Toujours, c'est un droit",
          "Jamais, c'est interdit",
          "Sous conditions strictes (transport de fonds, sites sensibles, mention spéciale CNAPS)",
          "Avec ses propres armes uniquement"
        ],
        correct: 2,
        explanation: "Le port d'arme par un APS nécessite : une activité autorisée (transport de fonds, protection rapprochée, certains sites sensibles), une mention spéciale 'armée' sur la carte pro, et une formation spécifique."
      },
      {
        theme: "UV2 · Environnement juridique",
        q: "La CNIL a pour rôle :",
        options: [
          "De former les APS",
          "De contrôler le respect de la loi Informatique et Libertés (RGPD)",
          "D'installer les caméras de vidéosurveillance",
          "De délivrer les cartes professionnelles"
        ],
        correct: 1,
        explanation: "La CNIL (Commission Nationale de l'Informatique et des Libertés) veille au respect du RGPD et de la loi I&L : vidéosurveillance avec enregistrement, biométrie, contrôles d'accès, doivent lui être déclarés."
      }
    ]
  },

  // ============================================================
  // UV 3 · GESTION DES CONFLITS (10 questions)
  // ============================================================
  {
    id: "uv3",
    code: "UV 3",
    title: "Gestion des conflits",
    subtitle: "Analyse et résolution de conflits",
    questionCount: 10,
    questions: [
      {
        theme: "UV3 · Gestion des conflits",
        q: "Un conflit est :",
        options: [
          "Une simple émotion",
          "Une situation de blocage entre au moins deux personnes aux intérêts divergents",
          "Un acte délictueux",
          "Une plaisanterie mal comprise"
        ],
        correct: 1,
        explanation: "Le conflit oppose au moins deux parties dont les intérêts, valeurs ou besoins sont incompatibles, créant un blocage."
      },
      {
        theme: "UV3 · Gestion des conflits",
        q: "L'adjectif qui caractérise le mieux le rôle de l'APS en gestion de conflit est :",
        options: ["Coordinateur", "Bagarreur", "Conciliateur", "Dictateur"],
        correct: 2,
        explanation: "L'APS est un CONCILIATEUR : il apaise, dialogue, désescalade. Pas un combattant, pas un autoritaire."
      },
      {
        theme: "UV3 · Gestion des conflits",
        q: "Face à une personne agressive, le premier réflexe est :",
        options: [
          "Utiliser immédiatement la force",
          "Ignorer la personne",
          "Tenter de calmer en parlant doucement et en gardant ses distances",
          "Appeler la police et fuir"
        ],
        correct: 2,
        explanation: "Désescalade verbale : ton calme, distance de sécurité (1 à 1,5 m), écoute active. La force est le DERNIER recours, en légitime défense uniquement."
      },
      {
        theme: "UV3 · Gestion des conflits",
        q: "L'écoute active consiste à :",
        options: [
          "Couper la parole pour aller plus vite",
          "Reformuler ce que dit l'interlocuteur pour montrer qu'on comprend",
          "Imposer son point de vue",
          "Ne rien dire jamais"
        ],
        correct: 1,
        explanation: "L'écoute active : laisser parler, reformuler ('Si je comprends bien...'), montrer empathie. Permet de désamorcer en validant l'émotion sans valider l'action."
      },
      {
        theme: "UV3 · Gestion des conflits",
        q: "En gestion de conflit, peut-on répondre négativement à une demande ?",
        options: [
          "Oui, avec fermeté et politesse",
          "Non, jamais",
          "Toujours dire oui pour éviter le conflit",
          "Seulement si le client est petit"
        ],
        correct: 0,
        explanation: "Dire NON fait partie du métier (refus d'accès, application de consignes). L'important : ton neutre, explication, fermeté SANS agressivité. Toujours céder = perte d'autorité."
      },
      {
        theme: "UV3 · Gestion des conflits",
        q: "Les 4 étapes classiques de la désescalade sont :",
        options: [
          "Crier, menacer, frapper, fuir",
          "Observer, écouter, reformuler, proposer une solution",
          "Photographier, alerter, fuir, signaler",
          "Ignorer, attendre, partir, oublier"
        ],
        correct: 1,
        explanation: "Méthode SOFA : Sécuriser, Observer, Faire parler, Apaiser. Ou plus largement : observer la situation, écouter activement, reformuler pour valider, proposer une issue."
      },
      {
        theme: "UV3 · Gestion des conflits",
        q: "La distance de sécurité recommandée face à une personne en conflit est :",
        options: [
          "0 à 50 cm (intime)",
          "1 à 1,5 m (sociale)",
          "5 m minimum",
          "Aucune distance n'est recommandée"
        ],
        correct: 1,
        explanation: "1 à 1,5 m = distance sociale, qui permet le dialogue tout en se protégeant d'une agression physique soudaine. La zone intime (<50 cm) est perçue comme une agression."
      },
      {
        theme: "UV3 · Gestion des conflits",
        q: "Face à une agression physique, l'APS peut :",
        options: [
          "Riposter avec tous les moyens, y compris une arme",
          "Utiliser la force strictement nécessaire et proportionnée",
          "Frapper en premier par sécurité",
          "Ne rien faire et attendre la police"
        ],
        correct: 1,
        explanation: "Article 122-5 du Code pénal : légitime défense = riposte PROPORTIONNÉE à l'agression. L'APS doit se défendre sans surenchère, sinon délit de violences."
      },
      {
        theme: "UV3 · Gestion des conflits",
        q: "Les types de conflits que l'APS rencontre le plus sont :",
        options: [
          "Politiques uniquement",
          "Liés au refus d'accès, à l'attente, à l'application des consignes",
          "Familiaux",
          "Religieux exclusivement"
        ],
        correct: 1,
        explanation: "Au quotidien : refus d'accès, file d'attente, contrôle de sac, application stricte des consignes. Le rôle de l'APS est de gérer ces frustrations sans escalade."
      },
      {
        theme: "UV3 · Gestion des conflits",
        q: "Pour éviter d'escalader un conflit, l'APS doit :",
        options: [
          "Hausser le ton plus fort que l'interlocuteur",
          "Garder son calme, rester courtois, ne pas répondre aux insultes",
          "Insulter en retour pour rétablir l'autorité",
          "Ignorer totalement la personne"
        ],
        correct: 1,
        explanation: "Garder son calme est la règle d'or. Répondre aux insultes alimente le conflit. La courtoisie professionnelle, même face à l'incivilité, désamorce souvent la situation."
      }
    ]
  },

  // ============================================================
  // UV 4 · MODULE STRATÉGIQUE (5 questions)
  // ============================================================
  {
    id: "uv4",
    code: "UV 4",
    title: "Module stratégique",
    subtitle: "Transmission des consignes et des informations",
    questionCount: 5,
    questions: [
      {
        theme: "UV4 · Module stratégique",
        q: "Les consignes générales contiennent notamment :",
        options: [
          "L'adresse personnelle du responsable sécurité",
          "Les moyens d'alerte et numéros d'urgence",
          "La couleur de l'uniforme",
          "Le salaire de chaque agent"
        ],
        correct: 1,
        explanation: "Les consignes générales = applicables à tous : moyens d'alerte, numéros d'urgence, conduite en cas d'incendie. Les consignes particulières dépendent du poste."
      },
      {
        theme: "UV4 · Module stratégique",
        q: "Les consignes particulières peuvent être :",
        options: [
          "Uniquement permanentes",
          "Uniquement ponctuelles",
          "Permanentes ou ponctuelles",
          "Aucune des réponses"
        ],
        correct: 2,
        explanation: "Permanentes = consigne de poste valable tout le temps. Ponctuelles = consigne de jour, événement spécifique. Les deux types cohabitent."
      },
      {
        theme: "UV4 · Module stratégique",
        q: "La main courante peut être :",
        options: [
          "Orale uniquement",
          "Manuscrite ou informatisée",
          "Virtuelle",
          "Téléphonique"
        ],
        correct: 1,
        explanation: "La main courante est un document ÉCRIT, manuscrite (registre papier) ou informatisée (logiciel). Elle ne peut pas être orale."
      },
      {
        theme: "UV4 · Module stratégique",
        q: "Sur la main courante, 20 heures s'écrit :",
        options: ["08h00", "20h00", "8 PM", "20h"],
        correct: 1,
        explanation: "Format 24 heures obligatoire, en 4 chiffres : 20h00. Norme professionnelle pour éviter toute ambiguïté."
      },
      {
        theme: "UV4 · Module stratégique",
        q: "Le rapport d'anomalie sert à :",
        options: [
          "Signaler un fait grave (incident, accident)",
          "Signaler un dysfonctionnement constaté lors d'une ronde (extincteur manquant, ampoule HS)",
          "Rendre compte d'une vacation complète",
          "Justifier une absence"
        ],
        correct: 1,
        explanation: "Rapport d'anomalie ≠ rapport d'incident. L'anomalie = dysfonctionnement matériel ou organisationnel. L'incident = fait grave (vol, agression, sinistre)."
      }
    ]
  },

  // ============================================================
  // UV 5 · RISQUES INCENDIE (10 questions)
  // ============================================================
  {
    id: "uv5",
    code: "UV 5",
    title: "Prévention des risques incendie",
    subtitle: "Triangle du feu, extincteurs, SSI, désenfumage",
    questionCount: 10,
    questions: [
      {
        theme: "UV5 · Risques incendie",
        q: "Le triangle du feu est composé de :",
        options: [
          "Combustible, comburant, énergie d'activation",
          "Eau, sable, mousse",
          "Fumée, flamme, chaleur",
          "Détecteur, alarme, extincteur"
        ],
        correct: 0,
        explanation: "3 éléments INDISPENSABLES à la combustion : combustible (matière qui brûle) + comburant (oxygène) + énergie d'activation (chaleur, étincelle). Supprimer un seul = extinction."
      },
      {
        theme: "UV5 · Risques incendie",
        q: "Le feu se propage par :",
        options: [
          "Convection, rayonnement, conduction, projection",
          "Vent, pluie, soleil, neige",
          "Radio, télé, internet",
          "Lecture, écriture, calcul"
        ],
        correct: 0,
        explanation: "4 modes : CONVECTION (fumées chaudes qui montent), RAYONNEMENT (chaleur radiative), CONDUCTION (chaleur dans la matière), PROJECTION (gouttes/escarbilles)."
      },
      {
        theme: "UV5 · Risques incendie",
        q: "Sur un feu de matériel électrique sous tension, on utilise :",
        options: [
          "Un extincteur à eau pulvérisée",
          "Un extincteur à eau pulvérisée + additif",
          "Un extincteur à CO2",
          "Un seau d'eau"
        ],
        correct: 2,
        explanation: "Le CO2 n'est pas conducteur électrique et ne laisse pas de résidus. C'est l'extincteur de choix pour les feux d'origine électrique."
      },
      {
        theme: "UV5 · Risques incendie",
        q: "La distance d'attaque d'un extincteur CO2 est :",
        options: ["Moins d'1 m", "2 à 3 m", "5 m", "10 m"],
        correct: 0,
        explanation: "Moins d'1 mètre. Le CO2 a un faible débit, on doit s'approcher du foyer. Eau pulvérisée : 3-4 m, poudre : 2-3 m."
      },
      {
        theme: "UV5 · Risques incendie",
        q: "Un élément de construction REI est :",
        options: [
          "Pare-flammes",
          "Coupe-feu (résistance + étanchéité + isolation thermique)",
          "Stable au feu uniquement",
          "Sans propriété particulière"
        ],
        correct: 1,
        explanation: "Classement Euroclasse : R = résistance mécanique, E = étanchéité aux flammes, I = isolation thermique. Un REI = COUPE-FEU (3 critères). Un EI = pare-flammes."
      },
      {
        theme: "UV5 · Risques incendie",
        q: "Combien de catégories de SSI existe-t-il ?",
        options: ["3 (A, B, C)", "5 (A, B, C, D, E)", "7", "10"],
        correct: 1,
        explanation: "5 catégories de SSI : A (la plus sévère, avec DAI), B, C, D, E (la moins sévère). Le SSI A équipe les IGH et ERP avec locaux à sommeil."
      },
      {
        theme: "UV5 · Risques incendie",
        q: "L'UCMC se trouve au niveau :",
        options: ["Du SDI", "Du CMSI", "De l'UAE", "Aucun"],
        correct: 1,
        explanation: "L'UCMC (Unité de Commande Manuelle Centralisée) est un composant du CMSI (Centralisateur de Mise en Sécurité Incendie)."
      },
      {
        theme: "UV5 · Risques incendie",
        q: "Les méthodes de désenfumage sont :",
        options: [
          "Courant d'air et ventilation",
          "Balayage de l'espace, différence de pression, ou combinaison des deux",
          "Évacuation et arrivée d'air frais",
          "Aspiration uniquement"
        ],
        correct: 1,
        explanation: "2 méthodes officielles : BALAYAGE (extraction des fumées + amenée d'air frais en partie basse) et DIFFÉRENCE DE PRESSION (mise en surpression des espaces protégés)."
      },
      {
        theme: "UV5 · Risques incendie",
        q: "Le but de la réglementation incendie dans les ERP est :",
        options: [
          "Préserver le bâtiment avant tout",
          "Faciliter l'évacuation des occupants, faciliter l'action des secours, limiter la propagation du feu",
          "Limiter l'accès au public",
          "Réduire les coûts de construction"
        ],
        correct: 1,
        explanation: "3 objectifs réglementaires : 1) ÉVACUATION des occupants, 2) ACTION des secours, 3) LIMITER la propagation. La protection du bâtiment n'est PAS un objectif (l'humain prime)."
      },
      {
        theme: "UV5 · Risques incendie",
        q: "À l'arrivée des pompiers sur le site, l'APS doit :",
        options: [
          "Demander l'autorisation à sa hiérarchie",
          "Leur demander une pièce d'identité et leur établir un badge",
          "Les guider immédiatement vers les lieux du sinistre",
          "Leur remettre un plan et partir"
        ],
        correct: 2,
        explanation: "Réponse opérationnelle : les pompiers en intervention sont GUIDÉS IMMÉDIATEMENT (chaque seconde compte). Pas de contrôle d'identité, pas de badge."
      }
    ]
  },

  // ============================================================
  // UV 6 · APPRÉHENSION (5 questions)
  // ============================================================
  {
    id: "uv6",
    code: "UV 6",
    title: "Appréhension",
    subtitle: "Modalités d'appréhension dans l'exercice du métier",
    questionCount: 5,
    questions: [
      {
        theme: "UV6 · Appréhension",
        q: "Le droit d'appréhension de l'APS est prévu par :",
        options: [
          "L'article 73 du Code de procédure pénale",
          "L'article 73 du Code pénal",
          "L'article 53 du Code pénal",
          "L'article 803 du CPP"
        ],
        correct: 0,
        explanation: "Article 73 du CODE DE PROCÉDURE PÉNALE (CPP). Attention au piège : pas le Code pénal. Conditions cumulatives : flagrant délit, crime ou délit puni d'emprisonnement, remise immédiate à un OPJ."
      },
      {
        theme: "UV6 · Appréhension",
        q: "Le flagrant délit est défini par :",
        options: [
          "L'article 53 du Code de procédure pénale",
          "L'article 73 du CPP",
          "L'article 122-5 du Code pénal",
          "Aucun article"
        ],
        correct: 0,
        explanation: "Article 53 CPP définit la flagrance (crime/délit qui se commet actuellement ou vient de se commettre, ou poursuite par clameur publique). Article 73 CPP donne le pouvoir d'appréhension."
      },
      {
        theme: "UV6 · Appréhension",
        q: "Après avoir appréhendé une personne, l'APS doit :",
        options: [
          "La fouiller pour récupérer les objets volés",
          "Faire prévenir un Officier de Police Judiciaire (OPJ) sans délai",
          "La menotter à un radiateur",
          "La sermonner et la laisser partir"
        ],
        correct: 1,
        explanation: "Article 73 CPP : la personne appréhendée doit être conduite SANS DÉLAI devant un OPJ. Pas de fouille (acte de PJ), pas de violence, pas de relâchement."
      },
      {
        theme: "UV6 · Appréhension",
        q: "En surface de vente, on peut appréhender un voleur :",
        options: [
          "Avant le passage en caisse",
          "Dès le franchissement de la ligne de caisse sans paiement",
          "Uniquement sur le parking",
          "Jamais"
        ],
        correct: 1,
        explanation: "Le délit de vol n'est constitué qu'APRÈS franchissement de la caisse sans payer. Avant, le client peut encore se présenter en caisse."
      },
      {
        theme: "UV6 · Appréhension",
        q: "Lors d'une appréhension, la personne :",
        options: [
          "Peut subir des violences si nécessaire",
          "Ne doit subir aucune violence ni humiliation",
          "Doit être menottée",
          "Doit être fouillée intégralement"
        ],
        correct: 1,
        explanation: "Principe absolu : DIGNITÉ et INTÉGRITÉ de la personne. Aucune violence, aucune humiliation, aucune privation. Sinon = délit pour l'agent (séquestration arbitraire, violences)."
      }
    ]
  },

  // ============================================================
  // UV 7 · RISQUES TERRORISTES (10 questions)
  // ============================================================
  {
    id: "uv7",
    code: "UV 7",
    title: "Sensibilisation aux risques terroristes",
    subtitle: "Vigipirate, NRBC, conduite à tenir",
    questionCount: 10,
    questions: [
      {
        theme: "UV7 · Risques terroristes",
        q: "Le plan gouvernemental de lutte contre le terrorisme s'appelle :",
        options: ["Plan ORSEC", "Plan Vigipirate", "Plan Blanc", "Plan Polmar"],
        correct: 1,
        explanation: "Le Plan Vigipirate est le dispositif central français contre la menace terroriste, en vigueur permanente avec 3 niveaux d'alerte."
      },
      {
        theme: "UV7 · Risques terroristes",
        q: "Combien de niveaux comporte le plan Vigipirate ?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "3 niveaux : Vigilance (permanent), Sécurité renforcée - Risque attentat, Urgence attentat (le plus élevé)."
      },
      {
        theme: "UV7 · Risques terroristes",
        q: "Face à un attentat, la doctrine officielle est :",
        options: [
          "Affronter, négocier, fuir",
          "S'échapper, se cacher, alerter",
          "Filmer, alerter, fuir",
          "Crier, bloquer, attendre"
        ],
        correct: 1,
        explanation: "Doctrine ministère de l'Intérieur : 1) S'ÉCHAPPER si possible, 2) SE CACHER si la fuite est impossible, 3) ALERTER les forces de l'ordre quand on est en sécurité."
      },
      {
        theme: "UV7 · Risques terroristes",
        q: "NRBC signifie :",
        options: [
          "Nouvelle Régulation des Bases de Combat",
          "Nucléaire, Radiologique, Biologique, Chimique",
          "Norme Réglementaire des Bâtiments Construits",
          "Niveau Réel de Bruit Continu"
        ],
        correct: 1,
        explanation: "NRBC = risques Nucléaire, Radiologique, Biologique, Chimique. Menaces non-conventionnelles couvertes par Vigipirate."
      },
      {
        theme: "UV7 · Risques terroristes",
        q: "Face à un colis suspect, l'APS doit :",
        options: [
          "L'ouvrir pour vérifier",
          "Le déplacer dans une zone isolée",
          "Établir un périmètre de sécurité, ne pas toucher, alerter les forces de l'ordre",
          "Le jeter à la poubelle"
        ],
        correct: 2,
        explanation: "Procédure : ne JAMAIS toucher ni déplacer. Périmètre de sécurité de 50 m minimum, alerte au 17, évacuation de la zone."
      },
      {
        theme: "UV7 · Risques terroristes",
        q: "Un comportement signal pouvant indiquer un risque terroriste est :",
        options: [
          "Une personne pressée",
          "Une personne mal habillée",
          "Une personne photographiant sous des angles inhabituels les dispositifs de sécurité",
          "Une personne parlant une langue étrangère"
        ],
        correct: 2,
        explanation: "Comportements signaux : repérage anormal (photos de caméras, issues), questions précises sur les rondes, intrusion en zone non publique. La nationalité ou la langue ne sont PAS des comportements signaux."
      },
      {
        theme: "UV7 · Risques terroristes",
        q: "Le PPMS est :",
        options: [
          "Plan Particulier de Mise en Sûreté",
          "Plan Public de Maintien de Sécurité",
          "Procédure Préventive Multi-Sites",
          "Programme Permanent de Mise en Service"
        ],
        correct: 0,
        explanation: "Le PPMS prévoit l'organisation et les mesures à prendre face à un événement majeur (attentat, intrusion, risque chimique)."
      },
      {
        theme: "UV7 · Risques terroristes",
        q: "Le numéro d'urgence européen unique est :",
        options: ["15", "17", "18", "112"],
        correct: 3,
        explanation: "Le 112 est le numéro d'urgence européen, accessible 24/7, gratuit, qui dirige vers le service compétent (police, pompiers, SAMU)."
      },
      {
        theme: "UV7 · Risques terroristes",
        q: "Lors d'une intrusion armée, l'APS doit :",
        options: [
          "S'interposer pour neutraliser l'agresseur",
          "Reprendre l'arme à l'agresseur",
          "Suivre les consignes de mise en sûreté et alerter les forces de l'ordre",
          "Négocier avec l'agresseur"
        ],
        correct: 2,
        explanation: "L'APS n'est pas formé au combat armé. Sa mission : déclencher procédures de mise en sûreté (confinement, évacuation), alerter le 17, guider les occupants."
      },
      {
        theme: "UV7 · Risques terroristes",
        q: "Un véhicule stationné anormalement devant un ERP doit faire l'objet :",
        options: [
          "D'un PV de stationnement",
          "D'une procédure de levée de doute et d'un signalement aux forces de l'ordre",
          "D'un déplacement par l'agent",
          "D'aucune action"
        ],
        correct: 1,
        explanation: "Un véhicule abandonné ou anormal (notamment en niveau Vigipirate renforcé) peut constituer une menace. Procédure : périmètre, signalement, ne pas s'approcher."
      }
    ]
  },

  // ============================================================
  // UV 8 · MODULE PROFESSIONNEL (15 questions)
  // ============================================================
  {
    id: "uv8",
    code: "UV 8",
    title: "Module professionnel",
    subtitle: "Communication, intervention, contrôle, surveillance",
    questionCount: 15,
    questions: [
      {
        theme: "UV8 · Module professionnel",
        q: "Le contrôle d'accès a pour but :",
        options: [
          "D'interdire toute entrée",
          "De contrôler toutes les entrées et sorties",
          "D'accueillir tout le monde sans filtrage",
          "De faire des statistiques"
        ],
        correct: 1,
        explanation: "Le contrôle d'accès filtre ET enregistre toutes les entrées/sorties (qui, quand, où). Pas seulement filtrer, pas seulement compter."
      },
      {
        theme: "UV8 · Module professionnel",
        q: "EXAMEN s'écrit en alphabet phonétique OTAN :",
        options: [
          "Echo, X-Ray, Alpha, Mike, Echo, November",
          "Echo, X-Ray, Alpha, Mike, Exemple, November",
          "Echo, X-Ray, Alain, Michel, Echo, November",
          "Aucune des réponses"
        ],
        correct: 0,
        explanation: "E=Echo, X=X-Ray, A=Alpha, M=Mike, E=Echo, N=November. L'alphabet OTAN est utilisé pour épeler sans ambiguïté en radio."
      },
      {
        theme: "UV8 · Module professionnel",
        q: "Lors d'un appel téléphonique entrant, le nombre de sonneries maximum avant de décrocher est :",
        options: ["1", "3", "5", "10"],
        correct: 1,
        explanation: "3 sonneries maximum est la règle professionnelle pour un PC sécurité, garantissant la réactivité."
      },
      {
        theme: "UV8 · Module professionnel",
        q: "Vous décrochez le téléphone au PC sécurité de la société 'X' (vous êtes salarié de 'Y'). Vous vous présentez :",
        options: [
          "'Bonjour, PC Y, agent Machin'",
          "'Société X, bonjour, que puis-je pour vous ?'",
          "'Salut, c'est l'APS de Y'",
          "'Bonjour Y, agent au PC X'"
        ],
        correct: 1,
        explanation: "Au téléphone, on se présente AU NOM DU CLIENT (la société sur laquelle on travaille), pas de notre employeur. L'agent représente le site."
      },
      {
        theme: "UV8 · Module professionnel",
        q: "Lors du signalement d'une personne, on précise :",
        options: [
          "Sa nationalité, sa religion",
          "Son sexe, sa taille, sa corpulence, ses vêtements",
          "Son âge précis et son adresse",
          "Sa marque de chaussures"
        ],
        correct: 1,
        explanation: "Signalement objectif et factuel : sexe, taille, corpulence, vêtements, signes distinctifs. PAS de nationalité ni de religion (discriminatoire)."
      },
      {
        theme: "UV8 · Module professionnel",
        q: "Le rôle principal de l'intervenant en télésurveillance est :",
        options: [
          "Faire fuir les malfaiteurs",
          "Neutraliser par la force",
          "Effectuer une levée de doute après alarme",
          "Faire des rondes régulières"
        ],
        correct: 2,
        explanation: "Le rondier-intervenant en télésurveillance se déplace après alarme pour LEVER LE DOUTE (intrusion réelle ou fausse alarme). Il ne confronte pas physiquement les malfaiteurs."
      },
      {
        theme: "UV8 · Module professionnel",
        q: "Une 'levée de doute' signifie :",
        options: [
          "Remettre en cause un supérieur",
          "Mettre en doute un témoin",
          "S'assurer qu'il n'y a pas de danger réel après détection d'une alarme",
          "Tester une alarme"
        ],
        correct: 2,
        explanation: "La levée de doute = vérifier sur place ou par caméra qu'une alarme déclenchée correspond à un danger réel ou à une fausse alarme."
      },
      {
        theme: "UV8 · Module professionnel",
        q: "Des cartons obstruent une issue de secours. L'APS :",
        options: [
          "Les laisse en place et le note",
          "Les déplace immédiatement et signale l'anomalie sur la main courante",
          "Demande à l'entretien plus tard",
          "Les jette"
        ],
        correct: 1,
        explanation: "Une issue de secours OBSTRUÉE est une infraction grave. Action immédiate : libérer l'issue, puis tracer sur la main courante."
      },
      {
        theme: "UV8 · Module professionnel",
        q: "L'équipement de base d'un APS comprend :",
        options: [
          "Un gilet pare-balles et une arme",
          "Un talkie-walkie et une lampe torche",
          "Un téléphone personnel uniquement",
          "Une carte de visite"
        ],
        correct: 1,
        explanation: "Équipement standard : radio (talkie-walkie), lampe torche, carnet/stylo, carte pro, badges/clés. Pas d'arme sans mention spéciale."
      },
      {
        theme: "UV8 · Module professionnel",
        q: "La carte de service d'un agent comporte :",
        options: [
          "Nom, prénom, âge, adresse",
          "Nom, prénom, fonction, numéro CNAPS",
          "Nom, âge, numéro CNAPS",
          "Nom, prénom, adresse"
        ],
        correct: 1,
        explanation: "Carte pro CNAPS : nom, prénom, photo, fonction, numéro CNAPS, date de validité. PAS d'adresse personnelle (vie privée)."
      },
      {
        theme: "UV8 · Module professionnel",
        q: "Une ronde aléatoire est :",
        options: [
          "Une ronde avec itinéraire précis et contrôleur",
          "Une ronde de surveillance sans itinéraire ni horaire déterminés",
          "Une ronde uniquement de nuit",
          "Inexistante"
        ],
        correct: 1,
        explanation: "Ronde aléatoire = sans itinéraire ni horaire fixe. Son imprévisibilité dissuade les malveillants. Opposée à la ronde pointée (avec contrôleur)."
      },
      {
        theme: "UV8 · Module professionnel",
        q: "Le but d'une ronde aléatoire est :",
        options: [
          "Piéger le personnel",
          "Surveiller la température",
          "Prévenir les risques incendie et les actes de malveillance",
          "Faire des heures supplémentaires"
        ],
        correct: 2,
        explanation: "Ronde aléatoire : double objectif = prévention incendie + dissuasion malveillance, par son caractère imprévisible."
      },
      {
        theme: "UV8 · Module professionnel",
        q: "Que doit vérifier un APS lors de la fermeture des locaux ?",
        options: [
          "Que toutes les lumières sont éteintes",
          "Que les ordinateurs sont éteints",
          "Que toutes les issues et points d'accès sont sécurisés",
          "Que les employés sont partis"
        ],
        correct: 2,
        explanation: "Mission principale à la fermeture : sécurisation du site (issues fermées, alarmes activées, points d'accès verrouillés). Le reste relève d'autres services."
      },
      {
        theme: "UV8 · Module professionnel",
        q: "L'agent cynophile :",
        options: [
          "Travaille uniquement la nuit",
          "Travaille avec un chien dressé dont il est propriétaire",
          "Doit avoir une arme",
          "Conduit obligatoirement une voiture de patrouille"
        ],
        correct: 1,
        explanation: "L'agent cynophile travaille avec son chien (propriété ou garde permanente). Carte pro avec mention 'cynophile', chien assuré, vacciné, identifié."
      },
      {
        theme: "UV8 · Module professionnel",
        q: "Lors de la prise de service, l'APS doit :",
        options: [
          "Commencer directement les rondes",
          "Lire les consignes, vérifier le matériel, contrôler le SSI, ouvrir la main courante",
          "Attendre le client",
          "Prendre un café"
        ],
        correct: 1,
        explanation: "Prise de service standard : 1) lecture consignes journalières, 2) vérification matériel (présence/quantité/état), 3) contrôle SSI (voyants, test signalisation), 4) ouverture main courante avec anomalies constatées."
      }
    ]
  },

  // ============================================================
  // UV 9 · PALPATION & INSPECTION DES BAGAGES (10 questions)
  // ============================================================
  {
    id: "uv9",
    code: "UV 9",
    title: "Palpation & inspection des bagages",
    subtitle: "Cadre légal et procédure",
    questionCount: 10,
    questions: [
      {
        theme: "UV9 · Palpation",
        q: "Le but de la palpation de sécurité est :",
        options: [
          "Vérifier que les personnes ne volent pas",
          "Détecter sur une personne des objets illicites ou dangereux",
          "Rassurer les visiteurs",
          "Montrer que la sécurité est faite"
        ],
        correct: 1,
        explanation: "Article L613-2 CSI : la palpation a pour but de détecter les objets illicites/dangereux (armes, explosifs). Pas un contrôle anti-vol."
      },
      {
        theme: "UV9 · Palpation",
        q: "Pour effectuer une palpation, l'agent doit :",
        options: [
          "Avoir 1 an d'ancienneté",
          "Porter des gants",
          "Être accompagné d'un autre agent",
          "Avoir suivi une formation à cette tâche (mention sur carte pro)"
        ],
        correct: 3,
        explanation: "L'APS doit être titulaire de la mention 'palpation' sur sa carte pro, ce qui implique une formation spécifique."
      },
      {
        theme: "UV9 · Palpation",
        q: "Le consentement de la personne palpée est :",
        options: [
          "Facultatif",
          "Obligatoire (sauf circonstances particulières d'événement)",
          "Jamais demandé",
          "Demandé par écrit uniquement"
        ],
        correct: 1,
        explanation: "Consentement obligatoire (oral ou écrit). Sans consentement = pas de palpation. En cas de refus, refus d'accès au site possible."
      },
      {
        theme: "UV9 · Palpation",
        q: "La différence principale entre palpation et fouille est :",
        options: [
          "Aucune différence",
          "La palpation se fait sans contact",
          "La fouille est plus invasive et nécessite l'intervention des forces de l'ordre",
          "La fouille concerne uniquement les véhicules"
        ],
        correct: 2,
        explanation: "Palpation : par-dessus les vêtements, avec consentement, par APS formé. Fouille : acte de police judiciaire, fouille dans les vêtements/poches, OPJ uniquement."
      },
      {
        theme: "UV9 · Palpation",
        q: "L'agent peut-il fouiller une personne suspectée de vol ?",
        options: [
          "Oui, c'est son devoir",
          "Oui, sur ordre du directeur",
          "Non, c'est un acte de police judiciaire réservé à l'OPJ",
          "Oui en flagrant délit"
        ],
        correct: 2,
        explanation: "L'APS n'a JAMAIS le droit de fouiller. La fouille est un acte de PJ réservé à un OPJ. L'APS peut seulement palper avec consentement (L613-2 CSI)."
      },
      {
        theme: "UV9 · Palpation",
        q: "La limite de la palpation est :",
        options: [
          "L'agent peut retirer les vêtements",
          "L'agent peut fouiller les poches",
          "L'agent doit s'assurer de ne pas porter atteinte à la dignité de la personne",
          "L'agent peut utiliser des outils"
        ],
        correct: 2,
        explanation: "La palpation se fait par-dessus les vêtements, sans porter atteinte à la dignité. Pas de retrait de vêtements, pas de fouille des poches (sauf demande à la personne de les vider elle-même)."
      },
      {
        theme: "UV9 · Palpation",
        q: "La palpation est autorisée :",
        options: [
          "Toujours dès que l'agent en ressent le besoin",
          "Lorsqu'il y a soupçon raisonnable de possession d'objets dangereux",
          "Après avoir informé la police",
          "En cas de refus de coopérer"
        ],
        correct: 1,
        explanation: "Conditions : circonstances particulières (événement déclaré, niveau Vigipirate renforcé) OU soupçon raisonnable. Toujours avec consentement."
      },
      {
        theme: "UV9 · Palpation",
        q: "La palpation doit être effectuée :",
        options: [
          "Par n'importe quel agent disponible",
          "De préférence par un agent du même sexe que la personne palpée",
          "Toujours par un homme",
          "Toujours par une femme"
        ],
        correct: 1,
        explanation: "Règle de bon sens et de respect : palpation par un agent du même sexe (sauf impossibilité opérationnelle), pour respecter la dignité et la pudeur."
      },
      {
        theme: "UV9 · Palpation",
        q: "L'inspection visuelle des bagages :",
        options: [
          "Permet de fouiller à l'intérieur",
          "Consiste à demander au visiteur d'ouvrir son sac et de regarder visuellement le contenu",
          "Nécessite un OPJ",
          "Est interdite en France"
        ],
        correct: 1,
        explanation: "L'APS demande à la personne d'OUVRIR ELLE-MÊME son bagage. L'agent regarde visuellement, sans toucher au contenu. Le consentement est obligatoire."
      },
      {
        theme: "UV9 · Palpation",
        q: "En cas de refus de palpation/inspection par le visiteur :",
        options: [
          "On le palpe quand même",
          "On l'oblige par la force",
          "On lui refuse l'accès au site",
          "On le laisse entrer"
        ],
        correct: 2,
        explanation: "Refus de palpation = refus d'accès. C'est le seul recours légal. Forcer = délit pour l'agent (atteinte à l'intégrité physique)."
      }
    ]
  },

  // ============================================================
  // UV 10-12-14 · SURVEILLANCE / ÉVÉNEMENTIEL / INDUSTRIEL (15 questions)
  // ============================================================
  {
    id: "uv10-12-14",
    code: "UV 10-12-14",
    title: "Surveillance électronique, événementiel, industriel",
    subtitle: "Vidéosurveillance, anti-intrusion, événements, sites industriels",
    questionCount: 15,
    questions: [
      {
        theme: "UV10-12-14 · Surveillance",
        q: "La durée maximale de conservation des enregistrements vidéo est :",
        options: [
          "1 mois minimum",
          "1 an",
          "Pas de durée imposée",
          "1 mois maximum (sauf enquête judiciaire en cours)"
        ],
        correct: 3,
        explanation: "Article L252-5 CSI : durée légale = 1 mois MAXIMUM. Au-delà, suppression obligatoire, sauf réquisition judiciaire en cours."
      },
      {
        theme: "UV10-12-14 · Surveillance",
        q: "Les systèmes de détection anti-intrusion sont :",
        options: [
          "Périphériques, circulaires, ponctuels",
          "Infrarouge, discrets, sonores",
          "Périphériques, périmétriques, volumétriques",
          "Aucun"
        ],
        correct: 2,
        explanation: "3 types : PÉRIPHÉRIQUE (clôture), PÉRIMÉTRIQUE (portes/fenêtres, contacts magnétiques), VOLUMÉTRIQUE (détecteurs IR de mouvement intérieurs)."
      },
      {
        theme: "UV10-12-14 · Surveillance",
        q: "Un détecteur de mouvement sert à :",
        options: [
          "Détecter la température",
          "Détecter les mouvements suspects dans une zone protégée",
          "Enregistrer les conversations",
          "Surveiller le bruit"
        ],
        correct: 1,
        explanation: "Détecteur volumétrique (IR passif ou hyperfréquence) qui détecte les déplacements humains dans un volume protégé."
      },
      {
        theme: "UV10-12-14 · Surveillance",
        q: "Le rôle de la CNIL concernant la vidéosurveillance est :",
        options: [
          "Installer les caméras",
          "Contrôler la conformité des systèmes avec la réglementation sur les données personnelles",
          "Former les agents",
          "Délivrer les autorisations préfectorales"
        ],
        correct: 1,
        explanation: "La CNIL contrôle la conformité au RGPD et à la loi I&L. Pas d'installation, pas de formation, pas d'autorisation préfectorale (c'est le préfet)."
      },
      {
        theme: "UV10-12-14 · Surveillance",
        q: "L'intérêt de la biométrie dans le contrôle d'accès est :",
        options: [
          "Identifier les personnes par leurs caractéristiques physiques uniques",
          "Mesurer la température",
          "Remplacer les caméras",
          "Accélérer les passages"
        ],
        correct: 0,
        explanation: "Biométrie = identification par caractéristiques uniques (empreinte, iris, visage). Soumise à autorisation CNIL renforcée (donnée sensible)."
      },
      {
        theme: "UV10-12-14 · Surveillance",
        q: "L'objectif d'un contrôle aléatoire des sacs à l'entrée d'un site sécurisé est :",
        options: [
          "Réduire le nombre de visiteurs",
          "Prévenir l'introduction d'objets dangereux ou interdits",
          "Identifier les objets de valeur",
          "Augmenter les files d'attente"
        ],
        correct: 1,
        explanation: "Contrôle aléatoire = prévention par dissuasion et détection des objets interdits/dangereux."
      },
      {
        theme: "UV10-12-14 · Événementiel",
        q: "Une activité dite 'événementielle' correspond à :",
        options: [
          "Industrie chimique, salon agricole, match",
          "Salon de l'habitat, meeting politique, manifestation sportive",
          "Établissement scolaire, exposition permanente",
          "Pot d'adieu privé au bureau"
        ],
        correct: 1,
        explanation: "Activité événementielle = manifestations TEMPORAIRES rassemblant du public (salons, meetings, événements sportifs). Pas les ERP permanents (école, industrie)."
      },
      {
        theme: "UV10-12-14 · Événementiel",
        q: "Lors d'un événement, la palpation est :",
        options: [
          "Interdite",
          "Autorisée par les APS formés et titulaires de la mention",
          "Réservée à la police",
          "Faite par les bénévoles"
        ],
        correct: 1,
        explanation: "Lors d'événements déclarés, les APS formés (mention 'palpation') peuvent palper avec consentement, dans des conditions encadrées par arrêté préfectoral."
      },
      {
        theme: "UV10-12-14 · Industriel",
        q: "La norme d'étiquetage des produits dangereux est :",
        options: ["IP2X", "IP3X", "SGH", "Aucune"],
        correct: 2,
        explanation: "SGH (Système Général Harmonisé) = norme internationale d'étiquetage des produits chimiques dangereux. IPxX concerne l'étanchéité électrique."
      },
      {
        theme: "UV10-12-14 · Industriel",
        q: "Sur un CMSI, un voyant rouge clignotant signifie :",
        options: [
          "Tout va bien",
          "Position d'attente d'un DAS — il faut télécommander le DAS via l'UCMC",
          "Panne secteur",
          "Test périodique"
        ],
        correct: 1,
        explanation: "Voyant rouge clignotant = un Dispositif Actionné de Sécurité (DAS) est en position d'attente. Action immédiate : télécommande UCMC pour mise en sécurité."
      },
      {
        theme: "UV10-12-14 · Industriel",
        q: "Un POI (Plan d'Opération Interne) est mis en place par :",
        options: [
          "L'exploitant du site",
          "Le préfet",
          "Le maire",
          "Le ministre de l'intérieur"
        ],
        correct: 0,
        explanation: "POI = INTERNE, mis en place par l'EXPLOITANT du site (ICPE, sites Seveso). Le PPI (Plan Particulier d'Intervention) lui est mis en place par le PRÉFET."
      },
      {
        theme: "UV10-12-14 · Industriel",
        q: "Les 3 catégories de risques majeurs sont :",
        options: [
          "Naturel, technologique, transports collectifs",
          "Eau, feu, terre",
          "Chômage, crise, guerre",
          "Politique, économique, social"
        ],
        correct: 0,
        explanation: "Risques majeurs : NATURELS (inondation, séisme), TECHNOLOGIQUES (industriel, nucléaire), liés aux TRANSPORTS COLLECTIFS."
      },
      {
        theme: "UV10-12-14 · Surveillance",
        q: "Les éclairages de sécurité dans un ERP doivent avoir une autonomie minimale de :",
        options: ["30 minutes", "1 heure", "4 heures", "24 heures"],
        correct: 1,
        explanation: "Autonomie minimum 1 HEURE pour les éclairages de sécurité (ambiance antipanique + évacuation), permettant l'évacuation complète."
      },
      {
        theme: "UV10-12-14 · Surveillance",
        q: "Le SDI (Système de Détection Incendie) :",
        options: [
          "Est un type d'extincteur",
          "Détecte automatiquement le feu via DAI (Détecteurs Automatiques d'Incendie)",
          "Est une alarme manuelle uniquement",
          "Sert pour les intrusions"
        ],
        correct: 1,
        explanation: "SDI = ensemble des dispositifs détectant un feu : DAI (fumée, chaleur, flamme), DM (déclencheurs manuels), tableau de signalisation. Composante du SSI catégorie A."
      },
      {
        theme: "UV10-12-14 · Industriel",
        q: "Un agent de sécurité doit savoir lire un plan pour repérer :",
        options: [
          "Les moyens de secours et les accès uniquement",
          "Les divers locaux à risques, les accès, les moyens de secours, les circuits de rondes",
          "Les issues et extincteurs uniquement",
          "Aucune utilité"
        ],
        correct: 1,
        explanation: "Réponse complète : locaux à risques + accès + moyens de secours + circuits de rondes. Indispensable pour guider les pompiers et organiser les rondes."
      }
    ]
  },

  // ============================================================
  // UV 11 · PREMIERS SECOURS (8 questions)
  // ============================================================
  {
    id: "uv11",
    code: "UV 11",
    title: "Premiers secours",
    subtitle: "PAS, PLS, DAE, hémorragies, brûlures",
    questionCount: 8,
    questions: [
      {
        theme: "UV11 · Premiers secours",
        q: "L'acronyme PAS signifie :",
        options: [
          "Police, Ambulance, Secours",
          "Protéger, Alerter, Secourir",
          "Prévenir, Anticiper, Sécuriser",
          "Position, Action, Surveillance"
        ],
        correct: 1,
        explanation: "PAS = Protéger (la victime, les témoins, soi-même), Alerter (les secours), Secourir (premier secours). Conduite à tenir face à toute situation d'urgence."
      },
      {
        theme: "UV11 · Premiers secours",
        q: "Face à une personne inconsciente qui respire, on adopte :",
        options: [
          "Position assise",
          "Position Latérale de Sécurité (PLS)",
          "Position allongée sur le dos",
          "Position debout"
        ],
        correct: 1,
        explanation: "PLS = maintient les voies aériennes libres, évite l'étouffement par la langue ou les sécrétions chez une personne inconsciente qui respire."
      },
      {
        theme: "UV11 · Premiers secours",
        q: "Le rythme du massage cardiaque chez l'adulte est :",
        options: [
          "60 par minute",
          "80 par minute",
          "100 à 120 par minute",
          "150 par minute"
        ],
        correct: 2,
        explanation: "100 à 120 compressions/minute, profondeur 5-6 cm. Tempo de la chanson 'Stayin' Alive' des Bee Gees."
      },
      {
        theme: "UV11 · Premiers secours",
        q: "Le DAE est :",
        options: [
          "Dispositif d'Alerte Électronique",
          "Défibrillateur Automatisé Externe",
          "Détecteur Automatique d'Évacuation",
          "Diagnostic Avancé d'Extincteur"
        ],
        correct: 1,
        explanation: "DAE = appareil délivrant un choc électrique en cas d'arrêt cardiaque. Utilisable par TOUS, même non formés. Obligatoire dans les ERP catégorie 1 à 3."
      },
      {
        theme: "UV11 · Premiers secours",
        q: "Face à une hémorragie externe, le geste prioritaire est :",
        options: [
          "Faire un garrot immédiatement",
          "Compression manuelle directe sur la plaie",
          "Soulever le membre",
          "Donner à boire"
        ],
        correct: 1,
        explanation: "Compression manuelle directe en PREMIER (avec tissu propre). Le garrot est en DERNIER recours, quand la compression est impossible ou inefficace."
      },
      {
        theme: "UV11 · Premiers secours",
        q: "Face à une douleur thoracique avec essoufflement, l'APS doit :",
        options: [
          "Donner de l'aspirine",
          "L'allonger et appeler le 15",
          "L'asseoir, la rassurer, l'empêcher de bouger, alerter le 15",
          "La faire marcher"
        ],
        correct: 2,
        explanation: "Suspicion d'infarctus : position assise/demi-assise (PAS allongée), repos absolu, alerter le 15. L'allonger aggrave la détresse respiratoire."
      },
      {
        theme: "UV11 · Premiers secours",
        q: "Le numéro du SAMU est :",
        options: ["15", "17", "18", "112"],
        correct: 0,
        explanation: "15 = SAMU (médical). 17 = Police, 18 = Pompiers, 112 = numéro d'urgence européen."
      },
      {
        theme: "UV11 · Premiers secours",
        q: "Face à une brûlure thermique, le premier geste est :",
        options: [
          "Appliquer une pommade",
          "Refroidir à l'eau tempérée (15°C) pendant 15-20 min, à 15 cm",
          "Percer les cloques",
          "Appliquer du beurre ou de la glace"
        ],
        correct: 1,
        explanation: "Règle des 3×15 : eau à 15°C, 15 minutes, à 15 cm. JAMAIS de glace (gelures), de beurre, de pommade. Ne pas percer les cloques."
      }
    ]
  }

];

// ============================================================
// FONCTIONS DE BRANCHEMENT
// ============================================================

// Stocke la progression UV par UV (à part du state global pour ne pas polluer)
const examenOfficielState = {
  currentUV: null,           // UV en cours
  results: {},               // { uv2: { score: 13, total: 15, validated: true }, ... }
  fullExamMode: false        // mode examen complet 103Q ou UV par UV
};

// Charge la progression depuis localStorage
function loadExamenOfficielState() {
  try {
    const raw = localStorage.getItem('tfp_examen_officiel');
    if (raw) {
      const data = JSON.parse(raw);
      examenOfficielState.results = data.results || {};
    }
  } catch(e) {}
}

function saveExamenOfficielState() {
  try {
    localStorage.setItem('tfp_examen_officiel', JSON.stringify({
      results: examenOfficielState.results
    }));
  } catch(e) {}
}

// Démarre une UV individuelle
function startExamenUV(uvId) {
  const uv = examenOfficielUVs.find(u => u.id === uvId);
  if (!uv) return;

  examenOfficielState.currentUV = uvId;
  examenOfficielState.fullExamMode = false;

  state.mode = 'examen-uv';
  state.currentIndex = 0;
  state.score = 0;
  state.answers = [];
  state.quiz = [...uv.questions]; // ordre figé

  const timerEl = document.getElementById('timer');
  if (timerEl) timerEl.style.display = 'none';

  if (typeof showScreen === 'function') showScreen('quizScreen');
  if (typeof renderQuestion === 'function') renderQuestion();
}

// Démarre l'examen complet 103 questions (chronométré 2h, ordre exact)
function startExamenComplet() {
  examenOfficielState.currentUV = null;
  examenOfficielState.fullExamMode = true;

  // Concatène toutes les questions dans l'ordre des UV
  const allQuestions = examenOfficielUVs.flatMap(uv => uv.questions);

  state.mode = 'examen-complet';
  state.currentIndex = 0;
  state.score = 0;
  state.answers = [];
  state.quiz = allQuestions; // 103 questions, ordre exact

  // Timer 2h
  const timerEl = document.getElementById('timer');
  if (timerEl) {
    timerEl.style.display = 'block';
    state.timeLeft = 2 * 60 * 60; // 2h en secondes
    if (typeof updateTimer === 'function') updateTimer();
    if (typeof tickTimer === 'function') {
      if (state.timer) clearInterval(state.timer);
      state.timer = setInterval(tickTimer, 1000);
    }
  }

  if (typeof showScreen === 'function') showScreen('quizScreen');
  if (typeof renderQuestion === 'function') renderQuestion();
}

// Affiche le menu de l'examen officiel (UV par UV ou complet)
function showExamenOfficiel() {
  loadExamenOfficielState();

  let screen = document.getElementById('examenOfficielScreen');
  if (!screen) {
    screen = document.createElement('section');
    screen.id = 'examenOfficielScreen';
    screen.className = 'fiche-detail';
    document.querySelector('main').appendChild(screen);
  }

  const totalQuestions = examenOfficielUVs.reduce((acc, uv) => acc + uv.questions.length, 0);
  const validatedUVs = Object.values(examenOfficielState.results).filter(r => r.validated).length;
  const totalUVs = examenOfficielUVs.length;
  const overallPercent = Math.round((validatedUVs / totalUVs) * 100);

  screen.innerHTML = `
    <div class="hero" style="margin-bottom: 2rem;">
      <span class="hero-tag" style="background: linear-gradient(135deg, var(--gold), #d9b98c);">Examen Officiel · Reconstitution</span>
      <h1>Le <em>vrai examen</em>.<br>${totalQuestions} questions, ${totalUVs} UV.</h1>
      <p>Reconstitution complète de l'épreuve théorique TFP APS selon le référentiel CPNEFP. Chaque UV doit être validée avec une note ≥ 12/20. Refaire l'examen complet en conditions réelles, ou s'entraîner UV par UV.</p>
    </div>

    <div class="progress-section" style="margin-bottom: 2.5rem;">
      <div class="progress-header">
        <div class="progress-title">UV <em>validées</em></div>
        <div class="progress-meta">${validatedUVs} / ${totalUVs}</div>
      </div>
      <div class="parcours-progress-bar" style="margin-top: 1rem;">
        <div class="parcours-progress-fill" style="width: ${overallPercent}%"></div>
      </div>
    </div>

    <div class="section-heading">Mode complet · Conditions réelles</div>
    <p style="color: var(--text-dim); font-size: 0.9rem; margin-bottom: 1.5rem;">
      ${totalQuestions} questions enchaînées dans l'ordre exact du référentiel. Timer 2h. Aucune correction avant la fin.
      <strong>Validation requise : 12/20 sur CHAQUE UV</strong> (pas de moyenne globale).
    </p>
    <div class="modes" style="margin-bottom: 3rem;">
      <button class="mode-card" onclick="startExamenComplet()" style="border-color: var(--gold); position: relative;">
        <div class="mode-number" style="color: var(--gold);">EXAMEN</div>
        <div class="mode-title">Le vrai examen<br>· ${totalQuestions} questions</div>
        <div class="mode-desc">2 heures · Ordre figé · Reproduction exacte de l'épreuve réelle. Note ≥ 12/20 sur chaque UV.</div>
        <div class="mode-meta" style="color: var(--gold);">Démarrer l'examen →</div>
      </button>
    </div>

    <div class="section-heading">Mode entraînement · UV par UV</div>
    <p style="color: var(--text-dim); font-size: 0.9rem; margin-bottom: 1.5rem;">
      Travaille chaque UV individuellement, sans timer, avec corrections détaillées après chaque question.
    </p>
    <div class="modes">
      ${examenOfficielUVs.map(uv => {
        const result = examenOfficielState.results[uv.id];
        let badge = '';
        if (result) {
          const note = (result.score / result.total * 20).toFixed(1);
          const validated = result.validated;
          badge = `<div style="position: absolute; top: 1rem; right: 1rem; padding: 0.3rem 0.6rem; border-radius: 999px; font-size: 0.7rem; font-weight: 600; background: ${validated ? 'rgba(110,231,168,0.15)' : 'rgba(252,200,100,0.15)'}; color: ${validated ? '#6ee7a8' : '#fcc864'};">${note}/20 ${validated ? '✓' : ''}</div>`;
        }
        return `
          <button class="mode-card" onclick="startExamenUV('${uv.id}')" style="position: relative;">
            ${badge}
            <div class="mode-number">${uv.code}</div>
            <div class="mode-title">${uv.title}</div>
            <div class="mode-desc">${uv.subtitle}</div>
            <div class="mode-meta">${uv.questions.length} questions · S'entraîner</div>
          </button>
        `;
      }).join('')}
    </div>

    <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
      <button class="btn btn-ghost" onclick="showHome()">← Retour à l'accueil</button>
      ${Object.keys(examenOfficielState.results).length > 0 ? `<button class="btn btn-ghost" onclick="resetExamenOfficielResults()" style="color: var(--text-faint);">Réinitialiser les scores</button>` : ''}
    </div>
  `;

  document.querySelectorAll('section').forEach(s => {
    s.classList.remove('active');
    if (s.id !== 'examenOfficielScreen') s.style.display = '';
  });
  screen.classList.add('active');
  screen.style.display = 'block';

  const home = document.getElementById('homeScreen');
  if (home) home.style.display = 'none';

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetExamenOfficielResults() {
  if (!confirm('Réinitialiser tous les scores des UV de l\'examen officiel ?')) return;
  examenOfficielState.results = {};
  saveExamenOfficielState();
  showExamenOfficiel();
}

// Hook : à la fin d'un quiz examen-uv ou examen-complet, sauver les scores
(function patchEndQuizForExamen() {
  // Attendre le chargement complet des autres scripts
  function tryPatch() {
    if (typeof window.endQuiz !== 'function' && typeof window.finishQuiz !== 'function') {
      // Si les fonctions n'existent pas encore ou ont d'autres noms, on hook autrement
      // via un MutationObserver sur le résultats screen
      return;
    }
  }

  // Approche plus robuste : observer le passage à resultsScreen
  const observer = new MutationObserver(() => {
    const results = document.getElementById('resultsScreen');
    if (results && results.classList.contains('active') && state && (state.mode === 'examen-uv' || state.mode === 'examen-complet')) {
      saveCurrentExamScore();
    }
  });

  function startObserver() {
    const results = document.getElementById('resultsScreen');
    if (results) {
      observer.observe(results, { attributes: true, attributeFilter: ['class'] });
    } else {
      setTimeout(startObserver, 300);
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startObserver);
  } else {
    startObserver();
  }
})();

function saveCurrentExamScore() {
  if (!state || !state.quiz) return;

  if (state.mode === 'examen-uv' && examenOfficielState.currentUV) {
    const total = state.quiz.length;
    const score = state.score;
    const note20 = (score / total) * 20;
    examenOfficielState.results[examenOfficielState.currentUV] = {
      score, total,
      note20: note20.toFixed(2),
      validated: note20 >= 12,
      date: new Date().toISOString()
    };
    saveExamenOfficielState();
  } else if (state.mode === 'examen-complet') {
    // Calculer score par UV
    let questionIndex = 0;
    examenOfficielUVs.forEach(uv => {
      let uvScore = 0;
      for (let i = 0; i < uv.questions.length; i++) {
        if (state.answers[questionIndex]) {
          if (state.answers[questionIndex].correct) uvScore++;
        }
        questionIndex++;
      }
      const note20 = (uvScore / uv.questions.length) * 20;
      examenOfficielState.results[uv.id] = {
        score: uvScore,
        total: uv.questions.length,
        note20: note20.toFixed(2),
        validated: note20 >= 12,
        date: new Date().toISOString()
      };
    });
    saveExamenOfficielState();
  }
}

// Patch showHome pour cacher l'écran examen officiel quand on revient
(function patchShowHomeForExamen() {
  function tryPatch() {
    if (typeof window.showHome !== 'function') {
      setTimeout(tryPatch, 200);
      return;
    }
    const original = window.showHome;
    window.showHome = function() {
      const screen = document.getElementById('examenOfficielScreen');
      if (screen) {
        screen.classList.remove('active');
        screen.style.display = 'none';
      }
      const home = document.getElementById('homeScreen');
      if (home) home.style.display = '';
      return original.apply(this, arguments);
    };
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryPatch);
  } else {
    tryPatch();
  }
})();

// Injecte le bouton "Examen Officiel" sur la home (différent du bouton bonus)
(function injectExamenOfficielButton() {
  function tryInject() {
    const home = document.getElementById('homeScreen');
    if (!home) { setTimeout(tryInject, 200); return; }

    const modeGroups = home.querySelectorAll('.modes');
    if (!modeGroups.length) { setTimeout(tryInject, 200); return; }

    // Évite double injection
    if (home.querySelector('.examen-officiel-card')) return;

    // Section dédiée AU-DESSUS du bonus (donc plus visible)
    const heading = document.createElement('div');
    heading.className = 'section-heading';
    heading.innerHTML = 'Examen Officiel <span style="color: var(--text-faint); font-weight: 400; font-size: 0.85rem; letter-spacing: 0;">· Reconstitution complète 103 questions</span>';

    const examGroup = document.createElement('div');
    examGroup.className = 'modes';
    examGroup.innerHTML = `
      <button class="mode-card examen-officiel-card" onclick="showExamenOfficiel()" style="border: 2px solid var(--gold); position: relative; overflow: hidden; background: linear-gradient(135deg, rgba(217,185,140,0.08), transparent);">
        <div class="mode-number" style="color: var(--gold); font-weight: 700;">★ EXAMEN</div>
        <div class="mode-title">Reconstitution<br>complète · 103 Q</div>
        <div class="mode-desc">Toutes les UV du référentiel CPNEFP. Mode entraînement par UV ou examen complet 2h en conditions réelles.</div>
        <div class="mode-meta" style="color: var(--gold);">Découvrir →</div>
      </button>
    `;

    // Insertion : avant la section "Bonus" (qui doit être créée par bonus.js)
    // ou à la fin de la home si pas de bonus
    const bonusHeading = Array.from(home.querySelectorAll('.section-heading')).find(h => h.textContent.includes('Bonus'));
    if (bonusHeading) {
      bonusHeading.parentNode.insertBefore(heading, bonusHeading);
      bonusHeading.parentNode.insertBefore(examGroup, bonusHeading);
    } else {
      // Pas de bonus.js : ajouter à la fin
      const lastGroup = modeGroups[modeGroups.length - 1];
      lastGroup.parentNode.insertBefore(heading, lastGroup.nextSibling);
      lastGroup.parentNode.insertBefore(examGroup, heading.nextSibling);
    }
  }
  // Délai légèrement plus long pour laisser bonus.js s'injecter d'abord
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(tryInject, 100));
  } else {
    setTimeout(tryInject, 100);
  }
})();
