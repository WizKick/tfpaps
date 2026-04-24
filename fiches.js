// ========== FICHES MÉMO ==========
// Synthèses par thème pour révision rapide

const fichesMemo = [
  {
    id: "article-73",
    title: "Article 73 CPP · Appréhension",
    icon: "⚖",
    theme: "Droit",
    key: "LE réflexe à connaître par cœur",
    content: [
      {
        section: "Définition",
        text: "L'article 73 du Code de Procédure Pénale autorise tout citoyen à appréhender l'auteur d'un crime ou délit flagrant puni d'emprisonnement, et à le conduire devant un Officier de Police Judiciaire (OPJ)."
      },
      {
        section: "Conditions cumulatives",
        text: "• Flagrant délit (art. 53 CPP) : en train de commettre / venir de commettre / poursuivi par clameur publique\n• Crime ou délit puni d'emprisonnement\n• Remise sans délai à un OPJ"
      },
      {
        section: "Obligations de l'agent",
        text: "• Prévenir immédiatement un OPJ (pas un APJ)\n• Maintenir sous surveillance jusqu'à l'arrivée de l'OPJ\n• Aucune violence ni humiliation\n• Usage de la force uniquement en légitime défense, proportionné\n• Rédaction d'un rapport détaillé"
      },
      {
        section: "Pièges classiques",
        text: "• Vol ≠ appréhension en surface de vente : attendre le franchissement de la ligne de caisse\n• Appréhension passée (plusieurs jours) = interdite (plus flagrant)\n• Mineur = appel obligatoire aux forces de l'ordre\n• Pas de fouille : seul un OPJ peut fouiller"
      }
    ]
  },
  {
    id: "triangle-feu",
    title: "Triangle du feu · Combustion",
    icon: "🔥",
    theme: "Incendie",
    key: "Base de toute formation sécurité incendie",
    content: [
      {
        section: "Les 3 éléments",
        text: "Combustible + Comburant + Énergie d'activation = Feu\n\n• Combustible : matière qui brûle (bois, essence, gaz)\n• Comburant : oxygène de l'air (21%)\n• Énergie : source de chaleur suffisante (étincelle, flamme)"
      },
      {
        section: "Modes de propagation",
        text: "• Conduction : transmission dans la masse d'un matériau solide\n• Convection : déplacement de gaz/air chauds (verticale)\n• Rayonnement : ondes thermiques à distance\n• Projection : étincelles, particules enflammées"
      },
      {
        section: "Classes de feu",
        text: "• Classe A : solides (bois, papier, tissu) → eau\n• Classe B : liquides inflammables (essence, huile) → mousse, CO₂, poudre\n• Classe C : gaz → poudre, couper l'arrivée\n• Classe D : métaux → poudre spéciale\n• Classe F : huiles de cuisson → extincteur spécial classe F"
      },
      {
        section: "Choix extincteur",
        text: "• Local électrique → CO₂ (non conducteur, distance < 1m)\n• Solides courants → eau pulvérisée + additif\n• Polyvalent → poudre ABC (agit par inhibition + étouffement)\n• Cuisine → classe F uniquement"
      }
    ]
  },
  {
    id: "ssi",
    title: "SSI · Système de Sécurité Incendie",
    icon: "⚠",
    theme: "Incendie",
    key: "Catégories et composants essentiels",
    content: [
      {
        section: "Définition",
        text: "Ensemble de matériel qui collecte les informations sur un incendie, les traite, et met en sécurité l'établissement."
      },
      {
        section: "5 catégories (du + sévère au - sévère)",
        text: "• SSI A : le plus complet, avec DAI (Détecteurs Automatiques d'Incendie)\n• SSI B : sans DAI\n• SSI C, D, E : niveaux décroissants\n\nObligatoire en catégorie A : IGH + ERP avec locaux à sommeil (hôtels, hôpitaux)"
      },
      {
        section: "Composants",
        text: "• SDI : Système de Détection Incendie (détecteurs + DM)\n• SMSI : Système de Mise en Sécurité Incendie\n  - CMSI : Centralisateur de Mise en Sécurité Incendie\n  - UCMC : Unité de Commande Manuelle Centralisée (dans le CMSI)\n  - DAS : Dispositifs Actionnés de Sécurité (clapets, portes coupe-feu)\n  - UAE : Unité d'Aide à l'Exploitation"
      },
      {
        section: "Voyants CMSI",
        text: "• Vert fixe : sous tension, tout va bien\n• Jaune fixe : dérangement → noter MC + appeler technicien\n• Jaune clignotant : défaut position d'attente → réarmer le DAS\n• Rouge clignotant : utiliser UCMC + télécommander le DAS en position sécurité"
      }
    ]
  },
  {
    id: "palpation",
    title: "Palpation de sécurité",
    icon: "✋",
    theme: "Intervention",
    key: "Conditions strictes et limites",
    content: [
      {
        section: "Conditions",
        text: "• Formation spécifique suivie (obligatoire)\n• Consentement exprès de la personne\n• Soupçon raisonnable ou cadre prévu (Vigipirate, grand événement)\n• De préférence par une personne du même sexe\n• En un lieu préservant la dignité"
      },
      {
        section: "Exécution",
        text: "• Tapotage PAR-DESSUS les vêtements\n• Objectif : détecter armes, objets dangereux/illicites\n• Jamais retirer les vêtements\n• Jamais utiliser d'outils pour explorer"
      },
      {
        section: "Palpation vs Fouille",
        text: "• Palpation : par APS formé, par-dessus vêtements, consentement\n• Fouille au corps : inspection approfondie des vêtements + effets\n• Fouille = réservée aux OPJ (forces de l'ordre)\n• Fouille par APS possible uniquement en flagrant délit (art. 53 CPP)"
      },
      {
        section: "Refus",
        text: "En cas de refus de palpation → refus d'accès au site si prévu dans les consignes. L'agent ne peut jamais imposer la palpation par la force."
      }
    ]
  },
  {
    id: "cnaps",
    title: "CNAPS & Carte professionnelle",
    icon: "🎖",
    theme: "Cadre légal",
    key: "Qui délivre quoi",
    content: [
      {
        section: "CNAPS",
        text: "Conseil National des Activités Privées de Sécurité. Établissement public rattaché au ministère de l'Intérieur.\n\nMissions :\n• Réguler la profession\n• Contrôler les entreprises et agents\n• Sanctionner les manquements\n• Délivrer les cartes professionnelles"
      },
      {
        section: "Carte professionnelle",
        text: "• Obligatoire pour exercer\n• Délivrée par le CNAPS\n• Valable 5 ans (renouvelable)\n• Contient : nom, prénom, fonction, n° CNAPS\n• JAMAIS : adresse, âge, photo hors carte"
      },
      {
        section: "Conditions d'obtention",
        text: "• Casier judiciaire vierge (bulletin n°2)\n• Formation TFP APS validée (175h)\n• Aptitude professionnelle et physique\n• Être majeur\n• Autorisation de travail en France"
      },
      {
        section: "Sanctions",
        text: "• Exercer sans carte pro : 3 ans prison + 45 000€ (art. L.617-1 CSI)\n• Violation secret professionnel : 1 an prison + 15 000€ (art. 226-13 CP)\n• Le Préfet peut consulter le Bulletin n°1 du casier judiciaire"
      }
    ]
  },
  {
    id: "main-courante",
    title: "Main courante & Rapports",
    icon: "📋",
    theme: "Administratif",
    key: "L'outil de traçabilité quotidien",
    content: [
      {
        section: "Main courante",
        text: "Registre chronologique de la vacation.\n\n• Forme : manuscrite OU informatisée (pas orale, pas virtuelle)\n• Format horaire : 24h (20h00 et non 8h du soir)\n• Tenue : quotidienne, précise, objective\n• Contenu : prise/fin de service, rondes, anomalies, incidents, visites"
      },
      {
        section: "Types de rapports",
        text: "• Rapport d'anomalie : dysfonctionnements techniques constatés en ronde\n• Rapport d'incident : événement grave (agression, vol, intrusion)\n• Rapport de fin de vacation : synthèse globale\n• Rapport d'appréhension : suite à art. 73 CPP"
      },
      {
        section: "Règles de rédaction",
        text: "• Qui, Quoi, Où, Quand, Comment, Pourquoi (QQOQCP)\n• Faits objectifs uniquement (pas d'interprétation)\n• Signalement neutre : sexe, taille, corpulence, tenue\n• JAMAIS : nationalité, religion, état de santé"
      }
    ]
  },
  {
    id: "ronde",
    title: "Rondes de sécurité",
    icon: "🚶",
    theme: "Opérationnel",
    key: "Le cœur du métier",
    content: [
      {
        section: "Types de rondes",
        text: "• Ouverture / fermeture\n• Préventive (générale)\n• Surveillance incendie\n• Technique (vérif équipements)\n• Aléatoire : sans itinéraire fixe, pour déjouer les observations"
      },
      {
        section: "Objectifs",
        text: "• Prévenir les risques incendie\n• Détecter les actes de malveillance\n• Vérifier la vacuité des dégagements\n• Contrôler les moyens d'extinction\n• Contrôler l'éclairage (normal + sécurité)\n• Signaler toute anomalie"
      },
      {
        section: "Équipement",
        text: "• Radio émetteur-récepteur (talkie)\n• Lampe torche\n• Contrôleur de ronde (pour rondes pointées)\n• Stylo + carnet\n• Clés / badge / pass\n• DATI si travailleur isolé"
      },
      {
        section: "Lecture de plan",
        text: "Un APS doit savoir repérer sur un plan :\n• Les locaux à risques\n• Les accès et issues\n• Les moyens de secours (extincteurs, RIA, téléphones)\n• Les circuits de rondes"
      }
    ]
  },
  {
    id: "extincteurs",
    title: "Contrôle des extincteurs",
    icon: "🧯",
    theme: "Incendie",
    key: "Méthode de vérification en 5 points",
    content: [
      {
        section: "Les 5 points de contrôle",
        text: "1. Présent, accroché et accessible\n2. Correspond à la signalétique (agent + classes de feu)\n3. Goupille de sécurité + scellé présents\n4. État général (corps sans choc, flexible sans fissure)\n5. Date de vérification réglementaire à jour"
      },
      {
        section: "Périodicité vérifications",
        text: "• Quotidienne : par l'APS en ronde\n• Annuelle : par une société agréée (organisme certifié)\n• Décennale : maintenance approfondie\n\nEn cas de défaut → signalement main courante + rapport d'anomalie"
      },
      {
        section: "Distances d'attaque",
        text: "• CO₂ : < 1 mètre (cône gazeux court)\n• Eau pulvérisée : 2 à 3 mètres\n• Poudre : 3 à 4 mètres\n• Attention CO₂ : risque brûlure par le froid sur les mains"
      }
    ]
  },
  {
    id: "desenfumage",
    title: "Désenfumage & Compartimentage",
    icon: "💨",
    theme: "Incendie",
    key: "Protection passive et active",
    content: [
      {
        section: "Méthodes de désenfumage",
        text: "• Balayage de l'espace : naturel, par tirage thermique\n• Différence de pression : mécanique (ventilateurs)\n• Combinaison des deux : systèmes mixtes"
      },
      {
        section: "Éléments de construction",
        text: "• Pare-flammes (E) : résistance aux flammes\n• Coupe-feu (REI) : Résistance + Étanchéité + Isolation thermique\n• Classement européen : inflammabilité + fumées (s) + gouttes enflammées (d)"
      },
      {
        section: "Éclairage de sécurité",
        text: "• Éclairage d'ambiance : antipanique\n• Éclairage d'évacuation : balisage des sorties\n• Autonomie minimale : 1 heure en ERP\n• Se déclenche automatiquement en cas de coupure"
      }
    ]
  },
  {
    id: "conflit",
    title: "Gestion de conflit",
    icon: "🤝",
    theme: "Relationnel",
    key: "Désescalade avant tout",
    content: [
      {
        section: "Définition",
        text: "Un conflit = situation de blocage entre au moins 2 personnes, avec opposition d'intérêts, de valeurs ou de perceptions."
      },
      {
        section: "Rôle de l'APS",
        text: "CONCILIATEUR — jamais bagarreur, jamais dictateur.\n\n• Désamorcer avant d'intervenir\n• Garder ses distances (zone de sécurité)\n• Parler calmement, posément\n• Proposer des solutions\n• Ne pas imposer (sauf danger)"
      },
      {
        section: "Techniques de désescalade",
        text: "• Écoute active\n• Reformulation\n• Questionnement ouvert\n• Posture ouverte, non menaçante\n• Ne jamais toucher l'interlocuteur\n• Isoler les parties si possible"
      },
      {
        section: "Refus & limites",
        text: "Oui, on peut dire NON à une demande, même d'un client.\nExemple : directeur qui demande de ranger des caddies = délit de marchandage potentiel. On rend compte à son chef d'équipe."
      }
    ]
  },
  {
    id: "droit-travail",
    title: "Droit du travail APS",
    icon: "📜",
    theme: "Cadre légal",
    key: "Tes droits et protections",
    content: [
      {
        section: "Droit de retrait",
        text: "Le salarié peut quitter son poste en cas de danger grave et imminent pour sa vie ou sa santé.\n\n• Sans sanction possible\n• Informer immédiatement la hiérarchie\n• Le danger doit être réel ou sérieusement supposé"
      },
      {
        section: "Accident du travail",
        text: "Tout accident survenant :\n• Pendant les heures de travail (sur le site)\n• Sur le trajet domicile-travail DIRECT\n\nÀ déclarer à l'employeur dans les 24h."
      },
      {
        section: "DATI",
        text: "Dispositif d'Alarme pour Travailleur Isolé.\nObligatoire pour travailleur seul sur site.\n\nFonctions :\n• Bouton de détresse\n• Détection de chute (homme mort)\n• Détection d'absence de mouvement\n• Transmet alerte à une centrale"
      },
      {
        section: "Convention collective",
        text: "Contient :\n• Grilles de salaire et coefficients\n• Primes (nuit, fériés, cynophile, panier)\n• Durée du travail, congés\n• Conditions d'embauche\n\nNE contient PAS : bulletins de salaire, couleur des tenues"
      }
    ]
  },
  {
    id: "videosurveillance",
    title: "Vidéosurveillance & CNIL",
    icon: "📹",
    theme: "Réglementaire",
    key: "RGPD et protection des données",
    content: [
      {
        section: "Rôle de la CNIL",
        text: "Commission Nationale de l'Informatique et des Libertés.\n\n• Contrôle la conformité RGPD\n• Protège les données personnelles\n• À informer lors de l'installation/modification d'un système\n• Sanctionne les abus"
      },
      {
        section: "Conservation des images",
        text: "• Durée maximum : 1 mois\n• Exception : enquête judiciaire (prolongation possible)\n• Accès restreint aux personnes habilitées\n• Affichage obligatoire de la présence de caméras"
      },
      {
        section: "Systèmes anti-intrusion",
        text: "Les 3 types de détection :\n• Périphérique : limites de la propriété (barrière, clôture)\n• Périmétrique : enveloppe du bâtiment (contacts ouverture)\n• Volumétrique : intérieur (détecteurs IR, volumétriques)"
      }
    ]
  },
  {
    id: "prise-service",
    title: "Prise de service APS/SSIAP",
    icon: "🚪",
    theme: "Opérationnel",
    key: "Procédure à suivre à la lettre",
    content: [
      {
        section: "Contrôles extérieurs",
        text: "Avant d'entrer au PC sécurité :\n• Vacuité des voies engins et échelles\n• État des bouches et poteaux incendie (BI/PI)\n• Présence du plan d'intervention à l'entrée"
      },
      {
        section: "Au PC sécurité",
        text: "1. Appel à l'astreinte : « Bonjour, [Nom] pour prise de service [horaires] sur [site] »\n\n2. Vérification du matériel : pour chaque élément → présence, quantité, fonctionnement\n   → Anomalie : signaler main courante (sauf clés/badges : vérifier traçabilité d'abord)\n\n3. Lecture des consignes journalières\n\n4. Contrôle du SSI\n\n5. Main courante : lecture depuis dernier jour + ouverture journée + anomalies"
      },
      {
        section: "Contrôle SSI",
        text: "a) Sous tension : voyant vert sur ECS ou TS\n\nb) Aucun voyant anormal :\n   • Jaune fixe (dérangement) → MC + technicien\n   • Jaune clignotant (défaut position) → réarmer le DAS\n\nc) Test de signalisation : bon fonctionnement des voyants, alarme restreinte, écran"
      }
    ]
  }
];
