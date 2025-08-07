function fuelTankPt2 (fuelType, fuelLiters, hasClubCard){
    let pricePerLiter = 0

    // Базови цени за литър гориво
    if (fuelType === "Gasoline") {
        pricePerLiter = 2.22;
        if (hasClubCard === "Yes") {
            pricePerLiter -= 0.18;
        }
    } else if (fuelType === "Diesel") {
        pricePerLiter = 2.33;
        if (hasClubCard === "Yes") {
            pricePerLiter -= 0.12;
        }
    } else if (fuelType === "Gas") {
        pricePerLiter = 0.93;
        if (hasClubCard === "Yes") {
            pricePerLiter -= 0.08;
        }
    }

    // Изчисляване на началната цена (без отстъпка от обем)
    let totalPrice = fuelLiters * pricePerLiter;

    // Отстъпки според количеството гориво
    if (fuelLiters >= 20 && fuelLiters <= 25) {
        totalPrice *= 0.92; // 8% отстъпка
    } else if (fuelLiters > 25) {
        totalPrice *= 0.90; // 10% отстъпка
    }

    console.log(`${totalPrice.toFixed(2)} lv.`);
}

fuelTankPt2 ("Diesel", 19, "No");