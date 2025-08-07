function godzillaVsKOng (budget, extras, clothingPrice){
    let decor = 0.10 * budget;
    let totalClothing = extras * clothingPrice;

    if (extras > 150){
        totalClothing *= 0.90;
    }

    let totalCost = decor + totalClothing;

    if (totalCost > budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalCost - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalCost).toFixed(2)} leva left.`);
    }
}

godzillaVsKOng(9587.88, 222, 55.68);