function celciusToFarenheit(celcius) {
    // (0°C × 9/5) + 32 = 32°F
    let temparature = celcius;
    var firstStep = temparature * 9 / 5;
    var formula = firstStep + 32;
    return formula;
}
var result = celciusToFarenheit(30);
console.log('30 degree celcius = ', result);