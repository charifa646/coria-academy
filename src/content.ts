// Every text of the site, word for word from COPYWRITING.md (Charifa's mockup). Change a text there first, then here.

export const skip = "Aller au contenu";

export const brand = { name: "Coria", sub: "ACADEMY" };

export const nav = {
  links: [
    { label: "Le programme", href: "#programme" },
    { label: "La masterclass", href: "#reservation" },
  ],
  cta: "Prendre ma place",
};

export const campaign = {
  eyebrow: "MASTERCLASS LIVE · CLAUDE CODE",
  title: "Et si tu pouvais créer des sites web professionnels",
  titleEnd: "sans savoir coder ?",
  text: "Découvre en direct comment je transforme une simple maquette en un site web moderne, responsive et professionnel grâce à Claude Code.",
  cta: "Je réserve ma place",
  pass: { label: "PASS MASTERCLASS", price: "5 000", currency: "FCFA" },
  date: { label: "LE RENDEZ-VOUS", day: "25 octobre", line1: "Dimanche · 2026", line2: "En ligne · En direct" },
  big: ["DU DESIGN", "AU", "SITE WEB."],
  aside: ["Une démonstration concrète.", "Un vrai site créé sous tes yeux."],
  asideLink: "Découvrir le programme",
  note: "Aucune expérience en programmation requise pour assister à la session.",
  word: "CRÉATION.",
  portraitAlt: "Portrait artistique original d’une femme de profil, éclairée en orange et bleu, visuel de campagne",
  portraitNote: "VISUEL DE CAMPAGNE · CRÉATION ORIGINALE",
};

export const strip = {
  verbs: "IMAGINER. CONSTRUIRE. PUBLIER.",
  pills: ["Design", "Claude Code", "Responsive"],
  link: "La suite commence ici ↓",
};

export const programme = {
  title: ["CE QUE TU VAS VOIR", "PENDANT LA", "MASTERCLASS."],
  text: "De la première maquette au site qui prend vie, découvre ce qui fait la différence.",
  design: {
    wire: "LA MAQUETTE",
    name: "ORA",
    line: ["L’art de", "ralentir."],
    live: "LE SITE PREND VIE ↗",
    category: "DE L’IDÉE À L’ÉCRAN",
    title: ["Une maquette.", "Un véritable site."],
    text: "Comment passer d’une maquette à un véritable site web.",
  },
  code: {
    head: "Le projet prend forme",
    prompt: ["Crée une page élégante,", "responsive et fidèle", "à cette direction artistique."],
    foot: "CLAUDE CODE / EXPLORATION CRÉATIVE",
    category: "LA CRÉATION, AUTREMENT",
    title: ["Claude Code.", "Le souci du détail."],
    text: "Comment utiliser Claude Code pour créer un design professionnel.",
  },
  future: {
    label: ["TON PROCHAIN", "projet."],
    slip: "DU SAVOIR-FAIRE À L’OFFRE",
    slipTitle: "Design & développement",
    slipList: "Site vitrine · Landing page · E-commerce",
    category: "OUVRIR LE CHAMP DES POSSIBLES",
    title: ["Une compétence.", "Un nouvel horizon."],
    text: "Comment transformer cette compétence en opportunité de revenus.",
  },
  link: "Réserver ma place",
};

export const reservation = {
  word: "créer.",
  title: "Tu as les idées.",
  titleEnd: ["Découvre comment", "leur donner vie."],
  text: ["Une démonstration concrète.", "Un vrai site créé sous tes yeux."],
  date: { label: "LE RENDEZ-VOUS", day: ["Dimanche", "25 octobre 2026"], line: "En ligne · En direct" },
  pass: { label: "PASS MASTERCLASS", price: "5 000", currency: "FCFA" },
  cta: "Je réserve ma place",
  note: "Aucune expérience en programmation requise.",
};

export const footer = { text: "Une masterclass avec Charifa.", motto: "Apprends · Applique · Crée" };

// The booking window, shown while Charifa's booking form link is not set (RESERVATION_URL in Reserve.tsx).
export const booking = {
  close: "Fermer",
  title: "Ta prochaine",
  titleEnd: "création commence ici.",
  text: "Dimanche 25 octobre 2026 · En ligne · En direct",
  price: "5 000 FCFA",
  status: "La réservation n’est pas encore ouverte sur cette page.",
  back: "Revenir à la présentation",
};
