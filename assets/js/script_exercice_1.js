// Exercice 1 - Calcul des âges

var tableau_20 = [];
var tableau_40 =[];
var tableau_99 = [];
var tableau_100 = [];

while(true)
{
    var age = Number(prompt("Entrez l'âge de la personne"));

    if(age > 100)
    {
        alert("Pour compter les âges utiliser la fonction 'comptage' .")
        tableau_100.push(age);
        break;
    }
    else if(age > 40 && age < 100)
    {
        tableau_99.push(age)
    }
    else if(age >= 20 && age <= 40)
    {
        tableau_40.push(age);
    }
    else
    {
        tableau_20.push(age);
    }
}

function comptage()
{
    console.log("Il y a "+tableau_20.length+" personne(s) d'un âge inférieur à 20 ans.")
    console.log("Il y a "+tableau_40.length+" personne(s) d'un âge situé entre 20 et 40 ans.")
    console.log("Il y a "+tableau_99.length+" personne(s) d'un âge situé entre 40 et 99 ans.")
    console.log("Il y a "+tableau_100.length+" personne(s) d'un âge supérieur à 100 ans.")
}