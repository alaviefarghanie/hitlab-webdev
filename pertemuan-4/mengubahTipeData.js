const breakCode = '--------------------------';

//Mengubah ke String
const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strNumber);

console.log(strBoolean);

typeof strBoolean;

console.log(breakCode);
//Mengubah ke Number

//Str to Float
const cm = '20.55cm';
const px = '64.23px';

const floatFromCM = parseFloat(cm);
const floatFromPX = parseFloat(px);

console.log(floatFromCM); // output: 20.55
console.log(floatFromPX); // output: 64.23

console.log(breakCode);
//Str to Int

const cm1 = '20cm';
const px1 = '64px';

const intFromCM = parseInt(cm1);
const intFromPX = parseInt(px1);

console.log(intFromCM); // output: 20
console.log(intFromPX); // output: 64

console.log(breakCode);
//Konversi Implisit Int
const age = 21;
const message = 'Ilham tahun ini berumur ' + age;

console.log(message);


console.log(breakCode);

//Konversi Implisit Bool
const bool = false;
const result = 1 + bool;

console.log (result);
