document.addEventListener("DOMContentLoaded", appStart)



//FUNKCJA STARTOWA ................................................................................
function appStart()
{

    is_logged_in();
    change_theme();
    var green_button = document.getElementById("theme_green");
    green_button.addEventListener("click", set_green_theme,false);
    var blue_button = document.getElementById("theme_blue");
    blue_button.addEventListener("click", set_blue_theme,false);
    var red_button = document.getElementById("theme_red");
    red_button.addEventListener("click", set_red_theme,false);
    var pink_button = document.getElementById("theme_pink");
    pink_button.addEventListener("click", set_pink_theme,false);
    var black_button = document.getElementById("theme_black");
    black_button.addEventListener("click", set_black_theme,false);
}//................................................................................................

function set_green_theme()
{
    localStorage.removeItem("theme");
    open_themes();
}
function set_blue_theme()
{
    localStorage.setItem("theme","blue"); 
    open_themes();
}
function set_red_theme()
{
    localStorage.setItem("theme","red"); 
    open_themes();
}
function set_pink_theme()
{
    localStorage.setItem("theme","pink");
    open_themes();
}
function set_black_theme()
{
    localStorage.setItem("theme","black");
    open_themes();
}
function open_themes()
{
    window.location.href = 'themes.html';  
}