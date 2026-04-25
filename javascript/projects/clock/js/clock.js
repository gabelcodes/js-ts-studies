function clock() {

    function padZero(value) {
        return value >= 10 ? value : `0${value}`;
    }

    function format() {
        const date = new Date();
        const week = date.getDay();
        const day = padZero(date.getDate());
        const month = date.getMonth();
        const year = date.getFullYear();
        const hour = padZero(date.getHours());
        const min = padZero(date.getMinutes());

        let weekDay;
        let monthName;

        switch(week) {
            case 0: weekDay = 'Sunday';    break;
            case 1: weekDay = 'Monday';    break; 
            case 2: weekDay = 'Tuesday';   break;
            case 3: weekDay = 'Wednesday'; break;
            case 4: weekDay = 'Thursday';  break;
            case 5: weekDay = 'Friday';    break;
            case 6: weekDay = 'Saturday';  break;
        }

        switch(month) {
            case 0:  monthName = 'January';   break;
            case 1:  monthName = 'February';  break; 
            case 2:  monthName = 'March';     break;
            case 3:  monthName = 'April';     break;
            case 4:  monthName = 'May';       break;
            case 5:  monthName = 'June';      break;
            case 6:  monthName = 'July';      break;
            case 7:  monthName = 'August';    break;
            case 8:  monthName = 'September'; break;
            case 9:  monthName = 'October';   break;
            case 10: monthName = 'November';  break;
            case 11: monthName = 'December';  break;
        }

        return `${weekDay}, ${monthName} ${day}, ${year} ${hour}:${min}`;
    }

    function createP() {
        const p = document.createElement('p');
        return p;
    }

    function setMessage(msg) {
        const calendar = document.querySelector(".calendario");
        calendar.innerHTML = '';
        const p = document.createElement('p');
        p.innerHTML = msg;
        calendar.appendChild(p)
    }

    const msg = format();
    setMessage(msg);

}

clock();
setInterval(clock, 1000);
