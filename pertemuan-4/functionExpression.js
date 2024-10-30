const greetWorld = function (message){
    console.log('hello, world!' );
}
console.log(greetWorld);
greetWorld()

//Function Exxpression Return
const convertToFahrenheit = function (temperature){
 return (9/5) * temperature + 32;   
}

const temperatureInFahrenheit = convertToFahrenheit(90);
console.log(convertToFahrenheit)
console.log(temperatureInFahrenheit)