//Kalder scriptet når sitet er loadet
window.addEventListener( 'load', function()
{
	Menu();
});
//Laver en løkke der finder ud af om der bliver trykket på infoboksen
function Menu()
{
    for ( var i = 0; i < document.getElementsByClassName('menu').length; i++ )
    {
        document.getElementsByClassName('menu')[i].onclick = Expand;
    }
}
//onclick-funktionen, Hvis boksen ikke er fremme skal den frem, ellers skal den skjules 
function Expand()
{
    if( this.getElementsByTagName('ul')[0].style.display != "block" )
    {
        this.getElementsByTagName('ul')[0].style.display = "block";
    }
    else
    {
        this.getElementsByTagName('ul')[0].style.display = "none";
    }
}