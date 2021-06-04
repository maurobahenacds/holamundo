//Funcion para sumar dos numeros

function Suma(numero1,numero2){
	let n1,n2,sum;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	sum=n1+n2;
	//alert("La suma es: " + sum);
	document.getElementById("resultadoSuma").innerHTML="<h1>La suma es: " + sum +"</h1>";

}

function Resta(numero1,numero2){
	let n1,n2,sum;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	sum=n1-n2;
	alert("La Resta es: " + sum)
}

function Multi(numero1,numero2){
	let n1,n2,sum;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	sum=n1*n2;
	alert("La Multiplicación es: " + sum)
}

function Divi(numero1,numero2){
	let n1,n2,sum;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	sum=n1/n2;
	alert("La División es: " + sum)
}

//Crear funciones en js

//function calcularSuma(){
//	alert("Hola bienvenido!");
	//document.write("Hola");
//}

/*
let nombre=prompt("Ingresa tu nombre: ");
let edad=prompt("Ingresa tu edad: ");
document.write("Hola " + nombre);
document.write("<br> Tu edad es: " + edad);

let num1=parseInt(prompt("Ingresa el primer numero: "));
let num2=parseInt(prompt("Ingresa el segundo numero: "));

let suma=num1+num2;
document.write("La suma es: " + suma);

*/


