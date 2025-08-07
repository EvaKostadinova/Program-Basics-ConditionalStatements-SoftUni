// •	Магнолии – 3.25 лева
// •	Зюмбюли – 4 лева
// •	Рози – 3.50 лева
// •	Кактуси – 8 лева
// От общата сума, Мария трябва да плати 5% данъци.

function flowerShop (magnoliasCount, zyumbyuliCount, rosesCount, cactusesCount, giftPrice){
    let orderSum = magnoliasCount * 3.25 + zyumbyuliCount * 4 + rosesCount * 3.50 + cactusesCount * 8;
    let tax = 0.05 * orderSum;

    let finalSum = orderSum - tax;

    if (finalSum >= giftPrice){
        console.log(`She is left with ${Math.floor(finalSum - giftPrice)} leva.`);  
    } else {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - finalSum)} leva.`);
    }
}

flowerShop (15, 7, 5, 10, 100);