function Squad(nombre,apellido,edad,hobbie1,hobbie2,hobbie3){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
}

var gilia = new Squad("Gilia","Góngora",28, "Escuchar música", "comer", "dormir");
var trini = new Squad("Trinidad","Fuentes", 26, "Video Juegos", "apreciación de pugs", "dormir");
var diana = new Squad("Diana", "Monsalve", 29, "Hacer scratch", "música", "negocios");
var vale = new Squad("Valentina", "Toledo", 20, "Jugar fútbol", "música", "actividades al aire libre");
var kari = new Squad("Karina", "Palacios", 24, "Ver Series", "compartir con amigos", "leer");
var maribel = new Squad("Maribel", "Diaz", 30, "Tomar café con muffins", "guardar silencio", "escribir");
var pez = new Squad("María Paz", "Rojas", 26, "Música", "comer", "hablar inglés");
var val = new Squad("Valentina", "López", 25, "Tarot", "Idiomas", "Películas mudas");


var revealGilia = document.getElementById("gilia");
var revealTrini = document.getElementById("trini");
var revealDiana = document.getElementById("diana");
var revealVale = document.getElementById("vale");
var revealKari = document.getElementById("kari");
var revealMaribel = document.getElementById("maribel");
var revealPez = document.getElementById("pez");
var revealVal = document.getElementById("val");