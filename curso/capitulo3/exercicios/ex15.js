function Validator()
{
	var email = prompt("Digite um E-Mail:");

	var arroba = email.split("@");

    //alert(arroba.length);

	var ponto = email.split(".");

    //alert(ponto.lenght);

 	arroba.length == 2 && ponto.length == 2 && arroba.length[0] > 0  && arroba.length[1] > 2 && ponto.length[0] > 0 && ponto.length[1] > 0 ?
	(
		alert("E-mail válido.")
    )
	:
	(
		alert("E-mail Inválido")
    )
};