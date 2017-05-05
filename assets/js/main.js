function Squad(nombre,apellido,edad,hobbie1,hobbie2,hobbie3){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbie1 = hobbie1;
	this.hobbie2 = hobbie2;
	this.hobbie3 = hobbie3;
}

var gilia = new Squad("Gilia","Góngora",28, "Escuchar música", "Comer", "Dormir");
var trini = new Squad("Trinidad","Fuentes", 26, "Video Juegos", "Apreciación de pugs", "Dormir");
var diana = new Squad("Diana", "Monsalve", 29, "Hacer scratch", "Música", "Negocios");
var vale = new Squad("Valentina", "Toledo", 20, "Jugar fútbol", "Música", "Actividades al aire libre");
var kari = new Squad("Karina", "Palacios", 24, "Ver Series", "Compartir con amigos", "Leer");
var maribel = new Squad("Maribel", "Diaz", 30, "Tomar café con muffins", "Guardar silencio", "Escribir");
var pez = new Squad("María Paz", "Rojas", 26, "Música", "Comer", "Hablar inglés");
var val = new Squad("Valentina", "López", 25, "Tarot", "Idiomas", "Películas mudas");


var revealGilia = document.getElementById("gilia");
var revealTrini = document.getElementById("trini");
var revealDiana = document.getElementById("diana");
var revealVale = document.getElementById("vale");
var revealKari = document.getElementById("kari");
var revealMaribel = document.getElementById("maribel");
var revealPez = document.getElementById("pez");
var revealVal = document.getElementById("val");

revealGilia.innerHTML = "<strong>Nombre: </strong>" + gilia.nombre + " " + gilia.apellido + "<br><strong>Edad: </strong>" + gilia.edad + "<br><strong>Hobbies: </strong><li>" + gilia.hobbie1 +"</li><li>" + gilia.hobbie2 +"</li><li>"+ gilia.hobbie3+"</li>";
revealTrini.innerHTML = "<strong>Nombre: </strong>" + trini.nombre + " " + trini.apellido + "<br><strong>Edad: </strong>" + trini.edad + "<br><strong>Hobbies: </strong><li>" + trini.hobbie1 +"</li><li>" + trini.hobbie2 +"</li><li>"+ trini.hobbie3+"</li>";
revealDiana.innerHTML = "<strong>Nombre: </strong>" + diana.nombre + " " + diana.apellido + "<br><strong>Edad: </strong>" + diana.edad + "<br><strong>Hobbies: </strong><li>" + diana.hobbie1 +"</li><li>" + diana.hobbie2 +"</li><li>"+ diana.hobbie3+"</li>";
revealVale.innerHTML = "<strong>Nombre: </strong>" + vale.nombre + " " + vale.apellido + "<br><strong>Edad: </strong>" + vale.edad + "<br><strong>Hobbies: </strong><li>" + vale.hobbie1 +"</li><li>" + vale.hobbie2 +"</li><li>"+ vale.hobbie3+"</li>";
revealKari.innerHTML = "<strong>Nombre: </strong>" + kari.nombre + " " + kari.apellido + "<br><strong>Edad: </strong>" + kari.edad + "<br><strong>Hobbies: </strong><li>" + kari.hobbie1 +"</li><li>" + kari.hobbie2 +"</li><li>"+ kari.hobbie3+"</li>";
revealMaribel.innerHTML = "<strong>Nombre: </strong>" + maribel.nombre + " " + maribel.apellido + "<br><strong>Edad: </strong>" + maribel.edad + "<br><strong>Hobbies: </strong><li>" + maribel.hobbie1 +"</li><li>" + maribel.hobbie2 +"</li><li>"+ maribel.hobbie3+"</li>";
revealPez.innerHTML = "<strong>Nombre: </strong>" + pez.nombre + " " + pez.apellido + "<br><strong>Edad: </strong>" + pez.edad + "<br><strong>Hobbies: </strong><li>" + pez.hobbie1 +"</li><li>" + pez.hobbie2 +"</li><li>"+ pez.hobbie3+"</li>";
revealVal.innerHTML = "<strong>Nombre: </strong>" + val.nombre + " " + val.apellido + "<br><strong>Edad: </strong>" + val.edad + "<br><strong>Hobbies: </strong><li>" + val.hobbie1 +"</li><li>" + val.hobbie2 +"</li><li>"+ val.hobbie3+"</li>";