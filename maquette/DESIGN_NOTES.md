# Masterclass Claude Code — V2
Date : dimanche 25 octobre 2026, en ligne, en direct. Prix validé : 5 000 FCFA. Aucun horaire ou lien de paiement fourni.

## Refonte artistique
Hero inspiré de la profondeur de TravelWith : titre centré, trois univers de sites superposés avec rotation modérée et ombres douces. Ce sont des compositions HTML/CSS originales, pas des captures de sites vérifiées ni des interfaces de produits affiliés.
Site central ORA : nouvelle photographie architecturale générée, maquette éditoriale chaude ; site latéral gauche : Sillage avec visuel original créé précédemment ; site latéral droit : Fréquence avec portrait musical original créé précédemment. Chaque concept est fictif. Le nom de domaine ORA visible est une légende de concept, pas un lien.
Programme inspiré de Sillage : introduction éditoriale asymétrique, trois cartes de 505px minimum en grille, décalage vertical 65px pour la carte centrale et 10px pour la dernière. Les illustrations sont codées et les images locales. Le code dessiné est une illustration, pas une véritable sortie de Claude Code.
Réservation en fond noir chaud pleine largeur, prix et date lisibles, CTA crème. Aucun compte à rebours, faux témoignage ou promesse de revenus garantis.

## Design system
Variables : paper #f8f7f3 ; ink #282821 ; muted #87857c ; accent #ad5034 ; line #dddad1. Section réservation #292c25. Texte Arial/Helvetica et italique Georgia. Max contenu1200px, gouttières clamp(22px,5vw,80px).
Titre clamp(44px,4.9vw,72px), line-height1.04, letter-spacing-.065em. Mobile clamp(36px,9vw,51px), line-height1.08. Description14px desktop,13px mobile.
Stage desktop1250x530px : visuel central650x424px, gauche266x350px, droite220x390px. Adaptations <=1050px et <=650px. Mobile : stage miniature centré, cartes en une colonne sans décalage, réservation empilée. Backgrounds toujours pleine largeur.

## Assets
assets/architecture.webp : image originale générée avec l’outil intégré. Prompt : premium Mediterranean architectural editorial, ivory travertine and terracotta villa, large arch, olive tree, reflecting pool, coastal hills, warm late sunlight, no text or logo, 1536x1024. Export WebP qualité93.
assets/motion.webp : image originale Sillage, silhouette noire et traînées orange.
assets/audio.webp : image originale Fréquence, portrait noir et blanc au casque audio.
Aucun téléchargement externe nécessaire pour les visuels.

## Réservation
Configurer RESERVATION_URL dans script.js avec le lien de paiement/contact réel. Sans lien, fenêtre indiquant que la réservation n’est pas encore ouverte. Aucun paiement, message, collecte de données ou réservation simulée.

## Vérifications
Syntaxe JS contrôlée. Assets et anciens tarifs vérifiés. Vérification visuelle navigateur indisponible. Revoir le rendu dans le navigateur cible avant lancement commercial.

# V3 — nouvelle référence orange
Le header V2 est remplacé par une composition campagne : orange intense pleine largeur, portrait central détouré, promesse et réservation à gauche, grande accroche à droite, mot CRÉATION en arrière-plan bas. Pas de cadre extérieur. Les cartes de programme sont conservées avec nouvelles couleurs crème/orange/noir. Réservation orange et panneau crème ; footer noir. Le prix et la date sont inchangés.
Asset ajouté : assets/creative-portrait.webp. Portrait de campagne fictif, qui ne représente pas Charifa. Généré via l’outil imagegen intégré, transparence conservée lors de conversion WebP. Prompt : original editorial Black woman, right-facing profile, sleek short black bob, black high neck top, orange and teal rim lighting, transparent background, no text or logos. Image source 1024x1536.
Dimensions desktop : navigation100px, hero790px minimum, contenu max1320px, portrait570x800px, colonne gauche310px, droite365px. Mot de fond clamp(140px,17.5vw,260px). Paliers1150px,850px,650px. Mobile : texte, pass/date puis composition portrait, hauteur1090px minimum, portrait377x565px. Fonds sur toute la largeur.
Le contrôle visuel navigateur reste indisponible. Syntaxe JS et présence des assets vérifiées. RESERVATION_URL toujours vide tant que le lien réel n’est pas fourni.
