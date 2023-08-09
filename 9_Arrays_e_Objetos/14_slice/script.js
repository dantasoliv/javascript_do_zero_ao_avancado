let nums = [0,1,2,3,4,5,6,7,8,9];

console.log(nums.slice(4,5)); // O método slice() retorna uma nova Array com o valor o primenro índice informado até o penultimo valor do índice informado
console.log(nums.slice(4,6));

console.log(nums.slice(2)); // Se for passado por parâmetro apenas um índice o método slice() vai retrornar uma Array com todos os valores da Array até o final da mesma.

console.log(nums.slice(-2)); // Se colocar números negativos no parâmetro o método slice() retorna os valores dos índes de tras para frente do Array

console.log(nums.slice(3,-2)); // No método slice() odemos passar o primeiro parâmetro o inidice para iniciar a nova Array e o segundo parâmetro um valor negativo que vai remover os ultimos índices