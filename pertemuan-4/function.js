console.log('---------')
function convertCelsiusToFahrenheit(temperature) {
    const temperatureInFahrenheit = (9 / 5) * temperature + 32;
    
    console.log('Hasil konversi:', temperatureInFahrenheit);
}

//   const temperatureInCelsius = 90;

// Hanya menampilkan nilai function
console.log(convertCelsiusToFahrenheit);
// Output => [Function: convertCelciusToFahrenheit]

// Akan menjalankan isi function
convertCelsiusToFahrenheit(20);
// Output => Hasil konversi: 194

console.log('---------')

// function Salam
function salamUntuk(nama){
    console.log('Halooo ' + nama + ' Selamat Datang diWebsite Kami')
}



//   console.log(salamUntuk);
console.log(salamUntuk);
salamUntuk("Alavie");

console.log('---------')
// function perhitungan luas persegi
function hitungLuasPersegi(sisi){
    console.log( "Luas persegi = ", sisi * sisi );
}
console.log(hitungLuasPersegi)
hitungLuasPersegi(9);
hitungLuasPersegi(17);

console.log('---------')
// Membuat Function untuk Mengubah Suhu dari Celcius ke Fahrenheit
function convertToFahrenheit(suhu){
    console.log( 'Suhu Celcius to Fahrenheit = ', (suhu * 9/5) + 32);
}
console.log(convertCelsiusToFahrenheit)
convertToFahrenheit(99);
convertToFahrenheit(500);

console.log('---------')
//Mengecek angka ganjil atau genap
function cekGanjilGenap(angka){
    if (angka % 2 == 0){
        console.log(angka + ' Merupakan angka genap')
    } else {
        console.log(angka + " Merupakan angka ganjil")
    }
}
console.log(cekGanjilGenap)
cekGanjilGenap(99);
cekGanjilGenap(100);

console.log('---------')
// Luas Segitiga
function LuasSegitiga(a, b){
    console.log("Luas Segitiga = ", (a * b)/2);
}
console.log(LuasSegitiga(4,8));
// LuasSegitiga(281, 991);
