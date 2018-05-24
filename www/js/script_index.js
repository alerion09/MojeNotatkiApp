document.addEventListener("DOMContentLoaded", appStart)

//FUNKCJA STARTOWA ................................................................................
function appStart()
{
    is_logged_in();
    change_theme();
    var dodaj = document.getElementById("add_button");           //uchwyt do przycisku Dodaj
    dodaj.addEventListener("click", f_open_add_note, false);     //wydarzenie do przycisku Dodaj

    //wczytywanie informacji z pamieci 
    var zalogowany = (window.localStorage.getItem("zalogowany"));
    var loginUzytkownika = (window.localStorage.getItem("loginUzytkownika"));        //pobieranie loginu z pamieci
    var hasloUzytkownika = (window.localStorage.getItem("hasloUzytkownika"));        //pobieranie hasla z pamieci
    
    if (zalogowany == 'T')
    {  
        $.ajax({
            type: "POST",
            url: "https://alerion09.nazwa.pl/mojeNotatki/logowanie.php",
            data:
            {
                loginp: loginUzytkownika,
                haslop: hasloUzytkownika               
            },
            success: function (data)
                {   
                    var otrzymaneNotatki = (data);
                    window.localStorage.setItem("tablica_notatek", otrzymaneNotatki);
                    var tablica_notatek = JSON.parse(window.localStorage.getItem("tablica_notatek"));
                    //wyswietanie brak notatek
                    if (tablica_notatek == null || tablica_notatek == 0)
                    {
                        document.getElementById("container_notes").innerHTML = "<div style='text-align:center;color:#717171;; margin-top:50%;'>Brak notatek</div>";
                    }
                    //PETLA TWORZACA NOTATKI---------------
                    for ( var i = 0; i < tablica_notatek.length; i++)
                    {
                        //Lamanie wierszy
                        if (tablica_notatek[i].indexOf("\n") != -1)
                        {
                            tablica_notatek[i]  = tablica_notatek[i].replace(/\n/g, "<br />");
                        }
                        //tworzenie notatki
                        document.getElementById("container_notes").innerHTML += "<button onclick='f_edit_note(" + i + ")' id='" + i + "' class='added_note' ><div>" + tablica_notatek[i] + "</div></button>";
                    }       
                    if (data.indexOf("error") !== -1)
                    {
                        alert("Brak połączenia z internetem.");
                        document.getElementById("container_notes").innerHTML = "<div style='text-align:center;color:#717171;; margin-top:50%;'>Brak notatek</div>";
                    }
                },
            complete: function ()
            {
            },
            error: function ()
            {
                alert("Brak połączenia z internetem.");
                document.getElementById("container_notes").innerHTML = "<div style='text-align:center;color:#717171;; margin-top:50%;'>Brak połączenia z internetem.</div>";
            }
        });
        
    }else
    {
        var tablica_notatek_local = JSON.parse(window.localStorage.getItem("tablica_notatek_local"));
        if (tablica_notatek_local == null || tablica_notatek_local == 0)
        {
            document.getElementById("container_notes").innerHTML = "<div style='text-align:center;color:#717171;; margin-top:50%;'>Brak notatek</div>";
        }
        for ( var i = 0; i < tablica_notatek_local.length; i++)
        {
            //Lamanie wierszy
            if (tablica_notatek_local[i].indexOf("\n") != -1)
            {
                tablica_notatek_local[i]  = tablica_notatek_local[i].replace(/\n/g, "<br />");
            }
            //tworzenie notatki
            document.getElementById("container_notes").innerHTML += "<button onclick='f_edit_note(" + i + ")' id='" + i + "' class='added_note' ><div>" + tablica_notatek_local[i] + "</div></button>";
        }
    }
}//................................................................................................
//FUNKCJE------------------------------
function f_open_add_note () //Otwieranie strony z dodawaniem notatki
{
    window.location.href = 'add_note.html';
}
function f_edit_note(a) //Tworzenie layoutu edycji notatki z funkcja jej zapisywania i usuwania
{
    var id = a;

    window.localStorage.setItem("id", id);

    window.location.href = 'edit_note.html';
    
}
function f_open_index() //Wyswietlanie strony glownej
{
    window.location.href = 'index.html';
}
//-------------------------------------

