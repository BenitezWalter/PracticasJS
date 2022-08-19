// 4)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO Y SE EXTRAIGA LOS
// ULTIMOS 3 ELEMENTOS. RETORNAR EL RESULTADO COMO UN NUEVO ARRAY.
const array=[1,2,3,4,5,6,7]
function Tomararray(array){
    var array1=[]
    for(let i=1;i<4;i++){
        array1.push(array[array.length - i])
    }
	return console.log(array1);
}

Tomararray(array);