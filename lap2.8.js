function petShop (input){

let dogFoodNum = Number (input[0]);
let catFoodNum = Number (input[1]);
let dogFoodPrice = 2.5;
let catFoodPrice = 4;

let totalSum =(dogFoodNum*dogFoodPrice)+(catFoodNum*catFoodPrice);

console.log(`${totalSum} lv.`);

}


petShop ([" 5 ", " 4 "])
