// Ако броя на видеокартите е по-голям от този на процесорите получава 15% отстъпка от крайната сметка. Важат следните цени:
// •	Видеокарта – 250 лв./бр.
// •	Процесор – 35% от цената на закупените видеокарти/бр.
// •	Рам памет – 10% от цената на закупените видеокарти/бр.

// Бюджет: 900 лв
// Сума за видеокарти: 2 * 250 = 500 лв.

// Цената за процесор: 35% от 500 = 175 лв. 
// Сума за процесори: 1 * 175 = 175 лв.

// Цената за рам памет: 10% от 500 = 50 лв.
// Сума за рам памет: 3 * 50 = 150 лв. 

// Обща сума: 500 + 175 + 150 = 825 лв.
// Броя на видеокартите е по-голям от броя на процесорите, затова той получава 15% отстъпка от крайната цена: 825 – 15% = 701.25 лв.
// 701.25 <= 900 
// => парите са му достатъчни 
// => остават 900 – 701.25 = 198.75 лв.


function shopping (budget, videocardsCount, proccessorsCount, ramCount){
    let videocardsSum = videocardsCount * 250;

    let proccessorsPrice = 0.35 * videocardsSum;
    proccessorsSum = proccessorsCount * proccessorsPrice;

    let ramPrice = 0.10 * videocardsSum;
    let ramSUm = ramCount * ramPrice;

    let totalSum = videocardsSum + proccessorsSum + ramSUm;

    if (videocardsCount > proccessorsCount){
        totalSum *= 0.85;
    }

    if (totalSum <= budget){
        console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`);
        
    }

}

shopping (920.45, 3, 1, 1);