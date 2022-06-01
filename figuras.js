console.group('Cuadrado');

const perimetroCuadrado=(lado) => lado*4;
const areaCuadrado = (lado) => lado**2;
console.groupEnd();

//Figura: Triangulo
console.group("Triangulo")
const perimetroTriangulo = (lado1, lado2, base) => Number(lado1+lado2+base);
const areaTriangulo= (base, altura) => (base*altura)/2;
console.groupEnd();

//Figura: Triangulo Isoceles
console.group("TrianguloIsoceles")
const perimetroTrianguloIsoceles =(lado1, base) => Number((lado1*2)+base);
const alturaTrianguloIsoceles = (lado1, base) => Number(Math.sqrt((lado1**2)-((base**2)/4)))
const areaTrianguloIsoceles = (lado1, base) => Number(base*(Math.sqrt((lado1**2)-((base**2)/4)))/2);

console.groupEnd();

//Figura: circulo
console.group("Circulo");
const diametroCirculo = (radio) => (radio*2);
const pi = Math.PI;
const perimetroCirculo = (radio) => (radio*2) * pi;
const areaCirculo= (radio) => (radio **2) * pi;
console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const  perimetro=perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const  area  =areaCuadrado(value);
    alert(area);
}
function calcularDiametroCirculo(){
    const input = document.getElementById('inputCirculo');
    const value = input.value;

    const  diametro =diametroCirculo(value);
    alert(diametro);
}
function calcularPerimetroCirculo(){
    const input = document.getElementById('inputCirculo');
    const value = input.value;

    const  perimetro=perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById('inputCirculo');
    const value = input.value;

    const  area  =areaCirculo(value);
    alert(area);
}
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById('inputLado1');
    const input2 = document.getElementById('inputLado2');
    const input3 = document.getElementById('inputBase');
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);

    const  perimetro  =perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const input1 = document.getElementById('inputBase');
    const input2= document.getElementById('inputAltura');
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);

    const  area  =areaTriangulo (value1, value2);
    alert(area);
}
function calcularPerimetroTrianguloIsoceles(){
    const input1 = document.getElementById('inputLado1Isoceles');
    const input3 = document.getElementById('inputBaseIsoceles');
    const value1 = Number(input1.value);
    const value3 = Number(input3.value);

    const  perimetro  =perimetroTrianguloIsoceles(value1, value3);
    alert (perimetro);
}
function calcularAlturaTrianguloIsoceles(){
    const input1 = document.getElementById('inputLado1Isoceles');
    const input3 = document.getElementById('inputBaseIsoceles');
    const value1 = Number(input1.value);
    const value3 = Number(input3.value);

    const  altura =alturaTrianguloIsoceles(value1, value3);
    alert (altura);
}
function calcularAreaTrianguloIsoceles(){
    const input1 = document.getElementById('inputLado1Isoceles');
    const input2 = document.getElementById('inputBaseIsoceles');
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);

    const  area  =areaTrianguloIsoceles (value1, value2);
    alert(area);
}

