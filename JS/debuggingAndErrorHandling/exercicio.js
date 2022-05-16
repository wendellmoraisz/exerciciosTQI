// Crie uma função que recebe um array e um número
// Realize as seguintes validações
// Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
// Se o array não for do tipo 'object', lance um erro do tipo TypeError
// Se o número não for do tipo 'number', lance um erro do tipo TypeError
// Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
// Utilize a declaração try...catch
// Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof

function verifyArray(arr, num) {
    try {
        if (!arr || !num) throw new ReferenceError('Insira todos os parâmetros!');
        if (typeof arr !== 'object') throw new TypeError('O array precisa ser do tipo object!');
        if (typeof num !== 'number') throw new TypeError('O número inserido precisa ser do tipo number!');
        if (arr.length !== num) throw new RangeError('Tamanho inválido!');

        return arr;
    } catch (e) {
        if(e instanceof ReferenceError) {
            console.log('Este é um ReferenceError');
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log('Este é um TypeError');
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log('Este é um RangeError');
            console.log(e.message);
        } else {
            console.log('Tipo de erro não encontrado!');
        };
    };

};

verifyArray([1]);
verifyArray([2, 3], '2');
verifyArray([2, 1], 3);
console.log(verifyArray([2, 1], 2));