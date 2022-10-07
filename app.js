let oneEuroInJPY = 127.9
let oneEuroInUSD = 1.2
let oneEuroInGPB = 0.8


function fromEuroToDollar(valueInEuro) {
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

function fromDollarToYen(valueInEuro) {
    let valueInDollar = valueInEuro * 1.2;
    let valueInYen = Math.floor(valueInDollar * 127.9)
    return valueInYen
}

function fromYenToPound(valueInEuro) {
    let valueInYen = valueInEuro * oneEuroInJPY;
    let valueInGBP = Math.round((valueInYen/100) * oneEuroInGPB);
    return valueInGBP
}




const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(fromDollarToYen(3.5))

// just a console log for ourselves.


// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
