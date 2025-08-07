function pipesAndPool(volume, p1Debit, p2Debit, hoursOfAbsence){

    let waterFromP1 = p1Debit * hoursOfAbsence;
    let waterFromP2 = p2Debit * hoursOfAbsence;

    let waterTotal = waterFromP1 + waterFromP2;

    if (waterTotal <= volume){
        let percentFool = (waterTotal/volume) * 100;
        let percentP1 = (waterFromP1/waterTotal) * 100;
        let percentP2 = (waterFromP2/waterTotal) * 100;

        console.log(`The pool is ${percentFool.toFixed(2)}% full. Pipe 1: ${percentP1.toFixed(2)}%. Pipe 2: ${percentP2.toFixed(2)}%.`);
    } else {
        let waterExcess = waterTotal - volume;
        console.log(`For ${hoursOfAbsence.toFixed(2)} hours the pool overflows with ${waterExcess.toFixed(2)} liters.`);
    }

}

pipesAndPool (100, 100, 100, 2.5);