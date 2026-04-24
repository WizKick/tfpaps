// ========== DÉFINITIONS TFP APS ==========
// Sigles + Concepts + Articles de loi essentiels à l'examen

const definitions = [
  // ========== SIGLES INSTITUTIONNELS ==========
  {
    id: "def-cnaps",
    category: "Sigles",
    term: "CNAPS",
    definition: "Conseil National des Activités Privées de Sécurité.\n\nÉtablissement public rattaché au ministère de l'Intérieur qui :\n• Régule la profession de sécurité privée\n• Délivre les cartes professionnelles\n• Contrôle les entreprises et agents\n• Sanctionne les manquements déontologiques"
  },
  {
    id: "def-cnil",
    category: "Sigles",
    term: "CNIL",
    definition: "Commission Nationale de l'Informatique et des Libertés.\n\nAutorité administrative indépendante chargée de :\n• Protéger les données personnelles (RGPD)\n• Contrôler les systèmes de vidéosurveillance\n• Autoriser la collecte de données\n• Sanctionner les abus\n\nÀ informer lors de l'installation d'un système de contrôle avec enregistrement de données personnelles."
  },
  {
    id: "def-dirrecte",
    category: "Sigles",
    term: "DIRECCTE / DREETS",
    definition: "Direction Régionale de l'Économie, de l'Emploi, du Travail et des Solidarités (ex-DIRECCTE).\n\nService déconcentré de l'État chargé notamment de l'inspection du travail. Ne gère PAS les données personnelles (rôle de la CNIL)."
  },
  {
    id: "def-csu",
    category: "Sigles",
    term: "CSU",
    definition: "Centre de Supervision Urbain.\n\nPoste de commandement opérationnel municipal qui centralise les caméras de vidéoprotection d'une collectivité, géré par la police municipale."
  },

  // ========== SIGLES SSI / INCENDIE ==========
  {
    id: "def-ssi",
    category: "Incendie",
    term: "SSI",
    definition: "Système de Sécurité Incendie.\n\nEnsemble de matériel qui :\n1. Collecte les informations sur les incendies\n2. Les traite\n3. Met l'établissement en sécurité\n\n5 catégories : A (le plus complet, avec DAI) → B → C → D → E (le moins complet)."
  },
  {
    id: "def-sdi",
    category: "Incendie",
    term: "SDI",
    definition: "Système de Détection Incendie.\n\nPartie du SSI qui comprend :\n• Les détecteurs automatiques (DAI)\n• Les déclencheurs manuels (DM)\n• L'Équipement de Contrôle et de Signalisation (ECS)"
  },
  {
    id: "def-smsi",
    category: "Incendie",
    term: "SMSI",
    definition: "Système de Mise en Sécurité Incendie.\n\nPartie du SSI qui met l'établissement en sécurité. Comprend :\n• CMSI : Centralisateur de Mise en Sécurité Incendie\n• DAS : Dispositifs Actionnés de Sécurité\n• UAE : Unité d'Aide à l'Exploitation"
  },
  {
    id: "def-cmsi",
    category: "Incendie",
    term: "CMSI",
    definition: "Centralisateur de Mise en Sécurité Incendie.\n\nÉquipement central du SMSI qui commande les Dispositifs Actionnés de Sécurité (DAS). Contient l'UCMC."
  },
  {
    id: "def-ucmc",
    category: "Incendie",
    term: "UCMC",
    definition: "Unité de Commande Manuelle Centralisée.\n\nSituée DANS le CMSI. Permet à l'opérateur de commander manuellement les DAS à distance (ex : mise en sécurité d'une zone en cas de voyant rouge clignotant)."
  },
  {
    id: "def-das",
    category: "Incendie",
    term: "DAS",
    definition: "Dispositifs Actionnés de Sécurité.\n\nÉléments actionnés en cas d'incendie :\n• Clapets coupe-feu\n• Portes coupe-feu\n• Exutoires de désenfumage\n• Volets de désenfumage\n\nCommandés par le CMSI (automatiquement ou via l'UCMC)."
  },
  {
    id: "def-dai",
    category: "Incendie",
    term: "DAI",
    definition: "Détecteurs Automatiques d'Incendie.\n\nDétecteurs qui se déclenchent automatiquement (fumée, chaleur, flammes). Présents dans le SSI catégorie A, absents du SSI B."
  },
  {
    id: "def-dm",
    category: "Incendie",
    term: "DM",
    definition: "Déclencheur Manuel.\n\nBoîtier rouge avec vitre à briser, permettant au public de déclencher manuellement l'alarme incendie."
  },
  {
    id: "def-ecs",
    category: "Incendie",
    term: "ECS",
    definition: "Équipement de Contrôle et de Signalisation.\n\nCœur du SDI qui reçoit les signaux des détecteurs et déclencheurs manuels."
  },
  {
    id: "def-uae",
    category: "Incendie",
    term: "UAE",
    definition: "Unité d'Aide à l'Exploitation.\n\nÉlément du SMSI qui aide l'exploitant à gérer les alarmes (synoptique, enregistrement, etc.)."
  },
  {
    id: "def-ssiap",
    category: "Incendie",
    term: "SSIAP",
    definition: "Service de Sécurité Incendie et d'Assistance à Personnes.\n\n3 niveaux :\n• SSIAP 1 : agent de service\n• SSIAP 2 : chef d'équipe\n• SSIAP 3 : chef de service"
  },

  // ========== SIGLES PLANS D'URGENCE ==========
  {
    id: "def-poi",
    category: "Plans d'urgence",
    term: "POI",
    definition: "Plan d'Opération Interne.\n\nPlan mis en place par l'EXPLOITANT DU SITE (pas le préfet, pas le maire) pour organiser la lutte contre un sinistre à l'intérieur de son établissement.\n\nObligatoire pour les installations classées Seveso seuil haut."
  },
  {
    id: "def-ppi",
    category: "Plans d'urgence",
    term: "PPI",
    definition: "Plan Particulier d'Intervention.\n\nPlan mis en place par le PRÉFET pour organiser la protection des populations autour d'un site à risque (complément externe du POI)."
  },
  {
    id: "def-clac",
    category: "Plans d'urgence",
    term: "CLAC",
    definition: "Cellule Locale d'Analyse et de Coordination.\n\nImplantée au niveau RÉGIONAL. Coordonne l'analyse et la gestion des crises localement."
  },
  {
    id: "def-pos",
    category: "Plans d'urgence",
    term: "POS",
    definition: "Plan d'Organisation des Secours.\n\nPlan interne d'un établissement pour organiser les secours en cas d'événement grave."
  },

  // ========== SIGLES OPÉRATIONNELS ==========
  {
    id: "def-dati",
    category: "Opérationnel",
    term: "DATI",
    definition: "Dispositif d'Alarme pour Travailleur Isolé.\n\nObligatoire pour tout travailleur seul sur un site.\n\nFonctions :\n• Bouton de détresse (SOS)\n• Détection de chute (homme mort)\n• Détection d'absence de mouvement\n• Alerte transmise à une centrale"
  },
  {
    id: "def-pc",
    category: "Opérationnel",
    term: "PC Sécurité",
    definition: "Poste de Commandement de Sécurité.\n\nLocal central d'où l'agent gère la surveillance d'un site. Contient :\n• Le CMSI (centrale incendie)\n• Les moniteurs de vidéosurveillance\n• Les moyens de communication (radio, téléphone)\n• La main courante"
  },
  {
    id: "def-mc",
    category: "Opérationnel",
    term: "MC",
    definition: "Main Courante.\n\nRegistre chronologique (manuscrit ou informatisé) où l'agent consigne toutes les informations importantes de sa vacation.\n\nFormat horaire : 24h (ex : 20h00 et non 8h du soir)."
  },

  // ========== SIGLES POLICE / JUSTICE ==========
  {
    id: "def-opj",
    category: "Police / Justice",
    term: "OPJ",
    definition: "Officier de Police Judiciaire.\n\nSeul habilité à :\n• Recevoir une personne appréhendée (art. 73 CPP)\n• Effectuer une fouille\n• Dresser un procès-verbal\n• Prendre une mesure de garde à vue\n\nEx : commissaire de police, lieutenant de police, officier de gendarmerie."
  },
  {
    id: "def-apj",
    category: "Police / Justice",
    term: "APJ",
    definition: "Agent de Police Judiciaire.\n\nSeconde l'OPJ mais avec des pouvoirs plus limités. L'APS remet la personne appréhendée à un OPJ, PAS à un APJ."
  },
  {
    id: "def-cpp",
    category: "Police / Justice",
    term: "CPP",
    definition: "Code de Procédure Pénale.\n\nRecueil des règles qui régissent la procédure pénale (enquête, poursuite, jugement). Contient notamment :\n• Art. 53 : flagrant délit\n• Art. 73 : droit d'appréhension"
  },
  {
    id: "def-cp",
    category: "Police / Justice",
    term: "CP",
    definition: "Code Pénal.\n\nRecueil des infractions et sanctions. Ne pas confondre avec le CPP (procédure). L'article 73 est dans le CPP, pas le CP."
  },
  {
    id: "def-csi",
    category: "Police / Justice",
    term: "CSI",
    definition: "Code de la Sécurité Intérieure.\n\nRecueil regroupant toutes les règles relatives à la sécurité (police, gendarmerie, sécurité privée). Le Livre VI concerne les activités privées de sécurité."
  },

  // ========== SIGLES BÂTIMENT ==========
  {
    id: "def-erp",
    category: "Bâtiment",
    term: "ERP",
    definition: "Établissement Recevant du Public.\n\nTout bâtiment accueillant du public (magasins, cinémas, écoles, hôtels).\n\nClassement :\n• Par type (lettres) : J, L, M, N, O, P, R, S, T, U, V, W, X, Y\n• Par catégorie (1 à 5, selon effectif)\n\nExemples :\n• Type M = Magasin\n• Type L = Salle de spectacle\n• Type U = Établissement de soins\n• Type J = Structures d'accueil (sommeil)"
  },
  {
    id: "def-igh",
    category: "Bâtiment",
    term: "IGH",
    definition: "Immeuble de Grande Hauteur.\n\nBâtiment dont le plancher bas du dernier niveau est à plus de :\n• 50 m pour les immeubles à usage d'habitation\n• 28 m pour les autres (bureaux, ERP)\n\nObligatoirement équipé d'un SSI catégorie A."
  },
  {
    id: "def-bi-pi",
    category: "Bâtiment",
    term: "BI / PI",
    definition: "Bouche Incendie / Poteau Incendie.\n\nPoints d'eau publics alimentés par le réseau d'eau, utilisés par les pompiers pour s'approvisionner.\n\nL'APS doit vérifier leur vacuité (accès dégagé) lors de la prise de service extérieure."
  },
  {
    id: "def-sgh",
    category: "Bâtiment",
    term: "SGH",
    definition: "Système Général Harmonisé.\n\nNorme internationale d'étiquetage des produits chimiques dangereux :\n• Pictogrammes en losange rouge\n• Mentions de danger (H)\n• Conseils de prudence (P)\n\nÀ ne pas confondre avec IP2X/IP3X (indices de protection électrique)."
  },

  // ========== CONCEPTS - APPRÉHENSION / DROIT ==========
  {
    id: "def-flagrant-delit",
    category: "Concepts juridiques",
    term: "Flagrant délit",
    definition: "Article 53 du Code de Procédure Pénale.\n\nInfraction en cours ou venant d'être commise. 3 cas :\n1. Personne en train de commettre l'infraction\n2. Personne qui vient de la commettre (temps très proche)\n3. Personne poursuivie par la clameur publique\n\nC'est la CONDITION pour utiliser l'article 73 (appréhension)."
  },
  {
    id: "def-appréhension",
    category: "Concepts juridiques",
    term: "Appréhension (art. 73 CPP)",
    definition: "Article 73 du Code de Procédure Pénale.\n\nDroit de tout citoyen (y compris APS) d'appréhender l'auteur d'un crime ou délit flagrant puni d'emprisonnement.\n\nConditions cumulatives :\n1. Flagrant délit (art. 53 CPP)\n2. Crime ou délit puni d'emprisonnement\n3. Remise IMMÉDIATE à un OPJ\n\nInterdictions :\n• Aucune violence ni humiliation\n• Pas de fouille (réservée à l'OPJ)\n• Pas de menottage sans formation"
  },
  {
    id: "def-palpation",
    category: "Concepts juridiques",
    term: "Palpation de sécurité",
    definition: "Geste de sécurité effectué par un APS FORMÉ :\n• Par-dessus les vêtements uniquement\n• Avec consentement exprès de la personne\n• Objectif : détecter objets dangereux ou illicites\n• De préférence par une personne du même sexe\n\nÀ DIFFÉRENCIER de la fouille (OPJ uniquement, plus invasive)."
  },
  {
    id: "def-fouille",
    category: "Concepts juridiques",
    term: "Fouille",
    definition: "Inspection approfondie des vêtements et effets personnels d'une personne.\n\nRéservée aux OPJ (forces de l'ordre).\n\nL'APS ne peut PAS effectuer de fouille, sauf en flagrant délit strictement encadré (art. 53 CPP)."
  },
  {
    id: "def-arme-destination",
    category: "Concepts juridiques",
    term: "Arme par destination",
    definition: "Tout objet susceptible de présenter un danger s'il est DÉTOURNÉ DE SON UTILISATION normale.\n\nExemples : marteau, tournevis, bouteille cassée, chaîne de vélo.\n\nÀ différencier des armes par nature (catégorisées A à D)."
  },

  // ========== CONCEPTS - DROIT DU TRAVAIL ==========
  {
    id: "def-droit-retrait",
    category: "Droit du travail",
    term: "Droit de retrait",
    definition: "Droit du salarié de QUITTER son lieu de travail en cas de DANGER GRAVE ET IMMINENT pour sa vie ou sa santé.\n\n• Sans sanction possible\n• Informer immédiatement la hiérarchie\n• Le danger doit être réel ou sérieusement supposé"
  },
  {
    id: "def-accident-travail",
    category: "Droit du travail",
    term: "Accident du travail",
    definition: "Tout accident survenant :\n• Pendant les heures de travail (sur le site)\n• Sur le trajet domicile-travail DIRECT\n\nÀ déclarer à l'employeur dans les 24h (CPAM sous 48h).\n\nNE CONCERNE PAS les heures supplémentaires hors cadre."
  },
  {
    id: "def-danger",
    category: "Droit du travail",
    term: "Danger (notion)",
    definition: "Défini dans le code du travail comme L'OCCURRENCE DU RISQUE.\n\nLe danger n'est pas :\n• Ce qui fait mal\n• L'accident en lui-même\n\nC'est la probabilité qu'un risque se concrétise."
  },
  {
    id: "def-risque-majeur",
    category: "Droit du travail",
    term: "Risque majeur",
    definition: "3 catégories de risques majeurs :\n1. Risques naturels (inondation, tempête, séisme)\n2. Risques technologiques (industriels, nucléaires)\n3. Risques de transports collectifs (TMD - transport de matières dangereuses)"
  },
  {
    id: "def-convention-collective",
    category: "Droit du travail",
    term: "Convention collective",
    definition: "Accord négocié entre employeurs et syndicats qui fixe les conditions de travail.\n\nContient :\n• Grilles de salaire / coefficients\n• Primes (nuit, férié, cynophile, panier)\n• Durée du travail, congés\n• Conditions d'embauche\n\nNE CONTIENT PAS : bulletins de salaire, couleur des tenues."
  },
  {
    id: "def-délit-marchandage",
    category: "Droit du travail",
    term: "Délit de marchandage",
    definition: "Infraction pénale : mise à disposition d'un salarié dans un but lucratif qui cause un préjudice au salarié ou élude les dispositions légales.\n\nEx : un APS à qui on demande de ranger des caddies dépasse ses missions → délit de marchandage potentiel. Rendre compte au chef d'équipe."
  },

  // ========== CONCEPTS - INCENDIE ==========
  {
    id: "def-triangle-feu",
    category: "Incendie",
    term: "Triangle du feu",
    definition: "COMBINAISON de 3 éléments nécessaires à la combustion :\n1. Combustible (matière qui brûle)\n2. Comburant (oxygène de l'air - 21%)\n3. Énergie d'activation (chaleur, étincelle)\n\nRetirer un seul des 3 = éteindre le feu."
  },
  {
    id: "def-classes-feu",
    category: "Incendie",
    term: "Classes de feu",
    definition: "5 classes de feu :\n• A : Solides (bois, papier, tissu) → eau\n• B : Liquides inflammables (essence, huile) → mousse, CO₂, poudre\n• C : Gaz → poudre, couper l'arrivée\n• D : Métaux → poudre spéciale\n• F : Huiles de cuisson → extincteur classe F"
  },
  {
    id: "def-propagation",
    category: "Incendie",
    term: "Modes de propagation du feu",
    definition: "4 modes de propagation :\n• CONDUCTION : transmission dans la masse d'un matériau solide\n• CONVECTION : déplacement de gaz/air chauds (vertical)\n• RAYONNEMENT : ondes thermiques à distance\n• PROJECTION : étincelles, particules enflammées"
  },
  {
    id: "def-pare-flammes",
    category: "Incendie",
    term: "Pare-flammes (E)",
    definition: "Élément de construction qui résiste AUX FLAMMES pendant une durée déterminée.\n\nClassement européen : E (étanchéité)."
  },
  {
    id: "def-coupe-feu",
    category: "Incendie",
    term: "Coupe-feu (REI)",
    definition: "Élément de construction ayant :\n• R : Résistance mécanique\n• E : Étanchéité aux flammes et gaz chauds\n• I : Isolation thermique\n\nPlus performant que le pare-flammes."
  },
  {
    id: "def-classification-mat",
    category: "Incendie",
    term: "Classification européenne des matériaux",
    definition: "Un matériau est classé selon 3 critères :\n1. Inflammabilité (A1, A2, B, C, D, E, F)\n2. Dangerosité des fumées (s1, s2, s3)\n3. Chutes de gouttes enflammées (d0, d1, d2)\n\nEx : B-s1,d0 = peu inflammable, peu de fumée, pas de gouttes."
  },
  {
    id: "def-desenfumage",
    category: "Incendie",
    term: "Désenfumage",
    definition: "Évacuation des fumées d'incendie. 3 méthodes :\n1. Balayage de l'espace (naturel, par tirage thermique)\n2. Différence de pression (mécanique, ventilateurs)\n3. Combinaison des deux"
  },
  {
    id: "def-poudre-abc",
    category: "Incendie",
    term: "Poudre ABC",
    definition: "Poudre polyvalente qui agit par :\n• INHIBITION (casse la réaction chimique en chaîne)\n• ÉTOUFFEMENT (prive de comburant)\n\nEfficace sur classes A, B et C."
  },
  {
    id: "def-distance-co2",
    category: "Incendie",
    term: "Distance d'attaque (extincteurs)",
    definition: "Distance minimale pour utiliser efficacement un extincteur :\n• CO₂ : moins de 1 mètre (attention brûlure par le froid)\n• Eau pulvérisée : 2 à 3 mètres\n• Poudre : 3 à 4 mètres"
  },
  {
    id: "def-but-erp",
    category: "Incendie",
    term: "But de la règlementation ERP",
    definition: "3 objectifs fondamentaux :\n1. Faciliter l'évacuation des occupants\n2. Faciliter l'action des secours\n3. Limiter la propagation du feu"
  },
  {
    id: "def-eclairage-secu",
    category: "Incendie",
    term: "Éclairage de sécurité",
    definition: "2 types :\n• Éclairage d'AMBIANCE (antipanique)\n• Éclairage d'ÉVACUATION (balisage des sorties)\n\nAutonomie minimum : 1 HEURE en ERP.\nSe déclenche automatiquement en cas de coupure."
  },

  // ========== CONCEPTS - RONDES ==========
  {
    id: "def-ronde-aleatoire",
    category: "Opérationnel",
    term: "Ronde aléatoire",
    definition: "Ronde de surveillance SANS ITINÉRAIRE DÉTERMINÉ à l'avance.\n\nBut : prévenir les risques incendie et les actes de malveillance en déjouant l'observation par d'éventuels malfaiteurs."
  },
  {
    id: "def-ronde-pointee",
    category: "Opérationnel",
    term: "Ronde pointée",
    definition: "Ronde suivant un itinéraire précis avec contrôleur de ronde (pointages à valider à des bornes)."
  },
  {
    id: "def-levee-doute",
    category: "Opérationnel",
    term: "Levée de doute",
    definition: "Vérification destinée à s'assurer qu'il n'y a pas de danger réel après la détection d'une alarme.\n\nRôle principal de l'intervenant en télésécurité."
  },
  {
    id: "def-teleservices",
    category: "Opérationnel",
    term: "Télésécurité / Télésurveillance",
    definition: "Surveillance à distance d'un site via des systèmes électroniques (caméras, alarmes, capteurs).\n\nEn cas d'alerte, un intervenant effectue une levée de doute sur place."
  },

  // ========== CONCEPTS - CONFLIT / RELATIONNEL ==========
  {
    id: "def-conflit",
    category: "Gestion de conflit",
    term: "Conflit",
    definition: "Situation de BLOCAGE entre au moins DEUX PERSONNES, avec opposition d'intérêts, de valeurs ou de perceptions."
  },
  {
    id: "def-role-aps-conflit",
    category: "Gestion de conflit",
    term: "Rôle de l'APS en conflit",
    definition: "CONCILIATEUR.\n\nJamais :\n• Bagarreur\n• Dictateur\n• Coordinateur\n• Amateur\n\nRôle : désamorcer avant d'intervenir, garder ses distances, parler calmement."
  },

  // ========== CONCEPTS - VIDÉOSURVEILLANCE ==========
  {
    id: "def-duree-video",
    category: "Vidéosurveillance",
    term: "Durée conservation vidéo",
    definition: "Durée maximum : 1 MOIS MAXIMUM, sauf enquête judiciaire en cours (prolongation possible).\n\nContrôlée par la CNIL."
  },
  {
    id: "def-anti-intrusion",
    category: "Vidéosurveillance",
    term: "Systèmes anti-intrusion",
    definition: "3 types de détection :\n1. PÉRIPHÉRIQUE : limites de la propriété (barrière, clôture)\n2. PÉRIMÉTRIQUE : enveloppe du bâtiment (contacts d'ouverture)\n3. VOLUMÉTRIQUE : intérieur (détecteurs IR, volumétriques)"
  },
  {
    id: "def-biometrie",
    category: "Vidéosurveillance",
    term: "Biométrie",
    definition: "Identification des personnes par leurs CARACTÉRISTIQUES PHYSIQUES UNIQUES : empreintes digitales, reconnaissance faciale, iris, veines.\n\nUtilisée en contrôle d'accès haute sécurité. Soumise à autorisation CNIL."
  },

  // ========== ARTICLES DE LOI ==========
  {
    id: "def-art-53",
    category: "Articles de loi",
    term: "Article 53 CPP",
    definition: "Définit le FLAGRANT DÉLIT (Code de Procédure Pénale).\n\nEst qualifié flagrant :\n• Le crime ou délit qui se commet actuellement\n• Celui qui vient de se commettre\n• Celui où la personne est poursuivie par la clameur publique\n• Celui où la personne est trouvée en possession d'objets/indices qui la rattachent à l'infraction (temps voisin de l'action)"
  },
  {
    id: "def-art-73",
    category: "Articles de loi",
    term: "Article 73 CPP",
    definition: "DROIT D'APPRÉHENSION (Code de Procédure Pénale).\n\n« Dans les cas de crime flagrant ou de délit flagrant puni d'une peine d'emprisonnement, toute personne a qualité pour en appréhender l'auteur et le conduire devant l'officier de police judiciaire le plus proche. »\n\nC'est LE fondement légal de l'intervention de l'APS."
  },
  {
    id: "def-art-122-5",
    category: "Articles de loi",
    term: "Article 122-5 CP",
    definition: "LÉGITIME DÉFENSE (Code Pénal).\n\nN'est pas pénalement responsable la personne qui, face à une atteinte injustifiée, accomplit un acte de défense :\n• Nécessaire\n• Simultané à l'attaque\n• Proportionné à la gravité de l'atteinte"
  },
  {
    id: "def-art-226-13",
    category: "Articles de loi",
    term: "Article 226-13 CP",
    definition: "VIOLATION DU SECRET PROFESSIONNEL (Code Pénal).\n\nSanction : 1 an d'emprisonnement et 15 000 € d'amende.\n\nL'APS est tenu au secret professionnel sur tout ce qu'il apprend dans l'exercice de ses fonctions."
  },
  {
    id: "def-art-l613-1",
    category: "Articles de loi",
    term: "Article L.613-1 CSI",
    definition: "Définit les activités de SURVEILLANCE ET GARDIENNAGE (Code de la Sécurité Intérieure - Livre VI).\n\n« Les agents exerçant une activité mentionnée au 1° de l'article L.611-1 ne peuvent exercer leurs fonctions qu'à l'intérieur des bâtiments ou dans la limite des lieux dont ils ont la garde. »"
  },
  {
    id: "def-art-l613-2",
    category: "Articles de loi",
    term: "Article L.613-2 CSI",
    definition: "PALPATION DE SÉCURITÉ (Code de la Sécurité Intérieure).\n\nEncadre les conditions de palpation par les APS :\n• Formation requise\n• Consentement exprès\n• De préférence par une personne du même sexe"
  },
  {
    id: "def-art-l613-3",
    category: "Articles de loi",
    term: "Article L.613-3 CSI",
    definition: "INSPECTION VISUELLE ET FOUILLE DES BAGAGES (CSI).\n\nEncadre dans quels cas un APS peut inspecter visuellement les bagages (notamment grands événements, vigipirate)."
  },
  {
    id: "def-art-l617-1",
    category: "Articles de loi",
    term: "Article L.617-1 CSI",
    definition: "SANCTION - EXERCICE SANS CARTE PRO (CSI).\n\nExercer une activité de sécurité privée sans carte professionnelle valide :\n• 3 ans d'emprisonnement\n• 45 000 € d'amende"
  },
  {
    id: "def-art-311-3",
    category: "Articles de loi",
    term: "Article 311-3 CP",
    definition: "DÉFINITION DU VOL (Code Pénal).\n\n« Le vol est la soustraction frauduleuse de la chose d'autrui. »\n\nPuni de 3 ans d'emprisonnement et 45 000 € d'amende (vol simple)."
  },

  // ========== CONCEPTS - CARTE PRO / SANCTIONS ==========
  {
    id: "def-carte-pro",
    category: "Carte pro / CNAPS",
    term: "Carte professionnelle",
    definition: "Document officiel délivré par le CNAPS, OBLIGATOIRE pour exercer dans la sécurité privée.\n\n• Valable 5 ans, renouvelable\n• Mentions : Nom, prénom, fonction, numéro CNAPS\n• À présenter lors de tout contrôle\n\nExercer sans carte pro : 3 ans de prison + 45 000 € d'amende (art. L.617-1 CSI)."
  },
  {
    id: "def-bulletin-1",
    category: "Carte pro / CNAPS",
    term: "Bulletin N°1 du casier",
    definition: "Extrait le plus complet du casier judiciaire.\n\nSeul le PRÉFET peut l'obtenir (pas l'employeur, pas le CNAPS directement).\n\nPour la carte pro, c'est le bulletin n°2 qui est consulté."
  },
  {
    id: "def-tfp-aps",
    category: "Carte pro / CNAPS",
    term: "TFP APS",
    definition: "Titre à Finalité Professionnelle d'Agent de Prévention et de Sécurité.\n\nNouvelle dénomination du CQP APS.\n\nFormation : 175 heures (environ 5 semaines) en centre agréé."
  },

  // ========== CONCEPTS - SIGNALEMENT ==========
  {
    id: "def-qqoqcp",
    category: "Opérationnel",
    term: "QQOQCP",
    definition: "Méthode de questionnement pour rédiger un rapport complet :\n• QUI : personnes concernées\n• QUOI : nature des faits\n• OÙ : lieu précis\n• QUAND : date et heure (24h)\n• COMMENT : déroulement\n• POURQUOI : circonstances\n\nBase de tout rapport d'incident."
  },
  {
    id: "def-signalement",
    category: "Opérationnel",
    term: "Signalement d'une personne",
    definition: "Éléments AUTORISÉS :\n• Sexe\n• Taille, corpulence\n• Tenue vestimentaire\n• Signes particuliers (tatouages, cicatrices)\n\nÉléments INTERDITS (discrimination) :\n• Nationalité\n• Religion\n• État de santé\n• Origine ethnique"
  }
];

// Helper : grouper par catégorie
function getDefinitionsByCategory() {
  const grouped = {};
  definitions.forEach(d => {
    if (!grouped[d.category]) grouped[d.category] = [];
    grouped[d.category].push(d);
  });
  return grouped;
}
