document.addEventListener("DOMContentLoaded", appStart)
var id = (window.localStorage.getItem("id"));                                    //pobieranie id notatki z pamieci
var loginUzytkownika = (window.localStorage.getItem("loginUzytkownika"));        //pobieranie loginu z pamieci
var hasloUzytkownika = (window.localStorage.getItem("hasloUzytkownika"));        //pobieranie hasla z pamieci
var zalogowany = (window.localStorage.getItem("zalogowany"));                    //pobieranie T lub N z pamieci

 
//FUNKCJA STARTOWA ................................................................................
function appStart()
{   
    change_theme();
    if (zalogowany == 'T')
    {
        var tablica_notatek = JSON.parse(window.localStorage.getItem("tablica_notatek")); //pobieranie tablicy z pamieci
        document.getElementById("text").innerHTML = tablica_notatek[id];
    }else
    {
        var tablica_notatek_local = JSON.parse(window.localStorage.getItem("tablica_notatek_local")); //pobieranie tablicy z pamieci
        document.getElementById("text").innerHTML = tablica_notatek_local[id];
    }   
    

    var ok_button = document.getElementById("ok_button");     //uchwyt do przycisku Ok
    var delete_button = document.getElementById("delete_button"); //uchwyt do przycisku Usun
    var add_button = document.getElementById("add_button"); //uchwyt do przycisku Dodaj

    ok_button.addEventListener("click", f_change, false);
    add_button.addEventListener("click", f_change, false);
    delete_button.addEventListener("click", f_delete, false);
}
//................................................................................................

//FUNKCJE-----------------------
function f_change()
{
    var text = document.getElementById("text");
    var zawartoscTekstu = text.value;   
    
    if (zalogowany == 'T')
    {   
        var tablica_notatek = JSON.parse(window.localStorage.getItem("tablica_notatek")); //pobieranie tablicy z pamieci
        var notatka = tablica_notatek[id];
        var nowaNotatka = zawartoscTekstu;
        
        $.ajax({
            type: "POST",
            url: "https://alerion09.nazwa.pl/mojeNotatki/edycjaNotatki.php",
            data:
            {
                loginp: loginUzytkownika,
                haslop: hasloUzytkownika,
                nowanotatkap: nowaNotatka,
                notatkap: notatka
            },
            success: function (data)
            {
                open_index();
            },
            complete: function ()
            {
                open_index();
            },
            error: function (jqXHR, errorText, errorThrown)
            {
                alert("Brak połączenia z internetem.");              
            }
        });
    } else
    {   
        var tablica_notatek_local = JSON.parse(window.localStorage.getItem("tablica_notatek_local")); //pobieranie tablicy z pamieci
        tablica_notatek_local[id] = zawartoscTekstu;
        var stringTablica_notatek_local = JSON.stringify(tablica_notatek_local);
        window.localStorage.setItem("tablica_notatek_local",stringTablica_notatek_local);
        open_index();
    }
}
function f_delete()
{ 
    if (zalogowany == 'T')
    {
        var tablica_notatek = JSON.parse(window.localStorage.getItem("tablica_notatek")); //pobieranie tablicy z pamieci
        var notatka = tablica_notatek[id];
        $.ajax({
            type: "POST",
            url: "https://alerion09.nazwa.pl/mojeNotatki/usuniecieNotatki.php",
            data:
            {
                loginp: loginUzytkownika,
                haslop: hasloUzytkownika,
                notatkap: notatka
            },
            success: function (data)
            {
                open_index();
            },
            complete: function ()
            {
                open_index();
            },
            error: function (jqXHR, errorText, errorThrown)
            {    
                alert("Brak połączenia z internetem.");          
            }
        });
    } else
    {   
        var tablica_notatek_local = JSON.parse(window.localStorage.getItem("tablica_notatek_local")); //pobieranie tablicy z pamieci
        tablica_notatek_local.splice(id, 1);   
        stringTablica_notatek_local = JSON.stringify(tablica_notatek_local);
        window.localStorage.setItem("tablica_notatek_local", stringTablica_notatek_local);
        open_index();
    }
}
function open_index()
    {
        window.location.href = 'index.html';
    }
//-------------------------------