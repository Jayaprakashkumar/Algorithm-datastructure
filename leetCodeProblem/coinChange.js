function coinChangeCombination(coins, target) {
    let dpArray = new Array(target + 1).fill(Infinity);

    dpArray[0] = 0;

    for (let coin of coins) {
        for (let i = 0; i < dpArray.length; i++) {
            if(coin <= i){
                dpArray[i] = Math.min(dpArray[i], 1+dpArray[i-coin]);
             
            }
        }
    }
    console.log(dpArray);

    return dpArray[target] === Infinity ? -1: dpArray[target];
}

console.log(coinChangeCombination([1, 2, 5,11], 11))