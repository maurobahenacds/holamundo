//Mi primer archivo de javascript con funciones
//Esta linea nos escribe Hola mundo! en el navegador
document.write("<h1>Hola mundo!</h1>");

//Para crear una variable es con la palabra var o let
let nombre="Mauro";
var Edad=30;

document.write("<p> Lorem ipsum dolor sit, amet, consectetur adipisicing elit. "+ 
	"Nesciunt voluptates nisi nam mollitia eligendi eveniet vero"+ 
	"fugiat, quibusdam, consequuntur voluptas facere labore atque"+ 
	"quas est odit quam ratione illum laboriosam.</p>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write(nombre + " tu edad es: " + Edad);
document.write("<br>");
let num1=9;
var num2=8;
document.write(num1+num2);
document.write("<br>");
document.write("9"+"8");

//Tipos de datos en JS
//Númerico
let numero=20;

//decimal
let numero2=0.0;

//Cadena String 
let cadena="Los mejores programadores son del 3ro A";

//document.write(numero);
//document.write(numero2);
//document.write(cadena);

//tipos de dato arreglos
var amigos=["Juan","Pedro","Pablo"];
//document.write(amigos);

//Objetos
let objetos={color:"azul", altura:150, ancho:50};
//document.write(objetos);

//No definir variables
let nombre2;
document.write(nombre2);

//Valores invalidos
var x=10;
var y="Hola mundo";
document.write(x*y);


