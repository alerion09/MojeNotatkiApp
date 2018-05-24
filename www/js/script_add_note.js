document.addEventListener("DOMContentLoaded", appStart)

//FUNKCJA STARTOWA ................................................................................
function appStart()
{   
    change_theme();
    document.getElementById("add_button").addEventListener("click", f_create_note, false); //wydarzenie do przycisku Dodaj
    document.getElementById("ok_button").addEventListener("click", f_create_note, false);    //wydarzenie do przycisku Ok

    //wczytywanie danych z pamieci
    var zalogowany = (window.localStorage.getItem("zalogowany"));
    var loginUzytkownika = (window.localStorage.getItem("loginUzytkownika"));

}
//................................................................................................

//FUNKCJE-----------------------
function f_create_note()  //TWORZENIE NOTATKI
{  
    var text = document.getElementById("text");
    var tresc = text.value;
    var existTablica_notatek_local = JSON.parse(window.localStorage.getItem("tablica_notatek_local"));
    var loginUzytkownika = window.localStorage.getItem("loginUzytkownika");
    var hasloUzytkownika = window.localStorage.getItem("hasloUzytkownika");
    var zalogowany = (window.localStorage.getItem("zalogowany"));
    
    if (zalogowany == 'T')
    {
        $.ajax({
            type: "POST",
            url: "https://alerion09.nazwa.pl/mojeNotatki/dodanieNotatki.php",
            data:
            {
                loginp: loginUzytkownika,
                haslop: hasloUzytkownika,
                notatkap: tresc,
            },
            success: function (data) 
            {   
                if (data.indexOf("blad") !== -1)
                {
                    alert("Brak połączenia z internetem.");
                }
                else
                {
                    open_index();
                }                   
            },
            complete: function () 
            {
                open_index();
            },
            error: function () 
            {
                alert("Brak połączenia z internetem.");
            }
        });
    }else
    {
        if (existTablica_notatek_local == null)
        {
            var tablica_notatek_local = [];
            var notatka = tresc;
            tablica_notatek_local.push(notatka);
            
            var stringTablica_notatek_local = JSON.stringify(tablica_notatek_local);
            window.localStorage.setItem("tablica_notatek_local", stringTablica_notatek_local);
            open_index();       
        }else
        {    
            var notatka = tresc;
            existTablica_notatek_local.push(notatka);
            var stringTablica_notatek_local = JSON.stringify(existTablica_notatek_local);
            window.localStorage.setItem("tablica_notatek_local", stringTablica_notatek_local);
            open_index();
        }
    }           
}

function open_index()     //Otwieranie glownej strony
{
    window.location.href = 'index.html';    
}
//-------------------------------