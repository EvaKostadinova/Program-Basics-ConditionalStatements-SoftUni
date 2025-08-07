function sumSeconds(secFirst, secSecond, secThird){
    let totalSeconds = secFirst + secSecond + secThird;

    let minutes = Math.floor(totalSeconds/60);
    let seconds = totalSeconds % 60;

    if (seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    }else{
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(14, 12, 10);