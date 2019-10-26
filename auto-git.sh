#!/bin/bash

echo Quel est le lien de git?
read lien_git

echo Il s\'agit d\'un site sous node? o/n
read ask_node

if [ $ask_node = "o" ]
then
	echo ""
	echo ""
	echo 'Je supprime le dossier node_modules'
	echo ""
	rm -rv node_modules
	rm -v README.md
fi

echo ""
echo ""
echo 'Initialisation de git'
echo ""
git init

echo ""
echo ""
echo 'Je le lie avec le site git'
echo ""
git remote add origin $lien_git

echo ""
echo ""
echo "J'ajoute les fichiers au commit"
echo ""
git add .

echo ""
echo ""
echo "J'enlève le script qui n'a rien à faire dans le git"
echo ""
git rm auto-git.sh

echo ""
echo ""
echo 'Je fais mon commit'
echo ""
git commit -m "Cours Udemy terminé"

echo ""
echo ""
echo 'Je récupère les anciens commit'
echo ""
git pull --rebase origin master

echo ""
echo ""
echo 'J ajoute un tag'
echo ""
git tag V1.0

echo ""
echo ""
echo 'J envoie le tout au serveur'
echo ""
git push -u origin master
git push -u --tags