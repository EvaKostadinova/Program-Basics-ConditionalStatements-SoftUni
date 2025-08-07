function pets (daysCount, foodInKilograms, dogFoodInKilograms, catFoodInKilograms, turtleFoodInGrams){
    let dogFoodNeeded = daysCount * dogFoodInKilograms;
    let catFoodNeeded = daysCount * catFoodInKilograms;
    let turtleFoodNeeded = daysCount * (turtleFoodInGrams/1000);

    let totalFoodNeededKilograms = dogFoodNeeded + catFoodNeeded + turtleFoodNeeded;

    if (foodInKilograms >= totalFoodNeededKilograms){
        let foodExcess = foodInKilograms - totalFoodNeededKilograms;
        console.log(`${Math.floor(foodExcess)} kilos of food left.`);
    } else {
        let foodShortage = totalFoodNeededKilograms - foodInKilograms;
        console.log(`${Math.ceil(foodShortage)} more kilos of food are needed.`);
    }

}

pets (5, 10, 2.1, 0.8, 321);