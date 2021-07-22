
function Comparison()
{
    var dateIn = prompt("Insira uma data:");
    var tp = new Date( Date.now() - new Date(dateIn) );
    
    var days = tp.getDate() - 1;
    var months = tp.getMonth();
    var years = tp.getFullYear() - 1970;

    alert(years + " anos, " + months + " meses, " + days + " dias.");
}