// 5)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO, ORDENAR ALFABÉTICAMENTE
// Y/O DE MAYOR A MENOR Y RETORNAR EL RESULTADO
const array=[7,6,5,4,3,2,1]
function ordenarArray(array){
    
   var array1=array;
   var n, i, k, aux;
   n = array.length;
   for (k = 1; k < n; k++) {
    for (i = 0; i < (n - k); i++) {
        if (array1[i] > array1[i + 1]) {
            aux = array1[i];
            array1[i] = array1[i + 1];
            array1[i + 1] = aux;
        }
    }
}

    return console.log(array1);

}


ordenarArray(array)