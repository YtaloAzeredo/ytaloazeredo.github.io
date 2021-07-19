
function Comparison()
{
	var comp = prompt("Digite uma palavra:");

	var pmoc = comp.split('').reverse().join('');

    if (comp == pmoc)
    alert("A palavra é um palíndromo.");
    else
    alert("A palavra NÃO é um palíndromo.");

}
