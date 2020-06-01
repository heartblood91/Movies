# React Movies

Application permettant d'élaborer une affiche de 5 films de manière dynamique (soit selon la popularité, soit selon un titre). Dévéloppé lors d'une formation sur React.

# Préambule

Ce site a été entièrement développé lors de la formation <em> React JS + Redux pour débutants </em> créé par Robin Lebhar <a href="https://www.udemy.com/course/react-redux-tutoriel-pour-debutants-en-francais/" > Liens vers sa formation sur Udemy</a>.

# Description

Cette application affiche 1 film et sa bande annonce + 5 autres films. Les films sont choisis :

- Selon la popularité actuelle, lors de l'ouverture de l'application
- Selon le titre choisie (vous aurez accès à une liste de 5 films similaires)

Il dispose d'une barre de recherche à la google, lors de la saisie du titre, pas besoin de valider, la recherche se lance automatiquement une seconde après la dernière touche relachée sur le clavier.

**Toute cette application s'appuie sur l'API de themoviedb**

Langages et framework utilisés:

- CSS
- HTML
- React

# Installation

## Pré requis

Vous devez disposer d'une clé d'API de themoviedb pour que l'application fonctionne. Vous aurez besoin d'un compte et de générer une clé d'API via votre espace. Suivez les informations disponibles sur leur site : https://developers.themoviedb.org/3/getting-started/introduction

Dès la clé générée, renseignez-là dans le fichier ./credentials.js

## Procédure

```shell
$ git clone "https://github.com/heartblood91/ReactMovies.git" && cd ReactMovies\
$ npm i
$ npm run start
```

## Exemple

Vous pouvez tester une copie du site <a href="http://movies.hidemyhome.ovh/"> ICI </a>
