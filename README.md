# Site vitrine PLANTY

## Projet 6 : Personnaliser un thème WordPress pour une stratup avec HTML, CSS et Php

### Objectif et ressources
Pour ce projet, je suis en charge de développer un site vitrine pour la société Planty (marque de boissons énergisantes à base de plantes).  
On me demande de développer le site sur WordPress et d’utiliser de préférence Gutenberg pour la gestion des pages.

En ressource, on me donne :
    - la maquette Figma
    - un prototype sur Figma
    - un guide avec les spécifications techniques

### Recommandations additionnelles
    - Dans le header, il y doit y avoir un lien Admin qui pointe vers la gestion WordPress. Mais il ne doit être présent que si on est connecté. Il est donc conseillé d’utiliser un hook pour faire l’ajout de ce lien.
    - Le site doit s’afficher correctement sur toutes les tailles d’écran (à partie de 320px).
    - Les lignes écrites en HTML et CSS doivent passer au validateur du W3C.
    - Le projet devra être versionné avec Git et GitHub.
    - Les formulaires doivent être fonctionnels : un mail doit être envoyé à “planty.drinks@gmail.com”.
    - Toutes les données (textes et images) doivent être modifiable sans utilisation de code.

### Les choix retenus
    - Utilisation du thème ASTRA.
    - Mise en place du plugin "Spectra" pour ajouter des blocs avancé à Gutemberg. 
    - Mise en place du plugin "Fluent Forms" pour la gestion des 2 formulaires.
    - Mise en place du pluging "All-in One WP Migration" pour pouvoir faire une sauvegarde complète avec la base de données.
    - Création d'un Hook avec 'wp_nav_menu_header-menu_items' pour l'ajout du lien Admin dans le Header.
    - Création d'un Shortcodes pour créer une bordure infèrieure arrondie, avec une hauteur différente, sur certain block.



