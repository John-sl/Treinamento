console.log('Just a test')
num1 = 1522.32;
num2 = 3.65;
res1 = num1 + num2;

console.log(`Seu salario este mês é de ${res1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)