
    function verDias()
	{
		var dataEntrada = new Date(document.getElementById("data_entrada").value );
        
		var dataSaida = new Date(document.getElementById("data_saida").value );
        var dataResultado = dataSaida.getTime() - dataEntrada.getTime();
        
        var d = Math.ceil(dataResultado / (1000 * 3600 * 24));
        
		return d;
	}

	function calcularValor()
	{
        
		var quartos = [0, 139, 220, 340];
		var dias = verDias();
        var kid = 30;
        var i = document.getElementById("tipo-quarto").value
		var j = document.getElementById("crianca").value
		
		if(dias > 0){
			if (quartos[i] > 0){
            kid = kid*j
    
			var total = (kid+quartos[i]) * dias;
            
			alert("Reserva confirmada! \n\n Valor total: \n  R$" + total + ",00");
			}
			else{
				alert("Entre com informações válidas!");
			}
		}
		else{
			alert("Entre com informações válidas!");
		}
	}
