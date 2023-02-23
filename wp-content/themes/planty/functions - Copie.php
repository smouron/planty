<?php
/**
** activation theme
**/
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
//  Chagerment du style du theme parent
 wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
 
//  Chagerment du style personnalisé pour le theme
 wp_enqueue_style( 'theme-style', get_stylesheet_directory_uri() . '/assets/css/theme.css' );

}

/* HEADER */
add_filter( 'wp_nav_menu_items', 'prefix_add_menu', 10, 2 );
function prefix_add_menu( $items, $args ) {    
    // Récupération des items des menus dans un "stdClass Object" $args
    //
    // Ajout de ces items dans le menu indiqué 
    if (is_user_logged_in() && $args->theme_location === 'secondary_menu') {
        $items .= '
        <ul id="%1$s" class="menu-perso">
            <li class="menu-item menu-item-perso"><a href="'. get_permalink() . '"contact/>Nous rencontrer</a></li>
            <li class="menu-item menu-item-perso"><a href="'. get_permalink() . '"wp-admin>Admin</a></li>
            <li class="menu-item menu-item-perso item-btn"><a href="'. get_permalink() . 'commander/">Commander</a></li>        
        </ul>
        ';
    }
    elseif (!is_user_logged_in() && $args->theme_location === 'secondary_menu') {$items .= '
        <ul id="%1$s" class="menu-perso">
            <li class="menu-item menu-item-perso><a href="'. get_permalink() . 'contact/">Nous rencontrer</a></li>
            <li class="menu-item menu-item-perso item-btn><a href="'. get_permalink() . 'commander/">Commander</a></li>        
        </ul>
        ';
    }

    
    return $items;
}

/**
 * Ajout du lien Admin dans le header quand l'opérateur est connecté
 */

 // Récupération de la liste des items du menu actuel (nom donné au mune dans WP : "header-menu")
add_filter( 'wp_nav_menu_header-menu_items', 'prefix_add_menu_item', 10, 2 );
function prefix_add_menu_item ( $items, $args ) {
        // Contrôle si l'utilisateur est connecté
        if (is_user_logged_in()) {
            // si l'opérateur est connecté, on initialise un tableau qui stockera la liste des items 
            $items_array = array();
            // Création d'une boucle pour récupérer la position actuel de chaque item 
            // avec '<li' comme point de repère dans la liste de items
            // l'offset de 10, permet d'être sûr de ne pas prendre en compte le '<li' où on démarre
            while ( false !== ( $item_pos = strpos ( $items, '<li', 10 ) ) ) {
                // recupère uniquement la partie qui va de <li> jusqu'au <li> suivant
                // et on le stock dans le tableau
                $items_array[] = substr($items, 0, $item_pos);
                // puis on retire cette partie de la liste des items avant de recommencer la boucle
                $items = substr($items, $item_pos);
            }
            // On ajoute au tableau le dernier élément de la liste
            $items_array[] = $items;
            // On insère le lien 'Admin' à la position indiquée (ici 1) dans le tableau.
            array_splice($items_array, 1, 0, '<li class="menu-item menu-item-type-post_type menu-item-object-page"><a class="menu-link" href="'. get_permalink() . 'wp-admin">Admin</a></li>'); // insert custom item after 9th item one
            // On retransforme le tableau en liste d'items
            $items = implode('', $items_array);
        }

        // Si l'utilisateur n'est connecté on ne fait rien =>le menu affiché, sera celui configuré dans WP.
       
       return $items;
    
}