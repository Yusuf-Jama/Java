let cash = 40
let price = 30 
let difference = cash - price

if (cash > price) {
    console.log(`you paid extra here's your change, $${difference}`)
}

else if (cash === price) {
    console.log("you paid the exact price, have a nice day")
}

else {
    console.log(`not enough money, you still owe ${price - cash} dollars`)
}