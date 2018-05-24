//FUNKCJE------------------------------
function is_logged_in()    //Wyświetlanie nazwy uzytkownika
{   
    //wydarzenie do przycisku Opcje
    var options = document.getElementById("options_button");
    options.addEventListener("click", f_open_menu, false);  //Funkcja chowania menu

    //wydarzenie do przycisku Zarejestruj
    var sign_in = document.getElementById("sign_in");
    sign_in.addEventListener("click", f_sign_in, false);

    //wydarzenie do przycisku Zaloguj
    var log_in = document.getElementById("log_in");
    log_in.addEventListener("click", f_log_in, false);

    //wydarzenie do przycisku Notatki
    var show_notes = document.getElementById("show_notes");
    show_notes.addEventListener("click", f_open_index, false);

    //wydarzenie do przycisku Ustawienia
    var themes = document.getElementById("themes");
    themes.addEventListener("click", f_themes, false);
    
    //wydarzenie do przycisku Informacje
    var informations = document.getElementById("informations");
    informations.addEventListener("click", f_informations, false);

    //wczytywanie danych z pamieci
    var zalogowany = (window.localStorage.getItem("zalogowany"));
    var loginUzytkownika = (window.localStorage.getItem("loginUzytkownika"));

    if (zalogowany == "T")
    {
        document.getElementById("nick_top").innerHTML = loginUzytkownika; //Wypisywanie nazwy uzytkownika w naglowku
        document.getElementById("log_in").innerHTML = "Wyloguj"; //Zmiana przycisku Zaloguj na Wyloguj

        document.getElementById("log_in").addEventListener("click", function ()
        {
            window.localStorage.setItem("zalogowany", "N");
            window.localStorage.removeItem("tablica_notatek");
            window.localStorage.removeItem("loginUzytkownika");
            window.localStorage.removeItem("hasloUzytkownika");
        }, false);
    }
}
function f_sign_in() //Otwieranie strony zarejestruj
{
    window.location.href = 'sign_in.html';
}
function f_log_in() //Otwieranie strony zaloguj
{
    window.location.href = 'log_in.html';
}
function f_open_index() //Wyswietlanie strony glownej
{
    window.location.href = 'index.html';
}
function f_themes() //Otwieranie strony zarejestruj
{
    window.location.href = 'themes.html';
}
function f_informations() //Otwieranie strony informacje
{
    window.location.href = 'informations.html';
}
function f_open_menu() //Funkcja chowania menu
{   
    document.getElementById("menu_options").classList.toggle("show");

    window.onclick = function (event)
    {
        if (!event.target.matches('#options_button'))
        {   
            
            var menu_options = document.getElementsByClassName("menu_options");
            var i;
            for (i = 0; i < menu_options.length; i++)
            {
                var open_menu_options = menu_options[i];
                if (open_menu_options.classList.contains('show'))
                {
                    open_menu_options.classList.remove('show');
                }
            }
        }
    }
}
//-------------------------------------

