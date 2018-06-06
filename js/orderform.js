/*jslint browser, devel, for, this*/
//Kalder scriptet når sitet er loadet og der trykkes på submit
window.addEventListener('load', function () {
    document.getElementById("order").onsubmit = Valider;
})

//Hele validerings-scriptet
function Valider() {
    var AntalFejl = 0;
    var FejlBesked1 = "";
    var FejlBesked2 = "";
    var FejlBesked3 = "";
    var FejlBesked4 = "";
    var FejlBesked5 = "";
    var FejlBesked6 = "";
    var FejlBesked7 = "";
    var FejlBesked8 = "";
    var FejlBesked9 = "";
    var FejlBesked11 = "";
    //Hvis InputNavn er lig med tomt, giv fejlbesked
    if (document.getElementById('InputNavn').value == "") {
        AntalFejl += 1;
        FejlBesked1 = "Skriv dit navn!";
    }
    //ellers tjek om der bliver brugt bogstaver
    else {
        var regexpbogstaver = /^[a-zA-Z ]+$/;
        if (!regexpbogstaver.test(document.getElementById('InputNavn').value)) {
            AntalFejl += 1;
            FejlBesked1 = "Navn må kun indeholde bogstaver og mellemrum!";
        }
    }
    //Hvis InputNavn er lig med tomt, giv fejlbesked
    if (document.getElementById('InputAdresse').value == "") {
        AntalFejl += 1;
        FejlBesked2 = "Skriv en adresse!";
    }
    //ellers tjek om der bliver brugt bogstaver
    else {
        var regexpbogstaver = /^[a-zA-Z ]+[0-9]{2,3}$/;
        if (!regexpbogstaver.test(document.getElementById('InputAdresse').value)) {
            AntalFejl += 1;
            FejlBesked2 = "Adresse skal indholde både vej og nummer!";
        }
    }
    if (document.getElementById('InputPostnummer').value == "") {
        AntalFejl += 1;
        FejlBesked3 = "Skriv dit Postnummer!";
    } else {
        var regexptal = /^[0-9]+$/;
        if (!regexptal.test(document.getElementById('InputPostnummer').value)) {
            AntalFejl += 1;
            FejlBesked3 += "Postnummer må kun indeholde tal!";
        }
    }
    if (document.getElementById('InputMail').value == "") {
        AntalFejl += 1;
        FejlBesked4 = "Skriv din mail!";
    } else {
        var regexpmail = /^[A-Za-zÆØÅæøå0-9_.]+[@]{1}[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!regexpmail.test(document.getElementById('InputMail').value)) {
            AntalFejl += 1;
            FejlBesked4 = "Mail er ikke gyldig!";
        }
    }
    if (document.getElementById('InputTelefon').value == "") {
        AntalFejl += 1;
        FejlBesked5 = "Skriv dit telefonnummer!";
    } else {
        var regexptal = /^[0-9]+$/;
        if (!regexptal.test(document.getElementById('InputTelefon').value)) {
            AntalFejl += 1;
            FejlBesked5 += "Telefonnummer må kun indeholde tal!";
        }
    }
    if (document.getElementById('InputKortnummer').value == "") {
        AntalFejl += 1;
        FejlBesked6 = "Skriv dit Kortnummer!";
    } else {
        var regexptal = /^[0-9]+$/;
        if (!regexptal.test(document.getElementById('InputKortnummer').value)) {
            AntalFejl += 1;
            FejlBesked6 += "Kortnummer må kun indeholde tal!";
        }
    }
    if (document.getElementById('InputMaaned').value == "") {
        AntalFejl += 1;
        FejlBesked7 = "Skriv måneden!";
    } else {
        var regexptal = /^[0-9]+$/;
        if (!regexptal.test(document.getElementById('InputMaaned').value)) {
            AntalFejl += 1;
            FejlBesked7 += "Skal være tal!";
        }
    }
    if (document.getElementById('InputAar').value == "") {
        AntalFejl += 1;
        FejlBesked8 = "Skriv året!";
    } else {
        var regexptal = /^[0-9]+$/;
        if (!regexptal.test(document.getElementById('InputAar').value)) {
            AntalFejl += 1;
            FejlBesked8 += "Skal være tal!";
        }
    }
    if (document.getElementById('InputCvc').value == "") {
        AntalFejl += 1;
        FejlBesked9 = "Skriv CVC!";
    } else {
        var regexptal = /^[0-9]+$/;
        if (!regexptal.test(document.getElementById('InputCvc').value)) {
            AntalFejl += 1;
            FejlBesked9 += "Skal være tal!";
        }
    }
    if (document.getElementById('InputBy').value == "") {
        AntalFejl += 1;
        FejlBesked11 = "Skriv en by!";
    }
    //ellers tjek om der bliver brugt bogstaver
    else {
        var regexpbogstaver = /^[a-zA-Z ]+$/;
        if (!regexpbogstaver.test(document.getElementById('InputBy').value)) {
            AntalFejl += 1;
            FejlBesked11 = "Byen må kun indeholde bogstaver og mellemrum!";
        }
    }
    //hvis der ingen fejl er gennemføres udfyldelsen af formen
    if (AntalFejl == 0) {
        alert('Tak for din ordre, vi sender den så hurtigt vi kan');
        return true;
    }
    //Ellers gives fejlbeskeder i html'en (p-tagget)
    else {
        document.getElementById('FejlBesked1').innerHTML = FejlBesked1;
        document.getElementById('FejlBesked2').innerHTML = FejlBesked2;
        document.getElementById('FejlBesked3').innerHTML = FejlBesked3;
        document.getElementById('FejlBesked4').innerHTML = FejlBesked4;
        document.getElementById('FejlBesked5').innerHTML = FejlBesked5;
        document.getElementById('FejlBesked6').innerHTML = FejlBesked6;
        document.getElementById('FejlBesked7').innerHTML = FejlBesked7;
        document.getElementById('FejlBesked8').innerHTML = FejlBesked8;
        document.getElementById('FejlBesked9').innerHTML = FejlBesked9;
        document.getElementById('FejlBesked11').innerHTML = FejlBesked11;
        return false;
    }
}