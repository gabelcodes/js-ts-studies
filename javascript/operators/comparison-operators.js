/*
> maior que 
< menor que 
>= maior ou igual que 
<= menor ou igual que 
== igualdade (valor) -> não é recomendado usar 
=== igualdade estrita -> (valor e tipo)
!= diferente -> não é recomendado 
!== diferente estrito -> (valor e tipo)
*/

const comp1 = 10 > 5;
console.log(comp1); // true 

const comp2 = 10 < 5;
console.log(comp2); // false

const comp3 = 5 >= 5;
console.log(comp3); // true

const comp4 = 3 <= 6;
console.log(comp4); // true

const comp5 = 10 == '10'; // não recomendavel, avalia apenas o valor 
console.log(comp5); // true

const comp6 = 10 === '10';
console.log(comp6); // false 

const comp7 = 6 != '6'; // não recomendavel, avalia apenas o valor 
console.log(comp7); // false

const comp8 = 6 !== '6'; // não recomendavel, avalia apenas o valor 
console.log(comp8); // true