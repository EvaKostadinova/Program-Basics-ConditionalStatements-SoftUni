function harvest(sqMetersVineyardX, grapesPerSqMeterY, wineLitersNeededZ, workersCount){
    let grapesTotal = sqMetersVineyardX * grapesPerSqMeterY;
    let wine = 0.40 * grapesTotal/2.5;

    if (wine >= wineLitersNeededZ){
        let wineExcess = wine - wineLitersNeededZ;
        let winePerPerson = wineExcess/workersCount;

        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(wineExcess)} liters left -> ${Math.ceil(winePerPerson)} liters per person.`);
        
    } else {
        let wineShortage = wineLitersNeededZ - wine;

        console.log(`It will be a tough winter! More ${Math.floor(wineShortage)} liters wine needed.`);
    }

}

harvest(1020, 1.5, 425, 4);