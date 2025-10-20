function datos(){
n = document.getElementById("n").value
e = document.getElementById("e").value
 if (e >= 18){
   d = "Mayor de edad"
 } else{
    d = "Menor de Edad"
 }
alert("nombre: " + n + "\n edad: " + e + "\n Usted " + d)

document.getElementById("respuesta").value = "Nombres: " + n + " Edad: " + e + " Usted " + d
}