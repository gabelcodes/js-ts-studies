// atribuição via destruturação arry 

const numbers = [34, 47, 83, 124, 345];
const [num1, num2, ...rest] = numbers;
console.log(num1, num2);
console.log(rest)



const number = [[1, 2, 3], [4, 5, 6], [7, 8 , 9]];
const [list1, list2, lis3] = number;
console.log(list2[1]);


// atribuição via destruturação objetos 

const peoples = {
    //userName: 'Gerfesson',
    surName: 'Abel',
    age: 21,
    address: {
        road: 'Av Brasil',
        numberAddress: 320,
    }
};

const {userName: teste1 = 'Not Undefined', surName} = peoples;
console.log(teste1, surName);


const {address: {road, numberAddress} } = peoples;
console.log(road, numberAddress);

