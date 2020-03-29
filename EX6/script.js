window.onload = function(){
		
	document.getElementById("memoria").innerHTML = navigator.deviceMemory;	
	
	let conexao = document.getElementById("conexão");
	if (navigator.onLine ? conexao.innerHTML = "conectado" : conexao.innerHTML = "Desconectado");
	
	document.getElementById("linguagem").innerHTML= navigator.language;
	document.getElementById("userAgent").innerHTML = navigator.userAgent;	
	
};