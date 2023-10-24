// Ejercicio 1

var nombre= "Susana"
var apellido= "Sanchez"

console.log("Mi Nombre es: " + nombre)
console.log("Mi Apellido es: " + apellido)

// Ejercicio 2

var nota1
var nota2
var nota3
var promedio

nota1 = parseInt(prompt  ("Ingrese la nota 1 : "))
nota2 = parseFloat(prompt ("Ingrese la nota 2 : "))
nota3 = parseInt(prompt ("Ingrese la nota 3 : "))

promedio = (nota1 + nota2 + nota3) / 3 

promedioRedondeado = Math.round (promedio)

alert("El promedio de las notas es " + promedioRedondeado)

// Ejericio 3

var ladoa
var ladob
var ladoc
var perimetro

ladoa = parseInt(prompt  ("Ingrese el lado a : "))
ladob = parseFloat(prompt ("Ingrese el lado b: "))
ladoc = parseInt(prompt ("Ingrese el lado c: "))

perimetro = (ladoa + ladob + ladoc)

perimetroRedondeado = Math.round (perimetro)

alert("El perimetro del triangulo es " + perimetroRedondeado)

// Ejercicio 4

var ladoa
var ladob
var perimetro
var area

ladoa = parseInt(prompt  ("Ingrese el lado a : "))
ladob = parseFloat(prompt ("Ingrese el lado b: "))

perimetro = ((ladoa + ladob) * 2 )

perimetroRedondeado = Math.round (perimetro)

alert("El perimetro del cuadrado es " + perimetroRedondeado)

area = (ladoa * ladob)

areaRedondeada = Math.round(area)

alert("El area del cuadrado es " + areaRedondeada)

// Ejercicio 5
var longitud
var ancho
var perimetro
var area

longitud = parseInt(prompt  ("Ingrese la longitud del rectángulo : "))
ancho = parseFloat(prompt ("Ingrese el ancho del rectángulo: "))

perimetro = ((2 * longitud) +  (2 * ancho))

perimetroRedondeado = Math.round (perimetro)

alert("El perimetro del rectángulo es " + perimetroRedondeado)

area = (longitud * ancho)

areaRedondeada = Math.round(area)

alert("El area del rectangulo es " + areaRedondeada)

//Ejercicio 6

var numero1
var numero2
var resto

numero1 = parseInt(prompt  ("Ingrese el número 1 : "))
numero2 = parseInt(prompt ("Ingrese el número 2 "))

resto = ((numero1 % numero2))

restoRedondeado = Math.round (resto)

alert("El resto de la división es " + resto)

//Ejercicio 7

var nombre
var apellido
var mensaje

nombre = prompt("Ingrese el Nombre: ")
apellido = prompt ("Ingrese el Apellido: ")

mensaje = alert("Bienvenido " + " " + nombre + " " + apellido)

//Ejercicio 8

var radio
var perimetro
var area
const pi = 3.1416


radio = parseInt(prompt("Ingrese el radio del círculo:"))

area = ( pi * (radio * radio))

alert("El area del círculo es: " + area)

perimetro = ((2 * pi) * radio)

alert("El perimetro del círculo es: " + perimetro)

