// Exercice 5, vérification du formulaire

var click_verif = document.getElementById('bouton_verif');
click_verif.addEventListener("click", function verification_form()
{
    var filtre_lettre = new RegExp(/^[a-zA-Z]+$/);
    var filtre_nombre = new RegExp(/^[0-9]+$/);
    var filtre_codepostal = RegExp(/^[0-9]{5}$/);
    var filtre_date = RegExp(/^[0-9]{4}[\.\/-][0-9]{2}[\.\/-][0-9]{2}$/);
    var filtre_mail = new RegExp(/(\w+[\.-]?\w+)(\@)(.+\w{2,3})+$/);
    var confirmation = 0;
    
    // Nom
    var nom = document.getElementById('nom').value;

    if(filtre_lettre.test(nom))
    {
        document.getElementById('div_erreur_nom').innerHTML = '';
        confirmation++;
    }
    else
    {
        if(filtre_nombre.test(nom))
        {
            document.getElementById('div_erreur_nom').innerHTML = 'Chiffres non acceptés !';
        }
        else
        {
            document.getElementById('div_erreur_nom').innerHTML = 'Cet emplacement est obligatoire !';
        }
    }


    // Prenom
    var prenom = document.getElementById('prenom').value;

    if(filtre_lettre.test(prenom))
    {
        document.getElementById('div_erreur_prenom').innerHTML = '';
        confirmation++;
    }
    else
    {
        if(filtre_nombre.test(prenom))
        {
            document.getElementById('div_erreur_prenom').innerHTML = 'Chiffres non acceptés !';
        }
        else
        {
            document.getElementById('div_erreur_prenom').innerHTML = 'Cet emplacement est obligatoire !';
        }
    }

    // Date
    var date_check = document.getElementById('age').value;

    if(filtre_date.test(date_check))
    {
        document.getElementById('div_erreur_date').innerHTML = ''; 
        confirmation++; 
    }
    else
    { 
        document.getElementById('div_erreur_date').innerHTML = 'Cet emplacement est obligatoire !';
    }

    // Code Postal
    var code_postal = document.getElementById('code_postal').value;

    if(filtre_codepostal.test(code_postal))
    {
        document.getElementById('div_erreur_code_postal').innerHTML = '';
        confirmation++;
    }
    else
    {
        if(filtre_lettre.test(code_postal))
        {
            document.getElementById('div_erreur_code_postal').innerHTML = 'Lettres non acceptées !';
        }
        else
        {
            document.getElementById('div_erreur_code_postal').innerHTML = 'Erreur !';
        }
    }


    // Mail
    var mail = document.getElementById('mail').value;
    console.log(mail);

    if(filtre_mail.test(mail))
    {
        document.getElementById('div_erreur_mail').innerHTML = '';
        confirmation++;
    }
    else
    {
        document.getElementById('div_erreur_mail').innerHTML = 'Erreur !';
    }

    // Question
    var question_user = document.getElementById('question').value;

    if(filtre_lettre.test(question_user))
    {
        document.getElementById('div_erreur_question').innerHTML = '';
        confirmation++;
    }
    else
    {
        document.getElementById('div_erreur_question').innerHTML = 'Erreur !';
    }

    // Bouton de confirmation de traitement informatique
    var confirmation_checkbox = document.getElementById('bouton_confirmation');

    if(confirmation_checkbox.checked)
    {
        document.getElementById('div_erreur_confirmation').innerHTML = ''
        confirmation++;
    }
    else
    {
        document.getElementById('div_erreur_confirmation').innerHTML = 'Veuillez cocher.'
    }


    if(confirmation == 7)
    { 
        document.getElementById('formulaire_complet').submit();
    }
    
    console.log(confirmation);

});

