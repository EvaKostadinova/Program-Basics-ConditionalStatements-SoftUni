function lunchBreak (seriesName, episodeDuration, breakDuration){
    const lunchTime = breakDuration / 8;
    const restTime = breakDuration / 4;

    const timeLeft = breakDuration - lunchTime - restTime;

    if (timeLeft >= episodeDuration){
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft - episodeDuration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(episodeDuration - timeLeft)} more minutes.`);
        
    }

}

lunchBreak ("Teen Wolf", 48, 60);