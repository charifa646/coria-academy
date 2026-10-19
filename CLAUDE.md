# Coria Academy : site de la masterclass Claude Code de Charifa

Projet à part, sans lien avec Ghostdesignco ni les autres sites de Charifa : leurs règles de design (pas d'italique, Clash Display, vert acide) ne s'appliquent pas ici. Dépôt à part : `charifa646/coria-academy`, branche `main` (c'est la branche de production du projet Vercel). Une copie de sécurité reste sur la branche `coria-academy` du dépôt `sites-pratiques`.

## Travailler avec Charifa
- Réponds en français et tutoie-la. Sur ce site, les textes tutoient le visiteur.
- Textes : `COPYWRITING.md` est la source unique, mot pour mot. Rien d'inventé : ni horaire, ni chiffre, ni témoignage, ni promesse de revenus.
- Construction section par section, avec sa validation, captures ordinateur et téléphone à chaque étape. Rien en ligne sans son « publie ».
- Aucune clé ni mot de passe dans le dépôt : il est public.

## Direction (maquette GPT Astra V3, dans `maquette/`)
- Une page : haut orange avec portrait central et mot « CRÉATION. », bande noire, programme en trois cartes décalées (crème, orange, noire), réservation sur fond crème à panneau noir avec le bouton orange (choix B du 19 octobre 2026), pied de page noir. L'orange reste au haut de page, à la carte Claude Code et aux boutons de réservation.
- Typographie de la maquette : Arial pour le texte, Georgia pour la marque et les italiques des cartes.
- Le portrait est un visuel de campagne généré : il ne représente pas Charifa.
- Prix : 5 000 FCFA partout. Date : dimanche 25 octobre 2026, 19h30 heure du Burkina, en direct sur Zoom.
- Réservation : le lien du formulaire de Charifa (à venir) remplacera la fenêtre « pas encore ouverte ».

## Code
- Next.js 14 (App Router), React 18, TypeScript, CSS global porté de la maquette (`src/app/coria.css`).
- Mise en ligne : un projet Vercel à part, sur le « publie » de Charifa.
