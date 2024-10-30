function operasiPertambahan(a,b){
    return a + b;
}
let hasilPenjumlahan = operasiPertambahan(5,3);
console.log(hasilPenjumlahan);

console.log("----------")
// Perhitungan Diskon
function hitungDiscount(harga, discount){
    return harga - (harga * (discount/100));
}
let hargaAkhir = hitungDiscount(100000, 90)
let hargaAwal = hargaAkhir + 90000;
console.log('Harga Setelah Discount adalah ', hargaAkhir);
console.log(hargaAwal);
//Perhitungan Conversi Fahrenheit Return


function LuasSegitiga(a, b){
    return ((a * b)/2);
}
let luasSegitiga = LuasSegitiga(20,2);
console.log ("luasSegitiga adalah ", luasSegitiga); 

