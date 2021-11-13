

function Agregar(){
    var tituloAgregar = document.getElementById("tituloAgregar").value;
    var contenidoAgregar = document.getElementById("contenidoAgregar").value;
    
    console.log(tituloAgregar, " ", contenidoAgregar  );
    document.getElementById("tituloAgregar").value="";
    document.getElementById("contenidoAgregar").value="";

    //Retirar ventana ventanaAgregar
    var ventana = document.getElementById('ventanaAgregar');
    ventana.style = 'display: none;';
    ventana.className = "modal fade";
    //Retirar bloqueo
    var bloqueo = document.getElementsByClassName("modal-backdrop fade show")[0];
    bloqueo.className = "";
    
   
     
    
    
}



/*
<script>
console.log("sadas");
  
  function Agregar(){

var tituloAgregar = document.getElementById("tituloAgregar").value;
var contenidoAgregar = document.getElementById("contenidoAgregar").value;
console.log(tituloAgregar, " ", contenidoAgregar  );
document.getElementById("tituloAgregar").value="";
document.getElementById("contenidoAgregar").value="";

//Retirar ventana ventanaAgregar
var ventana = document.getElementById('ventanaAgregar');
ventana.style = 'display: none;';
ventana.className = "modal fade";
//Retirar bloqueo
var bloqueo = document.getElementsByClassName("modal-backdrop fade show")[0];
bloqueo.className = "";






}



<?php 



?>
</script>



*/