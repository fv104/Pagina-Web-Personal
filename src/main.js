function Abrir_pestana(evt, nombre_pestana) {

    var i, contenido, pestanas;


    contenido = document.getElementsByClassName("contenido");
    for (i = 0; i < contenido.length; i++) {
        contenido[i].style.display = "none";
    }


    pestanas = document.getElementsByClassName("pestañas");
    for (i = 0; i < pestanas.length; i++) {
        pestanas[i].className = pestanas[i].className.replace(" active", "");
    }


    document.getElementById(nombre_pestana).style.display = "block";
    pestanas.currentTarget.className += " active";
}
document.getElementById("Inicio").click();
