// Base de données complète des questions TFP APS
// Extraites de tous les QCM Quizzbox + questions orales TFP

const questionsQCM = [
  // ========== CONTRÔLE D'ACCÈS & ACCUEIL ==========
  {
    theme: "Contrôle d'accès",
    q: "Le contrôle d'accès a pour but :",
    options: ["D'interdire l'entrée sur un site", "De ne faire entrer que le personnel du site", "De contrôler toutes les entrées et sorties", "D'accueillir tout le monde"],
    correct: 2,
    explanation: "Le contrôle d'accès vise à filtrer et enregistrer toutes les entrées et sorties d'un site, pour la sécurité des biens et des personnes."
  },
  {
    theme: "Contrôle d'accès",
    q: "But du contrôle d'accès :",
    options: ["Filtrer les entrées sur un site", "Contrôler l'heure d'embauche des salariés", "Faire des statistiques sur les visites du site", "Occuper les APS qui sont en poste", "Informer les visiteurs qui se présentent"],
    correct: 0,
    explanation: "Le contrôle d'accès filtre les entrées pour empêcher l'intrusion de personnes non autorisées."
  },
  {
    theme: "Contrôle d'accès",
    q: "Dans quel cadre un agent de sécurité peut-il demander une pièce d'identité à une personne ?",
    options: ["En cas de comportement suspect ou pour l'accès à un site sécurisé", "À tout moment, sans justification", "Uniquement sur ordre des forces de l'ordre", "Pour vérifier l'âge de la personne"],
    correct: 0,
    explanation: "L'APS peut demander une pièce d'identité dans le cadre d'un contrôle d'accès sécurisé, ou face à un comportement suspect, mais pas de manière arbitraire."
  },
  {
    theme: "Contrôle d'accès",
    q: "Quel est l'objectif d'un contrôle aléatoire des sacs à l'entrée d'un site sécurisé ?",
    options: ["Réduire le nombre de personnes entrant sur le site", "Prévenir l'introduction d'objets dangereux ou interdits", "Identifier les employés ayant des objets de valeur", "Augmenter la durée des files d'attente"],
    correct: 1,
    explanation: "Le contrôle aléatoire des sacs vise à prévenir l'introduction d'objets dangereux ou interdits sur le site."
  },
  {
    theme: "Contrôle d'accès",
    q: "Quel est l'intérêt de la biométrie dans le contrôle d'accès ?",
    options: ["Identifier les personnes par leurs caractéristiques physiques uniques", "Mesurer la température corporelle", "Remplacer les caméras de surveillance", "Accélérer le passage aux portiques de sécurité"],
    correct: 0,
    explanation: "La biométrie identifie les personnes via des caractéristiques physiques uniques (empreinte, iris, visage)."
  },
  {
    theme: "Contrôle d'accès",
    q: "Dans quel cas un agent de sécurité est-il en droit de refuser l'accès à une personne ?",
    options: ["Lorsque la personne refuse de se soumettre aux contrôles de sécurité", "Lorsque la personne est mal habillée", "Lorsque la personne semble nerveuse", "Lorsque la personne ne parle pas la langue du pays"],
    correct: 0,
    explanation: "Le refus d'accès est légitime quand la personne refuse les contrôles prévus par les consignes du site."
  },
  
  // ========== MAIN COURANTE & RAPPORTS ==========
  {
    theme: "Main courante / Rapports",
    q: "La main courante peut être :",
    options: ["Orale", "Enregistrée", "Virtuelle", "Manuscrite ou informatisée"],
    correct: 3,
    explanation: "La main courante est un registre écrit, soit sur support papier (manuscrite), soit sur support informatique."
  },
  {
    theme: "Main courante / Rapports",
    q: "Sur la main courante, huit heures du soir s'écrit :",
    options: ["08h00", "20h00", "8h00", "20h", "Aucune mention ne convient"],
    correct: 1,
    explanation: "La main courante utilise le format 24h. 8h du soir = 20h00."
  },
  {
    theme: "Main courante / Rapports",
    q: "Le rapport d'anomalie a pour but de :",
    options: ["Signaler des dysfonctionnements constatés lors d'une ronde", "Rendre compte d'une vacation en totalité", "Signaler un fait grave survenu lors d'une vacation", "Occuper les APS durant leur vacation", "Aucune des réponses précédentes"],
    correct: 0,
    explanation: "Le rapport d'anomalie sert à signaler des dysfonctionnements (matériel, équipement, sécurité) observés en ronde."
  },
  {
    theme: "Main courante / Rapports",
    q: "Des cartons sont placés devant une issue de secours, que faites-vous ?",
    options: ["Vous les déplacez et vous signalez l'anomalie sur la Main Courante", "Vous les jetez et vous signalez l'anomalie sur la Main Courante", "Vous demanderez plus tard à l'entretien de le faire", "Vous les laissez sur place et le marquez sur la Main Courante"],
    correct: 0,
    explanation: "Les issues de secours doivent toujours rester libres. On dégage immédiatement et on signale sur la main courante."
  },
  {
    theme: "Main courante / Rapports",
    q: "Lors du signalement d'une personne il est important de préciser :",
    options: ["Son sexe, sa taille, sa corpulence", "Sa nationalité", "Son état de santé", "La marque de ses chaussures", "Sa religion", "Son eau de toilette"],
    correct: 0,
    explanation: "Le signalement objectif repose sur des critères physiques neutres : sexe, taille, corpulence, tenue. Jamais nationalité ou religion."
  },
  
  // ========== TÉLÉPHONE & COMMUNICATION ==========
  {
    theme: "Communication",
    q: "Lors d'un appel téléphonique entrant, le nombre de sonneries maximum avant de décrocher est de :",
    options: ["Peu importe, il y a une musique d'attente", "5 sonneries maximum", "3 sonneries maximum", "Peu importe car le répondeur prend le relais", "Aucune des réponses précédentes"],
    correct: 2,
    explanation: "Règle professionnelle : décrocher en 3 sonneries maximum pour un accueil de qualité."
  },
  {
    theme: "Communication",
    q: "Vous décrochez le téléphone au poste de sécurité de la société « Trémazec » et vous êtes salarié chez « Sécuritruc »; présentez-vous :",
    options: ["Bonjour, PC « Sécuritruc » Agent Machin", "Société Trémazec, bonjour, que puis-je pour vous", "Salut, c'est l'APS Machin de « Sécuritruc »", "Bonjour, société « Trémazec », APS Machin, je vous écoute"],
    correct: 1,
    explanation: "On se présente au nom du client (le site surveillé), jamais au nom de son employeur. Formule polie et professionnelle."
  },
  {
    theme: "Communication",
    q: "En alphabet phonétique EXAMEN se dit :",
    options: ["Echo, X-Ray, Alpha, Mike, Exemple, November", "Echo, X-Ray, Alpha, Mike, Echo, Noël", "Echo, X-Ray, Alpha, Mike, Echo, November", "Echo, X-Ray, Alain, Michel, Echo, November"],
    correct: 2,
    explanation: "Alphabet OTAN : E=Echo, X=X-Ray, A=Alpha, M=Mike, E=Echo, N=November."
  },
  
  // ========== APPRÉHENSION / ARTICLE 73 ==========
  {
    theme: "Appréhension / Droit",
    q: "Dans une grande surface, vous apercevez un individu dérobant le sac à main d'une cliente… que faites-vous ?",
    options: ["Vous ne pouvez rien faire c'est le travail de la police", "Je peux appréhender l'individu et le remettre à l'OPJ", "Vous ne faites rien, cela ne concerne pas le magasin", "Vous intervenez, rendez le sac à la cliente et laissez libre le voleur", "Ça ne vous regarde pas"],
    correct: 1,
    explanation: "Article 73 du CPP : en cas de flagrant délit, tout citoyen peut appréhender l'auteur et le remettre à un Officier de Police Judiciaire."
  },
  {
    theme: "Appréhension / Droit",
    q: "Où l'appréhension doit-elle se faire dans une grande surface ?",
    options: ["Avant le passage en caisse du client (pour ne pas le manquer)", "À l'extérieur du magasin (pour éviter les problèmes)", "Dès le passage en caisse (dans la galerie marchande)", "Dans le sas d'accès au magasin (par sécurité)"],
    correct: 2,
    explanation: "L'appréhension se fait dès que l'individu a franchi la ligne de caisse sans payer : le vol est alors consommé."
  },
  {
    theme: "Appréhension / Droit",
    q: "Pouvez-vous appréhender un individu qui vient de voler un CD en surface de vente ?",
    options: ["Oui la loi l'autorise", "Non, je dois attendre qu'il franchisse la ligne de caisse", "Non, je dois l'arrêter uniquement sur le parking", "Non, je dois attendre qu'il arrive en caisse", "Aucune des autres réponses"],
    correct: 1,
    explanation: "Le vol n'est consommé qu'après le franchissement de la ligne de caisse sans paiement."
  },
  {
    theme: "Appréhension / Droit",
    q: "Pouvez-vous appréhender un individu en surface de vente ?",
    options: ["Non, sauf si l'infraction n'a aucun lien avec la vente", "Oui, peut être", "Aucune des autres réponses", "Non dans tous les cas", "Oui dans tous les cas"],
    correct: 0,
    explanation: "L'appréhension en surface de vente n'est possible que pour une infraction étrangère au processus de vente (ex : agression)."
  },
  {
    theme: "Appréhension / Droit",
    q: "Vous avez interpellé une personne dans le cadre de l'article 73 du CPP. L'OPJ ne peut pas se déplacer immédiatement. Que faites-vous ?",
    options: ["Je prends l'identité de la personne et je la laisse partir", "Je garde cette personne sous ma surveillance jusqu'à l'arrivée de l'OPJ", "Je ne peux pas garder cette personne car c'est une arrestation arbitraire", "Je le sermonne et je le laisse repartir", "Je ne sais pas"],
    correct: 1,
    explanation: "Après appréhension, l'individu reste sous surveillance de l'agent jusqu'à la remise effective à l'OPJ."
  },
  {
    theme: "Appréhension / Droit",
    q: "Pouvez-vous appréhender un individu qui s'est enfui après avoir commis un vol la semaine dernière sur votre lieu de travail ?",
    options: ["Oui", "Non, je ne l'appréhende pas uniquement s'il revient payer l'article", "Aucune des autres réponses", "Oui, s'il ne ramène pas ce qu'il a volé", "Non"],
    correct: 4,
    explanation: "L'article 73 exige le flagrant délit. Un vol commis la semaine dernière n'est plus flagrant : seule la police peut agir."
  },
  {
    theme: "Appréhension / Droit",
    q: "Vous appréhendez une personne et celle-ci vous agresse physiquement. Vous avez le droit :",
    options: ["Aucune des autres réponses", "D'utiliser tous les moyens y compris une arme", "D'utiliser la force nécessaire au but recherché", "D'utiliser la violence physique et verbale", "De menotter la personne contre un radiateur"],
    correct: 2,
    explanation: "Légitime défense : usage proportionné de la force, strictement nécessaire pour se protéger."
  },
  {
    theme: "Appréhension / Droit",
    q: "Pouvez-vous appréhender un individu qui mange un produit du magasin et ne s'acquitte pas du montant lors de son passage en caisse ?",
    options: ["Non, c'est grave, je fais la même chose pendant mon service", "Non ce n'est pas grave, le magasin a des assurances pour cela", "Oui c'est un délit", "Non, mais je dois en rendre compte à ma hiérarchie", "Aucune des autres réponses"],
    correct: 2,
    explanation: "Consommer un produit sans payer constitue un vol consommé dès le passage en caisse."
  },
  {
    theme: "Appréhension / Droit",
    q: "Vous avez appréhendé un individu, quelle obligation devez-vous impérativement respecter ?",
    options: ["Faire prévenir un Officier de Police Judiciaire", "Faire prévenir notre société de sécurité", "Faire prévenir le responsable de l'établissement", "Aucune des autres réponses", "Faire prévenir un agent de police judiciaire"],
    correct: 0,
    explanation: "Article 73 CPP : l'individu doit être remis sans délai à un OPJ (pas un APJ)."
  },
  {
    theme: "Appréhension / Droit",
    q: "Dans l'attente des services publics compétents, à qui incombe la responsabilité d'une personne appréhendée ?",
    options: ["Au service de Police", "Au service de Gendarmerie", "Au responsable du magasin", "Aucune des autres réponses", "À l'agent qui a fait l'appréhension"],
    correct: 4,
    explanation: "L'agent qui a procédé à l'appréhension reste responsable de la personne jusqu'à la remise à l'OPJ."
  },
  {
    theme: "Appréhension / Droit",
    q: "Le droit d'appréhender conformément à l'article 73 du CPP est :",
    options: ["Réservé aux agents de sécurité", "Réservé aux forces de l'ordre", "Un droit de tout citoyen", "Aucune des autres réponses", "Un droit des seuls citoyens élus ou assermentés"],
    correct: 2,
    explanation: "L'article 73 est un droit citoyen : toute personne peut appréhender l'auteur d'un flagrant délit."
  },
  {
    theme: "Appréhension / Droit",
    q: "Je suis agent dans un établissement, sous quelles conditions ai-je le droit d'appréhender une personne ?",
    options: ["Si la personne a un comportement suspect", "Aucune des autres réponses", "Dès que la personne sort de l'enceinte de l'établissement", "Si elle est poursuivie par une clameur publique", "Si c'est prévu dans les consignes"],
    correct: 3,
    explanation: "Le flagrant délit inclut la poursuite par la clameur publique (article 53 CPP)."
  },
  {
    theme: "Appréhension / Droit",
    q: "Quelles sont les conditions de rétention d'une personne dans le cadre de l'article 73 du code de procédure pénale ?",
    options: ["Il n'y a pas de condition particulière de rétention, l'agent fait comme il veut", "La personne appréhendée doit être remise en liberté dès lors qu'elle a avoué le délit", "Aucune des autres réponses", "La personne appréhendée ne doit subir aucune violence ni humiliation", "La personne appréhendée peut subir des violences et humiliations si nécessaire"],
    correct: 3,
    explanation: "Le respect de la dignité humaine est absolu : aucune violence ni humiliation n'est tolérée."
  },
  {
    theme: "Appréhension / Droit",
    q: "Quel article prévoit le droit d'appréhension ?",
    options: ["L'article 803 du code de procédure pénale", "L'article 73 du code pénal", "L'article 53 du code pénal", "L'article 73 du code de procédure pénale"],
    correct: 3,
    explanation: "Article 73 du Code de Procédure Pénale (CPP), pas du Code Pénal."
  },
  {
    theme: "Appréhension / Droit",
    q: "Quel article prévoit le flagrant délit ?",
    options: ["L'article 803 du code de procédure pénale", "L'article 73 du code pénal", "L'article 53 du code de procédure pénale", "L'article 73 du code de procédure pénale"],
    correct: 2,
    explanation: "Article 53 CPP définit le flagrant délit. Article 73 CPP définit le droit d'appréhension qui en découle."
  },
  {
    theme: "Appréhension / Droit",
    q: "Quel élément « fortement recommandé » trouve-t-on dans un local d'appréhension ?",
    options: ["Des menottes", "Une machine à café", "Registre des consignes", "Aucune des autres réponses", "Une caméra de vidéosurveillance"],
    correct: 4,
    explanation: "La caméra de vidéosurveillance protège juridiquement l'agent et la personne appréhendée."
  },
  {
    theme: "Appréhension / Droit",
    q: "Avez-vous le droit d'interdire l'accès du magasin à une personne qui a déjà volé sur le site ?",
    options: ["Oui, sur ordre de la direction du magasin", "Non, c'est contraire au Code du commerce", "Non, car ce sont uniquement les forces de l'ordre qui le peuvent", "Oui, car c'est un voleur", "Aucune des propositions"],
    correct: 0,
    explanation: "Le responsable du magasin peut interdire l'accès à un client sur la base du droit privé (règlement intérieur)."
  },
  {
    theme: "Appréhension / Droit",
    q: "Agent de sécurité dans une grande surface, vous appréhendez un mineur de 16 ans qui vient de dérober un DVD. Que faites-vous ?",
    options: ["J'appelle les forces de l'ordre", "Je lui fais signer une reconnaissance de vol", "Je le fouille pour récupérer l'objet volé", "Je lui donne un sérieux avertissement et je le laisse partir", "Aucune des autres réponses"],
    correct: 0,
    explanation: "Pour un mineur, obligation d'appeler les forces de l'ordre. Pas de fouille, pas de reconnaissance signée."
  },
  
  // ========== GESTION DES CONFLITS ==========
  {
    theme: "Gestion de conflit",
    q: "Un conflit c'est :",
    options: ["Une situation émotionnelle qui n'aboutit pas", "Une situation de blocage entre au moins deux personnes", "Une situation liée à la conjoncture", "Aucune des réponses précédentes"],
    correct: 1,
    explanation: "Un conflit est une situation de blocage/opposition entre au moins deux parties."
  },
  {
    theme: "Gestion de conflit",
    q: "Dans la gestion de conflit peut-on répondre négativement à une situation ?",
    options: ["Oui", "Non", "Il vaut mieux être d'accord avec notre interlocuteur dans tous les cas"],
    correct: 0,
    explanation: "Un refus ferme et poli est parfois nécessaire, mais doit être formulé sans agressivité."
  },
  {
    theme: "Gestion de conflit",
    q: "Dans le cadre de la gestion de conflit, quel adjectif s'applique au mieux au rôle de l'APS ?",
    options: ["Coordinateur", "Amateur", "Conciliateur", "Bagarreur", "Dictateur"],
    correct: 2,
    explanation: "L'APS joue un rôle de conciliateur : calmer, désamorcer, trouver une issue pacifique."
  },
  {
    theme: "Gestion de conflit",
    q: "Comment un agent de sécurité doit-il réagir face à une personne agressive ?",
    options: ["Utiliser immédiatement la force", "Ignorer la personne", "Tenter de calmer la situation en parlant doucement et en gardant ses distances", "Appeler la police et fuir"],
    correct: 2,
    explanation: "La désescalade verbale avec distance de sécurité est la règle d'or."
  },
  
  // ========== INCENDIE / FEU ==========
  {
    theme: "Incendie",
    q: "Quels sont les éléments indispensables à la combustion ?",
    options: ["Une propagation, un comburant, un combustible", "Des molécules, des radicaux libres et un tétraèdre", "Un combustible, un comburant, une énergie d'activation", "Aucune des réponses précédentes"],
    correct: 2,
    explanation: "Triangle du feu : combustible + comburant (oxygène) + énergie d'activation (chaleur)."
  },
  {
    theme: "Incendie",
    q: "Le triangle du feu c'est :",
    options: ["Combinaison de 3 éléments", "La réduction de 3 éléments", "La proportion de 3 éléments", "La traduction de 3 éléments", "Aucune des réponses précédentes"],
    correct: 0,
    explanation: "Triangle du feu = combinaison simultanée de 3 éléments (combustible + comburant + énergie)."
  },
  {
    theme: "Incendie",
    q: "Le feu se propage par :",
    options: ["Convection, rayonnement, projection, écoulement", "Convection, rayonnement, conduction, projection", "Convection, conduction, rayonnement, explosion", "Aucune des réponses précédentes"],
    correct: 1,
    explanation: "Les 4 modes de propagation : convection (air chaud), rayonnement (ondes thermiques), conduction (solides), projection (étincelles)."
  },
  {
    theme: "Incendie",
    q: "La propagation de l'incendie par la transmission de la chaleur dans la masse d'un matériau correspond à :",
    options: ["La conduction", "La convection", "Le rayonnement", "La projection", "La réfraction"],
    correct: 0,
    explanation: "La conduction = transmission de chaleur à travers un solide (ex : mur, poutre métallique)."
  },
  {
    theme: "Incendie",
    q: "Quand y a-t-il inflammation ?",
    options: ["Quand l'incandescence est atteinte", "Lorsque la température est suffisante, les vapeurs s'enflamment au contact de l'oxygène", "Quand les fumées sont suffisamment chaudes", "Aucune des réponses précédentes"],
    correct: 1,
    explanation: "L'inflammation survient quand les vapeurs de combustible atteignent leur température d'inflammation au contact de l'O₂."
  },
  {
    theme: "Incendie",
    q: "Lors d'une ronde, vous notez l'absence d'un extincteur près d'un local électrique, vous le remplacez par :",
    options: ["Un extincteur à CO2", "Un extincteur à eau pulvérisée", "Un extincteur à poudre", "Un extincteur à eau pulvérisée + additif"],
    correct: 0,
    explanation: "Feux électriques (classe C) = extincteur CO₂ : non conducteur, ne laisse pas de résidu."
  },
  {
    theme: "Incendie",
    q: "Quelle est la distance d'attaque d'un extincteur CO2 ?",
    options: ["-1 m", "1,5 m", "2 à 3m", "3 à 4 mètres", "Aucune des réponses précédentes"],
    correct: 0,
    explanation: "CO₂ : attaque à moins d'1 mètre (portée courte du gaz). Attention aux mains : risque de brûlure par le froid."
  },
  {
    theme: "Incendie",
    q: "Un élément de construction ayant une isolation thermique est dit…",
    options: ["Pare flamme ou EI", "Coupe feu ou REI", "Coupe flamme ou RE", "Pare feu ou SF", "Aucune des réponses précédentes"],
    correct: 1,
    explanation: "Coupe-feu (REI) = Résistance mécanique + Étanchéité aux flammes + Isolation thermique."
  },
  {
    theme: "Incendie",
    q: "Quelles sont les différentes méthodes de désenfumage ?",
    options: ["Courant d'air-ventilation-combinaison des deux", "Balayage de l'espace-différence de pression-combinaison des deux", "Évacuation-arrivée d'air frais-combinaison des deux", "Aucune des réponses proposées"],
    correct: 1,
    explanation: "Méthodes de désenfumage : balayage (naturel), différence de pression (mécanique), ou combiné."
  },
  {
    theme: "Incendie",
    q: "Un agent de sécurité doit savoir lire un plan pour repérer :",
    options: ["Les moyens de secours, les accès", "Les divers locaux à risques du site, les accès, les moyens de secours, les circuits de rondes", "Les issues, les extincteurs, les téléphones d'alerte", "Aucune des réponses précédentes"],
    correct: 1,
    explanation: "La lecture de plan doit être complète : locaux à risques, accès, moyens de secours ET circuits de ronde."
  },
  {
    theme: "Incendie",
    q: "L'unité de signalisation sur votre CMSI présente un voyant rouge clignotant que devez-vous faire immédiatement et dans tous les cas ?",
    options: ["Déclencher l'alarme générale", "Informer dès son arrivée le commandant des opérations de secours", "Appeler vos agents en ronde pour qu'ils regagnent le PC immédiatement", "Attendre les consignes de votre chef de service", "Utiliser la fonction de l'UCMC et télécommander le DAS, à distance, afin de le mettre en position de sécurité"],
    correct: 4,
    explanation: "Voyant rouge clignotant = défaut de position d'attente. On télécommande le DAS pour le mettre en position de sécurité via l'UCMC."
  },
  {
    theme: "Incendie",
    q: "Quelle est la première chose à faire lorsqu'il y a une alarme SSI qui se déclenche ?",
    options: ["Arrêter le signal sonore", "Effectuer une levée de doute", "Localiser le sinistre", "Effectuer un compte rendu"],
    correct: 0,
    explanation: "On coupe le signal sonore pour pouvoir communiquer, puis on localise le sinistre et on fait la levée de doute."
  },
  {
    theme: "Incendie",
    q: "Quel est le but de la règlementation incendie dans les ERP ?",
    options: ["Continuité de l'exploitation avec évacuation du niveau sinistré", "Faciliter l'évacuation des occupants - faciliter l'action des secours - limiter la propagation du feu", "Faciliter le déclenchement des secours - désenfumer - compartimenter", "Faciliter l'évacuation - sécuriser l'ERP - préserver le bâtiment"],
    correct: 1,
    explanation: "Les 3 objectifs de la règlementation ERP : évacuation, action des secours, limitation de la propagation."
  },
  {
    theme: "Incendie",
    q: "À leur arrivée sur le site, les pompiers vous demandent de les conduire sur le lieu du sinistre, que faites-vous ?",
    options: ["Vous demandez l'autorisation à votre hiérarchie", "Vous leur remettez un plan des lieux", "Vous leur demandez une pièce d'identité, et leur établissez un badge", "Vous les guidez sur les lieux du sinistre"],
    correct: 3,
    explanation: "On guide directement les secours vers le sinistre : c'est une priorité absolue."
  },
  {
    theme: "Incendie",
    q: "Quelle est la première chose à faire lors de la découverte d'un incendie ?",
    options: ["Courir chercher de l'aide", "Utiliser un extincteur", "Déclencher l'alarme incendie", "Prendre des photos"],
    correct: 2,
    explanation: "Ordre : alerter (déclencher l'alarme) > alarmer les secours > attaquer le feu si possible sans se mettre en danger."
  },
  {
    theme: "Incendie",
    q: "Selon la règlementation européenne, un matériau est classé selon les critères suivants :",
    options: ["Dureté - inflammabilité - dangerosité de la fumée", "Inflammabilité - dangerosité des fumées - chutes de gouttes enflammées", "Stabilité au feu - inflammabilité - chute de gouttes enflammées", "Aucune des réponses proposées"],
    correct: 1,
    explanation: "Classement euroclasse : réaction au feu (inflammabilité) + production de fumées (s) + gouttes enflammées (d)."
  },
  {
    theme: "Incendie",
    q: "Sur les consignes générales que doit-on trouver ?",
    options: ["Les moyens d'alerte", "Le mode d'emploi des différents extincteurs", "L'emplacement des sirènes d'évacuation", "L'adresse personnelle du responsable sécurité de l'établissement", "Aucune des réponses proposées"],
    correct: 0,
    explanation: "Les consignes générales affichent les moyens d'alerte (numéros secours, dispositifs sur place)."
  },
  {
    theme: "Incendie",
    q: "La poudre ABC agit par :",
    options: ["Inhibition et étouffement", "Refroidissement et étouffement", "Pulvérisation et inhibition", "Aucune des réponses précédentes"],
    correct: 0,
    explanation: "La poudre polyvalente ABC agit par inhibition chimique (casse la réaction en chaîne) et étouffement."
  },
  
  // ========== POI / PLANS D'URGENCE ==========
  {
    theme: "Plans d'urgence",
    q: "Qui met en place un POI ?",
    options: ["L'exploitant du site", "Le ministre de l'intérieur", "Le préfet", "Le Maire", "Le directeur des opérations de secours", "Aucune des réponses précédentes"],
    correct: 0,
    explanation: "Le POI (Plan d'Opération Interne) est mis en place par l'exploitant du site pour gérer un sinistre en interne."
  },
  {
    theme: "Plans d'urgence",
    q: "La CLAC est implantée à un niveau :",
    options: ["International", "National", "Régional", "Départemental"],
    correct: 2,
    explanation: "La CLAC (Cellule Locale d'Analyse et de Coordination) est implantée au niveau régional."
  },
  {
    theme: "Plans d'urgence",
    q: "Le ou les risques majeurs auxquels nous pouvons être exposés sont :",
    options: ["Les risques naturels", "Les risques technologiques", "Les risques de transports collectifs", "Toutes les réponses sont bonnes"],
    correct: 3,
    explanation: "Les risques majeurs couvrent : naturels (séismes, inondations), technologiques (industriels, nucléaires), transports (ferroviaires, aériens)."
  },
  
  // ========== RONDES ==========
  {
    theme: "Rondes",
    q: "Qu'est-ce qu'une ronde aléatoire ?",
    options: ["C'est une ronde au cours de laquelle il faudra suivre un itinéraire précis sans utiliser un contrôleur de ronde", "C'est une ronde au cours de laquelle il faudra suivre un itinéraire de ronde pointé", "C'est une ronde de surveillance sans itinéraire déterminé", "Elle n'existe pas"],
    correct: 2,
    explanation: "Ronde aléatoire = sans itinéraire fixe, pour déjouer les habitudes observées par un malfaiteur."
  },
  {
    theme: "Rondes",
    q: "Le but d'une ronde aléatoire c'est :",
    options: ["De piéger le personnel", "De surveiller la température extérieure", "De prévenir les risques incendie et les actes de malveillance", "De faire une ronde à heure fixe", "Aucune des réponses précédentes"],
    correct: 2,
    explanation: "L'objectif d'une ronde : prévention des risques incendie et détection des actes de malveillance."
  },
  {
    theme: "Rondes",
    q: "Quelle est la principale responsabilité d'un agent lors d'une ronde de sécurité ?",
    options: ["Dormir entre les rondes", "Chercher des objets de valeur", "Vérifier la sécurité des installations et signaler tout problème", "Appréhender tout intrus rencontré"],
    correct: 2,
    explanation: "Une ronde = vérification préventive + signalement des anomalies. On n'appréhende pas par défaut."
  },
  {
    theme: "Rondes",
    q: "Quel type d'incident un agent de sécurité peut-il anticiper en effectuant des rondes régulières ?",
    options: ["Les cambriolages", "Les accidents de la route", "Les pannes électriques", "Les grèves"],
    correct: 0,
    explanation: "Les rondes ont un rôle dissuasif principalement contre les intrusions et cambriolages."
  },
  
  // ========== ARMES & CATÉGORIES ==========
  {
    theme: "Armes",
    q: "Dans la liste ci-dessous, cochez la série d'armes entrant dans la catégorie D :",
    options: ["Magnum 357, lance flamme, pistolet mitrailleur", "Bombe lacrymogène, matraque, poing américain", "Masque à gaz, carabine de foire, fusil à pompe", "Lance-roquette, pistolet d'abattage, sabre laser"],
    correct: 1,
    explanation: "Catégorie D = armes en vente libre aux majeurs. La bombe lacrymogène (≤100ml), la matraque télescopique, le poing américain, les tonfas, cutters et couteaux de poche appartiennent à cette catégorie. Les autres propositions relèvent de catégories A, B ou C (autorisation ou déclaration obligatoire)."
  },
  {
    theme: "Armes",
    q: "Une arme par « destination » est :",
    options: ["Tout objet susceptible de présenter un danger s'il est détourné de son utilisation", "Tout objet susceptible de présenter un danger s'il ressemble à une arme", "Tout objet pouvant être lancé", "Une arme envoyée par la poste"],
    correct: 0,
    explanation: "Arme par destination = objet quelconque détourné pour blesser (ex : tournevis, bouteille)."
  },
  {
    theme: "Armes",
    q: "Selon le Livre VI du CSI l'APS peut être armé :",
    options: ["Oui tout le temps", "Non jamais", "Oui sous certaines conditions", "Avec ses propres armes uniquement"],
    correct: 2,
    explanation: "L'armement est autorisé sous conditions strictes (autorisation préfectorale, formation spécifique, site à risques)."
  },
  
  // ========== PALPATION / FOUILLE ==========
  {
    theme: "Palpation / Fouille",
    q: "Pour effectuer une palpation sur une personne l'agent doit :",
    options: ["Avoir un an d'ancienneté", "Porter des gants", "Être accompagné d'un autre agent", "Avoir suivi une formation à cette tâche", "Aucune des réponses précédentes"],
    correct: 3,
    explanation: "La palpation nécessite une formation spécifique + le consentement de la personne + être de même sexe si possible."
  },
  {
    theme: "Palpation / Fouille",
    q: "Dans quel cas un agent de sécurité est-il autorisé à effectuer une palpation de sécurité ?",
    options: ["Toujours, dès qu'il en ressent le besoin", "Lorsqu'il y a un soupçon raisonnable de possession d'objets dangereux", "Après avoir informé la police", "Lorsque la personne refuse de coopérer"],
    correct: 1,
    explanation: "La palpation suppose un soupçon raisonnable et le consentement. Dans les cas prévus : Vigipirate, grands événements."
  },
  {
    theme: "Palpation / Fouille",
    q: "Pouvez-vous fouiller une personne suspectée de vol ?",
    options: ["Non c'est un acte illégal, un abus de pouvoir", "Oui, sur ordre de mon Directeur", "Oui c'est mon devoir de citoyen", "Seulement en flagrant délit (art 53 du CPP)", "Aucune des réponses précédentes"],
    correct: 3,
    explanation: "La fouille n'est possible qu'en flagrant délit (article 53 CPP). Le consentement est toujours nécessaire."
  },
  {
    theme: "Palpation / Fouille",
    q: "Quelle est la limite de la palpation de sécurité ?",
    options: ["L'agent peut fouiller les poches, mais pas les effets personnels", "L'agent peut retirer les vêtements si nécessaire", "L'agent doit s'assurer de ne pas porter atteinte à la dignité de la personne", "L'agent peut utiliser des outils pour explorer les vêtements"],
    correct: 2,
    explanation: "La palpation est réalisée par-dessus les vêtements, avec dignité et respect de la personne."
  },
  {
    theme: "Palpation / Fouille",
    q: "Quelle est la différence entre une palpation de sécurité et une fouille ?",
    options: ["Une fouille est plus invasive et nécessite l'intervention des forces de l'ordre", "Une palpation se fait sans contact physique", "Une fouille est effectuée uniquement sur les véhicules", "Il n'y a pas de différence"],
    correct: 0,
    explanation: "Palpation = tapotage par-dessus les vêtements par APS formé. Fouille = inspection approfondie réservée aux OPJ."
  },
  {
    theme: "Palpation / Fouille",
    q: "Quel est le but de la palpation de sécurité ?",
    options: ["Montrer que la sécurité est bien faite", "Détecter sur une personne des objets illicites", "Vérifier que les personnes ne volent pas en quittant le site", "Rassurer les visiteurs du site", "Aucune des réponses précédentes"],
    correct: 1,
    explanation: "La palpation vise à détecter la présence d'objets dangereux ou illicites (armes, explosifs)."
  },
  {
    theme: "Palpation / Fouille",
    q: "Que signifie \"fouille au corps\" ?",
    options: ["Un examen médical complet", "Une vérification physique des vêtements et des effets personnels d'une personne", "Une analyse des empreintes digitales", "Une inspection des chaussures"],
    correct: 1,
    explanation: "La fouille au corps = inspection physique des vêtements et effets personnels. Réservée aux forces de l'ordre."
  },
  
  // ========== CARTE PROFESSIONNELLE / CNAPS ==========
  {
    theme: "Carte pro / CNAPS",
    q: "Quelles sont les indications notifiées sur la carte de service d'un agent ?",
    options: ["Nom, prénom, âge, adresse", "Nom, prénom, fonction, numéro CNAPS", "Nom, âge, numéro CNAPS", "Nom, prénom, fonction, adresse", "Aucune des réponses précédentes"],
    correct: 1,
    explanation: "La carte professionnelle contient : nom, prénom, fonction et numéro CNAPS. Jamais l'adresse ni l'âge."
  },
  {
    theme: "Carte pro / CNAPS",
    q: "Quelle est la sanction pour un agent de sécurité qui exerce sans être titulaire d'une carte professionnelle valide ?",
    options: ["Aucune sanction", "Une amende uniquement", "Une amende et une peine de prison", "Une simple réprimande"],
    correct: 2,
    explanation: "Exercer sans carte pro valide = 3 ans d'emprisonnement et 45 000€ d'amende (art. L.617-1 CSI)."
  },
  {
    theme: "Carte pro / CNAPS",
    q: "Le Préfet peut obtenir :",
    options: ["Le relevé de condamnations", "Le Bulletin N° 1 du casier judiciaire", "Le Bulletin N° 4 du casier judiciaire", "Le relevé des condamnations pénales", "Le bulletin administratif des condamnations"],
    correct: 1,
    explanation: "Le Préfet (via le CNAPS) consulte le B1 du casier judiciaire. Le B3 est celui que peut demander le citoyen."
  },
  {
    theme: "Carte pro / CNAPS",
    q: "Parmi les activités prévues par le livre VI du code de la sécurité intérieure, l'une d'entre elles n'existe pas :",
    options: ["Surveillance gardiennage", "Protection des personnes", "Policiers municipaux", "Transporteurs de fonds", "Aucune des réponses précédentes"],
    correct: 2,
    explanation: "Les policiers municipaux relèvent de la sécurité publique (livre V), pas de la sécurité privée (livre VI)."
  },
  
  // ========== TRAVAIL / DROIT DU TRAVAIL ==========
  {
    theme: "Droit du travail",
    q: "Qu'est-ce qu'un accident du travail ?",
    options: ["Tout accident survenant à une personne qui a du travail", "Tout accident survenant pendant les heures de travail ou trajet domicile direct", "Tout accident survenant pendant les heures de travail supplémentaire", "Aucune des réponses précédentes"],
    correct: 1,
    explanation: "L'accident du travail couvre l'activité professionnelle ET le trajet domicile-travail direct."
  },
  {
    theme: "Droit du travail",
    q: "Qu'est-ce que le droit de retrait du salarié ?",
    options: ["Demander une avance sur salaire à son patron", "Retirer de l'argent sur le compte de la société de sécurité", "Quitter son lieu de travail en cas de danger grave et imminent", "Le droit de retirer sa parole donnée"],
    correct: 2,
    explanation: "Le droit de retrait permet de quitter son poste en cas de danger grave et imminent pour sa vie ou sa santé."
  },
  {
    theme: "Droit du travail",
    q: "La notion de danger est définie dans le code du travail comme :",
    options: ["Ce qui fait mal", "L'accident en lui-même", "L'occurrence du risque", "Aucune de ces définitions"],
    correct: 2,
    explanation: "Le danger est l'occurrence du risque, c'est-à-dire sa concrétisation."
  },
  {
    theme: "Droit du travail",
    q: "Vous êtes en arrière caisse dans un magasin. Le directeur vous demande d'aller ranger des caddies. Que faites-vous ?",
    options: ["Le client est roi, vous vous exécutez", "Je rends compte à mon chef d'équipe pour qu'il me donne l'accord de quitter mon poste", "J'informe le client que cela peut être considéré comme un délit de marchandage", "Je lui dis que je ne suis pas payé pour cela"],
    correct: 2,
    explanation: "Effectuer des tâches hors mission de sécurité = délit de marchandage (prêt illicite de main d'œuvre)."
  },
  {
    theme: "Droit du travail",
    q: "Qu'est-ce qu'un DATI ?",
    options: ["Dispositif adapté au travail isolé", "Dotation adaptée au travailleur isolé", "Dispositif d'alarme du travailleur isolé", "Dispositif adapté au travailleur indépendant"],
    correct: 2,
    explanation: "DATI = Dispositif d'Alarme pour Travailleur Isolé (bouton de détresse, détection de chute)."
  },
  {
    theme: "Droit du travail",
    q: "Dans la convention collective on peut trouver :",
    options: ["Des bulletins de salaire", "Les différentes primes (nuit, férié, cyno...)", "Des grilles d'embauche", "La couleur des tenues des Agents", "Aucune des réponses précédentes"],
    correct: 1,
    explanation: "La convention collective contient les primes, grilles de salaire, conditions de travail. Pas de bulletins individuels."
  },
  
  // ========== DÉONTOLOGIE / SECRET PRO ==========
  {
    theme: "Déontologie",
    q: "Quelle est la principale obligation d'un agent de sécurité concernant le respect de la vie privée des individus surveillés ?",
    options: ["Il n'a aucune obligation spécifique", "Il doit signaler toutes les infractions à son supérieur", "Il doit s'assurer que les informations personnelles recueillies ne sont pas divulguées", "Il peut partager les informations avec ses collègues"],
    correct: 2,
    explanation: "Obligation de discrétion et de confidentialité sur toutes les informations recueillies en service."
  },
  {
    theme: "Déontologie",
    q: "Que risque un agent de sécurité en cas de violation du secret professionnel ?",
    options: ["Une simple réprimande", "Une amende et/ou une peine d'emprisonnement", "Une suspension temporaire", "Rien, s'il s'agit d'informations non sensibles"],
    correct: 1,
    explanation: "Violation du secret pro : 1 an d'emprisonnement et 15 000€ d'amende (art. 226-13 CP)."
  },
  
  // ========== ÉQUIPEMENT & INTERVENTION ==========
  {
    theme: "Équipement / Intervention",
    q: "Quel est l'équipement de base que doit toujours porter un agent de sécurité ?",
    options: ["Un gilet pare-balles", "Un talkie-walkie et une lampe torche", "Une arme à feu", "Un carnet et un stylo"],
    correct: 1,
    explanation: "Équipement de base : moyen de communication (radio/talkie) + lampe torche pour les rondes."
  },
  {
    theme: "Équipement / Intervention",
    q: "Que doit faire un agent de sécurité s'il est témoin d'un vol en cours ?",
    options: ["Se cacher pour ne pas être vu", "Appeler les autorités compétentes et suivre discrètement le suspect", "S'interposer immédiatement et appréhender le voleur", "Prendre des photos pour les preuves"],
    correct: 1,
    explanation: "On alerte les forces de l'ordre + surveillance discrète jusqu'à leur arrivée."
  },
  {
    theme: "Équipement / Intervention",
    q: "Que signifie le terme \"levée de doute\" en sécurité ?",
    options: ["S'assurer qu'il n'y a pas de danger réel après la détection d'une alarme", "Remettre en cause l'autorité d'un supérieur", "Mettre en doute les propos d'un témoin", "Déclencher une alarme pour vérifier son bon fonctionnement"],
    correct: 0,
    explanation: "Levée de doute = vérification sur place après une alarme pour confirmer ou infirmer le danger."
  },
  {
    theme: "Équipement / Intervention",
    q: "Le rôle principal de l'intervenant en télésécurité est de :",
    options: ["Faire fuir des malfaiteurs", "Neutraliser par la force des malfaiteurs", "Effectuer une levée de doute", "Faire des rondes de sécurité régulières", "Aucune des réponses précédentes"],
    correct: 2,
    explanation: "L'intervenant télésécurité se déplace pour effectuer une levée de doute après alarme."
  },
  {
    theme: "Équipement / Intervention",
    q: "Quelle est la première étape d'une intervention en cas de crise ?",
    options: ["Comprendre la situation en recueillant toutes les informations disponibles", "Appeler les médias", "Bloquer toutes les sorties", "Prendre des photos de la scène"],
    correct: 0,
    explanation: "La méthode SAFER : S'informer avant d'agir. Collecter un maximum d'infos pour une réponse adaptée."
  },
  {
    theme: "Équipement / Intervention",
    q: "Quelle est la première chose à faire en cas d'accident sur le lieu de travail ?",
    options: ["Prendre une pause", "Secourir la victime et alerter les secours", "Attendre que quelqu'un d'autre réagisse", "Remplir un rapport d'incident immédiatement"],
    correct: 1,
    explanation: "Priorité absolue : protéger, alerter, secourir (méthode PAS)."
  },
  {
    theme: "Équipement / Intervention",
    q: "Que doit vérifier un agent de sécurité lors de la fermeture des locaux ?",
    options: ["Que toutes les lumières sont éteintes", "Que tous les employés sont partis", "Que toutes les issues et points d'accès sont sécurisés", "Que les ordinateurs sont éteints"],
    correct: 2,
    explanation: "Mission principale de fermeture : vérifier la sécurisation des accès (portes, fenêtres, alarme)."
  },
  {
    theme: "Équipement / Intervention",
    q: "Quelle est la meilleure façon de prévenir les risques d'intrusion dans un bâtiment ?",
    options: ["Laisser toutes les lumières allumées", "Installer des systèmes de contrôle d'accès efficaces et surveiller les points d'entrée", "Fermer toutes les fenêtres", "Augmenter le nombre de visiteurs"],
    correct: 1,
    explanation: "Prévention intrusion = combinaison contrôle d'accès + surveillance active des points d'entrée."
  },
  
  // ========== VIDÉOSURVEILLANCE / CNIL ==========
  {
    theme: "Vidéosurveillance / CNIL",
    q: "En cas de contrôle de salariés avec enregistrement de données personnelles, quel organisme doit être informé ?",
    options: ["Le CNAPS", "La DIRECCTE", "La CNIL", "Le CSU"],
    correct: 2,
    explanation: "La CNIL encadre tout traitement de données personnelles, dont la vidéosurveillance des salariés."
  },
  {
    theme: "Vidéosurveillance / CNIL",
    q: "Pendant combien de temps des enregistrements vidéo peuvent-ils être gardés ?",
    options: ["Un mois minimum", "Un an", "Il n'y a pas de durée imposée", "Un mois maximum ou plus s'il y a enquête judiciaire"],
    correct: 3,
    explanation: "Durée de conservation : 1 mois maximum, sauf réquisition judiciaire prolongeant la conservation."
  },
  {
    theme: "Vidéosurveillance / CNIL",
    q: "Quel est le rôle de la CNIL concernant les systèmes de vidéosurveillance ?",
    options: ["Installer les caméras", "Contrôler la conformité des systèmes de vidéosurveillance avec la réglementation sur la protection des données personnelles", "Former les agents de sécurité à l'utilisation des caméras", "Distribuer des autorisations pour les installations de vidéosurveillance"],
    correct: 1,
    explanation: "La CNIL contrôle la conformité des systèmes avec le RGPD et le respect des données personnelles."
  },
  {
    theme: "Vidéosurveillance / CNIL",
    q: "Quelle est la fonction principale d'un détecteur de mouvement ?",
    options: ["Détecter les variations de température", "Détecter les mouvements suspects dans une zone protégée", "Enregistrer les conversations", "Surveiller le niveau sonore"],
    correct: 1,
    explanation: "Détecteur de mouvement = détection d'intrusion dans une zone protégée (IR, volumétrique)."
  },
  {
    theme: "Vidéosurveillance / CNIL",
    q: "Les systèmes de détection anti-intrusion sont :",
    options: ["Périphériques, circulaires, ponctuels", "Infra rouge, discrets, ou sonores", "Périphériques, périmétriques, volumétriques", "Aucune des réponses précédentes"],
    correct: 2,
    explanation: "3 types de détection : périphérique (limite propriété), périmétrique (sur le bâtiment), volumétrique (intérieur)."
  },
  
  // ========== CONSIGNES ==========
  {
    theme: "Consignes",
    q: "Les consignes particulières peuvent être :",
    options: ["Uniquement Permanentes", "Uniquement Ponctuelles", "Permanentes ou ponctuelles", "Aucune des réponses précédentes"],
    correct: 2,
    explanation: "Les consignes particulières peuvent être permanentes (récurrentes) ou ponctuelles (événements spécifiques)."
  },
  
  // ========== ÉVÉNEMENTIEL ==========
  {
    theme: "Événementiel",
    q: "Parmi les propositions suivantes, quelles sont celles qui correspondent à une activité dite « événementiel » ?",
    options: ["Industrie chimique, salon de l'agriculture, match de football", "Salon de l'habitat, meeting politique, manifestation sportive", "Établissement scolaire, exposition temporaire, bal champêtre", "Meeting politique, manifestation sportive, pot d'adieu au bureau"],
    correct: 1,
    explanation: "Événementiel = manifestations publiques ponctuelles : salons, meetings, compétitions sportives."
  },
  
  // ========== AGENT CYNOPHILE ==========
  {
    theme: "Agent cynophile",
    q: "Quelle est la principale caractéristique d'un agent cynophile de sécurité ?",
    options: ["Travailler avec un chien dressé", "Travailler de nuit", "Porter une arme", "Conduire une voiture de patrouille"],
    correct: 0,
    explanation: "L'agent cynophile travaille avec un chien dressé (détection, dissuasion)."
  },
  {
    theme: "Agent cynophile",
    q: "L'emploi des chiens est soumis à des obligations :",
    options: ["Le chien doit être confirmé par un club canin", "L'Agent de sécurité doit être propriétaire du chien", "Ils ne peuvent travailler que la nuit", "Seuls les chiens de 1° catégorie peuvent être utilisés"],
    correct: 1,
    explanation: "L'APS cynophile doit être propriétaire du chien, avec carte pro cynophile spécifique."
  },
  
  // ========== SSI / UCMC ==========
  {
    theme: "SSI",
    q: "Dans le SSI, l'UCMC se trouve au niveau :",
    options: ["Du SDI", "De l'UAE", "Du CMSI", "Dans aucun de ces modules"],
    correct: 2,
    explanation: "UCMC (Unité de Commande Manuelle Centralisée) est un composant du CMSI (Centralisateur de Mise en Sécurité Incendie)."
  },
  
  // ========== SÉCURITÉ PORTUAIRE ==========
  {
    theme: "Divers",
    q: "Quelle est la principale mission d'un agent de sécurité en zone portuaire ?",
    options: ["Assurer la sécurité des navires", "Contrôler l'accès des personnes et des marchandises", "Surveiller la météo", "Réparer les bateaux"],
    correct: 1,
    explanation: "En zone portuaire : contrôle des accès aux zones réglementées (code ISPS)."
  },
  // ========== AJOUTS TESTS LLL/HGFD/SQ ==========
  {
    theme: "Divers",
    q: "Quelle est la définition d'un \"plan de prévention des risques\" ?",
    options: ["Un document décrivant les mesures à prendre pour limiter les risques sur un site", "Un plan de construction d'un bâtiment sécurisé", "Une liste de numéros d'urgence", "Un rapport sur les incidents passés"],
    correct: 0,
    explanation: "Le plan de prévention des risques est un document réglementaire décrivant les mesures à prendre pour limiter les risques identifiés sur un site, notamment en cas de coactivité entre entreprises."
  },
  {
    theme: "Incendie",
    q: "Quelle est la norme d'étiquetage d'informations obligatoires sur les emballages de produits dangereux ?",
    options: ["IP2X", "IP3X", "SGH", "Aucune obligation n'existe"],
    correct: 2,
    explanation: "Le SGH (Système Général Harmonisé) est la norme internationale d'étiquetage des produits chimiques dangereux : pictogrammes en losange rouge, mentions de danger, conseils de prudence. IP2X/IP3X sont des indices de protection électrique, pas d'étiquetage chimique."
  },
  {
    theme: "Appréhension / Droit",
    q: "Un APS détecte un vol en surface de vente. Que doit-il faire ?",
    options: ["Le signaler immédiatement au directeur du magasin", "Le signaler à l'agent arrière-caisse et continuer la surveillance de la zone de vente pour tenter de constater de nouveaux délits", "Aucune des autres réponses", "Il le signale seulement à l'agent arrière-caisse", "Il suit la personne discrètement jusqu'à son passage en caisse et le signale à l'agent arrière-caisse"],
    correct: 1,
    explanation: "L'APS qui détecte un vol en surveillance surface doit transmettre l'info à l'agent arrière-caisse (qui prendra le relais pour l'interpellation éventuelle) et continuer sa mission de surveillance. Il ne doit pas abandonner la zone qu'il surveille."
  },
  {
    theme: "Appréhension / Droit",
    q: "Que doit faire un agent de sécurité s'il constate une infraction mineure (ex : vol à l'étalage) ?",
    options: ["Appeler immédiatement les forces de l'ordre", "Laisser partir la personne après un avertissement", "Dresser un procès-verbal et appeler un supérieur", "Ignorer l'infraction si elle est mineure"],
    correct: 2,
    explanation: "Selon Quizzbox : l'APS rend compte à son supérieur hiérarchique et consigne les faits (rapport d'incident). Note importante : l'APS ne peut PAS véritablement dresser un procès-verbal (prérogative des OPJ). L'intitulé est ambigu — en pratique il s'agit de rédiger un rapport détaillé puis d'alerter la hiérarchie qui décidera d'appeler les forces de l'ordre. Ne pas confondre avec un vrai PV de police."
  }
];

// ========== QUESTIONS ORALES TFP ==========
const questionsOral = [
  {
    q: "Présentez-vous !",
    a: "Je m'appelle [Prénom et Nom], et je suis là aujourd'hui pour passer l'examen pratique du TFP APS (Titre à Finalité Professionnelle d'Agent de Prévention et de Sécurité)."
  },
  {
    q: "Que signifie TFP APS ?",
    a: "Titre à Finalité Professionnelle d'Agent de Prévention et de Sécurité."
  },
  {
    q: "Qu'est-ce que le CNAPS ?",
    a: "C'est le Conseil National des Activités Privées de Sécurité, un établissement public rattaché au ministère de l'Intérieur. Il est chargé de réguler, contrôler et discipliner les métiers de la sécurité privée."
  },
  {
    q: "Quelles sont les conditions pour exercer comme agent de sécurité ?",
    a: "• Avoir un casier judiciaire vierge (bulletin n°2)\n• Suivre une formation TFP APS dans un centre agréé\n• Obtenir une carte professionnelle délivrée par le CNAPS\n• Avoir une aptitude médicale\n• Être majeur et autorisé à travailler en France"
  },
  {
    q: "Qu'est-ce que la carte professionnelle ?",
    a: "C'est un document officiel délivré par le CNAPS, obligatoire pour exercer dans le domaine de la sécurité privée. Elle est valable 5 ans et doit être renouvelée."
  },
  {
    q: "Combien de temps dure la formation TFP APS ?",
    a: "Elle dure 175 heures, soit environ 5 semaines."
  },
  {
    q: "Quelles sont les principales missions d'un agent de sécurité privée ?",
    a: "• Surveillance des biens et des personnes\n• Contrôle d'accès et filtrage\n• Rondes de sécurité\n• Intervention en cas d'intrusion ou d'incident\n• Gestion des conflits\n• Appel aux secours\n• Rédaction des rapports (main courante, rapport d'incident)"
  },
  {
    q: "Quels sont les équipements nécessaires pour une ronde ?",
    a: "• Radio émetteur-récepteur\n• Contrôleur de point\n• Lampe torche\n• Stylo et carnet de notes\n• Clés d'accès / badge / pass"
  },
  {
    q: "Qu'est-ce qu'une main courante ?",
    a: "C'est un registre dans lequel l'agent note toutes les informations importantes pendant sa vacation (prises de poste, anomalies, incidents, visites, événements, etc.)."
  },
  {
    q: "Quelles sont les règles pour un contrôle d'accès ?",
    a: "• Vérification de l'identité\n• Contrôle des autorisations (badge, liste, ordre de mission)\n• Application stricte des consignes\n• Signalement de toute anomalie à la hiérarchie"
  },
  {
    q: "Que faire en cas d'incident (bagarre, vol, intrusion) ?",
    a: "• Observer et sécuriser les lieux sans s'exposer\n• Prévenir les secours compétents (police, pompiers)\n• Rédiger un rapport détaillé\n• Informer sa hiérarchie"
  },
  {
    q: "Quels sont les types de rondes ?",
    a: "• Ronde d'ouverture / fermeture\n• Ronde préventive\n• Ronde de surveillance incendie\n• Ronde technique (vérification des équipements)"
  },
  {
    q: "Mission pendant la ronde ?",
    a: "• S'assurer de la vacuité des dégagements\n• Contrôler les moyens d'extinction\n• Contrôler l'éclairage normal et de sécurité\n• Relever les anomalies liées à la sécurité\n• Surveiller les points sensibles et dangereux de l'établissement"
  },
  {
    q: "Quelles sont les qualités attendues d'un agent de sécurité ?",
    a: "• Discrétion\n• Maîtrise de soi\n• Sens de l'observation\n• Ponctualité\n• Respect des consignes et de la loi"
  },
  {
    q: "Quels sont les comportements interdits pour un agent de sécurité ?",
    a: "• Porter une arme sans autorisation\n• Porter atteinte à la liberté des personnes\n• Se substituer aux forces de l'ordre\n• Utiliser la force sans justification\n• Avoir un comportement agressif ou discriminatoire"
  },
  {
    q: "Comment fait-on une prise de service ?",
    a: "La prise de service commence à l'extérieur du bâtiment : on s'assure de la vacuité des voies engins et échelles, des bouches et poteaux incendie (BI/PI), et de la présence du plan d'intervention à l'entrée du bâtiment.\n\nUne fois au PC de Sécurité :\n\n1. APPEL À L'ASTREINTE\n« Bonjour, c'est Monsieur [Nom] pour la prise de service SSIAP 1 de 7h à 19h à [nom du site] »\n\n2. VÉRIFICATION DU MATÉRIEL\nPour chaque élément, 3 critères :\n• La présence\n• Le nombre (quantité)\n• L'état de fonctionnement\nEn cas d'absence, de manque ou de défaut → signaler sur la main courante\n(sauf clés et badges : vérifier d'abord la traçabilité sur les registres)\n\n3. LECTURE DES CONSIGNES JOURNALIÈRES\nL'ensemble des tâches prévues pour la vacation : travaux, permis feu, intervention des entreprises extérieures...\n\n4. CONTRÔLE DU SSI\na) S'assurer qu'il est sous tension → voyant vert sur ECS ou TS\nb) S'assurer qu'il n'y a pas d'autres voyants :\n   • Voyant jaune fixe = dérangement → noter sur MC + aviser le technicien\n   • Voyant jaune clignotant = défaut de position d'attente → réarmer le DAS concerné\nc) Test de signalisation : bon fonctionnement des voyants, alarme restreinte et écran\n\n5. MAIN COURANTE\nLecture de la main courante depuis le dernier jour de travail, ouverture de la main courante de la journée, et noter les anomalies constatées à la prise de service."
  },
  {
    q: "Définition du SSI ?",
    a: "Le SSI (Système de Sécurité Incendie) est un ensemble de matériel qui collecte les informations sur les incendies, les traite et met en sécurité l'établissement."
  },
  {
    q: "Combien de catégories de SSI existe-t-il ?",
    a: "5 catégories : A, B, C, D, E."
  },
  {
    q: "Comment sont classés les SSI ?",
    a: "Du plus sévère au moins sévère. Le plus sévère est le SSI catégorie A."
  },
  {
    q: "Quelle est la différence entre le SSI A et B ?",
    a: "La présence des DAI (Détecteurs Automatiques d'Incendie) dans le SSI A."
  },
  {
    q: "Où trouve-t-on le SSI catégorie A ?",
    a: "Dans tous les IGH (Immeubles de Grande Hauteur) et les ERP de type J, O, U, ou bien les ERP avec locaux à sommeil."
  },
  {
    q: "Les différents types d'éclairage ?",
    a: "• Éclairage normal\n• Éclairage de remplacement\n• Éclairage de sécurité : éclairage d'ambiance (antipanique) et éclairage d'évacuation"
  },
  {
    q: "Quelle est l'autonomie de l'éclairage de sécurité ?",
    a: "Minimum 1 heure en ERP."
  },
  {
    q: "Comment contrôler un extincteur ?",
    a: "1. Présent, accroché et accessible\n2. L'extincteur correspond à la signalétique (agent extincteur et classes de feu)\n3. Présence de la goupille de sécurité et du scellé\n4. État général de l'extincteur (corps et flexible)\n5. Date de la dernière vérification réglementaire (quotidienne par SSIAP, annuelle par société agréée)"
  }
];