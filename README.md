# Unboared game (React Demo)
![node](https://img.shields.io/badge/node-16.16.0-brightgreen)
![npm](https://img.shields.io/badge/npm-8.16.0-blue)
[![unboared](https://img.shields.io/badge/unboared-0.1.1-%23FF2453)](https://bit.cloud/unboared/native/lib?version=0.1.1)

## Ce que contient ce template

Une démo de jeu simple utilisant la technologie Unboared. 

Plus précisement:
- la déclaration d'un jeu <span style="color:#FF2453">Unboared</span> avec deux sous applications:
  - l'application côté ***screen***
  - l'application côté ***gamepad***
- l'utilisation classique de la *lib unboared* (communication entre appareils, données des joueurs)
- la déclaration et la gestion des scènes
- l'utilisation d'états du jeu partagés

## Comment l'utiliser
- Cliquer sur le bouton : `Use this template` ci-dessus
- Remplir les informations requises à la création du nouveau jeu (nom, description, etc)
- En local, exécuter les commandes suivantes en remplaçant le nom du jeu:
```bash
git clone git@github.com:<username>/<game-name>.git
cd <game-name>
npm install --legacy-peer-deps
expo start
``` 
- Appuyer sur la touche `W` pour lancer l'application dans le mode `web`
- Copier l'URL du jeu web et l'utiliser comme entrée du [game-runner](https://github.com/unboared/game-runner)
