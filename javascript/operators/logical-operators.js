/*
&& -> E -> AND -> todas as expressões devem ser verdadeiras para retornar true 
|| -> OU -> OR -> pelo menos uma expressão deve ser verdadeira 
! -> NÃO -> NOT -> inverte uma expressão
*/

// expressão AND
const expressaoAnd1 = true && true && true;
console.log(expressaoAnd1); // retorna true

const expressaoAnd2 = true && false && true;
console.log(expressaoAnd2); // retorna false

// expressão OR
const expressaoOr3 = true || true;
console.log(expressaoOr3); // retorna true

const expressaoOr4 = true || false 
console.log(expressaoOr4) // retorna true 

// expressão not
console.log(!true) // false
console.log(!false) // true
console.log(!!true); // true
console.log(!!false) // false


// exercicio 
const username = 'gabelcodes';
const userPassword = '12345';

const login = username=== 'gabelcodes' && userPassword === '12345' ? 'Acesso permitido' : 'Usuário ou senha inválidos'
console.log(login)

