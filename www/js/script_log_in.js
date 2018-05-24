document.addEventListener("DOMContentLoaded", appStart)

//FUNKCJA STARTOWA ................................................................................
function appStart()
{
    is_logged_in();
    change_theme();
    
    var log_in_g_button = document.getElementById("log_in_g_button");
    log_in_g_button.addEventListener("click", f_log_in, false);

    var ok_button = document.getElementById("ok_button");
    ok_button.addEventListener("click", f_log_in, false);


    var login = document.getElementById("login");
    var haslo = document.getElementById("haslo");

    //FUNKCJE------------------------------
    function f_log_in() //Funkcja przycisku Zaloguj
    {   
        //Warunki logowania
        
        if (login.value == "" || haslo.value == "")
        {
            alert("Pole nie może być puste!");
        }
        else if (login.value.length <=3 )
        {
            alert("Login musi zawierać więcej niż 3 znaki.");
        }
        else if ( haslo.value.length <=7 )
        {
            alert("Hasło musi zawierać co najmniej 8 znaków.");
        }
        else
            ////////////////////
        {
            $.ajax({
                type: "POST",
                url: "https://alerion09.nazwa.pl/mojeNotatki/logowanie.php",
                data:
                {
                    loginp: login.value,
                    haslop: haslo.value,                
                },
                success: function (data)
                    {   
                        var otrzymaneNotatki = (data);

                        window.localStorage.setItem("tablica_notatek", otrzymaneNotatki);
                        
                        if (data.indexOf("zledane") !== -1)
                        {
                            alert("Podano błedne dane!");
                        }
                        else if (data.indexOf("error") !== -1)
                        {
                            alert("Brak połączenia z internetem.");
                        }
                        else 
                        {
                            alert("Zalogowano pomyślnie.");

                            var zalogowanyy = "T";
                                                
                            window.localStorage.setItem("zalogowany", zalogowanyy);
                            window.localStorage.setItem("loginUzytkownika", login.value);
                            window.localStorage.setItem("hasloUzytkownika", haslo.value);
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
        } 
    }
    function open_index()     //Otwieranie glownej strony
    {
        window.location.href = 'index.html';    
    }
    //-------------------------------------
    }//................................................................................................



