function sleepyTomCat(vacationDaysCount){
    let workDayPlayDurationMinutes = 63;
    let vacationDayPlayDurationMinutes = 127;

    let workDaysCount = 365 - vacationDaysCount;
    let realPlayTimeMinutes = (workDaysCount * workDayPlayDurationMinutes + vacationDaysCount * vacationDayPlayDurationMinutes);

    if (realPlayTimeMinutes > 30000){
        let normDifferenceAboveMinutes = realPlayTimeMinutes - 30000;
        let hours1 = Math.floor(normDifferenceAboveMinutes/60);
        let minutes1 = normDifferenceAboveMinutes % 60;

        console.log(`Tom will run away`);
        console.log(`${hours1} hours and ${minutes1} minutes more for play`);
    } else {
        let normDifferenceBelowMinutes = 30000 - realPlayTimeMinutes;
        let hours2 = Math.floor(normDifferenceBelowMinutes/60);
        let minutes2 = normDifferenceBelowMinutes % 60

        console.log(`Tom sleeps well`);
        console.log(`${hours2} hours and ${minutes2} minutes less for play`);
    }

}

sleepyTomCat(113);