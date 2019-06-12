# Test technique Angular

## Description

Le but de ce test technique est de créer une application de gestion des pokémons. Je vais utiliser l'API publique : [https://pokeapi.co/](https://pokeapi.co/).

L'application sera composé de plusieurs éléments :

- Une page d'accueil qui listera les pokémons des 3 premieres générations. L'utilisateur devra pouvoir filtrer les pokémons sur différentes propriétés (type de pokemon, nom ou n° contient, génération, légendaire) ainsi que de les ordonner (alphapetique, n°). La liste devra être paginée également (pagination direct).
- Une popup de détails des pokémons. L'utilisateur devra pouvoir cliquer sur un élément de la liste qui fera apparaitre une popup où les détails du pokémon seront affichés.
- L'utilisateur devra pouvoir enregistrer des pokemon dans une liste de favoris
- Une page de composition d'équipes / gestion des favoris. Une équipe est composée de 6 slots. L'utilisateur pourra choisir les pokémons qu'il veut ajouter dans son équipe. Il pourra enlever un pokemon de son équipe pour le remplacer par un autre. Les pokémons devront être affichés sous forme de grille avec les sprites et chaque élement de la grille sera cliquable pour sélectionner le pokemon.

J'utiliserais une librairie graphique ...

## Rendu

Un repository [Github](https://github.com/) devra être créé contenant le code de la solution technique. Le [README.md](http://readme.md) devra lister les fonctionnalités et bonus éventuels réalisés.

Chaque fonctionnalité devra faire l'objet d'un commit unique et dont le nom respecte la norme [Conventional commit](https://www.conventionalcommits.org/en/v1.0.0-beta.4/). Pour cela, n'hésitez pas à utiliser la commande `git rebase` en local pour réécrire votre historique.

L'application va également être déployée sur Github pages a l'adresse [petitruisseau.github.io](petitruisseau.github.io).

## Points de notation

- Le respect des fonctionnalités demandées
- L'appel à l'API doit être réalisée depuis un service servant de couche d'abstraction entre l'appli et la solution de requêtage choisie (HttpClient, ...)
- La qualité du code
- Les éventuels points supplémentaires proposés (points bonus ou autre)

## Points Bonus

- Utilisation de [NgRx](https://ngrx.io/)
- Tests unitaires (composants, services, et effects si NgRx)
- Animations
- Drag&Drop pour la sélection des pokémons dans son équipe

# Pokedixeed

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
