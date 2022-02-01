function farenheitToCelcius(farenheit) {

    // (50°F − 32) × 5/9 = 10°C

    let temparature = farenheit;

    var num = 5 / 9;
    var formula = (temparature - 32) * num

    return formula;
}

var result = farenheitToCelcius(30);
console.log('30 degree farenheirt =', result, 'degree celcius');