function calcularIMC(){
	var formulario = document.getElementById('formulario');
	var kilos = +formulario.kilos.value;
	var metros = +formulario.metros.value;
	var centimetros = +formulario.centimetros.value;

	var altura = (metros * 100 + centimetros) / 100;
	var imc = kilos / (altura * altura);

	formulario.imc.value = imc.toFixed(2); // toFixed(2) -> Duas casas decimais.

	if(imc < 20){
		alert("Abaixo do peso");
	}else if(imc > 20 && imc <= 25){
		alert("Peso ideal");
	}else if(imc > 25 && imc <= 35){
		alert("Obesidade moderada");
	}else if (imc > 35 && imc <= 40) {
		alert("Obesidade severa");
	}else if (imc > 40 && imc <= 50) {
		alert("Obesidade mórbida");
	}else{
		alert("Super obesidade");
	}
}