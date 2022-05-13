// Exercice 3, recherche prénom
var tab = ["Audrey", "Aurélien", "Flavier", "Jérémy", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

var nom = prompt("Cherchez un prénom pour voir s'il est présent dans le tableau.");
const index = tab.indexOf(nom);

if(nom === tab[tab.indexOf(nom)])
{
var removed = tab.splice(index,1);
tab.push("");
}
else
{
    alert("Le nom recherché n'existe pas dans le tableau.");
}