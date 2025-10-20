
function datos(){
    u= document.getElementById("u").value
    c = document.getElementById("c").value
    user = "pepito"
    contra = "12345"
    if (u == user && c == contra){
        document.getElementById("respuesta").value="bienvenido al sistema"
        alert("bienvenido al sistema")
 
    }else{
        document.getElementById("respuesta").value="no esta autorizado al sistema" 
        alert("no esta autorizado al sistema" )
    }   
   
    
    }
