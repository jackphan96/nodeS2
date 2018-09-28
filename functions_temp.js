function celsiusToFahrenheit (celsius) {
    Fehrenheit = celsius * 1.8 + 32
    console.log(`${celsius}°C is ${Fehrenheit}°F`);
}

function fehrenheitToCelsius(f) {
    cel =  (f-32) / 1.8
    console.log(`${f}°F is ${cel}°C`);
    
}

celsiusToFahrenheit(40)
fehrenheitToCelsius(33)
