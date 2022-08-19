// 3)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 6 VALORES (a,b,c,d,e,f) COMO ARGUMENTOS
// - a y b SE SUMAN
// - EL RESULTADO DE LA SUMA SE RESTA CON c
// - LUEGO SE MULTIPLICA POR d Y SE DIVIDE POR e
// - FINALMENTE SE HACE LA POTENCIA CON EL EXPONENTE f.
// - SE RETORNA EL RESULTADO
// - TIP: RECORDAR EL ORDEN

function operaciones(a,b,c,d,e,f){
    var resultado=Math.pow(((((a+b)-c)*d)/e),f);
	return console.log(resultado);
}

operaciones(2,2,2,2,2,2);