function calculateSupply (age,amount) {
    var maxage = 100
    var NN = (maxage-age) * 365 * amount
    console.log(`You will need ${NN} to last you until the ripe old age of ${maxage}`);
}

calculateSupply(22,5.5)