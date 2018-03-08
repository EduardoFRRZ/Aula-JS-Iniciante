var x = prompt("Informe um número maior que 10");

try{
	if(x < 10){
		throw "Número menor que 10"
	}
	alert(x);
} catch(e){
	alert(e);
}

var Carro = {
	marca: "Nissan",
	modelo: "350Z",
	cor: "Prata",
	potencia: {
		cavalos: "350",
		Velociadade: "320 Km/h"
	}
};
alert(Carro.potencia.cavalos);

with(Carro.potencia){
	alert(cavalos);
	alert(Velociadade);
}