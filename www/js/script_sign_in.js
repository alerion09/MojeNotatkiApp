document.addEventListener("DOMContentLoaded", appStart)

//FUNKCJA STARTOWA ................................................................................
function appStart()
{
    
    is_logged_in();
    change_theme();

    var create_account = document.getElementById("create_account");
    create_account.addEventListener("click", f_create_account, false);

    var ok_button = document.getElementById("ok_button");
    ok_button.addEventListener("click", f_create_account, false);

    var login = document.getElementById("login");
    var haslo1 = document.getElementById("haslo1");
    var haslo2 = document.getElementById("haslo2");
   
}//................................................................................................

//FUNKCJE------------------------------
function f_create_account() //Funkcja przycisku Utworz Konto
{
    //Warunki rejestracji
    if (haslo1.value != haslo2.value)
    {
        alert("Podane hasła różnią się!");
    }
    else if (login.value == "" || haslo1.value == "" || haslo2.value == "")
    {
        alert("Pole nie może być puste!");
    }
    else if (login.value.length <=3 )
    {
        alert("Login musi zawierać więcej niż 3 znaki.");
    }
    else if ( haslo1.value.length <=7 )
    {
        alert("Hasło musi zawierać co najmniej 8 znaków.");
    } 
    else
    ////////////////////
    {
        $.ajax({
            type: "POST",
            url: "https://alerion09.nazwa.pl/mojeNotatki/rejestracja.php",
            data:
            {
            loginp: login.value,
            haslo1p: haslo1.value,
            haslo2p: haslo2.value,
            },
            success: function (data)
            {
            if (data.indexOf("zarejestrowano")!==-1) 
            {
                alert("Zarejestrowano pomyślnie.");
            }
            if (data.indexOf("istniejelogin") !== -1)
            {
                alert("Istnieje już konto z takim loginem.");
            }
        },
        complete: function() 
        {
        },
        error: function ()
        {
            alert("Brak połączenia z internetem.");
        }
        });
        login.value = "";
        haslo1.value = "";
        haslo2.value = "";
    }
}
//-------------------------------------

