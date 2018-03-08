for (var i = 0; i <= 5; i++) {
	if(i == 3){
		alert("( Dentro do IF ) -> Valor de I = " + i);
	}else{
		alert("( Dentro do ELSE ) -> Valor de I = " + i);
	}
}

var numeros = new Array ("um", "dois", "tres");
for(var j = 0; j < numeros.lenght; j++){
	alert(numeros[j]);
}

for (j in numeros){
	alert(numeros[j]);
}

var Carro = {
	marca: "Nissan",
	modelo: "350Z",
	cor: "Prata",
	Velociadade: "320 Km/h"
}

for(var atr in Carro){
	alert(atr + " = "+ Carro[atr]);
}

