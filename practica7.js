// 7)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN ARRAY DE NUMEROS COMO ARGUMENTO Y QUE
// RETORNE LA SUMA DE LOS ELEMENTOS DEL ARRAY. IDEM A ESTE APARTADO CREAR OTRA
// FUNCIÓN QUE RETORNE EL PROMEDIO DE LOS ELEMENTOS DEL ARRAY.

var array = [1,2,3,4,5,6,7]
function ejercicio7(array){
    var resultado=0;
    for(let i=0;i<7;i++){
        resultado=resultado+array[i]
    }

	return console.log(resultado)
}

ejercicio7(array)