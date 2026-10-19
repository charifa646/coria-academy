# Coria Academy : site de la masterclass Claude Code de Charifa

Projet à part, sans lien avec Ghostdesignco ni les autres sites de Charifa : leurs règles de design (pas d'italique, Clash Display, vert acide) ne s'appliquent pas ici. Branche à part : `coria-academy` (branche vierge du dépôt `sites-pratiques`, elle ne contient que ce site).

## Travailler avec Charifa
- Réponds en français et tutoie-la. Sur ce site, les textes tutoient le visiteur.
- Textes : `COPYWRITING.md` est la source unique, mot pour mot. Rien d'inventé : ni horaire, ni chiffre, ni témoignage, ni promesse de revenus.
- Construction section par section, avec sa validation, captures ordinateur et téléphone à chaque étape. Rien en ligne sans son « publie ».
- Aucune clé ni mot de passe dans le dépôt : il est public.

## Direction (maquette GPT Astra V3, dans `maquette/`)
- Une page : haut orange avec portrait central et mot « CRÉATION. », bande noire, programme en trois cartes décalées (crème, orange, noire), réservation orange à panneau crème, pied de page noir.
- Typographie de la maquette : Arial pour le texte, Georgia pour la marque et les italiques des cartes.
- Le portrait est un visuel de campagne généré : il ne représente pas Charifa.
- Prix : 5 000 FCFA partout. Date : dimanche 25 octobre 2026, en ligne, en direct.
- Réservation : le lien du formulaire de Charifa (à venir) remplacera la fenêtre « pas encore ouverte ».

## Code
- Next.js 14 (App Router), React 18, TypeScript, CSS global porté de la maquette (`src/app/coria.css`).
- Mise en ligne : un projet Vercel à part, sur le « publie » de Charifa.
