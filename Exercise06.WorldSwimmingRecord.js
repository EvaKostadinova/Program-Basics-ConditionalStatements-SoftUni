function worldSwimmingRecord (recordInSeconds, distanceInMeters, timeInSecondsForOneMeter) {
    let delay = (Math.floor(distanceInMeters/15) * 12.5);
    let swimmingTime = distanceInMeters * timeInSecondsForOneMeter;

    let totalTime = swimmingTime + delay;

    if (totalTime < recordInSeconds){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - recordInSeconds).toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord (10464, 1500, 20);