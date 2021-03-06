function validar(){
	let con= document.getElementById("pass").value;
	let conR= document.getElementById("passR").value;
	if (con.length >= 6) {
		if(con==conR){
			document.getElementById("login").style.display = "none";
			return false;
		}else{
			alert("Error, la contraseña no coincide");
			return false;
		}
	}else{
		alert("Error, la contraseña debe tener minimo 8 caracteres");
		return false;
	}
		
}