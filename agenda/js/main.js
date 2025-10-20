function datos(){
d = document.getElementById("documento").value
n = document.getElementById("nombres").value
t = prompt("digite telefono") 
c = prompt("digite correo")   
alert("documento: " + d + "\n nombres: " + n + "\n telefono: " + t + "\n correo: " + c )

document.getElementById("respuesta").value = "documento: " + d + "\n nombres: " + n + "\n telefono: " + t + "\n correo: " + c
}