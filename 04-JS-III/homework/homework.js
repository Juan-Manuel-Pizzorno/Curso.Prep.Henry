// No cambies los nombres de las funciones.

const array=["juan","marcos","miguel","matias","federico","eze","guido","martin",true];
const arrayEnteros=[1,2,3,101,5,6,7,126,150,7,200];
const arrayMeses=["Enero","Noviembre","Marzo"];

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}

//console.log(devolverPrimerElemento(array));


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
 // let cantidadItems=array.length;
 // let ultimoItem=cantidadItems-1;

  return array[(array.length)-1];

}

//console.log(devolverUltimoElemento(array));


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

//console.log(obtenerLargoDelArray(array));


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let largoArray=array.length;
  for(let i=0;i<largoArray;i++){
    array[i]= array[i]+1;

  }

  return array;
}

//console.log(incrementarPorUno(arrayEnteros));


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  let largoArray=array.length;
  array[largoArray]=elemento;

  return array;
}

//console.log(agregarItemAlFinalDelArray(array, 45324324324));


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);

  return array;
}

//console.log(agregarItemAlComienzoDelArray(array, "JuanCarlosParada"));


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let largoArray=array.length;
  let texto="";

  for(let i=0;i<largoArray;i++){
    texto+=array[i]+" ";
  }
  return texto;
}

//console.log(dePalabrasAFrase(array));

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  let resultado=false;
  let largoArray=array.length;
  for(let i=0;i<=largoArray;i++){
    if(elemento===array[i]){
      resultado=true;

    }
  }

  return resultado;
}

//console.log(arrayContiene(array, true));


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let valor=0;
  let largoArray=numeros.length;
  for(let i=0;i<largoArray;i++){
    valor+=numeros[i];

  }

  return valor;
}

//console.log(agregarNumeros(arrayEnteros));



function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let promedio=0;
  let suma=0;
  let largoArray=resultadosTest.length;
  for(let i=0;i<largoArray;i++){
    suma+=resultadosTest[i];
  }
  promedio=suma/largoArray;
  return promedio;
}

//console.log(promedioResultadosTest(arrayEnteros));


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let numeroMasGrande=-99999;
  let largoArray=numeros.length;

  for(let i=0;i<largoArray;i++){
    if(numeros[i]>numeroMasGrande){
      numeroMasGrande=numeros[i];

    }
  }
  return numeroMasGrande;
}

//console.log(numeroMasGrande(arrayEnteros));


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
 // let arguments=0;

 // return arguments;
}

console.log(multiplicarArgumentos());


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let cantidadElementosMayorA18=0;
  let largoArray=arreglo.length;

  for(let i=0;i<largoArray;i++){
    if(arreglo[i]>18){
      cantidadElementosMayorA18++;
    }
  }

  return cantidadElementosMayorA18;
}

//console.log(cuentoElementos(arrayEnteros));


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  let díaDeSemana="Es día laboral";

  if(numeroDeDia==1 || numeroDeDia==7){
    díaDeSemana="Es fin de semana";
  }

  return díaDeSemana;
  
} 
//console.log(diaDeLaSemana(7) );


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let resultado=false;
  let denumeroAString=n.toString();

  if(denumeroAString[0]==="9"){
    resultado=true;

  }

  return resultado;
  
}
//console.log(empiezaConNueve(98));


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let largoArray=arreglo.length;
  let vertice=arreglo[0];
  let contador=0;

  for(let i=0;i<largoArray;i++){
    if(arreglo[i]===vertice){
      contador++;
    }

  }

  return contador===largoArray?true:false;
  
} 
//console.log(todosIguales(arrayEnteros) );


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let meses;
  let largoArray=array.length;
  let nuevoArray=[];
  let contador=0;

  for(let i=0;i<largoArray;i++){
    if(array[i]==="Enero" || array[i]==="Marzo" || array[i]==="Noviembre"){
      nuevoArray[contador]=array[i];

      contador++;
    }
  }

  return contador===3?nuevoArray:"No se encontraron los meses pedidos";
}

//console.log(mesesDelAño(arrayMeses) );


function mayorACien(array) { 
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevoArray=[];
  let indiceNuevoArray=0;
  let largoArray=array.length;

  for(let i=0;i<largoArray;i++){
    if(array[i]>100){
      nuevoArray[indiceNuevoArray]=array[i];
      indiceNuevoArray++;
    }
  }

  return nuevoArray;
}

//console.log(mayorACien(arrayEnteros));


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let i=0;
  let nuevoArray=[];

  while(i<10){
     nuevoArray[i]=numero[i]+2;
     if(nuevoArray[i]==i){
      break;
     }
     i++;
  }
  return nuevoArray[i]==i?"Se interrumpió la ejecución":nuevoArray;
}

//console.log(breakStatement(arrayEnteros));


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let i=0;
  let j=0;
  let nuevoArray=[];

  while(i<10){
    if(i!==4){
    nuevoArray[j]=numero[i]+2;
    j++;
    }
    
    i++;
  }

  return nuevoArray;
}

//console.log(continueStatement(arrayEnteros));


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};