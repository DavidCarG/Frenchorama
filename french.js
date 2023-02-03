let bodyParts = [
    {french: "le cou", english: "neck"},
    {french: "le coude", english: "elbow"},
    {french: "le crâne", english: "skull"},
    {french: "la cuisse", english: "thigh"},
    {french: "l'estomac", english: "stomach"},
    {french: "la fesse", english: "buttock"},
    {french: "le foie", english: "liver"},
    {french: "l'hormone", english: "hormone"},
    {french: "la lèvre", english: "lip"},
    {french: "la moustache", english: "moustache"},
    {french: "l'ongle", english: "fingernail"},
    {french: "le poing", english: "fist"},
    {french: "la poitrine", english: "bosom, chest"},
    {french: "le poumon", english: "lung"},
    {french: "le sourcil", english: "eyebrow"},
    {french: "le talon", english: "heel"},
    {french: "le chair", english: "flesh"},
    {french: "la dent", english: "tooth"},
    {french: "la gorge", english: "throat"},
    {french: "la joue", english: "cheek"},
    {french: "l'os", english: "bone"},
    {french: "le pouce", english: "thumb"},
    {french: "le rein", english: "kidney, loins"},
    {french: "la veine", english: "vein"},
    {french: "le ventre", english: "belly"},
    {french: "la bouche", english: "mouth"},
    {french: "le bras", english: "arm"},
    {french: "le cadavre", english: "corpse, cadaver"},
    {french: "le cerveau", english: "brain"},
    {french: "le cheveu", english: "hair"},
    {french: "la côte", english: "rib"},
    {french: "le cul", english: "ass, bum"},
    {french: "le doigt", english: "finger"},
    {french: "l'esprit", english: "mind, spirit"},
    {french: "l'épaule", english: "shoulder"},
    {french: "la jambe", english: "leg"},
    {french: "la main", english: "hand"},
    {french: "le nez", english: "nose"},
    {french: "l'oreille", english: "ear"},
    {french: "le sein", english: "breast"},
    {french: "la tête", english: "head"},
    {french: "le visage", english: "face"},
    {french: "la barbe", english: "beard"},
    {french: "le coeur", english: "heart"},
    {french: "le dos", english: "back"},
    {french: "la figure", english: "face, figure"},
    {french: "le front", english: "forehead"},
    {french: "le genou", english: "knee"},
    {french: "la langue", english: "tongue, language"},
    {french: "le muscle", english: "muscle"},
    {french: "l'organe", english: "organ"},
    {french: "la peau", english: "skin"},
    {french: "le pied", english: "foot"},
    {french: "le sang", english: "blood"},
    {french: "la tumeur", english: "tumor"},
    {french: "la voix", english: "voice"},
    {french: "l'oeil(les yeux)", english: "eye(eyes)"}
];

let clothing = [
    {french: "la bague", english: "ring"},
    {french: "le bas", english: "stocking, bottom(part)"},
    {french: "la blouse", english: "blouse"},
    {french: "le bonnet", english: "bonnet"},
    {french: "le bouton", english: "button"},
    {french: "les bretelles", english: "suspenders, shoulder strap"},
    {french: "la ceinture", english: "belt"},
    {french: "la chaussure", english: "shoe"},
    {french: "la chemise", english: "shirt"},
    {french: "le collant", english: "tights"},
    {french: "le complet", english: "suit"},
    {french: "le costume", english: "men's suit"},
    {french: "la cravate", english: "necktie, tie"},
    {french: "l'écharpe", english: "scarf"},
    {french: "le gant", english: "glove"},
    {french: "l'habillement", english: "clothing"},
    {french: "l'imperméable", english: "raincoat"},
    {french: "la lingerie", english: "lingerie"},
    {french: "les lunettes", english: "glasses"},
    {french: "le maillot", english: "swimsuit"},
    {french: "le manche", english: "sleeve"},
    {french: "le manteau", english: "coat"},
    {french: "le mouchoir", english: "handkerchief"},
    {french: "la poche", english: "pocket"},
    {french: "le pull ", english: "sweater"},
    {french: "la robe", english: "dress"},
    {french: "le sac", english: "bag, sack"},
    {french: "le t-shirt, le tee-shirt", english: "T-shirt"},
    {french: "le tailleur", english: "women's suit"},
    {french: "le vestiare", english: "cloakroom"},
    {french: "le vestom", english: "jacket"},
    {french: "le badge", english: "badge"},
    {french: "la basket", english: "sneaker"},
    {french: "le blouson", english: "blouson jacket"},
    {french: "la botte", english: "boot"},
    {french: "le chapeau", english: "hat"},
    {french: "la chaussette", english: "sock"},
    {french: "le chemisier", english: "chemise"},
    {french: "la culotte", english: "panties"},
    {french: "le foulard", english: "scarf, neckcloth"},
    {french: "la jupe", english: "skirt"},
    {french: "le pantalon", english: "trousers"},
    {french: "le parapluie", english: "umbrella"},
    {french: "le sabot", english: "clog"},
    {french: "le soutien-gorge", english: "bra"},
    {french: "le tablier", english: "apron"},
    {french: "le tennis", english: "gumshoes"},
    {french: "la veste", english: "jacket"},
    {french: "le vêtement", english: "garment, clothes"}
];

let colors = [
    {french: "argent", english: "silver"},
    {french: "blond (blonde)", english: "blond"},
    {french: "brun (brune)", english: "brown"},
    {french: "doré", english: "golden"},
    {french: "foncé (foncée)", english: "dark"},
    {french: "roux (rousse)", english: "redhead, red"},
    {french: "teint (teinte)", english: "colored"},
    {french: "violet (violette)", english: "violet"},
    {french: "blanc (blache)", english: "white"},
    {french: "clair (claire)", english: "clear, light"},
    {french: "la couleur", english: "color"},
    {french: "gris (grise)", english: "grey"},
    {french: "jaune", english: "yellow"},
    {french: "noir (noire)", english: "black"},
    {french: "rose", english: "pink"},
    {french: "rouge", english: "red"},
    {french: "bleu(bleue)", english: "blue"},
    {french: "orange", english: "orange"},
    {french: "vert(verte)", english: "green"}
];

let Dates = [
    {french: "le dimanche", english: "Sunday"},
    {french: "le jeudi", english: "Thursday"},
    {french: "le mardi", english: "Tuesday"},
    {french: "le mercredi", english: "Wednesday"},
    {french: "le samedi", english: "Saturday"},
    {french: "le vendredi", english: "Friday"},
    {french: "le lundi", english: "Monday"},
    {french: "l'avril", english: "April"},
    {french: "le mars", english: "March"},
    {french: "le décembre", english: "December"},
    {french: "le février", english: "February"},
    {french: "le janvier", english: "January"},
    {french: "le juillet", english: "July"},
    {french: "le juin", english: "June"},
    {french: "le mai", english: "May"},
    {french: "le novembre", english: "November"},
    {french: "l'octobre", english: "October"},
    {french: "le septembre", english: "September"},
    {french: "l'août", english: "August"},
    {french: "l'hiver", english: "winter"},
    {french: "l'automne", english: "autumn"},
    {french: "le printemps", english: "spring"},
    {french: "la saison", english: "season"},
    {french: "l'été", english: "summer"}
];

let emotions_descriptions = [
    {french: "absolu(absolue)", english: "absolute"},
    {french: "beau, bel(belle)", english: "handsome, beautiful"},
    {french: "bon (bonne)", english: "good, kind, well"},
    {french: "capable", english: "capable, able"},
    {french: "certain (certaine)", english: "certain"},
    {french: "civil (civile)", english: "civil"},
    {french: "clair", english: "clear"},
    {french: "complexe", english: "complex"},
    {french: "contraire", english: "contrary, opposite"},
    {french: "coupable", english: "guilty"},
    {french: "criminel (criminelle)", english: "criminal"},
    {french: "critique", english: "critical"},
    {french: "dangereux (dangereuse)", english: "dangerous"},
    {french: "différent (différente)", english: "different"},
    {french: "difficile", english: "difficult"},
    {french: "direct (directe)", english: "direct"},
    {french: "disponible", english: "available"},
    {french: "dur (dure)", english: "hard, difficult"},
    {french: "extrême", english: "extreme"},
    {french: "étroit (étroit)", english: "narrow, tight"},
    {french: "facile", english: "easy"},
    {french: "faible", english: "weak, low, small"},
    {french: "faux (fausse)", english: "false, wrong, fake, forged"},
    {french: "ferme", english: "firm, hard, steady"},
    {french: "fort (forte)", english: "strong, hard, intense"},
    {french: "fou, fol (folle)", english: "crazy"},
    {french: "grand (grande)", english: "great, big, tall"},
    {french: "grave", english: "serious, grave, low"},
    {french: "heureux (hereuse)", english: "happy, lucky, fortunate"},
    {french: "honorable", english: "honorable"},
    {french: "important (importante)", english: "important"},
    {french: "impossible", english: "impossible"},
    {french: "inconnu (inconnue)", english: "unknown, unfamiliar"},
    {french: "infériur (inférieure)", english: "inferior"},
    {french: "inquiet (inquiète)", english: "worried, anxious"},
    {french: "jeune", english: "young"},
    {french: "juste", english: "just, only, correct, fair"},
    {french: "libre", english: "free"},
    {french: "lourd (lourde)", english: "heavy"},
    {french: "mauvais (mauvaise)", english: "bad, wrong"},
    {french: "moderne", english: "modern"},
    {french: "naturel (naturelle)", english: "natural"},
    {french: "normal", english: "normal"},
    {french: "objectif (objective)", english: "objective, unbiased"},
    {french: "ordinaire", english: "ordinary"},
    {french: "ouvert (ouverte)", english: "open"},
    {french: "particulier (particulière)", english: "particular, peculiar"},
    {french: "partiel (partielle)", english: "partial"},
    {french: "permanent (permanente)", english: "permanent"},
    {french: "physique", english: "physical"},
    {french: "précis (précise)", english: "precise"},
    {french: "prêt (prête)", english: "ready"},
    {french: "propre", english: "clean, proper, own, personal"},
    {french: "public (publique)", english: "public"},
    {french: "rare", english: "rare"},
    {french: "responsable", english: "responsible"},
    {french: "réel (réelle)", english: "real"},
    {french: "riche", english: "rich"},
    {french: "secret (secrète)", english: "secret"},
    {french: "seul (seule)", english: "alone, only"},
    {french: "sérieux (sérieuse)", english: "serious"},
    {french: "sévère", english: "severe"},
    {french: "social (sociale)", english: "social"},
    {french: "spécial (spéciale)", english: "special"},
    {french: "supérieur (supérieure)", english: "superior, upper, top, higher"},
    {french: "sûr (sûre)", english: "sure, confident, secure, safe"},
    {french: "terrible", english: "terrible, dreadful"},
    {french: "triste", english: "sad"},
    {french: "unique", english: "unique, only"},
    {french: "vide", english: "empty"},
    {french: "violen (violente)", english: "violent"},
    {french: "froid (froide)", english: "cold"},
    {french: "incapable", english: "incapable, incompetent"},
    {french: "simple", english: "simple"}
];