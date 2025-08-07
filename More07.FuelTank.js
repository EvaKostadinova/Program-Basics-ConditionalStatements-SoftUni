function fuelTank (text, realNumber){
    if (realNumber >= 25 && text === "Diesel"){
        console.log("You have enough diesel.");
    } else if (realNumber >= 25 && text === "Gasoline"){
        console.log("You have enough gasoline.");
    } else if (realNumber >= 25 && text === "Gas"){
        console.log("You have enough gas.");
    } else if (realNumber < 25 && text ==="Diesel"){
        console.log("Fill your tank with diesel!");
    } else if (realNumber < 25 && text === "Gasoline"){
        console.log("Fill your tank with gasoline!");
    } else if (realNumber < 25 && text === "Gas"){
        console.log("Fill your tank with gas!");
    } else {
        console.log("Invalid fuel!");
    }

}

fuelTank ("Kerosene", 200);