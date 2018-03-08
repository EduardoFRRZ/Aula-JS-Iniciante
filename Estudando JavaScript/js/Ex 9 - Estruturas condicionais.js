function idade(){
	var pegaIdade = document.getElementById('verificaIdade');
	var idade = pegaIdade.idade.value;
	 console.log(idade);
	if (idade < 18) {
	alert("Menor de idade");
	}else{
		alert("Maior de idade");
	}
}