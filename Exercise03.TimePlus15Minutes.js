function timePlusFifteenMinutes (hour, minutes){

    let totalMinutes = hour * 60 + minutes + 15;

    let finalHour = Math.floor(totalMinutes / 60) % 24;
    let finalMinutes = totalMinutes % 60;

    if (finalMinutes < 10){
        console.log(`${finalHour}:0${finalMinutes}`);
    }else{
        console.log(`${finalHour}:${finalMinutes}`);
    }
}

timePlusFifteenMinutes (12, 49);