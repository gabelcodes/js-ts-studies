/*
0-11 -> bom dia
12-17 -> boa tarde
18-23 -> boa noite

if pode ser usado sozinho
else precisa de if 
else if precisa de if e de else
pode ter varios if na checagem
*/

const time = 19

if (time >= 0 & time <= 11) {
    console.log('Good morning.');

} else if (time >= 12 & time <= 17) {
    console.log('Good afternoon.');

} else {
    console.log('Good Night.')
}