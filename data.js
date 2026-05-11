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
    options: ["En cas de comportement suspect ou pour l'accès à un site sécurisé", "À tout moment et sans avoir à fournir la moindre justification légale", "Uniquement sur ordre des forces de l'ordre", "Pour vérifier l'âge de la personne"],
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
    options: ["Identifier les personnes par leurs caractéristiques physiques uniques", "Mesurer la température corporelle, selon les dispositions légales applicables", "Remplacer les caméras de surveillance", "Accélérer le passage aux portiques de sécurité"],
    correct: 0,
    explanation: "La biométrie identifie les personnes via des caractéristiques physiques uniques (empreinte, iris, visage)."
  },
  {
    theme: "Contrôle d'accès",
    q: "Dans quel cas un agent de sécurité est-il en droit de refuser l'accès à une personne ?",
    options: ["Lorsque la personne refuse de se soumettre aux contrôles de sécurité", "Lorsque la personne est mal habillée", "Lorsque la personne semble nerveuse, selon les dispositions légales applicables", "Lorsque la personne ne parle pas la langue du pays"],
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
    options: ["Non, sauf si l'infraction n'a aucun lien avec la vente", "Oui, peut être, selon la réglementation actuellement en vigueur", "Aucune des autres réponses, selon les dispositions légales applicables", "Non dans tous les cas, selon la réglementation actuellement en vigueur", "Oui dans tous les cas, selon la réglementation actuellement en vigueur"],
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
    options: ["Intervenir physiquement sans attendre pour maîtriser la personne", "Ignorer la personne", "Tenter de calmer la situation en parlant doucement et en gardant ses distances", "Appeler la police et fuir"],
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
    options: ["Quand l'incandescence est atteinte, selon les dispositions légales applicables", "Lorsque la température est suffisante, les vapeurs s'enflamment au contact de l'oxygène", "Quand les fumées sont suffisamment chaudes", "Aucune des réponses précédentes, selon les dispositions légales applicables"],
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
    options: ["Les moyens de secours, les accès, selon les dispositions légales applicables", "Les divers locaux à risques du site, les accès, les moyens de secours, les circuits de rondes", "Les issues, les extincteurs, les téléphones d'alerte", "Aucune des réponses précédentes, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "La lecture de plan doit être complète : locaux à risques, accès, moyens de secours ET circuits de ronde."
  },
  {
    theme: "Incendie",
    q: "L'unité de signalisation sur votre CMSI présente un voyant rouge clignotant que devez-vous faire immédiatement et dans tous les cas ?",
    options: ["Déclencher l'alarme générale, selon les dispositions légales applicables", "Informer dès son arrivée le commandant des opérations de secours", "Appeler vos agents en ronde pour qu'ils regagnent le PC immédiatement", "Attendre les consignes de votre chef de service", "Utiliser la fonction de l'UCMC et télécommander le DAS, à distance, afin de le mettre en position de sécurité"],
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
    options: ["Courir chercher de l'aide", "Utiliser un extincteur", "Déclencher l'alarme incendie", "Photographier la scène sans toucher aux éléments avant l'arrivée des autorités"],
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
    options: ["De piéger le personnel, cette option ne correspond pas à la procédure réglementaire", "De surveiller la température extérieure", "De prévenir les risques incendie et les actes de malveillance", "De faire une ronde à heure fixe, selon les dispositions légales applicables", "Aucune des réponses précédentes, selon les dispositions légales applicables"],
    correct: 2,
    explanation: "L'objectif d'une ronde : prévention des risques incendie et détection des actes de malveillance."
  },
  {
    theme: "Rondes",
    q: "Quelle est la principale responsabilité d'un agent lors d'une ronde de sécurité ?",
    options: ["Dormir entre les rondes, cette option ne correspond pas à la procédure réglementaire", "Chercher des objets de valeur, selon les dispositions légales applicables", "Vérifier la sécurité des installations et signaler tout problème", "Appréhender tout intrus rencontré, selon les dispositions légales applicables"],
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
    options: ["Toujours, dès qu'il en ressent le besoin", "Lorsqu'il y a un soupçon raisonnable de possession d'objets dangereux", "Après avoir informé la police, selon les dispositions légales applicables", "Lorsque la personne refuse de coopérer"],
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
    options: ["Une fouille est plus invasive et nécessite l'intervention des forces de l'ordre", "Une palpation se fait sans contact physique", "Une fouille est effectuée uniquement sur les véhicules", "Il n'y a pas de différence, selon les dispositions légales applicables"],
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
    options: ["Un examen médical complet, selon les dispositions légales applicables", "Une vérification physique des vêtements et des effets personnels d'une personne", "Une analyse des empreintes digitales, selon les dispositions légales applicables", "Une inspection des chaussures, selon les dispositions légales applicables"],
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
    options: ["Il n'a aucune obligation spécifique, selon les dispositions légales applicables", "Il doit signaler toutes les infractions à son supérieur", "Il doit s'assurer que les informations personnelles recueillies ne sont pas divulguées", "Il peut partager les informations avec ses collègues"],
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
    options: ["Comprendre la situation en recueillant toutes les informations disponibles", "Appeler les médias", "Bloquer toutes les sorties", "Photographier la scène et collecter les témoignages avant d'alerter"],
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
    options: ["Laisser toutes les lumières allumées, selon les dispositions légales applicables", "Installer des systèmes de contrôle d'accès efficaces et surveiller les points d'entrée", "Fermer toutes les fenêtres, selon les dispositions légales applicables", "Augmenter le nombre de visiteurs, selon les dispositions légales applicables"],
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
    options: ["Un mois minimum, utilisé uniquement dans des cas très spécifiques", "Un an, utilisé uniquement dans des cas très spécifiques", "Il n'y a pas de durée imposée", "Un mois maximum ou plus s'il y a enquête judiciaire"],
    correct: 3,
    explanation: "Durée de conservation : 1 mois maximum, sauf réquisition judiciaire prolongeant la conservation."
  },
  {
    theme: "Vidéosurveillance / CNIL",
    q: "Quel est le rôle de la CNIL concernant les systèmes de vidéosurveillance ?",
    options: ["Installer les caméras, cette option ne correspond pas à la procédure réglementaire", "Contrôler la conformité des systèmes de vidéosurveillance avec la réglementation sur la protection des données personnelles", "Former les agents de sécurité à l'utilisation des caméras", "Distribuer des autorisations pour les installations de vidéosurveillance"],
    correct: 1,
    explanation: "La CNIL contrôle la conformité des systèmes avec le RGPD et le respect des données personnelles."
  },
  {
    theme: "Vidéosurveillance / CNIL",
    q: "Quelle est la fonction principale d'un détecteur de mouvement ?",
    options: ["Détecter les variations de température", "Détecter les mouvements suspects dans une zone protégée", "Enregistrer les conversations", "Surveiller le niveau sonore, selon les dispositions légales applicables"],
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
    options: ["Assurer la sécurité des navires", "Contrôler l'accès des personnes et des marchandises", "Surveiller la météo, cette option ne correspond pas à la procédure réglementaire", "Réparer les bateaux, cette option ne correspond pas à la procédure réglementaire"],
    correct: 1,
    explanation: "En zone portuaire : contrôle des accès aux zones réglementées (code ISPS)."
  },
  // ========== AJOUTS TESTS LLL/HGFD/SQ ==========
  {
    theme: "Divers",
    q: "Quelle est la définition d'un \"plan de prévention des risques\" ?",
    options: ["Un document décrivant les mesures à prendre pour limiter les risques sur un site", "Un plan de construction d'un bâtiment sécurisé", "Une liste de numéros d'urgence, selon les dispositions légales applicables", "Un rapport sur les incidents passés, selon les dispositions légales applicables"],
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
,

  // ========== SSI — SYSTÈME DE SÉCURITÉ INCENDIE ==========
  {
    theme: "SSI",
    q: "Que signifie l'acronyme SSI ?",
    options: ["Système de Sécurité Incendie", "Service de Surveillance Interne", "Système de Signalisation d'Intrusion", "Service de Sécurité Incendie"],
    correct: 0,
    explanation: "SSI = Système de Sécurité Incendie. C'est l'ensemble des équipements qui détectent, traitent et mettent en sécurité un bâtiment en cas d'incendie."
  },
  {
    theme: "SSI",
    q: "Combien de catégories de SSI existe-t-il ?",
    options: ["3 (A, B, C)", "4 (A, B, C, D)", "5 (A, B, C, D, E)", "6 (A, B, C, D, E, F)"],
    correct: 2,
    explanation: "Il existe 5 catégories de SSI : A, B, C, D, E. La catégorie A est la plus complète (la plus sévère), la catégorie E la plus simple."
  },
  {
    theme: "SSI",
    q: "Quelle est la catégorie de SSI la plus complète ?",
    options: ["Catégorie E", "Catégorie C", "Catégorie B", "Catégorie A"],
    correct: 3,
    explanation: "La catégorie A est la plus complète et la plus sévère. Elle est obligatoire dans les IGH et certains ERP (type J, O, U, ou avec locaux à sommeil)."
  },
  {
    theme: "SSI",
    q: "Que signifie SDI dans un SSI ?",
    options: ["Système De Intervention", "Système de Détection Incendie", "Service De Inspection", "Système De Isolation"],
    correct: 1,
    explanation: "SDI = Système de Détection Incendie. Il comprend les détecteurs automatiques (DAI) et les déclencheurs manuels (DM) qui captent les signes d'incendie."
  },
  {
    theme: "SSI",
    q: "Que signifie SMSI ?",
    options: ["Système de Mise en Sécurité Incendie", "Service Mobile de Secours Incendie", "Système de Mesure de Sécurité Interne", "Surveillance Mobile de Site Incendie"],
    correct: 0,
    explanation: "SMSI = Système de Mise en Sécurité Incendie. Il reçoit les ordres du SDI et commande les DAS (Dispositifs Actionnés de Sécurité) pour mettre le bâtiment en sécurité."
  },
  {
    theme: "SSI",
    q: "Que signifie CMSI ?",
    options: ["Centrale de Mise en Sécurité Incendie", "Contrôle Mobile de Sécurité Interne", "Commission de Mesure et de Sécurité Incendie", "Centre de Management de Sécurité Interne"],
    correct: 0,
    explanation: "CMSI = Centrale de Mise en Sécurité Incendie. C'est le cerveau du SMSI qui centralise les informations et commande les actions de mise en sécurité."
  },
  {
    theme: "SSI",
    q: "Que signifie DAS ?",
    options: ["Détecteur Automatique de Sécurité", "Dispositif Actionné de Sécurité", "Déclencheur Automatique de Sécurité", "Direction Administrative de Sécurité"],
    correct: 1,
    explanation: "DAS = Dispositif Actionné de Sécurité. Ce sont les équipements commandés par le SMSI : portes coupe-feu, clapets de désenfumage, ascenseurs, ventilation..."
  },
  {
    theme: "SSI",
    q: "Que signifie DAI ?",
    options: ["Déclencheur Automatique d'Incendie", "Détecteur Automatique d'Incendie", "Dispositif Automatique d'Intervention", "Déclencheur Automatique d'Intervention"],
    correct: 1,
    explanation: "DAI = Détecteur Automatique d'Incendie. Ce sont les détecteurs (fumée, chaleur, flamme) qui détectent automatiquement un début d'incendie."
  },
  {
    theme: "SSI",
    q: "Un voyant rouge fixe sur le CMSI signifie :",
    options: ["Dérangement technique", "Mise en sécurité en cours ou effectuée", "Défaut de position d'attente", "Alimentation secteur présente"],
    correct: 1,
    explanation: "Voyant rouge fixe = mise en sécurité en cours ou effectuée (alarme feu). C'est le signal d'une détection incendie traitée par le système."
  },
  {
    theme: "SSI",
    q: "Un voyant jaune fixe sur le CMSI signifie :",
    options: ["Feu détecté", "Mise en sécurité effectuée", "Dérangement technique", "Alimentation de secours active"],
    correct: 2,
    explanation: "Voyant jaune fixe = dérangement technique. Il faut le noter sur la main courante et aviser le technicien de maintenance."
  },
  {
    theme: "SSI",
    q: "Un voyant jaune clignotant sur le CMSI signifie :",
    options: ["Un feu en cours détecté automatiquement par les capteurs du système", "Défaut de position d'attente d'un DAS", "Une coupure d'alimentation secteur affectant l'ensemble du tableau SSI", "Un test de fonctionnement en cours réalisé par un technicien de maintenance"],
    correct: 1,
    explanation: "Voyant jaune clignotant = défaut de position d'attente d'un DAS. Un dispositif actionné de sécurité n'est pas en position normale. Il faut réarmer le DAS concerné."
  },
  {
    theme: "SSI",
    q: "Un voyant vert sur le CMSI indique :",
    options: ["Une alarme feu déclenchée par la détection d'un incendie en cours", "Un dérangement technique signalant une anomalie sur le système", "Alimentation secteur présente, système en veille", "Un essai technique en cours effectué par un technicien agréé"],
    correct: 2,
    explanation: "Voyant vert = alimentation secteur présente, le SSI est sous tension et en veille normale. C'est l'état normal de fonctionnement."
  },
  {
    theme: "SSI",
    q: "Quelle est la différence entre SSI catégorie A et catégorie B ?",
    options: ["Le SSI A a des DAS supplémentaires", "Le SSI A intègre des DAI (détecteurs automatiques), le B non", "Le SSI B est plus complet que le A", "Il n'y a pas de différence majeure"],
    correct: 1,
    explanation: "La différence principale : le SSI catégorie A comporte des DAI (Détecteurs Automatiques d'Incendie) en plus des déclencheurs manuels. Le SSI B n'a que des déclencheurs manuels."
  },
  {
    theme: "SSI",
    q: "Dans quels établissements trouve-t-on obligatoirement un SSI catégorie A ?",
    options: ["Dans tous les ERP", "Dans les IGH et ERP avec locaux à sommeil (type J, O, U)", "Uniquement dans les usines", "Dans les établissements de moins de 50 personnes"],
    correct: 1,
    explanation: "SSI catégorie A obligatoire dans : tous les IGH (Immeubles de Grande Hauteur) et les ERP de type J (structures jeunesse), O (hôtels), U (sanitaires) ou tout ERP avec locaux à sommeil."
  },
  {
    theme: "SSI",
    q: "Que signifie ECS dans un SSI ?",
    options: ["Équipement de Contrôle et de Signalisation", "Extinction Centrale de Sécurité", "Équipe de Coordination de Sécurité", "Éclairage Central de Sécurité"],
    correct: 0,
    explanation: "ECS = Équipement de Contrôle et de Signalisation. C'est le tableau central du SDI qui reçoit les informations des détecteurs et les signale."
  },
  {
    theme: "SSI",
    q: "Que signifie UCMC ?",
    options: ["Unité de Contrôle et de Mise en Commande", "Unité Centrale de Mesure et de Contrôle", "Unité de Communication et de Maintenance Centralisée", "Unité de Contrôle de Mise en Coupure"],
    correct: 0,
    explanation: "UCMC = Unité de Contrôle et de Mise en Commande. C'est l'interface opérateur du CMSI permettant à l'agent de commander manuellement les DAS."
  },
  {
    theme: "SSI",
    q: "Qu'est-ce qu'un déclencheur manuel (DM) ?",
    options: ["Un extincteur automatique, selon les dispositions légales applicables", "Un boîtier rouge permettant à toute personne de déclencher l'alarme incendie manuellement", "Un système de désenfumage, selon les dispositions légales applicables", "Un détecteur de fumée automatique, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Le déclencheur manuel (DM) est le boîtier rouge brisable (bris de glace) installé près des issues et dans les couloirs. Il permet à toute personne de déclencher manuellement l'alarme incendie."
  },
  {
    theme: "SSI",
    q: "Quelle est la distance maximale à parcourir pour atteindre un déclencheur manuel ?",
    options: ["10 mètres", "20 mètres", "30 mètres", "50 mètres"],
    correct: 2,
    explanation: "La réglementation impose qu'aucun point d'un ERP ne soit à plus de 30 mètres d'un déclencheur manuel d'alarme incendie."
  },
  {
    theme: "SSI",
    q: "Qu'est-ce que l'alarme générale ?",
    options: ["L'alarme qui prévient uniquement les secours extérieurs", "Le signal sonore et/ou visuel qui ordonne l'évacuation de tout l'établissement", "L'alarme qui prévient uniquement le personnel de sécurité", "Un signal réservé aux exercices d'évacuation"],
    correct: 1,
    explanation: "L'alarme générale est le signal sonore (et parfois visuel) qui ordonne l'évacuation immédiate et totale de l'établissement. Elle doit être audible partout."
  },
  {
    theme: "SSI",
    q: "Qu'est-ce que l'alarme restreinte ?",
    options: ["L'alarme qui déclenche l'évacuation partielle", "Le signal qui alerte uniquement le personnel de sécurité sans déclencher l'évacuation générale", "L'alarme des parkings souterrains uniquement", "Un test silencieux du SSI, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "L'alarme restreinte alerte discrètement le personnel de sécurité (PC sécurité, SSIAP) sans déclencher l'évacuation générale. Elle permet de vérifier la réalité d'un sinistre avant d'évacuer."
  },
  {
    theme: "SSI",
    q: "Lors d'un contrôle du SSI en prise de service, que vérifie-t-on en premier ?",
    options: ["Que les extincteurs sont présents", "Que le SSI est sous tension (voyant vert)", "Que les issues de secours sont ouvertes", "Que le registre de sécurité est à jour"],
    correct: 1,
    explanation: "En prise de service, on vérifie d'abord que le SSI est sous tension (voyant vert sur ECS ou TS). Sans alimentation, le système ne peut pas fonctionner."
  },
  {
    theme: "SSI",
    q: "Que fait-on si on constate un voyant jaune fixe sur le CMSI en prise de service ?",
    options: ["On réarme immédiatement sans noter, selon les dispositions légales applicables", "On note l'anomalie sur la main courante et on avise le technicien de maintenance", "On déclenche l'évacuation, selon les dispositions légales applicables", "On ignore, c'est normal, cette option ne correspond pas à la procédure réglementaire"],
    correct: 1,
    explanation: "Voyant jaune fixe = dérangement technique. Procédure : noter l'heure et la nature du défaut sur la main courante, puis aviser le technicien de maintenance ou le responsable."
  },

  // ========== INCENDIE — COMPLÉMENTS ==========
  {
    theme: "Incendie",
    q: "Quelles sont les 3 composantes du triangle du feu ?",
    options: ["Combustible, Oxygène, Flamme", "Combustible, Comburant, Énergie d'activation", "Carburant, Air, Chaleur", "Matière, Oxygène, Température"],
    correct: 1,
    explanation: "Triangle du feu = Combustible (ce qui brûle) + Comburant (l'oxygène de l'air) + Énergie d'activation (chaleur, étincelle). Supprimer l'un des trois éteint le feu."
  },
  {
    theme: "Incendie",
    q: "Les feux de classe A concernent :",
    options: ["Les liquides inflammables, selon les dispositions légales applicables", "Les feux de matières solides (bois, papier, tissu)", "Les feux de gaz, sans aucune obligation réglementaire particulière", "Les feux de métaux, sans aucune obligation réglementaire particulière"],
    correct: 1,
    explanation: "Classe A = feux de matières solides ordinaires laissant des braises : bois, papier, carton, tissu, plastiques. Ce sont les feux les plus courants."
  },
  {
    theme: "Incendie",
    q: "Les feux de classe B concernent :",
    options: ["Les feux de matières solides, selon les dispositions légales applicables", "Les feux de gaz, sans aucune obligation réglementaire particulière", "Les liquides inflammables et solides liquéfiables (essence, huile, cire)", "Les feux de métaux, sans aucune obligation réglementaire particulière"],
    correct: 2,
    explanation: "Classe B = feux de liquides inflammables ou solides liquéfiables : essence, gazole, alcool, huiles, graisses, cires. Ils ne laissent pas de braises."
  },
  {
    theme: "Incendie",
    q: "Les feux de classe C concernent :",
    options: ["Les feux d'origine électrique survenant sur des installations sous tension", "Les feux de gaz (butane, propane, méthane)", "Les feux liés aux équipements de cuisson et aux matières grasses alimentaires", "Les feux impliquant des métaux combustibles comme l'aluminium ou le magnésium"],
    correct: 1,
    explanation: "Classe C = feux de gaz inflammables : butane, propane, méthane, gaz naturel. La règle : couper l'alimentation en gaz avant d'éteindre."
  },
  {
    theme: "Incendie",
    q: "Les feux de classe D concernent :",
    options: ["Les feux de déchets, sans aucune obligation réglementaire particulière", "Les feux de liquides, sans aucune obligation réglementaire particulière", "Les feux de métaux (magnésium, sodium, potassium)", "Les feux de dépôts, sans aucune obligation réglementaire particulière"],
    correct: 2,
    explanation: "Classe D = feux de métaux spéciaux : magnésium, sodium, potassium, aluminium en poudre. Très dangereux, nécessitent des agents extincteurs spéciaux (poudre spéciale D)."
  },
  {
    theme: "Incendie",
    q: "Les feux de classe F concernent :",
    options: ["Les feux de forêt, sans aucune obligation réglementaire particulière", "Les feux de friteuses et huiles de cuisson à haute température", "Les feux de fibres textiles, selon les dispositions légales applicables", "Les feux de façades, sans aucune obligation réglementaire particulière"],
    correct: 1,
    explanation: "Classe F = feux d'huiles et graisses de cuisson à très haute température (friteuses, woks). Très dangereux : ne jamais utiliser d'eau (explosion de vapeur)."
  },
  {
    theme: "Incendie",
    q: "Quel extincteur utiliser sur un feu électrique (armoire électrique sous tension) ?",
    options: ["Eau pulvérisée", "Poudre ABC", "CO2 (dioxyde de carbone)", "Mousse"],
    correct: 2,
    explanation: "Sur un feu électrique sous tension : CO2 uniquement. L'eau et la mousse sont conductrices d'électricité (risque d'électrocution). Le CO2 est non conducteur."
  },
  {
    theme: "Incendie",
    q: "À quelle distance minimum doit-on se placer pour utiliser un extincteur CO2 ?",
    options: ["0,5 mètre", "1 mètre", "2 mètres", "5 mètres"],
    correct: 1,
    explanation: "Extincteur CO2 : distance d'attaque minimum 1 mètre. Le jet de CO2 à -78°C peut provoquer des brûlures par le froid et des asphyxies à courte distance."
  },
  {
    theme: "Incendie",
    q: "Quelle est la méthode d'extinction par refroidissement ?",
    options: ["Souffler le feu, cette option ne correspond pas à la procédure réglementaire", "Projeter de l'eau sur le foyer pour abaisser la température", "Couvrir les flammes avec une couverture", "Couper l'alimentation en gaz, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Extinction par refroidissement = projeter de l'eau pour abaisser la température en dessous du point d'inflammation. C'est la méthode la plus courante pour les feux de classe A."
  },
  {
    theme: "Incendie",
    q: "Quelle est la méthode d'extinction par étouffement ?",
    options: ["Projeter de l'eau, cette option ne correspond pas à la procédure réglementaire", "Priver le feu d'oxygène en le couvrant ou en saturant l'air de gaz inerte", "Abaisser la température, cette option ne correspond pas à la procédure réglementaire", "Utiliser de la poudre chimique, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Extinction par étouffement = priver le feu de comburant (oxygène). Méthodes : couverture anti-feu, CO2, mousse. Utilisé notamment sur les feux de classe B et F."
  },
  {
    theme: "Incendie",
    q: "Que vérifie-t-on lors du contrôle quotidien d'un extincteur ?",
    options: ["Sa date de fabrication et sa couleur, selon les dispositions légales applicables", "Sa présence, sa signalétique, sa goupille, son état général et sa date de vérification", "Uniquement sa pression interne, et dans aucun autre cas prévu par la loi", "Son poids et sa marque, cette option ne correspond pas à la procédure réglementaire"],
    correct: 1,
    explanation: "Contrôle quotidien extincteur (5 points) : 1-Présent et accessible, 2-Signalétique correcte, 3-Goupille et scellé intacts, 4-État général (corps et flexible), 5-Date de vérification réglementaire."
  },
  {
    theme: "Incendie",
    q: "Quelle est la fréquence de la vérification réglementaire des extincteurs par une société agréée ?",
    options: ["Tous les 6 mois", "Tous les ans", "Tous les 2 ans", "Tous les 5 ans"],
    correct: 1,
    explanation: "Les extincteurs doivent être vérifiés par une société agréée tous les ans. L'SSIAP effectue un contrôle visuel quotidien, mais la vérification technique approfondie est annuelle."
  },
  {
    theme: "Incendie",
    q: "Que signifie RIA ?",
    options: ["Robinet d'Incendie Armé", "Réseau Interne d'Alarme", "Robinet Intérieur Automatique", "Réseau d'Intervention et d'Alarme"],
    correct: 0,
    explanation: "RIA = Robinet d'Incendie Armé. C'est un équipement fixe d'extinction composé d'un robinet, d'un tuyau semi-rigide et d'une lance. Il permet une première attaque avant l'arrivée des pompiers."
  },
  {
    theme: "Incendie",
    q: "Combien de personnes sont nécessaires pour utiliser un RIA ?",
    options: ["1 seule personne suffit", "2 personnes minimum", "3 personnes minimum", "4 personnes minimum"],
    correct: 1,
    explanation: "L'utilisation d'un RIA nécessite 2 personnes minimum : une pour tenir la lance et diriger le jet, une autre pour ouvrir le robinet et dérouler le tuyau."
  },
  {
    theme: "Incendie",
    q: "Qu'est-ce que le désenfumage naturel ?",
    options: ["L'utilisation de ventilateurs mécaniques pour évacuer la fumée", "L'évacuation de la fumée par des ouvertures hautes (exutoires) grâce à la différence de pression", "L'extinction automatique par sprinklers, selon les dispositions légales applicables", "La ventilation naturelle du bâtiment en permanence"],
    correct: 1,
    explanation: "Désenfumage naturel = évacuation des fumées par tirage thermique à travers des exutoires (ouvrants en toiture ou en partie haute des façades). Pas de moteur, fonctionne par différence de pression et de température."
  },
  {
    theme: "Incendie",
    q: "Quelle est la différence entre une porte pare-flammes (E) et une porte coupe-feu (REI) ?",
    options: ["Il n'existe aucune distinction entre ces deux notions dans la pratique", "Pare-flammes (E) = résiste aux flammes uniquement. Coupe-feu (REI) = résiste aux flammes, à la chaleur rayonnée et à la fumée", "Coupe-feu est moins résistant que pare-flammes", "Pare-flammes est réservé aux cuisines, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "E (étanchéité) = pare-flammes, résiste aux flammes et gaz chauds. REI (Résistance + Étanchéité + Isolation) = coupe-feu, résiste aussi à la transmission de chaleur. REI est la classification la plus complète."
  },
  {
    theme: "Incendie",
    q: "Que signifie ERP ?",
    options: ["Établissement Recevant du Personnel", "Établissement Recevant du Public", "Espace de Regroupement et de Protection", "Équipement de Réponse aux Pompiers"],
    correct: 1,
    explanation: "ERP = Établissement Recevant du Public. Tout bâtiment où des personnes extérieures à l'exploitant sont admises (commerces, hôtels, cinémas, hôpitaux, écoles...)."
  },
  {
    theme: "Incendie",
    q: "Que signifie IGH ?",
    options: ["Installation Générale de Hauteur", "Immeuble de Grande Hauteur", "Infrastructure de Gestion des Hauteurs", "Immeuble à Gestion Hybride"],
    correct: 1,
    explanation: "IGH = Immeuble de Grande Hauteur. Définition légale : plancher du dernier niveau habité à plus de 28m pour les habitations, 23m pour les autres usages. Réglementation sécurité incendie très stricte."
  },
  {
    theme: "Incendie",
    q: "En cas d'incendie, quelle est la priorité absolue de l'APS ?",
    options: ["Éteindre le feu coûte que coûte, selon les dispositions légales applicables", "Sauvegarder les biens de valeur, selon les dispositions légales applicables", "Assurer la sécurité des personnes et déclencher l'évacuation", "Attendre les consignes du directeur"],
    correct: 2,
    explanation: "Priorité absolue : les personnes avant les biens. L'APS doit déclencher l'alarme, lancer l'évacuation et appeler les secours (18/112) avant toute tentative d'extinction."
  },
  {
    theme: "Incendie",
    q: "Que signifie le sigle SSIAP ?",
    options: ["Service de Sécurité Incendie et d'Assistance aux Personnes", "Système de Signalisation Incendie et d'Alarme des Personnes", "Service de Surveillance Interne et d'Assistance aux Pompiers", "Syndicat de Sécurité Incendie et d'Assistance aux Personnes"],
    correct: 0,
    explanation: "SSIAP = Service de Sécurité Incendie et d'Assistance aux Personnes. C'est la qualification professionnelle des agents de sécurité incendie en ERP."
  },

  // ========== RONDES DE SÉCURITÉ ==========
  {
    theme: "Rondes",
    q: "Qu'est-ce qu'une ronde aléatoire ?",
    options: ["Une ronde effectuée sans parcours défini ni horaire fixe", "Une ronde réalisée uniquement de nuit", "Une ronde effectuée uniquement par deux agents", "Une ronde programmée à heures fixes"],
    correct: 0,
    explanation: "Ronde aléatoire = ronde dont le parcours et les horaires varient à chaque fois. Objectif : empêcher toute personne malveillante de prévoir et d'anticiper les passages de l'agent."
  },
  {
    theme: "Rondes",
    q: "Pourquoi effectue-t-on des rondes aléatoires plutôt que des rondes à horaires fixes ?",
    options: ["Pour fatiguer moins l'agent, selon les dispositions légales applicables", "Pour éviter que des personnes malveillantes anticipent les passages de l'agent", "C'est une obligation légale, selon les dispositions légales applicables", "Pour couvrir plus de terrain, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Les rondes à horaires fixes permettent à un intrus d'apprendre les habitudes de l'agent et d'agir entre deux passages. L'aléatoire supprime cette prévisibilité."
  },
  {
    theme: "Rondes",
    q: "Qu'est-ce qu'une ronde d'ouverture ?",
    options: ["La ronde effectuée à l'arrivée de l'agent pour vérifier l'état du site avant l'activité", "La ronde qui vérifie que les portes sont ouvertes", "Une ronde effectuée uniquement à l'entrée principale", "La première ronde de la journée, peu importe l'heure"],
    correct: 0,
    explanation: "Ronde d'ouverture = ronde de début de service qui permet de vérifier l'état général du site (anomalies, intrusions nocturnes, équipements) avant le début de l'activité."
  },
  {
    theme: "Rondes",
    q: "Quel équipement est indispensable pour une ronde de nuit ?",
    options: ["Un chien de garde spécialement dressé pour la surveillance nocturne", "Une lampe torche et un moyen de communication (radio ou téléphone)", "Une arme de défense homologuée portée avec autorisation préfectorale", "Un véhicule motorisé de patrouille avec gyrophare et équipement radio"],
    correct: 1,
    explanation: "Pour une ronde de nuit : lampe torche (visibilité), moyen de communication (radio, téléphone - lien avec le PC sécurité), DATI si travailleur isolé, et les clés du site."
  },
  {
    theme: "Rondes",
    q: "Qu'est-ce qu'un DATI ?",
    options: ["Dispositif d'Alarme pour Travailleur Isolé", "Détecteur Automatique de Température et d'Incendie", "Document d'Accréditation et de Traçabilité de l'Intervenant", "Dispositif d'Alerte et de Transmission d'Incident"],
    correct: 0,
    explanation: "DATI = Dispositif d'Alarme pour Travailleur Isolé. Appareil porté par l'agent seul qui déclenche automatiquement une alarme en cas d'immobilité, de chute ou de non-réponse à une sollicitation."
  },
  {
    theme: "Rondes",
    q: "Que doit faire l'agent s'il découvre une porte normalement fermée qui est ouverte lors d'une ronde ?",
    options: ["La fermer et ne rien noter, selon les dispositions légales applicables", "Ne pas y toucher et continuer la ronde, selon les dispositions légales applicables", "Signaler l'anomalie sur la main courante, en informer le PC sécurité et sécuriser si possible", "Appeler immédiatement la police, selon les dispositions légales applicables"],
    correct: 2,
    explanation: "Procédure : ne pas toucher si risque d'intrusion, signaler immédiatement au PC sécurité, noter l'heure et la localisation sur la main courante, et agir selon les consignes (sécuriser ou attendre les secours)."
  },
  {
    theme: "Rondes",
    q: "À quoi sert le contrôleur de ronde (badge de ronde) ?",
    options: ["À ouvrir les portes sécurisées du site, selon les dispositions légales applicables", "À enregistrer le passage de l'agent à des points définis, preuve de la réalisation de la ronde", "À communiquer avec le PC sécurité, selon les dispositions légales applicables", "À identifier l'agent auprès des visiteurs"],
    correct: 1,
    explanation: "Le contrôleur de ronde (ou badge de ronde) est un dispositif électronique placé en des points stratégiques. L'agent le bipe à chaque passage, créant une trace horodatée prouvant que la ronde a bien été effectuée."
  },
  {
    theme: "Rondes",
    q: "Que note-t-on obligatoirement sur la main courante après chaque ronde ?",
    options: ["Uniquement les anomalies graves, et dans aucun autre cas prévu par la loi", "L'heure de départ, l'heure de retour, le parcours effectué, les anomalies constatées", "Seulement l'heure de retour, et dans aucun autre cas prévu par la loi", "Rien si tout est normal, cette option ne correspond pas à la procédure réglementaire"],
    correct: 1,
    explanation: "Après chaque ronde : noter l'heure de départ, l'heure de retour, le parcours (ou 'RAS' si conforme), et toutes les anomalies constatées avec leur localisation précise."
  },

  // ========== DÉONTOLOGIE & ÉTHIQUE ==========
  {
    theme: "Déontologie",
    q: "Qu'est-ce que la déontologie professionnelle pour un APS ?",
    options: ["L'ensemble des règles techniques du métier", "L'ensemble des règles morales et éthiques qui guident le comportement professionnel de l'agent", "Le règlement intérieur de l'entreprise de sécurité", "Les règles de présentation et d'hygiène, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "La déontologie = ensemble des devoirs et règles de conduite éthiques propres à la profession. Pour l'APS : discrétion, intégrité, neutralité, respect des personnes, usage proportionné de la force."
  },
  {
    theme: "Déontologie",
    q: "Le principe de proportionnalité dans l'exercice du métier d'APS signifie :",
    options: ["Agir plus fortement que la menace pour la dissuader", "Adapter sa réponse à la menace : n'utiliser que la force strictement nécessaire", "Toujours appeler les forces de l'ordre avant d'agir", "Ne jamais intervenir physiquement, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Proportionnalité = la réponse de l'agent doit être strictement proportionnelle à la menace. Un agent ne peut pas utiliser plus de force que nécessaire pour neutraliser le danger. Tout excès engage sa responsabilité pénale."
  },
  {
    theme: "Déontologie",
    q: "L'APS a-t-il le droit de discriminer des personnes à l'entrée d'un site ?",
    options: ["Oui, selon les consignes du client", "Non, toute discrimination est interdite par la loi", "Oui, pour des raisons de sécurité", "Cela dépend du type d'établissement"],
    correct: 1,
    explanation: "Non, la discrimination est formellement interdite. L'APS ne peut refuser l'accès que sur des critères objectifs liés à la sécurité (refus des contrôles, comportement menaçant), jamais pour des motifs discriminatoires."
  },
  {
    theme: "Déontologie",
    q: "Un agent de sécurité peut-il porter un uniforme qui ressemble à celui de la police ?",
    options: ["Oui, pour plus d'autorité, conformément à la réglementation en vigueur", "Non, c'est interdit par la loi (usurpation de titre ou de fonctions)", "Oui, si le client le demande, conformément à la réglementation en vigueur", "Seulement pour les événements privés"],
    correct: 1,
    explanation: "Formellement interdit. L'uniforme de l'APS doit clairement se distinguer de celui des forces de l'ordre. Toute ressemblance intentionnelle constitue une usurpation de fonctions, délit pénal."
  },
  {
    theme: "Déontologie",
    q: "Que doit faire un APS s'il reçoit une consigne illégale de son employeur ou de son client ?",
    options: ["L'exécuter, il n'est que salarié", "La refuser et en informer sa hiérarchie", "L'exécuter mais en noter la trace", "Démissionner immédiatement"],
    correct: 1,
    explanation: "L'agent doit refuser toute consigne illégale. Le fait d'être salarié ne le dégage pas de sa responsabilité pénale personnelle. Il doit refuser, en informer sa hiérarchie et si nécessaire, le signaler aux autorités compétentes."
  },
  {
    theme: "Déontologie",
    q: "La discrétion professionnelle de l'APS signifie :",
    options: ["Maintenir un silence total et ne jamais communiquer avec quiconque dans l'exercice des fonctions", "Ne pas divulguer les informations confidentielles liées au site ou aux personnes dont il a connaissance dans l'exercice de ses fonctions", "Éviter toute communication orale ou écrite avec les visiteurs et usagers du site", "Travailler de manière discrète et sans jamais révéler son identité ni sa qualité d'agent"],
    correct: 1,
    explanation: "La discrétion professionnelle oblige l'agent à garder confidentielles toutes les informations auxquelles il accède dans l'exercice de ses missions (plans du site, codes d'accès, informations sur les personnalités, incidents...)."
  },
  {
    theme: "Déontologie",
    q: "Un agent de sécurité peut-il faire état de son métier pour obtenir des avantages personnels ?",
    options: ["Oui, c'est un droit", "Non, c'est une faute déontologique grave", "Oui, en dehors des heures de travail", "Cela dépend de l'avantage concerné"],
    correct: 1,
    explanation: "Non. Utiliser sa qualité d'agent de sécurité pour obtenir des avantages personnels (passe-droits, intimidation, etc.) constitue une faute déontologique grave pouvant entraîner des sanctions disciplinaires et pénales."
  },

  // ========== DROIT DU TRAVAIL APS ==========
  {
    theme: "Droit du travail",
    q: "Qu'est-ce que le droit de retrait ?",
    options: ["Le droit de quitter son poste avant la fin de la vacation", "Le droit pour un salarié de se retirer d'une situation de travail présentant un danger grave et imminent pour sa vie ou sa santé", "Le droit de refuser une mission, selon les dispositions légales applicables", "Le droit de ne pas faire d'heures supplémentaires"],
    correct: 1,
    explanation: "Droit de retrait (art. L4131-1 Code du travail) : tout salarié peut se retirer d'une situation dont il a un motif raisonnable de penser qu'elle présente un danger grave et imminent. Il doit en alerter son employeur immédiatement."
  },
  {
    theme: "Droit du travail",
    q: "Qu'est-ce qu'un accident du travail ?",
    options: ["Tout accident survenant sur le lieu de travail", "Tout accident survenant par le fait ou à l'occasion du travail, quelle qu'en soit la cause", "Uniquement les accidents avec arrêt de travail", "Les accidents survenant lors des déplacements professionnels uniquement"],
    correct: 1,
    explanation: "Accident du travail = tout accident survenant par le fait ou à l'occasion du travail. Inclut les accidents sur le lieu de travail, pendant les déplacements professionnels, et les accidents de trajet domicile-travail (trajet direct)."
  },
  {
    theme: "Droit du travail",
    q: "Dans quel délai l'employeur doit-il déclarer un accident du travail à la CPAM ?",
    options: ["24 heures, cette option ne correspond pas à la procédure réglementaire", "48 heures, cette option ne correspond pas à la procédure réglementaire", "Dans les 48 heures (jours ouvrables) suivant l'accident", "Dans les 5 jours ouvrables, selon les dispositions légales applicables"],
    correct: 2,
    explanation: "L'employeur doit déclarer l'accident du travail à la CPAM dans les 48 heures (jours ouvrables) suivant l'accident. Le salarié doit informer son employeur dans les 24 heures."
  },
  {
    theme: "Droit du travail",
    q: "Quelle convention collective s'applique aux agents de sécurité privée ?",
    options: ["Convention collective de la métallurgie, selon les dispositions légales applicables", "Convention collective des entreprises de prévention et de sécurité (IDCC 1351)", "Convention collective du gardiennage, selon les dispositions légales applicables", "Convention collective des services à la personne"],
    correct: 1,
    explanation: "Les agents de sécurité privée relèvent de la Convention Collective Nationale des Entreprises de Prévention et de Sécurité (IDCC 1351), qui fixe les salaires minima, les coefficients, les primes et les conditions de travail."
  },
  {
    theme: "Droit du travail",
    q: "Qu'est-ce qu'une vacation en sécurité privée ?",
    options: ["Les congés payés de l'agent, selon les dispositions légales applicables", "La période de travail effectué par l'agent sur un site donné (poste de travail)", "Une prime de nuit, utilisé uniquement dans des cas très spécifiques", "Une mission exceptionnelle, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Vacation = période de travail effectif d'un agent de sécurité sur un poste donné. Correspond à un shift ou une période de garde (ex : vacation de 12h, vacation de nuit)."
  },
  {
    theme: "Droit du travail",
    q: "Qu'est-ce que la prime de paniers ?",
    options: ["Une prime liée aux résultats de l'entreprise", "Une indemnité versée pour les repas lorsque l'agent travaille à des horaires décalés ou de nuit", "Une prime de risque, utilisé uniquement dans des cas très spécifiques", "Une indemnité kilométrique, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "La prime de panier (ou indemnité de repas) est versée à l'agent lorsque ses horaires de travail ne lui permettent pas de prendre son repas dans des conditions normales (travail de nuit, horaires décalés)."
  },

  // ========== ÉVÉNEMENTIEL & GRANDS RASSEMBLEMENTS ==========
  {
    theme: "Événementiel",
    q: "Lors d'un événement (concert, match), quelle est la priorité de l'agent de sécurité à l'entrée ?",
    options: ["Accélérer le flux d'entrée", "Contrôler les billets et les accès, vérifier l'absence d'objets dangereux", "Photographier la scène sans toucher aux éléments avant l'arrivée des autorités", "Vendre des programmes"],
    correct: 1,
    explanation: "À l'entrée d'un événement : contrôler les titres d'accès, vérifier visuellement (et par palpation si autorisé) l'absence d'objets interdits ou dangereux, et filtrer les personnes non autorisées."
  },
  {
    theme: "Événementiel",
    q: "En événementiel, qu'est-ce qu'un plan de masse ?",
    options: ["Le planning du personnel de sécurité, selon les dispositions légales applicables", "Le plan du site montrant l'emplacement des équipes, des issues, des points sensibles et des accès secours", "La liste des équipements de sécurité, selon les dispositions légales applicables", "Le nombre de spectateurs attendus, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Le plan de masse est une représentation cartographique du site événementiel indiquant : les zones, les accès (public, secours, artistes), les positions des agents, les issues de secours, et les équipements de sécurité."
  },
  {
    theme: "Événementiel",
    q: "Qu'est-ce qu'un mouvement de foule dangereux (effet de vague) ?",
    options: ["Un déplacement ordonné du public, selon les dispositions légales applicables", "Une compression incontrôlée de la foule pouvant provoquer des blessures graves ou des décès par écrasement", "Une danse collective, utilisé uniquement dans des cas très spécifiques", "Une fuite organisée en cas d'alerte, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Mouvement de foule (crowd crush) : compression incontrôlée pouvant provoquer des décès par asphyxie ou écrasement. Signes avant-coureurs : vagues de balancement, cris, personnes qui tombent. Action : dégager immédiatement des espaces, ne pas laisser la compression s'aggraver."
  },
  {
    theme: "Événementiel",
    q: "Lors d'une évacuation d'urgence d'un événement, que fait l'agent de sécurité ?",
    options: ["Il se met en sécurité en premier, selon les dispositions légales applicables", "Il guide calmement le public vers les sorties de secours en évitant la panique", "Il bloque les sorties pour vérifier les billets", "Il attend les instructions de la police avant d'agir"],
    correct: 1,
    explanation: "Lors d'une évacuation d'urgence : guider calmement le public vers les sorties de secours pré-identifiées, utiliser une voix ferme et rassurante, éviter de déclencher la panique, ouvrir toutes les issues de secours, et faciliter l'accès aux secours."
  },
  {
    theme: "Événementiel",
    q: "Qu'est-ce qu'un sas de sécurité à l'entrée d'un événement ?",
    options: ["Un vestiaire où les spectateurs déposent leurs affaires personnelles", "Un espace intermédiaire entre l'extérieur et le site permettant de contrôler les entrées et de gérer le flux", "Une zone réservée aux personnalités et invités prioritaires de l'événement", "Un poste de premiers secours géré par des secouristes diplômés"],
    correct: 1,
    explanation: "Sas de sécurité = zone de filtrage entre l'extérieur et le site. Permet de contrôler les accès, d'effectuer les vérifications (billets, palpations) tout en régulant le flux sans bloquer complètement l'entrée."
  },

  // ========== GESTION DE CONFLIT — COMPLÉMENTS ==========
  {
    theme: "Gestion de conflit",
    q: "Quelle est la première règle face à une personne agressive ?",
    options: ["S'approcher rapidement pour montrer qu'on n'a pas peur", "Garder ses distances, rester calme, parler d'une voix posée", "Appeler immédiatement la police", "Menacer verbalement la personne pour la dissuader"],
    correct: 1,
    explanation: "Face à une personne agressive : garder une distance de sécurité (1,5-2m), rester calme, voix posée et non agressive. L'objectif est de désamorcer, pas d'affronter. L'approche rapide peut être perçue comme une menace et aggraver la situation."
  },
  {
    theme: "Gestion de conflit",
    q: "Qu'est-ce que l'écoute active dans la gestion d'un conflit ?",
    options: ["Écouter la radio pendant l'intervention, selon les dispositions légales applicables", "Prêter une attention totale à l'interlocuteur, reformuler ses propos et montrer qu'on le comprend sans forcément l'approuver", "Enregistrer la conversation, selon les dispositions légales applicables", "Faire répéter la personne pour gagner du temps"],
    correct: 1,
    explanation: "Écoute active = technique de communication : contact visuel, reformulation ('Si je comprends bien, vous dites que...'), acquiescements, questions ouvertes. Permet à l'interlocuteur de se sentir entendu, ce qui désamorce souvent le conflit."
  },
  {
    theme: "Gestion de conflit",
    q: "Face à une personne qui menace verbalement sans passer à l'acte, que fait l'APS ?",
    options: ["Répondre avec la même agressivité, selon les dispositions légales applicables", "Tenter de désamorcer verbalement, se positionner en sécurité, appeler du renfort si nécessaire", "L'empoigner immédiatement, selon les dispositions légales applicables", "Ignorer et continuer sa mission, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Procédure : rester calme, ne pas provoquer, maintenir une distance de sécurité, tenter la désescalade verbale, noter mentalement les témoins, appeler du renfort via radio, et n'intervenir physiquement qu'en légitime défense si attaque réelle."
  },
  {
    theme: "Gestion de conflit",
    q: "L'APS peut-il utiliser la force physique pour maîtriser une personne ?",
    options: ["Jamais, quelles que soient les circonstances", "Oui, seulement dans le cadre de la légitime défense ou de l'article 73 CPP (appréhension en flagrant délit)", "Oui, sur ordre de son supérieur, conformément à la réglementation en vigueur", "Oui, dès qu'une personne est agressive verbalement"],
    correct: 1,
    explanation: "L'usage de la force est strictement encadré : légitime défense (art. 122-5 CP - réponse proportionnée à une attaque injuste et actuelle) ou appréhension en flagrant délit (art. 73 CPP). Tout autre usage engage la responsabilité pénale de l'agent."
  },
  {
    theme: "Gestion de conflit",
    q: "Que signifie 'ne pas se substituer aux forces de l'ordre' pour un APS ?",
    options: ["Ne jamais appeler la police, selon les dispositions légales applicables", "Ne pas exercer des pouvoirs de police judiciaire (garde à vue, enquête, poursuites) qui sont réservés aux OPJ", "Ne pas porter un uniforme, selon les dispositions légales applicables", "Ne pas intervenir dans les espaces publics"],
    correct: 1,
    explanation: "L'APS n'a pas de pouvoir de police. Il ne peut pas : garder quelqu'un en détention (sauf flagrant délit temporaire jusqu'à l'OPJ), mener une enquête, procéder à une perquisition, ou prononcer une sanction. Ces actes sont réservés aux OPJ/APJ."
  },

  // ========== CARTE PRO & CNAPS ==========
  {
    theme: "Carte pro / CNAPS",
    q: "Qu'est-ce que le CNAPS ?",
    options: ["Conseil National des Activités Privées de Sécurité", "Centre National d'Accréditation des Professionnels de Sécurité", "Commission Nationale des Agents et Personnels de Sécurité", "Conseil National de l'Administration de la Police et de la Sécurité"],
    correct: 0,
    explanation: "CNAPS = Conseil National des Activités Privées de Sécurité. C'est l'autorité publique de régulation et de contrôle de la sécurité privée en France, placée sous tutelle du ministère de l'Intérieur."
  },
  {
    theme: "Carte pro / CNAPS",
    q: "Quelle est la durée de validité de la carte professionnelle d'agent de sécurité ?",
    options: ["1 an", "3 ans", "5 ans", "10 ans"],
    correct: 2,
    explanation: "La carte professionnelle est valable 5 ans. Elle est délivrée par le CNAPS après vérification du casier judiciaire, de la formation et de l'aptitude professionnelle. Son renouvellement nécessite une formation continue."
  },
  {
    theme: "Carte pro / CNAPS",
    q: "Qui délivre la carte professionnelle d'agent de sécurité ?",
    options: ["L'employeur qui recrute et rémunère l'agent dans le cadre de son contrat", "La Préfecture du département, qui délivre elle-même l'autorisation", "Le CNAPS (Conseil National des Activités Privées de Sécurité)", "Le ministère de la Justice, qui supervise les professions réglementées"],
    correct: 2,
    explanation: "La carte professionnelle est délivrée par le CNAPS. C'est une autorisation individuelle d'exercer les activités de sécurité privée. Sans elle, l'exercice du métier est illégal."
  },
  {
    theme: "Carte pro / CNAPS",
    q: "Un agent de sécurité peut-il exercer sans sa carte professionnelle sur lui ?",
    options: ["Oui, si elle est à son domicile, conformément à la réglementation en vigueur", "Non, il doit être en mesure de la présenter à tout moment lors de sa mission", "Oui, si son employeur en a une copie, conformément à la réglementation en vigueur", "Oui, pendant les 3 premiers mois suivant l'embauche"],
    correct: 1,
    explanation: "L'agent doit avoir sa carte professionnelle sur lui pendant toute sa mission et être capable de la présenter à tout moment (contrôle du CNAPS, forces de l'ordre, client). L'absence de carte est une infraction."
  },
  {
    theme: "Carte pro / CNAPS",
    q: "Quelle condition est indispensable pour obtenir la carte professionnelle ?",
    options: ["Avoir plus de 21 ans, cette option ne correspond pas à la procédure réglementaire", "Ne pas avoir de condamnations incompatibles avec l'exercice de la profession (casier judiciaire)", "Être de nationalité française, selon les dispositions légales applicables", "Avoir un diplôme de niveau Bac minimum, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Conditions principales : avoir la TFP APS ou équivalent, avoir un casier judiciaire vierge de condamnations incompatibles (liste fixée par le CNAPS), être en situation régulière sur le territoire, avoir un contrat de travail."
  },
  {
    theme: "Carte pro / CNAPS",
    q: "Que risque un agent qui exerce sans carte professionnelle valide ?",
    options: ["Un simple avertissement oral sans aucune conséquence administrative", "Une amende de 30 000€ et 2 ans d'emprisonnement (exercice illégal d'une activité de sécurité privée)", "La perte de son emploi uniquement, et dans aucun autre cas prévu par la loi", "Un rappel à l'ordre du CNAPS, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Exercer sans carte professionnelle valide est un délit pénal : jusqu'à 2 ans d'emprisonnement et 30 000€ d'amende. L'employeur qui emploie un agent sans carte encourt les mêmes peines."
  },

  // ========== APPRÉHENSION / DROIT — COMPLÉMENTS ==========
  {
    theme: "Appréhension / Droit",
    q: "Quelles sont les 3 conditions cumulatives de l'article 73 CPP pour appréhender quelqu'un ?",
    options: ["Flagrant délit + Mineur + Témoin présent", "Flagrant délit + Crime ou délit puni d'emprisonnement + Remise immédiate à un OPJ", "Ordre du directeur + Flagrant délit + Témoin", "Crime + Nuit + Appel police préalable, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Article 73 CPP - 3 conditions CUMULATIVES : 1) Flagrant délit (infraction en train de se commettre ou venant de se commettre), 2) Crime OU délit puni d'emprisonnement (pas une simple contravention), 3) Remise IMMÉDIATE à un OPJ (pas de rétention prolongée)."
  },
  {
    theme: "Appréhension / Droit",
    q: "Peut-on appréhender une personne pour une contravention (ex : stationnement interdit) ?",
    options: ["Oui, toute infraction justifie l'appréhension", "Non, l'article 73 CPP ne s'applique qu'aux crimes et délits punis d'emprisonnement", "Oui, si c'est prévu dans les consignes, conformément à la réglementation en vigueur", "Seulement si le préfet l'autorise, et dans aucun autre cas prévu par la loi"],
    correct: 1,
    explanation: "Non. L'article 73 CPP exige que l'infraction soit un crime ou un délit puni d'emprisonnement. Une contravention (stationnement, bruit...) ne justifie pas l'appréhension citoyenne."
  },
  {
    theme: "Appréhension / Droit",
    q: "Après avoir appréhendé quelqu'un au titre de l'art. 73 CPP, combien de temps peut-on le retenir ?",
    options: ["Le délai de 24 heures comme pour une garde à vue classique", "Le temps de le remettre à l'OPJ le plus proche (immédiatement)", "Le délai de 4 heures maximum autorisé par le code de procédure", "Jusqu'à l'arrivée de la police, sans limite de temps"],
    correct: 1,
    explanation: "La remise doit être IMMÉDIATE. L'agent n'a pas le droit de priver quelqu'un de liberté au-delà du strict délai nécessaire pour remettre la personne à un OPJ. Toute rétention prolongée constitue une séquestration (délit pénal)."
  },
  {
    theme: "Appréhension / Droit",
    q: "Qu'est-ce que la légitime défense (art. 122-5 du Code pénal) ?",
    options: ["Le droit de frapper quelqu'un qui a proféré des insultes ou des menaces verbales", "Le droit de se défendre ou de défendre autrui face à une attaque injuste, actuelle ou imminente, par une réponse proportionnée", "Le droit de poursuivre et de rattraper physiquement une personne suspectée de vol", "Le droit de procéder à une fouille corporelle de toute personne paraissant suspecte"],
    correct: 1,
    explanation: "Légitime défense : acte autorisé par la loi pour se défendre ou défendre autrui. Conditions : attaque INJUSTE + ACTUELLE ou imminente (pas terminée) + réponse PROPORTIONNÉE. Un excès engage la responsabilité pénale."
  },
  {
    theme: "Appréhension / Droit",
    q: "Qu'est-ce que la loi du 12 juillet 1983 (dite 'loi Sécurité privée') ?",
    options: ["La loi qui a institué le CNAPS comme autorité de contrôle en 2011", "La loi fondatrice qui réglemente les activités privées de sécurité en France (conditions d'exercice, obligations, interdictions)", "La loi imposant le port obligatoire d'un uniforme distinctif pour tous les agents", "La loi fixant les grilles de salaires et les classifications conventionnelles"],
    correct: 1,
    explanation: "La loi du 12 juillet 1983 (codifiée dans le Code de la sécurité intérieure) est le texte fondateur de la sécurité privée en France. Elle définit les activités autorisées, les conditions d'exercice, les obligations et les interdictions pour les entreprises et les agents."
  },
  {
    theme: "Appréhension / Droit",
    q: "Un APS peut-il porter une arme dans l'exercice de ses fonctions ?",
    options: ["Oui, toujours pour se défendre", "Non, cette action est totalement interdite quelle que soit la situation", "Seulement avec une autorisation préfectorale spécifique et une formation adaptée", "Oui, si le client l'exige"],
    correct: 2,
    explanation: "Le port d'arme par un APS est soumis à autorisation préfectorale stricte et nécessite une formation spécifique (aptitude au port d'arme). Sans cette autorisation, le port d'arme est interdit et constitue un délit."
  },

  // ========== VIDÉOSURVEILLANCE / CNIL ==========
  {
    theme: "Vidéosurveillance / CNIL",
    q: "Quelle est la durée maximale de conservation des images de vidéosurveillance dans un lieu privé ouvert au public ?",
    options: ["Un délai de conservation limité à 8 jours ouvrés après la captation", "1 mois", "Une conservation de 3 mois permettant les vérifications trimestrielles", "Une conservation de 6 mois couvrant une demi-période annuelle d'exploitation"],
    correct: 1,
    explanation: "La durée maximale de conservation des images est de 1 mois (30 jours). Au-delà, les images doivent être effacées automatiquement. Des dérogations existent si les images font l'objet d'une réquisition judiciaire."
  },
  {
    theme: "Vidéosurveillance / CNIL",
    q: "Qu'est-ce que la CNIL ?",
    options: ["Commission Nationale de l'Informatique et des Libertés", "Conseil National de l'Information et des Lois", "Comité National d'Investigation et de Lutte contre les intrusions", "Commission Nationale d'Inspection des Lieux"],
    correct: 0,
    explanation: "CNIL = Commission Nationale de l'Informatique et des Libertés. Autorité administrative indépendante qui veille au respect de la loi Informatique et Libertés, notamment en matière de vidéosurveillance et de traitement des données personnelles."
  },
  {
    theme: "Vidéosurveillance / CNIL",
    q: "Est-il obligatoire d'informer le public de la présence de caméras de surveillance dans un établissement ?",
    options: ["Non, les caméras peuvent être cachées", "Oui, par un panneau d'information visible à l'entrée", "Seulement si demandé par les clients", "Uniquement dans les établissements recevant plus de 100 personnes"],
    correct: 1,
    explanation: "Oui, obligation d'affichage d'un panneau d'information à l'entrée indiquant la présence de caméras et les coordonnées du responsable du traitement. Les caméras cachées sont interdites dans les espaces publics ou ouverts au public."
  },
  {
    theme: "Vidéosurveillance / CNIL",
    q: "Peut-on installer une caméra de vidéosurveillance pointant vers la voie publique ?",
    options: ["Oui, l'agent peut procéder librement sans aucune contrainte légale", "Seulement avec une autorisation préfectorale", "Non, c'est toujours interdit", "Oui, si la caméra n'enregistre pas"],
    correct: 1,
    explanation: "La vidéosurveillance de la voie publique nécessite une autorisation préfectorale. Les caméras privées ne peuvent filmer que les abords immédiats du bâtiment (entrées, issues) mais pas la voie publique sans autorisation."
  },
  {
    theme: "Vidéosurveillance / CNIL",
    q: "Quels sont les 3 types de détection utilisés en vidéosurveillance anti-intrusion ?",
    options: ["Sonore, thermique, chimique", "Périphérique, périmétrique, volumétrique", "Infrarouge, ultrason, radar", "Visuelle, audio, vibratoire"],
    correct: 1,
    explanation: "3 types de détection : Périphérique (limite de propriété : clôture, barrière), Périmétrique (enveloppe du bâtiment : portes, fenêtres), Volumétrique (intérieur des pièces : détecteur de mouvement IR ou micro-ondes)."
  },

  // ========== PLANS D'URGENCE & PROCÉDURES ==========
  {
    theme: "Plans d'urgence",
    q: "Que signifie POI ?",
    options: ["Plan d'Organisation Interne", "Plan Opérationnel d'Intervention", "Point d'Organisation des Interventions", "Protocole d'Opération et d'Intervention"],
    correct: 1,
    explanation: "POI = Plan Opérationnel d'Intervention. Document interne à l'établissement décrivant les procédures d'urgence à suivre en cas d'accident ou d'incident majeur (incendie, intrusion, accident corporel...)."
  },
  {
    theme: "Plans d'urgence",
    q: "En cas de découverte d'un colis suspect, quelle est la procédure ?",
    options: ["Ouvrir et inspecter soigneusement le contenu du colis pour identifier la menace", "Ne pas y toucher, évacuer la zone, alerter les forces de l'ordre (17) et le PC sécurité", "Le déplacer vers l'extérieur", "Arroser abondamment le colis avec de l'eau pour neutraliser un éventuel danger"],
    correct: 1,
    explanation: "Colis suspect : ne JAMAIS toucher, déplacer ou ouvrir. Évacuer la zone de sécurité (périmètre de sécurité). Alerter immédiatement le PC sécurité et les forces de l'ordre (17). Attendre les démineurs (NEDEX/BSPP)."
  },
  {
    theme: "Plans d'urgence",
    q: "Lors d'un appel à la bombe, quelles informations tenter de recueillir ?",
    options: ["Uniquement l'heure de l'appel, et dans aucun autre cas prévu par la loi", "L'heure, la nature de la menace, la localisation prétendue, les caractéristiques vocales de l'appelant, et noter le numéro affiché", "Raccrocher immédiatement et appeler la police", "Demander à l'appelant de rappeler plus tard"],
    correct: 1,
    explanation: "Lors d'un appel à la bombe : rester en ligne, ne pas raccrocher, noter l'heure, écouter attentivement (accent, bruit de fond), demander 'où est la bombe ? quand explosera-t-elle ?', noter le numéro affiché, puis alerter immédiatement le 17 et le PC sécurité."
  },
  {
    theme: "Plans d'urgence",
    q: "Que signifie la méthode QQOQCP dans la rédaction d'un rapport ?",
    options: ["Quantité, Qualité, Objectif, Question, Cause, Preuve", "Qui, Quoi, Où, Quand, Comment, Pourquoi", "Question, Qualification, Observation, Quantité, Constat, Preuve", "Quel, Quand, Où, Qui, Commentaire, Présentation"],
    correct: 1,
    explanation: "QQOQCP = Qui (personnes impliquées), Quoi (nature de l'incident), Où (localisation précise), Quand (heure et date), Comment (déroulement), Pourquoi (causes si connues). Méthode de base pour rédiger un rapport factuel et complet."
  },
  {
    theme: "Plans d'urgence",
    q: "En cas d'accident corporel sur le site, quelle est la première action de l'APS ?",
    options: ["Remplir immédiatement le rapport d'incident avant toute autre intervention", "Sécuriser les lieux, appeler les secours (15/18/112) et ne pas déplacer la victime sauf danger immédiat", "Contacter le directeur de l'établissement avant d'appeler les secours", "Photographier la scène et collecter les témoignages avant d'alerter"],
    correct: 1,
    explanation: "Accident corporel : 1) Sécuriser la zone (éviter un sur-accident), 2) Alerter les secours (15 SAMU, 18 pompiers, ou 112 depuis un mobile), 3) Protéger la victime sans la déplacer sauf danger vital immédiat, 4) Rester auprès d'elle jusqu'à l'arrivée des secours."
  },

  // ========== ÉQUIPEMENT & MATÉRIEL ==========
  {
    theme: "Équipement / Intervention",
    q: "Qu'est-ce qu'un portique de détection à l'entrée d'un site ?",
    options: ["Un portique servant à mesurer la taille des visiteurs", "Un dispositif électromagnétique qui détecte la présence de métaux sur une personne", "Un tourniquet pour compter les entrées, selon les dispositions légales applicables", "Un système de reconnaissance faciale, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Le portique de détection de métaux (PDM) est un cadre électromagnétique qui émet une alarme sonore et/ou visuelle lorsqu'une personne portant des objets métalliques (armes, outils) le franchit."
  },
  {
    theme: "Équipement / Intervention",
    q: "Qu'est-ce qu'un détecteur de métaux à main (DMM) ?",
    options: ["Un outil pour détecter les mines enterrées", "Un appareil portatif permettant de localiser précisément un objet métallique sur une personne après le passage au portique", "Un système de verrouillage magnétique, selon les dispositions légales applicables", "Un détecteur de présence, utilisé uniquement dans des cas très spécifiques"],
    correct: 1,
    explanation: "Le DMM (ou baguette de détection) est utilisé en complément du portique pour localiser précisément l'objet métallique qui a déclenché l'alarme. Il se passe autour du corps de la personne sans contact direct."
  },
  {
    theme: "Équipement / Intervention",
    q: "Quelle est la différence entre une radio et un téléphone pour les communications sur un site de sécurité ?",
    options: ["Il n'existe aucune distinction entre ces deux notions dans la pratique", "La radio permet une communication instantanée avec tout le groupe simultanément, le téléphone permet une communication bilatérale privée", "Le téléphone est plus sécurisé que la radio", "La radio ne fonctionne qu'en extérieur, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Radio (talkie-walkie) = communication instantanée en push-to-talk, tout le groupe entend (canal commun). Téléphone = communication privée bilatérale. En sécurité, la radio est utilisée pour les communications opérationnelles, le téléphone pour les contacts externes."
  },
  {
    theme: "Équipement / Intervention",
    q: "Que signifie PC Sécurité ?",
    options: ["Police Criminelle Sécurité", "Poste de Commandement Sécurité", "Personnel en Charge de la Sécurité", "Poste Central de Sécurité"],
    correct: 1,
    explanation: "PC Sécurité = Poste de Commandement Sécurité. C'est le centre névralgique de la sécurité d'un site : lieu où sont centralisées les informations (SSI, vidéosurveillance, contrôle d'accès), où se trouve la main courante, et d'où partent les interventions."
  },

  // ========== DIVERS & COMPORTEMENT ==========
  {
    theme: "Divers",
    q: "Que doit faire un APS qui constate une situation de malaise d'une personne sur le site ?",
    options: ["Ne pas intervenir, ce n'est pas son rôle", "Alerter les secours (15/18/112), sécuriser la zone, pratiquer les gestes de premiers secours si formé, rester avec la victime", "Demander à la victime de quitter le site", "Appeler le directeur avant les secours, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Face à un malaise : alerter immédiatement les secours (15 ou 18 ou 112), sécuriser la zone, pratiquer les gestes de premiers secours si formé (PLS, RCP si nécessaire), ne pas laisser la victime seule, faciliter l'accès aux secours."
  },
  {
    theme: "Divers",
    q: "Qu'est-ce que la mission de surveillance humaine ?",
    options: ["La surveillance par caméra, selon les dispositions légales applicables", "La présence physique d'un agent sur site pour observer, prévenir et intervenir", "La surveillance par drone, selon les dispositions légales applicables", "Le gardiennage d'animaux, sans aucune obligation réglementaire particulière"],
    correct: 1,
    explanation: "Surveillance humaine = présence physique d'un agent formé pour observer (détecter les anomalies), prévenir (dissuader par sa présence) et intervenir (agir selon les consignes et la loi) sur un site."
  },
  {
    theme: "Divers",
    q: "Combien de temps à l'avance un agent doit-il se présenter à son poste ?",
    options: ["Exactement à l'heure, cette option ne correspond pas à la procédure réglementaire", "5 à 10 minutes avant pour assurer une bonne passation de consignes", "30 minutes avant minimum, cette option ne correspond pas à la procédure réglementaire", "Cela dépend uniquement de l'employeur"],
    correct: 1,
    explanation: "L'agent doit arriver 5 à 10 minutes avant sa prise de poste pour assurer une passation de consignes complète avec son collègue : lecture de la main courante, état du matériel, incidents survenus, consignes particulières."
  },
  {
    theme: "Divers",
    q: "Que signifie 'travail dissimulé' dans le contexte de la sécurité privée ?",
    options: ["Exercer ses fonctions de nuit sans équipement d'éclairage réglementaire", "Exercer une activité de sécurité privée sans déclaration légale (sans contrat, sans carte professionnelle, sans inscription au CNAPS)", "Effectuer des missions de surveillance en tenue civile non réglementaire", "Exercer ses missions dans des zones dissimulées ou non déclarées au client"],
    correct: 1,
    explanation: "Travail dissimulé = exercice illégal d'activités de sécurité privée sans les autorisations requises. Concerne : les agents sans carte professionnelle, les entreprises non agréées par le CNAPS. Sanctions pénales pour l'agent et l'employeur."
  },
  {
    theme: "Armes",
    q: "Quelles armes un APS peut-il porter sans autorisation particulière ?",
    options: ["Un pistolet semi-automatique, selon les dispositions légales applicables", "Aucune arme, même les matraques nécessitent une autorisation et formation", "Une matraque télescopique, selon les dispositions légales applicables", "Un aérosol lacrymogène, utilisé uniquement dans des cas très spécifiques"],
    correct: 1,
    explanation: "Sans autorisation spécifique, l'APS ne peut porter aucune arme. Les matraques, tonfa, aérosols lacrymogènes sont classés armes de catégorie D et nécessitent une formation et une autorisation de l'employeur. Le port d'arme à feu nécessite une autorisation préfectorale."
  },
  {
    theme: "Armes",
    q: "Qu'est-ce qu'une arme de catégorie D ?",
    options: ["Les armes à feu de guerre et matériels militaires réservés aux forces armées", "Les armes blanches et outils de défense (matraques, tonfa, aérosols, couteaux) dont le port nécessite un motif légitime", "Les explosifs et munitions classés en catégorie A par la réglementation", "Les armes de collection datant d'avant 1900 conservées à titre patrimonial"],
    correct: 1,
    explanation: "Catégorie D = armes blanches, outils de défense et certains aérosols. Le port nécessite un motif légitime (profession). Pour les APS : autorisation de l'employeur + formation obligatoire. Inclut matraques, tonfa, lacrymogènes."
  },

  // ========== AGENT CYNOPHILE ==========
  {
    theme: "Agent cynophile",
    q: "Quelle formation spécifique doit posséder un agent cynophile ?",
    options: ["La TFP APS classique suffit, selon les dispositions légales applicables", "Une carte professionnelle cynophile délivrée par le CNAPS en plus de la carte APS", "Un diplôme vétérinaire, utilisé uniquement dans des cas très spécifiques", "Une formation de dresseur canin civil, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "L'agent cynophile doit posséder une carte professionnelle spécifique 'cynophile' délivrée par le CNAPS, en plus de la carte APS classique. Les deux sont obligatoires pour exercer."
  },
  {
    theme: "Agent cynophile",
    q: "Dans quels types de missions un agent cynophile peut-il intervenir ?",
    options: ["Uniquement la garde statique, et dans aucun autre cas prévu par la loi", "Rondes de sécurité, surveillance périmétrique, dissuasion, détection (stupéfiants, explosifs selon spécialité)", "Uniquement la détection de drogues, et dans aucun autre cas prévu par la loi", "Uniquement les interventions de nuit, et dans aucun autre cas prévu par la loi"],
    correct: 1,
    explanation: "L'agent cynophile peut être employé pour : rondes de surveillance, gardiennage périmétrique, dissuasion d'intrusion, et selon la spécialisation du chien : détection de stupéfiants, d'explosifs ou de billets de banque."
  },
  {
    theme: "Agent cynophile",
    q: "L'agent cynophile est-il responsable des actes de son chien ?",
    options: ["Non, c'est l'employeur qui est responsable", "Oui, le maître-chien est responsable pénalement et civilement des actes de son animal", "Non, le chien n'a pas de statut légal, conformément à la réglementation en vigueur", "Oui, seulement en cas de morsure grave, conformément à la réglementation en vigueur"],
    correct: 1,
    explanation: "Le maître-chien est pleinement responsable de son animal. En cas de morsure ou dommage causé par le chien, sa responsabilité civile et pénale est engagée. Il doit maîtriser son animal en toutes circonstances."
  },
  {
    theme: "Agent cynophile",
    q: "Quelle est la catégorie du chien le plus souvent utilisé en sécurité privée ?",
    options: ["Chien de 1ère catégorie (chien d'attaque)", "Chien de 2ème catégorie (chien de garde et de défense) avec dressage sécurité", "Chien de 3ème catégorie, cette option ne correspond pas à la procédure réglementaire", "Tout chien peut être utilisé sans restriction"],
    correct: 1,
    explanation: "Les chiens utilisés en sécurité privée sont généralement des chiens de 2ème catégorie (défense) avec un dressage spécifique sécurité. Les chiens de 1ère catégorie (attaque) sont interdits en sécurité privée."
  },
  {
    theme: "Agent cynophile",
    q: "Dans un lieu ouvert au public, le chien de l'agent cynophile doit-il porter une muselière ?",
    options: ["Non, jamais en service", "Oui, obligatoirement dans les lieux publics", "Seulement si le client le demande", "Seulement pour les chiens de plus de 30kg"],
    correct: 1,
    explanation: "Dans les lieux ouverts au public, le chien doit en principe être muselé selon la réglementation sur les chiens dangereux et les lieux publics. L'agent doit connaître et respecter les obligations légales."
  },

  // ========== CONSIGNES ==========
  {
    theme: "Consignes",
    q: "Quelle est la différence entre une consigne générale et une consigne particulière ?",
    options: ["Il n'y a pas de différence, selon les dispositions légales applicables", "Consigne générale = règles communes à tous les postes. Consigne particulière = règles spécifiques à un poste ou une situation donnée", "Consigne générale = écrite, particulière = orale", "Consigne générale = permanente, particulière = annuelle"],
    correct: 1,
    explanation: "Consignes générales = règles s'appliquant à l'ensemble des agents du site. Consignes particulières = règles propres à un poste précis ou une situation spécifique."
  },
  {
    theme: "Consignes",
    q: "Que doit faire un agent qui ne comprend pas une consigne ?",
    options: ["L'ignorer et agir selon son bon sens, selon les dispositions légales applicables", "Demander des clarifications à son responsable hiérarchique avant de prendre son poste", "L'interpréter librement, sans aucune obligation réglementaire particulière", "Attendre que la situation se présente pour décider"],
    correct: 1,
    explanation: "Un agent qui ne comprend pas une consigne doit impérativement demander des clarifications à son supérieur AVANT de prendre son poste. Appliquer une consigne mal comprise peut engager sa responsabilité."
  },
  {
    theme: "Consignes",
    q: "Une consigne donnée par le client peut-elle contredire la loi ?",
    options: ["Oui, le client est prioritaire, conformément à la réglementation en vigueur", "Non, aucune consigne ne peut être contraire à la loi. L'agent doit refuser et en informer sa hiérarchie", "Oui, si elle est écrite et signée, conformément à la réglementation en vigueur", "Cela dépend de la gravité de la contradiction"],
    correct: 1,
    explanation: "Aucune consigne, même du client, ne peut être contraire à la loi. Si une consigne est illégale, l'agent doit la refuser et en informer immédiatement sa hiérarchie. L'exécution d'une consigne illégale engage sa responsabilité pénale personnelle."
  },
  {
    theme: "Consignes",
    q: "Lors d'une passation de consignes entre deux agents, que doit-on obligatoirement transmettre ?",
    options: ["Uniquement les incidents graves, et dans aucun autre cas prévu par la loi", "L'état du matériel, les anomalies, les consignes particulières du jour, les événements survenus et les tâches en cours", "Uniquement l'heure de prise de service, et dans aucun autre cas prévu par la loi", "Rien si tout s'est bien passé, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Passation de consignes complète : état du matériel et du SSI, anomalies constatées, consignes particulières, incidents survenus, tâches en cours. La traçabilité est assurée par la main courante."
  }
,

  // ========== COMMUNICATION (renfort) ==========
  {
    theme: "Communication",
    q: "Quelle est la règle de base d'une communication radio professionnelle ?",
    options: ["Parler le plus vite possible, selon les dispositions légales applicables", "Identifier l'appelant et le destinataire, parler clairement, confirmer la réception", "Ne jamais couper l'interlocuteur, selon les dispositions légales applicables", "Toujours utiliser le nom complet, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Communication radio : s'identifier (ex : 'PC de Alpha 1'), message court et clair, confirmer réception ('reçu', 'bien reçu'). Éviter le jargon non convenu et les informations sensibles en clair."
  },
  {
    theme: "Communication",
    q: "Dans quel ordre transmet-on un message radio ?",
    options: ["Message, destinataire, appelant", "Destinataire, appelant, message", "Appelant, message, destinataire", "Message uniquement"],
    correct: 1,
    explanation: "Ordre standard : 'PC (destinataire) de Alpha 1 (appelant), message.' On appelle d'abord celui qu'on veut joindre, puis on s'identifie, puis on délivre le message."
  },
  {
    theme: "Communication",
    q: "Que signifie 'accusé de réception' dans une communication radio ?",
    options: ["Refuser un message, cette option ne correspond pas à la procédure réglementaire", "Confirmer qu'on a bien reçu et compris le message", "Demander la répétition du message", "Terminer la communication, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "L'accusé de réception ('reçu', 'bien reçu', 'OK') confirme que le message a été entendu et compris. Sans accusé de réception, l'émetteur ne sait pas si son message est parvenu."
  },
  {
    theme: "Communication",
    q: "Un agent de sécurité peut-il divulguer des informations sur les incidents du site à des journalistes ?",
    options: ["Oui, la liberté de la presse l'exige, conformément à la réglementation en vigueur", "Non, le devoir de discrétion lui interdit de divulguer des informations confidentielles sans autorisation", "Oui, si les faits sont déjà publics, conformément à la réglementation en vigueur", "Oui, uniquement les faits sans les noms, conformément à la réglementation en vigueur"],
    correct: 1,
    explanation: "Non. Le devoir de discrétion professionnelle interdit à l'agent de divulguer des informations sur le site ou les incidents. Tout contact avec les médias doit être redirigé vers la direction."
  },
  {
    theme: "Communication",
    q: "Lors d'un appel téléphonique entrant au PC sécurité, comment décroche-t-on ?",
    options: ["On dit uniquement 'allô'", "On s'identifie : nom du site, nom de l'agent", "On demande d'abord le nom de l'appelant", "On répond uniquement si on connaît le numéro"],
    correct: 1,
    explanation: "Décrocher professionnellement : s'identifier (ex : 'Sécurité Galeries Lafayette, Agent Martin, bonjour'). Cela rassure l'appelant et confirme qu'il a le bon interlocuteur."
  },
  {
    theme: "Communication",
    q: "Qu'est-ce qu'un compte rendu d'intervention ?",
    options: ["Un rapport rédigé avant l'intervention, selon les dispositions légales applicables", "Un document écrit décrivant le déroulement et les résultats d'une intervention, rédigé après les faits", "Un formulaire à remplir par le client, selon les dispositions légales applicables", "Un résumé de la vacation entière, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Compte rendu d'intervention = document factuel rédigé après une intervention. Il décrit les faits selon QQOQCP, les actions menées et les suites données."
  },

  // ========== PSC1 / PREMIERS SECOURS ==========
  {
    theme: "Premiers secours",
    q: "Que signifie la méthode PAE face à une victime ?",
    options: ["Prévenir, Alerter, Évacuer", "Protéger, Alerter, Secourir", "Protéger, Appeler, Évacuer", "Prévenir, Agir, Évacuer"],
    correct: 1,
    explanation: "PAE = Protéger (sécuriser la zone, éviter un sur-accident), Alerter (15, 18 ou 112), Secourir (gestes adaptés). L'ordre est impératif : on protège avant d'agir."
  },
  {
    theme: "Premiers secours",
    q: "Quels sont les numéros d'urgence en France ?",
    options: ["17 uniquement, sans aucune restriction légale applicable", "15 (SAMU), 18 (Pompiers), 17 (Police), 112 (Européen)", "18 et 112 uniquement, sans aucune restriction légale applicable", "15 et 18 uniquement, sans aucune restriction légale applicable"],
    correct: 1,
    explanation: "15 = SAMU, 18 = Pompiers, 17 = Police/Gendarmerie, 112 = numéro européen accessible depuis mobile même sans réseau. Le 112 redirige vers le bon service."
  },
  {
    theme: "Premiers secours",
    q: "Qu'est-ce que la Position Latérale de Sécurité (PLS) ?",
    options: ["La position pour le massage cardiaque, selon les dispositions légales applicables", "La position sur le côté maintenant les voies aériennes libres chez une victime inconsciente qui respire", "La position debout pour évacuer une victime", "La position pour traiter une hémorragie, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "PLS = position sur le côté pour une victime inconsciente qui RESPIRE. Elle évite l'asphyxie en cas de vomissement. Ne pas mettre en PLS une victime qui ne respire pas (commencer la RCP)."
  },
  {
    theme: "Premiers secours",
    q: "Comment vérifier si une victime est consciente ?",
    options: ["En lui pinçant le nez", "En lui parlant fort et en lui touchant l'épaule", "En lui versant de l'eau sur le visage", "En vérifiant son pouls"],
    correct: 1,
    explanation: "Vérification conscience : parler fort ('vous m'entendez ?'), toucher les épaules. Si aucune réaction → inconsciente. Étape fondamentale avant tout geste de secours."
  },
  {
    theme: "Premiers secours",
    q: "Comment vérifier si une victime inconsciente respire ?",
    options: ["En lui cherchant le pouls, selon les dispositions légales applicables", "LVS : regarder le ventre, écouter, sentir le souffle pendant 10 secondes maximum", "En lui mettant un miroir sous le nez, selon les dispositions légales applicables", "En l'agitant fortement, sans aucune restriction légale applicable"],
    correct: 1,
    explanation: "LVS : basculer la tête en arrière, regarder le ventre, écouter le souffle, sentir l'air sur la joue pendant 10 secondes MAX. Au-delà de 10s sans respiration → commencer la RCP."
  },
  {
    theme: "Premiers secours",
    q: "Qu'est-ce que la RCP ?",
    options: ["La technique pour traiter une hémorragie", "30 compressions thoraciques alternées avec 2 insufflations pour remplacer le cœur et les poumons arrêtés", "La mise en PLS, sans aucune obligation réglementaire particulière", "L'utilisation du défibrillateur uniquement"],
    correct: 1,
    explanation: "RCP = 30 compressions thoraciques (5-6cm, 100-120/min) + 2 insufflations. Recommencer 30/2 jusqu'à l'arrivée des secours. Commencer AVANT le défibrillateur s'il n'est pas encore disponible."
  },
  {
    theme: "Premiers secours",
    q: "Qu'est-ce qu'un DAE ?",
    options: ["Un appareil de massage cardiaque automatique", "Un appareil qui analyse le rythme cardiaque et délivre un choc électrique si nécessaire", "Un appareil de ventilation artificielle, selon les dispositions légales applicables", "Un moniteur de surveillance, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "DAE = Défibrillateur Automatisé Externe. Analyse le rythme cardiaque et délivre un choc si fibrillation. Guidé par une voix, utilisable par tout le monde. Continuer la RCP entre les analyses."
  },
  {
    theme: "Premiers secours",
    q: "Comment arrêter une hémorragie externe grave ?",
    options: ["Appliquer de la glace, cette option ne correspond pas à la procédure réglementaire", "Compression directe et forte sur la plaie avec un linge propre", "Surélever uniquement le membre, et dans aucun autre cas prévu par la loi", "Laver la plaie à l'eau, cette option ne correspond pas à la procédure réglementaire"],
    correct: 1,
    explanation: "Hémorragie : COMPRESSION DIRECTE immédiate et forte sur la plaie (linge propre ou mains). Maintenir sans relâcher jusqu'aux secours. Garrot en dernier recours si compression impossible sur un membre."
  },
  {
    theme: "Premiers secours",
    q: "Qu'est-ce que la manœuvre de Heimlich ?",
    options: ["Le massage cardiaque, sans aucune obligation réglementaire particulière", "La manœuvre pour désobstruer les voies aériennes d'une personne en train de s'étouffer", "La technique pour transporter une victime", "La méthode pour traiter un malaise vagal"],
    correct: 1,
    explanation: "Manœuvre de Heimlich : se placer derrière la victime, poing entre nombril et sternum, compressions sèches vers soi et vers le haut jusqu'à expulsion du corps étranger."
  },
  {
    theme: "Premiers secours",
    q: "Face à une douleur thoracique irradiant dans le bras gauche, que fait-on ?",
    options: ["Attendre que ça passe, cette option ne correspond pas à la procédure réglementaire", "Appeler le 15 immédiatement — signes d'infarctus", "Donner de l'aspirine, cette option ne correspond pas à la procédure réglementaire", "Allonger et surélever les jambes"],
    correct: 1,
    explanation: "Douleur thoracique + irradiation bras gauche = signes classiques d'infarctus. Appeler le 15 IMMÉDIATEMENT, installer en position demi-assise, ne pas faire d'effort, rester avec la victime."
  },
  {
    theme: "Premiers secours",
    q: "Comment reconnaître un AVC avec la méthode FAST ?",
    options: ["Fièvre, Agitation, Sueurs, Tremblements, selon les dispositions légales applicables", "Face asymétrique, bras qui tombe, parole impossible, Time (appeler le 15 immédiatement)", "Froid, Angoisse, Syncope, Tachycardie, selon les dispositions légales applicables", "Fatigue, Anxiété, Soif, Tremblements, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "FAST : Face (sourire asymétrique), Arms (un bras tombe), Speech (parole impossible), Time (appeler le 15 d'urgence). Chaque minute compte lors d'un AVC."
  },
  {
    theme: "Premiers secours",
    q: "Comment réagir face à une crise d'épilepsie ?",
    options: ["Mettre quelque chose dans la bouche pour éviter la morsure", "Écarter les objets, protéger la tête, ne pas retenir, appeler le 15 si crise > 5 min", "Le maintenir fermement au sol, selon les dispositions légales applicables", "L'asperger d'eau froide, sans aucune obligation réglementaire particulière"],
    correct: 1,
    explanation: "Épilepsie : NE PAS mettre d'objet dans la bouche, NE PAS retenir. Sécuriser l'environnement, protéger la tête, noter l'heure. Appeler le 15 si première crise ou crise > 5 minutes. Après : PLS."
  },
  {
    theme: "Premiers secours",
    q: "Un agent de sécurité est-il obligé de porter secours à une personne en danger ?",
    options: ["Non, ce n'est pas son rôle, conformément à la réglementation en vigueur", "Oui, tout citoyen a l'obligation légale de porter secours (art. 223-6 CP)", "Oui, mais uniquement dans son périmètre", "Seulement s'il est secouriste diplômé, et dans aucun autre cas prévu par la loi"],
    correct: 1,
    explanation: "Art. 223-6 CP : obligation de porter secours à toute personne en péril dans la mesure de ses possibilités et sans risque pour soi. Ne pas le faire = non-assistance à personne en danger (5 ans, 75 000€)."
  },

  // ========== CONTRÔLE D'ACCÈS (renfort) ==========
  {
    theme: "Contrôle d'accès",
    q: "Qu'est-ce que le 'tailgating' en contrôle d'accès ?",
    options: ["Une technique de surveillance électronique par caméras dissimulées", "Le fait pour une personne non autorisée de suivre une personne autorisée pour franchir un accès sans s'authentifier", "Une procédure de contrôle renforcé appliquée dans les zones à risque élevé", "Une technique de palpation spécifique utilisée pour les fouilles de sécurité"],
    correct: 1,
    explanation: "Tailgating = une personne non autorisée profite de l'ouverture d'un accès pour entrer sans contrôle. L'agent doit veiller à ce que chaque personne s'authentifie individuellement."
  },
  {
    theme: "Contrôle d'accès",
    q: "Quelle est la procédure pour un visiteur extérieur ?",
    options: ["Le laisser entrer librement, selon les dispositions légales applicables", "Vérifier identité, enregistrer, contacter la personne visitée, remettre un badge visiteur temporaire", "Lui demander uniquement son nom, et dans aucun autre cas prévu par la loi", "L'escorter directement sans vérification"],
    correct: 1,
    explanation: "Procédure visiteur : 1) Vérifier pièce d'identité, 2) Enregistrer (nom, heure, personne visitée), 3) Contacter la personne visitée, 4) Remettre badge visiteur, 5) Accompagner selon consignes."
  },
  {
    theme: "Contrôle d'accès",
    q: "Que faire face à une personne qui refuse de présenter son badge ?",
    options: ["La laisser passer pour éviter le conflit", "Refuser poliment l'accès, expliquer la procédure, appeler le responsable si persistance", "L'appréhender immédiatement, selon les dispositions légales applicables", "Lui demander ses papiers d'identité, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Refus de badge : rester calme, expliquer la règle, proposer d'appeler le service concerné. Si la personne insiste, appeler le responsable. Ne jamais forcer le passage ni créer de conflit."
  },

  // ========== PALPATION (renfort) ==========
  {
    theme: "Palpation / Fouille",
    q: "La palpation de sécurité se fait-elle sous les vêtements ?",
    options: ["Oui, pour être efficace", "Non, obligatoirement par-dessus les vêtements", "Uniquement pour les vêtements épais", "Selon les consignes du client"],
    correct: 1,
    explanation: "Palpation UNIQUEMENT par-dessus les vêtements. Glisser les mains sous les vêtements = fouille à corps, acte réservé aux OPJ. C'est une infraction pénale."
  },
  {
    theme: "Palpation / Fouille",
    q: "Peut-on confisquer un objet trouvé lors d'une palpation ?",
    options: ["Oui, l'agent peut les confisquer, conformément à la réglementation en vigueur", "Non, l'agent peut refuser l'accès ou remettre les objets à un OPJ, mais pas confisquer", "Oui, si les objets sont dangereux, conformément à la réglementation en vigueur", "Seulement avec l'accord du directeur, et dans aucun autre cas prévu par la loi"],
    correct: 1,
    explanation: "L'APS n'a pas le droit de confisquer. Face à un objet illicite (arme, drogue) : refuser l'accès, appeler le 17, et maintenir la personne si flagrant délit art. 73 CPP."
  },

  // ========== MAIN COURANTE (renfort) ==========
  {
    theme: "Main courante / Rapports",
    q: "Peut-on utiliser du blanc correcteur sur une main courante manuscrite ?",
    options: ["Oui si c'est propre, selon la réglementation actuellement en vigueur", "Non, on barre lisiblement l'erreur et on inscrit la correction avec ses initiales", "Oui si on paraphe, selon la réglementation actuellement en vigueur", "Non, il faut recommencer la page, conformément à la réglementation en vigueur"],
    correct: 1,
    explanation: "Ne JAMAIS utiliser de blanc. Barrer d'un trait (mention visible), écrire la correction, apposer ses initiales. Les corrections au blanc invalident le document légalement."
  },
  {
    theme: "Main courante / Rapports",
    q: "Un rapport doit-il contenir des opinions personnelles ?",
    options: ["Oui, pour donner plus d'informations", "Non, un rapport doit être factuel et objectif uniquement", "Oui, uniquement en conclusion, conformément à la réglementation en vigueur", "Selon le type de rapport, cette option ne correspond pas à la procédure réglementaire"],
    correct: 1,
    explanation: "Rapport = FACTUEL et OBJECTIF. 'La personne courait' (fait) vs 'la personne semblait coupable' (opinion). Les opinions peuvent invalider un rapport en cas de litige."
  },

  // ========== DÉONTOLOGIE (renfort) ==========
  {
    theme: "Déontologie",
    q: "Un agent peut-il accepter des cadeaux de personnes côtoyées en service ?",
    options: ["Oui, si la valeur est modeste, conformément à la réglementation en vigueur", "Non, accepter des avantages liés à ses fonctions est contraire à la déontologie", "Oui si spontané, selon la réglementation actuellement en vigueur", "Selon le règlement de l'entreprise, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Accepter des cadeaux liés à ses fonctions = risque de corruption ou de compromission. L'agent doit rester neutre et impartial en toutes circonstances."
  },
  {
    theme: "Déontologie",
    q: "Que doit faire un agent témoin d'une faute professionnelle d'un collègue ?",
    options: ["Se taire par solidarité, cette option ne correspond pas à la procédure réglementaire", "En informer sa hiérarchie selon la procédure interne", "Régler ça directement avec le collègue", "Prévenir le client directement"],
    correct: 1,
    explanation: "La solidarité ne doit pas primer sur l'éthique. Face à une faute grave d'un collègue, l'agent doit en informer sa hiérarchie. Se taire peut engager sa propre responsabilité."
  },

  // ========== ÉVÉNEMENTIEL (renfort) ==========
  {
    theme: "Événementiel",
    q: "Que faire si une personne présente une ivresse manifeste à l'entrée d'un événement ?",
    options: ["Ignorer complètement la situation et poursuivre sa mission sans intervenir", "Refuser l'accès, la raccompagner en lieu sûr, appeler les secours si nécessaire", "Appeler la police immédiatement", "La laisser sortir seule"],
    correct: 1,
    explanation: "Ivresse manifeste : refuser l'accès poliment. Si danger pour elle-même ou autrui, appeler le 15 ou le 17. L'APS ne peut pas utiliser la force physique pour la faire partir."
  },
  {
    theme: "Événementiel",
    q: "Qu'est-ce qu'un dispatcher en sécurité événementielle ?",
    options: ["Un agent en charge de la billetterie, selon les dispositions légales applicables", "Le responsable du PC sécurité qui coordonne les équipes terrain via radio", "Un agent VIP, utilisé uniquement dans des cas très spécifiques", "Le responsable technique, sans aucune obligation réglementaire particulière"],
    correct: 1,
    explanation: "Dispatcher = agent au PC sécurité qui coordonne les équipes terrain en temps réel (radio), gère les interventions et fait le lien avec les secours extérieurs."
  },

  // ========== DIVERS (renfort) ==========
  {
    theme: "Divers",
    q: "Qu'est-ce que le registre de sécurité d'un établissement ?",
    options: ["La main courante remplie quotidiennement par l'agent en service", "Document obligatoire regroupant toutes les informations relatives à la sécurité incendie (vérifications, exercices, incidents)", "Le planning de rotation et de présence des agents de sécurité", "La liste des Équipements de Protection Individuelle disponibles sur site"],
    correct: 1,
    explanation: "Registre de sécurité = document obligatoire dans tout ERP. Il consigne : vérifications des équipements, exercices d'évacuation, travaux, incidents et observations de la commission de sécurité."
  },
  {
    theme: "Divers",
    q: "Quelle est la fréquence minimale des exercices d'évacuation dans un ERP ?",
    options: ["Un exercice mensuel obligatoire organisé par la direction de l'établissement", "1 fois par an minimum (2 fois pour les ERP avec locaux à sommeil)", "Une vérification biennale réalisée par un technicien certifié", "Uniquement lors de l'ouverture initiale de l'établissement au public"],
    correct: 1,
    explanation: "ERP : 1 exercice/an minimum. Pour ERP avec locaux à sommeil (hôtels, hôpitaux) : 2 fois/an minimum dont un de nuit. À consigner dans le registre de sécurité."
  },
  {
    theme: "Divers",
    q: "Peut-on dormir à son poste pendant une vacation de nuit ?",
    options: ["Oui s'il n'y a rien à faire, conformément à la réglementation en vigueur", "Non, l'agent doit rester vigilant pendant toute la vacation", "Oui pendant les pauses réglementaires", "Oui si un collègue est présent, conformément à la réglementation en vigueur"],
    correct: 1,
    explanation: "Dormir à son poste = faute professionnelle grave pouvant entraîner un licenciement et engager la responsabilité de l'agent en cas d'incident. Les pauses doivent être organisées selon les consignes."
  },

  // ========== PLANS D'URGENCE (renfort) ==========
  {
    theme: "Plans d'urgence",
    q: "Qu'est-ce qu'un point de rassemblement ?",
    options: ["L'entrée principale du bâtiment, accessible à tous sans filtrage", "Lieu prédéfini à l'extérieur où se regroupent les occupants après évacuation pour vérifier que tout le monde est sorti", "La salle de réunion principale désignée par la direction", "Le parking extérieur du site, zone de stationnement des véhicules"],
    correct: 1,
    explanation: "Point de rassemblement = zone extérieure prédéfinie, à distance suffisante. Permet de vérifier que tous ont évacué et de ne pas gêner l'intervention des secours."
  },
  {
    theme: "Plans d'urgence",
    q: "Que faire si une personne refuse d'évacuer lors d'une alerte incendie ?",
    options: ["La saisir physiquement et la forcer à quitter les lieux par la contrainte", "Persuader verbalement, noter sa localisation, prévenir les pompiers de sa présence", "L'ignorer complètement et quitter les lieux sans en informer les secours", "Attendre passivement l'arrivée des pompiers sans rien faire ni signaler"],
    correct: 1,
    explanation: "L'APS ne peut pas forcer physiquement. Il doit insister verbalement, noter la localisation précise et prévenir impérativement les pompiers pour qu'ils puissent intervenir."
  }

,

  // ========== TERRORISME (10 questions à l'exam) ==========
  {
    theme: "Terrorisme",
    q: "Que signifie le plan Vigipirate ?",
    options: ["Un plan d'évacuation des bâtiments publics", "Le plan national de prévention du terrorisme fixant les postures de sécurité selon le niveau de menace", "Un plan de surveillance des frontières uniquement", "Un protocole réservé aux forces armées, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Vigipirate est le plan national de prévention du terrorisme. Il comporte plusieurs niveaux de vigilance et fixe les mesures de sécurité à appliquer par tous les acteurs (État, collectivités, entreprises, citoyens) selon la menace."
  },
  {
    theme: "Terrorisme",
    q: "Quels sont les niveaux du plan Vigipirate actuellement en vigueur ?",
    options: ["Vert, Orange, Rouge", "Vigilance renforcée, Urgence attentat, Alerte attentat", "Vigilance, Sécurité renforcée, Urgence attentat", "Bas, Modéré, Élevé, Critique"],
    correct: 2,
    explanation: "Le plan Vigipirate comporte 3 niveaux : Vigilance (socle permanent), Sécurité renforcée (menace élevée), Urgence attentat (après ou imminence d'attentat). Depuis 2021, le niveau 'Alerte attentat' a été supprimé."
  },
  {
    theme: "Terrorisme",
    q: "Que signifie la procédure 'Attentat en cours' pour un APS ?",
    options: ["Évacuer immédiatement tout le monde, selon les dispositions légales applicables", "Appliquer le protocole SAFE : Sécuriser, Alerter, Faire secourir, Établir un périmètre", "Attendre les forces de l'ordre sans agir", "Neutraliser la menace, cette option ne correspond pas à la procédure réglementaire"],
    correct: 1,
    explanation: "Attentat en cours : appliquer le protocole de gestion de crise. Priorités : mettre à l'abri les personnes (confinement ou évacuation selon la situation), alerter le 17 et le 15, ne pas s'exposer, rendre compte au PC sécurité, faciliter l'accès aux secours."
  },
  {
    theme: "Terrorisme",
    q: "Qu'est-ce que la méthode 'Fuir, Se cacher, Alerter' face à une attaque terroriste ?",
    options: ["Une procédure militaire, utilisé uniquement dans des cas très spécifiques", "Le comportement recommandé aux civils face à une attaque terroriste : fuir si possible, se cacher si on ne peut pas fuir, alerter le 17", "Une technique de self-défense, selon les dispositions légales applicables", "Un protocole réservé aux agents de sécurité"],
    correct: 1,
    explanation: "Fuir, Se cacher, Alerter : conseils officiels du gouvernement. 1) FUIR en laissant ses affaires, 2) SE CACHER si impossible de fuir (barricader, éteindre les lumières, couper le son), 3) ALERTER le 17 dès qu'en sécurité. Ne jamais faire le héros."
  },
  {
    theme: "Terrorisme",
    q: "Un APS doit-il tenter de neutraliser un terroriste armé ?",
    options: ["Oui, c'est son rôle de protéger, conformément à la réglementation en vigueur", "Non, il doit mettre à l'abri les personnes et alerter les forces de l'ordre. La neutralisation est réservée aux forces de l'ordre", "Oui, s'il est en supériorité numérique, conformément à la réglementation en vigueur", "Oui, s'il possède une formation spéciale"],
    correct: 1,
    explanation: "Non. L'APS n'est pas formé ni équipé pour affronter un terroriste armé. Sa mission est de protéger les personnes (évacuation, confinement) et d'alerter le 17. Toute tentative de confrontation met des vies en danger."
  },
  {
    theme: "Terrorisme",
    q: "Qu'est-ce qu'un attentat suicide ?",
    options: ["Un attentat revendiqué après les faits, selon les dispositions légales applicables", "Un acte terroriste dans lequel l'auteur se sacrifie délibérément lors de l'attaque (ceinture explosive, véhicule bélier...)", "Un attentat visant les forces de l'ordre", "Un attentat sans revendication, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Attentat suicide = l'auteur intègre sa propre mort dans le plan d'attaque (ceinture explosive, voiture piégée...). Particulièrement dangereux car aucun instinct de survie n'inhibe l'acte. Face à une personne suspecte portant un colis ou vêtement volumineux : s'éloigner, ne pas toucher, alerter le 17."
  },
  {
    theme: "Terrorisme",
    q: "Que faire face à une personne au comportement suspect dans votre site (nervosité excessive, reconnaissance des lieux, questions inhabituelles) ?",
    options: ["L'interpeller directement et lui demander ses papiers", "Observer discrètement, noter les détails (signalement, direction), alerter sa hiérarchie et si nécessaire le 17", "L'ignorer pour ne pas créer d'incident, selon les dispositions légales applicables", "L'appréhender immédiatement, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Face à un comportement suspect : ne pas intervenir seul, observer discrètement et noter le signalement (description physique, vêtements, direction), alerter immédiatement la hiérarchie et le PC sécurité, qui décideront d'alerter le 17. La vigilance discète vaut mieux que l'intervention precipitée."
  },
  {
    theme: "Terrorisme",
    q: "Qu'est-ce que le confinement en cas d'attaque terroriste ?",
    options: ["Évacuer tout le monde vers l'extérieur, selon les dispositions légales applicables", "Regrouper et mettre à l'abri les personnes dans un local sécurisé (portes barricadées, lumières éteintes, téléphones silencieux) en attendant les secours", "Fermer uniquement les portes d'entrée, et dans aucun autre cas prévu par la loi", "Appeler chaque personne une par une pour les informer"],
    correct: 1,
    explanation: "Confinement = alternative à l'évacuation quand la fuite est impossible. Rassembler les personnes dans une pièce solide, barricader les portes (meubles, coins), éteindre lumières, couper sons, s'allonger sous les fenêtres, ne pas ouvrir avant confirmation des forces de l'ordre."
  },
  {
    theme: "Terrorisme",
    q: "Qu'est-ce qu'un colis suspect ?",
    options: ["Tout colis non réclamé depuis plus d'une heure", "Tout objet abandonné dont on ne peut identifier le propriétaire et qui présente des caractéristiques inhabituelles (fils, odeur, suintement...)", "Un colis endommagé, utilisé uniquement dans des cas très spécifiques", "Un colis sans étiquette d'expéditeur, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Colis suspect = objet abandonné sans propriétaire identifiable, avec ou sans caractéristiques suspectes. Règle : ne JAMAIS toucher, déplacer ou ouvrir. Évacuer la zone, appeler le 17, laisser agir les services spécialisés (NEDEX, démineurs)."
  },
  {
    theme: "Terrorisme",
    q: "Qu'est-ce que la radicalisation et pourquoi l'APS doit-il la connaître ?",
    options: ["Un phénomène extérieur à la sécurité privée, relevant uniquement des services de renseignement", "Un processus par lequel une personne adopte des idées extrémistes pouvant mener à la violence. L'APS peut être amené à détecter des signaux faibles sur son site", "Un comportement uniquement religieux, et dans aucun autre cas prévu par la loi", "Un phénomène touchant exclusivement les individus de moins de 25 ans selon les études"],
    correct: 1,
    explanation: "La radicalisation est un processus progressif d'adoption d'idéologies extrémistes. Signaux d'alerte : isolement soudain, discours de haine, intérêt pour des zones de conflit, changement radical de comportement. L'APS doit signaler ces signaux à sa hiérarchie sans confronter directement la personne."
  },

  // ========== ÉLECTRONIQUE / SYSTÈMES (5 questions à l'exam) ==========
  {
    theme: "Électronique / Sécurité",
    q: "Qu'est-ce qu'un système d'alarme anti-intrusion ?",
    options: ["Un système uniquement pour les banques, et dans aucun autre cas prévu par la loi", "Un ensemble de détecteurs et de centrale qui signale toute intrusion non autorisée dans un bâtiment", "Uniquement les caméras de surveillance, et dans aucun autre cas prévu par la loi", "Un système de contrôle d'accès par badge"],
    correct: 1,
    explanation: "Système anti-intrusion = centrale d'alarme + détecteurs (volumétriques IRP, contacts de portes/fenêtres, bris de verre) + sirène + télétransmetteur. Il détecte et signale les intrusions par alarme sonore et/ou transmission vers une télésurveillance ou les forces de l'ordre."
  },
  {
    theme: "Électronique / Sécurité",
    q: "Qu'est-ce qu'un détecteur infrarouge passif (IRP) ?",
    options: ["Un détecteur qui émet des rayons infrarouges", "Un détecteur qui reçoit les rayonnements infrarouges émis par les corps chauds (personnes) pour détecter les mouvements", "Un détecteur de chaleur uniquement, et dans aucun autre cas prévu par la loi", "Un détecteur de fumée, utilisé uniquement dans des cas très spécifiques"],
    correct: 1,
    explanation: "IRP (Infrarouge Passif) = détecteur de mouvement qui analyse les variations de rayonnement thermique dans sa zone de surveillance. Déclenche l'alarme quand un corps chaud (humain) traverse son champ de détection. Le plus courant en anti-intrusion."
  },
  {
    theme: "Électronique / Sécurité",
    q: "Qu'est-ce qu'une centrale de télésurveillance ?",
    options: ["Un poste de police spécialisé, selon les dispositions légales applicables", "Un centre de réception d'alarmes qui reçoit les signaux des systèmes de sécurité 24h/24 et dépêche une intervention si nécessaire", "Un système de vidéosurveillance centralisé", "Le PC sécurité d'un grand site, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Centrale de télésurveillance = organisme privé qui reçoit les signaux d'alarme transmis par les systèmes de sécurité des sites clients. En cas d'alarme, il contacte le client, peut déclencher une intervention ou alerter les forces de l'ordre selon le protocole convenu."
  },
  {
    theme: "Électronique / Sécurité",
    q: "Que signifie une alarme intempestive (fausse alarme) ?",
    options: ["Une alarme déclenchée intentionnellement pour un test", "Une alarme déclenchée sans cause réelle d'intrusion (animal, courant d'air, insecte...)", "Une alarme qui ne se déclenche pas en cas d'intrusion réelle", "Une alarme de niveau maximum, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Alarme intempestive = déclenchement sans intrusion réelle. Causes fréquentes : animaux, courants d'air, vibrations, insectes dans le détecteur, variations de température. L'APS doit effectuer une levée de doute, noter sur la main courante et aviser la maintenance si répétitif."
  },
  {
    theme: "Électronique / Sécurité",
    q: "Qu'est-ce qu'un système de contrôle d'accès biométrique ?",
    options: ["Un système de contrôle par badge uniquement", "Un système qui identifie les personnes par des caractéristiques physiques uniques (empreinte digitale, reconnaissance faciale, iris)", "Un système de contrôle par code PIN uniquement", "Un système réservé aux sites militaires, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Biométrique = identification par caractéristiques physiques uniques : empreinte digitale, reconnaissance faciale, iris, réseau veineux. Plus sécurisé qu'un badge (qu'on peut perdre/voler) ou un code (qu'on peut oublier/voler). Soumis à autorisation CNIL pour les données biométriques."
  },
  {
    theme: "Électronique / Sécurité",
    q: "Que signifie l'acronyme PTI dans le contexte de la sécurité électronique ?",
    options: ["Poste de Travail Informatisé, selon les dispositions légales applicables", "Protection du Travailleur Isolé — dispositif électronique détectant l'absence de mouvement ou une chute", "Plan de Travail Intégré, cette option ne correspond pas à la procédure réglementaire", "Protocole de Transmission d'Incident, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "PTI = Protection du Travailleur Isolé (aussi appelé DATI). Dispositif porté par l'agent travaillant seul qui déclenche une alarme automatique en cas d'immobilité prolongée, de chute ou de non-réponse à une sollicitation périodique. Obligatoire dans certaines situations de travail isolé."
  },
  {
    theme: "Électronique / Sécurité",
    q: "Lors d'une prise de service, comment vérifier qu'un système d'alarme anti-intrusion est correctement armé ?",
    options: ["En déclenchant volontairement une alarme", "En vérifiant le voyant ou l'affichage de la centrale indiquant l'état armé/désarmé et l'absence de défaut", "En coupant l'alimentation et en la rétablissant", "En appelant la télésurveillance, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Vérification centrale anti-intrusion en prise de service : voyant/affichage indiquant 'armé' ou 'en veille', absence de voyant défaut (zone ouverte, batterie faible, sabotage), noter l'état sur la main courante. Ne jamais déclencher une vraie alarme pour tester sans prévenir la télésurveillance."
  },

  // ========== UV11 — GESTION DES RISQUES / SITUATIONS DÉGRADÉES ==========
  {
    theme: "Gestion des risques",
    q: "Qu'est-ce qu'une situation dégradée pour un agent de sécurité ?",
    options: ["Une situation où l'agent est fatigué, selon les dispositions légales applicables", "Une situation anormale dépassant le cadre habituel nécessitant une adaptation immédiate", "Une situation avec beaucoup de visiteurs", "Une situation de nuit uniquement, et dans aucun autre cas prévu par la loi"],
    correct: 1,
    explanation: "Situation dégradée = tout événement sortant du cadre normal : panne d'équipement, incident grave, agression, catastrophe. L'agent doit s'adapter, alerter sa hiérarchie et appliquer les procédures d'urgence prévues."
  },
  {
    theme: "Gestion des risques",
    q: "Qu'est-ce que l'analyse des risques sur un site de sécurité ?",
    options: ["Une procédure réservée aux responsables sécurité", "L'identification des menaces, leur probabilité et leur impact pour définir les mesures de prévention adaptées", "Un document administratif annuel, selon les dispositions légales applicables", "L'inspection des extincteurs uniquement, et dans aucun autre cas prévu par la loi"],
    correct: 1,
    explanation: "Analyse des risques : identifier les menaces (intrusion, incendie, vol, agression), évaluer leur probabilité et leur impact, puis définir les mesures préventives et curatives. L'APS contribue par ses observations terrain."
  },
  {
    theme: "Gestion des risques",
    q: "Comment gérer une panne du système de contrôle d'accès en pleine activité ?",
    options: ["Laisser tout le monde entrer librement, selon les dispositions légales applicables", "Passer en contrôle manuel, alerter la maintenance, noter tous les accès manuellement, informer la hiérarchie", "Fermer le site immédiatement, selon les dispositions légales applicables", "Attendre que le système redémarre seul, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Panne contrôle d'accès : basculer en mode dégradé (contrôle manuel), alerter la maintenance et la hiérarchie, noter tous les passages sur la main courante. La sécurité ne doit jamais s'arrêter."
  },
  {
    theme: "Gestion des risques",
    q: "Qu'est-ce que le principe de précaution en sécurité ?",
    options: ["Attendre d'être sûr avant d'agir, selon les dispositions légales applicables", "Prendre des mesures préventives face à un risque potentiel même sans certitude absolue", "Ne jamais intervenir seul, selon les dispositions légales applicables", "Toujours appeler la police en premier, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Principe de précaution : face à un risque potentiel (comportement suspect, objet inhabituel), l'APS doit agir préventivement sans attendre que le danger soit certain. Mieux vaut une fausse alerte qu'un incident évitable."
  },
  {
    theme: "Gestion des risques",
    q: "Face à une inondation soudaine dans un site, quelle est la priorité absolue ?",
    options: ["Sauvegarder les équipements informatiques", "Évacuer les personnes vers les zones hautes ou l'extérieur et alerter les secours", "Couper l'électricité uniquement, et dans aucun autre cas prévu par la loi", "Photographier les dommages pour l'assurance"],
    correct: 1,
    explanation: "Inondation : priorité absolue = évacuer les personnes (risques d'électrocution, noyade). Couper l'électricité si possible sans danger. Alerter le 18 (pompiers) et la hiérarchie. Ne jamais entrer dans l'eau sans connaître les risques électriques."
  },
  {
    theme: "Gestion des risques",
    q: "Qu'est-ce qu'un retour d'expérience (REX) après un incident ?",
    options: ["Un rapport d'accident de travail uniquement", "Une analyse après un incident pour identifier ce qui s'est passé et améliorer les procédures", "Un rapport destiné uniquement aux assurances", "Une réunion informelle entre agents, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "REX = analyse structurée après un incident grave. Objectifs : comprendre le déroulement, identifier les dysfonctionnements, améliorer les procédures et la formation pour éviter que l'incident ne se reproduise."
  },
  {
    theme: "Gestion des risques",
    q: "Qu'est-ce qu'un plan de continuité d'activité (PCA) en sécurité ?",
    options: ["Le planning de rotation des agents, selon les dispositions légales applicables", "Un document définissant les procédures pour maintenir la sécurité en cas d'événement perturbateur majeur", "Le contrat avec l'entreprise de sécurité", "Le plan d'évacuation du site, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "PCA = procédures permettant de maintenir la sécurité du site malgré un événement perturbateur (panne, sinistre, absence massive). Inclut les procédures dégradées, les contacts d'urgence et les priorités d'action."
  },
  {
    theme: "Gestion des risques",
    q: "Qu'est-ce que la gestion de crise pour un APS ?",
    options: ["Gérer les conflits entre collègues, selon les dispositions légales applicables", "Coordonner les actions immédiates face à un événement grave pour limiter les dommages et assurer la sécurité", "Rédiger un rapport après l'incident, selon les dispositions légales applicables", "Appeler les secours et ne rien faire d'autre"],
    correct: 1,
    explanation: "Gestion de crise APS : alerter (hiérarchie + secours), protéger les personnes, appliquer les procédures d'urgence, maintenir la communication, noter tous les événements. L'APS est souvent le premier intervenant sur le terrain."
  },

  // ========== UV14 — MILIEU INDUSTRIEL / SITES SPÉCIFIQUES ==========
  {
    theme: "Milieu industriel",
    q: "Qu'est-ce qu'une zone ATEX ?",
    options: ["Une zone de stockage alimentaire, selon les dispositions légales applicables", "Une zone à ATmosphère EXplosive où des gaz, vapeurs ou poussières peuvent former un mélange explosif", "Une zone administrative sécurisée, selon les dispositions légales applicables", "Une zone de vidéosurveillance renforcée, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "ATEX = ATmosphère EXplosive. Zone où des substances inflammables peuvent former un mélange explosif. Réglementation stricte : matériels spéciaux, interdiction de fumer, pas d'étincelles. L'APS doit connaître et respecter les consignes ATEX."
  },
  {
    theme: "Milieu industriel",
    q: "Qu'est-ce qu'un permis de feu sur un site industriel ?",
    options: ["L'autorisation d'embauche d'un agent, selon les dispositions légales applicables", "Un document autorisant des travaux à risque (soudure, meulage) avec les mesures de sécurité à respecter", "L'autorisation de travailler la nuit, selon les dispositions légales applicables", "Un document réservé aux zones classées secret défense"],
    correct: 1,
    explanation: "Permis de feu = autorisation formelle pour des travaux générant des risques (étincelles, chaleur). L'APS peut être chargé de vérifier la présence de ce permis avant de laisser des intervenants accéder à une zone sensible."
  },
  {
    theme: "Milieu industriel",
    q: "Qu'est-ce qu'un EPI ?",
    options: ["Un équipement de surveillance électronique", "Un Équipement de Protection Individuelle porté par le travailleur (casque, gilet, lunettes, gants...)", "Un équipement collectif incendie, selon les dispositions légales applicables", "Un système d'alarme individuelle, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "EPI = Équipement de Protection Individuelle. Sur un site industriel, l'APS peut être amené à porter ou vérifier le port des EPI obligatoires : casque, gilet haute visibilité, chaussures de sécurité, lunettes, bouchons d'oreilles selon les zones."
  },
  {
    theme: "Milieu industriel",
    q: "Sur un site industriel, que fait l'APS face à une fuite de gaz ?",
    options: ["Chercher l'origine avec une lampe, selon les dispositions légales applicables", "Évacuer la zone, ne pas créer d'étincelle, alerter le 18 et la direction, interdire l'accès", "Ouvrir les fenêtres et attendre, selon les dispositions légales applicables", "Utiliser un extincteur CO2 sur la fuite, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Fuite de gaz : NE PAS créer d'étincelle (pas de lumière, pas de téléphone dans la zone), évacuer immédiatement, alerter le 18 et la direction, interdire l'accès. Ne jamais tenter de colmater seul."
  },
  {
    theme: "Milieu industriel",
    q: "Qu'est-ce qu'un site classé Seveso ?",
    options: ["Une zone de stockage alimentaire réglementée", "Un site industriel présentant des risques d'accidents majeurs liés à des substances dangereuses", "Une zone résidentielle protégée, selon les dispositions légales applicables", "Un site classé monument historique, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Site Seveso = établissement industriel présentant des risques d'accidents majeurs (explosion, incendie, pollution) liés à des substances dangereuses. Deux niveaux : seuil bas et seuil haut. Réglementation très stricte et plans d'urgence spécifiques (POI, PPI)."
  },
  {
    theme: "Milieu industriel",
    q: "Qu'est-ce qu'un PPI (Plan Particulier d'Intervention) ?",
    options: ["Le planning des agents de sécurité, selon les dispositions légales applicables", "Un plan établi par le préfet pour organiser les secours extérieurs en cas d'accident majeur sur un site dangereux", "Le plan intérieur d'évacuation du site, selon les dispositions légales applicables", "Un contrat d'intervention avec une société de sécurité"],
    correct: 1,
    explanation: "PPI = Plan Particulier d'Intervention, établi par le Préfet pour les sites Seveso seuil haut. Organise l'intervention des secours extérieurs (pompiers, police, SAMU) en cas d'accident majeur. Complémentaire au POI (plan interne au site)."
  },
  {
    theme: "Milieu industriel",
    q: "Qu'est-ce qu'un plan de prévention entre une entreprise utilisatrice et une entreprise extérieure ?",
    options: ["Un document commercial régissant les relations financières entre sociétés", "Un document définissant les mesures de prévention des risques lors de l'intervention d'une entreprise extérieure dans les locaux d'une entreprise utilisatrice", "Un plan d'évacuation partagé entre les deux entreprises concernées", "Un accord de confidentialité portant sur les informations sensibles échangées"],
    correct: 1,
    explanation: "Plan de prévention = document obligatoire définissant les risques liés à l'interférence entre les activités et les mesures de prévention. L'APS doit vérifier que les intervenants extérieurs ont bien ce document avant d'accéder au site."
  },

  // ========== UV2 JURIDIQUE (complément) ==========
  {
    theme: "Appréhension / Droit",
    q: "Qu'est-ce que le DRACAR ?",
    options: ["Un registre de sécurité incendie, selon les dispositions légales applicables", "Le fichier informatique pour la Délivrance Réglementaire des Autorisations et CARtes professionnelles des agents privés de sécurité", "Un diplôme de sécurité privée, selon les dispositions légales applicables", "Un système de contrôle d'accès biométrique"],
    correct: 1,
    explanation: "DRACAR = Délivrance Réglementaire des Autorisations et CARtes professionnelles. Fichier informatique du CNAPS qui centralise les demandes et délivre les cartes professionnelles et autorisations pour les agents et entreprises de sécurité privée."
  },
  {
    theme: "Appréhension / Droit",
    q: "Qu'est-ce qu'une voie de fait ?",
    options: ["Un chemin privé interdit au public, selon les dispositions légales applicables", "Une atteinte illégale à la liberté ou à la propriété d'une personne par un acte matériel", "Une infraction commise sur la voie publique", "Un abus de pouvoir administratif, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Voie de fait = atteinte illégale portée à la liberté ou à la propriété par un acte matériel. Ex : palper sans consentement, retenir quelqu'un illégalement. Un APS qui agit hors cadre légal commet une voie de fait engageant sa responsabilité pénale."
  },
  {
    theme: "Appréhension / Droit",
    q: "Quelles sont les obligations concernant la tenue d'un agent de sécurité ?",
    options: ["L'agent est libre de choisir n'importe quelle tenue vestimentaire pour sa mission", "La tenue doit être distinctive et ne pas prêter à confusion avec les uniformes des forces de l'ordre ou d'autres corps constitués", "La tenue doit ressembler à celle de la police pour renforcer l'autorité de l'agent", "Il n'existe aucune obligation réglementaire précise concernant la tenue vestimentaire de l'agent"],
    correct: 1,
    explanation: "La tenue de l'APS doit clairement se distinguer de celle des forces de l'ordre, pompiers ou autres corps constitués. Obligation réglementaire pour éviter toute usurpation de fonction ou tromperie du public."
  },
  {
    theme: "Appréhension / Droit",
    q: "Dans le Code pénal, comment est défini le vol ?",
    options: ["L'appropriation frauduleuse de la chose d'autrui", "La soustraction frauduleuse de la chose d'autrui", "La dégradation volontaire d'un bien", "Le recel d'un bien volé"],
    correct: 1,
    explanation: "Le vol est défini à l'art. 311-1 CP comme 'la soustraction frauduleuse de la chose d'autrui'. 'Soustraction' implique une prise physique sans consentement. Distinct de l'escroquerie (tromperie) et de l'abus de confiance."
  },
  {
    theme: "Appréhension / Droit",
    q: "Qu'est-ce que la présomption d'innocence ?",
    options: ["Toute personne est coupable jusqu'à preuve du contraire", "Toute personne suspectée est présumée innocente jusqu'à condamnation définitive par une décision de justice", "Un droit réservé aux mineurs, selon les dispositions légales applicables", "Une présomption qui ne s'applique qu'aux crimes"],
    correct: 1,
    explanation: "Présomption d'innocence = principe fondamental : toute personne est présumée innocente jusqu'à condamnation définitive. L'APS ne peut pas traiter quelqu'un comme coupable avant jugement. Tout comportement contraire engage sa responsabilité."
  },
  {
    theme: "Appréhension / Droit",
    q: "Qu'est-ce qu'un flagrant délit au sens de l'article 53 du CPP ?",
    options: ["Toute infraction constatée dans les 24 heures précédant l'intervention de l'agent", "L'infraction qui se commet actuellement, ou qui vient de se commettre, ou lorsque la personne est poursuivie par la clameur publique", "Uniquement les crimes passibles d'une peine d'emprisonnement supérieure à 5 ans", "Toute infraction constatée par au moins un témoin présent au moment des faits"],
    correct: 1,
    explanation: "Art. 53 CPP : flagrant délit = infraction qui SE COMMET actuellement OU qui VIENT DE SE COMMETTRE, ou si la personne est poursuivie par clameur publique. Cette définition conditionne l'application de l'art. 73 CPP (appréhension citoyenne)."
  },
  {
    theme: "Appréhension / Droit",
    q: "Qu'est-ce que le bulletin n°2 du casier judiciaire ?",
    options: ["Le relevé de toutes les condamnations, selon les dispositions légales applicables", "Un extrait communiqué aux administrations pour certains emplois, excluant certaines condamnations légères", "Un document uniquement consulté par les tribunaux", "L'autorisation préalable du CNAPS, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Le B2 est communiqué au CNAPS et à certains employeurs. Il mentionne la plupart des condamnations. L'absence de mentions incompatibles sur le B2 est une condition pour obtenir la carte professionnelle d'agent de sécurité."
  },

  // ========== UV3 CONFLITS (complément) ==========
  {
    theme: "Gestion de conflit",
    q: "Quels sont les signes précurseurs d'une escalade vers la violence ?",
    options: ["La politesse et le calme de l'interlocuteur", "Voix qui monte, agitation physique, invasion de l'espace personnel, gestes menaçants, regard fixe et agressif", "Le fait de se taire, sans aucune obligation réglementaire particulière", "Le fait de partir sans un mot, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Signaux d'alerte : voix qui monte et se tend, agitation motrice, invasion de l'espace personnel, poings serrés, mâchoires crispées, regard fixe menaçant. L'APS doit détecter ces signaux tôt pour intervenir avant la violence physique."
  },
  {
    theme: "Gestion de conflit",
    q: "Pourquoi faut-il éviter de hausser le ton face à une personne agressive ?",
    options: ["Pour économiser sa voix, cette option ne correspond pas à la procédure réglementaire", "Parce que hausser le ton aggrave la situation en entrant dans une surenchère verbale qui peut mener à la violence", "Parce que c'est interdit par le règlement", "Pour ne pas alerter les autres visiteurs"],
    correct: 1,
    explanation: "Hausser le ton = entrer dans la surenchère et valider le mode agressif. Cela aggrave la tension. L'APS doit maintenir une voix posée, ferme mais calme : paradoxalement plus efficace pour désamorcer qu'un ton autoritaire."
  },

  // ========== UV9 PALPATION (complément) ==========
  {
    theme: "Palpation / Fouille",
    q: "Qu'est-ce que l'inspection visuelle des bagages ?",
    options: ["L'agent ouvre et fouille lui-même le bagage", "Le propriétaire ouvre son bagage et présente le contenu à l'agent pour inspection visuelle, sans que l'agent y touche", "Un scan par rayon X uniquement, et dans aucun autre cas prévu par la loi", "L'agent confisque le bagage suspect, selon les dispositions légales applicables"],
    correct: 1,
    explanation: "Inspection visuelle = le PROPRIÉTAIRE ouvre lui-même son bagage. L'agent regarde mais ne touche pas. Si refus, l'agent peut refuser l'accès mais ne peut pas fouiller de force. Nécessite le consentement et respecte les libertés individuelles."
  },
  {
    theme: "Palpation / Fouille",
    q: "La palpation de sécurité peut-elle être réalisée sur un mineur ?",
    options: ["Oui, sans condition particulière, conformément à la réglementation en vigueur", "Seulement en présence d'un représentant légal ou d'un adulte accompagnant, et avec leur consentement", "Non, jamais sur un mineur, conformément à la réglementation en vigueur", "Oui, si le mineur consent seul, conformément à la réglementation en vigueur"],
    correct: 1,
    explanation: "Palpation d'un mineur : exige la présence et le consentement d'un représentant légal ou d'un adulte accompagnant. Le consentement du seul mineur ne suffit pas juridiquement. Sans adulte référent consentant, la palpation est impossible."
  },

  // ========== CHIFFRES CLÉS & DÉLAIS RÉGLEMENTAIRES ==========
  {
    theme: "Chiffres clés",
    q: "Quelle est la durée de validité de la carte professionnelle APS ?",
    options: ["1 an", "3 ans", "5 ans", "10 ans"],
    correct: 2,
    explanation: "La carte professionnelle est valable 5 ans. Son renouvellement nécessite une formation continue et une nouvelle vérification du casier judiciaire par le CNAPS."
  },
  {
    theme: "Chiffres clés",
    q: "Quelle est la durée maximale de conservation des images de vidéosurveillance ?",
    options: ["Un délai de conservation limité à 8 jours ouvrés après la captation", "1 mois (30 jours)", "Une conservation de 3 mois permettant les vérifications trimestrielles", "Une conservation de 6 mois couvrant une demi-période annuelle d'exploitation"],
    correct: 1,
    explanation: "Durée maximale légale : 1 mois (30 jours). Au-delà, les images doivent être automatiquement effacées, sauf réquisition judiciaire en cours."
  },
  {
    theme: "Chiffres clés",
    q: "Dans quel délai l'employeur doit-il déclarer un accident du travail à la CPAM ?",
    options: ["Un délai de 24 heures calendaires à compter de la survenue du sinistre", "48 heures ouvrables", "Un délai de 72 heures ouvrées accordé à l'employeur pour effectuer la déclaration", "Un délai de conservation limité à 8 jours ouvrés après la captation"],
    correct: 1,
    explanation: "L'employeur dispose de 48 heures ouvrables (jours ouvrés) pour déclarer l'accident du travail à la CPAM. Le salarié doit en informer son employeur dans les 24 heures."
  },
  {
    theme: "Chiffres clés",
    q: "Quelle est la distance maximale à parcourir pour atteindre un déclencheur manuel d'alarme incendie ?",
    options: ["10 mètres", "20 mètres", "30 mètres", "50 mètres"],
    correct: 2,
    explanation: "Aucun point d'un ERP ne doit être à plus de 30 mètres d'un déclencheur manuel (boîtier rouge brisable). Cette distance maximale est fixée par la réglementation incendie."
  },
  {
    theme: "Chiffres clés",
    q: "Quelle est l'autonomie minimale de l'éclairage de sécurité en ERP ?",
    options: ["30 minutes", "1 heure", "2 heures", "4 heures"],
    correct: 1,
    explanation: "L'éclairage de sécurité (BAES) doit avoir une autonomie minimale d'1 heure en ERP. Il doit s'allumer automatiquement en cas de coupure d'alimentation électrique."
  },
  {
    theme: "Chiffres clés",
    q: "À quelle fréquence les extincteurs doivent-ils être vérifiés par une société agréée ?",
    options: ["Tous les 6 mois", "Tous les ans", "Tous les 2 ans", "Tous les 5 ans"],
    correct: 1,
    explanation: "Vérification annuelle obligatoire par une société agréée. L'APS effectue un contrôle visuel quotidien (5 points), mais la vérification technique approfondie est annuelle et doit être consignée dans le registre de sécurité."
  },
  {
    theme: "Chiffres clés",
    q: "Quel est le rythme de compression lors d'un massage cardiaque (RCP) ?",
    options: ["60 à 80 compressions par minute", "100 à 120 compressions par minute", "140 à 160 compressions par minute", "30 compressions par minute"],
    correct: 1,
    explanation: "Rythme RCP : 100 à 120 compressions par minute, profondeur 5 à 6 cm, alternées avec 2 insufflations (30/2). Ce rythme est validé par les recommandations internationales de réanimation."
  },
  {
    theme: "Chiffres clés",
    q: "Quel est le montant maximum de l'amende pour exercice illégal d'une activité de sécurité privée ?",
    options: ["3 750 €", "15 000 €", "30 000 €", "75 000 €"],
    correct: 2,
    explanation: "Exercice illégal : jusqu'à 2 ans d'emprisonnement et 30 000 € d'amende. Cette sanction s'applique à l'agent sans carte professionnelle ET à l'employeur qui l'emploie en connaissance de cause."
  },
  {
    theme: "Chiffres clés",
    q: "Quelle est la durée minimale d'un exercice d'évacuation obligatoire par an dans un ERP ?",
    options: ["1 exercice par an minimum", "2 exercices par an minimum", "4 exercices par an minimum", "1 exercice tous les 2 ans"],
    correct: 0,
    explanation: "1 exercice d'évacuation minimum par an dans tout ERP. Exception : 2 fois par an pour les ERP avec locaux à sommeil (hôtels, hôpitaux, internats), dont au moins un de nuit. À consigner obligatoirement dans le registre de sécurité."
  },
  {
    theme: "Chiffres clés",
    q: "À quelle distance minimum se placer pour utiliser un extincteur CO2 ?",
    options: ["0,5 mètre", "1 mètre", "2 mètres", "5 mètres"],
    correct: 1,
    explanation: "Distance minimum 1 mètre pour le CO2. Le jet de CO2 à -78°C peut provoquer des brûlures par le froid et des asphyxies à courte portée. Pour l'eau pulvérisée : attaquer à 2-3 mètres minimum."
  },
  {
    theme: "Chiffres clés",
    q: "Combien de temps peut-on retenir une personne appréhendée au titre de l'article 73 CPP ?",
    options: ["Le délai de 30 minutes maximum avant remise à l'autorité", "Le délai de 2 heures maximum fixé par la jurisprudence française", "Le délai de 4 heures maximum autorisé par le code de procédure", "Le temps strictement nécessaire pour la remettre à un OPJ — aucune limite fixe mais doit être immédiat"],
    correct: 3,
    explanation: "Aucune durée maximale fixée, mais la remise doit être IMMÉDIATE. Toute rétention prolongée constitue une séquestration (délit pénal). En pratique, l'agent doit appeler le 17 dès l'appréhension et attendre l'arrivée des forces de l'ordre."
  },
  {
    theme: "Chiffres clés",
    q: "Quelle est la note minimale pour valider une UV à l'examen TFP APS ?",
    options: ["8/20", "10/20", "12/20", "14/20"],
    correct: 2,
    explanation: "Note minimale : 12/20 par UV pour la valider. Entre 8 et 12 : ajourné, peut se représenter à une nouvelle session. En dessous de 8 : doit refaire la formation correspondante. Chaque UV est évaluée indépendamment."
  },
  {
    theme: "Chiffres clés",
    q: "Combien de personnes minimum sont nécessaires pour utiliser un RIA (Robinet d'Incendie Armé) ?",
    options: ["1 seule personne suffit", "2 personnes minimum", "3 personnes minimum", "4 personnes minimum"],
    correct: 1,
    explanation: "2 personnes minimum pour un RIA : une pour tenir la lance et diriger le jet, une autre pour ouvrir le robinet et dérouler/contrôler le tuyau. Utiliser seul un RIA est dangereux et inefficace."
  },

  // ========== UNIFORME & IDENTIFICATION ==========
  {
    theme: "Appréhension / Droit",
    q: "Que doit obligatoirement porter un agent de sécurité en service pour s'identifier ?",
    options: ["Uniquement son badge photo, et dans aucun autre cas prévu par la loi", "Sa carte professionnelle + un badge d'identification visible avec son nom, prénom et le nom de l'entreprise", "Uniquement le nom de l'entreprise sur l'uniforme", "Aucune obligation d'identification visuelle"],
    correct: 1,
    explanation: "L'APS doit porter visiblement : sa carte professionnelle (à présenter sur demande) et un badge d'identification indiquant nom, prénom et entreprise. L'identification permet au public de savoir à qui il s'adresse et de vérifier la légitimité de l'agent."
  },
  {
    theme: "Appréhension / Droit",
    q: "Un agent de sécurité peut-il exercer en civil (sans uniforme) ?",
    options: ["Non, l'uniforme est toujours obligatoire", "Oui, dans certaines missions spécifiques (surveillance discrète, protection rapprochée) avec autorisation", "Oui, uniquement de nuit, selon la réglementation actuellement en vigueur", "Non, c'est interdit dans tous les cas, conformément à la réglementation en vigueur"],
    correct: 1,
    explanation: "Dans certaines missions spécifiques (surveillance discrète en magasin, protection rapprochée), l'agent peut exercer en civil. Cette dérogation doit être prévue dans le contrat et autorisée. Dans ce cas, la carte professionnelle reste obligatoire."
  },
  {
    theme: "Appréhension / Droit",
    q: "Que risque un agent qui se présente faussement comme policier ou gendarme ?",
    options: ["Un simple avertissement oral sans aucune conséquence administrative", "Une infraction pénale pour usurpation de titre ou de fonctions (art. 433-15 CP)", "La suspension de sa carte professionnelle uniquement", "Aucune sanction si c'était pour une bonne raison"],
    correct: 1,
    explanation: "Usurpation de titre ou de fonctions (art. 433-15 CP) : délit pénal pouvant être puni d'un an d'emprisonnement et 15 000 € d'amende. Se présenter comme policier alors qu'on est APS, même verbalement, constitue ce délit."
  },
  {
    theme: "Appréhension / Droit",
    q: "L'agent de sécurité doit-il présenter sa carte professionnelle sur simple demande ?",
    options: ["Non, seulement aux forces de l'ordre, conformément à la réglementation en vigueur", "Oui, à toute personne qui en fait la demande (forces de l'ordre, agents du CNAPS, et toute personne concernée par sa mission)", "Uniquement à l'employeur lors de l'embauche et jamais en cours de mission", "Non, la carte professionnelle est un document strictement confidentiel et privé"],
    correct: 1,
    explanation: "L'APS doit présenter sa carte professionnelle sur simple demande des forces de l'ordre, des agents du CNAPS en contrôle, et de toute personne directement concernée par son intervention. Refuser de la présenter est une infraction."
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
