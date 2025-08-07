// Пъзел - 2.60 лв.
// · Говореща кукла - 3 лв.
// · Плюшено мече - 4.10 лв.
// · Миньон - 8.20 лв.
// · Камионче - 2 лв.

function toyShop(priceVacation, puzzles, dolls, bears, minions, trucks){
    let sumToys = puzzles * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2;
    let countToys = puzzles + dolls + bears + minions + trucks;

    if (countToys >= 50){
        sumToys *= 0.75;
    }

    let rent = 0.10 * sumToys;
    let profit = sumToys - rent;

    if (profit >= priceVacation){
        console.log(`Yes! ${(profit - priceVacation).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(priceVacation - profit).toFixed(2)} lv needed.`);
    }

}

toyShop(320, 8, 2, 5, 5, 1);