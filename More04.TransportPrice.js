function transportPrice (kilometersN, dayOrNight){
    if (kilometersN < 20 && dayOrNight === "day"){
        let priceDayTaxi = 0.70 + kilometersN * 0.79;

        console.log(priceDayTaxi.toFixed(2));

    } else if (kilometersN < 20 && dayOrNight === "night"){
        let priceNightTaxi = 0.70 + kilometersN * 0.90;

        console.log(priceNightTaxi.toFixed(2));

    } else if (kilometersN >= 20 && kilometersN <= 99){
        let priceBus = kilometersN * 0.09;

        console.log(priceBus.toFixed(2));
        
    } else if (kilometersN >= 100){
        let priceTrain = kilometersN * 0.06;

        console.log(priceTrain.toFixed(2));
        
    }

}

transportPrice (180, "night");