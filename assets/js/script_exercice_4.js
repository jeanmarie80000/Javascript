// Exercice 4, Total d'une commande
var PU = Number(prompt("Choisissez la valeur de votre produit."));
var QTECOM = Number(prompt("Choisissez la quantité d'élément de votre produit"));
var TOT = PU*QTECOM;

if(TOT>=100 && TOT<=200)
{
    var REM = TOT*0.05;
    TOT = TOT-REM;
}
else if(TOT>200)
{
    var REM = TOT*0.1;
    TOT = TOT-REM;
}
else
{
    var REM = 0;
    TOT = TOT-REM;
}

if(TOT < 500)
{
    var PORT = TOT*0.02;

        if (PORT > 6)
            {
                TOT = TOT+PORT;
            }
            else
            {
                TOT = TOT+6;
            }

}
else
{
    var PORT = 0;
    TOT = TOT+PORT;
}

console.log("Le total du coût du ou des produit(s) est de "+TOT.toFixed(2));

// Note : le total de l'opération avec TOT = 501 est de 459.92 car le total original avant l'arrondit est de 459.917999... 