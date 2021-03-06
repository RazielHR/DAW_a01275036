function cuadrados(){
	document.write("<table>");
	let num= prompt("Introduce un numero para obtener cuadrados y cubos: ");
	for (let i = 1; i<=num; i++) {
		document.write("<tr><td>" + i + "</td><td>" + i*i + "</td> <td>" + i*i*i + "</td></tr>");
	}
	document.write("</table>");
}

function suma(){
	let inicioM= new Date().getMinutes();
	let inicioS= new Date().getSeconds();
	let num = Math.floor((Math.random() * 10));
	let num2= Math.floor((Math.random() * 10));
	let res=num + num2;	
	let numero= prompt("Pon el resultado de la suma de los numeros: "+num+ "+"+num2);

	if(numero == res){
		alert("Respuesta correcta");
		let finM= new Date().getMinutes();
		let finS= new Date().getSeconds();
		let finTM= finM - inicioM; 
		let finTS= finS - inicioS; 
		document.write("Tiempo: <br> Minutos: " + finTM + " Segundos: " + finTS);
	}else{ 
		alert("Respuesta incorrecta");
		let finM= new Date().getMinutes();
		let finS= new Date().getSeconds();
		let finTM= finM - inicioM; 
		let finTS= finS - inicioS; 
		document.write("Tiempo: <br> Minutos: " + finTM + " Segundos: " + finTS);
	}
}

function arreglo() {
	document.write("<br><br>");

	let arr = [-1,-2,-3,0,0,0,5,4,3,2,1];
	let lt = 0, eq = 0, gt = 0;
	for (let i = 0; i < 11; i++) {
		if (arr[i] == 0){
			eq++;
		}else if (arr[i] < 0){
			lt++;
		}else{
			gt++;
		}
	}
	document.write("El arreglo: <br>" + arr + "<br> Contiene: ");
	document.write("<br>Numeros iguales a 0: "+ eq +"<br> Menores a 0: "+ lt + "<br> Mayores a 0: "+ gt);
}

function matriz(){
	document.write("<br><br>");
	let matriz=[[3,2,3],[5,5,6],[7,9,9]];
	document.write("La matriz es: <br>");
	for(let i=0; i<3; i++){
		for(let j=0; j<3; j++){
			document.write(matriz[i][j]);
		}
		document.write("<br>");
	}

	for(let i=0; i<3; i++){
		let suma=0;
		for(let j=0; j<3; j++){
			suma +=matriz[i][j];
		}
		document.write("<br>El promedio del renglon "+ i + " = " + (suma/3).toFixed(2));
	}
}

function inverso() {
	document.write("<br><br>");
	let num= prompt("Escribe un numero a invertir: ");
	let invert=0, aux=num;
	while(aux>0){
		invert = invert * 10 + (aux % 10);
		aux = Math.floor(aux / 10);
	}
	document.write("El numero que introdujo: "+num+"<br>");
	document.write("El numero invertido: "+invert+"<br>");
}

cuadrados();
setTimeout(suma, 4000);
setTimeout(arreglo, 8000);
setTimeout(matriz, 12000);
setTimeout(inverso, 16000);