//FUNKCJE------------------------------
function change_theme()    //Wyświetlanie nazwy uzytkownika
{   
    //Ustawienie motywu
    var color = localStorage.getItem("theme");

    if (color == "blue")
    {
        var top = document.getElementsByClassName("top");
        var i;
        for (i = 0; i < top.length; i++) 
        {
            top[i].style.backgroundColor = 'rgb(76, 91, 175)';
        }
        var green_button = document.getElementsByClassName("green_button");
        var j;
        for (j = 0; j < green_button.length; j++) 
        {
            green_button[j].style.backgroundColor = 'rgb(76, 91, 175)';
        }
        document.getElementsByTagName("body")[0].style.backgroundColor= '#f6f6fc';
    }
    else if (color == "red")
    {
        var top = document.getElementsByClassName("top");
        var i;
        for (i = 0; i < top.length; i++) 
        {
            top[i].style.backgroundColor = "rgb(175, 76, 76)";
        }
        var green_button = document.getElementsByClassName("green_button");
        var j;
        for (j = 0; j < green_button.length; j++) 
        {
            green_button[j].style.backgroundColor = "rgb(175, 76, 76)";
        }
        document.getElementsByTagName("body")[0].style.backgroundColor= '#fcf6f6';
    }
    else if (color == "pink")
    {
        var top = document.getElementsByClassName("top");
        var i;
        for (i = 0; i < top.length; i++) 
        {
            top[i].style.backgroundColor = "rgb(179, 87, 179)";
        }
        var green_button = document.getElementsByClassName("green_button");
        var j;
        for (j = 0; j < green_button.length; j++) 
        {
            green_button[j].style.backgroundColor = "rgb(179, 87, 179)";
        }
        document.getElementsByTagName("body")[0].style.backgroundColor= '#fcf6fb';
    }
    else if (color == "black")
    {
        var top = document.getElementsByClassName("top");
        var i;
        for (i = 0; i < top.length; i++) 
        {
            top[i].style.backgroundColor = "rgb(34, 34, 34)";
        }
        var green_button = document.getElementsByClassName("green_button");
        var j;
        for (j = 0; j < green_button.length; j++) 
        {
            green_button[j].style.backgroundColor = "rgb(34, 34, 34)";
        }
        document.getElementsByTagName("body")[0].style.backgroundColor= '#ffffff';
    }
}