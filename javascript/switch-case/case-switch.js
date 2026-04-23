function getDateDayText(dateDay) {
    let dateDayText;

    switch(dateDay) {
        case 0:
            dateDayText = 'Domingo';
            return dateDayText;
        case 1:
            dateDayText = 'Segunda-feira';
            return dateDayText;
        case 2: 
            dateDayText = 'Terça-Feira';
            return dateDayText;
        case 3:
            dateDayText = 'Quarta-Feira';
            return dateDayText;
        case 4:
            dateDayText = 'Quinta-Feira';
            return dateDayText;
        case 5:
            dateDayText = 'Sexta-Feira';
            return dateDayText;
        case 6:
            dateDayText = 'Sábado'
            return dateDayText;
        default:
            dateDayText = '';
    }

}


const data = new Date('2026-04-23 14:01:34');
let dateDay = data.getDay();
const dateDayText = getDateDayText(dateDay)

console.log(dateDay, dateDayText);
